/* ============================================================
   grepJobs — app logic (no build step, no dependencies)
   Routes:  #/            directory
            #/company/id  detail page
            #/compare     comparison view
   ============================================================ */

const $app = document.getElementById("app");
const $tray = document.getElementById("compare-tray");
const $navCompare = document.getElementById("nav-compare");

const state = {
  query: "",
  type: null,
  area: null,
  tech: null,
  compare: (
    new URLSearchParams(location.search).get("compare")?.split(",") ||
    JSON.parse(localStorage.getItem("sbd-compare") || "[]")
  ).filter((id) => COMPANIES.some((c) => c.id === id)).slice(0, 3),
};

const CANON_LEVELS = {
  se1: "Entry",
  se2: "Mid-level",
  senior: "Senior",
  lead: "Lead / Staff",
  em: "Manager",
};

/* ---------- helpers ---------- */

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

const fmtBDT = (n) => "৳" + n.toLocaleString("en-IN");

/* Compact BDT: 45000 → 45k · 150000 → 1.5L (lakh) */
const compact = (n) =>
  n >= 100000 ? (n / 100000).toFixed(n % 100000 === 0 ? 0 : 1) + "L" : Math.round(n / 1000) + "k";

const initials = (name) => {
  const words = name.split(/\s+/).map((w) => w.replace(/[^A-Za-z0-9]/g, "")).filter(Boolean);
  return words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2);
};

const company = (id) => COMPANIES.find((c) => c.id === id);

const bandBounds = (c) =>
  c.levels.length
    ? {
        min: Math.min(...c.levels.map((l) => l.band[0])),
        max: Math.max(...c.levels.map((l) => l.band[1])),
      }
    : null;

/* Round a scale ceiling up to a clean number (nearest 50k) */
const niceCeil = (n) => Math.ceil(n / 50000) * 50000;

const badge = (verified) =>
  verified
    ? `<span class="verified-badge" title="Figures confirmed with the company">✓ Verified</span>`
    : `<span class="est-badge" title="Community-reported figures compiled from Glassdoor, levels.fyi and public job posts (July 2026) — not verified by the company.">~ Community est.</span>`;

const confChip = (confidence) =>
  confidence ? `<span class="conf conf-${confidence}" title="Source confidence: ${confidence}">${confidence}</span>` : "";

const logoTile = (c, cls = "") =>
  `<span class="logo-tile ${cls}" style="--h:${c.hue}" aria-hidden="true">${esc(initials(c.name))}</span>`;

/* ---------- theme ---------- */

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("sbd-theme", next);
});

/* ---------- compare selection ---------- */

function toggleCompare(id) {
  const i = state.compare.indexOf(id);
  if (i >= 0) state.compare.splice(i, 1);
  else {
    if (state.compare.length >= 3) state.compare.shift();
    state.compare.push(id);
  }
  localStorage.setItem("sbd-compare", JSON.stringify(state.compare));
  renderChrome();
  render(); // refresh pressed states / compare page
}

function renderChrome() {
  const n = state.compare.length;
  $navCompare.innerHTML = `Compare${n ? `<span class="compare-count">${n}</span>` : ""}`;

  const onListPage = !location.hash || location.hash === "#/" || location.hash.startsWith("#/company");
  if (n > 0 && onListPage) {
    $tray.hidden = false;
    const names = state.compare.map((id) => esc(company(id).name)).join(" · ");
    $tray.innerHTML = `
      <span class="tray-names">${names}</span>
      <button class="tray-clear" id="tray-clear">Clear</button>
      <button class="tray-go" id="tray-go" ${n < 2 ? "disabled" : ""}>
        Compare${n < 2 ? " (pick 2+)" : ` ${n}`}
      </button>`;
    document.getElementById("tray-clear").onclick = () => {
      state.compare = [];
      localStorage.setItem("sbd-compare", "[]");
      renderChrome();
      render();
    };
    document.getElementById("tray-go").onclick = () => (location.hash = "#/compare");
  } else {
    $tray.hidden = true;
    $tray.innerHTML = "";
  }
}

/* ---------- filtering ---------- */

