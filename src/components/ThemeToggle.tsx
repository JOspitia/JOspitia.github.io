import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

/**
 * Theme toggle — single button that flips dark / light. Label is
 * localized; the visible glyph is the *target* theme, not the
 * current one ("moon" while you're in light mode invites you to
 * switch to dark, etc.) — matches GitHub/Linear behavior.
 *
 * Visually it sits inside the StatusBar so the chrome stays compact.
 * The icon is an inline SVG so we don't ship an icon library.
 */
export function ThemeToggle(): JSX.Element {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  const target: 'dark' | 'light' = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('status.themeToggle', {
        target: target === 'dark' ? t('status.dark') : t('status.light'),
      })}
      className="inline-flex items-center gap-2 border border-current/30 px-2 py-1 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-[var(--fg-page)] hover:text-[var(--bg-page)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      {target === 'dark' ? (
        // Moon icon — switch TO dark
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        // Sun icon — switch TO light
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      )}
      <span>{target === 'dark' ? t('status.dark') : t('status.light')}</span>
    </button>
  );
}