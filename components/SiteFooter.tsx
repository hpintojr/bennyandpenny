import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <p className="eyebrow">Benny &amp; Penny</p>
          <p className="footerMission">
            A family-built creative and care-centered brand creating meaningful stories,
            visual experiences, family resources, and mission-driven projects.
          </p>
        </div>
        <div className="footerLinks">
          <Link href="/our-work">Our Work</Link>
          <Link href="/families">For Families</Link>
          <Link href="/about">Our Family</Link>
          <Link href="/work-with-us">Work With Us</Link>
        </div>
        <div className="footerContact">
          <a href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a>
          <p>Built with heart, purpose, and family at the center.</p>
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© {year} Benny &amp; Penny. All rights reserved.</span>
        <span>Stories. Care. Creativity. Family.</span>
      </div>
    </footer>
  );
}
