import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Work" },
  { href: "/families", label: "Adventures" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="brandMark" href="/" aria-label="Benny and Penny's — A Tech Company, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brandLogo"
            src="/images/logo-horizontal-transparent.png"
            alt="Benny &amp; Penny's — A Tech Company"
            width={269}
            height={54}
          />
        </Link>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link className="button button--small" href="/work-with-us">Contact</Link>
        </nav>

        <details className="mobileNav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link className="button button--small" href="/work-with-us">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
