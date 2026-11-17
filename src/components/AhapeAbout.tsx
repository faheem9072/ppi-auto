import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const AhapeAbout: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const features = [
    {
      num: '01',
      title: '100% Independent & Unbiased',
      desc: 'We never take kickbacks from car dealers or private sellers. Our sole loyalty is protecting your wallet and safety before you pay.'
    },
    {
      num: '02',
      title: 'Certified Master Technicians',
      desc: 'Our inspectors are certified ASE technicians armed with commercial CAN-Bus scanners, ultrasonic paint gauges, and diagnostic probes.'
    },
    {
      num: '03',
      title: 'On-Site Mobile Dispatch',
      desc: 'We travel directly to the vehicle across all 50 US states — dealer showrooms, private driveways, and auction storage lots.'
    },
    {
      num: '04',
      title: 'Actionable Written Reports',
      desc: 'Receive same-day itemized digital reports with 30-60+ high-res photos, diagnostic trouble codes, and price negotiation leverage.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#070707] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Head (AHAPE Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-2">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#00E575] uppercase flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#00E575]" />
              THE PPI AUTO STANDARD
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.88]">
              BUILT TO PROTECT <br />
              <span className="text-[#00E575]">THE BUYER.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#9EA3B0] leading-relaxed">
              PPI Auto is not an ordinary mechanic shop. We are an independent pre-purchase inspection authority. We represent you and your investment, ensuring you never buy a hidden lemon.
            </p>
            <div className="text-xs font-mono text-[#6A7080]">
              Nationwide Coverage: <strong className="text-white">All 50 US States • $225 Flat Rate</strong>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards (AHAPE Feature Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => (
            <div
              key={feat.num}
              className="bg-[#0E1015] rounded-3xl border border-white/10 p-6 flex flex-col justify-between hover:border-[#00E575] transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#161821] text-[#00E575] font-display font-black text-xl flex items-center justify-center mb-6 group-hover:bg-[#00E575] group-hover:text-black transition-all">
                  {feat.num}
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-[#00E575] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9EA3B0] leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#6A7080]">
                <span>VERIFIED STANDARD</span>
                <span className="text-[#00E575]">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0E1015] to-[#141822] p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-black text-xl sm:text-2xl uppercase text-white">
              Buying from out-of-state or a local dealer?
            </h4>
            <p className="text-xs sm:text-sm text-[#9EA3B0]">
              Our mobile technicians schedule same-day or next-morning inspections anywhere in the US.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#00E575]/25 transition-all shrink-0"
          >
            Book Inspection ($225 Flat)
          </button>
        </div>

      </div>
    </section>
  );
};
