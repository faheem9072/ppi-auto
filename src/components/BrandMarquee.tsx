import React from 'react';

export const BrandMarquee: React.FC = () => {
  const brands = [
    'AUDI', 'BMW', 'CHEVROLET', 'FORD', 'HONDA', 'JEEP',
    'MERCEDES-BENZ', 'PORSCHE', 'RAM TRUCKS', 'TOYOTA',
    'TESLA', 'LEXUS', 'SUBARU', 'CADILLAC', 'HYUNDAI'
  ];

  return (
    <div className="py-8 bg-[#EAE4DC] border-b border-[#DDD6CC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <span className="text-[11px] font-mono font-bold text-[#6D675E] uppercase tracking-widest">
            COMPREHENSIVE MULTI-OEM SYSTEM COVERAGE
          </span>
          <span className="text-[11px] font-mono text-[#8C857B]">
            Domestic • European • Asian • EV & Hybrid Powertrains
          </span>
        </div>

        {/* Clean Logo Badges Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-3 items-center">
          {brands.slice(0, 8).map((brand, idx) => (
            <div
              key={idx}
              className="bg-white/80 hover:bg-white p-3 rounded-lg border border-[#DDD6CC] flex items-center justify-center transition-all group"
            >
              <span className="text-xs font-mono font-bold text-[#443F37] group-hover:text-[#E5192D] tracking-wider transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
