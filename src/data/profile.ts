/**
 * Profile data source — read by the Hero section (PR 3a), About section
 * (PR 8a) and the SocialLinks component (PR 8a). Decoupled from the
 * presentational layer so copy lives in i18n and identity/data lives here.
 *
 * Real content (PR 8a):
 * - Location: Cali, Colombia (remote-available).
 * - Photo: public/foto.jpg (added to repo as site asset, not ME.md content).
 * - Socials: GitHub, LinkedIn, email — closed `SocialLink.id` union keeps
 *   the inline icon switch in `SocialLinks.tsx` exhaustive at compile time.
 */
export const profile = {
  name: 'Johan Ospitia',
  initials: 'JO',
  location: {
    city: 'Cali',
    country: 'Colombia',
    remote: true,
  },
  photoUrl: '/foto.jpg',
  headlineKey: 'hero.headline',
  taglineKey: 'hero.tagline',
  socials: [
    {
      id: 'github',
      url: 'https://github.com/JOspitia',
      labelKey: 'socials.github',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/johan-ospitia/',
      labelKey: 'socials.linkedin',
    },
    {
      id: 'whatsapp',
      // WhatsApp link with prefilled message. Country code 57 (Colombia),
      // number without spaces or symbols. Message URL-encoded.
      url: 'https://wa.me/573223595445?text=Hola%20Johan%2C%20te%20contacto%20desde%20tu%20portafolio.',
      labelKey: 'socials.whatsapp',
    },
    {
      id: 'email',
      url: 'mailto:jjohanospitia@gmail.com',
      labelKey: 'socials.email',
    },
  ],
} as const;

export type Profile = typeof profile;
