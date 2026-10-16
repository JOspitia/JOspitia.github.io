import type { Skill } from '../types/skill';

/**
 * Skills data source — consumed by the Skills section (PR 3a).
 *
 * `name` is intentionally NOT translated (design #168 decision #4):
 * "TypeScript", "PostgreSQL", etc. are product names, not copy.
 * Category labels ARE translated via `t('skills.categories.<id>')`.
 *
 * `level` is a 1..5 ordinal surfaced as a native tooltip (rendered
 * through i18n). Values below 3 collapse to `beginner` so the
 * tooltip is always defined.
 *
 * Featured set (6 cards in Core Stack) — chosen to match the
 * day-to-day primary stack across the public projects:
 *   • Spring Boot (HR-Tech SaaS, Proing work)
 *   • Laravel (Pharmacy, Fixlat Tablero, Proing work)
 *   • React (HR-Tech, Pharmacy, Resume Tailor, Fixlat Tablero)
 *   • PostgreSQL (4 of 6 projects)
 *   • Playwright (Pharmacy E2E + QA work)
 *   • Docker (5 of 6 projects)
 *
 * Node.js moves out of the featured set per user request (2026-10);
 * it stays in the secondary tier at level 4 because Fixlat Tablero's
 * AWS Lambda + LocalStack pipeline runs on it.
 *
 * 2026-10 overhaul: extracted every technology mentioned in the
 * six project READMEs and folded them into the secondary tier,
 * grouped by `SkillCategory` (languages, frameworks, databases, qa,
 * cloud, ai). Per-library versions are intentionally not displayed
 * (would clutter the chips); the full version pins live in each
 * project's README.
 */
export const skills: readonly Skill[] = [
  // ---- Languages -------------------------------------------------------
  { id: 'java', name: 'Java', category: 'languages', level: 5 },
  { id: 'ts', name: 'TypeScript', category: 'languages', level: 5 },
  { id: 'js', name: 'JavaScript', category: 'languages', level: 5 },
  { id: 'php', name: 'PHP', category: 'languages', level: 5 },
  { id: 'py', name: 'Python', category: 'languages', level: 4 },

  // ---- Frameworks — Core / Featured ------------------------------------
  { id: 'spring', name: 'Spring Boot', category: 'frameworks', level: 5, featured: true, icon: 'spring' },
  { id: 'laravel', name: 'Laravel', category: 'frameworks', level: 5, featured: true, icon: 'laravel' },
  { id: 'react', name: 'React', category: 'frameworks', level: 5, featured: true, icon: 'react' },

  // ---- Frameworks — Backend -------------------------------------------
  { id: 'node', name: 'Node.js', category: 'frameworks', level: 4 },
  { id: 'angular', name: 'Angular', category: 'frameworks', level: 4 },
  { id: 'fastapi', name: 'FastAPI', category: 'frameworks', level: 4 },
  { id: 'express', name: 'Express', category: 'frameworks', level: 4 },
  { id: 'javalin', name: 'Javalin', category: 'frameworks', level: 3 },

  // ---- Frameworks — Frontend / UI libraries ---------------------------
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frameworks', level: 5 },
  { id: 'ant-design', name: 'Ant Design', category: 'frameworks', level: 4 },
  { id: 'react-router', name: 'React Router', category: 'frameworks', level: 4 },
  { id: 'lucide', name: 'Lucide Icons', category: 'frameworks', level: 4 },
  { id: 'primeng', name: 'PrimeNG', category: 'frameworks', level: 3 },
  { id: 'shadcn', name: 'shadcn/ui', category: 'frameworks', level: 3 },
  { id: 'radix', name: 'Radix UI', category: 'frameworks', level: 3 },
  { id: 'dnd-kit', name: '@dnd-kit', category: 'frameworks', level: 3 },
  { id: 'framer-motion', name: 'Framer Motion', category: 'frameworks', level: 3 },
  { id: 'rxjs', name: 'RxJS', category: 'frameworks', level: 3 },

  // ---- Databases — Featured -------------------------------------------
  { id: 'postgres', name: 'PostgreSQL', category: 'databases', level: 5, featured: true, icon: 'postgresql' },

  // ---- Databases — Other ----------------------------------------------
  { id: 'mysql', name: 'MySQL', category: 'databases', level: 4 },
  { id: 'mssql', name: 'SQL Server', category: 'databases', level: 4 },
  { id: 'oracle', name: 'Oracle', category: 'databases', level: 3 },
  { id: 'minio', name: 'MinIO (object storage)', category: 'databases', level: 3 },

  // ---- QA & Testing — Featured ----------------------------------------
  { id: 'playwright', name: 'Playwright', category: 'qa', level: 5, featured: true, icon: 'playwright' },

  // ---- QA & Testing — Other -------------------------------------------
  { id: 'cypress', name: 'Cypress', category: 'qa', level: 5 },
  { id: 'postman', name: 'Postman', category: 'qa', level: 4 },
  { id: 'phpunit', name: 'PHPUnit', category: 'qa', level: 3 },
  { id: 'selenium', name: 'Selenium', category: 'qa', level: 3 },

  // ---- Cloud & DevOps — Featured --------------------------------------
  { id: 'docker', name: 'Docker', category: 'cloud', level: 5, featured: true, icon: 'docker' },

  // ---- Cloud & DevOps — Other -----------------------------------------
  { id: 'git', name: 'Git', category: 'cloud', level: 5 },
  { id: 'ci-cd', name: 'CI/CD pipelines', category: 'cloud', level: 4 },
  { id: 'gh-actions', name: 'GitHub Actions', category: 'cloud', level: 4 },
  { id: 'docker-compose', name: 'Docker Compose', category: 'cloud', level: 4 },
  { id: 'flyway', name: 'Flyway', category: 'cloud', level: 4 },
  { id: 'aws-s3', name: 'AWS S3', category: 'cloud', level: 3 },
  { id: 'aws-lambda', name: 'AWS Lambda', category: 'cloud', level: 3 },
  { id: 'nginx', name: 'Nginx', category: 'cloud', level: 3 },
  { id: 'localstack', name: 'LocalStack', category: 'cloud', level: 3 },

  // ---- AI & Orchestrators ---------------------------------------------
  { id: 'copilot', name: 'GitHub Copilot', category: 'ai', level: 5 },
  { id: 'gentle-ai', name: 'Gentle-AI', category: 'ai', level: 4 },
  { id: 'gemini', name: 'Gemini', category: 'ai', level: 4 },
  { id: 'claude', name: 'Claude', category: 'ai', level: 4 },
  { id: 'openai', name: 'OpenAI / GPT-4o-mini', category: 'ai', level: 4 },
  { id: 'kimi', name: 'Kimi K2', category: 'ai', level: 3 },
  { id: 'deepseek', name: 'DeepSeek', category: 'ai', level: 3 },
  { id: 'pinecone', name: 'Pinecone', category: 'ai', level: 3 },
  { id: 'langchain', name: 'LangChain', category: 'ai', level: 3 },
  { id: 'rendercv', name: 'RenderCV + Typst', category: 'ai', level: 3 },
] as const;