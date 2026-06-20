"use client";

import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type TextScale = 0 | 1 | 2;
type Preferences = { textScale: TextScale; highContrast: boolean; pauseMotion: boolean; readableFont: boolean };
type PreferencesContext = { openPreferences: (trigger?: HTMLElement | null) => void };

const storageKey = "bennyandpenny.accessibility-preferences";
const defaults: Preferences = { textScale: 0, highContrast: false, pauseMotion: false, readableFont: false };
const Context = createContext<PreferencesContext | null>(null);

function applyPreferences(preferences: Preferences) {
  const root = document.documentElement;
  root.dataset.a11yTextScale = String(preferences.textScale);
  root.dataset.a11yHighContrast = String(preferences.highContrast);
  root.dataset.a11yPauseMotion = String(preferences.pauseMotion);
  root.dataset.a11yReadableFont = String(preferences.readableFont);
}

export function AccessibilityPreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(defaults);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(storageKey) || "null") as Preferences | null;
      if (parsed && (parsed.textScale === 0 || parsed.textScale === 1 || parsed.textScale === 2)) setPreferences({ ...defaults, ...parsed });
    } catch {}
  }, []);

  useEffect(() => {
    applyPreferences(preferences);
    try { window.localStorage.setItem(storageKey, JSON.stringify(preferences)); } catch {}
  }, [preferences]);

  const closePreferences = useCallback(() => {
    if (dialogRef.current?.open) dialogRef.current.close();
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const openPreferences = useCallback((trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    if (dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, []);

  const context = useMemo(() => ({ openPreferences }), [openPreferences]);

  return (
    <Context.Provider value={context}>
      {children}
      <dialog ref={dialogRef} className="a11yPreferences" aria-labelledby="a11y-preferences-title" onCancel={(event) => { event.preventDefault(); closePreferences(); }}>
        <div className="a11yPreferences__header">
          <div><p className="a11yPreferences__eyebrow">Display controls</p><h2 id="a11y-preferences-title">Accessibility preferences</h2></div>
          <button type="button" className="a11yPreferences__close" onClick={closePreferences} aria-label="Close accessibility preferences">×</button>
        </div>
        <p className="a11yPreferences__intro">These settings work alongside your browser and device accessibility preferences. Selections are saved on this device.</p>
        <div className="a11yPreferences__actions"><button type="button" className="button button--light" onClick={() => setPreferences(defaults)}>Reset preferences</button><button type="button" className="button" onClick={closePreferences}>Done</button></div>
      </dialog>
    </Context.Provider>
  );
}

export function AccessibilityPreferencesTrigger({ className = "" }: { className?: string }) {
  const context = useContext(Context);
  if (!context) throw new Error("Accessibility preferences provider is missing.");
  return <button type="button" className={`a11yPreferencesTrigger ${className}`.trim()} onClick={(event) => context.openPreferences(event.currentTarget)}>Accessibility preferences</button>;
}
