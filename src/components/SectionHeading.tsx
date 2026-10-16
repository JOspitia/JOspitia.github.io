import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

type SectionHeadingProps = {
  /** i18n key for the heading text (e.g. `'about.title'`). */
  titleKey: string;
  /** Optional i18n key for the muted subtitle rendered below the title. */
  subtitleKey?: string;
  /** Section id without the '#' prefix, used to render "01/" markers. */
  sectionKey?: 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'faq' | 'contact';
  align?: 'left' | 'center';
};

/**
 * Section heading — monospace "01/" prefix + bracketed title + subtitle.
 * The marker color uses the accent; the subtitle is muted slate so the
 * title still wins the visual hierarchy.
 */
export function SectionHeading({
  titleKey,
  subtitleKey,
  sectionKey,
  align = 'left',
}: SectionHeadingProps): JSX.Element {
  const { t } = useTranslation();
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-8 max-w-3xl ${alignment}`}>
      {sectionKey && (
        <p className="section-marker mb-2">
          <span className="text-[var(--accent)]">{t(`ui.sectionMarker.${sectionKey}`)}</span>
          <span className="text-[var(--muted)]"> / {sectionKey}</span>
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--fg-page)] sm:text-4xl">
        {t(titleKey)}
      </h2>
      {subtitleKey && (
        <p className="mt-3 text-base text-[var(--muted)] sm:text-lg">
          {t(subtitleKey)}
        </p>
      )}
    </div>
  );
}