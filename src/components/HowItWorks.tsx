import React from 'react';
import { FileEdit, PhoneForwarded, Car, FileCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const HowItWorks: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us About The Vehicle',
      desc: 'Enter the make, model, and seller contact or listing URL. No complex paperwork.',
      icon: FileEdit,
      meta: '2 Mins Online'
    },
    {
      step: '02',
      title: 'We Contact The Seller',
      desc: 'Our dispatch team coordinates the appointment directly with the dealer or private seller.',
      icon: PhoneForwarded,
      meta: 'We Handle Scheduling'
    },
    {
      step: '03',
      title: 'Technician Inspects On-Site',
      desc: 'Our certified mobile tech arrives with diagnostic scanners, paint gauges & takes it on a road test.',
      icon: Car,
      meta: '~90 Mins Dedicated'
    },
    {
      step: '04',
      title: 'Receive Same-Day Report',
      desc: 'Get your full digital report with 30-60+ photos, trouble codes, and price negotiation advice.',
      icon: FileCheck,
      meta: 'Sent To Your Phone'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-[#090A0D] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00E575] uppercase flex items-center justify-center gap-1.5">
            <span>///</span> SIMPLE 4-STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            HOW WE PROTECT YOUR PURCHASE
          </h2>
          <p className="text-xs sm:text-sm text-[#9EA3B0] leading-relaxed">
            We handle the hassle. You never have to take time off work or awkwardly coordinate seller access.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#12141A] rounded-2xl border border-white/10 p-5 flex flex-col justify-between hover:border-[#00E575] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-[#2A2F3D] font-display group-hover:text-[#00E575] transition-colors">
                      {item.step}
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-[#181B23] text-[#00E575] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase text-[#00E575] font-bold block mb-1">
                    {item.meta}
                  </span>

                  <h3 className="text-base font-bold font-display text-white uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9EA3B0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#6A7080]">
                  <span>STEP {idx + 1} OF 4</span>
                  <span className="text-[#00E575]">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 bg-[#12141A] p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-semibold text-white text-center sm:text-left">
            Ready to book? It takes 2 minutes online or call dispatch at{' '}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#00E575] font-mono font-bold hover:underline">
              {BUSINESS_INFO.formattedPhone}
            </a>
          </p>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#00E575]/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Book $225 Flat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
