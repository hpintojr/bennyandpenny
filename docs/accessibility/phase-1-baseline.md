# Accessibility Baseline — Phase 1

**Site:** `bennyandpenny.com`  
**Target:** WCAG 2.2 Level AA  
**Status:** Initial foundation in progress  
**Last reviewed:** 2026-06-20

> This is an engineering remediation register, not a legal certification. Do not describe the site as fully ADA compliant or fully accessible until an independent accessibility audit and legal review are complete.

## Route inventory

| Route | Primary process | Phase 1 status |
| --- | --- | --- |
| `/` | Read studio overview and visit venture sites | Baseline remediation in progress |
| `/our-work` | Read portfolio and visit venture sites | Baseline remediation in progress |
| `/families` | Learn about the publishing imprint and visit storefront | Baseline remediation in progress |
| `/about` | Read founder profile | Baseline remediation in progress |
| `/work-with-us` | Complete and submit contact form | Form remediation in progress |
| `/privacy` | Read privacy policy | Pending manual audit |
| `/terms` | Read terms | Pending manual audit |
| `/accessibility` | Read accessibility statement and request support | Added in Phase 1 |
| `not-found` | Recover from unavailable route | Pending manual audit |

## Findings and remediation status

| ID | WCAG area | Severity | Finding | Status / implementation |
| --- | --- | --- | --- | --- |
| BAP-A11Y-001 | 2.4.1 Bypass Blocks | High | No keyboard skip link to main content. | Addressed: global skip link and named main landmark added. |
| BAP-A11Y-002 | 2.4.7 Focus Visible / 2.4.11 Focus Not Obscured | High | Focus appearance was not standardized across shared controls. | Addressed: global visible focus token, focus offset, scroll padding, and forced-colors support added. Manual verification still required. |
| BAP-A11Y-003 | 2.3.3 Animation from Interactions | Medium | Motion-reduction behavior was component-specific instead of shared. | Addressed: global reduced-motion rule added. Manual verification still required. |
| BAP-A11Y-004 | 2.1.1 Keyboard / 2.4.3 Focus Order | High | Mobile navigation did not move focus into the open menu or support Escape return. | Addressed: first-link focus, Escape close, focus return, `aria-expanded`, and current-page state added. |
| BAP-A11Y-005 | 3.3.1 Error Identification / 3.3.3 Error Suggestion | High | Contact form relied on native required state and a single generic request error. | Addressed: custom validation, error summary, inline field errors, field links, focus management, and announced success state added. End-to-end test still required. |
| BAP-A11Y-006 | 2.4.4 Link Purpose / 3.2.5 Change on Request | Medium | Footer venture links open new tabs without announcing that behavior. | Addressed in footer with hidden new-tab disclosure. Work-card links remain pending. |
| BAP-A11Y-007 | Accessibility statement | Medium | No public accessibility statement or support path. | Addressed: `/accessibility` page and footer link added. |
| BAP-A11Y-008 | 1.4.3 Contrast / 1.4.11 Non-text Contrast | High | No documented contrast audit for branded typography, subtle borders, gradients, or image overlays. | Open: measure every published color pair and remediate failures. |
| BAP-A11Y-009 | 1.1.1 Non-text Content | Medium | Image alt text requires route-by-route review, including card art, logos, and visual overlays. | Open: audit all `next/image` and raw `img` usage. |
| BAP-A11Y-010 | 2.4.4 Link Purpose | Medium | Generic “Visit site” links on Home and Work do not identify the destination out of context. | Open: change to destination-specific link labels and new-tab disclosures. |
| BAP-A11Y-011 | 2.4.2 Page Titled / 2.4.6 Headings and Labels | Medium | Metadata is present, but page heading hierarchy and visual-heading semantics need manual verification across all routes. | Open: perform route-by-route keyboard and screen-reader audit. |
| BAP-A11Y-012 | 1.4.10 Reflow / 1.4.12 Text Spacing | High | No documented 200% zoom, 400% reflow, or text-spacing test evidence. | Open: test all public routes and remediate clipping/overlap. |

## Phase 1 code delivered

- `app/accessibility.css`: focus, skip-link, reduced-motion, forced-colors, form-error, and visually-hidden utilities.
- `app/layout.tsx`: skip link and identifiable `<main id="main-content">` landmark.
- `components/SiteHeader.tsx`: accessible mobile menu focus behavior and current-page state.
- `components/ContactForm.tsx`: accessible labels, required notice, custom validation, error summary, inline errors, focus movement, and status updates.
- `components/SiteFooter.tsx`: footer external-link disclosure and accessibility-statement link.
- `app/accessibility/page.tsx`: public accessibility statement.
- `public/accessibility.md`: Markdown mirror.
- `app/sitemap.ts`: accessibility page added to XML sitemap.

## Required verification before Phase 1 signoff

- [ ] Keyboard-only pass on Home, Work, Adventures, About, Contact, Privacy, Terms, Accessibility, and 404.
- [ ] Confirm skip link moves to main content and focus remains visible below sticky header.
- [ ] Confirm mobile menu opens, focuses first item, closes on Escape, and returns focus to trigger.
- [ ] Confirm contact form client errors, server errors, success state, and “Send another message” flow with keyboard and screen reader.
- [ ] Run automated axe scans against all routes and contact validation states.
- [ ] Complete contrast audit for all text, controls, borders, focus indicators, and hover states.
- [ ] Test 200% browser zoom, 400% reflow/narrow viewport, text-spacing override, reduced motion, and forced-colors mode.
- [ ] Test with NVDA + Chrome or Firefox and VoiceOver + Safari.

## Phase 2 priorities

1. Remediate Home and Work external-card link labels and new-tab disclosures.
2. Conduct contrast and focus-not-obscured audit for all shared components.
3. Audit image alt text and decorative-image handling.
4. Add automated accessibility testing in local development and CI.
5. Create a manual accessibility QA checklist and release evidence folder.
