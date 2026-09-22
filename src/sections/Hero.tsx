import type { JSX, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Button } from '../components/Button';

/**
 * Hero section — first viewport, bilingual greeting + headline + tagline +
 * two anchor CTAs (`#projects`, `#contact`). Data comes from `profile`
 * (name, taglineKey) and copy comes from i18n. The two CTA links smooth-scroll
 * to their target sections; we intercept the click so the browser history
 * stays clean.
 */
export function Hero(): JSX.Element {
  const { t } = useTranslation();

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
      className="relative flex min-h-[80vh] items-center bg-gradient-to-b from-white to-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-500">
          {t('hero.greeting')}
        </p>
        <h1
          id="hero-heading"
          className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
          {t(profile.taglineKey)}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" onClick={handleScrollTo('projects')}>
            <Button variant="primary" size="lg">
              {t('hero.ctaPrimary')}
            </Button>
          </a>
          <a href="#contact" onClick={handleScrollTo('contact')}>
            <Button variant="secondary" size="lg">
              {t('hero.ctaSecondary')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}