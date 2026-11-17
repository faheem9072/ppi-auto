import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface AhapeStyleHeroProps {
  onOpenBooking: () => void;
  onOpenReport: () => void;
}

export const AhapeStyleHero: React.FC<AhapeStyleHeroProps> = ({ onOpenBooking, onOpenReport }) => {
  return (
    <section id="overview" className="relative min-h-[90vh] sm:min-h-[95vh] bg-[#050505] text-white overflow-hidden flex items-center rounded-b-[24px] sm:rounded-b-[44px]">
      
      {/* Background Car Moving Video (Optimized for Mobile & Desktop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 brightness-95 contrast-110"
      >
        <source src="/videos/hero-drive.mp4" type="video/mp4" />
        <source src="/videos/highway-drive.mp4" type="video/mp4" />
        <source src="https://cdn.coverr.co/videos/coverr-a-car-passing-in-the-road-in-panama-city-9269/1080p.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/95 via-black/80 to-black/35 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#070707] via-transparent to-black/70 pointer-events-none" />

      {/* Dynamic Diagonal Accent Strips (AHAPE Signature) */}
      <div className="greenstrip strip1 hidden md:block pointer-events-none" />
      <div className="greenstrip strip2 hidden md:block pointer-events-none" />

      {/* Main Container Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-14 sm:pt-32 sm:pb-20">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Top Live Badge + Eyebrow Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="video-live-badge text-[10px] sm:text-[11px] py-1 px-3">
              <i />
              <span>LIVE FIELD FOOTAGE</span>
            </div>
            <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#A1A7B5] hidden xs:inline-block">
              All 50 US States • $225 Flat
            </div>
          </div>

          {/* Big Bold Headline (Responsive from mobile 38px up to 9xl desktop) */}
          <h1 className="font-display font-black text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tighter leading-[0.88] text-white">
            KNOW WHAT IT NEEDS <br />
            <span className="text-[#00E575]">BEFORE YOU PAY.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-xs sm:text-base lg:text-lg text-[#C5CAD6] max-w-xl font-normal leading-relaxed">
            Independent on-site vehicle inspections, wherever the car sits. 122 points, full OBD-II diagnostic scan, and 15-minute road test before you spend a dime.
          </p>

          {/* Action Buttons (Stacked on mobile, side-by-side on tablet/desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-2xl shadow-[#00E575]/35 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Book Your Inspection ($225)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onOpenReport}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-display font-bold text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Sample Report</span>
            </button>
          </div>

          {/* Quick Stats Grid inside Hero (Mobile-first 2x2 grid, 4 cols on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/15 max-w-2xl">
            <div className="bg-black/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-white/5 sm:border-0">
              <div className="text-2xl sm:text-4xl font-display font-black text-white leading-none">
                122
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#00E575] font-semibold mt-1 block">
                Points Audited
              </span>
            </div>

            <div className="bg-black/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-white/5 sm:border-0">
              <div className="text-2xl sm:text-4xl font-display font-black text-[#00E575] leading-none">
                $225
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#A1A7B5] font-semibold mt-1 block">
                Flat Rate
              </span>
            </div>

            <div className="bg-black/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-white/5 sm:border-0">
              <div className="text-2xl sm:text-4xl font-display font-black text-white leading-none">
                50
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#00E575] font-semibold mt-1 block">
                States Covered
              </span>
            </div>

            <div className="bg-black/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-white/5 sm:border-0">
              <div className="text-2xl sm:text-4xl font-display font-black text-white leading-none">
                SAME-DAY
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#A1A7B5] font-semibold mt-1 block">
                Digital Reports
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Circular Badge on the Right (hidden on small mobile to avoid clutter) */}
      <div className="hidden lg:flex absolute bottom-10 right-10 z-10 w-28 h-28 rounded-full border border-white/20 bg-black/60 backdrop-blur-md items-center justify-center text-center p-2 shadow-2xl">
        <div className="text-[10px] font-mono font-bold tracking-widest text-[#C5CAD6] uppercase leading-tight">
          <span className="text-[#00E575] text-base block mb-0.5">✦</span>
          SCAN<br />TEST<br />INSPECT<br />PROTECT
        </div>
      </div>

      {/* Clean Scroll Down Indicator */}
      <a
        href="#ticker"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[9px] sm:text-[10px] font-mono text-[#8D93A5] hover:text-white transition-colors"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-3 h-3 text-[#00E575] animate-bounce" />
      </a>

    </section>
  );
};
