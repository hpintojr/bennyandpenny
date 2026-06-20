# Manual Accessibility QA Checklist

**Site:** `bennyandpenny.com`  
**Target:** WCAG 2.2 Level AA  
**Use:** Complete this checklist before an accessibility release or audit handoff.

> Record the browser, operating system, assistive technology, route, issue, severity, reproduction steps, and screenshot/video evidence for every failed item.

## Test environment

| Item | Record |
| --- | --- |
| Tester | |
| Date | |
| Build / deployment | |
| Operating system | |
| Browser and version | |
| Screen reader and version | |
| Zoom / text-size setting | |
| Reduced-motion / forced-colors / high-contrast state | |

## Keyboard-only checks

Complete on `/`, `/our-work`, `/families`, `/about`, `/work-with-us`, `/privacy`, `/terms`, `/accessibility`, and a 404 route.

- [ ] Tab order follows a logical reading order.
- [ ] Every interactive item receives a visible focus indicator.
- [ ] Focus is not hidden by the sticky header or another element.
- [ ] Skip link appears on first Tab and moves focus to main content.
- [ ] No keyboard trap occurs.
- [ ] Desktop navigation shows the current page.
- [ ] On mobile width, menu opens with Enter and Space.
- [ ] On mobile width, menu moves focus to its first link.
- [ ] On mobile width, Escape closes the menu and returns focus to the menu control.
- [ ] External links clearly announce that they open in a new tab.
- [ ] All buttons, card links, footer links, and form controls are reachable and usable.

## Contact form checks

Complete on `/work-with-us`.

- [ ] Labels identify every form control.
- [ ] Required fields are clear before submission.
- [ ] Empty required submission moves focus to an error summary.
- [ ] Error summary links move focus to the associated field.
- [ ] Invalid fields expose error text and invalid state to screen readers.
- [ ] Valid submission announces a clear success state.
- [ ] Server-error behavior is understandable and does not lose entered information unexpectedly.
- [ ] Keyboard-only user can submit and start another message.

## Visual and responsive checks

- [ ] 200% browser zoom has no loss of content or functionality.
- [ ] 400% / narrow viewport has no horizontal scrolling except intentionally scrollable content.
- [ ] Text-spacing override does not clip, overlap, or hide text.
- [ ] Browser reduced-motion setting removes nonessential movement.
- [ ] Forced-colors / high-contrast mode keeps controls, text, focus, and errors distinguishable.
- [ ] Focus outlines remain visible on cream, mint, blush, deep-teal, and dark 404 surfaces.
- [ ] Buttons and non-inline link controls remain comfortably selectable by touch or mouse.
- [ ] Text and non-text contrast are measured for all published color pairings.

## Screen-reader checks

Run at minimum with NVDA + Chrome or Firefox and VoiceOver + Safari.

- [ ] Page title, language, and main landmark are announced.
- [ ] Header and footer navigation are distinguishable by accessible name.
- [ ] Heading hierarchy gives a useful page outline.
- [ ] Images communicate meaningful information without redundant or missing alternatives.
- [ ] Decorative graphics are not announced.
- [ ] Mobile menu state and current page are announced correctly.
- [ ] Form errors, validation links, and success status are announced correctly.
- [ ] External-link new-tab behavior is announced.

## Evidence register

| Route | Test | Result | Issue ID / notes | Evidence link |
| --- | --- | --- | --- | --- |
| `/` | Keyboard | | | |
| `/our-work` | Keyboard + external links | | | |
| `/families` | Keyboard + external storefront links | | | |
| `/about` | Images + heading outline | | | |
| `/work-with-us` | Form | | | |
| `/privacy` | Reading order | | | |
| `/terms` | Reading order | | | |
| `/accessibility` | Support path | | | |
| `404` | Recovery links | | | |
