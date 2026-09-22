import type { JSX, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Button } from '../components/Button';

/**
 * Hero section — first viewport, bilingual greeting + name + headline
 * (from `profile.headlineKey`) + tagline (from `profile.taglineKey`) +
 * two anchor CTAs (`#projects`, `#contact`). Identity data comes from
 * `profile` (name, headlineKey, taglineKey); copy comes from i18n.
 *
 * The two CTA links smooth-scroll to their target sections; we intercept
 * the click so the browser history stays clean.
 *
 * PR 8a: adds a second `<h2>` for the professional headline (accent color)
 * under the personal name, and surfaces the bilingual location/remote
 * tagline.
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
          className="mb-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </h1>
        <h2 className="mb-3 text-xl font-semibold text-blue-600 sm:text-2xl">
          {t(profile.headlineKey)}
        </h2>
        <p className="mb-8 max-w-2xl text-base text-slate-600 sm:text-lg">
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
