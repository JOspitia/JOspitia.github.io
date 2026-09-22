import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '../i18n';
import { useHtmlLangSync } from '../hooks/useHtmlLangSync';

/**
 * Two-button language toggle that lives in the header.
 *
 * - One tap to switch locale (no native `<select>` keyboard pitfalls).
 * - Exposes `aria-pressed` per button so screen readers announce which
 *   locale is active.
 * - `role="group"` + `aria-label` describe the control as a unit.
 * - Side-effect free: `useHtmlLangSync` keeps `<html lang>` in step with
 *   the active i18n language.
 */
const LANGS: readonly { code: SupportedLanguage; labelKey: string }[] = [
  { code: 'en', labelKey: 'languageSwitcher.en' },
  { code: 'es', labelKey: 'languageSwitcher.es' },
] as const;

export function LanguageSwitcher(): JSX.Element {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language ?? 'en').slice(
    0,
    2,
  ) as SupportedLanguage;

  useHtmlLangSync(current);

  return (
    <div
      role="group"
      aria-label={t('languageSwitcher.label')}
      className="flex items-center gap-1"
    >
      {LANGS.map(({ code, labelKey }) => {
        const isActive = current === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => {
              void i18n.changeLanguage(code);
            }}
            aria-pressed={isActive}
            aria-label={t(labelKey)}
            className={[
              'rounded px-2 py-1 text-sm font-medium transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
              isActive
                ? 'bg-accent text-white'
                : 'text-ink hover:bg-slate-100',
            ].join(' ')}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}