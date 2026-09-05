import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles, Info } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const ROICalculator = ({ onOpenDemoModal }) => {
  const [stepIndex, setStepIndex] = useState(2); // Default is Index 2 (50 employees)
  const [billingCycle, setBillingCycle] = useState('yearly'); // Default is yearly billing

  const EMPLOYEE_STEPS = [10, 25, 50, 100, 500];
  const RATE_STEPS = [20, 18, 15, 12, 10]; // $ per employee per month (always the same base rate)

  const employeeCount = EMPLOYEE_STEPS[stepIndex];
  const ratePerEmployee = RATE_STEPS[stepIndex];
  const standardRate = 20;
  
  const isYearly = billingCycle === 'yearly';

  // Cost calculations
  const standardCostMonthly = employeeCount * standardRate;
  const standardCostAnnually = standardCostMonthly * 12;

  const actualCostMonthly = employeeCount * ratePerEmployee;
  const actualCostAnnually = actualCostMonthly * 12 * 0.85; // 15% yearly discount

  // Current display period values
  const currentPeriodCost = isYearly ? actualCostAnnually : actualCostMonthly;
  const currentPeriodStandardCost = isYearly ? standardCostAnnually : standardCostMonthly;
  
  // Volume savings & Yearly savings
  const volumeSavingsMonthly = (standardRate - ratePerEmployee) * employeeCount;
  const volumeSavingsAnnually = volumeSavingsMonthly * 12;
  const yearlyPlanSavingsAnnually = isYearly ? (actualCostMonthly * 12 * 0.15) : 0;
  
  const totalSavingsAnnually = standardCostAnnually - actualCostAnnually;
  const totalSavingsMonthly = standardCostMonthly - actualCostMonthly;

  const currentPeriodSavings = isYearly ? totalSavingsAnnually : totalSavingsMonthly;
  const savingPercentage = Math.round((currentPeriodSavings / currentPeriodStandardCost) * 100);

  // Administrative / HR impact calculations
  const hoursSavedPerEmpMonthly = 3.5; 
  const avgHourlyCost = 25; // Internal fixed average hourly rate for HR staff
  const totalHoursSavedMonthly = Math.round(employeeCount * hoursSavedPerEmpMonthly);
  const adminSavingsAnnually = totalHoursSavedMonthly * avgHourlyCost * 12;

  return (
    <section id="roi-calculator" className="roi-calculator-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Calculator size={14} className="text-accent" />
            <span>ENTERPRISE Pricing CALCULATOR</span>
          </div>
          <h2>Calculate Your <span className="text-gradient">Time & Cost Savings</span></h2>
          <p>
            Experience dynamic scaling. As your organization grows, Binaryaxon HRMS pricing per employee decreases. Switch to annual billing for premium 15% savings.
          </p>
        </div>

        <div className="roi-calculator-card glass-panel">
          
          {/* Billing Cycle Switch */}
          <div className="billing-toggle-wrapper">
            <div className="billing-toggle-container">
              <button
                type="button"
                className={`billing-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly Plan
              </button>
              <button
                type="button"
                className={`billing-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly Plan
                <span className="save-discount-badge">Save 15%</span>
              </button>
            </div>
          </div>

          <div className="roi-grid">
            
            {/* Controls */}
            <div className="roi-controls">
              <div className="control-group">
                <div className="control-label-row">
                  <label htmlFor="emp-slider">Number of Employees:</label>
                  <span className="control-val">{employeeCount} Employees</span>
                </div>
                
                <div className="slider-container">
                  <input
                    id="emp-slider"
                    type="range"
                    min="0"
                    max="4"
                    step="1"
                    value={stepIndex}
                    onChange={(e) => setStepIndex(Number(e.target.value))}
                    className="roi-slider"
                  />
                  <div className="slider-ticks-container">
                    {EMPLOYEE_STEPS.map((step, idx) => (
                      <div 
                        key={step} 
                        className={`slider-tick ${idx === stepIndex ? 'active' : ''}`}
                        onClick={() => setStepIndex(idx)}
                      >
                        <span className="slider-tick-dot"></span>
                        <span>{step} Staff</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Rate Info Card */}
              <div className="rate-info-card">
                <div>
                  <div className="rate-info-label">Custom Member Rate</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
                    <Info size={10} /> Tier pricing scales automatically
                  </div>
                </div>
                <div className="rate-info-value">
                  <div className="rate-price-row">
                    {ratePerEmployee < standardRate && (
                      <span className="rate-original">${standardRate.toFixed(2)}</span>
                    )}
                    <span className="rate-current">${ratePerEmployee % 1 === 0 ? ratePerEmployee : ratePerEmployee.toFixed(2)}</span>
                    <span className="rate-postfix">/ emp / mo</span>
                  </div>
                  {ratePerEmployee < standardRate && (
                    <span className="rate-savings-badge">
                      {Math.round(((standardRate - ratePerEmployee) / standardRate) * 100)}% Overall Off
                    </span>
                  )}
                </div>
              </div>

              <div className="roi-assumptions">
                <div className="assumption-title">Automation Impact Factor:</div>
                <ul>
                  <li>• Eliminates manual attendance and roster entry via automated geofencing</li>
                  <li>• 1-Click WPS & Payroll Calculation engine reduces HR admin tasks by 80%</li>
                  <li>• Automated leave accruals, loan tracking & employee self-service</li>
                </ul>
              </div>
            </div>

            {/* Results Display */}
            <div className="roi-results-pane glass-panel">
              <h3 className="results-heading">Estimated Pricing Summary</h3>

              {/* pricing table breakdown */}
              <div className="price-breakdown-details">
                <div className="breakdown-row">
                  <span className="breakdown-label">Standard Cost (No Scale)</span>
                  <span className="breakdown-value">${Math.round(isYearly ? standardCostAnnually : standardCostMonthly).toLocaleString()}</span>
                </div>
                
                {volumeSavingsAnnually > 0 && (
                  <div className="breakdown-row">
                    <span className="breakdown-label">Volume Scale Discount</span>
                    <span className="breakdown-value discount">
                      -${Math.round(isYearly ? volumeSavingsAnnually : volumeSavingsMonthly).toLocaleString()}
                    </span>
                  </div>
                )}
                
                {isYearly && yearlyPlanSavingsAnnually > 0 && (
                  <div className="breakdown-row">
                    <span className="breakdown-label">Yearly Subscription Discount (15%)</span>
                    <span className="breakdown-value discount">-${Math.round(yearlyPlanSavingsAnnually).toLocaleString()}</span>
                  </div>
                )}

                <div className="breakdown-row total-line">
                  <span className="breakdown-label">Your {isYearly ? 'Annual' : 'Monthly'} Subscription</span>
                  <span className="breakdown-value highlight-total">
                    ${Math.round(currentPeriodCost).toLocaleString()}
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 600 }}>/{isYearly ? 'yr' : 'mo'}</span>
                  </span>
                </div>
              </div>

              {/* Total Savings Highlight */}
              <div className="result-metric-card highlight">
                <div className="metric-icon gold">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="metric-label">Total Savings Amount</div>
                  <div className="metric-val text-gradient">
                    ${Math.round(currentPeriodSavings).toLocaleString()} / {isYearly ? 'year' : 'month'}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-success)', marginTop: '2px' }}>
                    You save overall {savingPercentage}% on this package tier!
                  </div>
                </div>
              </div>


              <div className="roi-cta-box">
                <p>Ready to unlock these savings for your organization?</p>
                <ShinyButton className="w-full" onClick={onOpenDemoModal}>
                  <Sparkles size={16} />
                  <span>Request Custom Pricing Breakdown</span>
                </ShinyButton>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

