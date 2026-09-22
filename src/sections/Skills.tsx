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

/**
 * Maps the 1..5 ordinal `level` to the i18n tier key under
 * `skills.levels.*`. Values below 3 collapse to `beginner` so the
 * tooltip is always defined; levels 1 and 2 are intentionally hidden
 * from the public profile per the user's "few-but-deep" philosophy.
 */
function levelToTier(level: 1 | 2 | 3 | 4 | 5): 'expert' | 'advanced' | 'intermediate' | 'beginner' {
  if (level === 5) return 'expert';
  if (level === 4) return 'advanced';
  if (level === 3) return 'intermediate';
  return 'beginner';
}

/**
 * Core Stack card — light surface, brand-colored icon, no badge.
 * Renders one of the six featured skills (those with `featured: true`
 * and an `icon` in `data/skills.ts`). The level is exposed only on
 * hover via a native `title` attribute (rendered through i18n) so the
 * card stays visually clean.
 */
function CoreStackCard({
  skill,
  iconName,
}: {
  skill: Skill;
  iconName: SkillIconName;
}): JSX.Element {
  const { t } = useTranslation();
  const tooltipText = t(`skills.levels.${levelToTier(skill.level)}`);
  return (
    <div
      title={tooltipText}
      className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
    >
      <SkillIcon name={iconName} />
      <span className="mt-2 text-sm font-bold text-slate-800">{skill.name}</span>
    </div>
  );
}

/**
 * Secondary skill chip — quiet, slate-tinted, no visible level label.
 * Level stays available on hover via the native tooltip so the chip
 * stays visually unobtrusive while preserving access to the detail.
 */
function SecondarySkillChip({ skill }: { skill: Skill }): JSX.Element {
  const { t } = useTranslation();
  const tooltipText = t(`skills.levels.${levelToTier(skill.level)}`);
  return (
    <span
      title={tooltipText}
      className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500 opacity-80 transition-opacity hover:opacity-100"
    >
      {skill.name}
    </span>
  );
}

/**
 * Category tile — border + padding + shadow + category heading (via
 * i18n) + wrap of secondary skill chips. Categories with zero
 * secondary skills are skipped at the parent level so empty tiles
 * never render.
 */
function CategoryTile({
  category,
  skills: items,
}: {
  category: SkillCategory;
  skills: readonly Skill[];
}): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
        {t(`skills.categories.${category}`)}
      </h4>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((skill) => (
          <li key={skill.id}>
            <SecondarySkillChip skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Skills section — PR 10 Opción 2 layout.
 *
 * Top block: "Core Stack" with the six featured skills rendered as
 * light-surface cards with brand-colored icons.
 *
 * Bottom block: "Secondary Stack" with a category-by-category tile
 * grid for every non-featured skill.
 *
 * The featured/secondary split separates the user's "few-but-deep"
 * headline stack from the supporting tools so the categories stay
 * visually balanced. Skill names stay untranslated (design #168
 * decision #4); category labels, the stack subtitles and the level
 * tooltips come from i18n.
 */
export function Skills(): JSX.Element {
  const { t } = useTranslation();
  const { coreSkills, secondaryByCategory } = useMemo(() => {
    const core: Skill[] = [];
    const byCat = new Map<SkillCategory, Skill[]>();
    for (const cat of CATEGORY_ORDER) byCat.set(cat, []);
    for (const s of skills) {
      if (s.featured && s.icon) {
        core.push(s);
      } else {
        byCat.get(s.category)?.push(s);
      }
    }
    return { coreSkills: core, secondaryByCategory: byCat };
  }, []);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="skills.title" subtitleKey="skills.subtitle" />

        <div className="mb-10">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600">
            {t('skills.coreStack')}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {coreSkills.map((skill) => (
              <CoreStackCard
                key={skill.id}
                skill={skill}
                iconName={skill.icon as SkillIconName}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
            {t('skills.secondaryStack')}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORY_ORDER.map((cat) => {
              const items = secondaryByCategory.get(cat) ?? [];
              if (items.length === 0) return null;
              return (
                <CategoryTile key={cat} category={cat} skills={items} />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}