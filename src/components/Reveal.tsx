import { useRef, type JSX, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin once at module load. Safe to repeat because
// gsap.registerPlugin no-ops when the plugin is already registered.
gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  /** Y offset in px for the start state, default 24. */
  y?: number;
  /** Delay in seconds, default 0. */
  delay?: number;
  /** Optional className passthrough. */
  className?: string;
  /** Tag, default "div". */
  as?: 'div' | 'section' | 'ul' | 'ol';
};

/**
 * Scroll-reveal wrapper — fades + slides up the children when they
 * scroll into view. Built on GSAP ScrollTrigger via useGSAP so
 * cleanup is automatic on unmount.
 *
 * Usage:
 *   <Reveal>
 *     <SectionHeading ... />
 *   </Reveal>
 */
export function Reveal({
  children,
  y = 24,
  delay = 0,
  className,
  as: Tag = 'div',
}: RevealProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.from(el, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: ref },
  );

  const cls = className ?? '';
  // Tag is constrained to layout-neutral choices; keeping the cast
  // explicit so TS doesn't complain about the polymorphic ref.
  if (Tag === 'section') {
    return (
      <section ref={ref as unknown as React.RefObject<HTMLElement>} className={cls}>
        {children}
      </section>
    );
  }
  if (Tag === 'ul') {
    return (
      <ul ref={ref as unknown as React.RefObject<HTMLUListElement>} className={cls}>
        {children}
      </ul>
    );
  }
  if (Tag === 'ol') {
    return (
      <ol ref={ref as unknown as React.RefObject<HTMLOListElement>} className={cls}>
        {children}
      </ol>
    );
  }
  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}