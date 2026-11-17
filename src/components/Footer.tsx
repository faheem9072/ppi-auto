import React from 'react';
import { Shield, Phone, Globe, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const Footer: React.FC<{ onOpenBooking: () => void; onOpenReport: () => void }> = ({
  onOpenBooking,
  onOpenReport
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] text-[#737A8B] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00E575] flex items-center justify-center text-black font-black text-sm">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xl font-black tracking-tight text-white font-display">
                PPI<span className="text-[#00E575]">AUTO</span>
              </span>
            </div>

            <p className="text-xs text-[#8D93A5] max-w-sm leading-relaxed">
              Nationwide pre-purchase vehicle inspection services performed on-site by certified technicians across all 50 US states. 100% independent and buyer-focused.
            </p>

            <div className="space-y-1 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#00E575]" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#00E575] transition-colors font-bold">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#8D93A5]">
                <Globe className="w-3.5 h-3.5 text-[#00E575]" />
                <span>prepurchaseauto.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              /// QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Inspection Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#checklist" className="hover:text-white transition-colors">122-Point Checklist</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">$225 Flat Pricing</a></li>
            </ul>
          </div>

          {/* Col 3: Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              /// DISPATCH
            </h4>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md text-center"
            >
              Book Inspection ($225)
            </button>
            <button
              onClick={onOpenReport}
              className="w-full py-2.5 bg-[#12141A] hover:bg-[#1C1F2B] text-white font-mono text-xs rounded-xl border border-white/10 transition-colors text-center"
            >
              View Sample Report
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6A7080]">
          <div>
            © {new Date().getFullYear()} PPI Auto (prepurchaseauto.com). Concept by <strong className="text-white">KORE</strong>.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12141A] hover:bg-[#1C1F2B] text-white border border-white/5 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
