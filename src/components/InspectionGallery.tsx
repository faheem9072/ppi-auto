import React, { useState } from 'react';
import { Camera, ZoomIn, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const InspectionGallery: React.FC<{ onOpenReport: () => void }> = ({ onOpenReport }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      title: 'Digital Vernier Caliper Brake Rotor Audit',
      tag: 'Brakes & Hub',
      desc: 'Measuring rotor thickness runout and remaining pad friction material in millimeters.',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      specs: 'Rotor Spec: 28.4mm • Pad: 8.5mm remaining'
    },
    {
      title: 'High-Gloss Clearcoat & Frame Weld Inspection',
      tag: 'Paint & Body',
      desc: 'Inspecting factory body lines, orange peel consistency, and pillar pinch welds.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      specs: 'Mil Gauge Reading: 4.2 Mils (Factory Spec)'
    },
    {
      title: 'Powertrain Valley & Cylinder Head Leak Audit',
      tag: 'Engine & Belts',
      desc: 'Checking high-pressure fuel lines, valve cover seals, and serpentine belt tension.',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
      specs: 'Zero seepage at timing cover • Coolant 50/50 purity'
    },
    {
      title: 'Commercial OBD-II CAN-Bus Module Diagnostics',
      tag: 'Electronic Scans',
      desc: 'Live datastream analysis of transmission slip ratios, misfires, and SRS airbag logs.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      specs: 'All 8 I/M readiness monitors complete'
    },
    {
      title: 'Suspension Bushing & Ball Joint Load Test',
      tag: 'Underbody & Steering',
      desc: 'Prying tie-rod ends and control arm bushings to uncover invisible chassis play.',
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80',
      specs: 'Sway bar end-links tight • Boot seals intact'
    },
    {
      title: '15-Minute Dynamic Road Test Deceleration',
      tag: 'Road Dynamics',
      desc: 'Testing high-speed tracking, emergency ABS pedal pulsation, and gearbox kickdown.',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
      specs: 'Cruise control engaged • Zero pull on hard stop'
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#111215] text-white border-b border-[#252830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E5192D] uppercase flex items-center gap-1.5">
              <span>///</span> FIELD INSPECTION DOCUMENTATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display max-w-2xl leading-[0.95]">
              PRECISION ON-SITE DIAGNOSTICS IN ACTION.
            </h2>
          </div>
          <button
            onClick={onOpenReport}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#181A20] hover:bg-[#252830] text-[#D8D2C8] hover:text-white font-mono text-xs uppercase tracking-wider rounded-lg border border-[#2B2F3A] transition-colors"
          >
            <Camera className="w-4 h-4 text-[#E5192D]" />
            Preview 30-60+ Photo Report
          </button>
        </div>

        {/* Gallery Grid (Behance Recent Portfolio Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#181A20] rounded-xl border border-[#2B2F3A] overflow-hidden group hover:border-[#E5192D] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#22242B]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  <span className="absolute top-3 left-3 bg-[#111215]/90 text-[#E5192D] px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10 backdrop-blur-sm">
                    {item.tag}
                  </span>

                  <button
                    onClick={() => setActiveImage(item.image)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#E5192D]"
                    title="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] font-mono text-[#10B981] bg-black/75 px-2 py-0.5 rounded border border-white/10">
                      {item.specs}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold font-display text-white uppercase group-hover:text-[#E5192D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A6A29C] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#252830] flex items-center justify-between text-[11px] font-mono text-[#7D786F]">
                <span>INSPECTION POINT #{idx * 20 + 7}</span>
                <span className="text-[#E5192D] font-bold">DIGITAL AUDIT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={activeImage}
                alt="Enlarged inspection view"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-white/20"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 bg-black/80 text-white font-mono px-3 py-1.5 rounded-lg border border-white/20 text-xs font-bold"
              >
                ✕ CLOSE
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
