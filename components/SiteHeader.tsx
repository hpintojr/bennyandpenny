import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Our Work" },
  { href: "/families", label: "For Families" },
  { href: "/about", label: "Our Family" },
];

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="brandMark" href="/" aria-label="Benny and Penny home">
          <span className="brandMark__icon" aria-hidden="true">B + P</span>
          <span className="brandMark__name">Benny &amp; Penny</span>
        </Link>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link className="button button--small" href="/work-with-us">Work With Us</Link>
        </nav>

        <details className="mobileNav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link className="button button--small" href="/work-with-us">Work With Us</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
