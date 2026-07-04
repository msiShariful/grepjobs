# CLAUDE.md — grepJobs

Context for Claude Code sessions working on this repo.

## What this is

**grepJobs** (`❯ grepJobs`) — a static, zero-build directory of Bangladesh's software
employers: 88 real companies with tech stacks, domains, career ladders, and
community-reported salary bands (monthly gross BDT), grouped into editorial tiers.

- **Live**: https://msishariful.github.io/grepjobs/ (GitHub Pages, auto-deploys from `main`)
- **Repo**: https://github.com/msiShariful/grepjobs
- **History**: KothayKaj → StackBD → grepJobs (renamed twice on day one; don't reintroduce old names)

## Architecture

Vanilla HTML/CSS/JS, no build step, no dependencies. Hash routing.

| File | Role |
| --- | --- |
| `data.js` | **The entire dataset** — `TIERS`, `LEVEL_KEYS`, `COMPANIES[]`, derived exports (`ALL_TECH`, `ALL_TYPES`, `ALL_AREAS`). Schema documented in its header comment. |
| `app.js` | Rendering + routing. Views: `listView` (tier sections, cards pay-sorted desc within tier), `detailView`, `compareView`. State: query/type/area/tech filters + compare (max 3, localStorage `sbd-compare`). |
| `styles.css` | Design tokens: separately tuned light (green-tinted paper / banyan green / marigold) and dark (green charcoal / jade) palettes. Fonts: Bricolage Grotesque (display), Schibsted Grotesk (body), Spline Sans Mono (data). |
| `index.html` | Shell, theme bootstrap (URL `?theme=` → localStorage `sbd-theme` → OS), OG tags, favicon. |

Routes: `#/` directory · `#/company/<id>` detail · `#/compare`.
URL params: `?theme=light|dark`, `?compare=id1,id2,id3`.

## Data integrity rules (NON-NEGOTIABLE)

This project's entire value is honesty about uncertain data:

1. **Never invent salary numbers.** If no company-specific evidence exists, omit the
   level (the UI handles it). Market-extrapolated or interpolated bands must NOT be
   added — several were rejected during research for exactly this.
2. **Every band carries `source` (string) and `confidence` (`high|medium|low`).**
3. **`salaryNotes`** holds caveats (contested figures, discarded outliers, mislabeled
   Glassdoor yearly/monthly data); **`sources`** is a URL list (text after a URL renders
   as a note).
4. **`verified: false`** until figures are confirmed with the company; flipping to
   `true` swaps the amber "~ Community est." badge for green "✓ Verified".
5. **Record corrections, don't repeat folklore.** Existing examples: weDevs' rumored
   Awesome Motive acquisition (unverified), Loop's "YC-backed" label (unverified),
   GraphicPeople is WPP-lineage not Dentsu (site suspended — status flagged), Ulka Games
   status-uncertain (2022 closure evaluation), Daraz/foodpanda have little/no local
   product engineering, SEBPO is rebranding to Alloyed.
6. Salary sanity check: BD mid-level ≈ ৳60k–150k/month. Glassdoor BD data frequently
   mislabels monthly as yearly (and vice versa) — divide yearly by 12 and sanity-check.
   Discard US-normalized USD figures and garbled snippets.

## Company entry conventions

- `id`: kebab slug (URL). `tier`: 1–3 (definitions in `TIERS`; editorial, pay+reputation).
- `levels[].key` ∈ `se1|se2|senior|lead|em` (aligns compare rows); `title` is the
  company's real title; `band: [min,max]` monthly gross BDT; plus `years`, `scope`,
  `source`, `confidence`.
- `hue`: 0–360, unique-ish per company (drives logo tile color).
- `bn`: Bengali name rendering. `area`: Dhaka neighborhood (or city for non-Dhaka,
  e.g. Inverse.AI → "Sylhet"; use "Dhaka" when the neighborhood is unverified).
- `domains` (chips) + `notable` (3-item "known for" list) + `about` (2–4 factual sentences).
- Everything (filters, stats, tier sections, compare) derives from data — adding a
  company touches only `data.js`.

## Validation & verification

After any `data.js` change, run the structural check:

```sh
node -e "
const fs=require('fs');const src=fs.readFileSync('data.js','utf8');
eval(src + \`
console.log('companies:',COMPANIES.length);
const ids=COMPANIES.map(c=>c.id);
console.log('dups:',JSON.stringify(ids.filter((v,i)=>ids.indexOf(v)!==i)));
console.log('missing:',JSON.stringify(COMPANIES.filter(c=>!c.tier||!c.domains||!c.notable||!c.area||!TIERS[c.tier]||!c.hue).map(c=>c.id)));
console.log('badLevels:',JSON.stringify(COMPANIES.flatMap(c=>c.levels.filter(l=>!LEVEL_KEYS.includes(l.key)||l.band[0]>l.band[1]||!l.band[0]||!l.source).map(l=>c.id+':'+l.key)));
\`);"
```

Visual check: serve (`python3 -m http.server 8741`) and screenshot with headless Chrome:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --screenshot=/tmp/check.png --window-size=1280,1500 --hide-scrollbars \
  --virtual-time-budget=6000 "http://localhost:8741/?theme=dark"
```

(Headless Chrome's minimum window width is ~500px — a "clipped" 390px shot is an
artifact, not a CSS bug. Playwright's default profile is often locked by running Chrome.)

## Research playbook (adding companies)

Past rounds used parallel general-purpose agents, 4 companies each. Hard-learned rules:

- Tell agents: **no subagents** (fan-out explosions caused watchdog stalls), **max ~3
  WebSearch per company**, return JSON only, **omit levels with no data**.
- If an agent stalls ("no progress for 600s"), resume it via SendMessage with "wrap up
  now" instructions — resume in waves of ≤4, not 8.
- Best sources: Glassdoor via *search snippets* (direct fetch is bot-blocked),
  `tahanima.github.io` community salary survey, levels.fyi, BdJobs posted ranges,
  bdtechjobs.com, futurestartup.com, company careers pages.
- Filter agent output before integrating: drop "market-extrapolated"/"interpolated"
  bands, keep correction findings in `salaryNotes`/`notable`.

Coverage note: at 88 companies this includes essentially every BD employer with a
public footprint. The BASIS long tail (~2,500 members) has no name recognition or
salary data — further breadth adds empty entries; depth (filling missing senior/lead
bands, verifying flagged companies) is more valuable.

## Git & deploy rules

- **Commits: authored ONLY as `msiShariful <sharifulislam12570@gmail.com>`.**
  Use `git -c user.name="msiShariful" -c user.email="sharifulislam12570@gmail.com" commit`.
- **NO Claude-related trailers of any kind** — no `Co-Authored-By`, no `Generated with`,
  no `Claude-Session:` links (history was filter-branch'd once to remove them; don't
  make that necessary again).
- Push to `main` → GitHub Pages auto-deploys (legacy build, `.nojekyll` present).
  A Pages deploy occasionally fails with "try again later" — transient; re-push or rerun.
- README screenshots live in `.github/*.png` and double as the OG image — refresh them
  after visual changes (`home-dark.png` is the social card).

## Backlog / known gaps

- 23 companies have zero salary bands (honest gaps): ShopUp, Rokomari, Sheba, GoZayaan,
  ShareTrip, Ollyo, W3 Engineers, Dohatec, Southtech, LeadSoft, Bikroy, foodpanda, etc.
  Filling these with real sourced data > adding new companies.
- Verify flagged statuses: Ulka Games (operating?), GraphicPeople (site suspended),
  Loop Freight (funding data ends 2020), SEBPO→Alloyed rebrand completion.
- Ideas not yet built: GitHub issue templates for salary corrections, custom domain,
  per-company "last reviewed" dates, tier-history changelog.
