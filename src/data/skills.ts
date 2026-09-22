import type { Skill } from '../types/skill';

/**
 * Skills data source — consumed by the Skills section (PR 3a).
 *
 * `name` is intentionally NOT translated (design #168 decision #4):
 * "TypeScript", "PostgreSQL", etc. are product names, not copy.
 * Category labels ARE translated via `t('skills.categories.<id>')`.
 *
 * `level` is a 1..5 ordinal surfaced as `L{level}` next to each badge.
 *
 * PR 8a replaces placeholders with the real stack from the user's
 * `ME.md`: 6 categories (languages, frameworks, databases, qa, cloud,
 * ai) with 32 skills. Levels reflect working confidence (1=exposure,
 * 5=expert).
 */
export const skills: readonly Skill[] = [
  // Languages
  { id: 'java', name: 'Java', category: 'languages', level: 5 },
  { id: 'ts', name: 'TypeScript', category: 'languages', level: 5 },
  { id: 'js', name: 'JavaScript', category: 'languages', level: 5 },
  { id: 'php', name: 'PHP', category: 'languages', level: 4 },
  { id: 'py', name: 'Python', category: 'languages', level: 3 },

  // Frameworks (backend + frontend)
  { id: 'spring', name: 'Spring Boot', category: 'frameworks', level: 5 },
  { id: 'node', name: 'Node.js', category: 'frameworks', level: 4 },
  { id: 'express', name: 'Express', category: 'frameworks', level: 4 },
  { id: 'fastapi', name: 'FastAPI', category: 'frameworks', level: 3 },
  { id: 'laravel', name: 'Laravel', category: 'frameworks', level: 4 },
  { id: 'react', name: 'React', category: 'frameworks', level: 5 },
  { id: 'angular', name: 'Angular', category: 'frameworks', level: 4 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frameworks', level: 5 },

  // Databases
  { id: 'postgres', name: 'PostgreSQL', category: 'databases', level: 4 },
  { id: 'mysql', name: 'MySQL', category: 'databases', level: 4 },
  { id: 'oracle', name: 'Oracle', category: 'databases', level: 3 },
  { id: 'mssql', name: 'SQL Server', category: 'databases', level: 3 },

  // QA & Testing
  { id: 'playwright', name: 'Playwright', category: 'qa', level: 5 },
  { id: 'cypress', name: 'Cypress', category: 'qa', level: 5 },
  { id: 'selenium', name: 'Selenium', category: 'qa', level: 3 },
  { id: 'postman', name: 'Postman', category: 'qa', level: 4 },

  // Cloud & DevOps
  { id: 'docker', name: 'Docker', category: 'cloud', level: 4 },
  { id: 'aws-s3', name: 'AWS S3', category: 'cloud', level: 3 },
  { id: 'aws-lambda', name: 'AWS Lambda', category: 'cloud', level: 3 },
  { id: 'ci-cd', name: 'CI/CD', category: 'cloud', level: 4 },
  { id: 'git', name: 'Git', category: 'cloud', level: 5 },

  // AI & Orchestrators
  { id: 'gentle-ai', name: 'Gentle-AI', category: 'ai', level: 4 },
  { id: 'kimi', name: 'Kimi K2', category: 'ai', level: 3 },
  { id: 'deepseek', name: 'DeepSeek', category: 'ai', level: 3 },
  { id: 'gemini', name: 'Gemini', category: 'ai', level: 4 },
  { id: 'claude', name: 'Claude', category: 'ai', level: 4 },
  { id: 'copilot', name: 'GitHub Copilot', category: 'ai', level: 5 },
] as const;
