/**
 * Shape for a single social profile entry. Used by the Contact section
 * (PR 3) via the `SocialLinks` presentational component (PR 2b).
 *
 * `id` is a closed union so consumers can render a domain-specific
 * inline SVG icon without importing an icon library (decision per
 * design #168 §Components).
 *
 * `labelKey` references an entry in src/i18n/locales/{en,es}.json
 * for the accessible name of the link — required for screen readers
 * per REQ-10 (a11y).
 */
export type SocialLink = {
  id: 'github' | 'linkedin' | 'email' | 'twitter' | 'mastodon' | 'whatsapp';
  url: string;
  labelKey: string;
};