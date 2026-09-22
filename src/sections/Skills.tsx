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
 * Featured skill card — dark surface, brand-colored icon, "Principal"
 * badge. The level is exposed only on hover via a native `title`
 * attribute (rendered through i18n) instead of a visible `L{level}`
 * label, keeping the visual hierarchy clean.
 */
function FeaturedSkillCard({
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
      className="inline-flex flex-col rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white shadow-md transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center gap-2">
        <SkillIcon name={iconName} />
        <span className="text-base font-semibold">{skill.name}</span>
      </div>
      <span className="mt-1 inline-flex items-center gap-1 self-start rounded-full bg-blue-600/20 px-2 py-0.5 text-xs font-medium text-blue-300">
        {t('skills.principal')}
      </span>
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
 * Skills section — categories rendered in a stable order; each category
 * shows a "Top stack" block with featured cards above and a "Secondary
 * stack" block with quiet chips below. Skill names stay untranslated
 * (design #168 decision #4); category labels, the stack subtitles and
 * the level tooltips come from i18n.
 *
 * The featured/secondary split matches the user's "few-but-deep"
 * framing: recruiters see the headline stack immediately, and the
 * supporting tools stay one glance below without competing for
 * attention.
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
            const featured = items.filter((s) => s.featured);
            const secondary = items.filter((s) => !s.featured);

            return (
              <div key={cat}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {t(`skills.categories.${cat}`)}
                </h3>

                {featured.length > 0 && (
                  <div className="mb-3">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                      {t('skills.topStack')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featured.map((skill) => (
                        <FeaturedSkillCard
                          key={skill.id}
                          skill={skill}
                          iconName={skill.icon as SkillIconName}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {secondary.length > 0 && (
                  <div>
                    {featured.length > 0 && (
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                        {t('skills.secondaryStack')}
                      </p>
                    )}
                    <ul className="flex flex-wrap gap-1.5">
                      {secondary.map((skill) => (
                        <li key={skill.id}>
                          <SecondarySkillChip skill={skill} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}