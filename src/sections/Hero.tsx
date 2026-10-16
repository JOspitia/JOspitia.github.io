import { useEffect, useState, type JSX, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { CvActions } from '../components/CvActions';
import { Magnetic } from '../components/Magnetic';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

/**
 * Hero section — terminal-meets-web aesthetic.
 *
 * Composition:
 *   • Section marker "01/" in mono, top-left.
 *   • Centered terminal "card" with ASCII frame, pseudo-prompt,
 *     and a `whoami` block that types-once on mount (no infinite
 *     typing — that's an AI cliché). A blinking caret anchors the
 *     last line.
 *   • Magnetic CTAs ("View projects" / "Get in touch") using the
 *     <Magnetic /> wrapper.
 *   • Photo rendered as WebP <picture> source + JPEG fallback.
 *   • Subtle scanline background + dotted grid for terminal vibe
 *     without crossing into "matrix rain" territory.
 *
 * ScrollTrigger fades the headline in from a slightly blurred state
 * on mount (delegated to <Reveal> via `data-tag="hero"`).
 */
export function Hero(): JSX.Element {
  const { t } = useTranslation();

  // Type-once for the `whoami` block. No loop — done in ~600ms.
  const [typed, setTyped] = useState('');
  const tagline = `${profile.name} — ${t(profile.headlineKey)}`;
  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(tagline.slice(0, i));
      if (i >= tagline.length) window.clearInterval(id);
    }, 28);
    return () => window.clearInterval(id);
  }, [tagline]);

  // Subtle entrance for the terminal block.
  useGSAP(() => {
    gsap.from('[data-tag="hero"]', {
      opacity: 0,
      y: 12,
      filter: 'blur(4px)',
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.08,
    });
  }, []);

  const handleScrollTo =
    (id: string) =>
    (e: MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[80vh] overflow-hidden border-b border-current/15 bg-[var(--bg-page)] px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Subtle scanlines + dotted grid backgrounds — pure CSS */}
      <div className="pointer-events-none absolute inset-0 bg-scanlines" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-dots" aria-hidden="true" />

      <Container>
        <div className="relative">
          <p data-tag="hero" className="section-marker mb-6">
            <span className="text-[var(--accent)]">{t('ui.sectionMarker.hero')}</span>
            <span className="text-[var(--muted)]"> / hero</span>
          </p>

          <div
            data-tag="hero"
            className="mx-auto w-full max-w-3xl border border-current/25 bg-[var(--terminal-900)] p-4 font-mono text-sm shadow-2xl shadow-black/30"
          >
            {/* Title bar — like a real terminal window */}
            <div className="mb-4 flex items-center justify-between border-b border-current/15 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" aria-hidden="true" />
              </div>
              <span className="text-[0.7rem] uppercase tracking-wider text-[var(--muted)]">
                ~/jospitia — bash
              </span>
              <span className="text-[var(--muted)] text-[0.7rem]">{'\u00A0'}</span>
            </div>

            <p className="text-[var(--muted)]">$ whoami</p>
            <h1
              id="hero-heading"
              className="mt-1 break-words text-2xl font-bold text-[var(--fg-page)] sm:text-3xl lg:text-4xl"
            >
              {profile.name}
            </h1>

            <p className="mt-4 text-[var(--muted)]">$ describe --role</p>
            <p className="mt-1 text-base text-[var(--accent)] sm:text-lg">
              {t(profile.headlineKey)}
            </p>

            <p className="mt-4 text-[var(--muted)]">$ describe --location</p>
            <p className="mt-1 text-base text-[var(--fg-page)] sm:text-lg">
              {t(profile.taglineKey)}
            </p>

            <p className="mt-4 text-[var(--muted)]">$ echo</p>
            <p className="mt-1 text-base text-[var(--fg-page)]">
              {typed}
              <span className="caret" aria-hidden="true" />
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.25}>
                <a href="#projects" onClick={handleScrollTo('projects')} data-cursor-hover>
                  <Button variant="primary" size="lg">{t('hero.ctaPrimary')}</Button>
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="#contact" onClick={handleScrollTo('contact')} data-cursor-hover>
                  <Button variant="secondary" size="lg">{t('hero.ctaSecondary')}</Button>
                </a>
              </Magnetic>
              <CvActions />
            </div>

          <p
            data-tag="hero"
            className="mt-12 flex items-center gap-3 font-mono text-xs text-[var(--muted)]"
          >
            <picture>
              <source srcSet="/foto.webp" type="image/webp" />
              <img
                src={profile.photoUrl}
                alt={t('about.photoAlt')}
                width={48}
                height={48}
                loading="eager"
                // @ts-expect-error — fetchPriority is valid HTML but React types lag.
                fetchpriority="high"
                decoding="async"
                className="h-12 w-12 rounded-full border border-current/30 object-cover"
              />
            </picture>
            <span>// built with TypeScript · React · Vite · Tailwind · GSAP</span>
          </p>
        </div>
      </Container>
    </section>
  );
}