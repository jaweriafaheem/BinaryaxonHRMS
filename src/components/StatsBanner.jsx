import React from 'react';
import { IMPACT_STATS } from '../data/modulesData';
import { Layers, ShieldCheck, Cpu, Award } from 'lucide-react';

export const StatsBanner = () => {
  const icons = [<Layers key="1" />, <Cpu key="2" />, <Award key="3" />, <ShieldCheck key="4" />];

  return (
    <section className="stats-banner-section">
      <div className="container">
        <div className="stats-grid glass-panel">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-container">
                {icons[idx]}
              </div>
              <div className="stat-number text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
