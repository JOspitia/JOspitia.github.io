import { useEffect } from 'react';
import i18n from '../i18n';
import type { SupportedLanguage } from '../i18n';

/**
 * Keeps `<html lang>` aligned with the active i18n language.
 *
 * - Sets `<html lang>` immediately on mount and whenever `lang` changes.
 * - Subscribes to `languageChanged` events from i18next so the attribute
 *   also follows programmatic `i18n.changeLanguage(...)` calls triggered
 *   outside this hook (e.g. from `LanguageSwitcher`).
 *
 * Split into its own file (rather than living inside `LanguageSwitcher.tsx`)
 * so the rules-of-hooks invariant is honored without `eslint-disable` hacks.
 */
export function useHtmlLangSync(lang: SupportedLanguage): void {
  useEffect(() => {
    const apply = (lng: string): void => {
      document.documentElement.lang = lng.slice(0, 2);
    };

    apply(lang);

    i18n.on('languageChanged', apply);
    return () => {
      i18n.off('languageChanged', apply);
    };
  }, [lang]);
}