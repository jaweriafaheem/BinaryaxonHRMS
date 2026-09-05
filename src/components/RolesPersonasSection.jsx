import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import { FeatureCarousel } from './ui/feature-carousel';

export const RolesPersonasSection = () => {
  return (
    <section id="roles" className="roles-personas-section">
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
            <Users size={14} className="text-accent" />
            <span>TAILORED FOR EVERY STAKEHOLDER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Built For <span className="text-gradient">Every Role & Persona</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-subtext"
          >
            Explore how Prime HR empowers Admins, HR Managers, Department Heads, Finance Officers, and Employees with customized workspaces.
          </motion.p>
        </div>

        {/* Feature Carousel Component */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="roles-carousel-container"
        >
          <FeatureCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default RolesPersonasSection;

