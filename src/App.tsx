import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { DefectComparisonSlider } from './components/DefectComparisonSlider';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { InspectionShowcase122 } from './components/InspectionShowcase122';
import { PricingSection } from './components/PricingSection';
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
      {/* 1. Mobile-friendly Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenReport={handleOpenReport}
      />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section (Green & Black + Behance Heavy Grotesque Typography) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenReport={handleOpenReport}
        />

        {/* 3. Streamlined Stats Bar */}
        <StatsBar />

        {/* 4. Interactive Defect Comparison Slider (Surface vs Reality) */}
        <DefectComparisonSlider />

        {/* 5. Inspection Services (6 Modular Cards with /// Green Accents) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. Clean 4-Step Process ("How It Works") */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 7. 122-Point Inspection Explorer */}
        <InspectionShowcase122
          onOpenReport={handleOpenReport}
          onOpenBooking={handleOpenBooking}
        />

        {/* 8. $225 Flat Rate Pricing Card */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* 9. Final Call to Action */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 10. Minimal Clean Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenReport={handleOpenReport}
      />

      {/* Interactive Booking Flow Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      {/* Interactive Sample Report Modal */}
      <SampleReportModal
        isOpen={isReportOpen}
        onClose={handleCloseReport}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}

export default App;
