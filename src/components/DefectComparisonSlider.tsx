import React, { useState, useRef, useCallback } from 'react';
import { AlertOctagon, CheckCircle2, Sliders, ShieldAlert } from 'lucide-react';

export const DefectComparisonSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#090A0D] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00E575] uppercase flex items-center justify-center gap-1.5">
            <span>///</span> INTERACTIVE DEFECT COMPARISON
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            SURFACE APPEARANCE VS. PPI REALITY
          </h2>
          <p className="text-xs sm:text-sm text-[#9EA3B0] leading-relaxed">
            Drag the slider to see what our certified 122-point scan discovers beneath a shiny coat of wax.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative max-w-4xl mx-auto h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 select-none shadow-2xl cursor-ew-resize group"
        >
          {/* Base Layer: PPI Auto Diagnostics */}
          <div className="absolute inset-0 w-full h-full bg-[#14161E]">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
              alt="Diagnostic Inspection"
              className="w-full h-full object-cover brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-[#0C0D11]/60" />

            {/* Diagnostic Badges */}
            <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-1.5 text-right">
              <span className="px-2.5 py-1 bg-[#00E575] text-black font-mono font-extrabold text-[11px] uppercase tracking-wider rounded shadow-lg flex items-center gap-1">
                <AlertOctagon className="w-3.5 h-3.5" />
                PPI 122-PT AUDIT
              </span>
              <span className="text-[10px] font-mono text-[#00E575] bg-black/80 px-2 py-0.5 rounded border border-[#00E575]/20">
                HIDDEN DEFECTS FOUND
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-10 space-y-2 max-w-[240px] sm:max-w-xs text-left">
              <div className="bg-[#0C0D11]/95 border border-[#00E575] p-2.5 rounded-xl shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-1 text-[#00E575] text-[10px] font-mono font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>PAINT GAUGE: 11.4 MILS</span>
                </div>
                <p className="text-xs font-bold text-white mt-0.5">Bondo & respray detected on quarter panel.</p>
              </div>

              <div className="bg-[#0C0D11]/95 border border-[#F59E0B] p-2.5 rounded-xl shadow-xl backdrop-blur-md hidden sm:block">
                <span className="text-[10px] font-mono font-bold text-[#F59E0B]">OBD-II CODE: P0741</span>
                <p className="text-xs font-bold text-white mt-0.5">Torque converter slip (Pending code cleared by seller).</p>
              </div>
            </div>
          </div>

          {/* Top Layer: Surface Appearance */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Seller Clean Photo"
              className="absolute inset-0 w-[800px] sm:w-[1000px] max-w-none h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-1">
              <span className="px-2.5 py-1 bg-white text-black font-mono font-bold text-[11px] uppercase tracking-wider rounded shadow-lg flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E575]" />
                SELLER LISTING
              </span>
              <span className="text-[10px] font-mono text-white bg-black/80 px-2 py-0.5 rounded border border-white/10">
                "CLEAN TITLE, DEALER MAINTAINED"
              </span>
            </div>

            <div className="absolute bottom-4 left-4 z-10 bg-black/85 backdrop-blur-md p-2.5 rounded-xl border border-white/15 max-w-[200px] sm:max-w-xs">
              <span className="text-[10px] font-mono text-[#00E575] font-bold uppercase">
                Showroom Gloss
              </span>
              <p className="text-xs font-bold text-white mt-0.5">Fresh wax hides underlying body filler.</p>
            </div>
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-ew-resize flex items-center justify-center shadow-2xl"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-9 h-9 -ml-0.5 rounded-full bg-[#00E575] text-black flex items-center justify-center shadow-xl border-2 border-white group-hover:scale-110 transition-transform">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>

        </div>

        {/* Drag Hint */}
        <div className="mt-3 text-center text-[11px] font-mono text-[#6A7080]">
          ← DRAG SLIDER LEFT & RIGHT TO COMPARE →
        </div>

      </div>
    </section>
  );
};
