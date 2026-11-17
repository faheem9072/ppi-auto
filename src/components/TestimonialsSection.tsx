import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F4EFEB] text-[#1A1A1A] border-b border-[#DDD6CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E5192D] uppercase flex items-center gap-1.5">
              <span>///</span> VERIFIED BUYER FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111215] font-display max-w-2xl leading-[0.95]">
              HOW PPI AUTO SAVES USED CAR BUYERS THOUSANDS.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#6D675E]">
            <ShieldCheck className="w-4 h-4 text-[#E5192D]" />
            <span>Independent 4.9/5 Rating Across 2,400+ Inspections</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#DDD6CC] p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Stars & Vehicle Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EAE4DC]">
                  <div className="flex items-center gap-1 text-[#E5192D]">
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-[#E5192D]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#6B655B] bg-[#F4EFEB] px-2 py-0.5 rounded border border-[#DDD6CC]">
                    {item.vehicle}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#443F37] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-[#111215] font-display uppercase">
                      {item.author}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  </div>
                  <p className="text-[11px] text-[#787268] font-mono">
                    {item.role} • {item.location}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-[#E5192D]">
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
