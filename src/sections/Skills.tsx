import { useMemo, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/skills';
import type { Skill, SkillCategory } from '../types/skill';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

/**
 * Display order for skill categories. Matches the i18n key namespace
 * `skills.categories.*` and the union members in `SkillCategory`.
 */
const CATEGORY_ORDER: readonly SkillCategory[] = [
  'languages',
  'frameworks',
  'tools',
  'cloud',
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
 * Skills section — categories rendered in a stable order; each category
 * lists its skills as inline pills. Skill names stay untranslated
 * (design #168 decision #4); category labels come from i18n.
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CATEGORY_ORDER.map((cat) => {
            const items = grouped.get(cat) ?? [];
            return (
              <div key={cat}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {t(`skills.categories.${cat}`)}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li key={skill.id}>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                        {skill.name}
                        <span className="text-xs text-slate-400">L{skill.level}</span>
                      </span>
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