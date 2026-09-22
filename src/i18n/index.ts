import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';

/**
 * i18next bundle resources. The shape is exposed so typed helpers
 * (LanguageSwitcher, future server-side rendering, etc.) can narrow
 * the supported language set without re-deriving it.
 */
export const resources = {
  en: { translation: en },
  es: { translation: es },
} as const;

export type SupportedLanguage = keyof typeof resources;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;