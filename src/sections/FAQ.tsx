import { useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

/**
 * FAQ — accordion using `+` / `-` chars as the disclosure indicator
 * (no SVG icons, no rounded buttons). Each Q/A pair is a sharp
 * terminal panel that "opens" with a left accent bar.
 */
const FAQ_KEYS = ['who', 'stack', 'location', 'qa', 'ai', 'projects', 'contact'] as const;
type FaqKey = (typeof FAQ_KEYS)[number];

export function FAQ(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState<FaqKey | null>('who');

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative border-b border-current/15 bg-[var(--bg-page)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="faq.title" subtitleKey="faq.subtitle" sectionKey="faq" />

        <Reveal as="ul" className="grid grid-cols-1 gap-3">
          {FAQ_KEYS.map((id) => {
            const question = t(`faq.items.${id}.question`);
            const answer = t(`faq.items.${id}.answer`);
            const isOpen = open === id;
            return (
              <li
                key={id}
                className={`border bg-[var(--terminal-800)] transition-colors ${
                  isOpen ? 'border-[var(--accent)]' : 'border-current/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${id}`}
                  data-cursor-hover
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-mono text-sm font-semibold text-[var(--fg-page)]">
                    <span className="mr-3 inline-block w-6 text-[var(--accent)]">
                      {isOpen ? '−' : '+'}
                    </span>
                    {question}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                    {id}
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-${id}`} className="border-t border-current/15 px-5 py-4">
                    <p className="text-sm leading-relaxed text-[var(--fg-page)]">{answer}</p>
                  </div>
                )}
              </li>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}