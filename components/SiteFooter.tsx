import Link from "next/link";

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

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div className="footerBrand">
          {/* Uses the exact same approved horizontal logo asset as the site header. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-horizontal-transparent.png"
            alt="Benny & Penny's — A Tech Company"
            width={306}
            height={61}
            style={{
              display: "block",
              width: "min(100%, 306px)",
              height: "auto",
              marginBottom: "1.35rem",
            }}
          />
          <p className="footerMission">
            The technology and creative studio of Hamilton Pinto Jr. — software architecture,
            creative technology, and publishing for brands, platforms, and ventures.
          </p>
        </div>

        <nav className="footerCol" aria-label="Explore">
          <p className="footerColLabel">Explore</p>
          {explore.map((e) => (
            <Link key={e.href} className="footerLink" href={e.href}>{e.label}</Link>
          ))}
        </nav>

        <nav className="footerCol" aria-label="Ventures">
          <p className="footerColLabel">Ventures</p>
          {ventures.map((v) => (
            <a key={v.label} className="footerLink" href={v.url} target="_blank" rel="noopener">
              {v.label}
            </a>
          ))}
        </nav>

        <div className="footerCol">
          <p className="footerColLabel">Connect</p>
          <a className="footerLink footerLink--email" href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a>
          <p className="footerLocation">Southern California</p>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>© {year} Benny &amp; Penny&apos;s — A Tech Company. All rights reserved.</span>
        <span className="footerLegal">
          <Link className="footerLink" href="/privacy">Privacy Policy</Link>
          <span aria-hidden="true" className="footerDot">·</span>
          <Link className="footerLink" href="/terms">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
