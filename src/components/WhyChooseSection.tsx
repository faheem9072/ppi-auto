import React from 'react';
import { Shield, UserCheck, MapPin, Camera, Award, Scale, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const WhyChooseSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const reasons = [
    {
      icon: Scale,
      title: '100% Independent & Unbiased',
      desc: 'We never take kickbacks from car dealers or private sellers. Our sole loyalty is to you, protecting your hard-earned money and safety before you pay.'
    },
    {
      icon: UserCheck,
      title: 'Certified Master Technicians',
      desc: 'Our nationwide network consists of certified ASE inspectors with years of automotive diagnostic experience, equipped with pro-grade scan gear.'
    },
    {
      icon: MapPin,
      title: 'All 50 US States Covered',
      desc: 'Buying across the country? We dispatch mobile technicians to private homes, dealership showrooms, auction yards, and storage facilities in any state.'
    },
    {
      icon: Camera,
      title: '30 to 60+ High-Res Photos',
      desc: 'Every report includes clear, date-stamped photographic evidence: tire tread depths, underbody condition, fluid checks, body gaps, and diagnostic screens.'
    },
    {
      icon: Award,
      title: 'Unfair Negotiation Leverage',
      desc: 'Armed with our itemized 122-point written report, buyers negotiate an average of $1,400 to $2,500 off the seller’s asking price or walk away safely.'
    },
    {
      icon: Shield,
      title: 'Guaranteed Same-Day Delivery',
      desc: 'Most inspection reports are completed and digitally delivered straight to your email and phone the very same day the technician finishes the on-site audit.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#111215] text-white border-b border-[#252830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E5192D] uppercase flex items-center gap-1.5">
            <span>///</span> THE PPI AUTO ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display leading-[0.95]">
            WHY 28,000+ BUYERS TRUST US BEFORE TRANSFERRING FUNDS.
          </h2>
          <p className="text-sm text-[#A6A29C] leading-relaxed">
            Buying a used vehicle is one of the largest financial decisions you will make. Never rely on the seller's promises or dealership clean-car guarantees.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#181A20] p-6 rounded-2xl border border-[#2B2F3A] hover:border-[#E5192D] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#22242B] text-[#E5192D] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E5192D] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#585E6E] font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white uppercase tracking-tight mb-2 group-hover:text-[#E5192D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A6A29C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#242833] flex items-center justify-between text-[11px] font-mono text-[#7D786F]">
                  <span>VERIFIED ADVANTAGE</span>
                  <span className="text-[#E5192D]">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#1A1D24] p-6 rounded-2xl border border-[#2B2F3A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#E5192D] uppercase">
              FLAT FEE PEACE OF MIND
            </span>
            <p className="text-sm font-semibold text-white">
              Protect your multi-thousand dollar investment for just $225.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#E5192D] hover:bg-[#CF1326] text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-[#E5192D]/20 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Book Your Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
