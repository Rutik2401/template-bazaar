# Template Bazaar

> A vibrant marketplace of premium templates — invitations, resumes & business — ready to download in minutes.

Pick a template → fill a simple form → watch the live preview → download a crisp
PDF or HD image. No drag-and-drop, no design skills. Mobile-first, built for everyone.

Built with **Next.js (App Router)** so the frontend and backend deploy together
on **Vercel**.

## Quick start

```bash
npm install
npm run dev      # dev server      → http://localhost:3000
npm run build    # production build → .next/
npm start        # run the production build
```

## Deploy to Vercel

Push the repo to GitHub and import it on Vercel — it auto-detects Next.js (no
config needed). Frontend pages and the `/api/*` backend deploy as one project.

## Tech

- **Next.js 14 (App Router) + React 18** · **Tailwind CSS**
- Routing: file-based App Router · Fonts: `next/font` (self-hosted, no layout shift)
- State: `useState` / custom hooks only (no global store)
- Export: **server-side headless Chrome** (`/api/export` → `puppeteer-core` +
  `@sparticuz/chromium`) renders a **vector PDF** (selectable text) or **HD PNG**
  (3× DPI). Falls back to client `html2canvas + jsPDF` if the server is unreachable.
- Backend: Next.js Route Handlers under `app/api/` (template data served as JSON)

## Project structure

```
app/                         ← Next.js App Router (routes + backend)
├─ layout.jsx                Root layout, fonts, metadata
├─ page.jsx                  /                      → HomePage
├─ category/[categoryId]/    /category/:id          → TemplateSelectPage
├─ editor/[templateId]/      /editor/:id            → EditorPage
├─ not-found.jsx             404                    → NotFoundPage
└─ api/                      Backend (Route Handlers)
   ├─ health/                GET /api/health
   ├─ templates/             GET /api/templates       (all metadata)
   └─ templates/[id]/        GET /api/templates/:id    (one template)

src/                         ← UI + domain (imported via "@/…" alias)
├─ components/   Reusable UI (cards, form field, preview stage, export bar…)
├─ views/       Page bodies (Home, TemplateSelect, Editor, NotFound)
├─ data/        Static data (categories)
├─ hooks/       useTemplateForm, useElementSize
├─ templates/   One folder per template (Preview component + config object)
│  ├─ wedding/  Royal Maroon & Gold
│  ├─ birthday/ Confetti Party Pop
│  ├─ resume/   Minimal ATS Professional
│  └─ index.js  ← template registry (add new templates here)
└─ utils/       cn, format, slug, exportPdf
```

> Note: page bodies live in `src/views/` (not `src/pages/`) because Next.js
> treats a `pages/` directory as the legacy Pages Router. The `app/` route
> files are thin wrappers that pass route params into these view components.

## Server / client boundary

- **Server components** (default): `app/` route wrappers, `HomePage`,
  `TemplateSelectPage` — rendered on the server for fast first paint.
- **Client islands** (`'use client'`): `TemplateCard`, `TemplateStage`,
  `EditorPage` — anything that measures the DOM, holds form state, or exports a
  PDF. Cards receive a serializable `templateId` and resolve the template (with
  its React `Preview`) on the client, so nothing non-serializable crosses the
  boundary.

## Adding a new template (the scalable path)

1. Create `src/templates/<category>/MyTemplate.jsx` — a component that takes
   `{ values }` and renders a fixed-size design (mark the root with
   `data-export-root`).
2. Add a `config.js` next to it exporting `{ id, category, name, description,
   width, height, Preview, fields }`.
3. Register it in `src/templates/index.js`.

That's it — the category page, editor form, live preview, PDF export, and the
`/api/templates` endpoint all pick it up automatically.

## Built to grow

- **i18n (Hindi / Marathi)** — field labels & template strings come from config.
- **AI text** — `useTemplateForm` is the single write-point for field values.
- **Auth / payments / premium** — App Router middleware + the template registry
  are the natural gates.
- **Real backend** — the `app/api/` handlers already serve template data as
  JSON; swap their static source for a database without touching the UI.
