"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function TechnicalSolutionsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-dark text-white py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="section-title text-center mb-12 lg:mb-16">
          {t.technical.heading}
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <SolutionColumn
            title={t.technical.raiTitle}
            image="/images/Technical Solution image 1.jpg"
            intro={t.technical.raiIntro}
            features={t.technical.raiFeatures}
          />
          <SolutionColumn
            title={t.technical.callTitle}
            image="/images/Technical Solution Image 2.png"
            intro={t.technical.callIntro}
            featuresLabel={t.technical.featuresLabel}
            features={t.technical.callFeatures}
          />
        </div>
      </div>
    </section>
  );
}

/* The two halves were duplicated markup with drifting details (one had a
   features label, the other did not). One component, one set of rules. */
function SolutionColumn({
  title,
  image,
  intro,
  featuresLabel,
  features,
}: {
  title: string;
  image: string;
  intro: string;
  featuresLabel?: string;
  features: readonly string[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl sm:text-2xl font-medium text-center text-white">
        {title}
      </h3>

      <div className="rounded-3xl overflow-hidden bg-gray-800 aspect-4/3">
        <Image
          src={image}
          alt={title}
          width={640}
          height={480}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[15px] leading-relaxed text-gray-200 space-y-3 pt-1">
        <p>{intro}</p>
        {featuresLabel && (
          <p className="font-semibold text-white">{featuresLabel}</p>
        )}
        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              {/* Was a literal "*" character, which screen readers announce as
                  "asterisk" and which sat off the text baseline. */}
              <CheckIcon />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-1 shrink-0 text-brand-300"
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.75" strokeWidth="1.3" />
      <path d="M5.2 8.3 7.1 10.2l3.7-4.1" />
    </svg>
  );
}
