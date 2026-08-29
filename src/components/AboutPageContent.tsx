"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutPageContent() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
      {/* Hero */}
      <header className="max-w-3xl mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 mb-4">
          <span className="w-6 h-px bg-accent-300" aria-hidden />
          {a.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
          {a.heading}
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">{a.lead}</p>
      </header>

      {/* Image + paragraphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/images/About Image.jpg"
            alt={a.heading}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          {a.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{a.missionTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{a.missionText}</p>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{a.visionTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{a.visionText}</p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{a.valuesTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {a.values.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex w-10 h-10 rounded-full bg-brand-50 text-brand-700 items-center justify-center mb-4 font-bold tabular-nums" aria-hidden>
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="rounded-3xl bg-gray-900 px-8 py-10 sm:px-12 sm:py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
          {a.ctaTitle}
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-7">
          {a.ctaText}
        </p>
        <Link
          href="/contact"
          className="btn btn-soft"
        >
          {a.ctaButton}
          <span className="btn-chip border border-gray-300 text-gray-700">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl:-scale-x-100" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </span>
        </Link>
      </section>
    </div>
  );
}
