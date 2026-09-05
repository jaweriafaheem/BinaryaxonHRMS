import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { InteractiveSelector } from './ui/interactive-selector';

export const ReportsAnalyticsSection = () => {
  return (
    <section id="reports" className="reports-analytics-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge badge-pill"
          >
            <FileSpreadsheet size={14} className="text-accent" />
            <span>20+ PRE-BUILT ENTERPRISE REGISTERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Instant <span className="text-gradient">Reports & Operational Intelligence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-subtext"
          >
            From daily biometric strength registers and UAE WPS payment advice to canteen reconciliations and departmental labour costing—generate audit-ready reports in seconds.
          </motion.p>
        </div>

        {/* Interactive Accordion Selector */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="reports-selector-wrapper"
        >
          <InteractiveSelector />
        </motion.div>

        {/* Bottom Feature Badges */}
        <div className="reports-footer-stats">
          <div className="report-stat-pill">
            <CheckCircle2 size={16} className="text-accent" />
            <span>One-Click Export to Excel, PDF & CSV</span>
          </div>
          <div className="report-stat-pill">
            <CheckCircle2 size={16} className="text-accent" />
            <span>UAE/GCC Wage Protection (WPS) SIF Files</span>
          </div>
          <div className="report-stat-pill">
            <CheckCircle2 size={16} className="text-accent" />
            <span>Automated Multi-Entity Consolidation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAnalyticsSection;

