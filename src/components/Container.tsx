import type { HTMLAttributes, JSX, ReactNode } from 'react';

type ContainerProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  children: ReactNode;
};

/**
 * Horizontal layout container with the standard max-width and gutter
 * scale used by every section in the page.
 *
 * Width policy (2026-10 redesign):
 *   • On desktop the content occupies ~75% of the viewport (capped at
 *     1440 px) instead of the previous `max-w-5xl` (1024 px) which
 *     left a lot of empty real estate on 1440+ screens.
 *   • Implemented with `w-[min(90%,1440px)]` so the container is 90%
 *     of its parent until 1440 px, then it stops growing. Side gutter
 *     shrinks to 1 rem on small viewports so the breathing room on
 *     phones stays comfortable.
 *
 * Consumers stay free to attach extra ids / aria attributes via `...rest`.
 */
export function Container({ children, ...rest }: ContainerProps): JSX.Element {
  return (
    <div
      className="mx-auto w-[min(90%,1440px)] px-4 sm:px-6 lg:px-8"
      {...rest}
    >
      {children}
    </div>
  );
}