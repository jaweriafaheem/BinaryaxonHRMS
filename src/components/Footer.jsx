import React from 'react';
import { Shield, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer = ({ onOpenDemoModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Top CTA Banner */}
        <div className="footer-cta-banner glass-panel">
          <div>
            <h2>Ready to Transform Your HR & Payroll Operations?</h2>
            <p>Join modern enterprises using Binaryaxon HRMS for 23+ integrated HR modules.</p>
          </div>
          <button className="btn btn-primary btn-lg" onClick={onOpenDemoModal}>
            Schedule Live Demo Today
          </button>
        </div>

        {/* Main Footer Links Grid */}
        <div className="footer-grid">
          
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#" className="brand-logo mb-3">
              <img src="/Logo_new1.png" alt="Binaryaxon" className="brand-logo-img" />
            </a>
            <p className="footer-brand-desc">
              Prime HR – Intelligent by Design. The ultimate cloud Human Resource Management System for multi-company, multi-location enterprises.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item"><Mail size={14} /> support@binaryaxon.com</div>
              <div className="contact-item"><Phone size={14} /> +92 300 0800498</div>
              <div className="contact-item"><MapPin size={14} /> Enterprise HR Solutions Hub</div>
            </div>
          </div>

          {/* Module Categories */}
          <div className="footer-col">
            <h4>Core HR Modules</h4>
            <ul>
              <li><a href="#modules">1. Dashboard (KPIs)</a></li>
              <li><a href="#modules">2. Personal (Self-Service)</a></li>
              <li><a href="#modules">3. Employee Queries</a></li>
              <li><a href="#modules">5. Leave Management</a></li>
              <li><a href="#modules">12. Appraisal & Performance</a></li>
              <li><a href="#modules">15. Resign / Offboarding</a></li>
              <li><a href="#modules">22. Candidate Onboarding</a></li>
            </ul>
          </div>

          {/* Payroll & Operations */}
          <div className="footer-col">
            <h4>Workforce & Finance</h4>
            <ul>
              <li><a href="#modules">4. Time & Attendance</a></li>
              <li><a href="#modules">6. WPS Payroll Engine</a></li>
              <li><a href="#modules">7. GPS Geo Fencing</a></li>
              <li><a href="#modules">8. Advance / Loan Ledger</a></li>
              <li><a href="#modules">9. Document Archiving</a></li>
              <li><a href="#modules">10. Assets Management</a></li>
              <li><a href="#modules">13. Security Gate Pass</a></li>
              <li><a href="#modules">14. Canteen Meal Pass</a></li>
            </ul>
          </div>

          {/* Governance & Master Data */}
          <div className="footer-col">
            <h4>Governance & Setup</h4>
            <ul>
              <li><a href="#modules">16. Utilities & Batch Engine</a></li>
              <li><a href="#modules">17. 30+ Standard Reports</a></li>
              <li><a href="#modules">18. Mobile App Error Logs</a></li>
              <li><a href="#modules">19. Setup (Multi-Company)</a></li>
              <li><a href="#modules">21. Page Permission Security</a></li>
              <li><a href="#modules">23. General Setting & Letters</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Binaryaxon HRMS System. All rights reserved. Designed with CSS `:root` Theme System.</p>
          <button className="back-to-top-btn" onClick={scrollToTop} title="Back to Top">
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
