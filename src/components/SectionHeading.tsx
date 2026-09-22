import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

type SectionHeadingProps = {
  /** i18n key for the heading text (e.g. `'about.title'`). */
  titleKey: string;
  /** Optional i18n key for the muted subtitle rendered below the title. */
  subtitleKey?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  titleKey,
  subtitleKey,
  align = 'left',
}: SectionHeadingProps): JSX.Element {
  const { t } = useTranslation();
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-8 max-w-2xl ${alignment}`}>
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {t(titleKey)}
      </h2>
      {subtitleKey && (
        <p className="mt-2 text-base text-slate-600 sm:text-lg">
          {t(subtitleKey)}
        </p>
      )}
    </div>
  );
}