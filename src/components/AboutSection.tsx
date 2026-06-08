"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 px-8 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/About Bg.png"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row w-full items-center gap-16">
        {/* ── LEFT COLUMN: image collage ── */}
        <div className="flex-1 w-full max-w-xl">
          <Image
            src="/images/About Hero.png"
            alt="Horizons team — 10+ years working experience"
            width={668}
            height={595}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ── RIGHT COLUMN: text ── */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
            {t.about.heading}
          </h2>

          <p
            className="text-gray-600 leading-relaxed mb-10 text-[16px]"
            style={{ textAlign: "justify" }}
          >
            {t.about.paragraph}
          </p>

          <button className="flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-radial from-[#3376C5] to-[#1355A3] text-white font-normal text-sm shadow-lg shadow-blue-900/20">
            {t.about.button}
            <span className="w-8 h-8 rounded-full border border-blue-400/50 flex items-center justify-center">
              <ArrowIcon />
            </span>
          </button>
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
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7h10M7 2l5 5-5 5" />
    </svg>
  );
}

