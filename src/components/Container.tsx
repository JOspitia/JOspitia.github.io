import type { HTMLAttributes, JSX, ReactNode } from 'react';

type ContainerProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  children: ReactNode;
};

/**
 * Horizontal layout container with the standard max-width and gutter
 * scale used by every section in the page. Consumers stay free to attach
 * extra ids / aria attributes via `...rest`.
 */
export function Container({ children, ...rest }: ContainerProps): JSX.Element {
  return (
    <div
      className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
      {...rest}
    >
      {children}
    </div>
  );
}