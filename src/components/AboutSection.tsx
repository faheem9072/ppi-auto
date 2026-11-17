import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Search, Gauge, ArrowRight, Eye, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const AboutSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'dealers' | 'private' | 'remote'>('dealers');

  const traps = [
    {
      title: 'Cleared Diagnostic Trouble Codes (DTC)',
      desc: 'Sellers and wholesale dealers often disconnect the 12V battery or clear check engine lights 15 miles before you arrive. Our commercial scanners audit emissions readiness monitors to reveal if the computer was recently wiped.',
      tag: 'OBD-II Detection'
    },
    {
      title: 'Cosmetically Hidden Frame Damage & Bondo',
      desc: 'Fresh paint and wax can mask heavy collision repairs. We measure factory clearcoat in digital mils across 22 structural points, pinpointing unibody clamp marks and hidden quarter panel welds.',
      tag: 'Body & Frame'
    },
    {
      title: 'Fluid Seepage & Transmission Slippage',
      desc: 'Warming up a car before the buyer arrives hides cold-start smoke, valve clatter, and transmission gear engagement flares. Our 15-minute road test cycle uncovers real-world mechanical slip.',
      tag: 'Powertrain'
    },
    {
      title: 'Concealed Flood Damage & Corroded Wiring',
      desc: 'Flood cars are shampooed and air-freshened to mask odor. We pull carpet edges to inspect wire harness loom, fuse block terminals, and body control modules for silt and water line stains.',
      tag: 'Electrical Safety'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F4EFEB] border-t border-b border-[#DDD6CC] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Behance Red Triple Slashes */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E5192D] uppercase flex items-center gap-1.5">
              <span>///</span> ABOUT PPI AUTO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111215] font-display max-w-2xl leading-[0.95]">
              INDEPENDENT PROTECTION <br />
              BEFORE YOU SIGN THE TITLE.
            </h2>
          </div>
          <p className="text-sm text-[#5C564C] max-w-md leading-relaxed">
            Dealership sales reps work for the dealer. Private sellers want top dollar. PPI Auto is 100% buyer-focused: we represent your wallet and safety, wherever the vehicle is located.
          </p>
        </div>

        {/* 2-Column Behance Styled Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Metric Progress & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#DDD6CC] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E4DDD1]">
                <span className="text-xs font-mono font-bold uppercase text-[#111215]">
                  PROTECTING BUYERS NATIONWIDE
                </span>
                <span className="text-xs font-mono font-bold text-[#E5192D]">
                  SINCE 2018
                </span>
              </div>

              <p className="text-sm text-[#504B42] leading-relaxed">
                Whether you’re buying locally or shipping a truck from across the country, our certified inspection technicians physically arrive at the vehicle's location with commercial diagnostic gear.
              </p>

              {/* Behance-styled Metric Progress Bars */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1 font-mono">
                    <span className="text-[#111215]">HIDDEN ACCIDENT & RESUMED CODE DETECTION</span>
                    <span className="text-[#E5192D]">99.8%</span>
                  </div>
                  <div className="w-full bg-[#E4DDD1] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#CF1326] to-[#E5192D] h-full rounded-full w-[99%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1 font-mono">
                    <span className="text-[#111215]">PAINT DEPTH & FRAME INTEGRITY AUDIT</span>
                    <span className="text-[#E5192D]">100%</span>
                  </div>
                  <div className="w-full bg-[#E4DDD1] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#CF1326] to-[#E5192D] h-full rounded-full w-[100%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1 font-mono">
                    <span className="text-[#111215]">AVERAGE BUYER REPAIR LEVERAGE SAVINGS</span>
                    <span className="text-[#E5192D]">$1,400+</span>
                  </div>
                  <div className="w-full bg-[#E4DDD1] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#CF1326] to-[#E5192D] h-full rounded-full w-[92%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-[#111215] hover:bg-[#252830] text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Inspection ($225 Flat)</span>
                  <ArrowRight className="w-4 h-4 text-[#E5192D]" />
                </button>
              </div>
            </div>

            {/* Buyer Types Switcher */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveTab('dealers')}
                className={`py-2 px-3 text-xs font-mono font-bold uppercase rounded-lg border transition-all text-center ${
                  activeTab === 'dealers'
                    ? 'bg-[#E5192D] text-white border-[#E5192D]'
                    : 'bg-white text-[#666055] border-[#DDD6CC] hover:bg-[#F0EBE3]'
                }`}
              >
                Dealer Lots
              </button>
              <button
                onClick={() => setActiveTab('private')}
                className={`py-2 px-3 text-xs font-mono font-bold uppercase rounded-lg border transition-all text-center ${
                  activeTab === 'private'
                    ? 'bg-[#E5192D] text-white border-[#E5192D]'
                    : 'bg-white text-[#666055] border-[#DDD6CC] hover:bg-[#F0EBE3]'
                }`}
              >
                Private Sellers
              </button>
              <button
                onClick={() => setActiveTab('remote')}
                className={`py-2 px-3 text-xs font-mono font-bold uppercase rounded-lg border transition-all text-center ${
                  activeTab === 'remote'
                    ? 'bg-[#E5192D] text-white border-[#E5192D]'
                    : 'bg-white text-[#666055] border-[#DDD6CC] hover:bg-[#F0EBE3]'
                }`}
              >
                Out-of-State
              </button>
            </div>
          </div>

          {/* Right Column: Visual Breakdown of The 4 Traps (Cards Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traps.map((trap, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#DDD6CC] shadow-sm hover:border-[#E5192D] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4EFEB] text-[#E5192D] font-bold uppercase border border-[#DDD6CC]">
                    {trap.tag}
                  </span>
                  <span className="text-xs font-mono text-[#A8A298] font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold font-display text-[#111215] mb-2 group-hover:text-[#E5192D] transition-colors">
                  {trap.title}
                </h3>
                <p className="text-xs text-[#5C564C] leading-relaxed">
                  {trap.desc}
                </p>
              </div>
            ))}

            {/* Bottom Callout Feature Card */}
            <div className="sm:col-span-2 bg-[#111215] text-white p-5 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E5192D] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-white">
                    Need an inspection before this weekend?
                  </h4>
                  <p className="text-xs text-[#A6A29C]">
                    We schedule same-day or next-morning appointments nationwide.
                  </p>
                </div>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-4 py-2 bg-[#252830] hover:bg-[#E5192D] text-white font-mono text-xs font-bold rounded-lg transition-colors shrink-0"
              >
                Call: {BUSINESS_INFO.formattedPhone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
