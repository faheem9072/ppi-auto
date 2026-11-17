import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const PricingSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const inclusions = [
    '122-Point Comprehensive Mobile Inspection',
    'Full OBD-II Computer Diagnostic Scan',
    'Real-World 15-Minute Dynamic Road Test',
    '30 to 60+ High-Resolution Inspection Photos',
    'Ultrasonic Paint Depth Gauge Check (Mils)',
    'Brake Pad & Rotor Thickness Measurements',
    'Same-Day Digital Written PDF Report',
    'Direct Phone Debrief with Your Inspector'
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-[#090A0D] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#00E575] uppercase flex items-center justify-center gap-1.5">
            <span>///</span> Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            $225 Flat Rate. Zero Surprises.
          </h2>
          <p className="text-xs sm:text-sm text-[#9EA3B0]">
            No mileage or travel surcharges. We travel directly to the car across all 50 states.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto bg-[#12141A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Comparison Box */}
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 bg-[#00E575]/10 text-[#00E575] font-mono font-semibold text-xs uppercase tracking-wider rounded-lg border border-[#00E575]/20 inline-block">
                Nationwide Flat Fee
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Most Cars, Pickups & SUVs
              </h3>

              {/* Comparison Box */}
              <div className="bg-[#0C0D11] rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase text-[#737A8B] block">
                    Shop & Dealership PPI :
                  </span>
                  <span className="text-lg font-bold text-[#737A8B] line-through">
                    $350 - $500+
                  </span>
                  <p className="text-[10px] text-[#737A8B]">Requires towing & 3 days delay</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#00E575] font-semibold block">
                    PPI Auto Flat Rate :
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-[#00E575]">
                      $225
                    </span>
                    <span className="text-xs font-mono text-[#C4C9D6] uppercase font-semibold">
                      FLAT
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00E575] font-medium block mt-1">
                    ✓ Zero Travel Fees • Mobile On-Site
                  </span>
                </div>
              </div>

              <div className="text-xs text-[#737A8B]">
                Need custom quotes for rare exotics or commercial chassis? Call us directly at{' '}
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white underline hover:text-[#00E575]">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
            </div>

            {/* Right: Inclusions & CTA */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase text-white tracking-wide block mb-1">
                  Everything Included In Your Inspection:
                </span>
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#C4C9D6]">
                    <Check className="w-4 h-4 text-[#00E575] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#00E575] hover:bg-[#00C853] text-black font-bold text-sm uppercase tracking-wide rounded-xl shadow-xl shadow-[#00E575]/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Your Inspection ($225 Flat)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
