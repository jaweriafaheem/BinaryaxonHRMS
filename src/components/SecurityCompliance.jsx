import React from 'react';
import { ShieldCheck, Lock, FileSpreadsheet, Server, Eye, Smartphone } from 'lucide-react';

export const SecurityCompliance = () => {
  const securityFeatures = [
    {
      icon: <Lock size={24} className="text-accent" />,
      title: "Granular RBAC Security",
      desc: "Page-level permission sets (Read, Write, Edit, Delete, Approve) assignable by role to prevent unauthorized access."
    },
    {
      icon: <Server size={24} className="text-accent" />,
      title: "Multi-Company Data Isolation",
      desc: "Complete logical data separation per corporate entity, supporting multi-branch enterprise conglomerates safely."
    },
    {
      icon: <FileSpreadsheet size={24} className="text-accent" />,
      title: "WPS & Tax Compliance",
      desc: "Built-in UAE SIF file generation, tax slab calculation, and statutory report structures for complete regulatory peace of mind."
    },
    {
      icon: <Smartphone size={24} className="text-accent" />,
      title: "Mobile App Error Diagnostics",
      desc: "Integrated Logs module catching field app exceptions and biometric hardware connection status in real-time."
    },
    {
      icon: <Eye size={24} className="text-accent" />,
      title: "Full System Audit Trail",
      desc: "Track every sensitive HR master data modification, salary adjustment, and user login attempt with timestamped logs."
    },
    {
      icon: <ShieldCheck size={24} className="text-accent" />,
      title: "Encrypted Document Store",
      desc: "Document Archiving vault with role-based access permissions for confidential employee records and contracts."
    }
  ];

  return (
    <section id="security" className="security-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <ShieldCheck size={14} />
            <span>ENTERPRISE SECURITY & COMPLIANCE</span>
          </div>
          <h2>Bank-Grade Security for Your <span className="text-gradient">People Data</span></h2>
          <p>
            Designed from the ground up with multi-layer role security, multi-company isolation, and audit logging.
          </p>
        </div>

        <div className="security-grid">
          {securityFeatures.map((sec, idx) => (
            <div key={idx} className="security-card glass-panel glass-panel-hover">
              <div className="sec-icon-wrap">
                {sec.icon}
              </div>
              <h3>{sec.title}</h3>
              <p>{sec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
