"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const changes = [
  ["Benny & Penny's Adventures", "Benny & Penny Adventures"],
  ["Benny & Penny’s Adventures", "Benny & Penny Adventures"],
  ["Benny & Penny's", "Benny & Penny"],
  ["Benny & Penny’s", "Benny & Penny"],
  ["Benny and Penny's Adventures", "Benny and Penny Adventures"],
  ["Benny and Penny’s Adventures", "Benny and Penny Adventures"],
  ["Benny and Penny's", "Benny and Penny"],
  ["Benny and Penny’s", "Benny and Penny"]
] as const;

function normalize(value: string) {
  return changes.reduce((result, [from, to]) => result.split(from).join(to), value);
}

function normalizePage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const texts: Text[] = [];
  let current: Node | null;
  while ((current = walker.nextNode())) {
    const parent = current.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION"].includes(parent.tagName) || parent.isContentEditable) continue;
    texts.push(current as Text);
  }
  for (const textNode of texts) {
    const value = textNode.nodeValue || "";
    const next = normalize(value);
    if (next !== value) textNode.nodeValue = next;
  }
  for (const element of document.querySelectorAll<HTMLElement>("[aria-label],[alt],[title],[placeholder]")) {
    for (const name of ["aria-label", "alt", "title", "placeholder"]) {
      const value = element.getAttribute(name);
      if (!value) continue;
      const next = normalize(value);
      if (next !== value) element.setAttribute(name, next);
    }
  }
  document.title = normalize(document.title);
}

export function BrandNameNormalizer() {
  const pathname = usePathname();
  useEffect(() => {
    normalizePage();
    const observer = new MutationObserver(normalizePage);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
