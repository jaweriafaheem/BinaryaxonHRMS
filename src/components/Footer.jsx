import React from 'react';
import { Linkedin, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="custom-footer-grid">
          
          {/* Left Column: Brand & Social */}
          <div className="footer-brand-side">
            <a href="#" className="brand-logo mb-2">
              <img src="/Logo_new1.png" alt="binaryaxon" className="brand-logo-img" />
            </a>
            <p className="constellation-subtext">a subsidiary of Constellation Software Inc.</p>
            <div className="footer-social-icons">
              <a 
                href="https://www.linkedin.com/company/binaryaxon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="https://www.facebook.com/binaryaxon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn facebook"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://www.youtube.com/@binaryaxon1581" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn youtube"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Menu & Description */}
          <div className="footer-menu-side">
            <div className="footer-menu-row">
              <a href="#overview" className="footer-menu-link">Overview</a>
              <a href="#modules" className="footer-menu-link">23 Modules</a>
              <a href="#live-demo" className="footer-menu-link">Interactive Demo</a>
              <a href="#roi-calculator" className="footer-menu-link">ROI Calculator</a>
              <a href="#security" className="footer-menu-link">Security</a>
              <a href="#faq" className="footer-menu-link">FAQ</a>
            </div>
            
            <p className="footer-desc-text">
              Binary Axon provides a wealth of technical and business expertise to its customers, transforming ideas into tech reality with scalable software solutions since 2020.
            </p>
            
            <a href="mailto:info@binaryaxon.com" className="footer-email-link">
              info@binaryaxon.com
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="custom-footer-bottom">
          <p>Copyright © 2020 to 2026 www.BinaryAxon.com All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
