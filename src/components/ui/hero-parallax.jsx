"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence
} from "framer-motion";
import { ArrowRight, Play, Zap, CheckCircle2, Layers, Cpu, Award, ShieldCheck } from "lucide-react";
import { ShinyButton } from "./shiny-button";

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
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-520, -50]),
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

// GCC Flag Vector Renderer
const GCCFlagSVG = ({ countryId }) => {
  switch (countryId) {
    case "UAE":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
          <clipPath id="uaeClip"><circle cx="50" cy="50" r="50" /></clipPath>
          <g clipPath="url(#uaeClip)">
            <rect x="0" y="0" width="30" height="100" fill="#e11d48" />
            <rect x="30" y="0" width="70" height="33.3" fill="#16a34a" />
            <rect x="30" y="33.3" width="70" height="33.3" fill="#ffffff" />
            <rect x="30" y="66.6" width="70" height="33.4" fill="#000000" />
          </g>
        </svg>
      );
    case "KSA":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
          <circle cx="50" cy="50" r="50" fill="#16a34a" />
          <path d="M25 62 L75 62" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 33 C45 28, 55 28, 60 33 C55 42, 45 42, 40 33 Z" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "BHR":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
          <clipPath id="bhrClip"><circle cx="50" cy="50" r="50" /></clipPath>
          <g clipPath="url(#bhrClip)">
            <rect x="0" y="0" width="100" height="100" fill="#e11d48" />
            <polygon points="0,0 28,0 38,10 28,20 38,30 28,40 38,50 28,60 38,70 28,80 38,90 28,100 0,100" fill="#ffffff" />
          </g>
        </svg>
      );
    case "OMN":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
          <clipPath id="omnClip"><circle cx="50" cy="50" r="50" /></clipPath>
          <g clipPath="url(#omnClip)">
            <rect x="0" y="0" width="30" height="100" fill="#e11d48" />
            <rect x="30" y="0" width="70" height="33.3" fill="#ffffff" />
            <rect x="30" y="33.3" width="70" height="33.3" fill="#e11d48" />
            <rect x="30" y="66.6" width="70" height="33.4" fill="#16a34a" />
            <path d="M6 14 L24 28 M24 14 L6 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );
    case "QAT":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
          <clipPath id="qatClip"><circle cx="50" cy="50" r="50" /></clipPath>
          <g clipPath="url(#qatClip)">
            <rect x="0" y="0" width="100" height="100" fill="#881337" />
            <polygon points="0,0 30,0 42,6 30,12 42,18 30,24 42,30 30,36 42,42 30,48 42,54 30,60 42,66 30,72 42,78 30,84 42,90 30,96 42,100 0,100" fill="#ffffff" />
          </g>
        </svg>
      );
    case "KWT":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
          <clipPath id="kwtClip"><circle cx="50" cy="50" r="50" /></clipPath>
          <g clipPath="url(#kwtClip)">
            <rect x="0" y="0" width="100" height="33.3" fill="#16a34a" />
            <rect x="0" y="33.3" width="100" height="33.3" fill="#ffffff" />
            <rect x="0" y="66.6" width="100" height="33.4" fill="#e11d48" />
            <polygon points="0,0 28,33.3 28,66.6 0,100" fill="#000000" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

