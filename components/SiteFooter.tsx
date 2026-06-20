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
    <>
      <style>{`
        .footerBrandLockup {
          display: flex;
          align-items: center;
          gap: .8rem;
          margin-bottom: 1rem;
        }

        .footerMark {
          display: block;
          flex: 0 0 auto;
          width: 64px;
          height: 64px;
          margin: 0;
          object-fit: contain;
        }

        .footerBrandWordmark {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: .12rem;
        }

        .footerBrandName {
          margin: 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.32rem, 1.8vw, 1.55rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -.045em;
          white-space: nowrap;
        }

        .footerBrandTag {
          margin: .38rem 0 0;
          color: #a6e1d5;
          font-family: "DM Sans", Arial, sans-serif;
          font-size: .61rem;
          font-weight: 700;
          letter-spacing: .23em;
          line-height: 1;
          text-transform: uppercase;
          white-space: nowrap;
        }

        @media (max-width: 520px) {
          .footerMark {
            width: 56px;
            height: 56px;
          }

          .footerBrandLockup {
            gap: .68rem;
          }

          .footerBrandName {
            font-size: 1.24rem;
          }

          .footerBrandTag {
            font-size: .55rem;
            letter-spacing: .19em;
          }
        }
      `}</style>

      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div className="footerBrand">
            <div className="footerBrandLockup">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="footerMark"
                src="/images/logo-mark-transparent.png"
                alt="Benny & Penny's monogram"
                width={64}
                height={64}
              />
              <div className="footerBrandWordmark">
                <p className="footerBrandName">Benny &amp; Penny&apos;s</p>
                <p className="footerBrandTag">A Tech Company</p>
              </div>
            </div>
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
    </>
  );
}
