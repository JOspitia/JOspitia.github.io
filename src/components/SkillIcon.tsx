import type { JSX } from 'react';
import type { SkillIconName } from '../types/skill';

type IconProps = { name: SkillIconName };

/**
 * Inline SVG icons for the six `featured` skills. Each entry pairs the
 * official brand color with one or more `path` strings rendered inside
 * a 24×24 viewBox.
 *
 * The paths are simplified, monoline silhouettes — the goal is "easy to
 * recognize at a glance", not a pixel-perfect reproduction of each
 * trademark logo. Color is applied via `style={{ color }}` and the
 * paths inherit it through `fill="currentColor"` so consumers can
 * override the color from CSS if needed.
 *
 * Brand colors (kept in one place to avoid scattering them across the
 * data layer):
 *   spring     #6DB33F (Spring Boot green)
 *   node       #339933 (Node.js green)
 *   react      #61DAFB (React cyan)
 *   playwright #2EAD33 (Playwright dark green)
 *   postgresql #336791 (PostgreSQL blue)
 *   docker     #2496ED (Docker blue)
 */
const ICONS: Record<SkillIconName, { paths: readonly string[]; color: string }> = {
  spring: {
    color: '#6DB33F',
    // Stylized leaf + coil suggestion (Spring "leaf" mark).
    paths: [
      'M20.59 12c0-1.85-.93-3.49-2.36-4.47l.04-.21c.06-.27-.07-.55-.34-.61-.27-.07-.55.07-.61.34l-.04.21c-1.4-.68-3.06-.78-4.6-.21l-.1-.18c-.14-.24-.46-.32-.7-.18-.24.14-.32.46-.18.7l.1.18a5.99 5.99 0 0 0-2.4 3.43h-.21c-.27 0-.5.22-.5.5s.22.5.5.5h.21a5.99 5.99 0 0 0 2.4 3.43l-.1.18c-.14.24-.07.55.18.7.24.14.55.07.7-.18l.1-.18c1.54.57 3.2.47 4.6-.21l.04.21c.06.27.34.4.61.34.27-.06.4-.34.34-.61l-.04-.21A5.99 5.99 0 0 0 20.59 12zM12 16.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z',
      'M11.99 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    ],
  },
  node: {
    color: '#339933',
    // Hexagonal Node.js silhouette with inner cut-out.
    paths: [
      'M11.79 2.18a1.45 1.45 0 0 1 1.42 0l7.34 4.24a1.45 1.45 0 0 1 .72 1.26v8.48c0 .52-.28 1-.72 1.26l-7.34 4.24a1.45 1.45 0 0 1-1.42 0L4.45 17.42a1.45 1.45 0 0 1-.72-1.26V7.68c0-.52.28-1 .72-1.26l7.34-4.24zM6.7 8.94v6.12l5.3 3.06 5.3-3.06V8.94L12 5.88 6.7 8.94z',
      'M11.04 9.84h1.92v4.32h-1.92V9.84zM13.92 9.84h1.04v.78c.24-.5.74-.92 1.44-.92 1.06 0 1.6.7 1.6 1.78v2.68h-1.04v-2.48c0-.66-.24-1.1-.92-1.1-.66 0-1.08.46-1.08 1.12v2.46h-1.04V9.84z',
    ],
  },
  react: {
    color: '#61DAFB',
    // React-style atom: nucleus + two orbital ellipses + central dot.
    paths: [
      'M12 11.04c.54 0 1.04.22 1.4.58.36.36.58.86.58 1.4 0 .54-.22 1.04-.58 1.4-.36.36-.86.58-1.4.58-.54 0-1.04-.22-1.4-.58-.36-.36-.58-.86-.58-1.4 0-.54.22-1.04.58-1.4.36-.36.86-.58 1.4-.58z',
      'M12 7.18c2.62 0 5.1.42 6.96 1.16 1.12.45 2.02 1.02 2.6 1.68.6.68.86 1.42.6 2.16-.26.72-.94 1.34-1.92 1.84-1.62.84-3.96 1.32-6.58 1.34h-.32c-2.62-.02-4.96-.5-6.58-1.34-.98-.5-1.66-1.12-1.92-1.84-.26-.74 0-1.48.6-2.16.58-.66 1.48-1.23 2.6-1.68C6.56 7.6 9.04 7.18 11.66 7.18h.34zM4.36 14.16c.26 0 .52.04.78.12.94.32 1.66 1.16 2.14 2.16.5 1.02.78 2.16.84 3.16.04.66-.04 1.24-.26 1.66-.2.4-.52.62-.94.62h-.02c-.5 0-1.06-.32-1.56-.84-.66-.7-1.18-1.66-1.46-2.68-.26-.96-.32-1.86-.16-2.56.14-.66.5-1.12 1.02-1.32.18-.08.38-.12.58-.12z',
      'M19.64 14.16c.2 0 .4.04.58.12.52.2.88.66 1.02 1.32.16.7.1 1.6-.16 2.56-.28 1.02-.8 1.98-1.46 2.68-.5.52-1.06.84-1.56.84h-.02c-.42 0-.74-.22-.94-.62-.22-.42-.3-1-.26-1.66.06-1 .34-2.14.84-3.16.48-1 1.2-1.84 2.14-2.16.26-.08.52-.12.78-.12z',
    ],
  },
  playwright: {
    color: '#2EAD33',
    // Playwright = stylized "play" arrow inside a circle. The
    // Playwright mark leans on three colors but we render it
    // monochrome via `currentColor`.
    paths: [
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-1.4-1.4L13.2 11.5 9.6 7.9 11 6.5l5 5-5 5z',
    ],
  },
  postgresql: {
    color: '#336791',
    // PostgreSQL "elephant" silhouette simplified — head + trunk + ear.
    paths: [
      'M5 10.5c0-3 2.5-5.5 5.5-5.5h3c3 0 5.5 2.5 5.5 5.5 0 .66-.12 1.3-.34 1.88l-1.86-.66c.13-.4.2-.8.2-1.22 0-2-1.5-3.5-3.5-3.5h-3c-2 0-3.5 1.5-3.5 3.5 0 .42.07.82.2 1.22l-1.86.66C5.12 11.8 5 11.16 5 10.5z',
      'M7 13c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-2z',
      'M14 13c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-2z',
      'M9.5 17.5h5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1z',
      'M11 13v3h2v-3h-2z',
    ],
  },
  docker: {
    color: '#2496ED',
    // Docker whale silhouette: containers row on top, body below.
    paths: [
      'M2 12h2v2H2v-2zm3-3h2v2H5V9zm3-3h2v5H8V6zm3 0h2v5h-2V6zm3 0h2v5h-2V6z',
      'M21 11h-2V9c0-.55-.45-1-1-1h-1v3h-2v-3h-2v3h-2v-3H9v3H7v-3H5v4.5c0 3.6 2.9 6.5 6.5 6.5h1.5c2.86 0 5.32-1.85 6.2-4.4.18.06.38.1.58.1 1.1 0 2-.9 2-2v-1c0-.66-.34-1.41-1-1.7z',
    ],
  },
};

/**
 * Renders the inline SVG icon for a featured skill. Always 20×20
 * (`h-5 w-5`) so it sits cleanly inside a `SkillPill` next to the
 * skill name.
 */
export function SkillIcon({ name }: IconProps): JSX.Element {
  const icon = ICONS[name];
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      style={{ color: icon.color }}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
