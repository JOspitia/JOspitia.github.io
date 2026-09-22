import type { Project } from '../types/project';

/**
 * Featured projects data source. Consumed by the Projects section
 * (PR 3). `titleKey` and `descriptionKey` reference entries under
 * `projects.items.<id>` in src/i18n/locales/{en,es}.json — both
 * locales must define every referenced key, otherwise `tsc --noEmit`
 * does not fail but the runtime `t()` call returns the raw key.
 *
 * Placeholder repos (urls marked as `jospitia.github.io` subdomains
 * that may not exist yet). Replace with real repos once the user
 * confirms the curated list (open decision from spec prep).
 */
export const projects: readonly Project[] = [
  {
    id: 'weather-app',
    titleKey: 'projects.items.weatherApp.title',
    descriptionKey: 'projects.items.weatherApp.description',
    tech: ['React', 'TypeScript', 'Tailwind', 'OpenWeatherMap'],
    repoUrl: 'https://github.com/JOspitia/weather-app',
    url: 'https://weather.jospitia.github.io',
  },
  {
    id: 'task-api',
    titleKey: 'projects.items.taskApi.title',
    descriptionKey: 'projects.items.taskApi.description',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    repoUrl: 'https://github.com/JOspitia/task-api',
  },
  {
    id: 'notes-app',
    titleKey: 'projects.items.notesApp.title',
    descriptionKey: 'projects.items.notesApp.description',
    tech: ['React', 'TypeScript', 'IndexedDB', 'Vite'],
    repoUrl: 'https://github.com/JOspitia/notes-app',
    url: 'https://notes.jospitia.github.io',
  },
] as const;