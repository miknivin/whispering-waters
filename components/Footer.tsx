import Link from "next/link";
import Image from "next/image";
import { BUSINESS, NAV_LINKS, buildWhatsAppLink } from "@/lib/constants";
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
} from "./icons";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-cream/90">
      <div className="container-spa section-pad py-14!">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Whispering Waters Spa"
              width={200}
              height={160}
              className="h-18 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              {BUSINESS.subTagline} A quiet retreat in the heart of Abu Dhabi,
              blending Ayurvedic ritual, Arabian hospitality and modern wellness
              under one roof.
            </p>
            <a
              href={buildWhatsAppLink(
                `Hi ${BUSINESS.name}, I'd like to book an appointment.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat with us
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-gold-soft">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-soft">Visit</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {BUSINESS.address}, {BUSINESS.city}
                </span>
              </li>
              <li className="flex gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{BUSINESS.hours}</span>
              </li>
              <li className="flex gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{BUSINESS.phoneDisplay}</span>
              </li>
              <li className="flex gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{BUSINESS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/55 transition-colors hover:text-cream"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-cream/55 transition-colors hover:text-cream"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
