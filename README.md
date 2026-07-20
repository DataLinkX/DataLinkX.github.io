# Hangjin Jiang — Academic Homepage

Static personal website for Hangjin Jiang (DataLinkX Group, Center for Data Science, Zhejiang University). Plain HTML/CSS — no build step — ready to deploy on Vercel.

## Structure

| File | Page |
|------|------|
| `index.html` | Home / About |
| `research.html` | Research interests & publications (`/research`) |
| `teaching.html` | Teaching (`/teaching`) |
| `people.html` | Group members (`/people`) |
| `news.html` | Visitors, talks, service (`/news`) |
| `joinus.html` | Join Us (`/joinus`) |
| `contact.html` | Contact (`/contact`) |
| `styles.css` | Shared stylesheet |
| `vercel.json` | Vercel config (clean URLs, no build) |
| `img/`, `resources/` | Images and downloadable files (publications, code) |

## Local preview

Use a local server (opening files via `file://` breaks absolute paths):

```bash
npx serve          # http://localhost:3000 — mirrors Vercel clean URLs
# or
python3 -m http.server 8000   # visit /research.html etc.
```

## Deploy to Vercel

Import this repository at [vercel.com](https://vercel.com). No settings needed — `vercel.json` disables any build and serves the folder statically with clean URLs (`/research`, `/teaching`, …).

## Editing content

All content lives directly in the `.html` files. Publications are in `research.html`: `<b>H. Jiang</b>` marks the PI, `<u>…</u>` marks student authors, `<span class="journal">…</span>` styles the journal name.
