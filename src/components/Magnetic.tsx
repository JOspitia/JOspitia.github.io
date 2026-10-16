import { useRef, type JSX, type ReactNode, type MouseEvent } from 'react';
import { gsap } from 'gsap';

/**
 * Magnetic wrapper — adds a GSAP-driven "magnetic" pull to any
 * element. The wrapped node translates toward the cursor while the
 * pointer is within its bounding rect, with a sharp return when the
 * pointer leaves.
 *
 * Usage:
 *   <Magnetic strength={0.3}>
 *     <button>...</button>
 *   </Magnetic>
 *
 * Strength is the percentage of the offset applied (0.3 = 30%),
 * keeping the pull subtle so CTAs still feel anchored.
 *
 * Implementation notes:
 *   • GSAP tweens are created lazily inside the event handler so
 *     they don't pile up on every mousemove. Each event kills the
 *     previous tween on the same target before starting a new one.
 *   • `data-cursor-hover` is added so CustomCursor's MutationObserver
 *     treats the wrapper like any other interactive element.
 */
type MagneticProps = {
  children: ReactNode;
  /** 0..1, default 0.3 — how much the cursor offset pulls the element. */
  strength?: number;
  className?: string;
};

export function Magnetic({ children, strength = 0.3, className }: MagneticProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * strength;
    const dy = (e.clientY - rect.top - rect.height / 2) * strength;
    gsap.killTweensOf(el);
    gsap.to(el, { x: dx, y: dy, duration: 0.25, ease: 'power3.out', overwrite: 'auto' });
  };

  const onLeave = (): void => {
    const el = ref.current;
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
  };

  return (
    <div
      ref={ref}
      data-cursor-hover
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className ?? 'inline-block'}
    >
      {children}
    </div>
  );
}