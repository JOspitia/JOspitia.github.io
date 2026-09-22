import type { Project } from '../types/project';

/**
 * Featured projects data source. Consumed by the Projects section
 * (PR 3a). `titleKey` and `descriptionKey` reference entries under
 * `projects.items.<id>` in src/i18n/locales/{en,es}.json — both
 * locales must define every referenced key, otherwise `tsc --noEmit`
 * does not fail but the runtime `t()` call returns the raw key.
 *
 * PR 8a replaces the placeholder trios (weather/task-api/notes) with
 * the four real repos from the user's `ME.md`:
 * - resume-tailor-ai (jd-to-resume-v2) — AI CV tailor, FastAPI + React 19
 * - hr-tech-saas (AppMiAplicacion)      — Multi-Tenant HR & payroll
 * - fixlat-tablero-notas                — Serverless drag-and-drop dashboard
 * - inventarios-iot (prueba-tecnica-johan-ospitia) — Inventory & IoT
 */
export const projects: readonly Project[] = [
  {
    id: 'resume-tailor-ai',
    titleKey: 'projects.items.resumeTailor.title',
    descriptionKey: 'projects.items.resumeTailor.description',
    tech: ['FastAPI', 'React 19', 'Playwright', 'Gemini', 'Typst', 'SSE'],
    repoUrl: 'https://github.com/JOspitia/jd-to-resume-v2',
  },
  {
    id: 'hr-tech-saas',
    titleKey: 'projects.items.hrTech.title',
    descriptionKey: 'projects.items.hrTech.description',
    tech: ['Spring Boot', 'Angular', 'Java', 'PostgreSQL', 'MinIO', 'Docker'],
    repoUrl: 'https://github.com/JOspitia/AppMiAplicacion',
  },
  {
    id: 'fixlat-tablero-notas',
    titleKey: 'projects.items.fixlat.title',
    descriptionKey: 'projects.items.fixlat.description',
    tech: ['Laravel', 'React', 'AWS Lambda', 'Node.js', 'TypeScript', 'Docker'],
    repoUrl: 'https://github.com/JOspitia/fixlat-tablero-notas',
  },
  {
    id: 'inventarios-iot',
    titleKey: 'projects.items.inventarios.title',
    descriptionKey: 'projects.items.inventarios.description',
    tech: ['Laravel', 'PHP', 'React 19', 'Ant Design', 'REST APIs'],
    repoUrl: 'https://github.com/JOspitia/prueba-tecnica-johan-ospitia',
  },
] as const;
