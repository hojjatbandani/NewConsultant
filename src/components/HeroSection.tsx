"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="max-w-7xl mx-auto px-8 pt-6 pb-16 flex flex-col lg:flex-row items-center gap-12 min-h-[calc(100vh-80px)]">
      {/* ── LEFT COLUMN ── */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-sm text-gray-700 mb-8">
          <span className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-base">
            💻
          </span>
          <span>{t.hero.badge}</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-medium text-gray-900 leading-none uppercase tracking-tight mb-8">
          {t.hero.title1}
          <br />
          <span className="relative inline-block">
            {t.hero.title2}
            {/* Pink squiggle underline */}
            <svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 380 16"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 10 C60 2, 120 14, 190 8 C260 2, 320 14, 378 8"
                stroke="#f43f5e"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <br />
          {t.hero.title3}
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-8 mt-4">
          <a
            href="#contact"
            className="flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-radial from-[#3376C5] to-[#1355A3] text-white font-normal text-sm shadow-lg shadow-blue-900/20"
          >
            {t.hero.getStarted}
            <span className="w-8 h-8 rounded-full flex items-center justify-center">
              <ArrowIcon color="white" />
            </span>
          </a>

          <a
            href="#about"
            className="flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-rose-50 border border-rose-100 text-gray-800 font-normal text-sm hover:bg-rose-100 transition-colors"
          >
            {t.hero.learnMore}
            <span className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center">
              <ArrowIcon color="#374151" />
            </span>
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          {t.hero.description}
        </p>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <Image
          src="/images/Hero.jpg"
          alt="Horizons consulting — 99% reporting and 24 hour support"
          width={1248}
          height={1590}
          preload
          className="w-full max-w-xl h-auto object-contain"
        />
      </div>
    </section>
  );
}

/* ─── SVG helpers ─── */

function ArrowIcon({ color }: { color: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7h10M7 2l5 5-5 5" />
    </svg>
  );
}
