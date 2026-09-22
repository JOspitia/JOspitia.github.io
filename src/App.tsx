import type { JSX } from 'react';
import { Header } from './components/Header';
import { SkipLink } from './components/SkipLink';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

/**
 * Site root composition (WU-9 + PR 8a):
 * - `<SkipLink />` first so keyboard users get it before any other control.
 * - `<Header />` provides sticky nav + LanguageSwitcher + brand mark.
 * - `<main id="main">` is the skip-link target and the ARIA `main` landmark.
 * - Sections render in document order so the IntersectionObserver in
 *   `useActiveSection` tracks scroll progress naturally.
 *   PR 8a adds `<Experience />` between Skills and Projects.
 * - `<Footer />` is outside `<main>` (it's a `contentinfo` landmark, not
 *   primary content).
 * - `<BackToTop />` floats over everything once the user has scrolled.
 */
function App(): JSX.Element {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
