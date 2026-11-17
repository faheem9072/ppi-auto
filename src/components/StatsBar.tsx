import React from 'react';
import { ShieldCheck, DollarSign, MapPin, FileCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: ShieldCheck,
      value: '122',
      unit: 'POINTS',
      label: 'Comprehensive Inspection',
      sub: 'Mechanical, OBD-II, frame & safety'
    },
    {
      icon: DollarSign,
      value: '$225',
      unit: 'FLAT',
      label: 'Most Cars, Trucks & SUVs',
      sub: 'Zero hidden travel or mobile fees'
    },
    {
      icon: MapPin,
      value: '50',
      unit: 'STATES',
      label: 'Nationwide Mobile Reach',
      sub: 'Directly at vehicle location'
    },
    {
      icon: FileCheck,
      value: 'SAME-DAY',
      unit: 'REPORTS',
      label: 'Digital Report & 30-60 Photos',
      sub: 'Sent to phone & email'
    }
  ];

  return (
    <section className="relative z-20 -mt-2 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141A] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`pt-3 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#00E575]/10 text-[#00E575] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] font-mono text-[#6A7080] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#00E575]">
                      {stat.unit}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-[#8D93A5] mt-0.5 leading-snug">
                    {stat.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
