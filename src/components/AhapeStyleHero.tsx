import React from 'react';
import { ArrowRight, Phone, CheckCircle2, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface AhapeStyleHeroProps {
  onOpenBooking: () => void;
  onOpenReport: () => void;
}

export const AhapeStyleHero: React.FC<AhapeStyleHeroProps> = ({ onOpenBooking, onOpenReport }) => {
  return (
    <section id="overview" className="relative min-h-[92vh] lg:min-h-[95vh] bg-[#050505] text-white overflow-hidden flex items-center rounded-b-[32px] sm:rounded-b-[44px]">
      
      {/* Background Car Moving Video */}
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

      {/* Cinematic Gradient Overlays (AHAPE Style) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/95 via-black/70 to-black/25 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#070707] via-transparent to-black/60 pointer-events-none" />

      {/* Dynamic Diagonal Accent Strips (AHAPE Signature) */}
      <div className="greenstrip strip1 hidden sm:block pointer-events-none" />
      <div className="greenstrip strip2 hidden sm:block pointer-events-none" />

      {/* Live Badge (AHAPE Style) */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-12 z-10">
        <div className="video-live-badge">
          <i />
          <span>LIVE ON-SITE FOOTAGE</span>
        </div>
      </div>

      {/* Main Container Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-3xl space-y-5">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#C5CAD6]">
            <span className="w-9 h-[3px] bg-[#00E575] rounded-full inline-block" />
            <span>Independent • Unbiased • All 50 States</span>
          </div>

          {/* Big Bold Condensed Headline (AHAPE Typography) */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tighter leading-[0.85] text-white">
            KNOW WHAT IT NEEDS <br />
            <span className="text-[#00E575]">BEFORE YOU PAY.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-[#C5CAD6] max-w-xl font-normal leading-relaxed">
            Independent on-site vehicle inspections, wherever the car sits. 122 points, full OBD-II computer diagnostic scan, and 15-minute road test before you spend a dime.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-sm uppercase tracking-wider rounded-full shadow-2xl shadow-[#00E575]/35 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Book Your Inspection ($225)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onOpenReport}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-display font-bold text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Sample Report</span>
            </button>
          </div>

          {/* Quick Stats Grid inside Hero (AHAPE Style) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15 max-w-2xl">
            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-white leading-none">
                122
              </div>
              <span className="text-[11px] font-mono uppercase text-[#00E575] font-semibold mt-1 block">
                Points Audited
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#00E575] leading-none">
                $225
              </div>
              <span className="text-[11px] font-mono uppercase text-[#A1A7B5] font-semibold mt-1 block">
                Flat Rate
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-white leading-none">
                50
              </div>
              <span className="text-[11px] font-mono uppercase text-[#00E575] font-semibold mt-1 block">
                States Covered
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-white leading-none">
                SAME-DAY
              </div>
              <span className="text-[11px] font-mono uppercase text-[#A1A7B5] font-semibold mt-1 block">
                Digital Reports
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Circular Badge on the Right (AHAPE Style) */}
      <div className="hidden lg:flex absolute bottom-12 right-12 z-10 w-28 h-28 rounded-full border border-white/20 bg-black/60 backdrop-blur-md items-center justify-center text-center p-2 shadow-2xl">
        <div className="text-[10px] font-mono font-bold tracking-widest text-[#C5CAD6] uppercase leading-tight">
          <span className="text-[#00E575] text-base block mb-0.5">✦</span>
          SCAN<br />TEST<br />INSPECT<br />PROTECT
        </div>
      </div>

      {/* Clean Bottom Scroll Down Indicator */}
      <a
        href="#ticker"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[10px] font-mono text-[#8D93A5] hover:text-white transition-colors"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#00E575] animate-bounce" />
      </a>

    </section>
  );
};
