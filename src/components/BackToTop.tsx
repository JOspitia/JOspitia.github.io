import { useEffect, useState } from 'react';
import type { JSX } from 'react';

/**
 * Floating "back to top" button. Appears once the user has scrolled past
 * 600px so it does not compete with the sticky header at the top of the
 * page. Uses a passive scroll listener so it never blocks the scroll
 * thread, and only re-renders when the visibility threshold is crossed
 * (boolean state, not scroll position).
 */
export function BackToTop(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}