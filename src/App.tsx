import React, { useState } from 'react';
import { AhapeNavbar } from './components/AhapeNavbar';
import { AhapeStyleHero } from './components/AhapeStyleHero';
import { AhapeTicker } from './components/AhapeTicker';
import { AhapeAbout } from './components/AhapeAbout';
import { DefectComparisonSlider } from './components/DefectComparisonSlider';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { InspectionShowcase122 } from './components/InspectionShowcase122';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SampleReportModal } from './components/SampleReportModal';
import { ServiceItem } from './types';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleOpenReport = () => setIsReportOpen(true);
  const handleCloseReport = () => setIsReportOpen(false);

  const handleSelectService = (_service: ServiceItem) => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans antialiased selection:bg-[#00E575] selection:text-black">
      {/* Subtle Film Grain (AHAPE Style) */}
      <div className="grain-overlay" />

      {/* 1. Floating Glassmorphism Pill Navbar */}
      <AhapeNavbar
        onOpenBooking={handleOpenBooking}
        onOpenReport={handleOpenReport}
      />

      <main>
        {/* 2. Full-Screen Cinematic Car Driving Video Hero (AHAPE Style) */}
        <AhapeStyleHero
          onOpenBooking={handleOpenBooking}
          onOpenReport={handleOpenReport}
        />

        {/* 3. Moving Infinite Marquee Ticker */}
        <AhapeTicker />

        {/* 4. The PPI Auto Standard (AHAPE 01-04 Numbered Feature Row) */}
        <AhapeAbout onOpenBooking={handleOpenBooking} />

        {/* 5. Interactive Defect Comparison Slider (Surface vs Reality) */}
        <DefectComparisonSlider />

        {/* 6. 6 Diagnostic Inspection Services Grid */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. 4-Step Process ("How It Works") */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 8. 122-Point Inspection Explorer */}
        <InspectionShowcase122
          onOpenReport={handleOpenReport}
          onOpenBooking={handleOpenBooking}
        />

        {/* 9. $225 Flat Rate Pricing Card */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* 10. Verified Reviews */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Final Call-to-Action */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 13. Minimal Luxury Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenReport={handleOpenReport}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      {/* Interactive Sample Report Dossier Modal */}
      <SampleReportModal
        isOpen={isReportOpen}
        onClose={handleCloseReport}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}

export default App;
