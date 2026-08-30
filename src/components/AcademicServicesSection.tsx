"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AcademicServicesSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="services" className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-20">
        {/* ── LEFT: intro ── */}
        <div className="flex-1 max-w-md pt-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-lg">
              💼
            </span>
            <span className="text-gray-600 text-sm font-medium">
              {t.academic.badge}
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            {t.academic.heading}
          </h2>

          <p className="text-gray-500 leading-relaxed mb-10">
            {t.academic.description}
          </p>

          <button className="flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-blue-800 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-800/20">
            {t.academic.button}
            <span className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center">
              <ArrowIcon />
            </span>
          </button>
        </div>

        {/* ── RIGHT: accordion ── */}
        <div className="flex-1 w-full">
          {t.academic.items.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={service.title}>
                {/* Divider top */}
                <div className="h-px bg-gray-200" />

                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                >
                  <span
                    className={`text-2xl font-medium transition-colors ${
                      isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-500"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`shrink-0 ml-4 transition-colors ${
                      isOpen ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {isOpen ? <ChevronUpIcon /> : <ChevronRightIcon />}
                  </span>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <ul className="pb-6 space-y-2.5 pl-1">
                    {service.points.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-gray-500 text-[15px]"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
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
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7h10M7 2l5 5-5 5" />
    </svg>
  );
}

function ChevronRightIcon() {
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
    >
      <path d="M7 5l5 5-5 5" />
    </svg>
  );
}

function ChevronUpIcon() {
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
    >
      <path d="M5 13l5-5 5 5" />
    </svg>
  );
}
