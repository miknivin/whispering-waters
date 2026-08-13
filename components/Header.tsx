"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { MenuIcon, XIcon, WhatsAppIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu on navigation. Adjusting state during render (rather
  // than in an effect) avoids an extra commit — see "Adjusting state when
  // props change" in the React docs.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-brand-200/70 bg-cream/95 shadow-[0_10px_30px_-22px_rgba(64,39,25,0.45)] backdrop-blur-md"
          : "border-transparent bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-spa flex items-center justify-between py-3">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Whispering Waters Spa"
            width={200}
            height={160}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 text-[0.95rem] tracking-wide transition-colors ${
                  active ? "text-brand-700" : "text-ink-soft hover:text-brand-700"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-brand-600 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={buildWhatsAppLink(`Hi ${BUSINESS.name}, I'd like to book an appointment.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-brand-700 md:hidden"
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-200/60 bg-cream md:hidden">
          <nav className="container-spa flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 text-base ${active ? "font-medium text-brand-700" : "text-ink-soft"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={buildWhatsAppLink(`Hi ${BUSINESS.name}, I'd like to book an appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3 justify-center"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
