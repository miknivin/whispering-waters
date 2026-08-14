export const BUSINESS = {
  name: "Whispering Waters Spa",
  tagline: "Touch the body. Heal the mind. Calm the spirit.",
  subTagline: "Healing through touch and nature.",
  address: "The Uptown Hotel and Apartment, Mezzanine Floor",
  city: "Abu Dhabi, United Arab Emirates",
  hours: "10:00 AM – 2:00 AM, every day",
  whatsappNumber: "971559375537",
  phoneDisplay: "+971 55 937 5537",
  email: "hello@whisperingwaters.ae",
  instagram: "https://www.instagram.com/whispringwatersspa?igsh=MXU5MXlnNHBmNnNpag==",
  facebook: "https://www.facebook.com/profile.php?id=61590682196863",
} as const;

export function buildWhatsAppLink(message?: string) {
  const base = `https://wa.me/${BUSINESS.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
