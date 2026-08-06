import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Building, Mail, Phone, User, Users } from 'lucide-react';

export const DemoModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    empCount: '51-200',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="demo-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <div className="badge">
                <Sparkles size={14} />
                <span>BINARYAXON HRMS DEMO</span>
              </div>
              <h2>Book a Personalized <span className="text-gradient">Live Demo</span></h2>
              <p>See all 23 modules tailored to your company's attendance, payroll, and HR workflows.</p>
            </div>

            <form onSubmit={handleSubmit} className="demo-form">
              <div className="form-row">
                <div className="form-group">
                  <label><User size={14} /> Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Usama Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label><Mail size={14} /> Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="usama@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label><Building size={14} /> Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Binaryaxon Systems"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label><Phone size={14} /> Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label><Users size={14} /> Total Employee Count</label>
                <select
                  value={formData.empCount}
                  onChange={(e) => setFormData({ ...formData, empCount: e.target.value })}
                  className="form-input"
                >
                  <option value="1-50">1 - 50 Employees</option>
                  <option value="51-200">51 - 200 Employees</option>
                  <option value="201-500">201 - 500 Employees</option>
                  <option value="501-1000">501 - 1,000 Employees</option>
                  <option value="1000+">1,000+ Enterprise Employees</option>
                </select>
              </div>

              <div className="form-group">
                <label>Key Modules of Interest / Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your payroll, biometric devices, or geo-fencing requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">
                <Sparkles size={18} />
                <span>Confirm & Request Live Demo</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="demo-success-state">
            <CheckCircle2 size={56} className="text-success" />
            <h2>Demo Request Received!</h2>
            <p>
              Thank you <strong>{formData.name}</strong>. Our HRMS Solutions Specialist will contact you at <strong>{formData.email}</strong> shortly to schedule your live 1-on-1 walk-through of Binaryaxon HRMS.
            </p>
            <button className="btn btn-primary w-full mt-4" onClick={onClose}>
              Back to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
