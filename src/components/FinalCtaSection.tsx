import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const FinalCtaSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#0C0D11] text-white relative overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B23] border border-[#00E575]/20 text-[#00E575] text-[11px] font-mono font-medium uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E575] animate-ping" />
          Nationwide Dispatch Across All 50 States
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Buying a Used Car? <br />
          <span className="text-[#00E575]">Inspect Before You Invest.</span>
        </h2>

        <p className="text-xs sm:text-base text-[#9EA3B0] max-w-xl mx-auto leading-relaxed">
          Protect your investment. An independent 122-point vehicle inspection by a certified ASE technician costs only $225 and delivers the confidence you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#00E575] hover:bg-[#00C853] text-black font-bold text-sm uppercase tracking-wide rounded-xl shadow-xl shadow-[#00E575]/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Book Your Inspection</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#181B23] hover:bg-[#20242F] text-white font-mono font-semibold text-xs rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#00E575]" />
            <span>Call: {BUSINESS_INFO.formattedPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
