import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

type Highlight = {
  valueKey: string;
  labelKey: string;
};

/**
 * Static highlight cards rendered below the bio paragraph. i18n keys live
 * under `about.highlights.*`; both locales (en.json / es.json) define them.
 *
 * PR 8a: replaced placeholders with four real impact metrics taken from
 * the user's `ME.md` — 4+ years, 40% delivery reduction, 30% defect
 * reduction, 90% E2E coverage in healthcare modules.
 */
const HIGHLIGHTS: readonly Highlight[] = [
  { valueKey: 'about.highlights.years', labelKey: 'about.highlights.yearsLabel' },
  { valueKey: 'about.highlights.delivery', labelKey: 'about.highlights.deliveryLabel' },
  { valueKey: 'about.highlights.defects', labelKey: 'about.highlights.defectsLabel' },
  { valueKey: 'about.highlights.coverage', labelKey: 'about.highlights.coverageLabel' },
];

/**
 * About section — three prose blocks (lead summary via SectionHeading,
 * then full bio, then AI-enhanced workflow) followed by four highlight
 * tiles. The profile photo used to live here but was moved to the Hero
 * section in PR 13 so the avatar appears exactly once on the page,
 * above the fold, next to the name.
 */
export function About(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="about.title" subtitleKey="about.lead" />
        <p className="mb-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          {t('about.body')}
        </p>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          {t('about.ai')}
        </p>
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.valueKey}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
            >
              <dt className="text-sm font-medium uppercase tracking-wider text-slate-500">
                {t(h.labelKey)}
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-slate-900">
                {t(h.valueKey)}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
