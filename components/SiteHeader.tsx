"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Work" },
  { href: "/families", label: "Adventures" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const frame = window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="siteHeader">
      <style>{`
        .menuToggle { display: none; }
        @media (max-width: 800px) {
          .menuToggle {
            display: inline-flex; align-items: center; justify-content: center;
            width: 46px; height: 46px; margin-right: -10px;
            background: none; border: 0; cursor: pointer; color: var(--ink);
            -webkit-tap-highlight-color: transparent;
          }
        }
        .menuIcon { position: relative; width: 26px; height: 16px; display: block; }
        .menuIcon span {
          position: absolute; left: 0; right: 0; height: 3.4px; border-radius: 999px;
          background: currentColor;
          transition: transform .4s cubic-bezier(.2,.85,.25,1), opacity .25s ease,
                      width .3s ease, height .25s ease, top .3s ease;
        }
        .menuIcon span:nth-child(1) { top: 0; transform-origin: center; transition-delay: .06s; }
        .menuIcon span:nth-child(2) { top: 6.3px; transition-delay: 0s; }
        .menuIcon span:nth-child(3) { top: 12.6px; transform-origin: center; transition-delay: .1s; }

        .menuToggle:hover .menuIcon span { height: 4.4px; }
        .menuToggle:hover .menuIcon span:nth-child(1) { top: -0.3px; }
        .menuToggle:hover .menuIcon span:nth-child(3) { top: 12.9px; }
        .menuToggle:hover .menuIcon span:nth-child(2) { width: 82%; left: 9%; }

        .menuToggle[data-open="true"] .menuIcon span:nth-child(1) { top: 6.3px; transform: rotate(45deg); transition-delay: .05s; }
        .menuToggle[data-open="true"] .menuIcon span:nth-child(2) { transform: translateX(16px); opacity: 0; transition-delay: 0s; }
        .menuToggle[data-open="true"] .menuIcon span:nth-child(3) { top: 6.3px; transform: rotate(-45deg); transition-delay: .13s; }
        .menuToggle[data-open="true"]:hover .menuIcon span { height: 3.4px; }
        .menuToggle[data-open="true"]:hover .menuIcon span:nth-child(2) { width: 100%; left: 0; }

        .mobilePanel { overflow: hidden; max-height: 0; opacity: 0; visibility: hidden;
          transition: max-height .42s cubic-bezier(.2,.8,.2,1), opacity .3s ease, visibility 0s linear .42s;
          background: var(--cream); border-bottom: 1px solid rgba(24,52,55,.1); }
        .mobilePanel.is-open { max-height: 420px; opacity: 1; visibility: visible; transition-delay: 0s; }
        @media (min-width: 801px) { .mobilePanel { display: none; } }
        .mobilePanelNav { display: flex; flex-direction: column; padding: .3rem clamp(20px,5vw,56px) 1.4rem; }
        .mobilePanelNav a { padding: .85rem 0; font-size: 1.08rem; font-weight: 600; color: var(--ink);
          border-bottom: 1px solid rgba(24,52,55,.08); transition: color .2s ease; }
        .mobilePanelNav a:hover { color: var(--teal-deep); }
        .mobilePanelNav .mobileContact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          min-width: 8.7rem;
          min-height: 3.1rem;
          margin-top: 1rem;
          padding: .74rem 1.45rem;
          border: 0;
          border-radius: 999px;
          background: var(--teal);
          color: white;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1;
        }
        .mobilePanelNav .mobileContact:hover { background: var(--teal-deep); color: white; transform: translateY(-1px); }
        @media (prefers-reduced-motion: reduce) {
          .menuIcon span, .mobilePanel { transition: none; }
        }
      `}</style>

      <div className="shell headerInner">
        <Link className="brandMark" href="/" aria-label="Benny and Penny's — A Tech Company, home" onClick={close}>
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
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link className="button button--small" href="/work-with-us" aria-current={pathname === "/work-with-us" ? "page" : undefined}>
            Contact
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menuToggle"
          data-open={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menuIcon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={`mobilePanel${open ? " is-open" : ""}`} hidden={!open}>
        <nav className="mobilePanelNav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button button--small mobileContact"
            href="/work-with-us"
            aria-current={pathname === "/work-with-us" ? "page" : undefined}
            onClick={close}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
