"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";

const navLinks = [
  { key: "home", kind: "section", target: "home" },
  { key: "about", kind: "route", target: "/about" },
  { key: "services", kind: "section", target: "services" },
  { key: "research", kind: "section", target: "research" },
  { key: "partners", kind: "section", target: "partners" },
  { key: "contact", kind: "route", target: "/contact" },
] as const;

function sectionHref(target: string, pathname: string) {
  if (target === "home") return pathname === "/" ? "#home" : "/";
  return pathname === "/" ? `#${target}` : `/#${target}`;
}

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-darker text-white">
      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 lg:gap-12">
        {/* Left — About us */}
        <div className="flex flex-col gap-5 max-w-md">
          {/* Was a hand-drawn SVG that looked nothing like the real mark in
              the header. Same asset, inverted for the dark surface. */}
          <Image
            src="/images/logo.png"
            alt="Horizons Statistical Consulting"
            width={800}
            height={317}
            sizes="180px"
            className="h-10 w-auto brightness-0 invert opacity-90"
          />

          <h3 className="text-lg font-semibold text-white">
            {t.footer.aboutHeading}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t.footer.aboutText}
          </p>
        </div>

        {/* Middle — Quick links */}
        <nav aria-label={t.footer.quickLinks}>
          <h4 className="text-white font-semibold text-base mb-5">
            {t.footer.quickLinks}
          </h4>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={
                    link.kind === "route"
                      ? link.target
                      : sectionHref(link.target, pathname)
                  }
                  // py-2 gives each row a real tap target instead of a 20px line.
                  className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 py-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" aria-hidden />
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — Contact.
            The footer previously ended at "quick links", so anyone who scrolled
            past the contact card had no phone or email in reach. */}
        <div>
          <h4 className="text-white font-semibold text-base mb-5">
            {t.footer.contactHeading}
          </h4>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <a
                href="tel:+96894706981"
                dir="ltr"
                className="text-gray-400 hover:text-white transition-colors block py-2"
              >
                +968 9470 6981
              </a>
            </li>
            <li>
              <a
                href="tel:+96897676022"
                dir="ltr"
                className="text-gray-400 hover:text-white transition-colors block py-2"
              >
                +968 9767 6022
              </a>
            </li>
            <li>
              <a
                href="mailto:Mohammed@t4id.com"
                dir="ltr"
                className="text-gray-400 hover:text-white transition-colors block py-2 break-all"
              >
                Mohammed@t4id.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ──
          Privacy and Terms used to be `href="#"` links that went nowhere, and
          the copyright notice was marked up as a link too. They are plain text
          until real pages exist — swap them back to <Link> at that point. */}
      <div className="border-t border-gray-800 py-5 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500">
          <p>
            © {year} Horizons Statistical Consulting. {t.footer.rights}
          </p>
          <p className="flex items-center gap-4">
            <span>{t.footer.privacy}</span>
            <span aria-hidden className="text-gray-700">
              |
            </span>
            <span>{t.footer.terms}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
