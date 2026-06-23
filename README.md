# Benny & Penny — A Tech Company

The technology and creative studio of **Hamilton Pinto Jr.** — software architect, creative technologist, and publisher. This is the portfolio and studio site for the Benny & Penny brand.

## Purpose

This repository powers **https://www.bennyandpenny.com**, Hamilton's portfolio and technology-company brand site.

It is intentionally separate from the Benny & Penny Adventures commerce application:

- **This site:** Hamilton's portfolio, studio capabilities, venture work, and aligned business inquiries, with links to American Colonial Capital, Advantage First Financial, Benny & Penny Adventures, XBeton, and Mercury Call Desk.
- **Adventures storefront (`hpintojr/bennyandpennyadventures`):** product catalog, checkout, customer portal, digital delivery, gifting, and cart recovery.

## Pages

- Home — portfolio hero, capabilities, and selected ventures
- Work (`/our-work`) — venture detail and outbound links
- Adventures (`/families`) — Benny & Penny Adventures publishing-imprint spotlight
- About (`/about`) — Hamilton's background and experience
- Contact (`/work-with-us`) — engagement types and inquiry form
- Accessibility, Privacy, and Terms — public policy and support pages

## Production status

- Vercel production deployment is connected to `main`.
- Canonical domain: `https://www.bennyandpenny.com`.
- `https://bennyandpenny.com` permanently redirects to the canonical `www` domain.
- Search foundations include page metadata, canonical URLs, Organization and Person JSON-LD, sitemap, robots, and a social-sharing image.
- Accessibility foundations include skip navigation, accessible form validation, display preferences, and a public accessibility statement.
- The inquiry flow is configured for its confirmed production delivery path.

## Discovery and indexing files

Public Markdown mirrors and LLM discovery files live in `public/`:

- `index.md`, `our-work.md`, `families.md`, `about.md`, and `work-with-us.md`
- `privacy.md`, `terms.md`, and `accessibility.md`
- `llm.txt`, `llms.txt`, and `llms-full.txt`

These documents must use the exact brand names and canonical domain below:

- **Benny & Penny — A Tech Company**
- **Benny & Penny Adventures**
- **https://www.bennyandpenny.com**

The Markdown and LLM files are intentionally served with `X-Robots-Tag: noindex, follow` so they can support machine-readable discovery without competing with the primary HTML pages in search results.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run build
npm run a11y:smoke
npm run a11y:axe
```

## Later roadmap

- Add deeper portfolio case studies with role, problem, implementation, proof points, and measurable outcomes where appropriate.
- Refresh visual assets only with approved photography, venture screenshots, and book-preview art.
