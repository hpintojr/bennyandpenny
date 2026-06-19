# Benny & Penny

A family-built creative and care-centered brand creating meaningful children’s stories, visual experiences, family resources, and mission-driven projects.

## Purpose

This repository is for **BennyAndPenny.com**, the parent brand and portfolio site.

It is intentionally separate from the Benny & Penny Adventures commerce application:

- **This site:** brand story, creative portfolio, family-resource vision, collaboration inquiries, and SEO discovery.
- **Adventures/store app:** product catalog, checkout, customer portal, digital delivery, gifting, and cart recovery.

## Launch v1 included

- Responsive homepage with a clear brand position and two primary calls to action.
- Our Work, For Families, Our Family, and Work With Us pages.
- Collaboration lead path through `hello@bennyandpenny.com`.
- Search foundations: page metadata, canonical URL, organization JSON-LD, sitemap, robots file, and social-sharing image.
- CSS-first visual direction that works before final photography and book art are ready.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production deployment

1. Import this repository into Vercel.
2. Confirm the production branch is `main`.
3. Add `bennyandpenny.com` and `www.bennyandpenny.com` to the Vercel project.
4. Point the domain DNS records to Vercel.
5. Verify `https://bennyandpenny.com/sitemap.xml` and `https://bennyandpenny.com/robots.txt` after deployment.
6. Submit the live domain to Google Search Console and Bing Webmaster Tools.

## Before public launch

- [ ] Confirm `hello@bennyandpenny.com` is an active mailbox and configure SPF, DKIM, and DMARC.
- [ ] Replace the CSS-only visual placeholders with approved brand photography, illustrations, and book-preview art.
- [ ] Add social account URLs to the organization schema when active.
- [ ] Choose lead routing: direct email, Resend form delivery, HubSpot, GoHighLevel, or another CRM.
- [ ] Add a privacy policy and terms page before collecting any form data or newsletter signups.
- [ ] Add privacy-friendly analytics and cookie consent only if needed.
- [ ] Review final copy for exact claims before publishing.

## Content guardrail

This site should describe **Benny & Penny as the umbrella creative brand**. Do not blend customer accounts, orders, digital downloads, checkout, or store-specific policies into this repository.
