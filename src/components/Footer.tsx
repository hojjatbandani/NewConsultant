"use client";

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

  return (
    <footer className="bg-[#0d0d0d] text-white">
      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — About us */}
        <div className="flex flex-col gap-5 max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#1e293b" />
              <circle cx="18" cy="18" r="13" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
              <circle cx="18" cy="18" r="8" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
              <circle cx="18" cy="18" r="3.5" fill="#f59e0b" />
              <circle cx="18" cy="18" r="1.5" fill="#1e293b" />
            </svg>
            <p className="text-2xl font-bold text-blue-400 leading-none">
              Horizon
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white">
            {t.footer.aboutHeading}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t.footer.aboutText}
          </p>
        </div>

        {/* Right — Quick links (single column = main menu) */}
        <div className="lg:justify-self-end">
          <h4 className="text-white font-semibold text-base mb-5">
            {t.footer.quickLinks}
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={
                    link.kind === "route"
                      ? link.target
                      : sectionHref(link.target, pathname)
                  }
                  className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800 py-5 px-8">
        <div className="max-w-7xl mx-auto flex justify-end gap-0">
          {[t.footer.privacy, t.footer.terms, t.footer.copyright].map(
            (item, i) => (
              <span key={item} className="flex items-center">
                {i > 0 && <span className="mx-6 text-gray-600">|</span>}
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
