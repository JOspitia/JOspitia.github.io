import type { ButtonHTMLAttributes, JSX, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

/**
 * Color tokens come from `tailwind.config.js#theme.extend.colors`:
 * only `accent` and `ink` are defined for the placeholder palette, so the
 * presentational primitives use those plus Tailwind's default slate scale
 * for surface/border neutrals. Once the final palette lands (post-PR 4)
 * the variant map below is the single edit point.
 */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:opacity-90 focus-visible:ring-accent disabled:bg-slate-300 disabled:text-slate-500',
  secondary:
    'border border-slate-700 text-ink hover:bg-slate-100 focus-visible:ring-slate-500 disabled:border-slate-300 disabled:text-slate-400',
  ghost:
    'text-ink hover:bg-slate-100 focus-visible:ring-slate-500 disabled:text-slate-400',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  type = 'button',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center rounded font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}