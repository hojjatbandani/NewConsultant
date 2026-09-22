"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Vision / Mission / Values — three equal cards on the home page, right after
 * the About section. Each card: icon badge, title, body. Values renders as a
 * list inside its card so all three cards share the same rhythm and height.
 */
export default function VisionMissionSection() {
  const { t } = useLanguage();
  const v = t.visionMission;

  const cards = [
    { icon: <VisionIcon />, title: v.visionTitle, text: v.visionText },
    { icon: <MissionIcon />, title: v.missionTitle, text: v.missionText },
    { icon: <ValuesIcon />, title: v.valuesTitle, items: v.values },
  ];

  return (
    <section id="vision" className="relative bg-gray-50/70 px-5 sm:px-8 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-light text-gray-900 text-center tracking-tight mb-4">
          {v.heading}
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14">{v.lead}</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <article
              key={i}
              className="group relative flex flex-col rounded-3xl bg-white border border-gray-100 shadow-sm p-8 lg:p-10 transition-shadow hover:shadow-lg hover:shadow-blue-900/5"
            >
              {/* Accent bar */}
              <span
                className="absolute top-0 inset-x-10 h-1 rounded-b-full bg-gradient-to-r from-brand-400 to-brand-600 opacity-80"
                aria-hidden
              />

              <span
                className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-7 transition-colors group-hover:bg-brand-100"
                aria-hidden
              >
                <span className="w-9 h-9">{c.icon}</span>
              </span>

              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">{c.title}</h3>

              {c.items ? (
                <ul className="flex flex-col gap-3.5">
                  {c.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <span
                        className="mt-1.5 w-5 h-5 shrink-0 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center"
                        aria-hidden
                      >
                        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 6.5 5 9l4.5-6" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed">{c.text}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SVG icons (48×48, stroke, inherit currentColor) ─── */

function VisionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24Z" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 6v4M10 10l3 3M38 10l-3 3" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="22" cy="26" r="17" />
      <circle cx="22" cy="26" r="10" />
      <circle cx="22" cy="26" r="3" />
      <path d="M22 26 39 9" />
      <path d="M39 9h6l-6-6v6Z" fill="currentColor" />
    </svg>
  );
}

function ValuesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M24 5l17 6v11c0 10-7 18-17 21C14 40 7 32 7 22V11l17-6Z" />
      <path d="M16 24l6 6 10-12" />
    </svg>
  );
}
