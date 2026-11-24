import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SEVAMANDIR SILKS | Royal Heritage Luxury Indian Silk Sarees",
    template: "%s | SEVAMANDIR SILKS",
  },
  description: siteConfig.description,
  keywords: [
    "Sevamandir Silks",
    "Kanjivaram Silk Sarees",
    "Banarasi Silk Sarees",
    "Indian Bridal Sarees",
    "Pure Zari Weaves",
    "Handloom Silk Boutique",
    "Luxury Indian Fashion",
  ],
  authors: [{ name: "Sevamandir Silks" }],
  openGraph: {
    title: "SEVAMANDIR SILKS | Royal Heritage Luxury Indian Silk Sarees",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Sevamandir Silks Royal Heritage",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEVAMANDIR SILKS | Royal Heritage Luxury Indian Silk Sarees",
    description: siteConfig.description,
    images: ["/images/hero/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5EEE5] text-[#332522]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
