"use client";

import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AccessibilityPreferencesStyles } from "@/components/AccessibilityPreferencesStyles";

type TextScale = 0 | 1 | 2;
type Preferences = { textScale: TextScale; highContrast: boolean; pauseMotion: boolean; readableFont: boolean };
type PreferencesContext = { openPreferences: (trigger?: HTMLElement | null) => void };

const storageKey = "bennyandpenny.accessibility-preferences";
const launcherStorageKey = "bennyandpenny.accessibility-launcher-minimized";
const defaults: Preferences = { textScale: 0, highContrast: false, pauseMotion: false, readableFont: false };
const Context = createContext<PreferencesContext | null>(null);

function applyPreferences(preferences: Preferences) {
  const root = document.documentElement;
  root.dataset.a11yTextScale = String(preferences.textScale);
  root.dataset.a11yHighContrast = String(preferences.highContrast);
  root.dataset.a11yPauseMotion = String(preferences.pauseMotion);
  root.dataset.a11yReadableFont = String(preferences.readableFont);
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="4.75" r="2.15" />
      <path d="M4.25 8.35h15.5M12 7.25v12.1M7.25 20.25 12 13.55l4.75 6.7M8.1 8.45 5.95 14.3M15.9 8.45l2.15 5.85" />
    </svg>
  );
}

function PreferenceToggle({
  checked,
  label,
  description,
  onChange,
}: {
  checked: boolean;
  label: string;
  description: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="a11yPreferences__toggle">
      <span className="a11yPreferences__toggleCopy">
        <span className="a11yPreferences__toggleLabel">{label}</span>
        <span className="a11yPreferences__toggleDescription">{description}</span>
      </span>
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span className="a11yPreferences__switch" aria-hidden="true" />
    </label>
  );
}

