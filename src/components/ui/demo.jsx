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
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Employee Master & Setup",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Time & Attendance Sync",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Leave Management Tracking",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "UAE & GCC Payroll Engine",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "GPS Geofencing Mobile Check-in",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Document Archiving Repository",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Self-Service Employee Queries",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Advances & Loans Manager",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Asset & Inventory Allocator",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Procurement & Vendors Hub",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Performance Appraisal Board",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Resignation & Offboarding Workflow",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Onboarding & Offer Generation",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Security & Multi-Role Permissions",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];
