
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Website URL - Confirm your domain before deployment
const SITE_URL = "https://www.troninfotech.in";

// ========================================
// COMPLETE LOCAL SEO METADATA
// ========================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Printer Repair & Service in Narela Delhi | TRON INFOTECH",

    template: "%s | TRON INFOTECH",
  },

  description:
    "Looking for printer repair in Narela, Delhi? TRON INFOTECH offers printer servicing, laser toner & cartridge refilling, new and second-hand printers, CCTV camera installation, repair and servicing. Call 9871911478.",

  applicationName: "TRON INFOTECH",

  keywords: [
    // Business Keywords
    "TRON INFOTECH",
    "TRON INFOTECH Narela",
    "TRON INFOTECH Delhi",

    // Printer Repair Keywords
    "Best Printer Repair in Narela",
    "Printer Repair in Narela",
    "Printer Repair Narela Delhi",
    "Printer Repair Near Me",
    "Printer Repair Shop Narela",
    "Printer Service Centre Narela",
    "Printer Service in Narela Delhi",
    "Printer Servicing Near Me",
    "Printer Maintenance Narela",
    "Laser Printer Repair Narela",
    "Inkjet Printer Repair Narela",
    "Printer Technician in Narela",

    // New & Second Hand Printers
    "New Printer in Narela",
    "Second Hand Printer in Narela",
    "Second Hand Printer Narela Delhi",
    "Used Printer in Narela",
    "Printer Shop in Narela",
    "Printer Dealer Narela",
    "Buy New Printer in Narela",
    "Buy Second Hand Printer in Delhi",
    "Laser Printer Shop Narela",

    // Cartridge Refilling
    "Cartridge Refilling in Narela",
    "Cartridge Refilling Near Me",
    "Laser Toner Refilling Narela",
    "Printer Cartridge Refilling Narela",
    "Inkjet Cartridge Refilling Narela",
    "Toner Refilling in Narela Delhi",
    "Printer Cartridge Service Narela",

    // CCTV Camera Services
    "CCTV Camera Installation Narela",
    "CCTV Camera Repair in Narela",
    "CCTV Camera Service Narela",
    "CCTV Camera Shop Narela",
    "CCTV Technician Narela",
    "CCTV Installation Near Me",
    "CCTV Camera Repair Delhi",
    "New CCTV Camera Narela",
    "Second Hand CCTV Camera Narela",

    // Location Based Keywords
    "Printer Repair Swatantra Nagar",
    "Printer Shop Narela Delhi 110040",
    "Printer Service Narela 110040",
    "Cartridge Refilling Swatantra Nagar",
    "CCTV Repair Swatantra Nagar",
  ],

  // GOOGLE INDEXING
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // SOCIAL MEDIA SEO
  openGraph: {
    type: "website",
    locale: "en_IN",

    url: SITE_URL,

    siteName: "TRON INFOTECH",

    title:
      "Printer Repair, Cartridge Refilling & CCTV Services in Narela",

    description:
      "TRON INFOTECH provides professional printer repair, servicing, cartridge refilling, new & second-hand printers and CCTV camera solutions in Narela, Delhi. Call 9871911478.",
  },

  // TWITTER / X SEO
  twitter: {
    card: "summary",

    title:
      "TRON INFOTECH | Printer Repair & CCTV Services Narela",

    description:
      "Printer Repair, Cartridge Refilling, New & Second-Hand Printers and CCTV Camera Services in Narela, Delhi.",
  },

  // BUSINESS CATEGORY
  category: "Printer Repair, Cartridge Refilling and CCTV Services",

  // SEARCH ENGINE LANGUAGE
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Narela, Delhi",
  },
};

// ========================================
// LOCAL BUSINESS STRUCTURED DATA
// ========================================

const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  "@id": `${SITE_URL}/#business`,

  name: "TRON INFOTECH",

  url: SITE_URL,

  description:
    "Printer repair, printer servicing, laser toner refilling, inkjet cartridge refilling, new and second-hand printers, CCTV camera installation, repair and servicing in Narela, Delhi.",

  telephone: "+919871911478",

  email: "troninfotech@gmail.com",

  address: {
    "@type": "PostalAddress",

    streetAddress: "4527/82, Swatantra Nagar",

    addressLocality: "Narela",

    addressRegion: "Delhi",

    postalCode: "110040",

    addressCountry: "IN",
  },

  areaServed: {
    "@type": "Place",
    name: "Narela, Delhi, India",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "Printer, Cartridge and CCTV Services",

    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Printer Repair and Servicing",
      },
      {
        "@type": "OfferCatalog",
        name: "Laser Printer Repair",
      },
      {
        "@type": "OfferCatalog",
        name: "Inkjet Printer Repair",
      },
      {
        "@type": "OfferCatalog",
        name: "Laser Toner Cartridge Refilling",
      },
      {
        "@type": "OfferCatalog",
        name: "Inkjet Cartridge Refilling",
      },
      {
        "@type": "OfferCatalog",
        name: "New and Second Hand Printers",
      },
      {
        "@type": "OfferCatalog",
        name: "CCTV Camera Installation",
      },
      {
        "@type": "OfferCatalog",
        name: "CCTV Camera Repair and Servicing",
      },
      {
        "@type": "OfferCatalog",
        name: "New and Second Hand CCTV Cameras",
      },
    ],
  },
};

// ========================================
// ROOT LAYOUT
// ========================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">

      <body className="min-h-screen overflow-x-hidden bg-[#F4F7FB] antialiased">

        {/* GOOGLE LOCAL BUSINESS SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* NAVBAR */}
        <Navbar />

        {/* WEBSITE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
