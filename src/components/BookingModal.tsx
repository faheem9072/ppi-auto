import React, { useState } from 'react';
import { X, CheckCircle2, Car, ArrowRight, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<string>('suv');
  const [formData, setFormData] = useState({
    year: '2022',
    make: 'Jeep',
    model: 'Grand Cherokee',
    vin: '',
    sellerName: 'AutoNation / Private Seller',
    vehicleZip: '75201',
    buyerName: 'Alex M.',
    buyerEmail: 'buyer@example.com',
    buyerPhone: '312-555-0199'
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const vehicleTypes = [
    { id: 'suv', label: 'SUV / Crossover', price: '$225 Flat' },
    { id: 'truck', label: 'Pickup Truck', price: '$225 Flat' },
    { id: 'sedan', label: 'Sedan / Coupe', price: '$225 Flat' },
    { id: 'specialty', label: 'Classic / Exotic', price: 'Custom Quote' },
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-[#0C0D11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#12141A]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#00E575] flex items-center justify-center font-black text-black text-xs">
              PPI
            </div>
            <div>
              <h3 className="text-sm font-bold font-display uppercase text-white">
                Book Pre-Purchase Inspection
              </h3>
              <p className="text-[10px] font-mono text-[#00E575]">
                $225 Flat Rate • All 50 States
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

        {/* Content */}
        <div className="p-5">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#00E575]/20 text-[#00E575] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black font-display uppercase text-white">
                Inspection Dispatched!
              </h4>
              <p className="text-xs text-[#9EA3B0] max-w-sm mx-auto">
                Thank you, <strong className="text-white">{formData.buyerName}</strong>. Our team will contact <strong className="text-white">{formData.sellerName}</strong> to schedule the 122-point inspection for the {formData.year} {formData.make} {formData.model}.
              </p>
              <div className="p-3 bg-[#12141A] rounded-xl border border-white/10 text-xs font-mono max-w-xs mx-auto space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#6A7080]">Rate:</span>
                  <span className="text-[#00E575] font-bold">$225.00 Flat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6A7080]">Delivery:</span>
                  <span className="text-white">Same-Day Digital</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-3 px-6 py-2.5 bg-[#00E575] text-black font-display font-black text-xs uppercase tracking-wider rounded-xl"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5 text-[11px] font-mono">
                <span className={step >= 1 ? 'text-[#00E575] font-bold' : 'text-[#505565]'}>1. Vehicle</span>
                <span>→</span>
                <span className={step >= 2 ? 'text-[#00E575] font-bold' : 'text-[#505565]'}>2. Location</span>
                <span>→</span>
                <span className={step >= 3 ? 'text-[#00E575] font-bold' : 'text-[#505565]'}>3. Confirm</span>
              </div>

              {step === 1 && (
                <div className="space-y-3">
                  <label className="text-xs font-mono uppercase font-bold text-white block">
                    Select Vehicle Type:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {vehicleTypes.map((vt) => (
                      <button
                        type="button"
                        key={vt.id}
                        onClick={() => setVehicleType(vt.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          vehicleType === vt.id
                            ? 'bg-[#00E575]/15 border-[#00E575] text-white'
                            : 'bg-[#12141A] border-white/10 text-[#8D93A5]'
                        }`}
                      >
                        <Car className={`w-4 h-4 mb-1 ${vehicleType === vt.id ? 'text-[#00E575]' : 'text-[#6A7080]'}`} />
                        <div className="text-xs font-bold font-display uppercase text-white">{vt.label}</div>
                        <div className="text-[10px] font-mono text-[#00E575]">{vt.price}</div>
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <input
                      type="text"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="Year"
                      required
                      className="px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                    />
                    <input
                      type="text"
                      value={formData.make}
                      onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                      placeholder="Make"
                      required
                      className="px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                    />
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      placeholder="Model"
                      required
                      className="px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-mono text-[#8D93A5] block mb-1">Seller or Dealership Name</label>
                    <input
                      type="text"
                      value={formData.sellerName}
                      onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                      required
                      className="w-full px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[#8D93A5] block mb-1">Vehicle Location Zip Code or City</label>
                    <input
                      type="text"
                      value={formData.vehicleZip}
                      onChange={(e) => setFormData({ ...formData, vehicleZip: e.target.value })}
                      required
                      className="w-full px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#12141A] rounded-xl border border-white/10 space-y-1 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#8D93A5]">Vehicle:</span>
                      <span className="text-white font-bold">{formData.year} {formData.make} {formData.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#00E575] font-bold">Total Flat Rate:</span>
                      <span className="text-sm font-black text-[#00E575] font-display">$225.00</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={formData.buyerName}
                      onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                      placeholder="Your Name"
                      required
                      className="w-full px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                    />
                    <input
                      type="tel"
                      value={formData.buyerPhone}
                      onChange={(e) => setFormData({ ...formData, buyerPhone: e.target.value })}
                      placeholder="Your Phone"
                      required
                      className="w-full px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    value={formData.buyerEmail}
                    onChange={(e) => setFormData({ ...formData, buyerEmail: e.target.value })}
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 bg-[#12141A] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#00E575] outline-none"
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1 text-xs font-mono text-[#8D93A5] hover:text-white"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-[#00E575] hover:bg-[#00C853] text-black font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  <span>{step === 3 ? 'Confirm ($225)' : 'Next'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
