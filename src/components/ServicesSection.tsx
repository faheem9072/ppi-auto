import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-12 sm:py-20 bg-[#0C0D11] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00E575] uppercase flex items-center gap-1.5">
              <span>///</span> 122-POINT DIAGNOSTIC SYSTEMS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              INSPECTION SERVICES INCLUDED
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9EA3B0] max-w-md">
            All 6 systems below are fully audited on-site under our single <strong className="text-[#00E575]">$225 flat rate</strong>.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#12141A] rounded-2xl border border-white/10 p-5 shadow-lg hover:border-[#00E575] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-extrabold text-[#00E575] uppercase tracking-wider flex items-center gap-1">
                    <span>///</span> {service.number}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#9EA3B0]">
                    ON-SITE AUDIT
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-white uppercase tracking-tight group-hover:text-[#00E575] transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Short Desc */}
                <p className="text-xs text-[#9EA3B0] leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Photo Thumbnail */}
                <div className="relative h-40 rounded-xl overflow-hidden mb-4 bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white font-mono">
                    <span className="bg-black/80 px-2 py-0.5 rounded">
                      {service.specs[0]}
                    </span>
                    <span className="text-[#00E575] font-bold">122-PT SYSTEM</span>
                  </div>
                </div>

                {/* Spec List */}
                <div className="space-y-1 mb-4">
                  {service.specs.slice(0, 3).map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#C4C9D6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E575]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/5 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="flex-1 py-2.5 bg-[#181B23] hover:bg-[#00E575] hover:text-black text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all text-center"
                >
                  View Details
                </button>
                <button
                  onClick={onOpenBooking}
                  className="p-2.5 bg-[#181B23] hover:bg-[#00E575] hover:text-black text-white rounded-xl transition-all"
                  title="Book this vehicle"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal for viewing detailed service specs */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#12141A] text-white max-w-lg w-full rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6 relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs font-mono font-bold text-[#00E575] uppercase">
                /// SYSTEM {activeModalService.number} AUDIT
              </span>
              <button
                onClick={() => setActiveModalService(null)}
                className="text-[#9EA3B0] hover:text-white text-xs font-bold"
              >
                ✕ CLOSE
              </button>
            </div>

            <h3 className="text-2xl font-bold font-display text-white uppercase mb-2">
              {activeModalService.title}
            </h3>
            <p className="text-xs text-[#9EA3B0] leading-relaxed mb-4">
              {activeModalService.fullDesc}
            </p>

            <div className="bg-[#181B23] p-4 rounded-xl border border-white/5 mb-4 space-y-2">
              <span className="text-[11px] font-mono uppercase font-bold text-[#00E575] block">
                Primary Checkpoints:
              </span>
              {activeModalService.keyChecks.map((check, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#C4C9D6]">
                  <Check className="w-3.5 h-3.5 text-[#00E575] shrink-0" />
                  <span>{check}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onOpenBooking();
                }}
                className="flex-1 py-3 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Book Inspection ($225 Flat)
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-3 bg-[#181B23] text-white font-mono text-xs font-bold rounded-xl border border-white/10"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
