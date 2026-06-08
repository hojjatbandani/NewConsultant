"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function SuccessPartnersSection() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-light text-gray-900 text-center mb-14 tracking-tight">
          {t.partners.heading}
        </h2>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 text-gray-400">
          {/* DocuSign */}
          <div className="flex items-center gap-2">
            <BurstIcon />
            <span className="text-2xl font-semibold tracking-tight text-gray-500">
              DocuSign
            </span>
          </div>

          {/* maze */}
          <div className="flex items-center gap-2">
            <WaveIcon />
            <span className="text-3xl font-bold lowercase tracking-tight text-gray-500">
              maze
            </span>
          </div>

          {/* Culture Amp */}
          <span className="text-2xl font-semibold tracking-tight text-gray-500">
            Culture Amp
          </span>

          {/* HelloSign */}
          <span className="text-2xl font-bold uppercase tracking-wide text-gray-500">
            HelloSign
          </span>

          {/* attentive */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
            <span className="text-2xl font-medium lowercase tracking-tight text-gray-500">
              attentive
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Brand marks ─── */

function BurstIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-gray-500">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="12" y1="3" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="3" y1="12" x2="7" y2="12" />
        <line x1="17" y1="12" x2="21" y2="12" />
        <line x1="5.6" y1="5.6" x2="8.4" y2="8.4" />
        <line x1="15.6" y1="15.6" x2="18.4" y2="18.4" />
        <line x1="5.6" y1="18.4" x2="8.4" y2="15.6" />
        <line x1="15.6" y1="8.4" x2="18.4" y2="5.6" />
      </g>
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-gray-500">
      <path
        d="M3 15 C6 9, 9 9, 12 15 C15 21, 18 21, 21 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
