import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';

/**
 * Projects section — iterates the typed `projects` array and renders a
 * card per item with bilingual title/description, tech badges, and
 * optional repo / live links (only rendered when present on the data).
 */
export function Projects(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="projects.title" subtitleKey="projects.subtitle" />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {t(project.titleKey)}
                </h3>
                <p className="mb-4 flex-grow text-sm text-slate-600">
                  {t(project.descriptionKey)}
                </p>
                <ul className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <TechBadge name={tech} />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 text-sm">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-700 underline-offset-2 hover:underline"
                    >
                      {t('projects.viewRepo')} →
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 underline-offset-2 hover:underline"
                    >
                      {t('projects.viewLive')} →
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}