import React, { useState } from 'react';
import { Phone, Shield, FileText, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenReport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenReport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: '122 Points', href: '#checklist' },
    { label: 'Pricing ($225)', href: '#pricing' },
  ];

  return (
    <>
      {/* Top Ticker */}
      <div className="bg-[#07080A] text-[#9EA3B0] border-b border-white/5 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E575] animate-pulse" />
            <span className="text-white font-medium text-[11px] sm:text-xs">
              Mobile Inspection Dispatch Across All 50 US States
            </span>
            <span className="hidden md:inline text-[#6B7280]">•</span>
            <span className="hidden md:inline text-[11px] text-[#A1A7B5]">Same-day written reports</span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="text-[#00E575] hover:text-white transition-colors font-mono font-semibold text-xs flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.formattedPhone}</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#0C0D11]/95 backdrop-blur-md border-b border-white/5 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#overview" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00E575] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#00E575]/20 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    PPI<span className="text-[#00E575]">AUTO</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#181B23] text-[#00E575] font-semibold border border-white/5">
                    $225 Flat
                  </span>
                </div>
                <p className="text-[10px] tracking-wider uppercase text-[#737A8B] font-mono leading-none">
                  Pre-Purchase Vehicle Inspection
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#12141A] px-3.5 py-1.5 rounded-full border border-white/5 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-[#9EA3B0] hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onOpenReport}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#00E575] hover:text-white hover:bg-[#00E575]/10 rounded-full transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                Sample Report
              </button>
            </nav>

            {/* Right Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden xl:flex flex-col text-right mr-1"
              >
                <span className="text-[10px] text-[#737A8B] uppercase tracking-wider font-mono">
                  Direct Line
                </span>
                <span className="text-sm font-mono font-semibold text-white hover:text-[#00E575] transition-colors">
                  {BUSINESS_INFO.formattedPhone}
                </span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00E575] hover:bg-[#00C853] text-black font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#00E575]/25 transition-all duration-200 active:scale-95"
              >
                <span>Book $225</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-2 bg-[#00E575] text-black font-bold text-xs uppercase tracking-wide rounded-lg shadow-md shadow-[#00E575]/20 active:scale-95"
              >
                Book $225
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#9EA3B0] hover:text-white focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0C0D11] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[#C4C9D6] hover:text-[#00E575] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReport();
                }}
                className="px-3 py-2.5 text-left text-sm font-semibold text-[#00E575] hover:bg-white/5 rounded-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Sample 122-Pt Report
              </button>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#161821] text-white text-xs font-mono font-semibold border border-white/5"
              >
                <Phone className="w-4 h-4 text-[#00E575]" />
                Call: {BUSINESS_INFO.formattedPhone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[#00E575] text-black font-bold text-xs uppercase tracking-wide rounded-xl shadow-lg text-center"
              >
                Book Inspection ($225 Flat)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
