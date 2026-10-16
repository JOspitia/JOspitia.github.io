import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/skills';
import type { Skill, SkillCategory } from '../types/skill';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

const CATEGORY_ORDER: readonly SkillCategory[] = [
  'languages',
  'frameworks',
  'databases',
  'qa',
  'cloud',
  'ai',
];

/**
 * Skills section — ASCII tree view (2026-10 redesign).
 *
 * Layout:
 *
 *   $ tree ~/stack
 *   ~/stack
 *   ├── languages/        Java, TypeScript, JavaScript, PHP, Python
 *   ├── frameworks/       Spring Boot, Laravel, React, Angular, ...
 *   ├── databases/        PostgreSQL, MySQL, SQL Server, Oracle, MinIO
 *   ├── qa/               Playwright, Cypress, Postman, Selenium, PHPUnit
 *   ├── cloud/            Docker, GitHub Actions, Flyway, Nginx, LocalStack, ...
 *   └── ai/               GitHub Copilot, Gemini, Claude, OpenAI, ...
 *
 *   6 categories · 32 technologies · 1 philosophy (few-but-deep)
 *
 * Below the tree, the **Core Stack** of 6 featured skills renders as
 * a row of "icon cards" with the brand-colored inline SVG icons.
 * Hovering any card inverts the colors (no gradient).
 */
export function Skills(): JSX.Element {
  const { t } = useTranslation();

  const byCategory = new Map<SkillCategory, Skill[]>();
  for (const cat of CATEGORY_ORDER) byCategory.set(cat, []);
  for (const s of skills) {
    byCategory.get(s.category)?.push(s);
  }

  // Tree drawing helpers — Unicode box-drawing characters keep the
  // visual contract of a `tree` CLI render.
  const TEE = '├──';
  const LAST = '└──';
  const PIPE = '│  ';
  const blank = '   ';

  const totalCount = skills.length;
  const categoryCount = CATEGORY_ORDER.length;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-b border-current/15 bg-[var(--bg-page)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading titleKey="skills.title" subtitleKey="skills.subtitle" sectionKey="skills" />

        {/* Tree view */}
        <Reveal className="overflow-x-auto border border-current/20 bg-[var(--terminal-900)] p-5 font-mono text-sm">
          <p className="text-[var(--muted)]">{t('skills.treePrompt')}</p>
          <p className="text-[var(--fg-page)]">~/stack</p>
          <div className="mt-2 space-y-1">
            {CATEGORY_ORDER.map((cat, idx) => {
              const items = byCategory.get(cat) ?? [];
              const isLast = idx === CATEGORY_ORDER.length - 1;
              const branch = isLast ? LAST : TEE;
              const tail = isLast ? blank : PIPE;
              return (
                <div key={cat}>
                  <p className="text-[var(--accent)]">
                    <span className="text-[var(--muted)]">{branch} </span>
                    <span className="font-semibold">{t(`skills.categories.${cat}`)}/</span>
                    <span className="text-[var(--muted)]">
                      {'  '}[{items.length} {t('ui.technologiesFile')}]
                    </span>
                  </p>
                  {items.map((skill, skillIdx) => {
                    const isLastItem = skillIdx === items.length - 1;
                    const subBranch = isLastItem ? LAST : TEE;
                    const subTail = isLastItem ? blank : PIPE;
                    return (
                      <p
                        key={skill.id}
                        className="text-[var(--fg-page)]"
                        style={{ paddingLeft: '1.25rem' }}
                        title={t(`skills.levels.${levelToTier(skill.level)}`)}
                      >
                        <span className="text-[var(--muted)]">{tail}</span>
                        <span className="text-[var(--muted)]">{subBranch} </span>
                        {skill.name}
                        {skill.featured && (
                          <span className="ml-2 text-[var(--accent)]">★</span>
                        )}
                        {/* Spacer to keep grid alignment for next category */}
                        {skillIdx === items.length - 1 && !isLast && (
                          <span className="ml-0" aria-hidden="true">
                            {'\u00A0'}
                          </span>
                        )}
                        {/* unused but kept for symmetry */}
                        {subTail && false && null}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <p className="mt-4 border-t border-current/15 pt-3 text-[var(--muted)]">
            {categoryCount} {t('ui.categoryFile')} · {totalCount} {t('ui.technologiesFile')} · 1 {t('ui.philosophyFile')} ({t('ui.philosophyText')})
          </p>
        </Reveal>

        {/* Core Stack — featured row */}
        <div className="mt-10">
          <p className="section-marker mb-3">
            <span className="text-[var(--accent)]">★</span>
            <span className="text-[var(--muted)]"> {t('skills.coreStack')}</span>
          </p>
          <Reveal
            as="ul"
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {skills.filter((s) => s.featured && s.icon).map((skill) => (
              <li
                key={skill.id}
                className="invert-on-hover border border-current/30 bg-[var(--terminal-800)] p-4 text-center"
                title={t(`skills.levels.${levelToTier(skill.level)}`)}
              >
                <p className="font-mono text-sm font-bold text-[var(--fg-page)]">{skill.name}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function levelToTier(level: 1 | 2 | 3 | 4 | 5): 'expert' | 'advanced' | 'intermediate' | 'beginner' {
  if (level === 5) return 'expert';
  if (level === 4) return 'advanced';
  if (level === 3) return 'intermediate';
  return 'beginner';
}