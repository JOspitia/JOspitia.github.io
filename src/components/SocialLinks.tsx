import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import type { SocialLink } from '../types/social';

/**
 * Inline SVG icon set, scoped to the closed `SocialLink.id` union so the
 * compiler catches a missed case. Keeping icons inline avoids shipping an
 * icon library for a handful of glyphs (decision per design #168 §Components).
 */
function Icon({ id }: { id: SocialLink['id'] }): JSX.Element {
  switch (id) {
    case 'github':
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM.22 8.06h4.56V23H.22V8.06zM8.06 8.06h4.37v2.04h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-7.07c0-1.69-.03-3.86-2.36-3.86-2.36 0-2.72 1.84-2.72 3.74V23H8.06V8.06z" />
        </svg>
      );
    case 'email':
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.5L20.4 6H3.6L12 12.5zM4 8.25V18h16V8.25l-7.42 5.5a1 1 0 0 1-1.18 0L4 8.25z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M18.244 2H21l-6.52 7.46L22 22h-6.84l-4.78-6.27L4.8 22H2l7.04-8.06L2 2h6.92l4.3 5.7L18.244 2zm-2.39 18h1.86L7.32 4H5.32l10.534 16z" />
        </svg>
      );
    case 'mastodon':
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M21.58 6.97c.32-2.35-.18-3.66-.96-4.78C19.62 1.07 17.96.66 15.94.5c-1.66-.13-3.3-.2-4.94-.2-1.64 0-3.28.07-4.94.2C4.04.66 2.38 1.07 1.38 2.19c-.78 1.12-1.28 2.43-.96 4.78.18 1.31.32 2.61.5 3.93.39 2.69.83 5.36 2.45 7.7 1.49 2.16 3.85 3.4 6.63 3.4 1.66 0 3.16-.32 4.42-.97v-2.13c-1.21.49-2.5.78-3.91.78-1.21 0-2.39-.29-3.32-.95-.93-.66-1.61-1.66-1.86-3.1 0-.06-.01-.13-.02-.2.62.16 1.27.27 1.92.33 1.62.16 3.27.06 4.85-.29 1.05-.23 2.05-.58 2.98-1.04.62-.31 1.21-.69 1.75-1.13 1.05-.85 1.84-1.97 2.27-3.27.55-1.66.66-3.39.66-5.13v-1.13h-.18zM18.5 12.7h-2.34V6.5c0-1.27-.53-1.92-1.6-1.92-1.19 0-1.78.77-1.78 2.3v3.34H10.5V6.88c0-1.53-.6-2.3-1.78-2.3-1.07 0-1.6.65-1.6 1.92v6.2H4.78V6.36c0-1.27.32-2.28.96-3.02.66-.74 1.52-1.12 2.58-1.12 1.23 0 2.16.47 2.79 1.41l.59.96.59-.96c.63-.94 1.56-1.41 2.79-1.41 1.06 0 1.92.38 2.58 1.12.64.74.96 1.75.96 3.02v6.34Z" />
        </svg>
      );
  }
}

export function SocialLinks(): JSX.Element {
  const { t } = useTranslation();
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {profile.socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(social.labelKey)}
            className="inline-flex items-center justify-center rounded p-2 text-ink transition-colors hover:bg-slate-100 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon id={social.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}