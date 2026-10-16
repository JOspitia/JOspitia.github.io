import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

const CV_FILES = {
  es: '/CV_Johan_Ospitia_Fullstack_Developer.pdf',
  en: '/CV_Johan_Ospitia_Fullstack_Developer_EN.pdf',
} as const;

function DownloadIcon(): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ExternalLinkIcon(): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/**
 * CV action buttons — sharp mono styling, hover inverts to bg-page.
 * Picks the right CV based on the current language.
 */
export function CvActions(): JSX.Element {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? 'en') as keyof typeof CV_FILES;
  const cvFile = CV_FILES[lang] ?? CV_FILES.en;

  const btnClass =
    'invert-on-hover inline-flex items-center gap-2 border border-current/40 px-3 py-2 font-mono text-xs uppercase tracking-wider';

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={cvFile}
        download
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className={btnClass}
      >
        <DownloadIcon />
        {t('hero.cvDownload')}
      </a>
      <a
        href={cvFile}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className={btnClass}
      >
        <ExternalLinkIcon />
        {t('hero.cvView')}
      </a>
    </div>
  );
}