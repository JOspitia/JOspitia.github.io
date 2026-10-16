import type { Project } from '../types/project';

/**
 * Featured projects data source. Consumed by the Projects section
 * (PR 3a). `titleKey` and `descriptionKey` reference entries under
 * `projects.items.<id>` in src/i18n/locales/{en,es}.json — both
 * locales must define every referenced key, otherwise `tsc --noEmit`
 * does not fail but the runtime `t()` call returns the raw key.
 *
 * Order = display order on the homepage. Keep this list short on
 * purpose (six items is the upper bound; beyond that the section
 * stops scanning cleanly on mobile).
 *
 * 2026-10 overhaul:
 *  • resume-tailor-ai  — unchanged repo, copy refreshed from README v2.5
 *  • hr-tech-saas      — unchanged repo, copy refreshed (Spring Boot 3.4,
 *                         Angular 21, MinIO + ClamAV, JWT + RBAC)
 *  • fixlat-tablero    — unchanged repo, copy refreshed (Laravel 12,
 *                         @dnd-kit, AWS Lambda + LocalStack)
 *  • pharmacy-iot      — REPLACES `inventarios-iot`. Repo moved from
 *                         `prueba-tecnica-johan-ospitia` to `pharmacy`
 *                         (the GitHub org refactor done 2026-09).
 *                         Stack: Laravel 9 + SQL Server 2025 + React 19.
 *  • java-rest-template — NEW. Java 25 + Javalin, no Spring, 78 tests,
 *                         JWT revocable sessions, Flyway. Written as a
 *                         reusable template + accompanying SKILL.md.
 *  • rag-api            — NEW. RAG system with FastAPI + Pinecone +
 *                         OpenAI, hexagonal architecture.
 */
export const projects: readonly Project[] = [
  {
    id: 'resume-tailor-ai',
    titleKey: 'projects.items.resumeTailor.title',
    descriptionKey: 'projects.items.resumeTailor.description',
    tech: ['FastAPI', 'React 19', 'Playwright', 'RenderCV', 'Typst', 'Multi-LLM', 'PostgreSQL'],
    repoUrl: 'https://github.com/JOspitia/jd-to-resume-v2',
  },
  {
    id: 'hr-tech-saas',
    titleKey: 'projects.items.hrTech.title',
    descriptionKey: 'projects.items.hrTech.description',
    tech: ['Spring Boot 3.4', 'Angular 21', 'PostgreSQL 15', 'MinIO', 'ClamAV', 'Docker', 'JWT + RBAC'],
    repoUrl: 'https://github.com/JOspitia/AppMiAplicacion',
  },
  {
    id: 'fixlat-tablero-notas',
    titleKey: 'projects.items.fixlat.title',
    descriptionKey: 'projects.items.fixlat.description',
    tech: ['Laravel 12', 'React 18', 'AWS Lambda', 'Node.js 20', 'PostgreSQL 16', 'LocalStack'],
    repoUrl: 'https://github.com/JOspitia/fixlat-tablero-notas',
  },
  {
    id: 'pharmacy-iot',
    titleKey: 'projects.items.pharmacy.title',
    descriptionKey: 'projects.items.pharmacy.description',
    tech: ['Laravel 9', 'React 19', 'SQL Server 2025', 'Ant Design', 'Playwright E2E', 'Docker'],
    repoUrl: 'https://github.com/JOspitia/pharmacy',
  },
  {
    id: 'java-rest-template',
    titleKey: 'projects.items.javaTemplate.title',
    descriptionKey: 'projects.items.javaTemplate.description',
    tech: ['Java 25', 'Javalin', 'PostgreSQL', 'Flyway', 'JWT Revocable', 'bcrypt'],
    repoUrl: 'https://github.com/JOspitia/java-rest-template',
  },
  {
    id: 'rag-api',
    titleKey: 'projects.items.rag.title',
    descriptionKey: 'projects.items.rag.description',
    tech: ['FastAPI', 'Pinecone', 'OpenAI', 'LangChain', 'Hexagonal'],
    repoUrl: 'https://github.com/JOspitia/rag-tech',
  },
] as const;