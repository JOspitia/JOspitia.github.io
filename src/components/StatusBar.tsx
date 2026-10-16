import { useEffect, useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';

/**
 * Sticky status bar — mimics the bottom-of-terminal status line.
 * Shows:
 *   • Blinking green dot + "AVAILABLE FOR REMOTE WORK" copy
 *   • Current time in HH:MM:SS UTC (updates every second)
 *   • Theme toggle on the right edge
 *
 * Lives outside <main> so it doesn't disrupt the document flow, but
 * inside the visible viewport via `fixed top-0`. The skip link still
 * works because it has a higher z-index than this bar.
 */
export function StatusBar(): JSX.Element {
  const { t } = useTranslation();
  const [now, setNow] = useState(() => formatUtc(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setNow(formatUtc(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-40 border-b border-current/20 bg-[var(--bg-page)]/85 font-mono text-[0.7rem] uppercase tracking-wider backdrop-blur-md"
    >
      <div className="mx-auto flex w-[min(90%,1440px)] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              style={{ animation: 'caretBlink 1s steps(1) infinite' }}
              aria-hidden="true"
            />
            <span className="text-[var(--fg-page)]">{t('status.available')}</span>
          </span>
          <span className="hidden text-[var(--muted)] sm:inline" aria-hidden="true">
            · UTC-5 · &lt; 100ms response
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-[var(--muted)] md:inline" aria-hidden="true">
            <time dateTime={new Date().toISOString()}>{now}</time> UTC
          </span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

/**
 * Formats a Date as HH:MM:SS in UTC. Pads with leading zeros so the
 * bar's character grid doesn't twitch every second.
 */
function formatUtc(d: Date): string {
  const pad = (n: number): string => n.toString().padStart(2, '0');
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
}