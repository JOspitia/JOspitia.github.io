/**
 * Profile data source — read by the Hero section (PR 3) and the
 * `<head>` SEO meta (PR 3). Decoupled from the presentational layer
 * so copy lives in i18n and identity/data lives here.
 *
 * Only the GitHub social is confirmed by the user (decision #1 from
 * PR 2 prep). The `socials` array is intentionally short — extend it
 * once the user provides LinkedIn / email / etc.
 */
export const profile = {
  name: 'Johan Ospitia',
  taglineKey: 'hero.tagline',
  initials: 'JO',
  socials: [
    {
      id: 'github',
      url: 'https://github.com/JOspitia',
      labelKey: 'languageSwitcher.github',
    },
  ],
} as const;

export type Profile = typeof profile;