"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps a section and gently fades + lifts it into view the first time it
 * enters the viewport. Respects `prefers-reduced-motion` via `motion-safe`.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-1000 ease-out ${
        shown
          ? "opacity-100 translate-y-0"
          : "motion-safe:opacity-0 motion-safe:translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
