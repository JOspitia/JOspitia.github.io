import type { JSX } from 'react';
import { Header } from './components/Header';
import { SkipLink } from './components/SkipLink';
import { BackToTop } from './components/BackToTop';
import { StatusBar } from './components/StatusBar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { FAQ } from './sections/FAQ';
import { Uses } from './sections/Uses';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

/**
 * Site root composition (2026-10 redesign):
 *
 *   <StatusBar />      ← sticky top-0 (height 34px)
 *   <Header />         ← sticky top-[34px] (height 56px), monospace nav
 *   <main>
 *     <Hero />         ← terminal-card with typewriter
 *     <About />        ← bento grid
 *     <Skills />       ← ASCII tree view
 *     <Experience />   ← vertical timeline
 *     <Projects />     ← magnetic + invert cards
 *     <FAQ />          ← + / − accordion
 *     <Contact />      ← terminal prompt
 *   </main>
 *   <Footer />         ← status line
 *   <BackToTop />      ← floating
 *
 * The <SkipLink /> sits first in tab order but renders visually
 * hidden; <CustomCursor /> mounts globally and is a no-op on touch.
 */
function App(): JSX.Element {
  return (
    <>
      <SkipLink />
      <StatusBar />
      <CustomCursor />
      <Header />
      <main id="main" role="main" className="pt-[64px]">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FAQ />
        <Uses />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;