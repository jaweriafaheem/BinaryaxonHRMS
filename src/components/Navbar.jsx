import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, Menu, X } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const Navbar = ({ onOpenDemoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          <img src="/Logo_new1.png" alt="Binaryaxon" className="brand-logo-img" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#modules" className="nav-link">23 Modules</a>
          <a href="#live-demo" className="nav-link">Interactive Demo</a>
          <a href="#roi-calculator" className="nav-link">ROI Calculator</a>
          <a href="#security" className="nav-link">Security</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <ShinyButton onClick={onOpenDemoModal}>
            <Sparkles size={16} />
            <span>Book Live Demo</span>
          </ShinyButton>

          {/* Mobile Hamburger */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer glass-panel">
          <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Overview</a>
          <a href="#modules" onClick={() => setMobileMenuOpen(false)}>23 Modules</a>
          <a href="#live-demo" onClick={() => setMobileMenuOpen(false)}>Interactive Demo</a>
          <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)}>ROI Calculator</a>
          <a href="#security" onClick={() => setMobileMenuOpen(false)}>Security</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="mobile-actions">
            <ShinyButton className="w-full" onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}>
              Book Live Demo
            </ShinyButton>
          </div>
        </div>
      )}
    </header>
  );
};
