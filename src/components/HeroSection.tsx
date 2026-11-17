import React, { useState } from 'react';
import { ArrowRight, Phone, CheckCircle2, Play, MapPin, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenReport: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenReport }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: '22%',
      y: '56%',
      title: 'Ultrasonic Paint Depth',
      detail: 'Scans for hidden bondo, repaint & structural collision repair.',
      badge: 'Frame & Body'
    },
    {
      id: 2,
      x: '50%',
      y: '44%',
      title: 'OBD-II Diagnostic Scan',
      detail: 'Detects cleared engine codes & transmission slip flags.',
      badge: 'ECU Diagnostics'
    },
    {
      id: 3,
      x: '76%',
      y: '72%',
      title: 'Brake Pad Vernier Caliper',
      detail: 'Digital thickness measurements of pad friction material & rotor lip.',
      badge: 'Brakes'
    }
  ];

  return (
    <section id="overview" className="relative pt-3 pb-10 sm:pt-6 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#12141A] border border-white/10 shadow-2xl overflow-hidden p-5 sm:p-8 lg:p-12">
          
          {/* Subtle Ambient Green Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-b from-[#00E575]/10 via-[#00E575]/5 to-transparent blur-3xl pointer-events-none" />

          {/* Background Tech Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
            <span className="text-[15vw] font-black uppercase tracking-tighter text-white/[0.03] font-display whitespace-nowrap block leading-none">
              INSPECT
            </span>
          </div>

          {/* Top Info Header Bar inside Card */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181B23] text-[#00E575] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border border-[#00E575]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E575] animate-ping" />
                Independent Pre-Purchase Inspection
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-[#9EA3B0] text-xs font-mono">
                <MapPin className="w-3 h-3 text-[#00E575]" />
                All 50 US States
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#6D7485] hidden md:inline">FAST RESPONSE:</span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="font-bold text-white hover:text-[#00E575] transition-colors flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#00E575]" />
                {BUSINESS_INFO.formattedPhone}
              </a>
            </div>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Bold Stacked Headline with Signature Green Accent Bar */}
              <div className="flex items-start">
                <div className="w-1.5 sm:w-2 h-16 sm:h-24 bg-[#00E575] rounded-full mr-3 sm:mr-4 shrink-0 mt-1 shadow-lg shadow-[#00E575]/50" />
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tight leading-[0.94]">
                  KNOW WHAT IT <br />
                  NEEDS BEFORE <br />
                  <span className="text-[#00E575]">YOU PAY.</span>
                </h1>
              </div>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-[#9EA3B0] leading-relaxed max-w-lg">
                Certified ASE technicians inspect used vehicles wherever the car sits — dealer lots, private driveways, and auctions nationwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-[#00E575]/25 transition-all duration-200 active:scale-95"
                >
                  <span>Book Inspection ($225 Flat)</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={onOpenReport}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#181B23] hover:bg-[#20242F] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl border border-white/10 transition-all"
                >
                  <Play className="w-3.5 h-3.5 text-[#00E575] fill-[#00E575]" />
                  <span>Sample 122-Pt Report</span>
                </button>
              </div>

              {/* Key Guarantees Row */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/5 text-xs text-[#C4C9D6]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00E575] shrink-0" />
                  <span>$225 Flat Rate (No Hidden Fees)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00E575] shrink-0" />
                  <span>122-Point Comprehensive Scan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00E575] shrink-0" />
                  <span>Same-Day Written Report</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00E575] shrink-0" />
                  <span>15-Minute Dynamic Road Test</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Vehicle Showcase */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-2 lg:pt-0">
              
              <div className="relative w-full max-w-lg mx-auto flex flex-col items-center group">
                
                {/* Vehicle Image */}
                <div className="relative z-10 w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85"
                    alt="Inspected Vehicle"
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-white/15"
                  />
                  
                  {/* Verified Tag */}
                  <div className="absolute bottom-3 left-3 bg-[#0A0B0E]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold flex items-center gap-2 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#00E575] animate-pulse" />
                    122/122 CHECKPOINTS AUDITED
                  </div>
                </div>

                {/* Ground Shadow */}
                <div className="w-[85%] h-5 bg-black/60 blur-lg rounded-full -mt-2 pointer-events-none" />

                {/* Hotspot Pins */}
                {hotspots.map((spot) => (
                  <div
                    key={spot.id}
                    className="absolute z-20"
                    style={{ left: spot.x, top: spot.y }}
                  >
                    <button
                      onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                      onMouseEnter={() => setActiveHotspot(spot.id)}
                      className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#00E575] text-black text-xs font-black shadow-lg hover:scale-125 transition-transform cursor-pointer"
                      title={spot.title}
                    >
                      <span className="absolute inset-0 rounded-full bg-[#00E575] animate-ping opacity-35" />
                      {spot.id}
                    </button>

                    {/* Popover */}
                    {activeHotspot === spot.id && (
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-9 w-56 p-3 rounded-xl bg-[#0C0D11] text-white shadow-2xl border border-[#00E575]/40 z-30 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#00E575] mb-1">
                          <span className="uppercase font-bold">{spot.badge}</span>
                          <span>#{spot.id}</span>
                        </div>
                        <p className="text-xs font-bold font-display text-white">{spot.title}</p>
                        <p className="text-[11px] text-[#9EA3B0] mt-1 leading-snug">{spot.detail}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Floating Trust Badge */}
                <div className="absolute -top-3 -right-2 sm:right-2 sm:top-2 z-20 bg-[#161821]/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-2.5 max-w-[210px]">
                  <div className="w-8 h-8 rounded-lg bg-[#00E575] text-black flex items-center justify-center font-bold text-xs shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-display text-white">CERTIFIED TECHS</div>
                    <p className="text-[10px] text-[#9EA3B0] font-mono leading-tight">
                      100% Unbiased & Independent
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Card Strip */}
          <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="text-[#8D93A5]">
              COVERAGE: <span className="text-white font-bold">ALL 50 STATES (DEALERS, AUCTIONS, PRIVATE RESIDENCES)</span>
            </div>
            <div className="text-[#8D93A5]">
              FLAT PRICE: <span className="text-[#00E575] font-bold text-sm">$225 STANDARD</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
