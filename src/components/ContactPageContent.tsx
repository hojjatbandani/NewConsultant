"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPageContent() {
  const { t } = useLanguage();
  const p = t.contactPage;
  const f = p.form;

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: Record<string, string>) {
    const next: Record<string, string> = {};
    if (!data.name.trim()) next.name = f.required;
    if (!data.email.trim()) next.email = f.required;
    else if (!EMAIL_RE.test(data.email.trim())) next.email = f.invalidEmail;
    if (!data.subject.trim()) next.subject = f.required;
    if (!data.message.trim()) next.message = f.required;
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 lg:py-16">
      {/* Header */}
      <header className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-rose-500 mb-4">
          <span className="w-6 h-px bg-rose-300" />
          {p.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          {p.heading}
        </h1>
        <p className="mt-5 text-xl text-gray-600 leading-relaxed">{p.lead}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <aside className="lg:col-span-2 rounded-3xl bg-gray-900 p-8 text-white">
          <h2 className="text-xl font-bold mb-6">{p.infoTitle}</h2>
          <ul className="flex flex-col gap-5">
            <InfoRow label={p.phoneLabel}>
              <a href="tel:+96894706981" className="block hover:text-rose-300 transition-colors">+968 9470 6981</a>
              <a href="tel:+96897676022" className="block hover:text-rose-300 transition-colors">+968 9767 6022</a>
            </InfoRow>
            <InfoRow label={p.emailLabel}>
              <a href="mailto:Mohammed@t4id.com" className="hover:text-rose-300 transition-colors">Mohammed@t4id.com</a>
            </InfoRow>
            <InfoRow label={p.hoursLabel}>
              <span className="text-gray-300">{p.hours}</span>
            </InfoRow>
          </ul>
        </aside>

        {/* Form */}
        <div className="lg:col-span-3 rounded-3xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{p.formTitle}</h2>

          {status === "success" ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-6">
              <h3 className="text-lg font-bold text-green-800 mb-1">{f.successTitle}</h3>
              <p className="text-green-700 text-sm leading-relaxed">{f.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label={f.name} name="name" placeholder={f.namePlaceholder} error={errors.name} required />
                <Field label={f.email} name="email" type="email" placeholder={f.emailPlaceholder} error={errors.email} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label={f.phone} name="phone" placeholder={f.phonePlaceholder} error={errors.phone} />
                <Field label={f.subject} name="subject" placeholder={f.subjectPlaceholder} error={errors.subject} required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  {f.message} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={f.messagePlaceholder}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-violet-500 focus:ring-2 focus:ring-violet-100 resize-y"
                />
                {errors.message && <span className="text-xs text-rose-500">{errors.message}</span>}
              </div>

              {status === "error" && (
                <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
                  <p className="text-sm font-semibold text-rose-700">{f.errorTitle}</p>
                  <p className="text-sm text-rose-600">{f.errorText}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-radial from-[#3376C5] to-[#1355A3] text-white font-semibold text-sm shadow-md hover:opacity-95 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? f.sending : f.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li>
      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{label}</p>
      <div className="text-base font-light">{children}</div>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
      />
      {error && <span className="text-xs text-rose-500">{error}</span>}
    </div>
  );
}
