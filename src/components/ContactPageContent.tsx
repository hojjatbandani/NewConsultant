"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPageContent() {
  const { t } = useLanguage();
  const p = t.contactPage;
  const f = p.form;

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

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
    if (Object.keys(validationErrors).length > 0) {
      // Move the caret to the first problem instead of leaving the user to
      // hunt for the red text.
      const firstKey = ["name", "email", "phone", "subject", "message"].find(
        (k) => validationErrors[k],
      );
      if (firstKey) {
        form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      }
      return;
    }

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

  function reset() {
    setStatus("idle");
    setErrors({});
    // Let the new form mount, then put focus on its first field.
    requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLInputElement>('[name="name"]')?.focus();
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
      {/* Header */}
      <header className="max-w-3xl mb-10 lg:mb-12">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 mb-4">
          <span className="w-6 h-px bg-accent-300" aria-hidden />
          {p.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
          {p.heading}
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
          {p.lead}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Contact info */}
        <aside className="lg:col-span-2 rounded-3xl bg-gray-900 p-7 sm:p-8 text-white h-fit">
          <h2 className="text-xl font-bold mb-6">{p.infoTitle}</h2>
          <ul className="flex flex-col gap-5">
            <InfoRow label={p.phoneLabel}>
              <a href="tel:+96894706981" dir="ltr" className="block py-1 hover:text-accent-300 transition-colors">
                +968 9470 6981
              </a>
              <a href="tel:+96897676022" dir="ltr" className="block py-1 hover:text-accent-300 transition-colors">
                +968 9767 6022
              </a>
            </InfoRow>
            <InfoRow label={p.emailLabel}>
              <a href="mailto:Mohammed@t4id.com" dir="ltr" className="block py-1 break-all hover:text-accent-300 transition-colors">
                Mohammed@t4id.com
              </a>
            </InfoRow>
            <InfoRow label={p.hoursLabel}>
              {/* Was text-gray-300 on gray-900 — fine — but the label above it
                  was gray-400 on gray-900 at 12px. Both bumped a step. */}
              <span className="text-gray-300">{p.hours}</span>
            </InfoRow>
          </ul>
        </aside>

        {/* Form */}
        <div className="lg:col-span-3 rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{p.formTitle}</h2>

          {status === "success" ? (
            // role="status" so the confirmation is announced, not just shown.
            <div role="status" className="rounded-2xl bg-green-50 border border-green-200 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-1">
                {f.successTitle}
              </h3>
              <p className="text-green-800 text-sm leading-relaxed mb-5">
                {f.successText}
              </p>
              {/* Previously the form was replaced outright, so a second
                  enquiry meant reloading the page. */}
              <button
                type="button"
                onClick={reset}
                className="btn btn-soft pe-6"
              >
                {f.sendAnother}
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label={f.name}
                  name="name"
                  autoComplete="name"
                  placeholder={f.namePlaceholder}
                  error={errors.name}
                  required
                />
                <Field
                  label={f.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder={f.emailPlaceholder}
                  error={errors.email}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label={f.phone}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder={f.phonePlaceholder}
                  error={errors.phone}
                />
                <Field
                  label={f.subject}
                  name="subject"
                  placeholder={f.subjectPlaceholder}
                  error={errors.subject}
                  required
                />
              </div>

              <MessageField
                label={f.message}
                placeholder={f.messagePlaceholder}
                error={errors.message}
              />

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl bg-rose-50 border border-rose-200 p-4"
                >
                  <p className="text-sm font-semibold text-rose-800">
                    {f.errorTitle}
                  </p>
                  <p className="text-sm text-rose-700">{f.errorText}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary self-start pe-6 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" && <Spinner />}
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
      <div className="text-base">{children}</div>
    </li>
  );
}

const inputClass =
  "rounded-xl border px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
}) {
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}{" "}
        {required && (
          <span className="text-accent-600" aria-hidden>
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        placeholder={placeholder}
        // The error text used to be visually adjacent but programmatically
        // unlinked, so assistive tech never tied it to the field.
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${inputClass} ${
          error ? "border-rose-400 bg-rose-50/40" : "border-gray-200"
        }`}
      />
      {error && (
        <span id={errorId} className="text-xs text-rose-700">
          {error}
        </span>
      )}
    </div>
  );
}

function MessageField({
  label,
  placeholder,
  error,
}: {
  label: string;
  placeholder?: string;
  error?: string;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="message" className="text-sm font-medium text-gray-700">
        {label}{" "}
        <span className="text-accent-600" aria-hidden>
          *
        </span>
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${inputClass} resize-y ${
          error ? "border-rose-400 bg-rose-50/40" : "border-gray-200"
        }`}
      />
      {error && (
        <span id={errorId} className="text-xs text-rose-700">
          {error}
        </span>
      )}
    </div>
  );
}

/* Sending state used to be text-only; a moving indicator makes it clear the
   request is in flight rather than stuck. */
function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
