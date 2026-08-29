"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const stats = [
  { value: 60, icon: "user" },
  { value: 700, icon: "handshake" },
  { value: 260000, icon: "shield" },
];

export default function StatsSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative bg-white overflow-hidden py-16 sm:py-20 px-5 sm:px-8">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Accent wash on bottom half */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-accent-50/70 pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-title inline-block text-gray-900 relative">
            {t.stats.heading}
            {/* Accent squiggle under the right portion */}
            <svg
              className="absolute -bottom-3 right-0 w-[55%]"
              viewBox="0 0 400 14"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 9 C80 2, 160 12, 240 7 C320 2, 370 11, 398 7"
                stroke="var(--color-accent-500)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.icon}
              className="bg-white rounded-3xl shadow-md border border-gray-100 px-7 py-6 flex flex-col gap-8 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Label */}
              <p className="text-gray-700 font-medium text-base leading-snug max-w-50">
                {t.stats.labels[i]}
              </p>

              {/* Icon + Number row */}
              <div className="flex items-center justify-between gap-3">
                <span className="w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center shrink-0">
                  <StatIcon name={s.icon} />
                </span>
                <CountUp value={s.value} locale={lang === "ar" ? "ar-EG" : "en-US"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Counts up to `value` the first time the number scrolls into view. Static
 * numbers read as decoration; a number that resolves reads as a claim. Users
 * who ask for reduced motion get the final value immediately.
 */
function CountUp({ value, locale }: { value: number; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        // Reduced motion: land on the final value, no tween.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setShown(value);
          return;
        }

        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          // easeOutCubic — fast first, settles at the end.
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl font-bold text-brand-600 tabular-nums"
    >
      {shown.toLocaleString(locale)}
    </span>
  );
}

/* ─── Icons ─── */

function StatIcon({ name }: { name: string }) {
  const p = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-accent-600",
    "aria-hidden": true,
  };

  if (name === "user") {
    return (
      <svg {...p}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    );
  }
  if (name === "handshake") {
    return (
      <svg {...p}>
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.79L12 21l7.65-7.98.77-.79a5.4 5.4 0 0 0 0-7.65Z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...p}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    );
  }
  return null;
}
