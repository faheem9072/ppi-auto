import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { StatsBar } from './components/StatsBar';
import { DefectComparisonSlider } from './components/DefectComparisonSlider';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { InspectionShowcase122 } from './components/InspectionShowcase122';
import { WhyChooseSection } from './components/WhyChooseSection';
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
    <div className="min-h-screen bg-[#07080A] text-white font-sans antialiased selection:bg-[#00E575] selection:text-black">
      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenReport={handleOpenReport}
      />

      <main>
        {/* 2. Full-Screen Cinematic Car Driving Video Experience (7-Scene Scroll Storytelling) */}
        <CinematicHero
          onOpenBooking={handleOpenBooking}
          onOpenReport={handleOpenReport}
        />

        {/* 3. Verified Statistics Bar */}
        <StatsBar />

        {/* 4. Interactive Defect Comparison Slider (Surface vs Reality) */}
        <DefectComparisonSlider />

        {/* 5. 6 Diagnostic Inspection Services Grid */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. 4-Step Process ("How It Works") */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 7. 122-Point Inspection Explorer */}
        <InspectionShowcase122
          onOpenReport={handleOpenReport}
          onOpenBooking={handleOpenBooking}
        />

        {/* 8. Why Choose PPI Auto */}
        <WhyChooseSection onOpenBooking={handleOpenBooking} />

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
