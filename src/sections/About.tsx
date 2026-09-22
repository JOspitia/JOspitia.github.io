import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { profile } from '../data/profile';

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
 * About section — photo on the left (mobile: stacks above), then three
 * prose blocks (lead summary / full bio / AI-enhanced workflow), then four
 * highlight tiles. Photo URL comes from `profile.photoUrl` and the
 * accessible name from `t('about.photoAlt')`. Pure presentational; consumes
 * i18n via useTranslation and the SectionHeading primitive.
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
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <img
            src={profile.photoUrl}
            alt={t('about.photoAlt')}
            width={144}
            height={144}
            loading="lazy"
            className="h-36 w-36 flex-shrink-0 rounded-full border-4 border-white object-cover shadow-md"
          />
          <div className="flex-1">
            <SectionHeading titleKey="about.title" subtitleKey="about.lead" />
            <p className="mb-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {t('about.body')}
            </p>
            <p className="mb-12 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {t('about.ai')}
            </p>
          </div>
        </div>
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
