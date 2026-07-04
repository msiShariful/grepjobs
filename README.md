# grepJobs — Bangladesh tech employer directory

A static, no-backend directory of real software companies in Bangladesh: what
each company builds, its tech stack, community-reported salary bands by level,
and how its career ladder is structured. Includes search, filters
(type / Dhaka area / tech), dark & light themes, and a side-by-side comparison
view for 2–3 companies.

> **Data provenance.** Companies and facts are real (company sites, press, job
> postings). Salary bands are community-reported estimates compiled from
> Glassdoor, levels.fyi, BdJobs postings and community salary surveys, accessed
> July 2026 — **not** figures verified by the companies. Every band carries a
> `source` and a `confidence` rating (high/medium/low) shown in the UI, each
> company page lists its sources, and levels with no public data are omitted
> rather than guessed (e.g. ShopUp has none). The UI badges salary sections as
> `~ Community est.` until you set `verified: true` on an entry.

## Run it

No build step. Either open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Files

| File | Purpose |
| --- | --- |
| `data.js` | **All company data.** Edit this to add/change companies. |
| `app.js` | Rendering, hash routing, filters, compare logic. |
| `styles.css` | Design tokens (light + dark palettes) and components. |
| `index.html` | Shell + theme bootstrapping. |

## Editing company data

Each company is one object in the `COMPANIES` array in `data.js` — the comment
block at the top of that file documents every field. The important ones:

- `levels` is both the **salary table and the career ladder**: each entry has a
  `band: [min, max]` (gross monthly BDT), typical `years`, a one-line `scope`,
  plus `source` (where the band comes from) and `confidence`
  (`high | medium | low`, rendered as a chip in the UI).
- Each level's `key` must be one of `se1 | se2 | senior | lead | em` — this is
  what aligns rows across companies in the compare view. The `title` is
  whatever the company actually calls the level. Omit levels with no data —
  the UI copes (shows "no public data").
- `salaryNotes` holds caveats (shown as a "Data notes" panel) and `sources`
  is a list of URLs (shown as a "Sources" panel; text after a URL renders as
  a note).
- Set `verified: true` once figures are confirmed with the company — the amber
  "Community est." badge switches to a green "Verified" one.

Filters, chips, stats and compare rows are all derived from the data, so a new
company (or a new city/technology) shows up everywhere automatically.

## URL parameters

- `?theme=light|dark` — force a theme (otherwise localStorage → OS preference)
- `?compare=id1,id2,id3` — pre-select companies for comparison
- Routes: `#/` directory · `#/company/<id>` detail · `#/compare`
