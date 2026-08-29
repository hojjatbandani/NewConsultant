"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 sm:py-20 px-5 sm:px-8 overflow-hidden">
      {/* Background image — decorative, so alt is empty. `sizes` stops Next
          from shipping the largest candidate to every viewport. */}
      <Image
        src="/images/About Bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row w-full items-center gap-10 lg:gap-16">
        {/* ── LEFT COLUMN: image collage ── */}
        <div className="flex-1 w-full max-w-xl">
          <Image
            src="/images/About Hero.png"
            alt="Horizons team — 10+ years working experience"
            width={668}
            height={595}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ── RIGHT COLUMN: text ── */}
        <div className="flex-1 max-w-lg">
          <h2 className="section-title text-gray-900 mb-5">
            {t.about.heading}
          </h2>

          {/* `text-align: justify` was leaving ragged rivers of whitespace at
              narrow widths; left-aligned reads cleaner in both LTR and RTL. */}
          <p className="text-gray-700 leading-relaxed mb-8 text-base">
            {t.about.paragraph}
          </p>

          <Link href="/about" className="btn btn-primary group">
            {t.about.button}
            <span className="btn-chip bg-white/15 group-hover:bg-white/25 transition-colors">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── SVG Icons ─── */

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
