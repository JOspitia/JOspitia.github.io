/**
 * Skill grouping + per-skill metadata used by the Skills section (PR 3a)
 * and the typed data source in src/data/skills.ts (PR 8a).
 *
 * `name` is intentionally NOT translated (design #168 decision #4): skill
 * labels like "TypeScript" or "PostgreSQL" are product names, not copy.
 * Category labels ARE translated via `t('skills.categories.' + category)`.
 *
 * `level` is a 1..5 ordinal for future visual ordering (bars, dot grids).
 * PR 3a surfaces it as `L{level}` next to each badge.
 *
 * PR 8a extends the category union with `databases`, `qa`, and `ai` to
 * mirror the real stack (see `ME.md`). Categories are rendered in
 * stable order via `CATEGORY_ORDER` in `sections/Skills.tsx`.
 *
 * PR 8a update: introduces `featured` and `icon` to render a small
 * subset of skills prominently with an inline SVG. Only the six skills
 * marked `featured: true` render with icon + larger typography; the
 * rest keep the standard badge styling. The list of featured skills
 * and their official brand colors lives in `src/components/SkillIcon.tsx`.
 */
export type SkillCategory =
  | 'languages'
  | 'frameworks'
  | 'databases'
  | 'qa'
  | 'cloud'
  | 'ai';

export type SkillIconName =
  | 'spring'
  | 'node'
  | 'react'
  | 'playwright'
  | 'postgresql'
  | 'docker';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5;
  /** Whether this skill is rendered prominently with an icon and larger typography. */
  featured?: boolean;
  /** Icon identifier; only used when `featured: true`. */
  icon?: SkillIconName;
};
