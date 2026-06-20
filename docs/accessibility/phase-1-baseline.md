# Accessibility Baseline — Phase 1

**Site:** `bennyandpenny.com`  
**Target:** WCAG 2.2 Level AA  
**Status:** Initial foundation implemented; manual verification in progress  
**Last reviewed:** 2026-06-20

> This is an engineering remediation register, not a legal certification. Do not describe the site as fully ADA compliant or fully accessible until an independent accessibility audit and legal review are complete.

## Route inventory

| Route | Primary process | Phase 1 status |
| --- | --- | --- |
| `/` | Read studio overview and visit venture sites | Baseline remediation implemented; manual audit pending |
| `/our-work` | Read portfolio and visit venture sites | Baseline remediation implemented; manual audit pending |
| `/families` | Learn about the publishing imprint and visit storefront | Baseline remediation implemented; manual audit pending |
| `/about` | Read founder profile | Baseline remediation implemented; manual audit pending |
| `/work-with-us` | Complete and submit contact form | Form remediation implemented; end-to-end test pending |
| `/privacy` | Read privacy policy | Pending manual audit |
| `/terms` | Read terms | Pending manual audit |
| `/accessibility` | Read accessibility statement and request support | Added in Phase 1; manual audit pending |
| `not-found` | Recover from unavailable route | Shared foundation applied; manual audit pending |

## Findings and remediation status

| ID | WCAG area | Severity | Finding | Status / implementation |
| --- | --- | --- | --- | --- |
| BAP-A11Y-001 | 2.4.1 Bypass Blocks | High | No keyboard skip link to main content. | Addressed: focus-managed global skip link and named main landmark added. |
| BAP-A11Y-002 | 2.4.7 Focus Visible / 2.4.11 Focus Not Obscured | High | Focus appearance was not standardized across shared controls. | Addressed in code: visible focus token, focus offset, sticky-header scroll spacing, white dark-surface focus treatment, and forced-colors support. Manual visual verification still required. |
| BAP-A11Y-003 | 2.3.3 Animation from Interactions | Medium | Motion-reduction behavior was component-specific instead of shared. | Addressed: global reduced-motion rule added. Manual verification still required. |
| BAP-A11Y-004 | 2.1.1 Keyboard / 2.4.3 Focus Order | High | Mobile navigation did not move focus into the open menu or support Escape return. | Addressed: first-link focus, Escape close, focus return, `aria-expanded`, hidden closed menu, and current-page state added. |
| BAP-A11Y-005 | 3.3.1 Error Identification / 3.3.3 Error Suggestion | High | Contact form relied on native required state and a single generic request error. | Addressed: custom validation, error summary, inline field errors, field links, focus management, and announced success state added. End-to-end test still required. |
| BAP-A11Y-006 | 2.4.4 Link Purpose / 3.2.5 Change on Request | Medium | External venture links opened new tabs without identifying destination or new-tab behavior. | Addressed: footer, Home, Work, and Adventures links are destination-specific and announce new-tab behavior. |
| BAP-A11Y-007 | Accessibility statement | Medium | No public accessibility statement or support path. | Addressed: `/accessibility` page, footer link, Markdown mirror, and support email added. |
| BAP-A11Y-008 | 1.4.3 Contrast / 1.4.11 Non-text Contrast | High | No documented contrast audit for branded typography, subtle borders, gradients, or image overlays. | Partially addressed: shared brand pairs were checked and dark-surface focus contrast plus `prefers-contrast: more` support were added. Full audit remains open. |
| BAP-A11Y-009 | 1.1.1 Non-text Content | Medium | Image alt text requires route-by-route review, including card art, logos, and visual overlays. | Partially addressed: decorative footer/overlay elements and About signature handling were clarified. Full audit remains open. |
| BAP-A11Y-010 | 2.4.4 Link Purpose | Medium | Generic “Visit site” links on Home and Work did not identify the destination out of context. | Addressed: links now use destination-specific labels, such as `Visit XBeton`. |
| BAP-A11Y-011 | 2.4.2 Page Titled / 2.4.6 Headings and Labels | Medium | Metadata is present, but page heading hierarchy and visual-heading semantics need manual verification across all routes. | Open: perform route-by-route keyboard and screen-reader audit. |
| BAP-A11Y-012 | 1.4.10 Reflow / 1.4.12 Text Spacing | High | No documented 200% zoom, 400% reflow, or text-spacing test evidence. | Open: test all public routes and remediate clipping/overlap. |
| BAP-A11Y-013 | 2.5.8 Target Size (Minimum) | Medium | Some shared navigation and text-link targets did not have documented minimum interactive size. | Addressed in code: desktop navigation, footer links, and card links now receive shared minimum target-height styling. Manual visual verification still required. |
| BAP-A11Y-014 | 1.3.1 Info and Relationships | Medium | Adventures book-card content used inline wrappers around block-level heading and paragraph content. | Addressed: book-card body uses valid block content. |

## Phase 1 code delivered

- `app/accessibility.css`: focus, dark-surface focus contrast, skip-link, target-size, high-contrast preference, reduced-motion, forced-colors, form-error, and visually-hidden utilities.
- `app/layout.tsx`: skip link and identifiable `<main id="main-content">` landmark.
- `components/SkipLink.tsx`: programmatic move to the main-content target after activation.
- `components/SiteHeader.tsx`: accessible mobile-menu focus behavior and current-page state.
- `components/ContactForm.tsx`: accessible labels, required notice, custom validation, error summary, inline errors, focus movement, and status updates.
- `components/SiteFooter.tsx`: external-link disclosure and accessibility-statement link.
- `app/page.tsx`, `app/our-work/page.tsx`, `app/families/page.tsx`: descriptive portfolio/storefront links and improved content semantics.
- `app/about/page.tsx`: non-duplicative signature text equivalent.
- `app/accessibility/page.tsx`: public accessibility statement.
- `public/accessibility.md`: Markdown mirror.
- `app/sitemap.ts`: accessibility page added to XML sitemap.
- `docs/accessibility/manual-qa-checklist.md`: reusable manual testing and evidence checklist.

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

1. Complete manual route-by-route keyboard, visual, and assistive-technology audit evidence using `docs/accessibility/manual-qa-checklist.md`.
2. Conduct a full contrast and focus-not-obscured audit for all shared components.
3. Complete image-alt inventory and decorative-image review.
4. Add automated accessibility testing in local development and CI.
5. Create a release evidence folder and use it for regression tracking.
