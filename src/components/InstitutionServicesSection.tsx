"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

const cards = [
  { image: "/images/Service 1.jpg", alt: "Analytics dashboard with CTR metrics" },
  { image: "/images/Service 2.jpg", alt: "Person holding phone in store" },
  { image: "/images/Service 3.jpg", alt: "Hands pointing at charts and reports" },
];

export default function InstitutionServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-dark py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="section-title text-white text-center mb-12 lg:mb-16">
          {t.institutions.heading}
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <article key={card.image} className="group flex flex-col gap-5">
              {/* Image — the ratio was an odd 3/3.2; 4/5 is a standard
                  portrait crop and keeps the three cards aligned. */}
              <div className="rounded-3xl overflow-hidden aspect-4/5 bg-gray-800 w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={460}
                  height={575}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Text */}
              <div className="space-y-2 px-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                  {t.institutions.cards[i].title}
                </h3>
                {/* gray-400 on #111 is ~7.5:1 — fine here, unlike on white. */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.institutions.cards[i].desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
