import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeroParallaxDemo } from './components/ui/demo';
import { StatsBanner } from './components/StatsBanner';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ROICalculator } from './components/ROICalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HRMadeSimple } from './components/HRMadeSimple';
import { HRMSProcessSection } from './components/HRMSProcessSection';
import { DoubleWins } from './components/DoubleWins';
import { RolesPersonasSection } from './components/RolesPersonasSection';
import { ReportsAnalyticsSection } from './components/ReportsAnalyticsSection';
import { SecurityCompliance } from './components/SecurityCompliance';
import { ContactSection } from './components/ContactSection';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';

export const App = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleLiveDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="app-main-wrapper">
      <Navbar 
        onOpenDemoModal={() => setIsDemoModalOpen(true)} 
      />

      <main>
        <HeroParallaxDemo 
          onExploreClick={handleExploreClick} 
          onDemoClick={handleLiveDemoClick} 
        />
        <InteractiveDemo />
        <HRMSProcessSection />
        <ROICalculator onOpenDemoModal={() => setIsDemoModalOpen(true)} />
        <WhyChooseUs />
        <HRMadeSimple />
        <RolesPersonasSection />
        <ReportsAnalyticsSection />
        <SecurityCompliance />
        <ContactSection />
        <TestimonialsFAQ />
      </main>

      <Footer onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
};

export default App;
