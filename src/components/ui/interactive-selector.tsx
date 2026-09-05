import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CreditCard, 
  Key, 
  Utensils, 
  BarChart3, 
  Download, 
  FileSpreadsheet, 
  CheckCircle2,
  LucideIcon
} from 'lucide-react';

export interface ReportCategoryItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  tag: string;
  reports: string[];
  image: string;
  icon: LucideIcon;
  color: string;
}

export const REPORT_CATEGORIES: ReportCategoryItem[] = [
  {
    id: "attendance",
    badge: "10+ Reports",
    title: "Attendance & Strength",
    description: "Daily Absenteeism, Man Hours, Headcount Strength & Time Sheet logs",
    tag: "Time & Roster",
    reports: [
      "Daily Absenteeism & Headcount Strength Report",
      "Employee Time Sheet & Punch In/Out Logs",
      "Monthly Attendance-Leave Combined Grid",
      "Overtime Claims & Late Arrival Register"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    icon: Clock,
    color: "#0284c7"
  },
  {
    id: "payroll",
    badge: "8+ Reports",
    title: "Payroll, WPS & Bank Advice",
    description: "UAE SIF files, salary registers, loan schedules & EOS gratuity",
    tag: "Payroll & Finance",
    reports: [
      "UAE/GCC WPS-Compliant SIF File Generator",
      "Consolidated Multi-Company Payroll Register",
      "End of Service (EOS) Gratuity Valuation Report",
      "Direct Bank Payment Advice & Reconciliation"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    icon: CreditCard,
    color: "#4f46e5"
  },
  {
    id: "gatepass",
    badge: "Security Hub",
    title: "Gate Pass & Facility Logs",
    description: "Real-time QR verification, visitor logs & duty-off tracking",
    tag: "Security & Access",
    reports: [
      "Live QR Gate Scan Verification & Entry/Exit Logs",
      "Official Outing, Duty-Off & Sehri Visit Reports",
      "Material Movement Authorization Trail",
      "Visitor Audit Logs & Host Association"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
    icon: Key,
    color: "#0891b2"
  },
  {
    id: "meal",
    badge: "Canteen Hub",
    title: "Canteen & Meal Entitlements",
    description: "Attendance-linked meal entitlements & vendor reconciliation",
    tag: "Operations",
    reports: [
      "Cafeteria Token Scan & Consumption Ledger",
      "Shift-Based Meal Entitlement Capping Summary",
      "Vendor Billing & Monthly Invoice Reconciliation",
      "Department-Wise Canteen Utilization"
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200",
    icon: Utensils,
    color: "#059669"
  },
  {
    id: "costing",
    badge: "Executive BI",
    title: "Labour Costing & MIS",
    description: "Cross-department project costs, client invoices & printable ID cards",
    tag: "Analytics & MIS",
    reports: [
      "Departmental & Project Labour Cost Allocation",
      "Client Billing Detail & Cost Breakdown Invoices",
      "Printable Employee ID Cards with Barcode",
      "1-Click One-Sheet Export to Excel, CSV & PDF"
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200",
    icon: BarChart3,
    color: "#d97706"
  }
];

export const InteractiveSelector: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    REPORT_CATEGORIES.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 150 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="interactive-reports-selector-root">
      {/* Category Pills Navigation on Top */}
      <div className="selector-tabs-row">
        {REPORT_CATEGORIES.map((cat, idx) => {
          const IconComp = cat.icon;
          const isActive = activeIndex === idx;
          return (
            <button
              key={cat.id}
              onClick={() => handleOptionClick(idx)}
              className={`selector-tab-btn ${isActive ? 'active' : ''}`}
            >
              <IconComp size={16} />
              <span>{cat.title}</span>
              <span className="selector-tab-badge">{cat.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Expanding Card Deck */}
      <div className="reports-options-deck">
        {REPORT_CATEGORIES.map((option, index) => {
          const IconComp = option.icon;
          const isActive = activeIndex === index;
          const isAnimated = animatedOptions.includes(index);

          return (
            <div
              key={option.id}
              className={`report-option-card ${isActive ? 'active' : ''}`}
              style={{
                backgroundImage: `url('${option.image}')`,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateX(0)' : 'translateX(-40px)',
              }}
              onClick={() => handleOptionClick(index)}
            >
              {/* Card Gradient Overlays */}
              <div className="report-card-overlay-base" />
              <div className={`report-card-overlay-active ${isActive ? 'visible' : ''}`} />

              {/* Collapsed Icon Bar */}
              <div className="report-collapsed-bar">
                <div 
                  className="report-icon-badge"
                  style={{ borderColor: isActive ? option.color : 'rgba(255, 255, 255, 0.4)' }}
                >
                  <IconComp size={20} className="text-white" />
                </div>
                {!isActive && (
                  <div className="report-vertical-title">
                    <span>{option.title}</span>
                  </div>
                )}
              </div>

              {/* Active Expanded Content */}
              {isActive && (
                <div className="report-expanded-content">
                  <div className="report-tag-pill" style={{ backgroundColor: option.color }}>
                    <FileSpreadsheet size={13} />
                    <span>{option.tag} • {option.badge}</span>
                  </div>

                  <h3 className="report-expanded-title">{option.title}</h3>
                  <p className="report-expanded-desc">{option.description}</p>

                  {/* Feature Checklist */}
                  <div className="report-checklist-grid">
                    {option.reports.map((item, rIdx) => (
                      <div key={rIdx} className="report-checklist-item">
                        <CheckCircle2 size={15} style={{ color: option.color, flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="report-card-footer">
                    <span className="export-ready-badge">
                      <Download size={14} />
                      <span>Ready for Excel, CSV & PDF Export</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveSelector;

