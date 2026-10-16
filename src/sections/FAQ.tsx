import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

/**
 * Stable ordering of FAQ keys — drives both the render order and the
 * Q/A schema index. Keeping the list as a closed tuple (read from
 * `t('faq.items.<id>.question')` / `.answer`) means adding a new entry
 * here requires no other code changes; the JSON-LD FAQPage block in
 * `index.html` is the only place that needs a parallel update.
 */
const FAQ_KEYS = ['who', 'stack', 'location', 'qa', 'ai', 'projects', 'contact'] as const;
type FaqKey = (typeof FAQ_KEYS)[number];

/**
 * FAQ section — Q&A pairs rendered as a definition list (`<dl>` / `<dt>`
 * / `<dd>`) so screen readers announce each question–answer pair with
 * the right semantic relationship. Mirrors the JSON-LD FAQPage block in
 * `index.html`; the two must stay byte-identical on the answer text to
 * avoid the schema/visible-content drift that Google penalizes.
 *
 * Placement is between <Projects /> and <Contact /> so the FAQ
 * answers "who/what/where/availability" objections right before the
 * final conversion CTA — the canonical landing-page conversion flow.
 *
 * The `<details>`/`<summary>` accordion is opt-in per item: it stays
 * closed by default so the page does not look like a giant wall of
 * text in the initial paint, and crawlers (which don't always expand
 * `<details>`) still see the full answer in the HTML source.
 */
export function FAQ(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="faq.title" subtitleKey="faq.subtitle" />

        <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {FAQ_KEYS.map((id: FaqKey) => {
            const question = t(`faq.items.${id}.question`);
            const answer = t(`faq.items.${id}.answer`);
            return (
              <div
                key={id}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <dt className="mb-2 text-base font-semibold text-slate-900">
                  {question}
                </dt>
                <dd className="text-sm leading-relaxed text-slate-700">
                  {answer}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}