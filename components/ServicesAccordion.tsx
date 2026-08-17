"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { SERVICE_CATEGORIES } from "@/lib/services-data";
import { ChevronDownIcon, ClockIcon, WhatsAppIcon } from "./icons";

export default function ServicesAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(SERVICE_CATEGORIES[0]?.slug ?? null);

  return (
    <div className="space-y-5">
      {SERVICE_CATEGORIES.map((category, i) => {
        const isOpen = openSlug === category.slug;

        return (
          <Reveal key={category.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div
              id={category.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-brand-200/60 bg-surface"
            >
              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? null : category.slug)}
                aria-expanded={isOpen}
                aria-controls={`${category.slug}-panel`}
                className="flex w-full items-center gap-4 p-5 text-left sm:gap-6 sm:p-6"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:h-20 sm:w-20">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl leading-snug sm:text-2xl">{category.title}</h2>
                  <p className="mt-1 text-sm text-ink-soft">
                    {category.items.length} treatments
                  </p>
                </div>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`${category.slug}-panel`}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-brand-200/60 px-5 pb-6 pt-5 sm:px-6 sm:pb-8">
                    <p className="leading-relaxed text-ink-soft">{category.description}</p>

                    <ul className="mt-6 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={`${item.name}-${idx}`}
                          className="flex items-end justify-between gap-3 border-b border-dashed border-brand-200/70 py-3 text-[0.98rem]"
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
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
