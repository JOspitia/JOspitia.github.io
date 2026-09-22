import type { HTMLAttributes, JSX, ReactNode } from 'react';

type CardProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  children: ReactNode;
  /**
   * Render-as tag. Defaults to `<div>`. Use `<article>` for self-contained
   * pieces of content (e.g. project cards) and `<section>` for thematic
   * groupings — keeps the markup semantic without a separate component.
   */
  as?: 'div' | 'article' | 'section';
};

export function Card({
  children,
  as: Tag = 'div',
  ...rest
}: CardProps): JSX.Element {
  return (
    <Tag
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      {...rest}
    >
      {children}
    </Tag>
  );
}