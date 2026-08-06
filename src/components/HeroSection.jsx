import React from 'react';
import { ShieldCheck, Play, ArrowRight, CheckCircle2, Users, Clock, CreditCard, Building2, MapPin, Zap } from 'lucide-react';

export const HeroSection = ({ onExploreClick, onDemoClick }) => {
  return (
    <section id="overview" className="hero-section">
      <div className="hero-background-glow"></div>
      <div className="container hero-container">
        
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <div className="badge hero-badge">
            <Zap size={14} />
            <span>HRMS REIMAGINED – INTELLIGENT BY DESIGN</span>
          </div>

          <h1 className="hero-title">
            The Complete <span className="text-gradient">23-Module HR & Payroll</span> Platform
          </h1>

          <p className="hero-description">
            Binaryaxon HRMS consolidates multi-company workforce management, biometric attendance, UAE/GCC WPS payroll compliance, GPS geofencing, and digital document archiving into a unified, intelligent SaaS environment.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={onExploreClick}>
              <span>Explore All 23 Modules</span>
              <ArrowRight size={18} />
            </button>
            
            <button className="btn btn-secondary btn-lg" onClick={onDemoClick}>
              <Play size={16} className="play-icon" />
              <span>Interactive Live Demo</span>
            </button>
          </div>

          {/* Key Value Bullets */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Multi-Company & Branch Isolation</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Biometric & GPS Geofencing</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} className="text-accent" />
              <span>100% WPS & Tax Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Interactive UI Mockup */}
        <div className="hero-visual">
          <div className="hero-card glass-panel">
            {/* Header bar of fake app */}
            <div className="hero-card-header">
              <div className="app-window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="app-title-bar">
                <Building2 size={13} />
                <span>Binaryaxon HRMS Enterprise Edition</span>
              </div>
              <div className="app-status-badge">
                <span className="status-indicator"></span>
                <span>System Active</span>
              </div>
            </div>

            {/* Dashboard Mock Content */}
            <div className="hero-card-body">
              {/* Stat Grid */}
              <div className="hero-kpi-grid">
                <div className="kpi-mini-card">
                  <div className="kpi-icon-wrap blue">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="kpi-value">1,480</div>
                    <div className="kpi-label">Active Employees</div>
                  </div>
                </div>

                <div className="kpi-mini-card">
                  <div className="kpi-icon-wrap green">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="kpi-value">98.4%</div>
                    <div className="kpi-label">On-Time Today</div>
                  </div>
                </div>

                <div className="kpi-mini-card">
                  <div className="kpi-icon-wrap purple">
                    <CreditCard size={16} />
                  </div>
                  <div>
                    <div className="kpi-value">WPS Ready</div>
                    <div className="kpi-label">Current Payroll</div>
                  </div>
                </div>
              </div>

              {/* Attendance & Geo Fencing Live Feed Widget */}
              <div className="hero-feed-widget">
                <div className="widget-header">
                  <span>Real-time Biometric & Geo Punch Feed</span>
                  <span className="live-tag">LIVE PUNCHES</span>
                </div>
                
                <div className="punch-feed-list">
                  <div className="punch-item">
                    <div className="punch-avatar">AK</div>
                    <div className="punch-details">
                      <div className="punch-name">Ahmed Khan (Senior Engineer)</div>
                      <div className="punch-meta">
                        <MapPin size={12} /> HQ Geofence • Biometric #04
                      </div>
                    </div>
                    <div className="punch-time text-success">08:58 AM</div>
                  </div>

                  <div className="punch-item">
                    <div className="punch-avatar purple-avatar">SZ</div>
                    <div className="punch-details">
                      <div className="punch-name">Sara Zainab (HR Specialist)</div>
                      <div className="punch-meta">
                        <MapPin size={12} /> Mobile GPS • Geofence Zone A
                      </div>
                    </div>
                    <div className="punch-time text-success">09:02 AM</div>
                  </div>
                </div>
              </div>

              {/* Module Pill Showcase */}
              <div className="hero-modules-bar">
                <span className="modules-bar-title">Integrated Modules:</span>
                <div className="modules-pills">
                  <span className="pill">Attendance</span>
                  <span className="pill">Payroll</span>
                  <span className="pill">Gate Pass</span>
                  <span className="pill">Meal Pass</span>
                  <span className="pill">Geo-Fence</span>
                  <span className="pill">+18 More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
