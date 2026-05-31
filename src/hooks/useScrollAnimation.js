'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation — triggers when the element enters the viewport.
 * Returns [ref, isVisible].
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

/**
 * useCountUp — animates a number from 0 to `end` when triggered.
 */
export function useCountUp(end, duration = 1800, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, end, duration]);
  return count;
}
