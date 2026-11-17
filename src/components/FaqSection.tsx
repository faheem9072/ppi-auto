import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to be physically present at the inspection?',
      a: 'No. The majority of our clients are remote or busy buyers. We coordinate directly with the dealership or private seller, perform the complete 122-point audit on-site, and send your full written report and photos digitally the same day.'
    },
    {
      q: 'How fast do I receive the inspection report?',
      a: 'In most cases, your completed digital report (including 30-60+ high-resolution photos, OBD-II diagnostic readouts, paint depth measurements, and technician notes) is delivered to your email and phone the very same day the on-site inspection is completed.'
    },
    {
      q: 'What is covered under the $225 flat price?',
      a: 'The $225 flat rate covers all standard sedans, coupes, crossovers, pickup trucks, and SUVs across all 50 US states. It includes the 122-point checklist, OBD-II computer scan, 15-minute dynamic road test, paint depth gauge check, and written report. No travel or mileage surcharges.'
    },
    {
      q: 'Can I use this report to negotiate the price with the seller?',
      a: 'Absolutely. In fact, our clients report saving an average of $1,400 to $2,500 off the seller’s asking price by pointing out documented items like worn brake pads, aged tires, fluid weeping, or resprayed panels.'
    },
    {
      q: 'What if the seller or dealership refuses the inspection?',
      a: 'If a seller refuses an independent pre-purchase inspection, that is almost always an immediate red flag that they are concealing known defects. If an appointment cannot be scheduled due to seller refusal, your fee is protected.'
    },
    {
      q: 'Do you inspect classic, vintage, or exotic sports cars?',
      a: 'Yes. Rare classic vehicles, exotics (such as Ferrari, McLaren, Lamborghini, or Porsche GT models), and heavy commercial chassis are quoted transparently based on specialized diagnostic requirements.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#090A0D] text-white border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00E575] uppercase flex items-center justify-center gap-1.5">
            <span>///</span> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            BUYER QUESTIONS ANSWERED
          </h2>
          <p className="text-xs sm:text-sm text-[#9EA3B0]">
            Everything you need to know about our mobile vehicle inspections.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#12141A] rounded-2xl border border-white/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-white hover:text-[#00E575] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#00E575] shrink-0 transition-transform duration-200 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#9EA3B0] leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Direct question prompt */}
        <div className="mt-8 text-center text-xs font-mono text-[#6A7080]">
          Have a question not listed here? Call our dispatch line directly at{' '}
          <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#00E575] font-bold hover:underline">
            {BUSINESS_INFO.formattedPhone}
          </a>
        </div>

      </div>
    </section>
  );
};
