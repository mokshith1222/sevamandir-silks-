"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { WhatsAppModal } from "@/components/shared/WhatsAppModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Announcement Strip - Always visible or smoothly tucks on scroll */}
        <div
          className={cn(
            "bg-[#792D3B] text-[#FAF6F0] text-center transition-all duration-300 overflow-hidden border-b border-[#B08A4A]/30",
            isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-12 py-2 px-4 opacity-100"
          )}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#E6CA85] shrink-0" />
            <span>Discover the Timeless Beauty of Indian Silk • Exclusive Handloom Showcases</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E6CA85] shrink-0" />
          </div>
        </div>

        {/* Main Clean Navigation Bar */}
        <div
          className={cn(
            "transition-all duration-300",
            isScrolled
              ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-md border-b border-[#B08A4A]/25 py-3"
              : "bg-[#FAF6F0] border-b border-[#B08A4A]/20 py-3.5 sm:py-4"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* Brand Wordmark */}
              <Link
                href="/"
                className="group flex flex-col items-start focus:outline-none"
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-[#792D3B] group-hover:text-[#B08A4A] transition-colors">
                  SEVAMANDIR
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.45em] font-sans uppercase -mt-1 font-medium text-[#B08A4A]">
                  SILKS • HERITAGE
                </span>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 relative py-1",
                        isActive
                          ? "text-[#792D3B] font-semibold"
                          : "text-[#332522]/80 hover:text-[#792D3B]"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B08A4A]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Action: Enquire Button & Mobile Menu */}
              <div className="flex items-center space-x-3.5">
                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  className="hidden sm:inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] px-4 py-2 border border-[#B08A4A] text-[#792D3B] hover:bg-[#792D3B] hover:text-[#FAF6F0] transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
                  <span>Enquire</span>
                </button>

                {/* Mobile Hamburger Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-[#332522] hover:text-[#792D3B] md:hidden focus:outline-none cursor-pointer"
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-[#792D3B]" />
                  ) : (
                    <Menu className="w-6 h-6 text-[#792D3B]" />
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF6F0] flex flex-col pt-32 px-8 pb-10 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6 text-center my-auto">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-serif text-2xl tracking-[0.15em] transition-colors",
                    isActive
                      ? "text-[#792D3B] font-semibold border-b-2 border-[#B08A4A] pb-1 inline-block mx-auto"
                      : "text-[#332522] hover:text-[#792D3B]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-6 border-t border-[#B08A4A]/20">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsEnquiryOpen(true);
                }}
                className="w-full bg-[#792D3B] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] py-3.5 font-medium shadow-sm hover:bg-[#542D32] transition-colors"
              >
                Personal Consultation & Enquiry
              </button>
            </div>
          </div>
        </div>
      )}

      <WhatsAppModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
