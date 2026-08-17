import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ServicesAccordion from "@/components/ServicesAccordion";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services & Price List",
  description:
    "Full treatment menu and price list for Whispering Waters Spa, Abu Dhabi: relaxing, Ayurvedic and Arabic massages, hot stone, cupping, Moroccan bath, jacuzzi, facials and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-brand-900">
        <Image
          src="/imgs/hot-stone-02.jpg"
          alt="Hot stone massage treatment at Whispering Waters Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900/50 via-brand-900/28 to-brand-900/6" />
        <div className="container-spa relative pb-14 pt-32">
          <Reveal>
            <span className="eyebrow text-shadow-hero text-gold-soft">
              Menu &amp; Pricing
            </span>
            <h1 className="text-shadow-hero mt-3 max-w-2xl text-balance text-[2.4rem] leading-[1.15] text-cream sm:text-[3rem]">
              Treatments &amp; Price List
            </h1>
            <p className="text-shadow-hero mt-4 max-w-lg text-balance leading-relaxed text-cream/90">
              All prices in AED. Tap a category to see the full menu, or message
              us on WhatsApp with the treatment you&rsquo;d like and we&rsquo;ll
              confirm the next available slot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-pad">
        <div className="container-spa max-w-6xl">
          <ServicesAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad pt-4!">
        <div className="container-spa">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-blush px-6 py-16 text-center sm:px-16">
              <h2 className="mx-auto max-w-xl text-balance text-[2rem] sm:text-[2.5rem]">
                Not sure what to choose?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-ink-soft">
                Tell us how you&rsquo;re feeling and we&rsquo;ll recommend the
                right ritual for you.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={buildWhatsAppLink(
                    `Hi ${BUSINESS.name}, I'm not sure which treatment to choose. Could you help me pick one?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
