import React, { useState } from "react";
import { Sparkles, ArrowRight, LayoutDashboard, User, MessageSquare, Clock, Calendar, CreditCard, MapPin, DollarSign, FolderCheck, Laptop, ShoppingBag, Award, Key, Utensils, LogOut, Wrench, FileSpreadsheet, ShieldAlert, Settings, Sliders, Lock, UserPlus, SlidersHorizontal } from 'lucide-react';

export const ColorfulBentoGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Core HR",
    "Time & Attendance",
    "Payroll & Financials",
    "Operations & Field",
    "Governance & Data"
  ];

  const modules = [
    // 1. Dashboard (Span 2)
    {
      id: 1,
      category: "Core HR",
      span: "large",
      theme: "sky",
      tag: "Real-Time Intelligence",
      title: "Dashboard & Analytics",
      desc: "Tailored executive KPIs, active headcount, financial liabilities, absenteeism trends, and mobile workforce geo-maps.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      subModules: "Admin & Employee Dashboards"
    },
    // 2. Payroll Management
    {
      id: 6,
      category: "Payroll & Financials",
      span: "normal",
      theme: "amber",
      tag: "1-Click SIF File",
      title: "UAE & GCC Payroll",
      desc: "Automated WPS SIF generation, statutory deductions, bank transfer advice, and multi-currency salary calculation.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      subModules: "Payroll Setup, Process & WPS SIF"
    },
    // 3. Attendance & Geofencing (Span 2)
    {
      id: 4,
      category: "Time & Attendance",
      span: "large",
      theme: "emerald",
      tag: "Biometric & Mobile GPS",
      title: "Attendance & Geofencing",
      desc: "Sync IP biometric hardware, define precise GPS geofence zones, and validate mobile selfie clock-ins in real time.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      subModules: "Biometric Hardware, GPS Zones & Shift Rosters"
    },
    // 4. Leave Management
    {
      id: 5,
      category: "Time & Attendance",
      span: "normal",
      theme: "violet",
      tag: "Policy Engine",
      title: "Leave Management",
      desc: "Multi-tier approval workflows, annual leave quotas, encashments, public holiday calendars, and balance checks.",
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      subModules: "Leave Requests, Approval & Accruals"
    },
    // 5. Gate & Meal Passes
    {
      id: 13,
      category: "Operations & Field",
      span: "normal",
      theme: "rose",
      tag: "QR Security Clearance",
      title: "Gate & Meal Passes",
      desc: "Issue digital QR security gate clearance passes, track material entry/exit, and manage automated cafeteria meal tokens.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      subModules: "Visitor Pass, Material Pass & Canteen Tokens"
    },
    // 6. Employee Self-Service (ESS)
    {
      id: 2,
      category: "Core HR",
      span: "normal",
      theme: "indigo",
      tag: "Mobile ESS App",
      title: "Personal Self-Service",
      desc: "Empower staff to apply for leaves, download merged PDF payslips, view company policies, and get tax certificates.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      subModules: "Payslips, Policy Repo & Tax Certificates"
    },
    // 7. Document Archiving
    {
      id: 9,
      category: "Governance & Data",
      span: "normal",
      theme: "teal",
      tag: "Expiry Tracking",
      title: "Document Vault",
      desc: "Digital employee record storage with automated 30/60/90-day expiry notifications for Visas, Passports, & Emirates IDs.",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      subModules: "Document Storage & Expiry Dashboard"
    },
    // 8. Performance Appraisal (Span 2)
    {
      id: 12,
      category: "Core HR",
      span: "large",
      theme: "orange",
      tag: "KPI Evaluation",
      title: "Performance Appraisal",
      desc: "Structured KPI review cycles, self-evaluations, manager scoring, moderation workflows, and bell curve distribution.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      subModules: "KPI Templates, Review Stages & Scoring"
    },
    // 9. Advance & Loan
    {
      id: 8,
      category: "Payroll & Financials",
      span: "normal",
      theme: "cyan",
      tag: "Salary Deductions",
      title: "Advance & Loan",
      desc: "Streamlined financial assistance requisitions with automated monthly payroll deduction schedules and balance ledgers.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      subModules: "Loan Requests, Approval & Deductions"
    },
    // 10. Assets Management
    {
      id: 10,
      category: "Operations & Field",
      span: "normal",
      theme: "purple",
      tag: "Serial & Barcode Mapping",
      title: "Assets Management",
      desc: "Lifecycle tracking for company laptops, vehicles, and mobile devices from allocation to offboarding clearance.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      subModules: "Asset Allocation, Handover & Returns"
    },
    // 11. Procurement Engine
    {
      id: 11,
      category: "Operations & Field",
      span: "normal",
      theme: "sky",
      tag: "Purchase Orders",
      title: "Procurement Engine",
      desc: "Internal purchase requisitions, item catalogs, vendor performance ratings, and multi-level PO authorization.",
      img: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80",
      subModules: "Purchase Requisitions & PO Generator"
    },

    // 13. Employee Onboarding
    {
      id: 22,
      category: "Core HR",
      span: "normal",
      theme: "emerald",
      tag: "Offer Letter Generator",
      title: "Employee Onboarding",
      desc: "Pre-joining candidate workflow from offer letter template design to multi-stage approval authorization and active conversion.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      subModules: "Offer Templates & Candidate Pipeline"
    },
    // 12. Offboarding & Gratuity (Span 2)
    {
      id: 15,
      category: "Core HR",
      span: "large",
      theme: "rose",
      tag: "GCC Gratuity Settlement",
      title: "Offboarding & Resignation",
      desc: "End-to-end exit lifecycle: notice period tracking, parallel multi-department clearance check-offs, and final settlement generation.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      subModules: "Department Clearances & EOS Settlement"
    },

    // 14. Security & RBAC
    {
      id: 21,
      category: "Governance & Data",
      span: "normal",
      theme: "indigo",
      tag: "Page-Level Permissions",
      title: "Security & Access Control",
      desc: "Granular Role-Based Access Control (RBAC) with fine-grained Read/Write/Edit/Approve permissions per screen.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      subModules: "RBAC Roles, User Linking & Multi-Entity Isolation"
    },
    // 15. Reporting Suite
    {
      id: 17,
      category: "Governance & Data",
      span: "normal",
      theme: "amber",
      tag: "30+ Standard Reports",
      title: "Reporting & Costing",
      desc: "Comprehensive analytics for Attendance Registers, WPS summary files, labour cost allocation, and printable ID cards.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      subModules: "Time Sheets, ID Card Designer & Costing"
    },
    // 16. Employee Queries
    {
      id: 3,
      category: "Core HR",
      span: "normal",
      theme: "teal",
      tag: "Profile Data Updates",
      title: "Employee Queries",
      desc: "Controlled workflow for employees to request profile updates with side-by-side HR comparison and audit trails.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      subModules: "Pending Queries & Processed Audits"
    },
    // 17. Utilities Engine
    {
      id: 16,
      category: "Governance & Data",
      span: "normal",
      theme: "violet",
      tag: "Batch Computations",
      title: "Utilities Engine",
      desc: "Mass background attendance log recalculation engine and bulk encrypted PDF payslip email broadcast dispatcher.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      subModules: "Attendance Batch & Payslip Publisher"
    },
    // 18. Application Logs
    {
      id: 18,
      category: "Governance & Data",
      span: "normal",
      theme: "cyan",
      tag: "IT Audit & Sync",
      title: "Application Audit Logs",
      desc: "IT administrative logging for mobile app exceptions, biometric IP hardware sync status, and sensitive data audit trails.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      subModules: "Mobile Exception Logs & Device Audits"
    },
    // 19. Company Setup (Span 2)
    {
      id: 19,
      category: "Governance & Data",
      span: "large",
      theme: "sky",
      tag: "Multi-Company Architecture",
      title: "Company Master Setup",
      desc: "Register multiple legal entities, branch locations, employee grades, and comprehensive 20+ tab employee master records with bulk Excel uploads.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      subModules: "Legal Entities, 20+ Tab Profiles & Org Hierarchy"
    },
    // 20. System Configuration
    {
      id: 20,
      category: "Governance & Data",
      span: "normal",
      theme: "orange",
      tag: "Lookup Tables",
      title: "System Config Tables",
      desc: "Centralized classification master tables for employment types (Permanent, Daily Wager), gender masters, and status rules.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      subModules: "Employment Types & Master Lists"
    },
    // 21. General Settings
    {
      id: 23,
      category: "Governance & Data",
      span: "normal",
      theme: "purple",
      tag: "Approval Hierarchies",
      title: "General System Settings",
      desc: "Configure multi-level approval hierarchies for all workflows, targeted broadcast announcements, and rich HR letter templates.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      subModules: "Hierarchies, Broadcasts & Letter Templates"
    }
  ];

  const filteredModules = activeCategory === "All"
    ? modules
    : modules.filter(m => m.category === activeCategory);

  return (
    <section className="bento-grid-section">
      <div className="container">
        <div className="bento-grid-wrapper glass-panel">

          {/* Header Block */}
          <div className="bento-header-wrapper">
            <div className="bento-header-content">
              <div className="badge mb-3">
                <Sparkles size={14} />
                <span>COMPLETE 23-MODULE HRMS ECOSYSTEM</span>
              </div>
              <h2 className="bento-main-title">
                Explore All 23 Modules, <br />
                <span className="text-gradient">In One Unified Bento Grid</span>
              </h2>
              <p className="bento-main-desc">
                From daily biometric attendance & mobile GPS geofencing to GCC WPS payroll, gate passes, performance appraisals, and digital document archiving—every single module is designed for enterprise scale.
              </p>
            </div>

            <div className="bento-header-pills">
              <span className="bento-pill bento-pill-blue">23 Core Modules</span>
              <span className="bento-pill bento-pill-green">100+ Sub-Modules</span>
            </div>
          </div>

          {/* Filter Category Tabs */}
          <div className="bento-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`bento-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bento Cards Grid */}
          <div className="bento-cards-grid">
            {filteredModules.map((mod) => (
              <div
                key={mod.id}
                className={`bento-item ${mod.span === 'large' ? 'bento-item-large' : ''} bento-${mod.theme}`}
              >
                <div className="bento-item-text">
                  <span className={`bento-tag bento-tag-${mod.theme}`}>{mod.tag}</span>
                  <h3 className="bento-item-title">{mod.title}</h3>
                  <p className="bento-item-desc">{mod.desc}</p>
                  <div className="bento-item-footer">
                    <span className="bento-submodule-label">Includes: {mod.subModules}</span>
                  </div>
                </div>
                <div className="bento-item-img-wrap">
                  <img
                    src={mod.img}
                    alt={mod.title}
                    className="bento-img"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
