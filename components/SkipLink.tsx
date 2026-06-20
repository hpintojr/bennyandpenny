"use client";

export function SkipLink() {
  function moveFocusToMain() {
    window.requestAnimationFrame(() => document.getElementById("main-content")?.focus());
  }

  return (
    <a className="skipLink" href="#main-content" onClick={moveFocusToMain}>
      Skip to main content
    </a>
  );
}
