import type { JSX } from 'react';

type TechBadgeProps = {
  /** Tech name to display (e.g. `'TypeScript'`, `'React'`). */
  name: string;
};

/**
 * Small pill that surfaces a single technology on a project card.
 * Plain `<span>` so it composes inside any container without breaking
 * layout. `aria-label` exposes the full name to assistive tech if the
 * surrounding context truncates the visible text later.
 */
export function TechBadge({ name }: TechBadgeProps): JSX.Element {
  return (
    <span
      aria-label={name}
      className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
    >
      {name}
    </span>
  );
}