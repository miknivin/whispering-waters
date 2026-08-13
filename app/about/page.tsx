import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { ArrowRightIcon, LeafIcon, SparkleIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Whispering Waters Spa in Abu Dhabi, a boutique wellness retreat blending Ayurvedic, Arabic, Chinese and Moroccan healing traditions.",
};

const TRADITIONS = [
  {
    title: "Ayurvedic Ritual",
    text: "Kizhi herbal pouches and warm oils, drawn from centuries-old Indian healing.",
  },
  {
    title: "Arabic Hospitality",
    text: "Gold-poured oils and warm mint tea, the welcome our guests remember.",
  },
  {
    title: "Chinese Technique",
    text: "Cupping and pressure-point work to release what modern life holds onto.",
  },
  {
    title: "Moroccan Indulgence",
    text: "Rose-petalled baths and steam, our most requested couple's ritual.",
  },
];

const VALUES = [
  "Every therapist is trained, licensed and continuously mentored.",
  "Products are herbal-first: warmed oils, natural scrubs, real rose petals.",
  "Rooms are private and quiet; nothing here feels rushed.",
  "We treat every guest with the same care, whether solo, a couple, or a first-timer.",
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-brand-900">
        <Image
          src="/imgs/about-banner.webp"
          alt="A guest receiving a candlelit head massage at Whispering Waters Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900/50 via-brand-900/28 to-brand-900/6" />
        <div className="container-spa relative pb-16 pt-32">
          <Reveal>
            <span className="eyebrow text-shadow-hero text-gold-soft">About Whispering Waters</span>
            <h1 className="text-shadow-hero mt-3 max-w-2xl text-balance text-[2.4rem] leading-[1.15] text-cream sm:text-[3rem]">
              A retreat built on real touch
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad">
        <div className="container-spa grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-4xl shadow-soft lg:max-w-full">
              <Image
                src="/imgs/reception-01.jpg"
                alt="Whispering Waters Spa reception, framed by the words Touch the body, Heal the mind, Calm the spirit"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={2}>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-balance text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Whispering Waters began with a single question
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              What would a spa feel like if it never rushed you? That question shaped every
              decision behind our mezzanine-floor rooms at The Uptown Hotel and Apartment,
              from the hand-poured brass oil warmers at our reception to the private
              couple&rsquo;s suite with its own jacuzzi.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We brought together therapists trained across Ayurvedic, Arabic, Chinese and
              Moroccan traditions, because no single technique holds every answer. Some days call
              for the rhythmic press of a herbal kizhi pouch. Others, the heat of basalt stones,
              or the quiet indulgence of a rose-petal bath. Whatever the day calls for, it&rsquo;s
              here.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Our walls say it plainly:{" "}
              <span className="script-text text-2xl text-brand-600">
                &ldquo;healing through touch and nature.&rdquo;
              </span>{" "}
              It&rsquo;s not a slogan. It&rsquo;s how every treatment here is built.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRADITIONS */}
      <section className="section-pad bg-cream-alt">
        <div className="container-spa">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Four traditions, one philosophy"
              subtitle="Rather than choose a single school of healing, we trained our hands in several, so your treatment can be built around you, not a fixed menu."
            />
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {TRADITIONS.map((t, i) => (
              <Reveal key={t.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl border border-brand-200/50 bg-surface p-7">
                  <SparkleIcon className="h-5 w-5 text-gold" />
                  <h3 className="mt-5 text-xl">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SPLIT */}
      <section className="section-pad">
        <div className="container-spa grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <span className="eyebrow">What We Promise</span>
            <h2 className="mt-3 text-balance text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Care you can feel from the first minute
            </h2>
            <ul className="mt-7 space-y-4">
              {VALUES.map((v) => (
                <li key={v} className="flex gap-3 text-ink-soft">
                  <LeafIcon className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                  <span className="leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn btn-outline mt-8">
              View Our Treatments
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={2} className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/imgs/candle-ritual.jpg"
                alt="Chakra candle ritual display at Whispering Waters Spa"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square translate-y-8 overflow-hidden rounded-2xl">
              <Image
                src="/imgs/herbal-oils.jpg"
                alt="Herbal infused massage oils"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/imgs/kizhi-massage-03.jpg"
                alt="Therapist performing a traditional kizhi herbal pouch massage"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square translate-y-8 overflow-hidden rounded-2xl">
              <Image
                src="/imgs/amenities-tray.jpg"
                alt="Traditional Arabic oil warmers and gold teapots"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad pt-4!">
        <div className="container-spa">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-brand-900 px-6 py-16 text-center sm:px-16">
              <p className="script-text text-3xl text-blush sm:text-4xl">
                Come as you are. Leave lighter.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={buildWhatsAppLink(`Hi ${BUSINESS.name}, I'd like to book an appointment.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Book on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-ghost-light">
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
