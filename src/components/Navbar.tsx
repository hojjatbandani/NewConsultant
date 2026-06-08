"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const navLinks = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "services", id: "services" },
  { key: "research", id: "research" },
  { key: "partners", id: "partners" },
  { key: "contact", id: "contact" },
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

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  function go(id: string) {
    setActive(id);
    setMenuOpen(false);
    scrollToSection(id);
  }

  return (
    <header className="relative w-full bg-white px-5 sm:px-8 py-4 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex items-center gap-2 select-none shrink-0"
        >
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <circle cx="16" cy="16" r="14" stroke="#1e3a8a" strokeWidth="2" />
              <circle cx="16" cy="16" r="8" stroke="#1e3a8a" strokeWidth="2" />
              <circle cx="16" cy="16" r="3" fill="#1e3a8a" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-blue-900 tracking-tight">
            Horizon
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1 bg-gray-50 rounded-full px-2 py-1.5 shadow-sm border border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(link.id);
              }}
              className={`relative px-4 py-1.5 rounded-full text-sm font-normal transition-all duration-200 ${
                active === link.id
                  ? "bg-radial from-[#3376C5] to-[#1355A3] text-white shadow-md"
                  : "text-gray-600 hover:text-blue-900 hover:bg-white"
              }`}
            >
              {t.nav[link.key]}
              {active === link.id && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400" />
              )}
            </a>
          ))}
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
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="hidden lg:flex items-center gap-2.5 pl-4 pr-2 py-2 rounded-full bg-rose-50 border border-rose-100 text-gray-800 font-semibold text-sm hover:bg-rose-100 transition-colors group"
          >
            {t.nav.freeConsultation}
            <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 group-hover:border-gray-400 transition-colors">
              <ArrowIcon />
            </span>
          </a>

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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.id);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-radial from-[#3376C5] to-[#1355A3] text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
              className="mt-2 flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-rose-50 border border-rose-100 text-gray-800 font-semibold text-sm hover:bg-rose-100 transition-colors"
            >
              {t.nav.freeConsultation}
              <ArrowIcon />
            </a>
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
