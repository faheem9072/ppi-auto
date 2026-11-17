import React, { useState, useEffect } from 'react';
import { Phone, Shield, FileText, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface AhapeNavbarProps {
  onOpenBooking: () => void;
  onOpenReport: () => void;
}

export const AhapeNavbar: React.FC<AhapeNavbarProps> = ({ onOpenBooking, onOpenReport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: '122 Points', href: '#checklist' },
    { label: 'Pricing ($225)', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Floating Pill Nav container (AHAPE Style) */}
      <nav className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-6 max-w-6xl mx-auto transition-all duration-300">
        <div
          className={`h-14 sm:h-[68px] rounded-full px-3 sm:px-5 flex items-center justify-between gap-2 sm:gap-4 border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0A0C10]/95 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/80'
              : 'bg-[#0E1117]/85 backdrop-blur-md border-white/10 shadow-xl'
          }`}
        >
          {/* Brand Logo */}
          <a href="#overview" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border border-[#00E575]/40 flex items-center justify-center text-[#00E575] shadow-lg group-hover:scale-105 transition-transform">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-lg sm:text-2xl tracking-tight text-white uppercase leading-none">
                  PPI<span className="text-[#00E575]">AUTO</span>
                </span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-full bg-[#181B23] text-[#00E575] font-bold border border-[#00E575]/30 hidden xs:inline-block">
                  $225
                </span>
              </div>
              <p className="text-[9px] tracking-widest uppercase text-[#737A8B] font-mono leading-none hidden sm:block">
                Pre-Purchase Inspections
              </p>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#C4C9D6] hover:text-[#00E575] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenReport}
              className="text-xs font-bold uppercase tracking-wider text-[#00E575] hover:text-white transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Sample Report</span>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/5 border border-white/5 text-[#00E575] hover:text-white hover:bg-[#00E575]/10 transition-colors flex items-center gap-1 text-xs font-mono font-bold"
              title="Call dispatch line"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{BUSINESS_INFO.formattedPhone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-[11px] sm:text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#00E575]/25 transition-all duration-200 active:scale-95 flex items-center gap-1"
            >
              <span>Book $225</span>
              <ArrowRight className="w-3 h-3 stroke-[2.5] hidden xs:inline" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#C4C9D6] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#0C0D11]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[#C4C9D6] hover:text-[#00E575] hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReport();
                }}
                className="px-3 py-2 text-left text-sm font-bold uppercase tracking-wider text-[#00E575] hover:bg-white/5 rounded-xl flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Sample 122-Pt Report</span>
              </button>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#181B23] text-white text-xs font-mono font-bold border border-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#00E575]" />
                Call: {BUSINESS_INFO.formattedPhone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#00E575] text-black font-display font-black text-xs uppercase tracking-wider rounded-full shadow-lg text-center"
              >
                Book Inspection ($225 Flat)
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
