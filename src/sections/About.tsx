import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { CountUp } from '../components/CountUp';

type Highlight = {
  valueKey: string;
  labelKey: string;
  /** Pre-formatted display value (e.g. "4+", "30%") for the counter. */
  raw: string;
};

/**
 * About section — bento-grid layout (2026-10 redesign):
 *
 *   ┌──────────────┬──────────────┐
 *   │   bio (lead) │   photo       │
 *   ├──────────────┴──────────────┤
 *   │   4 stat tiles                │
 *   ├──────────────┬──────────────┤
 *   │   AI workflow │   quick links│
 *   └──────────────┴──────────────┘
 *
 * Sharp borders, monospace section markers, accent dot for the
 * "open to remote" status. CountUp animates the headline numbers
 * on scroll into view (works for both the "%" and "years" tiles).
 */
const HIGHLIGHTS: readonly Highlight[] = [
  { valueKey: 'about.highlights.years', labelKey: 'about.highlights.yearsLabel', raw: '4+' },
  { valueKey: 'about.highlights.delivery', labelKey: 'about.highlights.deliveryLabel', raw: '40%' },
  { valueKey: 'about.highlights.defects', labelKey: 'about.highlights.defectsLabel', raw: '30%' },
  { valueKey: 'about.highlights.coverage', labelKey: 'about.highlights.coverageLabel', raw: '90%' },
];

export function About(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-b border-current/15 bg-[var(--bg-page)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="about.title" subtitleKey="about.lead" sectionKey="about" />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Lead bio — 2/3 width on desktop */}
          <Reveal className="border border-current/20 bg-[var(--terminal-800)] p-6 lg:col-span-2">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {t('about.statusLabel', { defaultValue: 'Open to remote' })}
            </p>
            <p className="text-base leading-relaxed text-[var(--fg-page)] sm:text-lg">
              {t('about.body')}
            </p>
          </Reveal>

          {/* Photo — 1/3 width */}
          <Reveal className="overflow-hidden border border-current/20 bg-[var(--terminal-800)] p-2">
            <picture>
              <source srcSet="/foto.webp" type="image/webp" />
              <img
                src={profile.photoUrl}
                alt={t('about.photoAlt')}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale-[20%]"
              />
            </picture>
          </Reveal>

          {/* 4 stat tiles */}
          <Reveal className="grid grid-cols-2 gap-3 lg:col-span-2">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.valueKey}
                className="border border-current/20 bg-[var(--terminal-800)] p-5"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  {t(h.labelKey)}
                </p>
                <p className="mt-2 font-mono text-3xl font-bold text-[var(--fg-page)]">
                  <CountUp raw={h.raw} />
                </p>
              </div>
            ))}
          </Reveal>

          {/* Quick links / contact card */}
          <Reveal className="border border-current/20 bg-[var(--terminal-800)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">$ ls links</p>
            <ul className="mt-3 space-y-1 font-mono text-sm">
              <li>
                <a className="border-b border-transparent transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]" href="https://github.com/JOspitia">
                  ~/github.com/JOspitia
                </a>
              </li>
              <li>
                <a className="border-b border-transparent transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]" href="https://www.linkedin.com/in/johan-ospitia/">
                  ~/linkedin.com/in/johan-ospitia
                </a>
              </li>
              <li>
                <a className="border-b border-transparent transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]" href="mailto:jjohanospitia@gmail.com">
                  ~/jjohanospitia@gmail.com
                </a>
              </li>
            </ul>
          </Reveal>

          {/* AI workflow — full width row */}
          <Reveal className="border border-current/20 bg-[var(--terminal-800)] p-6 lg:col-span-3">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--muted)]">// AI-augmented workflow</p>
            <p className="text-base leading-relaxed text-[var(--fg-page)]">
              {t('about.ai')}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}