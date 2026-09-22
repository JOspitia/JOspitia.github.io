import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

/**
 * Experience section — chronological list of work engagements. Each
 * item is rendered as a card with header (title + company + period
 * + sector/location) and a bullet list of highlights followed by a
 * "Stack:" footer line. All copy comes from i18n keys stored on the
 * data record so the same array renders in English or Spanish.
 *
 * PR 8a: new section inserted between Skills and Projects.
 */
export function Experience(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="experience.title" subtitleKey="experience.subtitle" />
        <ol className="space-y-8">
          {experience.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <header className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {t(item.titleKey)} <span className="text-slate-500">· {item.company}</span>
                  </h3>
                  <p className="text-sm text-slate-500">
                    {t(item.sectorKey)} · {t(item.locationKey)}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-600">{t(item.periodKey)}</p>
              </header>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-slate-700 sm:text-base">
                {item.highlights.map((highlightKey) => (
                  <li key={highlightKey}>{t(highlightKey)}</li>
                ))}
              </ul>
              <p className="text-xs font-medium text-slate-500">{t(item.stackKey)}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
