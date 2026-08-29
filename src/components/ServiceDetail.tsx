"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getService, services } from "@/data/services";

export default function ServiceDetail({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const service = getService(slug);
  if (!service) return null;

  const c = service[lang];

  // Pick three other services to suggest at the bottom.
  const others = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({ slug: s.slug, title: s[lang].title }));

  return (
    <article className="max-w-5xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-brand-700 transition-colors">
          {t.serviceDetail.breadcrumbHome}
        </Link>
        <span aria-hidden>/</span>
        <Link href="/#research" className="hover:text-brand-700 transition-colors">
          {t.serviceDetail.breadcrumbServices}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-gray-900 font-medium" aria-current="page">{c.title}</span>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <span className="inline-block text-sm font-semibold tabular-nums text-brand-600 mb-3">
          {String(service.num).padStart(2, "0")}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
          {c.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl">
          {c.tagline}
        </p>
      </header>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t.serviceDetail.overview}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-5">{c.intro}</p>
        {c.paragraphs.map((p, i) => (
          <p key={i} className="text-base text-gray-600 leading-relaxed mb-4">
            {p}
          </p>
        ))}
      </section>

      {/* Capabilities */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          {t.serviceDetail.capabilities}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.capabilities.map((cap, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-4"
            >
              <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center" aria-hidden>
                <CheckIcon />
              </span>
              <span className="text-sm text-gray-700 leading-relaxed">{cap}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-gray-900 px-8 py-10 sm:px-12 sm:py-12 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {t.serviceDetail.ctaTitle}
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl mb-6">
          {t.serviceDetail.ctaText}
        </p>
        <Link
          href="/contact"
          className="btn btn-soft group"
        >
          {t.serviceDetail.ctaButton}
          <span className="btn-chip border border-gray-300 text-gray-700">
            <ArrowIcon />
          </span>
        </Link>
      </section>

      {/* Other services */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">
            {t.serviceDetail.otherServices}
          </h2>
          <Link
            href="/#research"
            className="text-sm font-medium text-brand-600 hover:text-brand-800 transition-colors"
          >
            {t.serviceDetail.backToServices}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:bg-gray-900 hover:-translate-y-1"
            >
              <span className="text-base font-semibold text-gray-900 group-hover:text-white transition-colors">
                {o.title}
              </span>
              <span className="mt-3 flex items-center gap-1.5 text-sm text-brand-600 group-hover:text-accent-300 transition-colors">
                {t.serviceDetail.ctaButton}
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 7.5 6 11l5.5-7" />
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
    >
      <path d="M2 7h10M7 2l5 5-5 5" />
    </svg>
  );
}
