"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export function HeroParallaxDemo({ onExploreClick, onDemoClick }) {
  return (
    <div className="w-full">
      <HeroParallax 
        products={products} 
        onExploreClick={onExploreClick} 
        onDemoClick={onDemoClick} 
      />
    </div>
  );
}

export const products = [
  {
    title: "Dashboard & Self-Service",
    link: "#",
    thumbnail: "/cards/dashboard_self_service.svg",
  },
  {
    title: "Employee Master & Setup",
    link: "#",
    thumbnail: "/cards/employee_master_setup.svg",
  },
  {
    title: "Time & Attendance Sync",
    link: "#",
    thumbnail: "/cards/time_attendance_sync.svg",
  },
  {
    title: "Leave Management Tracking",
    link: "#",
    thumbnail: "/cards/leave_management_tracking.svg",
  },
  {
    title: "UAE & GCC Payroll Engine",
    link: "#",
    thumbnail: "/cards/uae_gcc_payroll_engine.svg",
  },
  {
    title: "GPS Geofencing Mobile Check-in",
    link: "#",
    thumbnail: "/cards/gps_geofencing_mobile.svg",
  },
  {
    title: "Document Archiving Repository",
    link: "#",
    thumbnail: "/cards/document_archiving.svg",
  },
  {
    title: "Self-Service Employee Queries",
    link: "#",
    thumbnail: "/cards/self_service_queries.svg",
  },
  {
    title: "Advances & Loans Manager",
    link: "#",
    thumbnail: "/cards/advances_loans_manager.svg",
  },
  {
    title: "Asset & Inventory Allocator",
    link: "#",
    thumbnail: "/cards/asset_inventory_allocator.svg",
  },
  {
    title: "Procurement & Vendors Hub",
    link: "#",
    thumbnail: "/cards/procurement_vendors.svg",
  },
  {
    title: "Performance Appraisal Board",
    link: "#",
    thumbnail: "/cards/performance_appraisal.svg",
  },
  {
    title: "Resignation & Offboarding Workflow",
    link: "#",
    thumbnail: "/cards/resignation_offboarding.svg",
  },
  {
    title: "Onboarding & Offer Generation",
    link: "#",
    thumbnail: "/cards/onboarding_offer_generation.svg",
  },
  {
    title: "Security & Multi-Role Permissions",
    link: "#",
    thumbnail: "/cards/security_multi_role.svg",
  },
];
