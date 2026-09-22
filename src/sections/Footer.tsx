import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';

/**
 * Footer section — copyright line (with current year interpolated via
 * i18n) and a small "built with / deployed on" attribution. Uses the
 * `<footer>` landmark (role="contentinfo" for older AT compatibility).
 */
export function Footer(): JSX.Element {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row">
          <p>{t('footer.copyright', { year })}</p>
          <p>
            {t('footer.builtWith')} · {t('footer.deployedOn')}
          </p>
        </div>
      </Container>
    </footer>
  );
}