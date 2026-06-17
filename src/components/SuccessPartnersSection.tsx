"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

// Partner logos live in /public/images/logos. Add/remove files here to
// change the strip.
const logos = [
  "logo.png",
  "kaggle.png",
  "omanoil.png",
  "omantel.png",
  "radisson.png",
  "simplilearn.png",
  "university.png",
  "vezart amal.png",
  "NfeVu.png",
  "logo2.jpg",
  "logo3.jpg",
  "logo4.jpg",
  "logo5.jpg",
  "logo6.jpg",
  "logo7.jpg",
  "logo8.jpg",
  "logo9.jpg",
  "logo10.jpg",
  "logo11.jpg",
];

// Split into two rows that scroll in opposite directions.
const half = Math.ceil(logos.length / 2);
const rowOne = logos.slice(0, half);
const rowTwo = logos.slice(half);

export default function SuccessPartnersSection() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-5xl font-light text-gray-900 text-center mb-14 tracking-tight">
          {t.partners.heading}
        </h2>
      </div>

      {/* Two opposite-direction marquee rows */}
      <div
        className="marquee-viewport relative w-full flex flex-col gap-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <MarqueeRow logos={rowOne} />
        <MarqueeRow logos={rowTwo} reverse />
      </div>
    </section>
  );
}

function MarqueeRow({ logos, reverse }: { logos: string[]; reverse?: boolean }) {
  // Render the list twice so the -50% animation loops seamlessly.
  const strip = [...logos, ...logos];

  return (
    <ul
      className={`marquee-track flex items-center gap-14 sm:gap-20${
        reverse ? " is-reverse" : ""
      }`}
    >
      {strip.map((file, i) => (
        <li key={i} className="shrink-0" aria-hidden={i >= logos.length}>
          <div className="relative h-20 sm:h-24 w-44 sm:w-52">
            <Image
              src={`/images/logos/${file}`}
              alt={i < logos.length ? `Partner logo` : ""}
              fill
              sizes="208px"
              className="object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
