import type { JSX } from 'react';
import type { SkillIconName } from '../types/skill';

// Official brand SVG paths for the six featured skills, sourced from
// `simple-icons` (npm package, v16.32.0). Brand colors come from the
// package's `hex` field on each `IconData`.
//
// Note: `simple-icons` does not ship an icon for Playwright (no brand
// is officially registered in their set), so the Playwright glyph
// keeps a small inline path in `PLAYWRIGHT_PATH`. The five other
// featured skills import their paths directly from `simple-icons`,
// which keeps the bundle tree-shakeable per-icon.

import { siSpring } from 'simple-icons';
import { siNodedotjs } from 'simple-icons';
import { siReact } from 'simple-icons';
import { siPostgresql } from 'simple-icons';
import { siDocker } from 'simple-icons';

type IconProps = { name: SkillIconName };

/**
 * Inline fallback for Playwright. `simple-icons` does not include a
 * Playwright brand, so this single path stands in for the official
 * mark. Kept intentionally minimal — see the PR 12 description for
 * the rationale and the brand-color override (`#2EAD33`).
 */
const PLAYWRIGHT_PATH =
  'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-1.4-1.4L13.2 11.5 9.6 7.9 11 6.5l5 5-5 5z';
const PLAYWRIGHT_HEX = '2EAD33';

/**
 * Maps each featured skill to its `simple-icons` entry. The `path`
 * string is the official brand SVG path; `hex` is the brand color
 * without the leading `#` (kept in sync with the upstream package).
 */
const ICON_DATA: Record<SkillIconName, { path: string; hex: string }> = {
  spring: { path: siSpring.path, hex: siSpring.hex },
  node: { path: siNodedotjs.path, hex: siNodedotjs.hex },
  react: { path: siReact.path, hex: siReact.hex },
  playwright: { path: PLAYWRIGHT_PATH, hex: PLAYWRIGHT_HEX },
  postgresql: { path: siPostgresql.path, hex: siPostgresql.hex },
  docker: { path: siDocker.path, hex: siDocker.hex },
};

/**
 * Renders the SVG icon for a featured skill. Always `h-5 w-5` so it
 * sits cleanly inside the Core Stack card. Color is applied through
 * `style={{ color }}` and the paths inherit it through
 * `fill="currentColor"` so consumers can override the color from
 * CSS if needed.
 *
 * The `viewBox="0 0 24 24"` matches every `simple-icons` glyph
 * shipped by the package, including the ones imported above.
 */
export function SkillIcon({ name }: IconProps): JSX.Element {
  const icon = ICON_DATA[name];
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      style={{ color: `#${icon.hex}` }}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{name}</title>
      <path d={icon.path} />
    </svg>
  );
}
