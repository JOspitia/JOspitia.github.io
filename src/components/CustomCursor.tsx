import { useEffect, type JSX } from 'react';
import { gsap } from 'gsap';

/**
 * Custom cursor — replaces the system cursor with a small accent dot
 * and a soft ring that follows the pointer with damping. Activated
 * only on devices that have a fine pointer (desktop, not touch).
 *
 * Implementation notes:
 *   • Uses GSAP's `quickTo` for the damped follower (60fps, smoother
 *     than rAF). The dot has very low lag (0.06s), the ring has
 *     noticeable lag (0.5s) so it feels like inertia.
 *   • The ring grows when hovering interactive elements (buttons,
 *     anchors, [role=button]). The CSS class `.is-hover` is the
 *     toggle; the actual scale comes from CSS in `index.css`.
 *   • Falls back to native cursor automatically via the media query
 *     in `index.css` (touch devices skip the whole component).
 */
export function CustomCursor(): JSX.Element | null {
  useEffect(() => {
    // Skip on touch / coarse-pointer devices
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return undefined;

    // Mark body so CSS hides the native cursor + applies `.cursor-*`
    document.body.classList.add('cursor-ready');

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    const setDot = gsap.quickTo(dot, 'x', { duration: 0.06, ease: 'power3' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.06, ease: 'power3' });
    const setRing = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });

    const onMove = (e: PointerEvent): void => {
      setDot(e.clientX);
      setDotY(e.clientY);
      setRing(e.clientX - 16);
      setRingY(e.clientY - 16);
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    // Hover state on interactive elements
    const selector = 'a, button, [role="button"], [data-cursor-hover]';
    const targets = document.querySelectorAll<HTMLElement>(selector);
    const enter = (): void => ring.classList.add('is-hover');
    const leave = (): void => ring.classList.remove('is-hover');
    targets.forEach((t) => {
      t.addEventListener('pointerenter', enter);
      t.addEventListener('pointerleave', leave);
    });

    // Watch for new interactive elements being added (React re-renders)
    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(selector).forEach((t) => {
        if (!t.dataset.cursorBound) {
          t.dataset.cursorBound = '1';
          t.addEventListener('pointerenter', enter);
          t.addEventListener('pointerleave', leave);
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
      targets.forEach((t) => {
        t.removeEventListener('pointerenter', enter);
        t.removeEventListener('pointerleave', leave);
      });
      mo.disconnect();
      document.body.classList.remove('cursor-ready');
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}