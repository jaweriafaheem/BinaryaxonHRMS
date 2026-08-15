import React, { useState } from 'react';
import { User, Briefcase } from 'lucide-react';

export const DoubleWins = () => {
  const [activeTab, setActiveTab] = useState('employers'); // Default to 'employers' in the mockup

  const employeeData = [
    {
      id: 'data-ease',
      title: 'Data Ease',
      desc: 'Your personal info is at your fingertips from pay slips, company policies, documents and more.',
      image: '/images/benefits-security.png' // Clean security/dashboard illustration
    },
    {
      id: 'direct-access',
      title: 'Direct Access',
      desc: 'Requesting a day off? Clocking in or out? Manage it all on the move, straight from your smartphone.',
      image: '/images/benefits-gps.png' // Mobile GPS/card illustration
    },
    {
      id: 'task-clarity',
      title: 'Task Clarity',
      desc: 'Embrace more clarity with day-to-day tasks, team projects and departmental or regional updates.',
      image: '/images/benefits-workforce.png' // Workforce collaboration illustration
    }
  ];

  const employerData = [
    {
      id: 'robust-security',
      title: 'Robust Security',
      desc: 'Protect important documents, integrate systems, and stay compliant with changing GCC regulations confidently.',
      image: '/images/benefits-security.png'
    },
    {
      id: 'operational-efficiency',
      title: 'Operational Efficiency',
      desc: 'Our single solution untangles HR operations, syncing core processes from hiring to retiring.',
      image: '/images/benefits-efficiency.png'
    },
    {
      id: 'engaged-workforce',
      title: 'Engaged Workforce',
      desc: 'Empower teams with access to key information and tasks, building trust and accountability.',
      image: '/images/benefits-workforce.png'
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        
        {/* Badge and Title */}
        <div className="benefits-header">
          <div className="benefits-badge">EMPLOYER - EMPLOYEE BENEFITS</div>
          <h2 className="benefits-title">Double The Wins</h2>
        </div>

        {/* Tab Switcher */}
        <div className="benefits-tabs-wrapper">
          <div className="benefits-tabs">
            <button 
              className={`benefit-tab-btn ${activeTab === 'employees' ? 'active' : ''}`}
              onClick={() => setActiveTab('employees')}
            >
              <span className="tab-icon-circle employee-icon">
                <User size={16} />
              </span>
              <span className="tab-text">For Employees</span>
            </button>
            
            <button 
              className={`benefit-tab-btn ${activeTab === 'employers' ? 'active' : ''}`}
              onClick={() => setActiveTab('employers')}
            >
              <span className="tab-icon-circle employer-icon">
                <Briefcase size={16} />
              </span>
              <span className="tab-text">For Employers</span>
            </button>
          </div>
        </div>

        {/* Active Content Grid */}
        {activeTab === 'employees' ? (
          <div className="benefits-grid">
            <div className="benefits-left-col">
              {/* Card 1: Data Ease */}
              <div className="benefit-card glass-panel" style={{ backgroundImage: `url(${employeeData[0].image})` }}>
                <div className="benefit-card-overlay">
                  <h3 className="benefit-card-title">{employeeData[0].title}</h3>
                  <p className="benefit-card-desc">{employeeData[0].desc}</p>
                </div>
              </div>

              {/* Card 2: Direct Access */}
              <div className="benefit-card glass-panel" style={{ backgroundImage: `url(${employeeData[1].image})` }}>
                <div className="benefit-card-overlay">
                  <h3 className="benefit-card-title">{employeeData[1].title}</h3>
                  <p className="benefit-card-desc">{employeeData[1].desc}</p>
                </div>
              </div>
            </div>

            <div className="benefits-right-col">
              {/* Card 3: For Employees Large Active */}
              <div className="benefit-card-large glass-panel">
                <div className="benefit-large-content">
                  <h3 className="benefit-large-title">For Employees</h3>
                </div>
                <div className="benefit-large-img-wrapper">
                  <img 
                    src="/images/benefits-employees-main.png" 
                    alt="For Employees Banner" 
                    className="benefit-large-img"
                  />
                </div>
              </div>

              {/* Card 4: Task Clarity */}
              <div className="benefit-card glass-panel" style={{ backgroundImage: `url(${employeeData[2].image})` }}>
                <div className="benefit-card-overlay">
                  <h3 className="benefit-card-title">{employeeData[2].title}</h3>
                  <p className="benefit-card-desc">{employeeData[2].desc}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="benefits-grid">
            <div className="benefits-left-col">
              {/* Card 1: Robust Security */}
              <div className="benefit-card glass-panel" style={{ backgroundImage: `url(${employerData[0].image})` }}>
                <div className="benefit-card-overlay">
                  <h3 className="benefit-card-title">{employerData[0].title}</h3>
                  <p className="benefit-card-desc">{employerData[0].desc}</p>
                </div>
              </div>

              {/* Card 2: Operational Efficiency */}
              <div className="benefit-card glass-panel" style={{ backgroundImage: `url(${employerData[1].image})` }}>
                <div className="benefit-card-overlay">
                  <h3 className="benefit-card-title">{employerData[1].title}</h3>
                  <p className="benefit-card-desc">{employerData[1].desc}</p>
                </div>
              </div>
            </div>

            <div className="benefits-right-col">
              {/* Card 3: For Employers Large Active */}
              <div className="benefit-card-large glass-panel">
                <div className="benefit-large-content">
                  <h3 className="benefit-large-title">For Employers</h3>
                </div>
                <div className="benefit-large-img-wrapper">
                  <img 
                    src="/images/benefits-employers-main.png" 
                    alt="For Employers Banner" 
                    className="benefit-large-img"
                  />
                </div>
              </div>

              {/* Card 4: Engaged Workforce */}
              <div className="benefit-card glass-panel" style={{ backgroundImage: `url(${employerData[2].image})` }}>
                <div className="benefit-card-overlay">
                  <h2 className="benefit-card-title" style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{employerData[2].title}</h2>
                  <p className="benefit-card-desc">{employerData[2].desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default DoubleWins;
