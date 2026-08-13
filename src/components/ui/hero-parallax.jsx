"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { ArrowRight, Play, Zap, CheckCircle2, Layers, Cpu, Award, ShieldCheck } from "lucide-react";

export const HeroParallax = ({ products, onExploreClick, onDemoClick }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-180, 260]),
    springConfig
  );

  return (
    <div ref={ref} id="overview" className="hero-parallax-container">
      <Header onExploreClick={onExploreClick} onDemoClick={onDemoClick} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="hero-parallax-row hero-parallax-row-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="hero-parallax-row">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="hero-parallax-row hero-parallax-row-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Animated Number Counter Component
const AnimatedNumber = ({ target, suffix, isFloat }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds duration
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="hero-stat-number text-gradient">
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </div>
  );
};

export const HeroStatsWidget = () => {
  const stats = [
    { target: 23, suffix: "+", label: "Integrated Modules", desc: "All-in-one HRMS solution", icon: Layers, isFloat: false },
    { target: 100, suffix: "+", label: "Sub-Modules", desc: "Complete lifecycle coverage", icon: Cpu, isFloat: false },
    { target: 99.9, suffix: "%", label: "Payroll Accuracy", desc: "WPS & Multi-currency ready", icon: Award, isFloat: true },
    { target: 100, suffix: "%", label: "Biometric & Geo Sync", desc: "Real-time field tracking", icon: ShieldCheck, isFloat: false }
  ];

  return (
    <div className="hero-stats-panel glass-panel">
      <div className="hero-stats-panel-header">
        <span className="hero-stats-panel-title">PLATFORM AT A GLANCE</span>
      </div>
      <div className="hero-stats-grid-2x2">
        {stats.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div key={idx} className="hero-stat-card-2x2">
              <div className="hero-stat-icon-wrapper">
                <IconComp size={20} color="#0284c7" />
              </div>
              <AnimatedNumber target={stat.target} suffix={stat.suffix} isFloat={stat.isFloat} />
              <div className="hero-stat-label">{stat.label}</div>
              <div className="hero-stat-desc">{stat.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Header = ({ onExploreClick, onDemoClick }) => {
  return (
    <div className="hero-parallax-header">
      <div className="hero-parallax-grid">

        {/* Left Side: Copy & Actions */}
        <div className="hero-parallax-left">
          <div className="badge mb-3">
            <Zap size={14} />
            <span>HRMS REIMAGINED – INTELLIGENT BY DESIGN</span>
          </div>
          <h2>
            The Complete <br /> <span className="text-gradient">23-Module HR & Payroll</span> Platform
          </h2>
          <p className="hero-description">
            Binaryaxon HRMS consolidates multi-company workforce management, biometric attendance, UAE/GCC WPS payroll compliance, GPS geofencing, and digital document archiving into a unified, intelligent SaaS environment.
          </p>

          <div className="hero-actions mt-4">
            <button className="btn btn-primary btn-lg" onClick={onExploreClick}>
              <span>Explore All 23 Modules</span>
              <ArrowRight size={18} />
            </button>

            <button className="btn btn-secondary btn-lg" onClick={onDemoClick}>
              <Play size={16} className="play-icon" />
              <span>Interactive Live Demo</span>
            </button>
          </div>

          <div className="hero-highlights mt-4">
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

        {/* Right Side: Filled Empty Space with Stats Widget */}
        <div className="hero-parallax-right">
          <HeroStatsWidget />
        </div>

      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -15,
      }}
      key={product.title}
      className="hero-parallax-card"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full relative"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="hero-parallax-img"
        />
        <div className="hero-parallax-overlay"></div>
        <h3 className="hero-parallax-title">
          {product.title}
        </h3>
      </a>
    </motion.div>
  );
};
