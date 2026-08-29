"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AcademicServicesSection() {
  const { t } = useLanguage();
  // Open the first item, not an arbitrary middle one.
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section id="services" className="bg-white py-16 sm:py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* ── LEFT: intro ── */}
        <div className="flex-1 lg:max-w-md pt-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-9 h-9 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
              {/* Was a 💼 emoji. */}
              <BriefcaseIcon />
            </span>
            <span className="text-gray-600 text-sm font-medium">
              {t.academic.badge}
            </span>
          </div>

          <h2 className="section-title text-gray-900 mb-5">
            {t.academic.heading}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            {t.academic.description}
          </p>

          {/* This was a bare <button> with no handler — visually a CTA, but
              clicking it did nothing. It now goes to the services list. */}
          <Link href="/#research" className="btn btn-primary group">
            {t.academic.button}
            <span className="btn-chip bg-white/15 group-hover:bg-white/25 transition-colors">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* ── RIGHT: accordion ── */}
        <div className="flex-1 w-full">
          {t.academic.items.map((service, i) => {
            const isOpen = openIndex === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <div key={service.title} className="border-t border-gray-200">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between gap-4 py-6 text-start group"
                  >
                    <span
                      className={`text-lg sm:text-xl lg:text-2xl font-medium transition-colors ${
                        isOpen
                          ? "text-brand-600"
                          : "text-gray-900 group-hover:text-brand-500"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`shrink-0 transition-all duration-300 ${
                        isOpen ? "text-brand-600 rotate-180" : "text-gray-500"
                      }`}
                    >
                      <ChevronDownIcon />
                    </span>
                  </button>
                </h3>

                {/* Panel stays mounted and animates its height, so opening it
                    eases instead of snapping. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="collapse"
                  data-open={isOpen}
                  {...{ inert: !isOpen }}
                >
                  <div>
                    <ul className="pb-6 space-y-2.5 ps-1">
                      {service.points.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-gray-600 text-[15px]"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Bottom divider */}
          <div className="h-px bg-gray-200" />
        </div>
      </div>
    </section>
  );
}

/* ─── Icons ─── */

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rtl:-scale-x-100"
      aria-hidden="true"
    >
      <path d="M2 7h10M7 2l5 5-5 5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

/* One chevron that rotates, rather than swapping two different glyphs. */
function ChevronDownIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 7.5l5 5 5-5" />
    </svg>
  );
}
