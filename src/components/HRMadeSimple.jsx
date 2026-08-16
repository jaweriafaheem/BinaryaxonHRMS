import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Layers, ShieldCheck, Cpu } from 'lucide-react';

export const HRMadeSimple = () => {
  return (
    <section id="hr-made-simple" className="hr-made-simple-section">
      <div className="container">
        {/* Section Title Header */}
        <div className="section-header text-center mb-12">
          <div className="badge mb-3">
            <Sparkles size={13} />
            <span>WHY BINARYAXON</span>
          </div>
          <h2>
            HR Made <span className="text-gradient">Simple</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="infithra-bento-grid">
          
          {/* Card 1: Payroll Made Simple */}
          <motion.div 
            className="bento-card bento-card-payroll"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="bento-card-content">
              <span className="bento-card-category">Financial Hub</span>
              <h3 className="bento-card-title">Payroll Made Simple</h3>
              <p className="bento-card-desc">
                Streamline multi-currency payroll across the UAE and Saudi Arabia with full compliance. Manage everything centrally in both English and Arabic.
              </p>
            </div>
            
            {/* Payroll UI Widget */}
            <div className="payroll-widget">
              <div className="payroll-widget-header">
                <span className="payroll-widget-title">Run Payroll</span>
                <div className="payroll-widget-status">
                  <span className="status-dot"></span> Active
                </div>
              </div>
              
              <div className="payroll-rate-row">
                <div className="country-info">
                  <svg className="flag-icon" viewBox="0 0 30 20" width="18" height="12">
                    <rect width="6" height="20" fill="#ff0000" />
                    <rect x="6" width="24" height="6.6" fill="#00732f" />
                    <rect x="6" y="6.6" width="24" height="6.8" fill="#ffffff" />
                    <rect x="6" y="13.4" width="24" height="6.6" fill="#000000" />
                  </svg>
                  <span className="country-name">UAE</span>
                </div>
                <span className="payroll-val font-display">AED 60,718.94</span>
              </div>
              
              <div className="payroll-rate-row">
                <div className="country-info">
                  <svg className="flag-icon" viewBox="0 0 30 20" width="18" height="12">
                    <rect width="30" height="20" fill="#006C35" />
                    <path d="M 6 10 L 24 10 M 15 5 L 15 11" stroke="#ffffff" strokeWidth="1.5" />
                  </svg>
                  <span className="country-name">Saudi Arabia</span>
                </div>
                <span className="payroll-val font-display">SAR 570,120.00</span>
              </div>
              
              <div className="payroll-rate-row">
                <div className="country-info">
                  <svg className="flag-icon" viewBox="0 0 30 20" width="18" height="12">
                    <rect width="6" height="20" fill="#ff0000" />
                    <rect x="6" width="24" height="6.6" fill="#ffffff" />
                    <rect x="6" y="6.6" width="24" height="6.8" fill="#ff0000" />
                    <rect x="6" y="13.4" width="24" height="6.6" fill="#00732f" />
                  </svg>
                  <span className="country-name">Oman</span>
                </div>
                <span className="payroll-val font-display">OMR 87,832.50</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 (Middle Column containing Card 2 and Card 3) */}
          <div className="bento-middle-col">
            
            {/* Card 2: Fatima Saleem Profiler */}
            <motion.div 
              className="bento-card bento-card-profile"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="profile-inner-card">
                <div className="profile-card-header">
                  <span className="completion-badge">100% verified</span>
                </div>
                
                <div className="profile-user-section">
                  <div className="avatar-wrapper">
                    <span className="avatar-initials">FS</span>
                  </div>
                  <div className="profile-user-meta">
                    <h4 className="user-name">Fatima Saleem</h4>
                    <span className="user-date">Aug 07 - Aug 15, 2026</span>
                  </div>
                </div>
                
                <div className="profile-hours-section">
                  <span className="hours-label">Hours Worked</span>
                  <span className="hours-value font-display">14 : 00 Hours</span>
                </div>
                
                <div className="profile-progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Smart Insights */}
            <motion.div 
              className="bento-card bento-card-insights"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="bento-card-content">
                <span className="bento-card-category">Intelligence</span>
                <h3 className="bento-card-title">Smart Insights</h3>
                <p className="bento-card-desc">
                  Craft customized HR reports and dashboards to steer data-driven decisions. All your people analytics within one end-to-end solution.
                </p>
              </div>
            </motion.div>
            
          </div>

          {/* Card 4: Legacy Harmony */}
          <motion.div 
            className="bento-card bento-card-legacy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
          >
            <div className="bento-card-content">
              <span className="bento-card-category">Integrations</span>
              <h3 className="bento-card-title">Legacy Harmony</h3>
              <p className="bento-card-desc">
                Maximize operational efficiency with zero disruptions. Blend legacy ERP systems with open APIs for seamless data integration.
              </p>
            </div>
            
            {/* Integration Nodes Grid */}
            <div className="integration-network">
              <div className="integration-grid">
                
                {/* NetSuite */}
                <div className="integration-tile tile-netsuite">
                  <div className="tile-icon-bg">
                    <Layers size={14} className="text-accent" />
                  </div>
                  <span className="tile-label">NetSuite</span>
                </div>

                {/* Microsoft */}
                <div className="integration-tile tile-ms">
                  <div className="ms-logo-grid">
                    <div className="ms-square ms-red"></div>
                    <div className="ms-square ms-green"></div>
                    <div className="ms-square ms-blue"></div>
                    <div className="ms-square ms-yellow"></div>
                  </div>
                  <span className="tile-label">Microsoft</span>
                </div>

                {/* Google */}
                <div className="integration-tile tile-google">
                  <svg className="tile-logo-g" viewBox="0 0 24 24" width="14" height="14">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span className="tile-label">Google</span>
                </div>

                {/* Database */}
                <div className="integration-tile tile-sap">
                  <div className="tile-icon-bg">
                    <Cpu size={14} className="text-success" />
                  </div>
                  <span className="tile-label">Open APIs</span>
                </div>

                {/* Easily Integrated */}
                <div className="integration-tile tile-main-badge">
                  <span className="badge-text-top">Status</span>
                  <div className="badge-logo-bar">
                    <span className="badge-bold">Easily Integrated</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        
        </div>

        {/* Row 2 Bento Grid */}
        <div className="infithra-bento-grid-row-2">
          
          {/* Card 5: Rock-Solid Compliance (Wide bottom left) */}
          <motion.div 
            className="bento-card bento-card-compliance"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="bento-card-content">
              <span className="bento-card-category">GCC Governance</span>
              <h3 className="bento-card-title">Rock-Solid Compliance</h3>
              <p className="bento-card-desc">
                Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.
              </p>
            </div>
            
            {/* Country compliance badge group */}
            <div className="compliance-badge-group">
              <div className="compliance-badge">
                <span className="badge-abbr">KSA</span>
                <span className="badge-status-glow"></span>
              </div>
              <div className="compliance-badge">
                <span className="badge-abbr">UAE</span>
                <span className="badge-status-glow"></span>
              </div>
              <div className="compliance-badge">
                <span className="badge-abbr">GCC</span>
                <span className="badge-status-glow"></span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Cloud-Powered Savings */}
          <motion.div 
            className="bento-card bento-card-savings"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="bento-card-content">
              <span className="bento-card-category">Cloud Savings</span>
              <h3 className="bento-card-title">Cloud-Powered Savings</h3>
              <p className="bento-card-desc">
                Save time and human resources automating repetitive admin work. Embrace the benefits of cloud technology, cut costs!
              </p>
            </div>
            
            {/* Elegant futuristic Cloud connection map */}
            <div className="savings-visual-container">
              <div className="savings-art-frame">
                <svg className="savings-abstract-art" viewBox="0 0 100 100" width="80" height="80">
                  <defs>
                    <linearGradient id="cloud-glow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <path d="M 35 58 C 30 58 27 54 27 49 C 27 44 30 40 35 40 C 37 34 43 30 50 30 C 58 30 64 36 65 43 C 70 43 73 47 73 52 C 73 57 70 61 65 61 Z" fill="none" stroke="url(#cloud-glow)" strokeWidth="2" />
                  <path d="M 45 46 L 49 50 L 57 42" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            
          </motion.div>
        
        </div>

      </div>
    </section>
  );
};
