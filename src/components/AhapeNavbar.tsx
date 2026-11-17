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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: '122 Points', href: '#checklist' },
    { label: 'Pricing ($225)', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Floating Pill Nav container (AHAPE Style) */}
      <nav className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 max-w-6xl mx-auto transition-all duration-300">
        <div
          className={`h-16 sm:h-[70px] rounded-full px-3.5 sm:px-5 flex items-center justify-between gap-4 border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0A0C10]/95 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/80'
              : 'bg-[#0E1117]/80 backdrop-blur-md border-white/10 shadow-xl'
          }`}
        >
          {/* Brand Logo (AHAPE round badge) */}
          <a href="#overview" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black border border-[#00E575]/40 flex items-center justify-center text-[#00E575] shadow-lg group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white uppercase leading-none">
                  PPI<span className="text-[#00E575]">AUTO</span>
                </span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-full bg-[#181B23] text-[#00E575] font-bold border border-[#00E575]/30">
                  $225
                </span>
              </div>
              <p className="text-[9px] tracking-widest uppercase text-[#737A8B] font-mono leading-none hidden sm:block">
                Pre-Purchase Inspections
              </p>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
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

          {/* Right Action */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#00E575] px-3 py-1.5 rounded-full bg-white/5 border border-white/5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00E575]" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#00E575]/25 transition-all duration-200 active:scale-95 flex items-center gap-1.5"
            >
              <span>Book $225</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#C4C9D6] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#0C0D11]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
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

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#181B23] text-white text-xs font-mono font-bold border border-white/5"
              >
                <Phone className="w-4 h-4 text-[#00E575]" />
                Call: {BUSINESS_INFO.formattedPhone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[#00E575] text-black font-display font-black text-xs uppercase tracking-wider rounded-full shadow-lg text-center"
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
