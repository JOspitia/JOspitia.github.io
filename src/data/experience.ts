/**
 * Work experience data source — consumed by the Experience section
 * (PR 8a). Each item points to i18n keys for every translatable field
 * (title, period, sector, location, bullet highlights, stack line)
 * so the same record renders in English or Spanish without touching
 * the data layer.
 *
 * The bullets live under `experience.<id>.highlights.<index>` and the
 * stack summary under `experience.<id>.stack` — both `en.json` and
 * `es.json` must define them or `t()` returns the raw key.
 *
 * Two entries from the user's `ME.md`:
 * - blue-data-service: Feb 2024 – Sep 2026, Healthcare Sector.
 * - proing:            Feb 2022 – Nov 2023, Engineering & Services.
 */
export type ExperienceItem = {
  id: string;
  titleKey: string;
  company: string;
  periodKey: string;
  sectorKey: string;
  locationKey: string;
  highlights: readonly string[];
  stackKey: string;
};

export const experience: readonly ExperienceItem[] = [
  {
    id: 'blue-data-service',
    titleKey: 'experience.blueData.title',
    company: 'Blue Data Service',
    periodKey: 'experience.blueData.period',
    sectorKey: 'experience.blueData.sector',
    locationKey: 'experience.blueData.location',
    highlights: [
      'experience.blueData.highlights.0',
      'experience.blueData.highlights.1',
      'experience.blueData.highlights.2',
      'experience.blueData.highlights.3',
    ],
    stackKey: 'experience.blueData.stack',
  },
  {
    id: 'proing',
    titleKey: 'experience.proing.title',
    company: 'PROING S.A.',
    periodKey: 'experience.proing.period',
    sectorKey: 'experience.proing.sector',
    locationKey: 'experience.proing.location',
    highlights: [
      'experience.proing.highlights.0',
      'experience.proing.highlights.1',
      'experience.proing.highlights.2',
      'experience.proing.highlights.3',
      'experience.proing.highlights.4',
    ],
    stackKey: 'experience.proing.stack',
  },
] as const;
