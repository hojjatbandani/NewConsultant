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
    <section className="bg-[#111111] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-light text-white text-center mb-16 leading-tight tracking-tight">
          {t.institutions.heading}
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={card.image} className="flex flex-col gap-5">
              {/* Image */}
              <div className="rounded-3xl overflow-hidden aspect-[3/3.2] bg-gray-800 w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={460}
                  height={480}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="space-y-2 px-1">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  {t.institutions.cards[i].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.institutions.cards[i].desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
