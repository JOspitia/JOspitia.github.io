import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

/**
 * Projects — 2-column on tablet, 3-column on desktop. Each card is
 * a sharp terminal panel:
 *
 *   ┌──────────────────────────────────────┐
 *   │ P01 │ Resume Tailor AI v2.5          │
 *   ├──────────────────────────────────────┤
 *   │ description (3 lines)                │
 *   │ [FastAPI] [React 19] [Playwright]   │
 *   │ view repo →                          │
 *   └──────────────────────────────────────┘
 *
 * The whole card inverts on hover (no gradient, no shadow lift).
 * Project number (P01..P06) is monospace + accent so it reads as
 * a status badge rather than decoration.
 */
export function Projects(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-b border-current/15 bg-[var(--bg-page)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="projects.title" subtitleKey="projects.subtitle" sectionKey="projects" />

        <Reveal as="ul" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <li key={project.id}>
              <article className="invert-on-hover group flex h-full flex-col border border-current/25 bg-[var(--terminal-800)] p-5">
                <header className="mb-3 flex items-center gap-3 border-b border-current/15 pb-3">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    P{String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-mono text-base font-bold text-[var(--fg-page)] group-hover:text-[var(--bg-page)]">
                    {t(project.titleKey)}
                  </h3>
                </header>

                <p className="mb-4 flex-grow text-sm leading-relaxed text-[var(--fg-page)] group-hover:text-[var(--bg-page)]">
                  {t(project.descriptionKey)}
                </p>

                <ul className="mb-4 flex flex-wrap gap-1.5 font-mono text-[0.7rem]">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="border border-current/30 px-1.5 py-0.5 text-[var(--fg-page)] group-hover:border-[var(--bg-page)] group-hover:text-[var(--bg-page)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <footer className="mt-auto border-t border-current/15 pt-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="font-mono text-xs uppercase tracking-wider text-[var(--fg-page)] underline-offset-4 hover:text-[var(--accent)] group-hover:text-[var(--bg-page)] group-hover:underline"
                    >
                      {t('projects.viewRepo')} →
                    </a>
                  )}
                </footer>
              </article>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}