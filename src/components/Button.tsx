import type { ButtonHTMLAttributes, JSX, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

/**
 * Button — sharp corners, mono uppercase tracking on small variants.
 * Variants map to the dark/light palette via CSS variables so theme
 * switching is automatic (no Tailwind class swap needed).
 */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--accent)] text-[var(--bg-page)] hover:bg-[var(--fg-page)] hover:text-[var(--bg-page)] focus-visible:ring-[var(--accent)] disabled:opacity-50',
  secondary:
    'border border-current/40 text-[var(--fg-page)] hover:bg-[var(--fg-page)] hover:text-[var(--bg-page)] focus-visible:ring-current/40',
  ghost:
    'text-[var(--fg-page)] hover:bg-current/5 focus-visible:ring-current/40',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs font-mono uppercase tracking-wider',
  md: 'px-4 py-2 text-sm font-mono uppercase tracking-wider',
  lg: 'px-6 py-3 text-sm font-mono uppercase tracking-wider',
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
        'inline-flex items-center justify-center transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]',
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