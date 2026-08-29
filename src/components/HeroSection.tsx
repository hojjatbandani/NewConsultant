"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-16 lg:pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
    >
      {/* ── LEFT COLUMN ── */}
      <div className="flex-1 flex flex-col justify-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-accent-50 border border-accent-100 text-sm text-gray-700 mb-7">
          <span className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-600">
            {/* Was a 💻 emoji — emoji render differently per platform and are
                announced as literal words by screen readers. */}
            <SupportIcon />
          </span>
          <span>{t.hero.badge}</span>
        </div>

        {/* Heading — was a flat text-5xl at 375px, which overflowed. */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-[1.05] uppercase tracking-tight mb-8">
          {t.hero.title1}
          <br />
          <span className="relative inline-block">
            {t.hero.title2}
            {/* Accent squiggle underline */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
              viewBox="0 0 380 16"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 10 C60 2, 120 14, 190 8 C260 2, 320 14, 378 8"
                stroke="var(--color-accent-500)"
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
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
          <Link href="/contact" className="btn btn-primary group">
            {t.hero.getStarted}
            <span className="btn-chip bg-white/15 group-hover:bg-white/25 transition-colors">
              <ArrowIcon />
            </span>
          </Link>

          <a href="#about" className="btn btn-soft group">
            {t.hero.learnMore}
            <span className="btn-chip border border-gray-200 bg-white text-gray-700">
              <ArrowIcon />
            </span>
          </a>
        </div>

        {/* Description — was text-gray-500 at 14px; bumped for readability. */}
        <p className="text-gray-600 text-base leading-relaxed max-w-md">
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
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="w-full max-w-md lg:max-w-xl h-auto object-contain"
        />
      </div>
    </section>
  );
}

/* ─── SVG helpers ─── */

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

/* Headset — "on demand live support". */
function SupportIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
      <path d="M20 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </svg>
  );
}
