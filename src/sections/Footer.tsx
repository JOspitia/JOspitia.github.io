import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';

/**
 * Footer — terminal status line. Three columns separated by
 * `│` glyphs so it reads like the bottom of `htop`:
 *
 *   © 2026 Johan Ospitia  │  Built with React + Vite + GSAP  │  200 OK · last deploy 2026-10-16
 *   Privacy · IndexNow key
 */
export function Footer(): JSX.Element {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const lastDeploy = new Date().toISOString().slice(0, 10);

  return (
    <footer
      role="contentinfo"
      className="border-t border-current/15 bg-[var(--terminal-900)] px-4 py-6 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-[var(--muted)] sm:flex-row">
          <p className="text-[var(--fg-page)]">
            <span className="text-[var(--accent)]">©</span> {year} {t('footer.copyright', { year })}
          </p>
          <p className="hidden sm:flex">
            <span className="text-[var(--fg-page)]">{t('footer.builtWith')}</span>
            <span className="mx-2 text-[var(--accent)]">│</span>
            <span className="text-[var(--accent)]">200 OK</span>
            <span className="mx-2 text-[var(--muted)]">·</span>
            <span>last deploy {lastDeploy}</span>
          </p>
          <p className="sm:hidden">
            <span className="text-[var(--accent)]">200 OK</span>
            <span className="mx-2 text-[var(--muted)]">·</span>
            <span>last deploy {lastDeploy}</span>
          </p>
        </div>
        <div className="mt-3 flex flex-col items-center justify-between gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--muted)] sm:flex-row">
          <a
            href="/privacy.html"
            data-cursor-hover
            className="border-b border-transparent transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {t('footer.privacyLink')} →
          </a>
          <a
            href="/indexnow-key.txt"
            data-cursor-hover
            className="border-b border-transparent transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            title={t('footer.indexNowKey')}
          >
            {t('footer.indexNowKey')} →
          </a>
          <a
            href="https://github.com/JOspitia/JOspitia.github.io/blob/main/README-PROFILE.md"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="border-b border-transparent transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            README-PROFILE →
          </a>
        </div>
      </Container>
    </footer>
  );
}