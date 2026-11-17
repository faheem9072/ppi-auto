import React, { useState } from 'react';
import { X, CheckCircle, FileText, Printer, ArrowRight } from 'lucide-react';
import { SAMPLE_REPORT } from '../data/mockData';

interface SampleReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SampleReportModal: React.FC<SampleReportModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'obd2' | 'paint'>('summary');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0C0D11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#12141A]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00E575] flex items-center justify-center font-black text-black text-sm">
              PPI
            </div>
            <div>
              <h3 className="text-sm font-bold font-display uppercase text-white">
                Sample 122-Point Inspection Report
              </h3>
              <p className="text-[10px] font-mono text-[#00E575]">
                {SAMPLE_REPORT.vehicle} • Report #{SAMPLE_REPORT.id}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#8D93A5] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="bg-[#12141A] border-b border-white/10 px-4 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('summary')}
            className={`py-2.5 px-3 border-b-2 font-bold uppercase transition-all whitespace-nowrap ${
              activeTab === 'summary'
                ? 'border-[#00E575] text-[#00E575]'
                : 'border-transparent text-[#8D93A5] hover:text-white'
            }`}
          >
            Summary & Score
          </button>
          <button
            onClick={() => setActiveTab('obd2')}
            className={`py-2.5 px-3 border-b-2 font-bold uppercase transition-all whitespace-nowrap ${
              activeTab === 'obd2'
                ? 'border-[#00E575] text-[#00E575]'
                : 'border-transparent text-[#8D93A5] hover:text-white'
            }`}
          >
            OBD-II Scans
          </button>
          <button
            onClick={() => setActiveTab('paint')}
            className={`py-2.5 px-3 border-b-2 font-bold uppercase transition-all whitespace-nowrap ${
              activeTab === 'paint'
                ? 'border-[#00E575] text-[#00E575]'
                : 'border-transparent text-[#8D93A5] hover:text-white'
            }`}
          >
            Paint Depth (Mils)
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 space-y-4 flex-1">
          {activeTab === 'summary' && (
            <div className="space-y-4">
              {/* Score Box */}
              <div className="bg-[#12141A] p-5 rounded-2xl border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#181B23] border-2 border-[#00E575] flex flex-col items-center justify-center shrink-0">
                    <span className="text-2xl font-black font-display text-white">89</span>
                    <span className="text-[8px] font-mono text-[#8D93A5]">/ 100</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#00E575] font-bold block uppercase">
                      VERDICT: RECOMMENDED WITH RESERVATIONS
                    </span>
                    <h4 className="text-base font-bold font-display uppercase">
                      Solid Structural Health • Needs Brake Pad Service
                    </h4>
                    <p className="text-xs text-[#8D93A5] mt-0.5">
                      Estimated negotiation leverage: $1,500 - $1,850 off asking price.
                    </p>
                  </div>
                </div>
              </div>

              {/* Inspector Summary */}
              <div className="bg-[#12141A] p-4 rounded-xl border border-white/5 space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#00E575] uppercase block">
                  Inspector Written Assessment:
                </span>
                <p className="text-xs text-[#C4C9D6] leading-relaxed">
                  {SAMPLE_REPORT.summary}
                </p>
              </div>

              {/* Quick Spec Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                <div className="p-3 bg-[#12141A] rounded-xl border border-white/5">
                  <span className="text-[#6A7080] block text-[10px]">POWERTRAIN:</span>
                  <span className="text-[#00E575] font-bold">94% PASS RATE</span>
                </div>
                <div className="p-3 bg-[#12141A] rounded-xl border border-white/5">
                  <span className="text-[#6A7080] block text-[10px]">PAINT & FRAME:</span>
                  <span className="text-[#F59E0B] font-bold">10.4 Mils Respray</span>
                </div>
                <div className="p-3 bg-[#12141A] rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[#6A7080] block text-[10px]">BRAKES:</span>
                  <span className="text-[#F59E0B] font-bold">3.0mm (Service Due)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'obd2' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#12141A] rounded-xl border border-[#00E575]/20 text-[#00E575] flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>CAN-Bus Live Scanner Connected • 0 Active Codes</span>
              </div>
              <div className="p-3 bg-[#12141A] rounded-xl border border-white/10 space-y-1">
                <span className="text-[#F59E0B] font-bold">PENDING DTC: P0456 (Evap Leak Small)</span>
                <p className="text-[#8D93A5] text-[11px]">
                  Cleared 30 miles ago by seller. Ready monitors incomplete.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'paint' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#12141A] rounded-xl border border-white/10 text-[#8D93A5] text-[11px]">
                Factory clearcoat spec: 3.5 - 5.5 Mils. Readings above 8.0 mils indicate repaint/filler.
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-[#12141A] rounded-lg border border-white/5">
                  <span className="text-[#6A7080] block">Hood:</span>
                  <span className="text-[#00E575] font-bold">4.2 Mils (Factory)</span>
                </div>
                <div className="p-2.5 bg-[#12141A] rounded-lg border border-[#F59E0B]/30 bg-[#F59E0B]/5">
                  <span className="text-[#F59E0B] block font-bold">Right Quarter:</span>
                  <span className="text-[#F59E0B] font-bold">10.4 Mils (Bondo)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#12141A] border-t border-white/10 flex items-center justify-between gap-3">
          <span className="text-xs font-mono text-[#8D93A5] hidden sm:inline">
            Get your comprehensive inspection report for $225.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            Book Your Inspection ($225 Flat)
          </button>
        </div>

      </div>
    </div>
  );
};
