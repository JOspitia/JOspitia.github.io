import type { JSX, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

/**
 * Hero section — first viewport, bilingual greeting + name (the only
 * `<h1>` on the page, for SEO) + headline (now a styled `<p>`, was an
 * `<h2>` before PR 13) + tagline + two anchor CTAs. PR 13 also moves the
 * profile photo from About into this section so the avatar lives in
 * exactly one place; the layout is a flex row (photo left, copy right)
 * on `sm+` and stacks vertically on mobile.
 *
 * Identity data comes from `profile` (name, headlineKey, taglineKey);
 * photo URL comes from `profile.photoUrl` and the accessible name from
 * `t('about.photoAlt')`. Copy comes from i18n. The two CTA links
 * smooth-scroll to their target sections; we intercept the click so the
 * browser history stays clean.
 *
 * PR 8a: added a second heading for the professional headline and
 * surfaced the bilingual tagline.
 * PR 13: photo moved from About to here; `<h2>` of headline demoted to
 * `<p>` so the page has a single `<h1>` (max SEO weight on the name).
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
      <Container>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8 sm:flex-row sm:items-center">
          <img
            src={profile.photoUrl}
            alt={t('about.photoAlt')}
            width={144}
            height={144}
            loading="eager"
            className="h-36 w-36 flex-shrink-0 rounded-full border-4 border-white object-cover shadow-md"
          />
          <div className="flex-1">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-500">
              {t('hero.greeting')}
            </p>
            <h1
              id="hero-heading"
              className="mb-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </h1>
            <p className="mb-3 text-xl font-semibold text-blue-600 sm:text-2xl">
              {t(profile.headlineKey)}
            </p>
            <p className="mb-8 max-w-2xl text-base text-slate-600 sm:text-lg">
              {t(profile.taglineKey)}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" onClick={handleScrollTo('projects')}>
                <Button variant="primary" size="lg">{t('hero.ctaPrimary')}</Button>
              </a>
              <a href="#contact" onClick={handleScrollTo('contact')}>
                <Button variant="secondary" size="lg">{t('hero.ctaSecondary')}</Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
