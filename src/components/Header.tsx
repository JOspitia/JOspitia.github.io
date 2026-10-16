import type { JSX, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useActiveSection } from '../hooks/useActiveSection';
import { profile } from '../data/profile';

const NAV_IDS = ['about', 'skills', 'experience', 'projects', 'contact'] as const;
type NavId = (typeof NAV_IDS)[number];

const NAV_KEYS: Record<NavId, string> = {
  about: 'nav.about',
  skills: 'nav.skills',
  experience: 'nav.experience',
  projects: 'nav.projects',
  contact: 'nav.contact',
};

/**
 * Sticky header — sits below the StatusBar (offset via top padding).
 * Brand mark is the user's initials in monospace; active section
 * gets the accent underline. No drop shadow, no rounded chip —
 * just a bottom border so it reads as a terminal sub-toolbar.
 */
export function Header(): JSX.Element {
  const { t } = useTranslation();
  const activeId = useActiveSection(NAV_IDS);

  const handleNavClick =
    (id: string) =>
    (e: MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    };

  return (
    <header
      role="banner"
      className="sticky top-[34px] z-30 border-b border-current/15 bg-[var(--bg-page)]/85 font-mono backdrop-blur-md"
    >
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a
            href="#hero"
            onClick={handleNavClick('hero')}
            data-cursor-hover
            className="flex items-center gap-2 text-sm font-bold text-[var(--fg-page)]"
          >
            <span className="border border-[var(--accent)] px-1.5 py-0.5 text-[var(--accent)]">
              {profile.initials}
            </span>
            <span className="hidden text-[var(--muted)] sm:inline">~/jospitia</span>
          </a>
          <nav aria-label={t('nav.skipToContent')} className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_IDS.map((id) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={handleNavClick(id)}
                      aria-current={isActive ? 'true' : undefined}
                      data-cursor-hover
                      className={[
                        'px-3 py-2 text-xs uppercase tracking-wider transition-colors',
                        isActive
                          ? 'border-b border-[var(--accent)] text-[var(--accent)]'
                          : 'text-[var(--muted)] hover:text-[var(--fg-page)]',
                      ].join(' ')}
                    >
                      {t(NAV_KEYS[id])}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
}