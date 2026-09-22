import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Keyboard-only skip link. Hidden by default (`sr-only`) and revealed on
 * focus (`focus:not-sr-only`) so screen reader and keyboard users can jump
 * past the sticky header straight to `<main id="main">`. Lives at the very
 * top of the React tree so it is the first focusable element when tabbing
 * from the URL bar.
 */
export function SkipLink(): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
    >
      {t('nav.skipToContent')}
    </a>
  );
}