// Interactive GCC Compliance & Workspace Widget
export const GCCComplianceWidget = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slide 0 State (Compliance)
  const [activeCountry, setActiveCountry] = useState("UAE");

  // Slide 2 State (Payroll)
  const [salaryValue, setSalaryValue] = useState("142,067.00");
  const [isSalaryUpdated, setIsSalaryUpdated] = useState(false);

  const countries = [
    { id: "UAE", name: "United Arab Emirates", flag: "🇦🇪", status: "WPS Compliant", items: ["MOHRE WPS SIF Generation", "Gratuity & EOS calculations"] },
    { id: "KSA", name: "Saudi Arabia", flag: "🇸🇦", status: "Mudad Compliant", items: ["Mudad Wage Portal compliance", "GOSI calculation engine"] },
    { id: "BHR", name: "Bahrain", flag: "🇧🇭", status: "SIO Ready", items: ["SIO Pension calculations", "WPS Bank export file formats"] },
    { id: "OMN", name: "Oman", flag: "🇴🇲", status: "PASI Compliant", items: ["PASI Pension deductions", "WPS Electronic bank uploads"] },
    { id: "QAT", name: "Qatar", flag: "🇶🇦", status: "QCB Compliant", items: ["WPS QCB File Formats", "Qatar bank integrations"] },
    { id: "KWT", name: "Kuwait", flag: "🇰🇼", status: "PIFSS Ready", items: ["PIFSS Security deductions", "Kuwait WPS File formats (Knet)"] }
  ];

  const slides = [
    { id: 0, label: "Tailor to Local Compliance", badgeIcon: "🛡️" },
    { id: 1, label: "Streamline Manual HR Operations", badgeIcon: "💼" },
    { id: 2, label: "Automate Payroll Complexity", badgeIcon: "💳" }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleUpdateSalary = (e) => {
    e.preventDefault();
    setIsSalaryUpdated(true);
    setTimeout(() => setIsSalaryUpdated(false), 2000);
  };

  const selectedData = countries.find(c => c.id === activeCountry) || countries[0];

  return (
    <div
      className="gcc-widget-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Moving Background Shapes */}
      <div className={`gcc-shape gcc-shape-orange slide-${currentSlide}`}></div>
      <div className={`gcc-shape gcc-shape-blue slide-${currentSlide}`}></div>
      <div className={`gcc-shape gcc-shape-pink slide-${currentSlide}`}></div>

      {/* Main Interactive Widget */}
      <div className={`gcc-compliance-panel theme-${currentSlide}`}>

        {/* Slide Indicator Badge */}
        <div className={`gcc-badge-slider theme-${currentSlide}`} key={`badge-${currentSlide}`}>
          <span className="gcc-panel-icon">{slides[currentSlide].badgeIcon}</span>
          <span className="gcc-panel-tag">{slides[currentSlide].label}</span>
        </div>

        {/* Content Box with Dynamic Transitions */}
        <div className="gcc-card-dynamic-area">
          <AnimatePresence mode="wait">

            {/* Slide 0: Local Compliance */}
            {currentSlide === 0 && (
              <motion.div
                key="slide-compliance"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="gcc-card-content"
              >
                <div className="gcc-search-box">
                  <input
                    type="text"
                    placeholder="Search by Country"
                    className="gcc-search-input"
                    disabled
                  />
                  <span className="gcc-search-icon">🔍</span>
                </div>

                <div className="gcc-flags-circle-grid mt-3">
                  {countries.map((country) => (
                    <button
                      key={country.id}
                      className={`gcc-flag-circle-btn ${activeCountry === country.id ? 'active' : ''}`}
                      onClick={() => setActiveCountry(country.id)}
                    >
                      <span className="gcc-circle-flag-wrapper">
                        <GCCFlagSVG countryId={country.id} />
                      </span>
                    </button>
                  ))}
                </div>

                <div className="gcc-country-tags-grid mt-3">
                  {countries.map((country) => (
                    <span
                      key={country.id}
                      className={`gcc-country-tag-pill ${activeCountry === country.id ? 'active' : ''}`}
                      onClick={() => setActiveCountry(country.id)}
                    >
                      {country.id}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Slide 1: HR Operations & Tasks */}
            {currentSlide === 1 && (
              <motion.div
                key="slide-operations"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="gcc-card-content gcc-operations-card"
              >
                <div className="op-list-item">
                  <div className="op-icon-bullet yellow">📋</div>
                  <div className="op-item-content">
                    <div className="op-item-title">Easy Manage Tasks</div>
                    <div className="op-item-desc">Assign and track HR tickets</div>
                  </div>
                </div>

                <div className="op-list-item">
                  <div className="op-icon-bullet green">🔄</div>
                  <div className="op-item-content">
                    <div className="op-item-title">Payroll History Logs</div>
                    <div className="op-item-desc">Audit wage modification runs</div>
                  </div>
                </div>

                <div className="op-stats-row mt-2">
                  <div className="op-stat-box">
                    <div className="op-stat-num text-orange">56</div>
                    <div className="op-stat-lbl">Attendance present</div>
                  </div>
                  <div className="op-stat-box">
                    <div className="op-stat-num text-blue">2</div>
                    <div className="op-stat-lbl">Active Tasks</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Slide 2: Payroll Automation */}
            {currentSlide === 2 && (
              <motion.div
                key="slide-payroll"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="gcc-card-content gcc-payroll-card"
              >
                <div className="payroll-avatar-section">
                  <div className="payroll-avatar">SA</div>
                  <div className="payroll-user-info">
                    <div className="payroll-user-name">Simon Andersen</div>
                    <div className="payroll-user-role">Product Manager</div>
                  </div>
                </div>

                <div className="payroll-form-inputs mt-2">
                  <div className="payroll-input-group">
                    <label>Annual Salary</label>
                    <div className="salary-input-wrapper">
                      <span className="currency-lbl">AED</span>
                      <input
                        type="text"
                        value={salaryValue}
                        onChange={(e) => setSalaryValue(e.target.value)}
                        className="salary-field"
                      />
                    </div>
                  </div>
                  <div className="payroll-input-group">
                    <label>Effective Date</label>
                    <input type="text" value="16/04/24" readOnly className="date-field" />
                  </div>
                </div>

                <button
                  onClick={handleUpdateSalary}
                  className={`btn-update-salary mt-2 ${isSalaryUpdated ? 'success' : ''}`}
                >
                  {isSalaryUpdated ? "Salary Updated! ✓" : "Update Salary"}
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Indicators at the bottom */}
        <div className="gcc-slider-dots">
          {slides.map((s) => (
            <button
              key={s.id}
              className={`gcc-dot-btn ${currentSlide === s.id ? 'active' : ''}`}
              onClick={() => setCurrentSlide(s.id)}
              aria-label={`Go to slide ${s.id}`}
            />
          ))}
        </div>

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
          <div className="badge hero-badge mb-3">
            <Zap size={14} />
            <span>#1 HR & PAYROLL SOFTWARE IN THE REGION</span>
          </div>
          <h2>
            HR & Payroll Software <br /> Built for the <span className="text-gradient">All</span>
          </h2>
          <p className="hero-description">
            Streamline every HR process through powerful cloud HR technology. Consolidate multi-company workforce management, biometric attendance, WPS payroll, GPS geofencing, and digital document workflows in one platform.
          </p>

          <div className="hero-actions mt-4">
            <ShinyButton onClick={onExploreClick}>
              <span>Schedule a Demo</span>
              <ArrowRight size={18} />
            </ShinyButton>

            <button className="btn-tour-pill" onClick={onDemoClick}>
              <Play size={16} className="play-icon" />
              <span>Product Tour</span>
            </button>
          </div>


        </div>

        {/* Right Side: Interactive Compliance Widget */}
        <div className="hero-parallax-right">
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
