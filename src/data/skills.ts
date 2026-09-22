import type { Skill } from '../types/skill';

/**
 * Skills data source — consumed by the Skills section (PR 3).
 *
 * `name` is intentionally NOT translated (design #168 decision #4):
 * "TypeScript", "PostgreSQL", etc. are product names, not copy.
 * Category labels ARE translated via `t('skills.categories.<id>')`.
 *
 * `level` is a 1..5 ordinal reserved for future visual rendering
 * (bars / dot grids). PR 3 may or may not surface it; the field
 * exists either way so the data contract stays stable.
 */
export const skills: readonly Skill[] = [
  { id: 'ts', name: 'TypeScript', category: 'languages', level: 5 },
  { id: 'js', name: 'JavaScript', category: 'languages', level: 5 },
  { id: 'py', name: 'Python', category: 'languages', level: 4 },
  { id: 'go', name: 'Go', category: 'languages', level: 3 },
  { id: 'react', name: 'React', category: 'frameworks', level: 5 },
  { id: 'vite', name: 'Vite', category: 'frameworks', level: 5 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frameworks', level: 5 },
  { id: 'node', name: 'Node.js', category: 'frameworks', level: 4 },
  { id: 'express', name: 'Express', category: 'frameworks', level: 4 },
  { id: 'git', name: 'Git', category: 'tools', level: 5 },
  { id: 'vitest', name: 'Vitest', category: 'tools', level: 4 },
  { id: 'playwright', name: 'Playwright', category: 'tools', level: 3 },
  { id: 'gh', name: 'GitHub Actions', category: 'cloud', level: 4 },
  { id: 'docker', name: 'Docker', category: 'cloud', level: 4 },
  { id: 'aws', name: 'AWS', category: 'cloud', level: 3 },
] as const;