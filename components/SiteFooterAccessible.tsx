"use client";

import Link from "next/link";
import { AccessibilityPreferencesTrigger } from "@/components/AccessibilityPreferences";

const ventures = [
  { label: "Advantage First Financial", url: "https://www.advantagefirst.com/" },
  { label: "American Colonial Capital", url: "https://acc.capital/" },
  { label: "Benny & Penny's Adventures", url: "https://www.bennyandpennyadventures.com/" },
  { label: "Mercury Call Desk", url: "https://mercurycalldesk.com/" },
  { label: "XBeton", url: "https://www.xbeton.com/" },
];

const explore = [
  { href: "/our-work", label: "Work" },
  { href: "/families", label: "Adventures" },
  { href: "/about", label: "About" },
  { href: "/work-with-us", label: "Contact" },
];

export function SiteFooterAccessible() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footerBrandLockup { display: flex; align-items: center; gap: .82rem; margin-bottom: 1.2rem; }
        .footerBrandLockup .footerMark { display: block; flex: 0 0 auto; width: 66px; height: 66px; margin: 0; object-fit: contain; }
        .footerBrandWordmark { display: flex; flex-direction: column; justify-content: center; min-width: 0; padding-top: .08rem; }
        .footerBrandName { margin: 0; color: #fffdf9; font-family: Didot, "Bodoni MT", Georgia, serif; font-size: clamp(1.88rem, 2vw, 1.72rem); font-weight: 300; font-style: normal; line-height: .82; letter-spacing: -.07em; white-space: nowrap; }
        .footerBrandTag { margin: .46rem 0 0; color: #a6e1d5; font-family: Geometric, "Avenir Next", Arial, sans-serif; font-size: .85rem; font-weight: 500; letter-spacing: .155em; line-height: 1; text-transform: uppercase; white-space: nowrap; }
        .footerBottom { color: rgba(255, 255, 255, .62); }
        .footerLegal .footerLink { color: rgba(255, 255, 255, .72); }
        @media (max-width: 520px) { .footerBrandLockup { gap: .7rem; } .footerBrandLockup .footerMark { width: 58px; height: 58px; } }
      `}</style>

      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div className="footerBrand">
            <div className="footerBrandLockup">
              <img className="footerMark" src="/images/logo-mark-transparent.png" alt="" width={66} height={66} />
              <div className="footerBrandWordmark">
                <p className="footerBrandName">Benny &amp; Penny&apos;s</p>
                <p className="footerBrandTag">A Tech Company</p>
              </div>
            </div>
            <p className="footerMission">The development and design studio of Hamilton Pinto Jr., delivering custom API integrations, business consulting, and publishing solutions. Proudly motivated by my children, Benny and Penny.</p>
          </div>

          <nav className="footerCol" aria-label="Explore">
            <p className="footerColLabel">Explore</p>
            {explore.map((item) => <Link key={item.href} className="footerLink" href={item.href}>{item.label}</Link>)}
          </nav>

          <nav className="footerCol" aria-label="Ventures">
            <p className="footerColLabel">Ventures</p>
            {ventures.map((venture) => (
              <a key={venture.label} className="footerLink" href={venture.url} target="_blank" rel="noopener noreferrer">
                {venture.label}<span className="visuallyHidden"> (opens in a new tab)</span>
              </a>
            ))}
          </nav>

          <div className="footerCol">
            <p className="footerColLabel">Connect</p>
            <a className="footerLink footerLink--email" href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a>
            <AccessibilityPreferencesTrigger className="footerLink a11yPreferencesTrigger--footer" />
            <p className="footerLocation">Southern California</p>
          </div>
        </div>

        <div className="shell footerBottom">
          <span>© {year} Benny &amp; Penny&apos;s — A Tech Company. All rights reserved.</span>
          <span className="footerLegal">
            <Link className="footerLink" href="/privacy">Privacy Policy</Link>
            <span aria-hidden="true" className="footerDot">·</span>
            <Link className="footerLink" href="/terms">Terms of Service</Link>
            <span aria-hidden="true" className="footerDot">·</span>
            <Link className="footerLink" href="/accessibility">Accessibility</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
