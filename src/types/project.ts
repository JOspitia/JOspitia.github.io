/**
 * Project shape used by the Projects section (PR 3) and the typed data
 * source in src/data/projects.ts (PR 2). Field names follow spec #167
 * (addendum #169 reconciled design #168 to match): `tech`, `url`,
 * `repoUrl`, `image` — NOT the older `techStack` / `liveUrl` / `imageUrl`.
 *
 * `titleKey` and `descriptionKey` reference entries in
 * src/i18n/locales/{en,es}.json under `projects.items.<id>.*`.
 */
export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tech: readonly string[];
  repoUrl?: string;
  url?: string;
  image?: string;
};
