"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CheckCircle2,
  Users,
  Smartphone,
  CreditCard,
  Building2,
  Sparkles,
  ShieldCheck,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface RolePersona {
  id: string;
  role: string;
  badge: string;
  label: string;
  icon: LucideIcon;
  image: string;
  description: string;
  benefits: string[];
  themeColor: string;
}

export const ROLES_PERSONAS: RolePersona[] = [
  {
    id: "admin",
    role: "System & Group Admins",
    badge: "For Admins",
    label: "For Admins",
    icon: LayoutDashboard,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
    description: "Enterprise-wide operational KPIs, multi-company consolidation, financial liabilities & statutory cost tracking.",
    benefits: [
      "Real-time Executive KPIs (Permanent, Contractual, Daily Wagers)",
      "20+ Tab Comprehensive Employee Master & Multi-Company Setup",
      "Fine-Grained Role-Based Access Control (RBAC)",
      "Full MIS, Labour Costing & Multi-Entity Reports"
    ],
    themeColor: "#7c3aed"
  },
  {
    id: "hrmanager",
    role: "HR & Operations Managers",
    badge: "For HR Managers",
    label: "For HR Managers",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",
    description: "Automated shift rosters, 1-click WPS payroll execution, overtime approvals, and biometric sync.",
    benefits: [
      "Centralized Approvals Inbox (Leaves, Profile Queries, Resignations)",
      "1-Click UAE WPS SIF File Generation & Bank Transfer Advice",
      "Biometric Machine Log Synchronization & Rotational Rosters",
      "Multi-tier Approval Hierarchy & Dynamic Letter Templates"
    ],
    themeColor: "#4f46e5"
  },
  {
    id: "depthead",
    role: "Department Heads & Leads",
    badge: "For Department Heads",
    label: "For Dept Heads",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    description: "Team presence tracking, KPI performance evaluations, and one-tap request approvals.",
    benefits: [
      "Real-time Actual vs Approved Headcount Strength Monitoring",
      "KPI Performance Appraisal Scoring on 1–5 Rating Scales",
      "Department Asset Requisition & Inventory Approvals",
      "Team Overtime, Gate Pass & Shift Override Authorization"
    ],
    themeColor: "#0891b2"
  },
  {
    id: "employee",
    role: "Employees & Field Staff",
    badge: "For Employees",
    label: "For Employees",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200",
    description: "Mobile GPS punch-in, instant payslips & tax downloads, leave balances, and digital QR passes.",
    benefits: [
      "Mobile Attendance with GPS Geofence Boundary Validation",
      "24/7 Access to Monthly Payslips & Annual Tax Certificates",
      "Self-service Leave Application with Live Quota Balance",
      "Digital QR Gate Pass & Canteen Meal Pass Vouchers"
    ],
    themeColor: "#059669"
  },
  {
    id: "finance",
    role: "Finance & Payroll Officers",
    badge: "For Finance Officers",
    label: "For Finance",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200",
    description: "Salary structures, loan repayment scheduling, WPS bank transfer files, and End-of-Service gratuity.",
    benefits: [
      "Formula-based Earnings, Deductions & Tax Component Setup",
      "Automated Salary Advance & Loan Repayment Ledger",
      "GCC-Compliant End of Service (EOS) Gratuity Calculation",
      "Bank Reconciliation & Month-on-Month Variance Reports"
    ],
    themeColor: "#d97706"
  }
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 70;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % ROLES_PERSONAS.length) + ROLES_PERSONAS.length) % ROLES_PERSONAS.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + ROLES_PERSONAS.length) % ROLES_PERSONAS.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = ROLES_PERSONAS.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="feature-carousel-wrapper">
      <div className="carousel-main-container">
        {/* Left Roles Selector Column */}
        <div className="carousel-roles-sidebar">
          {/* Top/Bottom Gradient Fade */}
          <div className="carousel-fade-top" />
          <div className="carousel-fade-bottom" />

          <div className="carousel-chips-flow">
            {ROLES_PERSONAS.map((item, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(ROLES_PERSONAS.length / 2),
                ROLES_PERSONAS.length / 2,
                distance
              );
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.28,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="carousel-chip-motion"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "carousel-role-btn",
                      isActive ? "active-role-btn" : "inactive-role-btn"
                    )}
                  >
                    <div className="role-btn-icon">
                      <IconComponent size={19} />
                    </div>

                    <div className="role-btn-labels">
                      <span className="role-btn-badge">{item.badge}</span>
                      <span className="role-btn-title">{item.role}</span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Active Role Showcase Canvas */}
        <div className="carousel-showcase-canvas">
          <div className="carousel-card-stage">
            {ROLES_PERSONAS.map((item, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.72,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="carousel-showcase-card"
                >
                  {/* Persona Image with clean overlay */}
                  <img
                    src={item.image}
                    alt={item.role}
                    className={cn(
                      "carousel-card-img",
                      isActive ? "active-img" : "inactive-img"
                    )}
                  />

                  {/* Persona Details Overlay */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.35 }}
                        className="carousel-card-content"
                      >
                        <div className="carousel-card-badge">
                          <span className="badge-dot" style={{ backgroundColor: item.themeColor }} />
                          <span>{index + 1} • {item.role}</span>
                        </div>

                        <h4 className="carousel-card-desc">
                          {item.description}
                        </h4>

                        {/* Bullet points for role capabilities */}
                        <div className="carousel-role-benefits">
                          {item.benefits.map((b, bIdx) => (
                            <div key={bIdx} className="role-benefit-item">
                              <span className="benefit-dot" style={{ backgroundColor: item.themeColor }} />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Status Indicator */}
                  <div className={cn("carousel-live-pill", isActive ? "opacity-100" : "opacity-0")}>
                    <div className="live-pulse-dot" />
                    <span>Role Experience</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
