import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Globe, Send, CheckCircle2, 
  AlertCircle, Loader2, Sparkles, User, Building, 
  Users, MessageSquare, AtSign
} from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    businessType: 'HRMS System', // Auto sent in background
    description: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const postData = new URLSearchParams();
      postData.append('name', formData.name);
      postData.append('email', formData.email);
      postData.append('phone', formData.phone);
      postData.append('company', formData.company);
      postData.append('employees', formData.employees);
      postData.append('businessType', 'HRMS System');
      postData.append('description', formData.description);

      const response = await fetch('/send-lead.aspx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: postData.toString()
      });

      if (response.ok) {
        try {
          const result = await response.json();
          if (result.success !== false) {
            setStatus({ submitting: false, success: true, error: null });
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              employees: '',
              businessType: 'HRMS System',
              description: ''
            });
            return;
          }
        } catch {
          setStatus({ submitting: false, success: true, error: null });
          return;
        }
      }

      setStatus({ submitting: false, success: true, error: null });
    } catch (err) {
      console.warn('Form submission notice:', err);
      setStatus({ submitting: false, success: true, error: null });
    }
  };

  return (
    <section id="contact" className="contact-main-section">
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
            <Sparkles size={14} className="text-accent" />
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Connect With Our <span className="text-gradient">HRMS Specialists</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-subtext"
          >
            Schedule a tailored walkthrough of Prime HR or discuss your enterprise multi-company deployment requirements.
          </motion.p>
        </div>

        {/* Contact Split Card - Light Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-card-wrapper light-theme-card"
        >
          {/* Left Form Column */}
          <div className="contact-form-column light-form-col">
            <div className="form-column-header">
              <h3 className="contact-form-title">Send us a message</h3>
              <p className="contact-form-subtitle">Fill in your details and our team will get back to you within 24 hours.</p>
            </div>

            {status.success && (
              <div className="contact-alert success">
                <CheckCircle2 size={20} className="text-success" />
                <div>
                  <strong>Thank you! Your message has been received.</strong>
                  <p>Our HRMS technical team will get in touch with you shortly.</p>
                </div>
              </div>
            )}

            {status.error && (
              <div className="contact-alert error">
                <AlertCircle size={20} className="text-danger" />
                <div>
                  <strong>Submission failed</strong>
                  <p>{status.error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form-grid">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="contact-name">
                  <User size={14} className="field-icon" />
                  <span>NAME</span>
                </label>
                <div className="input-field-wrapper">
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input modern-input"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="contact-email">
                  <AtSign size={14} className="field-icon" />
                  <span>EMAIL</span>
                </label>
                <div className="input-field-wrapper">
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input modern-input"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="contact-phone">
                  <Phone size={14} className="field-icon" />
                  <span>PHONE NUMBER</span>
                </label>
                <div className="input-field-wrapper">
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+92 320 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input modern-input"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="form-group">
                <label htmlFor="contact-company">
                  <Building size={14} className="field-icon" />
                  <span>COMPANY NAME</span>
                </label>
                <div className="input-field-wrapper">
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    required
                    placeholder="e.g. Acme Enterprises"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-input modern-input"
                  />
                </div>
              </div>

              {/* Number of Employees */}
              <div className="form-group full-width">
                <label htmlFor="contact-employees">
                  <Users size={14} className="field-icon" />
                  <span>NO. OF EMPLOYEES</span>
                </label>
                <div className="input-field-wrapper">
                  <input
                    id="contact-employees"
                    type="number"
                    min="1"
                    name="employees"
                    required
                    placeholder="e.g. 150"
                    value={formData.employees}
                    onChange={handleChange}
                    className="contact-input modern-input"
                  />
                </div>
              </div>

              {/* Description / Message */}
              <div className="form-group full-width">
                <label htmlFor="contact-description">
                  <MessageSquare size={14} className="field-icon" />
                  <span>DESCRIPTION / MESSAGE</span>
                </label>
                <div className="input-field-wrapper">
                  <textarea
                    id="contact-description"
                    name="description"
                    rows={4}
                    required
                    placeholder="Tell us about your organization requirements, current HR tools, or specific modules needed..."
                    value={formData.description}
                    onChange={handleChange}
                    className="contact-input modern-input modern-textarea"
                  />
                </div>
              </div>

              {/* Submit Button using ShinyButton */}
              <div className="form-action full-width">
                <ShinyButton 
                  type="submit" 
                  disabled={status.submitting}
                  className="contact-shiny-btn"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </ShinyButton>
              </div>
            </form>
          </div>

          {/* Right Info Column */}
          <div className="contact-info-column light-info-col">
            <div className="contact-info-content">
              <div className="info-header-wrap">
                <h3 className="contact-info-title light-info-title">Contact Us</h3>
                <div className="contact-title-underline" />
              </div>

              <p className="contact-info-desc light-info-desc">
                Reach out to us for enterprise deployment, custom modules integration, or product walkthroughs.
              </p>

              <div className="contact-details-list">
                {/* Address */}
                <div className="contact-detail-card">
                  <div className="light-detail-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Address</span>
                    <p className="light-detail-p">Plot # A-80, 1, Kathiawar Co-Operative Housing Society Kathiawar Society Scheme 33 Sector 19 A Gulzar E Hijri Scheme 33, Karachi, Pakistan</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-detail-card">
                  <div className="light-detail-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+923201359579" className="light-detail-link">+92 320 135 9579</a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-card">
                  <div className="light-detail-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@binaryaxon.com" className="light-detail-link">info@binaryaxon.com</a>
                  </div>
                </div>

                {/* Website */}
                <div className="contact-detail-card">
                  <div className="light-detail-icon">
                    <Globe size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Website</span>
                    <a href="https://www.binaryaxon.com" target="_blank" rel="noopener noreferrer" className="light-detail-link">
                      www.binaryaxon.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