function filteredCompanies() {
  const q = state.query.trim().toLowerCase();
  return COMPANIES.filter((c) => {
    if (state.type && c.type !== state.type) return false;
    if (state.area && c.area !== state.area) return false;
    const stack = [...c.stack.languages, ...c.stack.frameworks, ...c.stack.tools];
    if (state.tech && !stack.includes(state.tech)) return false;
    if (q) {
      const hay = [c.name, c.tagline, c.about, c.type, c.city, c.area, ...(c.domains || []), ...(c.notable || []), ...stack]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

/* Show the most common technologies as filter chips */
const TECH_CHIPS = (() => {
  const counts = {};
  COMPANIES.forEach((c) =>
    [...c.stack.languages, ...c.stack.frameworks, ...c.stack.tools].forEach((t) => (counts[t] = (counts[t] || 0) + 1))
  );
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 14);
})();

/* ---------- views ---------- */

function listView() {
  const results = filteredCompanies();
  const totalEngineers = COMPANIES.length;

  const chipRow = (items, key) =>
    items
      .map(
        (v) =>
          `<button class="chip" data-filter="${key}" data-value="${esc(v)}" aria-pressed="${state[key] === v}">${esc(v)}</button>`
      )
      .join("") +
    (state[key] ? `<button class="chip-clear" data-filter="${key}" data-value="">clear</button>` : "");

  return `
    <section class="hero">
      <p class="hero-eyebrow">বাংলাদেশ · Tech employer directory</p>
      <h1>Know where you'd <span class="accent">build</span>, before you sign.</h1>
      <p class="hero-sub">
        Real software employers in Bangladesh — bKash to Brain Station 23 — mapped by what
        they build, the stack they run, and how pay and titles actually ladder, compiled
        from Glassdoor, levels.fyi and public job posts.
      </p>
      <div class="hero-stats">
        <span><strong>${totalEngineers}</strong> companies</span>
        <span><strong>${ALL_AREAS.length}</strong> areas</span>
        <span><strong>${ALL_TECH.length}</strong> technologies</span>
      </div>
      <div class="sample-banner" role="note">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 8.5v4.5M12 16.5h.01M10.3 3.9 2.9 17a2 2 0 0 0 1.7 3h14.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>
        <span><strong>Community-reported data.</strong> Companies are real, but salary bands are
        self-reported estimates compiled from Glassdoor, levels.fyi and job postings
        (accessed July 2026) — not official figures. Confidence varies by level; every
        company page lists its sources and caveats.</span>
      </div>
    </section>

    <section class="controls" aria-label="Search and filters">
      <div class="search-row">
        <label class="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
          <input id="search" type="search" placeholder="Search companies, tech, cities…" value="${esc(state.query)}" autocomplete="off" />
        </label>
      </div>
      <div class="filter-groups">
        <div class="filter-row"><span class="filter-label">Type</span><div class="chip-row">${chipRow(ALL_TYPES, "type")}</div></div>
        <div class="filter-row"><span class="filter-label">Area</span><div class="chip-row">${chipRow(ALL_AREAS, "area")}</div></div>
        <div class="filter-row"><span class="filter-label">Tech</span><div class="chip-row">${chipRow(TECH_CHIPS, "tech")}</div></div>
      </div>
      <p class="result-count">${results.length} of ${COMPANIES.length} companies</p>
    </section>

    <div id="results" aria-label="Company list">
      ${resultsHTML(results)}
    </div>`;
}

function cardHTML(c) {
  const bounds = bandBounds(c);
  const inCompare = state.compare.includes(c.id);
  const stack = [...c.stack.languages, ...c.stack.frameworks];
  return `
  <a class="card" href="#/company/${c.id}">
    <div class="card-head">
      ${logoTile(c)}
      <div class="card-title">
        <h3>${esc(c.name)}</h3>
        <div class="card-meta">
          <span class="tier-chip" title="${TIERS[c.tier].label} (editorial grouping)">T${c.tier}</span>
          <span class="type-badge">${esc(c.type)}</span>
          <span>${esc(c.area)}</span>
        </div>
      </div>
    </div>
    <p class="card-tagline">${esc(c.tagline)}</p>
    <div class="card-stack">
      ${stack.slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
      ${stack.length > 4 ? `<span class="tag more">+${stack.length - 4}</span>` : ""}
    </div>
    <div class="card-foot">
      <span class="salary-teaser">${
        bounds
          ? `${compact(bounds.min)}–${compact(bounds.max)} BDT<span class="est">est.</span>`
          : `<span class="no-data">no public pay data</span>`
      }</span>
      <button class="compare-btn" data-compare="${c.id}" aria-pressed="${inCompare}">
        ${inCompare ? "✓ Comparing" : "+ Compare"}
      </button>
    </div>
  </a>`;
}

function resultsHTML(results) {
  // Within each tier, sort by top pay band (desc); companies without
  // public pay data go last, alphabetical as tiebreak.
  const byPay = (a, b) => {
    const am = bandBounds(a)?.max ?? -1;
    const bm = bandBounds(b)?.max ?? -1;
    return bm - am || a.name.localeCompare(b.name);
  };
  const groups = [1, 2, 3]
    .map((t) => ({ t, items: results.filter((c) => c.tier === t).sort(byPay) }))
    .filter((g) => g.items.length);

  if (!groups.length)
    return `<div class="empty-state"><h3>No companies match</h3><p>Try removing a filter or clearing the search.</p></div>`;

  return groups
    .map(
      (g) => `
    <section class="tier-section">
      <div class="tier-head">
        <h2>${TIERS[g.t].label}</h2>
        <span class="tier-count">${g.items.length}</span>
      </div>
      <p class="tier-blurb">${TIERS[g.t].blurb}</p>
      <div class="grid">${g.items.map(cardHTML).join("")}</div>
    </section>`
    )
    .join("");
}

function detailView(id) {
  const c = company(id);
  if (!c) return `<div class="empty-state" style="margin-top:4rem"><h3>Company not found</h3><p><a href="#/">Back to the directory</a></p></div>`;

  const bounds = bandBounds(c);
  const scaleMax = bounds ? niceCeil(bounds.max) : 0;
  const inCompare = state.compare.includes(c.id);

  const stackGroup = (label, items) => `
    <div class="stack-group">
      <h4>${label}</h4>
      <div class="chip-row">${items.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    </div>`;

  const levelRows = c.levels
    .map((l, i) => {
      const left = (l.band[0] / scaleMax) * 100;
      const width = ((l.band[1] - l.band[0]) / scaleMax) * 100;
      return `
      <div class="level-row">
        <div class="level-top">
          <span class="level-name">${esc(l.title)}<span class="level-years">${esc(l.years)} yrs</span></span>
          <span class="level-range" title="${esc(l.source || "")}">${fmtBDT(l.band[0])} – ${fmtBDT(l.band[1])} ${confChip(l.confidence)}</span>
        </div>
        <div class="band" role="img" aria-label="${esc(l.title)} salary band ${fmtBDT(l.band[0])} to ${fmtBDT(l.band[1])} monthly">
          <span class="band-fill" style="left:${left}%;width:${width}%;animation-delay:${i * 70}ms"></span>
        </div>
        <p class="level-scope">${esc(l.scope)}</p>
        <p class="level-source">Source: ${esc(l.source || "—")}</p>
      </div>`;
    })
    .join("");

  const levelsPanel = c.levels.length
    ? `
      <div class="ladder-strip" aria-label="Career ladder">
        ${c.levels.map((l) => `<span class="step">${esc(l.title)}</span>`).join(`<span class="arrow">→</span>`)}
      </div>
      ${levelRows}
      <div class="band-scale"><span>৳0</span><span>monthly gross · BDT</span><span>${fmtBDT(scaleMax)}</span></div>`
    : `<p class="body-text">No public per-level salary data could be verified for this company — figures exist on
       Glassdoor but sit behind a login, and third-party numbers were market-generic rather than
       company-specific. See the data notes below.</p>`;

  const sourceItem = (s) => {
    const m = String(s).match(/^(https?:\/\/\S+)(.*)$/);
    if (!m) return `<li>${esc(s)}</li>`;
    const url = m[1];
    let label = url.replace(/^https?:\/\/(www\.)?/, "");
    if (label.length > 56) label = label.slice(0, 53) + "…";
    return `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>${m[2] ? `<span class="src-note">${esc(m[2])}</span>` : ""}</li>`;
  };

  return `
    <a class="back-link" href="#/"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m6-7-7 7 7 7"/></svg>All companies</a>

    <header class="detail-head">
      ${logoTile(c)}
      <div class="detail-title">
        <h1>${esc(c.name)}</h1>
        <p class="detail-bn">${esc(c.bn)}</p>
        <p class="detail-tagline">${esc(c.tagline)}</p>
        <div class="meta-strip">
          <span class="meta-pill" title="${TIERS[c.tier].label} — editorial grouping by pay + reputation"><span class="tier-chip">T${c.tier}</span>&nbsp;${TIERS[c.tier].label.split("·")[1].trim()}</span>
          <span class="meta-pill"><span class="type-badge">${esc(c.type)}</span></span>
          <span class="meta-pill">📍 <b>${esc(c.area)}, ${esc(c.city)}</b></span>
          <span class="meta-pill">Founded <b>${c.founded}</b></span>
          <span class="meta-pill"><b>${esc(c.employees)}</b> people${c.engineers ? ` · <b>${esc(c.engineers)}</b> eng` : ""}</span>
          <a class="meta-pill link" href="${esc(c.website)}" target="_blank" rel="noopener">Website ↗</a>
          <button class="meta-pill link" data-compare="${c.id}" aria-pressed="${inCompare}">${inCompare ? "✓ In compare" : "+ Add to compare"}</button>
        </div>
      </div>
    </header>

    <div class="detail-grid">
      <div class="detail-main">
        <section class="panel">
          <h2>What they do</h2>
          <p class="body-text">${esc(c.about)}</p>
          ${c.domains?.length ? `
          <div class="stack-group" style="margin-top:1rem">
            <h4>Domains</h4>
            <div class="chip-row">${c.domains.map((d) => `<span class="tag domain-tag">${esc(d)}</span>`).join("")}</div>
          </div>` : ""}
          ${c.notable?.length ? `
          <div class="stack-group">
            <h4>Known for</h4>
            <ul class="known-list">${c.notable.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
          </div>` : ""}
        </section>

        <section class="panel">
          <h2>Levels &amp; pay ${badge(c.verified)}</h2>
          ${levelsPanel}
        </section>

        ${c.salaryNotes ? `
        <section class="panel">
          <h2>Data notes</h2>
          <p class="body-text small">${esc(c.salaryNotes)}</p>
        </section>` : ""}
      </div>

      <aside class="detail-side">
        <section class="panel">
          <h2>Tech stack</h2>
          ${stackGroup("Languages", c.stack.languages)}
          ${stackGroup("Frameworks", c.stack.frameworks)}
          ${stackGroup("Infra & tools", c.stack.tools)}
        </section>

        <section class="panel">
          <h2>Working style</h2>
          <span class="mode-pill">${esc(c.workStyle.mode)}</span>
          <p class="body-text">${esc(c.workStyle.notes)}</p>
        </section>

        <section class="panel">
          <h2>At a glance</h2>
          <dl class="facts">
            <div class="fact"><dt>Founded</dt><dd>${c.founded}</dd></div>
            <div class="fact"><dt>Headcount</dt><dd>${esc(c.employees)}</dd></div>
            ${c.engineers ? `<div class="fact"><dt>Engineers</dt><dd>${esc(c.engineers)}</dd></div>` : ""}
            ${bounds ? `
            <div class="fact"><dt>Lowest band (est.)</dt><dd>${fmtBDT(bounds.min)}+</dd></div>
            <div class="fact"><dt>Top band (est.)</dt><dd>${fmtBDT(bounds.max)}</dd></div>` : `
            <div class="fact"><dt>Pay data</dt><dd>none public</dd></div>`}
          </dl>
        </section>

        <section class="panel">
          <h2>Sources</h2>
          <ul class="sources-list">${(c.sources || []).map(sourceItem).join("")}</ul>
        </section>
      </aside>
    </div>`;
}

function compareView() {
  const picked = state.compare.map(company).filter(Boolean);

  if (picked.length < 2) {
    return `
      <div class="compare-page">
        <h1>Compare companies</h1>
        <p class="compare-sub">Pick two or three companies to see their pay bands and stacks side by side.</p>
        <div class="compare-empty">
          <p>${picked.length === 1 ? `<strong>${esc(picked[0].name)}</strong> selected — pick at least one more.` : "Nothing selected yet."}</p>
          <p style="margin-top:0.5rem"><a href="#/">Browse the directory</a> and tap <em>+ Compare</em> on any card.</p>
        </div>
      </div>`;
  }

  const sharedMax = niceCeil(Math.max(50000, ...picked.map((c) => bandBounds(c)?.max || 0)));

  const col = (c) => {
    const levelBlock = LEVEL_KEYS.map((key) => {
      const l = c.levels.find((x) => x.key === key);
      if (!l)
        return `<div class="compare-level"><div class="lvl-name"><span>${CANON_LEVELS[key]}</span></div><span class="na">— no public data</span></div>`;
      const left = (l.band[0] / sharedMax) * 100;
      const width = ((l.band[1] - l.band[0]) / sharedMax) * 100;
      return `
        <div class="compare-level">
          <div class="lvl-name"><span title="${esc(l.title)} — source: ${esc(l.source || "")}">${CANON_LEVELS[key]} ${confChip(l.confidence)}</span>
            <span class="lvl-range">${compact(l.band[0])}–${compact(l.band[1])}</span></div>
          <div class="band" role="img" aria-label="${esc(l.title)}: ${fmtBDT(l.band[0])} to ${fmtBDT(l.band[1])}">
            <span class="band-fill" style="left:${left}%;width:${width}%"></span>
          </div>
        </div>`;
    }).join("");

    const stack = [...c.stack.languages, ...c.stack.frameworks];
    return `
      <div class="compare-card">
        <div class="card-head">
          ${logoTile(c)}
          <div class="card-title">
            <h3><a href="#/company/${c.id}" style="text-decoration:none">${esc(c.name)}</a></h3>
            <div class="card-meta"><span class="type-badge">${esc(c.type)}</span><span>${esc(c.area)}</span></div>
          </div>
          <button class="remove" data-compare="${c.id}" aria-label="Remove ${esc(c.name)} from comparison">✕</button>
        </div>

        <p class="compare-section-label">Monthly pay by level ${badge(c.verified)}</p>
        ${levelBlock}
        <div class="band-scale"><span>৳0</span><span>${fmtBDT(sharedMax)}</span></div>

        <p class="compare-section-label">Stack</p>
        <div class="card-stack">${stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>

        <p class="compare-section-label">Working style</p>
        <p class="body-text" style="font-size:0.85rem">${esc(c.workStyle.mode)} · ${esc(c.workStyle.notes)}</p>
      </div>`;
  };

  return `
    <div class="compare-page">
      <a class="back-link" href="#/"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m6-7-7 7 7 7"/></svg>All companies</a>
      <h1>Side by side</h1>
      <p class="compare-sub">Pay bands share one ৳ scale (0 – ${fmtBDT(sharedMax)}) so bar positions are directly comparable. All figures are community-reported estimates — hover a level name for its source.</p>
      <div class="compare-scroll">
        <div class="compare-cols" style="--n:${picked.length}">
          ${picked.map(col).join("")}
        </div>
      </div>
    </div>`;
}

/* ---------- router & events ---------- */

function render() {
  const hash = location.hash || "#/";
  let html;
  if (hash.startsWith("#/company/")) html = detailView(hash.slice("#/company/".length));
  else if (hash === "#/compare") html = compareView();
  else html = listView();
  $app.innerHTML = html;
  renderChrome();
  bindEvents();
}

function bindEvents() {
  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", (e) => {
      state.query = e.target.value;
      // Re-render only the results + count to keep the input focused
      const results = filteredCompanies();
      document.querySelector(".result-count").textContent = `${results.length} of ${COMPANIES.length} companies`;
      document.getElementById("results").innerHTML = resultsHTML(results);
      bindCompareButtons();
    });
  }

  $app.querySelectorAll(".chip[data-filter], .chip-clear[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.filter;
      const val = btn.dataset.value || null;
      state[key] = state[key] === val ? null : val;
      render();
    });
  });

  bindCompareButtons();
}

function bindCompareButtons() {
  document.querySelectorAll("[data-compare]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleCompare(btn.dataset.compare);
    });
  });
}

window.addEventListener("hashchange", () => {
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
});

render();
