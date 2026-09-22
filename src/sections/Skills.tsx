import { useMemo, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/skills';
import type { Skill, SkillCategory, SkillIconName } from '../types/skill';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SkillIcon } from '../components/SkillIcon';

/**
 * Display order for skill categories. Matches the i18n key namespace
 * `skills.categories.*` and the union members in `SkillCategory`.
 *
 * PR 8a: extended from 4 to 6 categories (added `databases`, `qa`,
 * `ai`) and switched the grid to `lg:grid-cols-3` to balance six tiles.
 */
const CATEGORY_ORDER: readonly SkillCategory[] = [
  'languages',
  'frameworks',
  'databases',
  'qa',
  'cloud',
  'ai',
];

function groupByCategory(items: readonly Skill[]): Map<SkillCategory, Skill[]> {
  const map = new Map<SkillCategory, Skill[]>();
  for (const cat of CATEGORY_ORDER) map.set(cat, []);
  for (const s of items) {
    const bucket = map.get(s.category);
    if (bucket) bucket.push(s);
  }
  return map;
}

/**
 * Featured skills render with a brand-colored SVG icon and larger
 * typography so recruiters can scan the headline stack at a glance.
 * Non-featured skills keep the standard small-badge treatment.
 */
function SkillPill({ skill }: { skill: Skill }): JSX.Element {
  if (skill.featured && skill.icon) {
    const iconName = skill.icon as SkillIconName;
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-base font-semibold text-slate-900 shadow-sm">
        <SkillIcon name={iconName} />
        <span>{skill.name}</span>
        <span className="text-xs font-normal text-slate-400">L{skill.level}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
      {skill.name}
      <span className="text-xs text-slate-400">L{skill.level}</span>
    </span>
  );
}

/**
 * Skills section — categories rendered in a stable order; each category
 * lists its skills as inline pills. Skill names stay untranslated
 * (design #168 decision #4); category labels come from i18n.
 *
 * Featured skills bubble to the top of each category so the visual
 * hierarchy matches the data: Spring/Node/React/Playwright/PostgreSQL/
 * Docker first, then the supporting stack.
 */
export function Skills(): JSX.Element {
  const { t } = useTranslation();
  const grouped = useMemo(() => groupByCategory(skills), []);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="skills.title" subtitleKey="skills.subtitle" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_ORDER.map((cat) => {
            const items = grouped.get(cat) ?? [];
            // Featured skills float to the top of their category.
            const sorted = [...items].sort((a, b) => {
              if (a.featured && !b.featured) return -1;
              if (!a.featured && b.featured) return 1;
              return 0;
            });
            return (
              <div key={cat}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {t(`skills.categories.${cat}`)}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {sorted.map((skill) => (
                    <li key={skill.id}>
                      <SkillPill skill={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
