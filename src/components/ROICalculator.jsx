import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles } from 'lucide-react';

export const ROICalculator = ({ onOpenDemoModal }) => {
  const [employeeCount, setEmployeeCount] = useState(150);
  const [avgHourlyCost, setAvgHourlyCost] = useState(25);

  // Calculations
  const hoursSavedPerEmpMonthly = 3.5; // Average hours saved per employee per month with automated HRMS
  const totalHoursSavedMonthly = Math.round(employeeCount * hoursSavedPerEmpMonthly);
  const totalFinancialSavingsMonthly = Math.round(totalHoursSavedMonthly * avgHourlyCost);
  const totalAnnualSavings = totalFinancialSavingsMonthly * 12;

  return (
    <section id="roi-calculator" className="roi-calculator-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Calculator size={14} />
            <span>ENTERPRISE ROI CALCULATOR</span>
          </div>
          <h2>Calculate Your <span className="text-gradient">Time & Cost Savings</span></h2>
          <p>
            Discover how much time and money your organization saves by replacing legacy manual HR processes with Binaryaxon HRMS.
          </p>
        </div>

        <div className="roi-calculator-card glass-panel">
          <div className="roi-grid">
            
            {/* Controls */}
            <div className="roi-controls">
              <div className="control-group">
                <div className="control-label-row">
                  <label htmlFor="emp-slider">Number of Employees:</label>
                  <span className="control-val">{employeeCount} Employees</span>
                </div>
                <input
                  id="emp-slider"
                  type="range"
                  min="20"
                  max="3000"
                  step="10"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="roi-slider"
                />
                <div className="slider-minmax">
                  <span>20 Staff</span>
                  <span>3,000 Staff</span>
                </div>
              </div>

              <div className="control-group mt-4">
                <div className="control-label-row">
                  <label htmlFor="cost-slider">Average HR / Staff Hourly Rate ($):</label>
                  <span className="control-val">${avgHourlyCost} / hr</span>
                </div>
                <input
                  id="cost-slider"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={avgHourlyCost}
                  onChange={(e) => setAvgHourlyCost(Number(e.target.value))}
                  className="roi-slider"
                />
              </div>

              <div className="roi-assumptions">
                <div className="assumption-title">Automation Impact Factor:</div>
                <ul>
                  <li>• Eliminates manual attendance roster entry</li>
                  <li>• 1-Click WPS & Payroll Calculation engine</li>
                  <li>• Automated leave accruals & loan ledger tracking</li>
                </ul>
              </div>
            </div>

            {/* Results Display */}
            <div className="roi-results-pane glass-panel">
              <h3 className="results-heading">Estimated ROI Summary</h3>

              <div className="result-metric-card">
                <div className="metric-icon">
                  <Clock size={24} className="text-accent" />
                </div>
                <div>
                  <div className="metric-label">Monthly Admin Hours Saved</div>
                  <div className="metric-val text-accent">{totalHoursSavedMonthly.toLocaleString()} Hours / mo</div>
                </div>
              </div>

              <div className="result-metric-card highlight">
                <div className="metric-icon gold">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="metric-label">Estimated Annual Cost Savings</div>
                  <div className="metric-val text-gradient">${totalAnnualSavings.toLocaleString()} / year</div>
                </div>
              </div>

              <div className="roi-cta-box">
                <p>Ready to unlock these savings for your organization?</p>
                <button className="btn btn-primary w-full" onClick={onOpenDemoModal}>
                  <Sparkles size={16} />
                  <span>Request Custom ROI Breakdown</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
