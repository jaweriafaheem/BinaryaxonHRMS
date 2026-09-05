import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Pin } from 'lucide-react';

const HRMS_LIFECYCLE_STEPS = [
  {
    step: "01",
    title: "Smart Onboarding & Setup",
    category: "Core HR & Setup",
    description: "Configure multi-company org structures, customize offer templates, and auto-generate candidate onboarding in minutes.",
    features: ["Dynamic Offer Templates", "20+ Tab Employee Master", "Multi-Level Approvals"],
    colorTheme: "orange",
    pinColor: "#f97316",
    accentBg: "rgba(249, 115, 22, 0.08)",
    accentBorder: "rgba(249, 115, 22, 0.25)",
    textColor: "#ea580c"
  },
  {
    step: "02",
    title: "Time, Shifts & Geo-Fencing",
    category: "Time & Attendance",
    description: "Capture real-time punches via biometric machines or mobile GPS geofences with automated overtime and shift roster sync.",
    features: ["Biometric Machine Logs", "GPS Geofence Polygons", "Auto-Overtime & Leaves"],
    colorTheme: "blue",
    pinColor: "#0284c7",
    accentBg: "rgba(2, 132, 199, 0.08)",
    accentBorder: "rgba(2, 132, 199, 0.25)",
    textColor: "#0284c7"
  },
  {
    step: "03",
    title: "1-Click WPS & Payroll Engine",
    category: "Payroll & Financials",
    description: "Process multi-currency salaries with automated deductions, loan repayments, and generate UAE WPS-compliant SIF files instantly.",
    features: ["WPS SIF File Generation", "Salary Advances & Loans", "Direct Bank Payment Files"],
    colorTheme: "purple",
    pinColor: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.08)",
    accentBorder: "rgba(139, 92, 246, 0.25)",
    textColor: "#7c3aed"
  },
  {
    step: "04",
    title: "Appraisals, Assets & Passes",
    category: "Operations & Field",
    description: "Track KPI performance cycles, manage asset inventory handovers, and issue digital QR gate and canteen meal passes.",
    features: ["KPI Evaluation Matrix", "Asset Serial Tracking", "QR Gate & Meal Passes"],
    colorTheme: "orange",
    pinColor: "#f59e0b",
    accentBg: "rgba(245, 158, 11, 0.08)",
    accentBorder: "rgba(245, 158, 11, 0.25)",
    textColor: "#d97706"
  },
  {
    step: "05",
    title: "Clear Offboarding & Settlement",
    category: "Offboarding & Governance",
    description: "Orchestrate department clearance checklists, compute GCC End-of-Service gratuity, and issue final settlement vouchers smoothly.",
    features: ["Notice Period Tracking", "GCC Gratuity / EOS Engine", "Final Settlement Voucher"],
    colorTheme: "blue",
    pinColor: "#0ea5e9",
    accentBg: "rgba(14, 165, 233, 0.08)",
    accentBorder: "rgba(14, 165, 233, 0.25)",
    textColor: "#0284c7"
  }
];

export const HRMSProcessSection = () => {
  return (
    <section id="process" className="hrms-process-section">
      {/* Background Ruled Lines & Ambient Glow */}
      <div className="process-ruled-bg" />
      <div className="process-glow-orb" />

      <div className="container relative-z">
        {/* Section Header */}
        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge badge-pill"
          >
            <Sparkles size={14} className="text-accent" />
            <span>HOW PRIME HR WORKS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            The Complete <span className="text-gradient">Employee Lifecycle</span> Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-subtext"
          >
            From the first day of onboarding to daily attendance, automated WPS payroll, and final settlement—see how our 23 integrated modules work together seamlessly.
          </motion.p>
        </div>

        {/* Process Flow Canvas with Pinned Sticky Cards */}
        <div className="process-flow-canvas">
          {/* Desktop SVG Connecting Dashed Zig-Zag Path */}
          <svg 
            className="process-connector-svg" 
            viewBox="0 0 1000 1250" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <path
              d="M 330 110 L 670 340 L 330 580 L 670 820 L 330 1060"
              stroke="#cbd5e1"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Cards Grid */}
          <div className="process-steps-container">
            {HRMS_LIFECYCLE_STEPS.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={item.step} 
                  className={`process-step-row ${isEven ? 'step-row-right' : 'step-row-left'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="process-sticky-card"
                  >
                    {/* Top Pushpin */}
                    <div className="sticky-pin-wrapper">
                      <svg 
                        width="24" 
                        height="32" 
                        viewBox="0 0 24 32" 
                        fill="none" 
                        className="sticky-pin-icon"
                        style={{ filter: `drop-shadow(0 3px 5px rgba(0,0,0,0.18))` }}
                      >
                        <path 
                          d="M12 0C7.58 0 4 3.58 4 8C4 13.25 10.5 22 12 24C13.5 22 20 13.25 20 8C20 3.58 16.42 0 12 0Z" 
                          fill={item.pinColor} 
                        />
                        <circle cx="12" cy="8" r="3.5" fill="#ffffff" opacity="0.8" />
                        <line x1="12" y1="24" x2="12" y2="32" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Card Body with theme styling */}
                    <div 
                      className="sticky-card-inner"
                      style={{ 
                        backgroundColor: item.accentBg, 
                        borderColor: item.accentBorder 
                      }}
                    >
                      {/* Step Number & Category Tag */}
                      <div className="sticky-card-header">
                        <span 
                          className="sticky-step-number"
                          style={{ color: item.textColor }}
                        >
                          {item.step}
                        </span>
                        <span className="sticky-category-badge">{item.category}</span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="sticky-card-title">{item.title}</h3>
                      <p className="sticky-card-desc">{item.description}</p>

                      {/* Sub-modules Pills */}
                      <div className="sticky-features-list">
                        {item.features.map((feat, fIdx) => (
                          <span key={fIdx} className="sticky-feature-tag">
                            <CheckCircle2 size={13} style={{ color: item.textColor, flexShrink: 0 }} />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="process-bottom-cta"
        >
          <div className="cta-content">
            <h4>Ready to automate your complete HR lifecycle?</h4>
            <p>Experience the power of 23 unified modules designed for multi-company enterprise efficiency.</p>
          </div>
          <a href="#roi" className="btn btn-primary">
            Calculate Your ROI
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HRMSProcessSection;

