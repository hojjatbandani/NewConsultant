"use client";

import { useEffect, useRef, useState } from "react";
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

const sectionIds = navLinks
  .filter((l) => l.kind === "section")
  .map((l) => l.target);

function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Where a section link should point, given the page we are currently on.
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
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // ── Scroll spy ──
  // The active pill used to update only on click, so scrolling by hand (or
  // landing on a `/#section` URL) left the wrong item highlighted.
  useEffect(() => {
    if (!onHome) return;
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      // A band across the upper-middle of the viewport: whichever section owns
      // that band is the one the reader is actually looking at.
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  // The header only grows a border + blur once the page has moved, so it stays
  // flat and quiet at the top of the document.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Mobile menu: escape to close, click-outside to close, scroll lock ──
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  // Close the menu whenever we navigate to a different page. Adjusting state
  // during render (rather than in an effect) is React's recommended pattern
  // for "reset some state when a prop changes" and avoids a second paint.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

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
    <>
      {/* Keyboard users can jump past the nav instead of tabbing through six
          links on every page. Visually hidden until focused. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[70] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t.nav.skipToContent}
      </a>

      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full px-5 sm:px-8 py-3 transition-colors duration-200 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-gray-200/70 shadow-sm"
            : "bg-white border-b border-transparent"
        }`}
      >
        <nav
          aria-label={t.nav.primary}
          className="max-w-7xl mx-auto flex items-center justify-between gap-3"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (onHome) {
                e.preventDefault();
                go("home");
              }
            }}
            className="flex items-center select-none shrink-0 rounded-lg"
            aria-label="Horizons Statistical Consulting"
          >
            <Image
              src="/images/logo.png"
              alt="Horizons Statistical Consulting"
              width={800}
              height={317}
              // `priority` is deprecated in Next 16 in favour of `preload`.
              preload
              className="h-9 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-50 rounded-full px-2 py-1.5 border border-gray-100">
            {navLinks.map((link) => {
              const on = isActive(link);
              const className = `relative px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                on
                  ? "bg-radial from-brand-400 to-brand-600 text-white font-medium shadow-md"
                  : "text-gray-600 hover:text-brand-700 hover:bg-white"
              }`;
              return link.kind === "route" ? (
                <Link
                  key={link.key}
                  href={link.target}
                  aria-current={on ? "page" : undefined}
                  className={className}
                >
                  {t.nav[link.key]}
                </Link>
              ) : (
                <Link
                  key={link.key}
                  href={sectionHref(link.target, pathname)}
                  onClick={(e) => onSectionClick(e, link.target)}
                  aria-current={on ? "location" : undefined}
                  className={className}
                >
                  {t.nav[link.key]}
                </Link>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language toggle (EN / AR) */}
            <div
              role="group"
              aria-label={t.nav.language}
              className="flex items-center gap-0.5 rounded-full bg-gray-50 border border-gray-100 p-1"
            >
              <span className="hidden sm:inline ps-2 pe-0.5 text-gray-500" aria-hidden>
                <GlobeIcon />
              </span>
              {(["en", "ar"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  // Was px-2.5/py-1 (~24px tall). min-w/h widens the tap target
                  // without inflating the label.
                  className={`min-w-9 min-h-8 px-2 rounded-full text-xs font-semibold uppercase transition-colors duration-200 ${
                    lang === code
                      ? "bg-radial from-brand-400 to-brand-600 text-white shadow"
                      : "text-gray-600 hover:text-brand-700 hover:bg-white"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* CTA Button (desktop) */}
            <Link
              href="/contact"
              className="btn btn-soft hidden lg:inline-flex group"
            >
              {t.nav.freeConsultation}
              <span className="btn-chip border border-gray-300 text-gray-600 group-hover:border-gray-400 transition-colors">
                <ArrowIcon />
              </span>
            </Link>

            {/* Hamburger (mobile / tablet) */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile / tablet menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute inset-x-0 top-full px-5 sm:px-8"
          >
            <div className="max-w-7xl mx-auto mt-2 rounded-2xl border border-gray-100 bg-white shadow-xl p-3 flex flex-col gap-1 max-h-[calc(100dvh-6rem)] overflow-y-auto">
              {navLinks.map((link) => {
                const on = isActive(link);
                const className = `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  on
                    ? "bg-radial from-brand-400 to-brand-600 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`;
                return link.kind === "route" ? (
                  <Link
                    key={link.key}
                    href={link.target}
                    onClick={() => setMenuOpen(false)}
                    aria-current={on ? "page" : undefined}
                    className={className}
                  >
                    {t.nav[link.key]}
                  </Link>
                ) : (
                  <Link
                    key={link.key}
                    href={sectionHref(link.target, pathname)}
                    onClick={(e) => onSectionClick(e, link.target)}
                    aria-current={on ? "location" : undefined}
                    className={className}
                  >
                    {t.nav[link.key]}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-soft mt-2 pe-4"
              >
                {t.nav.freeConsultation}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
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
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
