import type { JSX } from 'react';
import { Header } from './components/Header';
import { SkipLink } from './components/SkipLink';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

/**
 * Site root composition (WU-9):
 * - `<SkipLink />` first so keyboard users get it before any other control.
 * - `<Header />` provides sticky nav + LanguageSwitcher + brand mark.
 * - `<main id="main">` is the skip-link target and the ARIA `main` landmark.
 * - Sections render in document order so the IntersectionObserver in
 *   `useActiveSection` tracks scroll progress naturally.
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
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;