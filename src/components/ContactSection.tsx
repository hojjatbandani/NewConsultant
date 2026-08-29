"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-surface-dark px-5 sm:px-10 pt-6 pb-0 relative">
      {/* ── Concave bottom-left corner illusion ── */}
      <div
        className="absolute bottom-0 left-5 sm:left-10 w-14 h-14 bg-surface-dark rounded-tr-[56px] z-10 pointer-events-none"
        aria-hidden
      />

      {/* ── Card ── */}
      <div
        className="relative overflow-hidden min-h-[26rem] lg:min-h-[30rem]"
        style={{
          borderRadius: "32px 32px 32px 0px",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/Contactus.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay — raised from /50 so the white text clears 4.5:1 over
            the lighter parts of the photo. */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        {/* Contact block.
            This was absolutely positioned inside a fixed-height card, so on a
            narrow screen the three contact lines plus the heading could spill
            past the card edge. In normal flow the card grows with its content
            (min-height, not height) and still sits end-aligned from lg up. */}
        <div className="relative flex flex-col gap-5 p-8 sm:p-12 lg:items-end lg:text-end">
          <h2 className="section-title text-white">{t.contact.heading}</h2>

          <div className="flex flex-col gap-3">
            <ContactLine
              label={t.contact.phoneLabel}
              href="tel:+96894706981"
              value="+968 9470 6981"
              icon={<PhoneIcon />}
            />
            <ContactLine
              label={t.contact.phoneLabel}
              href="tel:+96897676022"
              value="+968 9767 6022"
              icon={<PhoneIcon />}
            />
            <ContactLine
              label={t.contact.emailLabel}
              href="mailto:Mohammed@t4id.com"
              value="Mohammed@t4id.com"
              icon={<MailIcon />}
            />
          </div>

          {/* The card previously offered no way to actually start a
              conversation — only two phone numbers and an address. */}
          <Link href="/contact" className="btn btn-soft mt-2 group">
            {t.contact.cta}
            <span className="btn-chip border border-gray-300 text-gray-700">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  href,
  value,
  icon,
}: {
  label: string;
  href: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={`${label}: ${value}`}
      className="inline-flex items-center gap-3 lg:flex-row-reverse text-white text-base sm:text-lg hover:text-accent-300 transition-colors"
    >
      <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span dir="ltr">{value}</span>
    </a>
  );
}

/* ─── Icons ─── */

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 3h3l1.5 4-2 1.4a13 13 0 0 0 6.6 6.6L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3 5.2 2 2 0 0 1 5 3h1.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

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
