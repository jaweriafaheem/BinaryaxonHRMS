import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export const DemoModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', description: '' });
    onClose();
  };

  return (
    <div className="demo-modal-overlay" onClick={handleClose}>
      <div 
        className="demo-modal-wrapper" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="demo-modal-header">
          <div>
            <h2>Request Demo</h2>
            <p className="demo-product-subtitle">Product: Binaryaxon HRMS</p>
          </div>
          <button onClick={handleClose} className="demo-modal-close" aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="demo-modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="demo-modal-form">
              <div className="demo-form-group">
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="demo-form-input"
                />
                <label htmlFor="modal-name" className="demo-form-label">
                  Full Name
                </label>
              </div>

              <div className="demo-form-group">
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="demo-form-input"
                />
                <label htmlFor="modal-email" className="demo-form-label">
                  Email Address
                </label>
              </div>

              <div className="demo-form-group">
                <textarea
                  id="modal-description"
                  name="description"
                  required
                  placeholder=" "
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="demo-form-textarea"
                />
                <label htmlFor="modal-description" className="demo-form-label">
                  Specific Requirements
                </label>
              </div>

              <button type="submit" className="demo-submit-btn">
                Send Request
              </button>
            </form>
          ) : (
            <div className="demo-success-state">
              <div className="demo-success-checkmark">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3>Request Received!</h3>
              <p>
                Thank you for your interest in <span className="highlight-text">Binaryaxon HRMS</span>. Our team will contact you shortly to schedule your personalized demo.
              </p>
              <button onClick={handleClose} className="demo-close-window-btn">
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
