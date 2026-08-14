import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeroParallaxDemo } from './components/ui/demo';
import { StatsBanner } from './components/StatsBanner';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ROICalculator } from './components/ROICalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DoubleWins } from './components/DoubleWins';
import { SecurityCompliance } from './components/SecurityCompliance';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';

export const App = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleExploreClick = () => {
    const modulesSec = document.getElementById('modules');
    if (modulesSec) {
      modulesSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLiveDemoClick = () => {
    const demoSec = document.getElementById('live-demo');
    if (demoSec) {
      demoSec.scrollIntoView({ behavior: 'smooth' });
    }
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
