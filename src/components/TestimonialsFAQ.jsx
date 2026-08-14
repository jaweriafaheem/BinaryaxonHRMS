import React, { useState } from 'react';
import { HelpCircle, Star, Quote, Search, X, Plus, Minus } from 'lucide-react';

export const TestimonialsFAQ = () => {
  const testimonials = [
    {
      quote: "Binaryaxon HRMS completely eliminated our end-of-month payroll headache. Generating WPS SIF files for 800+ employees across 4 subsidiaries now takes under 10 minutes.",
      author: "Tariq Mahmood",
      role: "Head of People & Operations",
      company: "Apex Global Enterprise"
    },
    {
      quote: "The Geo-Fencing and Mobile Gate Pass modules have been game-changers for our construction sites. We have 100% visibility over field attendance without buddy punching.",
      author: "Farhan Siddiqui",
      role: "Group HR Manager",
      company: "Crestline Engineering"
    }
  ];

  const faqs = [
    {
      q: "Does Binaryaxon HRMS support multiple companies and branches?",
      a: "Yes! The Setup module features complete Multi-Company support. You can configure multiple legal entities, each with independent departments, designation categories, grade structures, and role permission sets within a single installation."
    },
    {
      q: "How does biometric machine attendance integration work?",
      a: "Binaryaxon HRMS connects directly with IP biometric devices (face, fingerprint, and palm recognition). Attendance punches are auto-synchronized into the system in real-time, feeding directly into shift computation and monthly payroll."
    },
    {
      q: "Is the system compliant with UAE & GCC Wage Protection System (WPS)?",
      a: "Absolutely. The Payroll Management module automatically calculates salary components, statutory payments, and generates standard bank advice and WPS SIF (Salary Information File) formats for instant bank submission."
    },
    {
      q: "Can field employees check-in using mobile GPS?",
      a: "Yes. The Geo-Fencing module allows managers to define circular or polygonal GPS geofence zones. Employees can clock-in via the Prime HR mobile app only when within authorized GPS boundaries."
    },
    {
      q: "How granular is the Security and Role-Based Access Control?",
      a: "The Security module provides page-level permission controls (Read, Write, Edit, Delete, Approve) for every screen. You can bundle these permission sets into custom roles (e.g. HR Admin, Payroll Officer, Branch Manager)."
    }
  ];

  const [openFaq, setOpenFaq] = useState(faqs[0].q);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="testimonials-faq-section">
      <div className="container">
        
        {/* Testimonials Block */}
        <div className="testimonials-block">
          <div className="section-header">
            <div className="badge">CLIENT SUCCESS STORIES</div>
            <h2>Trusted by Enterprise <span className="text-gradient">HR Leaders</span></h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card glass-panel">
                <Quote size={28} className="quote-icon text-accent" />
                <p className="testimonial-text">"{t.quote}"</p>
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-warning)" color="var(--color-warning)" />
                  ))}
                </div>
                <div className="author-info">
                  <div className="author-name">{t.author}</div>
                  <div className="author-role">{t.role} • {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Block */}
        <div className="faq-block mt-5">
          <div className="section-header text-center">
            <div className="badge">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2>Got Questions? <span className="text-gradient">We Have Answers</span></h2>
          </div>

          <div className="faq-unified-card glass-panel mt-4">
            {/* Top: Search Section */}
            <div className="faq-search-section">
              <div className="faq-search-wrapper">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search question here..."
                  className="faq-search-input"
                />
                {searchQuery && (
                  <button 
                    className="clear-search-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Bottom: Split Grid inside Card */}
            <div className="faq-content-grid">
              
              {/* Left Column: Accordion */}
              <div className="faq-accordion-column">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`faq-item ${openFaq === faq.q ? 'open' : ''}`}
                      onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                    >
                      <div className="faq-question">
                        <span>{faq.q}</span>
                        <span className="faq-toggle-icon">
                          {openFaq === faq.q ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </div>
                      {openFaq === faq.q && (
                        <div className="faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="faq-no-results">
                    <HelpCircle size={28} className="no-results-icon" />
                    <p>No matches found for "{searchQuery}"</p>
                  </div>
                )}
              </div>

              {/* Right Column: Illustration Image */}
              <div className="faq-illustration-column">
                <img 
                  src="/images/faq-illustration.png" 
                  alt="Frequently Asked Questions Illustration" 
                  className="faq-unified-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

