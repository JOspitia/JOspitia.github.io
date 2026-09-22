/**
 * Skill grouping + per-skill metadata used by the Skills section (PR 3)
 * and the typed data source in src/data/skills.ts (PR 2).
 *
 * `name` is intentionally NOT translated (design #168 decision #4): skill
 * labels like "TypeScript" or "PostgreSQL" are product names, not copy.
 * Category labels ARE translated via `t('skills.categories.' + category)`.
 *
 * `level` is a 1..5 ordinal for future visual ordering (bars, dot grids).
 * PR 3 may or may not render it; the field is reserved either way.
 */
export type SkillCategory = 'languages' | 'frameworks' | 'tools' | 'cloud';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5;
};
