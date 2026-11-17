import React from 'react';

export const AhapeTicker: React.FC = () => {
  const items = [
    '122-POINT SCAN',
    'ALL 50 US STATES',
    '$225 FLAT RATE',
    'SAME-DAY DIGITAL REPORTS',
    'FULL OBD-II DIAGNOSTIC SCAN',
    '15-MIN DYNAMIC ROAD TEST',
    '30-60+ HIGH-RES PHOTOGRAPHS',
    'CERTIFIED ASE TECHNICIANS',
    'ZERO HIDDEN MILEAGE FEES',
    'INDEPENDENT & UNBIASED',
    'CALL: 951-267-8500'
  ];

  return (
    <div id="ticker" className="bg-[#00E575] text-black py-3 sm:py-3.5 overflow-hidden select-none border-y border-black font-display font-black text-sm sm:text-base tracking-wider uppercase">
      <div className="ticker-track">
        {/* Repeating twice for seamless infinite marquee loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4 shrink-0">
            <span>{item}</span>
            <span className="text-black/40 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
