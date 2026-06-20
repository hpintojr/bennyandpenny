"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function RouteFocusManager() {
  const pathname = usePathname();
  const initialPathname = useRef(pathname);

  useEffect(() => {
    if (pathname === initialPathname.current) return;

    const frame = window.requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>("#main-content h1");
      const target = heading ?? document.getElementById("main-content");
      if (!target) return;
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
