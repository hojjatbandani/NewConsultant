"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function TechnicalSolutionsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111111] text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-5xl font-light text-center mb-16 tracking-tight">
          {t.technical.heading}
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ── LEFT: Survey Platform ── */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-light text-center text-white mb-2">
              {t.technical.raiTitle}
            </h3>

            {/* Dashboard screenshot */}
            <div className="rounded-3xl overflow-hidden bg-gray-800 aspect-4/3">
              <Image
                src="/images/Technical Solution image 1.jpg"
                alt={t.technical.raiTitle}
                width={640}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="text-[15px] leading-relaxed text-gray-200 space-y-2 pt-2">
              <p>{t.technical.raiIntro}</p>
              <ul className="space-y-1.5">
                {t.technical.raiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">*</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Call Centre ── */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-light text-center text-white mb-2">
              {t.technical.callTitle}
            </h3>

            {/* Call centre photo */}
            <div className="rounded-3xl overflow-hidden bg-gray-800 aspect-4/3">
              <Image
                src="/images/Technical Solution Image 2.png"
                alt={t.technical.callTitle}
                width={640}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="text-[15px] leading-relaxed text-gray-200 space-y-2 pt-2">
              <p>{t.technical.callIntro}</p>
              <p className="font-bold text-white">{t.technical.featuresLabel}</p>
              <ul className="space-y-1.5">
                {t.technical.callFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">*</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
