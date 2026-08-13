import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingVideoPlayer from "@/components/FloatingVideoPlayer";
import { BUSINESS } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Luxury Spa & Wellness in Abu Dhabi`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Whispering Waters Spa is a boutique wellness retreat at The Uptown Hotel and Apartment, Abu Dhabi, offering Ayurvedic, Arabic, Swedish and hot stone massages, Moroccan bath, jacuzzi and facial rituals, open 10am–2am daily.",
  keywords: [
    "spa Abu Dhabi",
    "massage Abu Dhabi",
    "Ayurvedic massage Abu Dhabi",
    "Moroccan bath Abu Dhabi",
    "couple massage Abu Dhabi",
    "Whispering Waters Spa",
  ],
  openGraph: {
    title: `${BUSINESS.name} | Luxury Spa & Wellness in Abu Dhabi`,
    description: BUSINESS.tagline,
    siteName: BUSINESS.name,
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <FloatingVideoPlayer />
      </body>
    </html>
  );
}
