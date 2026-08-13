import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { SERVICE_CATEGORIES } from "@/lib/services-data";
import { ClockIcon, WhatsAppIcon } from "@/components/icons";

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
            <span className="eyebrow text-shadow-hero text-gold-soft">Menu &amp; Pricing</span>
            <h1 className="text-shadow-hero mt-3 max-w-2xl text-balance text-[2.4rem] leading-[1.15] text-cream sm:text-[3rem]">
              Treatments &amp; Price List
            </h1>
            <p className="text-shadow-hero mt-4 max-w-lg text-balance leading-relaxed text-cream/90">
              All prices in AED. Message us on WhatsApp with the treatment you&rsquo;d like and
              we&rsquo;ll confirm the next available slot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      {SERVICE_CATEGORIES.map((category, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={category.slug}
            id={category.slug}
            className={`section-pad scroll-mt-24 ${index % 2 === 1 ? "bg-cream-alt" : ""}`}
          >
            <div className="container-spa">
              <div
                className={`flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Reveal className="lg:sticky lg:top-28 lg:w-[38%] lg:shrink-0">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1.75rem] shadow-soft lg:aspect-3/4">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(min-width: 1024px) 35vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <h2 className="mt-6 text-[1.9rem] leading-tight sm:text-[2.2rem]">
                    {category.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{category.description}</p>
                  <a
                    href={buildWhatsAppLink(
                      `Hi ${BUSINESS.name}, I'd like to book a treatment from your "${category.title}" menu.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-6"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Book This Category
                  </a>
                </Reveal>

                <Reveal delay={2} className="flex-1">
                  <ul className="columns-1 gap-x-12 sm:columns-2">
                    {category.items.map((item, i) => (
                      <li
                        key={`${item.name}-${i}`}
                        className="flex break-inside-avoid items-end justify-between gap-3 border-b border-dashed border-brand-200/70 py-3 text-[0.98rem]"
                      >
                        <span className="text-ink">
                          {item.name}
                          {item.duration && (
                            <span className="ml-1.5 inline-flex items-center gap-1 text-xs text-ink-soft">
                              <ClockIcon className="h-3 w-3" />
                              {item.duration}
                            </span>
                          )}
                          {item.note && (
                            <span className="block text-xs italic text-ink-soft/80">
                              {item.note}
                            </span>
                          )}
                        </span>
                        <span className="whitespace-nowrap font-medium text-brand-700">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-pad pt-4!">
        <div className="container-spa">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-blush px-6 py-16 text-center sm:px-16">
              <h2 className="mx-auto max-w-xl text-balance text-[2rem] sm:text-[2.5rem]">
                Not sure what to choose?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-ink-soft">
                Tell us how you&rsquo;re feeling and we&rsquo;ll recommend the right ritual for
                you.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={buildWhatsAppLink(
                    `Hi ${BUSINESS.name}, I'm not sure which treatment to choose. Could you help me pick one?`
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
