import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently the most visible in the viewport.
 *
 * Returns the `id` of the section whose intersection ratio is highest among
 * those currently intersecting above `threshold`. Used by the header nav to
 * mark the active anchor link without listening to scroll events.
 *
 * Implementation notes:
 * - One IntersectionObserver, one entry array. We pick the highest-ratio
 *   intersecting entry on each callback, so the active id naturally follows
 *   whichever section dominates the viewport.
 * - The effect cleanup disconnects the observer so unmounting the hook does
 *   not leak observers on sections that later unmount as well.
 */
export function useActiveSection(
  sectionIds: readonly string[],
  threshold = 0.5,
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observed: Element[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b,
        );
        setActiveId(top.target.id);
      },
      { threshold: [threshold] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    }

    return () => {
      for (const el of observed) observer.unobserve(el);
      observer.disconnect();
    };
  }, [sectionIds, threshold]);

  return activeId;
}