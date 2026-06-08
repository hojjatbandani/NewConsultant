"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

const stats = [
  { value: "60", icon: "user" },
  { value: "700", icon: "handshake" },
  { value: "260,000", icon: "shield" },
];

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white overflow-hidden py-20 px-8">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Rose wash on bottom half */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-rose-50/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight relative">
            {t.stats.heading}
            {/* Pink squiggle under right portion */}
            <svg
              className="absolute -bottom-3 right-0 w-[55%]"
              viewBox="0 0 400 14"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9 C80 2, 160 12, 240 7 C320 2, 370 11, 398 7"
                stroke="#f43f5e"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.icon}
              className="bg-white rounded-3xl shadow-md border border-gray-100 px-7 py-6 flex flex-col gap-8"
            >
              {/* Label */}
              <p className="text-gray-700 font-medium text-base leading-snug max-w-[200px]">
                {t.stats.labels[i]}
              </p>

              {/* Icon + Number row */}
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
                  <StatIcon name={s.icon} />
                </span>
                <span className="text-5xl font-bold text-blue-600 tabular-nums">
                  {s.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Icons ─── */

function StatIcon({ name }: { name: string }) {
  if (name === "user") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    );
  }
  if (name === "handshake") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.79L12 21l7.65-7.98.77-.79a5.4 5.4 0 0 0 0-7.65Z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    );
  }
  return null;
}
