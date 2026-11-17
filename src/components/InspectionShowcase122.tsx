import React, { useState } from 'react';
import { Search, CheckCircle2, AlertTriangle, FileText, ShieldCheck } from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/mockData';

interface InspectionShowcaseProps {
  onOpenReport: () => void;
  onOpenBooking: () => void;
}

export const InspectionShowcase122: React.FC<InspectionShowcaseProps> = ({ onOpenReport, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Points' },
    { id: 'engine', label: 'Engine' },
    { id: 'body', label: 'Frame & Paint' },
    { id: 'electrical', label: 'OBD-II' },
    { id: 'brakes', label: 'Brakes' },
    { id: 'roadtest', label: 'Road Test' },
  ];

  const filteredItems = CHECKLIST_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="checklist" className="py-12 sm:py-20 bg-[#0C0D11] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00E575] uppercase flex items-center gap-1.5">
              <span>///</span> 122-POINT CHECKLIST
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              COMPREHENSIVE AUDIT CRITERIA
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenReport}
              className="px-4 py-2.5 bg-[#181B23] hover:bg-[#222633] text-white text-xs font-mono font-bold uppercase rounded-xl border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#00E575]" />
              Sample Report
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 bg-[#00E575] hover:bg-[#00C853] text-black text-xs font-display font-black uppercase rounded-xl transition-colors"
            >
              Book ($225)
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#12141A] p-3 sm:p-4 rounded-2xl border border-white/10 mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#00E575] text-black shadow-md'
                    : 'bg-[#181B23] text-[#9EA3B0] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#6A7080] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search points (pads, codes, leaks)..."
              className="w-full pl-9 pr-3 py-2 bg-[#181B23] text-white text-xs font-mono rounded-xl border border-white/10 focus:outline-none focus:border-[#00E575]"
            />
          </div>
        </div>

        {/* Checkpoints Grid */}
        <div className="space-y-2.5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#12141A] p-3.5 sm:p-4 rounded-xl border border-white/5 hover:border-[#00E575] transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#181B23] text-[#00E575] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00E575] group-hover:text-black transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-bold font-display text-white uppercase">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-[#8D93A5]">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#9EA3B0] mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
                {item.status === 'Pass' ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#00E575]/10 text-[#00E575] text-[11px] font-mono font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    PASS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F59E0B]/10 text-[#F59E0B] text-[11px] font-mono font-bold">
                    <AlertTriangle className="w-3 h-3" />
                    ATTENTION
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
