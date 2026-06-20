export function AccessibilityPreferencesStyles() {
  return (
    <style>{`
      html[data-a11y-text-scale="1"] { font-size: 112.5%; }
      html[data-a11y-text-scale="2"] { font-size: 125%; }

      html[data-a11y-high-contrast="true"] {
        --ink: #062326;
        --muted: #183f43;
        --teal: #005f5a;
        --teal-deep: #003f3b;
        --mint: #e3fff4;
        --mint-bright: #f6fffb;
        --blush: #ffe8e8;
        --cream: #ffffff;
        --paper: #ffffff;
        --line: rgba(6, 35, 38, .58);
        --shadow: 0 12px 28px rgba(6, 35, 38, .18);
        --a11y-focus: #003bb3;
      }

      html[data-a11y-high-contrast="true"] .siteHeader { background: rgba(255, 255, 255, .98); border-bottom-color: rgba(6, 35, 38, .45); }
      html[data-a11y-high-contrast="true"] .siteFooter { background: #062326; }
      html[data-a11y-high-contrast="true"] .footerMission,
      html[data-a11y-high-contrast="true"] .footerLocation,
      html[data-a11y-high-contrast="true"] .footerLegal .footerLink { color: #ffffff; }
      html[data-a11y-high-contrast="true"] .button--light { border-width: 2px; }
      html[data-a11y-high-contrast="true"] .card,
      html[data-a11y-high-contrast="true"] .contactPanel,
      html[data-a11y-high-contrast="true"] .workCard,
      html[data-a11y-high-contrast="true"] .bookCard { border-width: 2px; }

      html[data-a11y-readable-font="true"] body,
      html[data-a11y-readable-font="true"] button,
      html[data-a11y-readable-font="true"] input,
      html[data-a11y-readable-font="true"] select,
      html[data-a11y-readable-font="true"] textarea,
      html[data-a11y-readable-font="true"] .display,
      html[data-a11y-readable-font="true"] .h2,
      html[data-a11y-readable-font="true"] .card h3,
      html[data-a11y-readable-font="true"] .legal h2,
      html[data-a11y-readable-font="true"] .notFoundContent h1,
      html[data-a11y-readable-font="true"] .footerBrandName,
      html[data-a11y-readable-font="true"] .adventuresBrand__name,
      html[data-a11y-readable-font="true"] .adventuresBrand__adventures {
        font-family: Arial, Helvetica, sans-serif !important;
        letter-spacing: normal !important;
      }

      html[data-a11y-pause-motion="true"] *,
      html[data-a11y-pause-motion="true"] *::before,
      html[data-a11y-pause-motion="true"] *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
      }

      .a11yPreferencesTrigger {
        display: inline-flex;
        align-items: center;
        min-height: 2.75rem;
        padding: .45rem 0;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-weight: 700;
        cursor: pointer;
        text-align: left;
        text-decoration: underline;
        text-decoration-thickness: 1.5px;
        text-underline-offset: .2em;
      }

      .a11yPreferencesTrigger--footer { color: #ffffff; }
      .a11yPreferencesTrigger--footer:hover { color: #c9fff0; }

      .a11yPreferences {
        width: min(100% - 2rem, 39rem);
        max-height: min(90svh, 44rem);
        overflow: auto;
        padding: clamp(1.1rem, 3vw, 2rem);
        border: 2px solid var(--teal-deep);
        border-radius: 1.1rem;
        background: var(--paper);
        color: var(--ink);
        box-shadow: 0 22px 70px rgba(0, 0, 0, .35);
      }

      .a11yPreferences::backdrop { background: rgba(4, 21, 23, .68); }
      .a11yPreferences__header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }
      .a11yPreferences__eyebrow { margin: 0 0 .3rem; color: var(--teal-deep); font-size: .76rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
      .a11yPreferences h2 { margin: 0; font-size: clamp(1.45rem, 4vw, 2rem); line-height: 1.1; }
      .a11yPreferences h3 { margin: 0; font-size: 1rem; }
      .a11yPreferences__intro { margin: 1rem 0 0; color: var(--muted); }
      .a11yPreferences__close {
        display: inline-grid;
        width: 2.75rem;
        height: 2.75rem;
        flex: 0 0 auto;
        place-items: center;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: var(--paper);
        color: var(--ink);
        font-size: 1.75rem;
        line-height: 1;
        cursor: pointer;
      }
      .a11yPreferences__section { display: grid; gap: .9rem; margin-top: 1.35rem; padding-top: 1.35rem; border-top: 1px solid var(--line); }
      .a11yPreferences__textSize { display: flex; align-items: center; gap: .7rem; }
      .a11yPreferences__textSize button { min-width: 3.15rem; min-height: 2.75rem; border: 1px solid var(--teal-deep); border-radius: .75rem; background: var(--paper); color: var(--teal-deep); font-weight: 800; cursor: pointer; }
      .a11yPreferences__textSize button:disabled { opacity: .48; cursor: not-allowed; }
      .a11yPreferences__textSize output { min-width: 6rem; font-weight: 700; text-align: center; }
      .a11yPreferences__toggle { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 1rem; min-height: 3.35rem; cursor: pointer; }
      .a11yPreferences__toggleCopy { display: grid; gap: .18rem; }
      .a11yPreferences__toggleLabel { font-weight: 800; }
      .a11yPreferences__toggleDescription { color: var(--muted); font-size: .9rem; }
      .a11yPreferences__toggle input { position: absolute; inline-size: 1px; block-size: 1px; opacity: 0; }
      .a11yPreferences__switch { position: relative; width: 3.2rem; height: 1.85rem; border: 2px solid var(--teal-deep); border-radius: 999px; background: var(--paper); }
      .a11yPreferences__switch::after { position: absolute; top: 50%; left: .18rem; width: 1.1rem; height: 1.1rem; border-radius: 50%; background: var(--teal-deep); content: ""; transform: translateY(-50%); transition: transform .18s ease; }
      .a11yPreferences__toggle input:checked + .a11yPreferences__switch { background: var(--teal-deep); }
      .a11yPreferences__toggle input:checked + .a11yPreferences__switch::after { background: #ffffff; transform: translate(1.28rem, -50%); }
      .a11yPreferences__toggle input:focus-visible + .a11yPreferences__switch { outline: 3px solid var(--a11y-focus); outline-offset: 3px; }
      .a11yPreferences__actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: .75rem; margin-top: 1.6rem; padding-top: 1.35rem; border-top: 1px solid var(--line); }

      @media (max-width: 480px) {
        .a11yPreferences { width: min(100% - 1rem, 39rem); padding: 1rem; }
        .a11yPreferences__actions .button { width: 100%; }
      }
    `}</style>
  );
}
