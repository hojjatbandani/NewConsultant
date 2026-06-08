"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

// Structural data only (display text comes from the dictionary, by index).
const services = [
  { id: 1, icon: "collect" },
  { id: 2, icon: "tool" },
  { id: 3, icon: "process" },
  { id: 4, icon: "verify" },
  { id: 5, icon: "field" },
  { id: 6, icon: "form" },
  { id: 7, icon: "handle" },
  { id: 8, icon: "analysis" },
  { id: 9, icon: "market" },
  { id: 10, icon: "quality" },
  { id: 11, icon: "viz" },
  { id: 12, icon: "report" },
  { id: 13, icon: "interpret" },
  { id: 14, icon: "review" },
  { id: 15, icon: "design" },
  { id: 16, icon: "literature" },
  { id: 17, icon: "objectives" },
  { id: 18, icon: "proposal" },
];

export default function ResearchServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="research" className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-14">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <HeartOutlineIcon className="w-4 h-4 text-rose-400" />
              </span>
              <span className="text-sm text-gray-500 font-medium">
                {t.research.badge}
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
              {t.research.heading}
            </h2>
          </div>

          <p className="flex-1 lg:max-w-xs text-gray-500 text-sm leading-relaxed lg:pt-2">
            {t.research.description}
          </p>
        </div>

        {/* ── 3-column card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard
              key={s.id}
              num={s.id}
              icon={s.icon}
              title={t.research.cards[i].title}
              desc={t.research.cards[i].desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Card ─── */

function ServiceCard({
  num,
  icon,
  title,
  desc,
}: {
  num: number;
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl p-6 flex flex-col gap-4 border bg-white border-gray-100 shadow-sm transition-all duration-300 hover:bg-gray-900 hover:border-gray-800 hover:shadow-lg hover:-translate-y-1">
      {/* Number + icon row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium tabular-nums text-gray-400 transition-colors">
          {String(num).padStart(2, "0")}
        </span>
        <span className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-100 group-hover:bg-violet-600 transition-colors duration-300">
          <ServiceIcon
            name={icon}
            className="w-5 h-5 text-rose-400 group-hover:text-white transition-colors duration-300"
          />
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold leading-snug text-gray-900 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
        {desc}
      </p>
    </div>
  );
}

/* ─── Icon router (one distinct icon per service) ─── */

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const p = {
    className,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "collect": // Data Collection — download into tray
      return (
        <svg {...p}>
          <path d="M4 12v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3" />
          <path d="M10 3v8" />
          <path d="M6.5 7.5 10 11l3.5-3.5" />
        </svg>
      );
    case "tool": // Tool Design — gear
      return (
        <svg {...p}>
          <circle cx="10" cy="10" r="2.6" />
          <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.1 5.1l1.4 1.4M13.5 13.5l1.4 1.4M5.1 14.9l1.4-1.4M13.5 6.5l1.4-1.4" />
        </svg>
      );
    case "process": // Data Processing — chip
      return (
        <svg {...p}>
          <rect x="6" y="6" width="8" height="8" rx="1.5" />
          <rect x="9" y="9" width="2" height="2" rx="0.3" />
          <path d="M8 3v2M12 3v2M8 15v2M12 15v2M3 8h2M3 12h2M15 8h2M15 12h2" />
        </svg>
      );
    case "verify": // Validation — shield check
      return (
        <svg {...p}>
          <path d="M10 3 4 5.2v4c0 3.9 2.6 6.4 6 7.8 3.4-1.4 6-3.9 6-7.8v-4L10 3Z" />
          <path d="M7.6 9.8 9.3 11.5 12.7 8.1" />
        </svg>
      );
    case "field": // Field Surveys — map pin
      return (
        <svg {...p}>
          <path d="M10 17s5-4.2 5-8a5 5 0 0 0-10 0c0 3.8 5 8 5 8Z" />
          <circle cx="10" cy="9" r="1.8" />
        </svg>
      );
    case "form": // Questionnaires — clipboard list
      return (
        <svg {...p}>
          <rect x="5" y="4" width="10" height="13" rx="1.6" />
          <path d="M8 4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" />
          <path d="M7.6 9h1M7.6 12h1M10.5 9h2.2M10.5 12h2.2" />
        </svg>
      );
    case "handle": // Data Handling — database
      return (
        <svg {...p}>
          <ellipse cx="10" cy="5" rx="6" ry="2.2" />
          <path d="M4 5v10c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V5" />
          <path d="M4 10c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2" />
        </svg>
      );
    case "analysis": // Data Analysis — pie
      return (
        <svg {...p}>
          <circle cx="10" cy="10" r="7" />
          <path d="M10 10V3" />
          <path d="M10 10l6.06 3.5" />
        </svg>
      );
    case "market": // Market Research — trending up
      return (
        <svg {...p}>
          <path d="M3 14l4-4 3 3 6-6" />
          <path d="M13 7h4v4" />
        </svg>
      );
    case "quality": // Quality Studies — medal
      return (
        <svg {...p}>
          <circle cx="10" cy="8" r="4.5" />
          <path d="M7.6 11.4 6.5 17l3.5-2 3.5 2-1.1-5.6" />
        </svg>
      );
    case "viz": // Visualization — bar chart
      return (
        <svg {...p}>
          <path d="M4 16V9M9 16V4M14 16v-5" />
          <path d="M3 16h14" />
        </svg>
      );
    case "report": // Reporting — file text
      return (
        <svg {...p}>
          <path d="M6 3h5l3 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M11 3v3h3" />
          <path d="M7.5 10.5h5M7.5 13.5h5" />
        </svg>
      );
    case "interpret": // Interpretation — lightbulb
      return (
        <svg {...p}>
          <path d="M7 13a5 5 0 1 1 6 0c-.7.5-1 1.2-1 2H8c0-.8-.3-1.5-1-2Z" />
          <path d="M8.5 17h3" />
        </svg>
      );
    case "review": // Review — magnifier
      return (
        <svg {...p}>
          <circle cx="9" cy="9" r="5" />
          <path d="M16 16l-3.2-3.2" />
        </svg>
      );
    case "design": // Research Design — compass
      return (
        <svg {...p}>
          <circle cx="10" cy="10" r="7" />
          <path d="M13.2 6.8 11 11l-4.2 2.2L9 9l4.2-2.2Z" />
        </svg>
      );
    case "literature": // Literature Review — open book
      return (
        <svg {...p}>
          <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10v12H5.5A1.5 1.5 0 0 0 4 17.5V5.5Z" />
          <path d="M16 5.5A1.5 1.5 0 0 0 14.5 4H10v12h4.5a1.5 1.5 0 0 1 1.5 1.5V5.5Z" />
        </svg>
      );
    case "objectives": // Objectives & Questions — target
      return (
        <svg {...p}>
          <circle cx="10" cy="10" r="7" />
          <circle cx="10" cy="10" r="4" />
          <circle cx="10" cy="10" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "proposal": // Proposal Review — clipboard check
      return (
        <svg {...p}>
          <rect x="5" y="4" width="10" height="13" rx="1.6" />
          <path d="M8 4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" />
          <path d="M7.8 11l1.6 1.6 3-3.2" />
        </svg>
      );
    default:
      return null;
  }
}

function HeartOutlineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 17 8c0 4.5-7 9-7 9Z" />
    </svg>
  );
}
