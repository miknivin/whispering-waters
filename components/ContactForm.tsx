"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { initialContactState } from "@/app/contact/types";
import { SERVICE_CATEGORIES } from "@/lib/services-data";
import { CheckIcon, WhatsAppIcon } from "./icons";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status, state.message]);

  if (state.status === "success") {
    return (
      <div className="card-surface flex flex-col items-center gap-4 px-8 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-brand-700">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl">Message received</h3>
        <p className="max-w-sm leading-relaxed text-ink-soft">{state.message}</p>
        <a
          href={buildWhatsAppLink(`Hi ${BUSINESS.name}, I just sent an enquiry through your website.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Message us on WhatsApp too
        </a>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="card-surface space-y-5 p-7 sm:p-9">
      {/* Honeypot — hidden from real visitors, catches simple bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Full Name <span className="text-brand-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-brand-200 bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-brand-500 focus:bg-surface"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone / WhatsApp <span className="text-brand-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+971 5X XXX XXXX"
            className="w-full rounded-xl border border-brand-200 bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-brand-500 focus:bg-surface"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-ink-soft/60">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            className="w-full rounded-xl border border-brand-200 bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-brand-500 focus:bg-surface"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
            Treatment of Interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-xl border border-brand-200 bg-cream/60 px-4 py-3 text-ink outline-none transition-colors focus:border-brand-500 focus:bg-surface"
          >
            <option value="">Not sure yet</option>
            {SERVICE_CATEGORIES.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message <span className="text-ink-soft/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Preferred date/time, or anything we should know before your visit"
          className="w-full resize-none rounded-xl border border-brand-200 bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-brand-500 focus:bg-surface"
        />
      </div>

      {state.status === "error" && (
        <p className="rounded-xl bg-blush px-4 py-3 text-sm text-brand-700" role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary w-full disabled:opacity-60">
        {pending ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="text-center text-xs text-ink-soft/70">
        We&rsquo;ll only use these details to respond to your enquiry.
      </p>
    </form>
  );
}
