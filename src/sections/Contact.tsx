import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks } from '../components/SocialLinks';

/**
 * Contact section — centered call-to-action with the SocialLinks component
 * and a single-line invitation copy from i18n.
 */
export function Contact(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading
          titleKey="contact.title"
          subtitleKey="contact.subtitle"
          align="center"
        />
        <div className="flex flex-col items-center gap-6">
          <SocialLinks />
          <p className="text-sm text-slate-500">{t('contact.cta')}</p>
        </div>
      </Container>
    </section>
  );
}