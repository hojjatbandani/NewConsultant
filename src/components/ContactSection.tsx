"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-[#111111] px-10 pt-6 pb-0 relative">
      {/* ── Concave bottom-left corner illusion ── */}
      {/* A dark circle sits on top of the card's bottom-left corner,
          making it look scooped inward */}
      <div
        className="absolute bottom-0 left-10 w-14 h-14 bg-[#111111] rounded-tr-[56px] z-10 pointer-events-none"
      />

      {/* ── Card ── */}
      <div
        className="relative overflow-hidden h-[420px] lg:h-[480px]"
        style={{
          borderRadius: "32px 32px 32px 0px",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/Contactus.jpg"
          alt="Person working at desk"
          fill
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contact text — upper right */}
        <div className="absolute top-12 inset-e-12 lg:inset-e-20 flex flex-col gap-4">
          <h2 className="text-5xl lg:text-6xl font-light text-white tracking-tight mb-2">
            {t.contact.heading}
          </h2>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+96894706981"
              className="text-white text-lg font-light hover:text-rose-300 transition-colors"
            >
              +968 9470 6981
            </a>
            <a
              href="tel:+96897676022"
              className="text-white text-lg font-light hover:text-rose-300 transition-colors"
            >
              +968 9767 6022
            </a>
            <a
              href="mailto:Mohammed@t4id.com"
              className="text-white text-lg font-light hover:text-rose-300 transition-colors"
            >
              Mohammed@t4id.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
