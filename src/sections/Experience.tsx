import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

/**
 * Experience — vertical timeline with monospace dates and sharp
 * section borders (2026-10 redesign). Each entry is a terminal-card:
 *
 *   2024-02 → 2026-09   ●   Blue Data Service · Healthcare
 *                       │
 *                       ├── QA Automation / Consultant
 *                       ├── QA stack: Cypress, Playwright, Postman, SQL
 *                       ├── ↳ 30% production defect reduction
 *                       └── ↳ 90% automated E2E coverage
 */
export function Experience(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-b border-current/15 bg-[var(--bg-page)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="experience.title" subtitleKey="experience.subtitle" sectionKey="experience" />

        <Reveal as="ol" className="space-y-6">
          {experience.map((entry) => (
            <li
              key={entry.id}
              className="grid grid-cols-1 gap-4 border border-current/20 bg-[var(--terminal-800)] p-6 md:grid-cols-[180px_1fr]"
            >
              <div className="font-mono">
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{t(entry.periodKey)}</p>
                <p className="mt-1 text-sm text-[var(--fg-page)]">{t(entry.locationKey)}</p>
              </div>
              <div className="border-t border-current/15 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <p className="text-lg font-semibold text-[var(--fg-page)]">
                  <span className="font-mono text-sm text-[var(--accent)]">●</span>{' '}
                  {t(entry.titleKey)} · <span className="text-[var(--muted)]">{entry.company}</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[var(--muted)]">
                  {t(entry.sectorKey)}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-[var(--fg-page)]">
                  {entry.highlights.map((highlightKey) => (
                    <li key={highlightKey} className="flex gap-2">
                      <span className="text-[var(--accent)]">↳</span>
                      <span>{t(highlightKey)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-xs text-[var(--muted)]">
                  {t(entry.stackKey)}
                </p>
              </div>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}