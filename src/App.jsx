import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeroParallaxDemo } from './components/ui/demo';
import { StatsBanner } from './components/StatsBanner';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ROICalculator } from './components/ROICalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HRMadeSimple } from './components/HRMadeSimple';
import { DoubleWins } from './components/DoubleWins';
import { SecurityCompliance } from './components/SecurityCompliance';
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
        <ROICalculator onOpenDemoModal={() => setIsDemoModalOpen(true)} />
        <WhyChooseUs />
        <HRMadeSimple />
        <DoubleWins />
        <SecurityCompliance />
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
