import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks } from '../components/SocialLinks';
import { Reveal } from '../components/Reveal';
import { Magnetic } from '../components/Magnetic';

/**
 * Contact — terminal-prompt style CTA. Visitors see a `$ contact`
 * prompt followed by the available channels. Each link is wrapped
 * in <Magnetic /> so it subtly pulls toward the cursor.
 */
export function Contact(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-b border-current/15 bg-[var(--bg-page)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="contact.title" subtitleKey="contact.subtitle" sectionKey="contact" />

        <Reveal className="mx-auto max-w-2xl border border-current/25 bg-[var(--terminal-900)] p-6 font-mono text-sm">
          <p className="text-[var(--muted)]">$ contact --channels</p>
          <p className="mt-2 text-[var(--fg-page)]">
            Available via the channels below. Typical response time &lt; 24h.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Magnetic strength={0.3}>
              <a
                href="https://www.linkedin.com/in/johan-ospitia/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="border border-current/30 px-3 py-2 hover:bg-[var(--fg-page)] hover:text-[var(--bg-page)]"
              >
                ~/linkedin
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="https://github.com/JOspitia"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="border border-current/30 px-3 py-2 hover:bg-[var(--fg-page)] hover:text-[var(--bg-page)]"
              >
                ~/github
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="mailto:jjohanospitia@gmail.com"
                data-cursor-hover
                className="border border-current/30 px-3 py-2 hover:bg-[var(--fg-page)] hover:text-[var(--bg-page)]"
              >
                ~/email
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="https://wa.me/573223595445?text=Hola%20Johan%2C%20te%20contacto%20desde%20tu%20portafolio."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="border border-current/30 px-3 py-2 hover:bg-[var(--fg-page)] hover:text-[var(--bg-page)]"
              >
                ~/whatsapp
              </a>
            </Magnetic>
          </div>
          <p className="mt-6 flex items-center gap-2 text-[var(--accent)]">
            $ ready for new challenges
            <span className="caret" aria-hidden="true" />
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col items-center gap-2 text-[var(--muted)]">
          <p className="font-mono text-xs uppercase tracking-wider">{t('contact.cta')}</p>
          <SocialLinks />
        </div>
      </Container>
    </section>
  );
}