"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { collections } from "@/data/collections";
import { Sparkles, MapPin, Mail, Phone, Heart } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#542D32] text-[#F5EEE5] border-t-2 border-[#B08A4A]">
      {/* Upper Subtle Banner */}
      <div className="border-b border-white/10 py-6 bg-[#3D1F24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs tracking-[0.2em] uppercase text-[#B08A4A] gap-4 text-center md:text-left">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#B08A4A]" />
            <span>Pure Mulberry Silk • Hand-Interlocked Zari • Timeless Heirlooms</span>
          </div>
          <div>Bespoke Consultations & Catalogue Showcases</div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand Wordmark & Ethos */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.25em] text-[#F5EEE5] font-semibold">
                SEVAMANDIR
              </span>
              <span className="text-[10px] tracking-[0.45em] text-[#B08A4A] uppercase font-sans -mt-1 font-medium">
                SILKS • HERITAGE
              </span>
            </div>
            <p className="text-sm text-[#F5EEE5]/80 leading-relaxed font-light pt-2">
              Celebrating centuries of revered Indian handloom mastery. From royal Kanjivaram Korvai drapes to opulent Banarasi brocades, every creation is an enduring work of art.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] tracking-[0.2em] text-[#B08A4A] border border-[#B08A4A]/40 px-3 py-1">
                DEMO SHOWCASE
              </span>
            </div>
          </div>

          {/* Column 2: Signature Collections */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-[0.15em] text-[#B08A4A] uppercase font-medium">
              Signature Collections
            </h3>
            <ul className="space-y-2.5 text-sm">
              {collections.map((col) => (
                <li key={col.slug}>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="text-[#F5EEE5]/80 hover:text-[#B08A4A] transition-colors duration-200 tracking-wide block"
                  >
                    {col.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/collections"
                  className="text-xs uppercase tracking-[0.2em] text-[#B08A4A] hover:underline pt-2 inline-block"
                >
                  View All Collections →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Boutique Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-[0.15em] text-[#B08A4A] uppercase font-medium">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F5EEE5]/80 hover:text-[#B08A4A] transition-colors duration-200 tracking-wide block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Enquiries & Boutique Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-[0.15em] text-[#B08A4A] uppercase font-medium">
              Enquiries & Visit
            </h3>
            <div className="space-y-3 text-sm text-[#F5EEE5]/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#B08A4A] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed font-light">
                  {siteConfig.contact.addressPlaceholder}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#B08A4A] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed font-light">
                  {siteConfig.contact.phonePlaceholder}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#B08A4A] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed font-light">
                  {siteConfig.contact.emailPlaceholder}
                </span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#B08A4A] text-[#332522] hover:bg-[#D4AF37] px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5EEE5]/60 gap-4">
          <p className="tracking-wider">
            © {currentYear} SEVAMANDIR SILKS. All rights reserved.
          </p>
          <p className="tracking-wide text-center md:text-right font-light">
            Designed for SEVAMANDIR SILKS • Commercial Client Presentation Demo
          </p>
        </div>
      </div>
    </footer>
  );
}
