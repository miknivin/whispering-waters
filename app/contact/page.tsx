import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book your visit to Whispering Waters Spa, Abu Dhabi. Message us on WhatsApp or send an enquiry. We're open 10:00 AM to 2:00 AM, every day.",
};

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUSINESS.address}, ${BUSINESS.city}`
)}`;

export default function ContactPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-brand-900">
        <Image
          src="/imgs/relaxation-room.jpg"
          alt="A relaxation treatment room at Whispering Waters Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900/50 via-brand-900/28 to-brand-900/6" />
        <div className="container-spa relative pb-14 pt-32">
          <Reveal>
            <span className="eyebrow text-shadow-hero text-gold-soft">Get In Touch</span>
            <h1 className="text-shadow-hero mt-3 max-w-xl text-balance text-[2.4rem] leading-[1.15] text-cream sm:text-[3rem]">
              Let&rsquo;s Plan Your Visit
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-spa grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* INFO COLUMN */}
          <Reveal>
            <span className="eyebrow">Reach Us Directly</span>
            <h2 className="mt-3 text-balance text-[1.9rem] leading-tight sm:text-[2.2rem]">
              Fastest replies come through WhatsApp
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              For same-day appointments, message us directly. For general enquiries, the form
              works just as well, and we reply within one business day.
            </p>

            <a
              href={buildWhatsAppLink(`Hi ${BUSINESS.name}, I'd like to book an appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>

            <ul className="mt-10 space-y-6 border-t border-brand-200/60 pt-8">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-brand-700">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-ink">Location</p>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed text-ink-soft underline decoration-brand-200 underline-offset-4 hover:text-brand-700"
                  >
                    {BUSINESS.address}, {BUSINESS.city}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-brand-700">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-ink">Hours</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{BUSINESS.hours}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-brand-700">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-ink">Phone</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{BUSINESS.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-brand-700">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-ink">Email</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{BUSINESS.email}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* FORM COLUMN */}
          <Reveal delay={2}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
