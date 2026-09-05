import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Scale, Headset, Shield, Smile, Sparkles } from 'lucide-react';

export const WhyChooseUs = () => {
  const leftFeatures = [
    {
      id: 1,
      title: "Cost Effective",
      desc: "Save 40% overhead by consolidating 5 HR tools into one unified platform.",
      icon: TrendingUp,
      color: "#7c3aed"
    },
    {
      id: 2,
      title: "Enterprise Grade",
      desc: "Built for multi-company isolation, scalable branches, & GCC labor standards.",
      icon: Scale,
      color: "#059669"
    },
    {
      id: 3,
      title: "Bank Security",
      desc: "Granular RBAC permissions, encrypted document vault, & audit trails.",
      icon: Shield,
      color: "#8b5cf6"
    }
  ];

  const rightFeatures = [
    {
      id: 4,
      title: "Time Savings",
      desc: "Automate 90% of routine monthly WPS payroll and attendance approvals.",
      icon: Clock,
      color: "#d97706"
    },
    {
      id: 5,
      title: "24/7 Availability",
      desc: "99.9% cloud SaaS uptime with iOS & Android mobile self-service app.",
      icon: Headset,
      color: "#4f46e5"
    },
    {
      id: 6,
      title: "User Satisfaction",
      desc: "Rated 98% CSAT by HR directors and 100,000+ active workforce staff.",
      icon: Smile,
      color: "#dc2626"
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-section">
      <div className="container">
        {/* Section Title Header */}
        <div className="section-header text-center mb-12">
          <div className="badge mb-3">
            <Sparkles size={14} />
            <span>EXCELLENCE BY DESIGN</span>
          </div>
          <h2>
            Why Choose <span className="text-gradient">Binaryaxon HRMS</span>
          </h2>
          <p>
            Designed from the ground up to solve complex workforce operations, multi-branch attendance, and UAE/GCC payroll compliance.
          </p>
        </div>

        {/* Radial Why Choose Us Layout */}
        <div className="why-choose-layout">
          
          {/* Left Column Nodes */}
          <div className="why-column why-column-left">
            {leftFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="why-node-card why-node-left"
                  initial={{ opacity: 0, scale: 0, x: -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.25, 
                    duration: 0.5, 
                    type: "spring", 
                    stiffness: 220 
                  }}
                  whileHover={{ scale: 1.06, x: -6 }}
                >
                  <div className="why-node-content text-right">
                    <h3 className="why-node-title">{item.title}</h3>
                    <p className="why-node-desc">{item.desc}</p>
                  </div>
                  <div className="why-node-icon" style={{ backgroundColor: item.color }}>
                    <IconComp size={22} color="#ffffff" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Avatar Portrait */}
          <div className="why-center-wrapper">
            <motion.div 
              className="why-avatar-container"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 180 }}
            >
              <motion.img 
                src="/blue_cartoon_thinking_question_mark.png" 
                alt="3D Blue Cartoon Thinking Character Leaning on Question Mark" 
                className="why-floating-character-img"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Right Column Nodes */}
          <div className="why-column why-column-right">
            {rightFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="why-node-card why-node-right"
                  initial={{ opacity: 0, scale: 0, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: (index + 3) * 0.25, 
                    duration: 0.5, 
                    type: "spring", 
                    stiffness: 220 
                  }}
                  whileHover={{ scale: 1.06, x: 6 }}
                >
                  <div className="why-node-icon" style={{ backgroundColor: item.color }}>
                    <IconComp size={22} color="#ffffff" />
                  </div>
                  <div className="why-node-content text-left">
                    <h3 className="why-node-title">{item.title}</h3>
                    <p className="why-node-desc">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
