# Hangjin Jiang — Academic Homepage

Static personal website for Hangjin Jiang (DataLinkX Group, Center for Data Science, Zhejiang University). Plain HTML/CSS — no build step — deployed on Vercel. **All page content lives in Markdown** under `content/` and is rendered in the browser, so editors only touch Markdown, never HTML.

## How it works

Each page is a thin HTML shell (nav + footer + styling) with a `<div data-md="/content/xxx.md">`. On load, `js/site.js` fetches that Markdown file and renders it with a locally-vendored `js/marked.umd.js`; `styles.css` styles the result into the academic look. No CDN, no build — works offline-friendly and China-friendly.

## Editing content

See **`content/如何修改内容.md`** for a non-technical guide. In short: edit the `.md` file for the page you want, commit, and push.

| Content file | Page |
|------|------|
| `content/home.md` | Home body |
| `content/research.md` | Research + publications |
| `content/teaching.md` | Teaching |
| `content/people.md` | Group members |
| `content/news.md` | Visitors, talks, service |
| `content/joinus.md` | Join Us |
| `content/contact.md` | Contact |

The home hero (name, title, photo, buttons) is in `index.html` — edit only when identity changes.

## Structure

```
*.html        page shells (do not usually need editing)
styles.css    all styling
js/           marked.umd.js (renderer) + site.js (loader + mobile nav)
content/      Markdown content  ← edit here
img/          images (portrait, favicon)
resources/    downloadable files (paper PDFs, code zips)
vercel.json   Vercel config (clean URLs, no build, caching)
```

## Local preview

Use a local server (opening files via `file://` breaks paths and Markdown fetch):

```bash
npx serve          # http://localhost:3000 — mirrors Vercel clean URLs
```

## Deploy

Connected to Vercel via Git. Every push to `master` auto-deploys — no build step runs.
