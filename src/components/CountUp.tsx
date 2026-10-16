import { useEffect, useRef, useState, type JSX } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  /** Pre-formatted display value (e.g. "40%", "30%", "90%", "4+"). */
  raw: string;
  /** Duration of the tween in seconds, default 1.2. */
  duration?: number;
  /** Extra className. */
  className?: string;
};

/**
 * CountUp — animates from 0 to the numeric part of `raw` when the
 * element scrolls into view. Preserves any non-numeric suffix
 * ("%" → 40%, "+" → 4+, "ms" → 200 ms, etc.).
 *
 * How it works:
 *   • Splits `raw` into numeric + suffix via regex.
 *   • Uses GSAP's `snap: { textContent: 1 }` to tween textContent
 *     from 0 to target while scrolling.
 *   • On ScrollTrigger's `onComplete`, snaps to the exact final
 *     number to avoid floating-point rounding artifacts.
 *
 * The element starts at "0" until the trigger fires, so the
 * placeholder is always a sensible number.
 */
export function CountUp({ raw, duration = 1.2, className }: CountUpProps): JSX.Element {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState('0');

  // Decompose "40%" → { target: 40, suffix: "%", prefix: "" }
  const match = raw.match(/^(\D*)([\d.]+)(\D*)$/);
  const prefix = match?.[1] ?? '';
  const target = Number(match?.[2] ?? '0');
  const suffix = match?.[3] ?? '';

  useEffect(() => {
    const el = ref.current;
    if (!el || !Number.isFinite(target) || target === 0) {
      setDisplay(raw);
      return;
    }

    const obj = { v: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration,
          ease: 'power2.out',
          snap: { v: 1 },
          onUpdate: () => setDisplay(`${prefix}${Math.round(obj.v)}${suffix}`),
          onComplete: () => setDisplay(raw),
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [raw, target, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}