export type ServiceItem = {
  name: string;
  duration?: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "relaxing-massage",
    title: "Relaxing Massage",
    description:
      "A gentle, full-body massage in warm oil to release tension and quiet the mind. The softest way to begin your journey with us.",
    image: "/imgs/oil-ritual.jpg",
    items: [
      { name: "Relaxing Massage", duration: "45 minutes", price: "180 AED" },
      { name: "Relaxing Massage", duration: "60 minutes", price: "199 AED" },
      { name: "Relaxing Massage", duration: "90 minutes", price: "259 AED" },
      { name: "Relaxing Massage", duration: "120 minutes", price: "359 AED" },
    ],
  },
  {
    slug: "ayurvedic-massage",
    title: "Ayurvedic Massage",
    description:
      "Rooted in ancient Indian healing, performed with warmed herbal oils and traditional kizhi pouches to draw out deep, lasting relief.",
    image: "/imgs/kizhi-massage-01.jpg",
    items: [
      { name: "Ayurvedic Massage", duration: "60 minutes", price: "250 AED" },
      { name: "Ayurvedic Massage with Kizhi", duration: "90 minutes", price: "299 AED" },
      { name: "Ayurvedic Massage with Steam", duration: "90 minutes", price: "359 AED" },
      {
        name: "Cupping Therapy",
        duration: "60 minutes · 6 cups",
        price: "299 AED",
        note: "+50 AED per additional cup",
      },
    ],
  },
  {
    slug: "treatment-services",
    title: "Treatment Services",
    description:
      "Our signature menu, from hot stone and deep tissue to facials and grooming, each treatment tailored to exactly what your body asks for.",
    image: "/imgs/hot-stone-01.jpg",
    items: [
      { name: "Hot Stone Massage", price: "250 AED" },
      { name: "Deep Tissue Massage", price: "230 AED" },
      { name: "Warm Oil Massage", price: "220 AED" },
      { name: "Swedish Massage", price: "220 AED" },
      { name: "Arabic Massage", price: "250 AED" },
      { name: "Chinese Treatment", price: "250 AED" },
      { name: "Couple Massage", price: "399 AED" },
      { name: "4 Hands Massage", price: "399 AED" },
      { name: "Foot Massage", duration: "30 minutes", price: "150 AED" },
      { name: "Head & Shoulder Massage", duration: "30 minutes", price: "150 AED" },
      { name: "Herbal Head Massage", price: "150 AED" },
      { name: "Shaving", note: "private part only", price: "180 AED" },
      { name: "Waxing", note: "private part only", price: "199 AED" },
      { name: "Full Body Waxing", price: "399 AED" },
      { name: "Body Scrub", price: "199 AED" },
      { name: "Facial Treatment", note: "herbal", price: "180 AED" },
      { name: "Golden Facial Treatment", price: "250 AED" },
      { name: "Tan Removing", price: "150 AED" },
      { name: "Face Cleaning", price: "99 AED" },
      { name: "Manicure", price: "80 AED" },
      { name: "Pedicure", price: "120 AED" },
    ],
  },
  {
    slug: "moroccan-bath-jacuzzi",
    title: "Moroccan Bath & Jacuzzi",
    description:
      "Sink into rose-petalled waters and steam-warmed traditions, our most indulgent ritual and perfect for couples or a solo escape.",
    image: "/imgs/jacuzzi-petals.jpg",
    items: [
      { name: "Moroccan Bath", duration: "60 minutes", price: "300 AED" },
      { name: "Moroccan Bath", duration: "90 minutes", price: "350 AED" },
      { name: "Ice Bath with Sport Massage", price: "299 AED" },
      { name: "Milk Bath", duration: "60 minutes", price: "399 AED" },
    ],
  },
];

export const SIGNATURE_HIGHLIGHTS = [
  {
    title: "Ayurvedic Kizhi Ritual",
    price: "From 250 AED",
    image: "/imgs/kizhi-massage-02.jpg",
    blurb: "Warm herbal pouches, pressed rhythmically to melt away deep-seated tension.",
  },
  {
    title: "Hot Stone Massage",
    price: "250 AED",
    image: "/imgs/hot-stone-back.jpg",
    blurb: "Heated basalt stones glide over oiled skin, easing muscle by muscle into calm.",
  },
  {
    title: "Moroccan Bath & Jacuzzi",
    price: "From 300 AED",
    image: "/imgs/jacuzzi-petals.jpg",
    blurb: "Rose petals, warm water and steam: an indulgence made for two.",
  },
  {
    title: "Golden Facial Treatment",
    price: "250 AED",
    image: "/imgs/candle-ritual.jpg",
    blurb: "A radiance ritual that leaves skin luminous and the senses unwound.",
  },
] as const;
