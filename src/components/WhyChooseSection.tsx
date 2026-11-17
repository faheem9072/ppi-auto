import React from 'react';
import { Scale, UserCheck, MapPin, Camera, Award, Shield, ArrowRight } from 'lucide-react';

export const WhyChooseSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const reasons = [
    {
      icon: Scale,
      title: '100% Independent & Unbiased',
      desc: 'We never accept dealer kickbacks. Our sole mission is protecting your hard-earned money and safety before you pay.'
    },
    {
      icon: UserCheck,
      title: 'Certified Master Technicians',
      desc: 'Our nationwide network consists of certified ASE inspectors with diagnostic scan tools and paint depth gauges.'
    },
    {
      icon: MapPin,
      title: 'All 50 US States Covered',
      desc: 'Buying out-of-state? We dispatch mobile technicians to private homes, dealer showrooms, and auction yards.'
    },
    {
      icon: Camera,
      title: '30 to 60+ High-Res Photos',
      desc: 'Every report includes clear, date-stamped photographic evidence: tire tread depths, underbody, fluid checks, and diagnostic codes.'
    },
    {
      icon: Award,
      title: 'Unfair Negotiation Leverage',
      desc: 'Armed with our itemized 122-point written report, buyers negotiate an average of $1,400 to $2,500 off the seller’s asking price.'
    },
    {
      icon: Shield,
      title: 'Guaranteed Same-Day Delivery',
      desc: 'Most inspection reports are completed and digitally delivered straight to your email and phone the same day.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0C0D11] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00E575] uppercase flex items-center gap-1.5">
            <span>///</span> THE PPI AUTO ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            WHY BUYERS TRUST US BEFORE TRANSFERRING FUNDS
          </h2>
          <p className="text-xs sm:text-sm text-[#9EA3B0]">
            Buying a used vehicle is one of your largest financial commitments. Never rely on the seller's promises.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#12141A] p-5 rounded-2xl border border-white/10 hover:border-[#00E575] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#181B23] text-[#00E575] flex items-center justify-center group-hover:bg-[#00E575] group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#585E6E] font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white uppercase tracking-tight mb-2 group-hover:text-[#00E575] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9EA3B0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#6A7080]">
                  <span>VERIFIED ADVANTAGE</span>
                  <span className="text-[#00E575]">✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