export function AccessibilityPreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(defaults);
  const [isLoaded, setIsLoaded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(storageKey) || "null") as Partial<Preferences> | null;
      if (parsed && (parsed.textScale === 0 || parsed.textScale === 1 || parsed.textScale === 2)) {
        setPreferences({
          textScale: parsed.textScale,
          highContrast: parsed.highContrast === true,
          pauseMotion: parsed.pauseMotion === true,
          readableFont: parsed.readableFont === true,
        });
      }
    } catch {
      // Storage may be unavailable in a privacy-restricted browser context.
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    applyPreferences(preferences);
    if (!isLoaded) return;
    try { window.localStorage.setItem(storageKey, JSON.stringify(preferences)); } catch {}
  }, [isLoaded, preferences]);

  const closePreferences = useCallback(() => {
    if (dialogRef.current?.open) dialogRef.current.close();
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const openPreferences = useCallback((trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    if (dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, []);

  const context = useMemo(() => ({ openPreferences }), [openPreferences]);
  const update = (next: Partial<Preferences>) => setPreferences((current) => ({ ...current, ...next }));
  const textSizeLabel = preferences.textScale === 0 ? "Standard" : preferences.textScale === 1 ? "Large" : "Largest";

  return (
    <Context.Provider value={context}>
      <AccessibilityPreferencesStyles />
      {children}
      <dialog ref={dialogRef} className="a11yPreferences" aria-labelledby="a11y-preferences-title" aria-describedby="a11y-preferences-description" onCancel={(event) => { event.preventDefault(); closePreferences(); }}>
        <div className="a11yPreferences__header">
          <div>
            <p className="a11yPreferences__eyebrow">Display controls</p>
            <h2 id="a11y-preferences-title">Accessibility preferences</h2>
          </div>
          <button type="button" className="a11yPreferences__close" onClick={closePreferences} aria-label="Close accessibility preferences">×</button>
        </div>

        <p id="a11y-preferences-description" className="a11yPreferences__intro">These settings work alongside your browser and device accessibility preferences. Selections are saved on this device.</p>

        <section className="a11yPreferences__section" aria-labelledby="a11y-text-size-title">
          <h3 id="a11y-text-size-title">Text size</h3>
          <div className="a11yPreferences__textSize">
            <button type="button" onClick={() => update({ textScale: Math.max(0, preferences.textScale - 1) as TextScale })} disabled={preferences.textScale === 0} aria-label="Decrease text size">A−</button>
            <output aria-live="polite">{textSizeLabel}</output>
            <button type="button" onClick={() => update({ textScale: Math.min(2, preferences.textScale + 1) as TextScale })} disabled={preferences.textScale === 2} aria-label="Increase text size">A+</button>
          </div>
        </section>

        <section className="a11yPreferences__section" aria-label="Display options">
          <PreferenceToggle checked={preferences.highContrast} label="High contrast" description="Strengthen text, border, and control contrast." onChange={(highContrast) => update({ highContrast })} />
          <PreferenceToggle checked={preferences.pauseMotion} label="Pause animations" description="Stop nonessential motion and transitions for this site." onChange={(pauseMotion) => update({ pauseMotion })} />
          <PreferenceToggle checked={preferences.readableFont} label="Readable font" description="Use a plain system sans-serif font for site text." onChange={(readableFont) => update({ readableFont })} />
        </section>

        <div className="a11yPreferences__actions">
          <button type="button" className="button button--light" onClick={() => setPreferences(defaults)}>Reset preferences</button>
          <button type="button" className="button" onClick={closePreferences}>Done</button>
        </div>
      </dialog>
    </Context.Provider>
  );
}

export function AccessibilityPreferencesTrigger({ className = "" }: { className?: string }) {
  const context = useContext(Context);
  if (!context) throw new Error("Accessibility preferences provider is missing.");
  return (
    <button
      type="button"
      className={`a11yPreferencesTrigger ${className}`.trim()}
      aria-haspopup="dialog"
      onClick={(event) => context.openPreferences(event.currentTarget)}
    >
      Accessibility preferences
    </button>
  );
}

export function AccessibilityPreferencesDock() {
  const context = useContext(Context);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLButtonElement>(null);
  const focusLauncherAfterRestore = useRef(false);
  const focusRestoreAfterMinimize = useRef(false);

  useEffect(() => {
    try {
      setIsMinimized(window.localStorage.getItem(launcherStorageKey) === "true");
    } catch {
      // The launcher remains expanded for the current visit if storage is unavailable.
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try { window.localStorage.setItem(launcherStorageKey, String(isMinimized)); } catch {}
  }, [isLoaded, isMinimized]);

  useEffect(() => {
    if (focusLauncherAfterRestore.current && !isMinimized) {
      focusLauncherAfterRestore.current = false;
      window.requestAnimationFrame(() => launcherRef.current?.focus());
    }
    if (focusRestoreAfterMinimize.current && isMinimized) {
      focusRestoreAfterMinimize.current = false;
      window.requestAnimationFrame(() => restoreRef.current?.focus());
    }
  }, [isMinimized]);

  if (!context) throw new Error("Accessibility preferences provider is missing.");

  function minimizeLauncher() {
    focusRestoreAfterMinimize.current = true;
    setIsMinimized(true);
  }

  function restoreLauncher() {
    focusLauncherAfterRestore.current = true;
    setIsMinimized(false);
  }

  return (
    <aside className={`a11yDock${isMinimized ? " a11yDock--minimized" : ""}`} aria-label="Accessibility quick controls">
      {isMinimized ? (
        <button ref={restoreRef} type="button" className="a11yDock__restore" onClick={restoreLauncher} aria-label="Show accessibility launcher" title="Show accessibility launcher">
          <AccessibilityIcon />
          <span>Accessibility</span>
        </button>
      ) : (
        <div className="a11yDock__launcher">
          <button
            ref={launcherRef}
            type="button"
            className="a11yDock__open"
            aria-label="Open accessibility preferences"
            aria-haspopup="dialog"
            title="Accessibility preferences"
            onClick={(event) => context.openPreferences(event.currentTarget)}
          >
            <AccessibilityIcon />
          </button>
          <button type="button" className="a11yDock__minimize" onClick={minimizeLauncher} aria-label="Minimize accessibility launcher" title="Minimize accessibility launcher">
            <span aria-hidden="true">×</span>
          </button>
          <span className="a11yDock__tooltip" aria-hidden="true">Accessibility preferences</span>
        </div>
      )}
    </aside>
  );
}
