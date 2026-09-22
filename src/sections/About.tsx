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
 */
const HIGHLIGHTS: readonly Highlight[] = [
  { valueKey: 'about.highlights.years', labelKey: 'about.highlights.yearsLabel' },
  { valueKey: 'about.highlights.projects', labelKey: 'about.highlights.projectsLabel' },
  { valueKey: 'about.highlights.stack', labelKey: 'about.highlights.stackLabel' },
];

/**
 * About section — short bio + three highlight tiles (years / projects /
 * workflow). Pure presentational; consumes i18n via useTranslation and the
 * SectionHeading primitive.
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
        <p
          id="about-heading"
          className="mb-12 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          {t('about.body')}
        </p>
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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