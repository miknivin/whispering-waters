import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { SIGNATURE_HIGHLIGHTS } from "@/lib/services-data";
import {
  ArrowRightIcon,
  ClockIcon,
  DropIcon,
  HandIcon,
  PinIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/icons";

const FEATURES = [
  {
    icon: HandIcon,
    title: "Skilled, Caring Hands",
    text: "Every therapist is trained across Ayurvedic, Arabic, Swedish and Chinese modalities.",
  },
  {
    icon: DropIcon,
    title: "Warm Oils & Herbal Rituals",
    text: "Kizhi pouches, hot basalt stones and botanical oils. Nothing rushed, nothing generic.",
  },
  {
    icon: ShieldIcon,
    title: "Private, Discreet Suites",
    text: "Quiet single and couple rooms designed for total unwinding, day or night.",
  },
  {
    icon: ClockIcon,
    title: "Open Late, Every Day",
    text: "10:00 AM to 2:00 AM, seven days a week. Wellness on your schedule.",
  },
];

const GALLERY = [
  {
    src: "/imgs/relaxation-room.jpg",
    alt: "Relaxation treatment room styled with rose petals",
  },
  {
    src: "/imgs/amenities-tray.jpg",
    alt: "Traditional Arabic oil warmers and gold teapots",
  },
  {
    src: "/imgs/couple-suite-01.jpg",
    alt: "Couple's suite with private jacuzzi",
  },
  { src: "/imgs/herbal-oils.jpg", alt: "Herbal infused massage oils" },
  { src: "/imgs/reception-02.jpg", alt: "Whispering Waters Spa reception" },
];

const THERAPISTS = [
  "/therapist/therapist-1.jpg",
  "/therapist/therapist-2.jpg",
  "/therapist/therapist-3.jpg",
  "/therapist/therapist-4.jpg",
  "/therapist/therapist-5.jpg",
  "/therapist/therapist-6.jpg",
  "/therapist/therapist-7.jpg",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-brand-900 sm:min-h-[88vh]">
        <Image
          src="/imgs/main-banner.webp"
          alt="A candlelit couple's suite at Whispering Waters Spa with jacuzzi and rose petals"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900/50 via-brand-900/28 to-brand-900/5" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-900/40 via-brand-900/10 to-transparent" />

        <div className="container-spa relative w-full pb-16 pt-40 sm:pb-20">
          <Reveal>
            <span className="script-text text-shadow-hero text-4xl text-blush sm:text-5xl">
              Whispering Waters Spa
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-shadow-hero mt-4 max-w-3xl text-balance text-[2.4rem] leading-[1.12] text-cream sm:text-[3.4rem]">
              {BUSINESS.tagline}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-shadow-hero mt-5 max-w-xl text-balance text-[1.05rem] leading-relaxed text-cream/90">
              A boutique wellness retreat in the heart of Abu Dhabi, offering
              Ayurvedic, Arabic and Moroccan rituals performed with warm hands
              and warmer intention.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppLink(
                  `Hi ${BUSINESS.name}, I'd like to book an appointment.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <Link href="/services" className="btn btn-ghost-light">
                View Treatments
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={4} className="relative w-full">
          <div className="container-spa mb-20 sm:mb-0">
            <div className="flex flex-col gap-4 rounded-2xl border border-cream/15 bg-brand-900/40 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-start gap-2.5 text-sm text-cream/85">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.address}, {BUSINESS.city}
              </div>
              <div className="hidden h-8 w-px bg-cream/15 sm:block" />
              <div className="flex items-start gap-2.5 text-sm text-cream/85">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.hours}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section className="section-pad pb-10!">
        <div className="container-spa">
          <Reveal>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Healing through touch and nature"
              subtitle="Every ritual at Whispering Waters is built around one belief: the body relaxes fastest when the mind feels safe. That's why every suite, oil and hand movement here is chosen with care."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl border border-brand-200/50 bg-surface p-7 transition-shadow duration-300 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE RITUALS */}
      <section className="section-pad bg-cream-alt">
        <div className="container-spa">
          <Reveal>
            <SectionHeading
              eyebrow="Signature Rituals"
              title="Treatments our guests return for"
              subtitle="A preview of the full menu. Every treatment is available for walk-ins or WhatsApp booking."
            />
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {SIGNATURE_HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  href="/services"
                  className="group block h-full overflow-hidden rounded-2xl bg-surface shadow-soft transition-transform duration-500 hover:-translate-y-1.5"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-900/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-medium text-brand-700">
                      {item.price}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl leading-snug">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                      Explore menu
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex justify-center">
            <Link href="/services" className="btn btn-outline">
              See Full Price List
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* OUR THERAPISTS */}
      <section className="section-pad">
        <div className="container-spa">
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title="Meet Our Therapists"
              subtitle="Every treatment at Whispering Waters is performed by a trained, licensed therapist who takes the same care with every guest."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {THERAPISTS.map((src, i) => (
              <Reveal key={src} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Whispering Waters Spa therapist"
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section className="section-pad">
        <div className="container-spa grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-balance text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              A quiet retreat, built around real touch
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Whispering Waters was opened with a simple idea: a spa should feel
              like a pause, not a performance. Inside our mezzanine-floor rooms
              at The Uptown Hotel and Apartment, therapists trained in
              Ayurvedic, Arabic and Chinese traditions work with warmed oils,
              herbal kizhi pouches and heated stones to bring the body back to
              ease.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              From our reception, framed by the words{" "}
              <em>
                &ldquo;Touch the body. Heal the mind. Calm the spirit,&rdquo;
              </em>{" "}
              to the rose-petalled jacuzzi in our couple&rsquo;s suite, every
              corner was designed to slow you down.
            </p>
            <Link href="/about" className="btn btn-outline mt-7">
              Discover Our Story
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={2} className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl shadow-soft">
                <Image
                  src="/imgs/spa-candles.jpg"
                  alt="Candles, salts and a rolled towel styled for a spa ritual"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden aspect-square w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-lift sm:block">
                <Image
                  src="/imgs/oil-ritual.jpg"
                  alt="Warm oil being poured from a brass kalash for a massage ritual"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="section-pad py-20! bg-brand-900 text-center">
        <div className="container-spa">
          <Reveal>
            <div className="ornament mx-auto max-w-xs">
              <span className="script-text text-2xl text-gold-soft">✦</span>
            </div>
            <p className="script-text mx-auto mt-6 max-w-3xl text-balance text-3xl leading-relaxed text-blush sm:text-4xl">
              &ldquo;Touch the body, heal the mind, calm the spirit.&rdquo;
            </p>
            <p className="eyebrow mt-6 text-gold-soft">
              The Whispering Waters Promise
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad">
        <div className="container-spa">
          <Reveal>
            <SectionHeading
              eyebrow="Inside The Spa"
              title="A glimpse of your visit"
              subtitle="Warm light, quiet rooms and rituals drawn from Ayurveda, Arabia and beyond."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad pt-4!">
        <div className="container-spa">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-blush px-6 py-16 text-center sm:px-16">
              <div className="ornament mx-auto max-w-xs">
                <span className="text-gold">✦</span>
              </div>
              <h2 className="mx-auto mt-5 max-w-xl text-balance text-[2rem] sm:text-[2.5rem]">
                Ready to slow down?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-ink-soft">
                Message us on WhatsApp to check availability. Most appointments
                confirm within minutes.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={buildWhatsAppLink(
                    `Hi ${BUSINESS.name}, I'd like to book an appointment.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Book on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
