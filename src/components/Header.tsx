import type { JSX, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useActiveSection } from '../hooks/useActiveSection';
import { profile } from '../data/profile';

const NAV_IDS = ['about', 'skills', 'projects', 'contact'] as const;
type NavId = (typeof NAV_IDS)[number];

const NAV_KEYS: Record<NavId, string> = {
  about: 'nav.about',
  skills: 'nav.skills',
  projects: 'nav.projects',
  contact: 'nav.contact',
};

/**
 * Sticky site header. Layout:
 *
 * - Logo (`profile.initials`) on the left, scrolls to `#hero` on click.
 * - Anchor nav in the middle, hidden below `md` (mobile gets the
 *   LanguageSwitcher only; sections themselves are still reachable by
 *   scrolling or via the CTAs in Hero).
 * - `LanguageSwitcher` on the right.
 *
 * Active section is derived from `useActiveSection` so the matching nav
 * link gets `aria-current="true"` and the accent color as the user scrolls.
 *
 * Click handler intercepts anchor navigation so we can `scrollIntoView`
 * with `behavior: 'smooth'` and update the URL hash without triggering the
 * browser's default jump.
 */
export function Header(): JSX.Element {
  const { t } = useTranslation();
  const activeId = useActiveSection(NAV_IDS);

  const handleNavClick =
    (id: string) =>
    (e: MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without triggering the browser's default jump
      window.history.replaceState(null, '', `#${id}`);
    };

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            onClick={handleNavClick('hero')}
            className="text-sm font-semibold tracking-tight text-slate-900 hover:text-blue-600"
          >
            {profile.initials}
            <span className="sr-only"> — {t('nav.skipToContent')}</span>
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
                      className={[
                        'rounded px-3 py-2 text-sm font-medium transition-colors',
                        isActive
                          ? 'text-blue-600'
                          : 'text-slate-600 hover:text-slate-900',
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