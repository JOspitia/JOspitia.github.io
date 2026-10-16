import { useCallback, useEffect, useState } from 'react';

/**
 * Theme hook — owns the `dark` / `light` decision and persists it to
 * `localStorage` under the `jospitia-theme` key so the choice survives
 * reloads.
 *
 * Default: `dark` (the user-facing portfolio reads as a developer
 * platform; light mode is the opt-in escape hatch).
 *
 * Implementation notes:
 *   • Adds/removes the `dark` class on `<html>` directly so Tailwind's
 *     `class` dark-mode strategy (configured in `tailwind.config.js`)
 *     flips every surface token in one render.
 *   • Exposes `toggle()` for the ThemeToggle button and `setTheme()`
 *     for any future programmatic overrides.
 *   • The read-from-storage runs synchronously inside the `useState`
 *     initializer so the first paint already shows the right theme —
 *     no flash of light mode when the saved preference is dark.
 */
export type Theme = 'dark' | 'light';
const STORAGE_KEY = 'jospitia-theme';

function readInitial(): Theme {
  // localStorage may throw in private mode; fall back to dark.
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    /* ignore */
  }
  return 'dark';
}

function applyToDom(theme: Theme): void {
  const html = document.documentElement;
  html.classList.toggle('dark', theme === 'dark');
  html.classList.toggle('light', theme === 'light');
}

export function useTheme(): {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
} {
  const [theme, setThemeState] = useState<Theme>(readInitial);

  // Mirror to <html> class + localStorage whenever the state flips.
  useEffect(() => {
    applyToDom(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore quota / private mode */
    }
  }, [theme]);

  const toggle = useCallback((): void => {
    setThemeState((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((t: Theme): void => {
    setThemeState(t);
  }, []);

  return { theme, toggle, setTheme };
}