"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";

// `section` links point to a section on the home page (scroll / hash nav);
// `route` links point to a dedicated page.
const navLinks = [
  { key: "home", kind: "section", target: "home" },
  { key: "about", kind: "route", target: "/about" },
  { key: "services", kind: "section", target: "services" },
  { key: "research", kind: "section", target: "research" },
  { key: "partners", kind: "section", target: "partners" },
  { key: "contact", kind: "route", target: "/contact" },
] as const;

function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Where a section link should point, given the page we're currently on.
function sectionHref(target: string, pathname: string) {
  if (target === "home") return pathname === "/" ? "#home" : "/";
  return pathname === "/" ? `#${target}` : `/#${target}`;
}

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  function go(id: string) {
    setActive(id);
    setMenuOpen(false);
    scrollToSection(id);
  }

  function isActive(link: (typeof navLinks)[number]) {
    if (link.kind === "route") return pathname === link.target;
    return onHome && active === link.target;
  }

  // Click handler for section links: scroll in place when already on home,
  // otherwise let the Link navigate to `/#id`.
  function onSectionClick(e: React.MouseEvent, target: string) {
    if (onHome) {
      e.preventDefault();
      go(target);
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <header className="relative w-full bg-white px-5 sm:px-8 py-4 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              go("home");
            }
          }}
          className="flex items-center select-none shrink-0"
          aria-label="Horizons Statistical Consulting"
        >
          <Image
            src="/images/logo.png"
            alt="Horizons Statistical Consulting"
            width={800}
            height={317}
            priority
            className="h-9 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1 bg-gray-50 rounded-full px-2 py-1.5 shadow-sm border border-gray-100">
          {navLinks.map((link) => {
            const activeClasses = isActive(link)
              ? "bg-radial from-[#3376C5] to-[#1355A3] text-white shadow-md"
              : "text-gray-600 hover:text-blue-900 hover:bg-white";
            const className = `relative px-4 py-1.5 rounded-full text-sm font-normal transition-all duration-200 ${activeClasses}`;
            return link.kind === "route" ? (
              <Link
                key={link.key}
                href={link.target}
                onClick={() => setMenuOpen(false)}
                className={className}
              >
                {t.nav[link.key]}
              </Link>
            ) : (
              <Link
                key={link.key}
                href={sectionHref(link.target, pathname)}
                onClick={(e) => onSectionClick(e, link.target)}
                className={className}
              >
                {t.nav[link.key]}
                {isActive(link) && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language toggle (EN / AR) */}
          <div className="flex items-center gap-1 rounded-full bg-gray-50 border border-gray-100 p-0.5 shadow-sm">
            <span className="hidden sm:inline pl-2 pr-0.5 text-gray-400" aria-hidden>
              <GlobeIcon />
            </span>
            {(["en", "ar"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium uppercase transition-all duration-200 ${
                  lang === code
                    ? "bg-radial from-[#3376C5] to-[#1355A3] text-white shadow"
                    : "text-gray-500 hover:text-blue-900"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          {/* CTA Button (desktop) */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="hidden lg:flex items-center gap-2.5 pl-4 pr-2 py-2 rounded-full bg-rose-50 border border-rose-100 text-gray-800 font-semibold text-sm hover:bg-rose-100 transition-colors group"
          >
            {t.nav.freeConsultation}
            <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 group-hover:border-gray-400 transition-colors">
              <ArrowIcon />
            </span>
          </Link>

          {/* Hamburger (mobile / tablet) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      {menuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full px-5 sm:px-8">
          <div className="max-w-7xl mx-auto mt-2 rounded-2xl border border-gray-100 bg-white shadow-xl p-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const className = `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(link)
                  ? "bg-radial from-[#3376C5] to-[#1355A3] text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`;
              return link.kind === "route" ? (
                <Link
                  key={link.key}
                  href={link.target}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                >
                  {t.nav[link.key]}
                </Link>
              ) : (
                <Link
                  key={link.key}
                  href={sectionHref(link.target, pathname)}
                  onClick={(e) => onSectionClick(e, link.target)}
                  className={className}
                >
                  {t.nav[link.key]}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-rose-50 border border-rose-100 text-gray-800 font-semibold text-sm hover:bg-rose-100 transition-colors"
            >
              {t.nav.freeConsultation}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      )}
    </header>
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
    >
      <path d="M2 7h10M7 2l5 5-5 5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
