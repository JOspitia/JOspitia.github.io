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
      className="h-4 w-4"
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
      className="h-4 w-4"
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
 * CV action buttons — download or view PDF in browser.
 * Automatically selects the correct CV file based on the current language.
 */
export function CvActions(): JSX.Element {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? 'en') as keyof typeof CV_FILES;
  const cvFile = CV_FILES[lang] ?? CV_FILES.en;

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={cvFile}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
      >
        <DownloadIcon />
        {t('hero.cvDownload')}
      </a>
      <a
        href={cvFile}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
      >
        <ExternalLinkIcon />
        {t('hero.cvView')}
      </a>
    </div>
  );
}
