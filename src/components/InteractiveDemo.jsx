import React, { useState } from 'react';
import { 
  LayoutDashboard, User, MapPin, CreditCard, Key, 
  CheckCircle2, Play, RefreshCw, Download, ShieldCheck, 
  Building, Sparkles, FileText, ArrowRight, Utensils,
  Bot, BrainCircuit, Cpu, TrendingUp, Clock, ScanLine
} from 'lucide-react';

export const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("admin");
  
  // Geo-Fencing State
  const [geoPunchStatus, setGeoPunchStatus] = useState(null);
  const [isPunching, setIsPunching] = useState(false);

  // Attendance Simulator State
  const [attPunchStatus, setAttPunchStatus] = useState(null);
  const [isAttPunching, setIsAttPunching] = useState(false);

  // Payroll Simulator State
  const [payrollRunning, setPayrollRunning] = useState(false);
  const [payrollDone, setPayrollDone] = useState(false);

  // Axon Intelligence AI State
  const [aiScanning, setAiScanning] = useState(false);
  const [aiReportDone, setAiReportDone] = useState(true);

  // Gate Pass Scanner State
  const [passScanned, setPassScanned] = useState(false);

  const simulateGeoPunch = () => {
    setIsPunching(true);
    setGeoPunchStatus(null);
    setTimeout(() => {
      setIsPunching(false);
      setGeoPunchStatus({
        success: true,
        lat: "24.8607° N",
        lng: "67.0011° E",
        location: "Karachi Tech Park Geofence (Radius 50m)",
        time: new Date().toLocaleTimeString()
      });
    }, 1200);
  };

  const simulateAttPunch = () => {
    setIsAttPunching(true);
    setAttPunchStatus(null);
    setTimeout(() => {
      setIsAttPunching(false);
      setAttPunchStatus({
        success: true,
        method: "Biometric Hardware + GPS Polygon",
        shift: "Morning General (09:00 AM - 06:00 PM)",
        status: "On Time (Recorded)",
        time: new Date().toLocaleTimeString()
      });
    }, 1100);
  };

  const simulatePayroll = () => {
    setPayrollRunning(true);
    setPayrollDone(false);
    setTimeout(() => {
      setPayrollRunning(false);
      setPayrollDone(true);
    }, 1500);
  };

  const simulateAiScan = () => {
    setAiScanning(true);
    setAiReportDone(false);
    setTimeout(() => {
      setAiScanning(false);
      setAiReportDone(true);
    }, 1400);
  };

  return (
    <section id="live-demo" className="interactive-demo-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge">
            <Sparkles size={14} />
            <span>LIVE INTERACTIVE SYSTEM SIMULATOR</span>
          </div>
          <h2>Experience <span className="text-gradient">Binaryaxon HRMS</span> in Action</h2>
          <p>
            Test real-time admin KPIs, employee self-service, GPS geo-fence validation, Axon AI intelligence, and automated payroll processing below.
          </p>
        </div>

        {/* Demo Navigation Tabs - All Original + New Tabs Included */}
        <div className="demo-tabs-nav glass-panel">
          {/* 1. Admin Dashboard (Original) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            <LayoutDashboard size={18} />
            <span>Admin Dashboard</span>
          </button>
          
          {/* 2. Employee Self-Service (Original) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'employee' ? 'active' : ''}`}
            onClick={() => setActiveTab('employee')}
          >
            <User size={18} />
            <span>Employee Self-Service</span>
          </button>

          {/* 3. Attendance and Geo fencing (New) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'attendance-geo' ? 'active' : ''}`}
            onClick={() => setActiveTab('attendance-geo')}
          >
            <Clock size={18} />
            <span>Attendance and Geo fencing</span>
          </button>

          {/* 4. Axon Intelligence (New) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'axon-ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('axon-ai')}
          >
            <BrainCircuit size={18} />
            <span>Axon Intelligence</span>
          </button>

          {/* 5. Payroll Processing (New) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'payroll-process' ? 'active' : ''}`}
            onClick={() => setActiveTab('payroll-process')}
          >
            <CreditCard size={18} />
            <span>Payroll Processing</span>
          </button>

          {/* 6. GPS Geo-Fencing (Original) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'geofence' ? 'active' : ''}`}
            onClick={() => setActiveTab('geofence')}
          >
            <MapPin size={18} />
            <span>GPS Geo-Fencing</span>
          </button>

          {/* 7. WPS Payroll Engine (Original) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'payroll' ? 'active' : ''}`}
            onClick={() => setActiveTab('payroll')}
          >
            <CreditCard size={18} />
            <span>WPS Payroll Engine</span>
          </button>

          {/* 8. Gate & Meal Pass (Original) */}
          <button 
            className={`demo-tab-btn ${activeTab === 'passes' ? 'active' : ''}`}
            onClick={() => setActiveTab('passes')}
          >
            <Key size={18} />
            <span>Gate & Meal Pass</span>
          </button>
        </div>

        {/* Demo Content Showcase Box */}
        <div className="demo-viewport glass-panel">
          
          {/* TAB 1: ADMIN DASHBOARD */}
          {activeTab === 'admin' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <div>
                  <h3>Enterprise Admin Operational Dashboard</h3>
                  <p className="pane-subdesc">Executive-level headcount metrics, liability breakdown, and real-time approval queues</p>
                </div>
                <span className="badge">Role: HR Director</span>
              </div>

              <div className="demo-stats-row">
                <div className="demo-stat-box">
                  <span className="label">Total Headcount</span>
                  <span className="value">1,245</span>
                  <span className="subtext text-success">+14 new joiners this month</span>
                </div>
                <div className="demo-stat-box">
                  <span className="label">Pending Approvals</span>
                  <span className="value text-warning">8 Requests</span>
                  <span className="subtext">4 Leaves, 2 Loans, 2 Offers</span>
                </div>
                <div className="demo-stat-box">
                  <span className="label">Monthly Payroll Liability</span>
                  <span className="value">$482,900</span>
                  <span className="subtext">Includes Statutory & Allowances</span>
                </div>
                <div className="demo-stat-box">
                  <span className="label">Absenteeism Rate</span>
                  <span className="value text-success">1.8%</span>
                  <span className="subtext">-0.4% vs last month</span>
                </div>
              </div>

              {/* Pending Approvals Table */}
              <div className="pane-subtable">
                <div className="table-header">Real-Time Approval Inbox</div>
                <div className="sim-table">
                  <div className="sim-table-row header">
                    <span>Employee</span>
                    <span>Module Request</span>
                    <span>Details</span>
                    <span>Action</span>
                  </div>
                  <div className="sim-table-row">
                    <span>Muhammad Usama</span>
                    <span><span className="sm-badge blue">Leave Application</span></span>
                    <span>Annual Leave (3 Days)</span>
                    <span><button className="btn-table-approve">Approve</button></span>
                  </div>
                  <div className="sim-table-row">
                    <span>Fatima Tariq</span>
                    <span><span className="sm-badge purple">Loan / Advance</span></span>
                    <span>$1,500 Personal Loan</span>
                    <span><button className="btn-table-approve">Approve</button></span>
                  </div>
                  <div className="sim-table-row">
                    <span>Zainab Ali</span>
                    <span><span className="sm-badge green">Resignation Clearance</span></span>
                    <span>Exit Clearance Trigger</span>
                    <span><button className="btn-table-approve">Review</button></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EMPLOYEE SELF-SERVICE */}
          {activeTab === 'employee' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <div>
                  <h3>Employee Self-Service Portal</h3>
                  <p className="pane-subdesc">Instant payslip downloads, tax certificates, and live attendance calendar</p>
                </div>
                <span className="badge">Logged in: Zain Malik (ID: #EMP-892)</span>
              </div>

              <div className="employee-profile-banner glass-panel">
                <div className="emp-avatar">ZM</div>
                <div className="emp-info">
                  <h4>Zain Malik</h4>
                  <p>Senior Software Architect • Engineering Department</p>
                  <p className="emp-meta">Tenure: 3 Years 4 Months • Branch: Main HQ</p>
                </div>
                <div className="emp-quick-actions">
                  <button className="btn btn-secondary btn-sm" onClick={() => alert("Simulated Payslip Downloaded!")}>
                    <Download size={14} />
                    <span>Download Payslip</span>
                  </button>
                </div>
              </div>

              <div className="attendance-month-grid">
                <div className="grid-header">Current Month Attendance Log (Present: 21 Days, Leave: 1 Day)</div>
                <div className="days-row">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className={`day-chip ${i === 7 ? 'absent' : i === 12 ? 'leave' : 'present'}`}>
                      <span className="day-num">{i + 1}</span>
                      <span className="day-status">{i === 7 ? 'ABS' : i === 12 ? 'LEAVE' : 'PRES'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ATTENDANCE AND GEO FENCING (NEW) */}
          {activeTab === 'attendance-geo' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <div>
                  <h3>Attendance and Geo fencing Simulator</h3>
                  <p className="pane-subdesc">Biometric Machine Logs + Mobile GPS Geofence Polygon Boundary Synchronization</p>
                </div>
                <span className="badge">Biometric & GPS Synced</span>
              </div>

              <div className="geofence-sim-box glass-panel">
                <div className="geo-radar">
                  <div className="radar-circle circle-1"></div>
                  <div className="radar-circle circle-2"></div>
                  <div className="radar-center">
                    <MapPin size={26} className="text-accentPin" />
                  </div>
                </div>

                <div className="geo-controls">
                  <div className="geo-status-tags">
                    <span className="status-tag live">
                      <span className="live-dot" /> Biometric Devices: Online
                    </span>
                    <span className="status-tag polygon">
                      Assigned Shift: General 9AM - 6PM
                    </span>
                  </div>

                  <h4>Verify Real-Time Shift & Geo-Attendance</h4>
                  <p>Syncs biometric punch machine logs and restricts remote mobile clock-ins within authorized geographic polygons.</p>

                  <button 
                    className={`btn btn-primary ${isAttPunching ? 'loading' : ''}`}
                    onClick={simulateAttPunch}
                    disabled={isAttPunching}
                  >
                    {isAttPunching ? <RefreshCw size={18} className="spin-icon" /> : <ScanLine size={18} />}
                    <span>{isAttPunching ? "Syncing Biometric & GPS Punch..." : "Simulate Live Attendance Punch"}</span>
                  </button>

                  {attPunchStatus && (
                    <div className="geo-result-card glass-panel">
                      <CheckCircle2 size={24} className="text-success" />
                      <div>
                        <div className="res-title">Attendance Punch Verified & Synced!</div>
                        <div className="res-meta">
                          Verification Mode: <strong>{attPunchStatus.method}</strong> <br />
                          Shift Schedule: <strong>{attPunchStatus.shift}</strong> <br />
                          Punch Status: <strong>{attPunchStatus.status}</strong> • Timestamp: <strong>{attPunchStatus.time}</strong>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AXON INTELLIGENCE (NEW) */}
          {activeTab === 'axon-ai' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <div>
                  <h3>Axon Intelligence™ AI Workforce Engine</h3>
                  <p className="pane-subdesc">Autonomous Anomaly Detection, Overtime Forecasting & Compliance Guard</p>
                </div>
                <span className="badge badge-ai">
                  <Sparkles size={13} />
                  <span>AI Engine v2.4</span>
                </span>
              </div>

              <div className="axon-ai-grid">
                <div className="ai-stat-card glass-panel">
                  <div className="ai-card-top">
                    <TrendingUp size={20} className="text-accent" />
                    <span className="ai-pill green">Optimized</span>
                  </div>
                  <div className="ai-stat-value">$14,280</div>
                  <div className="ai-stat-label">Projected Overtime Cost Savings</div>
                  <p className="ai-stat-sub">AI suggested roster rebalancing reduced night shift leakage by 18%.</p>
                </div>

                <div className="ai-stat-card glass-panel">
                  <div className="ai-card-top">
                    <ShieldCheck size={20} className="text-success" />
                    <span className="ai-pill blue">100% Compliant</span>
                  </div>
                  <div className="ai-stat-value">Zero Violations</div>
                  <div className="ai-stat-label">WPS & Labour Law Audit</div>
                  <p className="ai-stat-sub">Pre-payroll AI scan detected zero salary variance or unpaid deductions.</p>
                </div>

                <div className="ai-stat-card glass-panel">
                  <div className="ai-card-top">
                    <Cpu size={20} className="text-warning" />
                    <span className="ai-pill orange">3 Action Items</span>
                  </div>
                  <div className="ai-stat-value">Expiry Guard</div>
                  <div className="ai-stat-label">Passport & Visa Alerts</div>
                  <p className="ai-stat-sub">Automated renewal reminders dispatched 60 days before expiration.</p>
                </div>
              </div>

              <div className="ai-interactive-panel glass-panel">
                <div className="ai-panel-header">
                  <div className="ai-header-left">
                    <Bot size={22} className="text-accent" />
                    <div>
                      <h4>Run Live Axon AI Workforce Audit</h4>
                      <p>Scan 1,245 active employee records for shift bottlenecks, leave sandwich patterns, and WPS anomalies.</p>
                    </div>
                  </div>

                  <button 
                    className="btn btn-primary"
                    onClick={simulateAiScan}
                    disabled={aiScanning}
                  >
                    {aiScanning ? <RefreshCw size={16} className="spin-icon" /> : <Sparkles size={16} />}
                    <span>{aiScanning ? "Analyzing Workforce Data..." : "Run AI Health Scan"}</span>
                  </button>
                </div>

                {aiReportDone && (
                  <div className="ai-scan-results">
                    <div className="ai-result-row success">
                      <CheckCircle2 size={18} className="text-success" />
                      <div>
                        <strong>Shift Optimization Recommendation Applied:</strong> 
                        <span> Morning shift headcount aligned with peak client hours in Karachi Tech Park.</span>
                      </div>
                    </div>
                    <div className="ai-result-row info">
                      <CheckCircle2 size={18} className="text-accent" />
                      <div>
                        <strong>Leave Encashment Auto-Calculated:</strong> 
                        <span> 24 eligible employees verified with updated basic salary formulas.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: PAYROLL PROCESSING (NEW) */}
          {activeTab === 'payroll-process' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <div>
                  <h3>1-Click Automated Payroll Processing</h3>
                  <p className="pane-subdesc">Batch salary computation, automated loan deductions, and UAE WPS SIF file creation</p>
                </div>
                <span className="badge">Cycle: Current Fiscal Month</span>
              </div>

              <div className="payroll-sim-container">
                <div className="payroll-step-card glass-panel">
                  <h4>Execute Multi-Company Batch Payroll</h4>
                  <p>Calculates gross salary, tax slabs, loan repayments, and WPS SIF compliance files for 1,245 employees across all branches.</p>

                  <button 
                    className="btn btn-primary"
                    onClick={simulatePayroll}
                    disabled={payrollRunning}
                  >
                    {payrollRunning ? <RefreshCw size={18} className="spin-icon" /> : <Play size={18} />}
                    <span>{payrollRunning ? "Calculating Tax & WPS SIF Files..." : "Run Batch Payroll Execution"}</span>
                  </button>

                  {payrollDone && (
                    <div className="payroll-done-card">
                      <div className="done-header">
                        <CheckCircle2 size={20} className="text-success" />
                        <span>Batch Payroll Calculation Complete!</span>
                      </div>
                      <div className="payroll-breakdown-grid">
                        <div className="pb-item">
                          <span>Total Gross Salary</span>
                          <strong>$482,900.00</strong>
                        </div>
                        <div className="pb-item">
                          <span>Statutory Deductions</span>
                          <strong>$38,400.00</strong>
                        </div>
                        <div className="pb-item">
                          <span>Net Disbursed</span>
                          <strong>$444,500.00</strong>
                        </div>
                        <div className="pb-item">
                          <span>WPS SIF File</span>
                          <strong className="text-accent">Generated & Ready</strong>
                        </div>
                      </div>
                      <button className="btn btn-secondary btn-sm mt-3" onClick={() => alert("WPS SIF Batch File Exported Successfully!")}>
                        <Download size={14} />
                        <span>Export Bank Payment SIF File</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: GPS GEO-FENCING (ORIGINAL) */}
          {activeTab === 'geofence' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <h3>GPS Geo-Fencing Mobile Clock-In Simulator</h3>
                <span className="badge">Mobile Prime HR App</span>
              </div>

              <div className="geofence-sim-box glass-panel">
                <div className="geo-radar">
                  <div className="radar-circle circle-1"></div>
                  <div className="radar-circle circle-2"></div>
                  <div className="radar-center">
                    <MapPin size={24} className="text-accentPin" />
                  </div>
                </div>

                <div className="geo-controls">
                  <h4>Verify Employee Location Coordinates</h4>
                  <p>Simulate mobile app attendance punch within designated project site geofence radius (50 Meters).</p>

                  <button 
                    className={`btn btn-primary ${isPunching ? 'loading' : ''}`}
                    onClick={simulateGeoPunch}
                    disabled={isPunching}
                  >
                    {isPunching ? <RefreshCw size={18} className="spin-icon" /> : <MapPin size={18} />}
                    <span>{isPunching ? "Validating GPS Coordinates..." : "Simulate Mobile Clock-In"}</span>
                  </button>

                  {geoPunchStatus && (
                    <div className="geo-result-card glass-panel">
                      <CheckCircle2 size={24} className="text-success" />
                      <div>
                        <div className="res-title">Punch Validated & Recorded!</div>
                        <div className="res-meta">
                          Coordinates: {geoPunchStatus.lat}, {geoPunchStatus.lng} <br />
                          Geofence Zone: {geoPunchStatus.location} <br />
                          Timestamp: {geoPunchStatus.time}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: WPS PAYROLL ENGINE (ORIGINAL) */}
          {activeTab === 'payroll' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <h3>Automated Multi-Company WPS Payroll Processor</h3>
                <span className="badge">Cycle: Current Fiscal Month</span>
              </div>

              <div className="payroll-sim-container">
                <div className="payroll-step-card glass-panel">
                  <h4>1-Click Payroll Batch Run</h4>
                  <p>Executes gross salary, deductions, loan repayments, and WPS SIF file creation for 1,245 employees.</p>

                  <button 
                    className="btn btn-primary"
                    onClick={simulatePayroll}
                    disabled={payrollRunning}
                  >
                    {payrollRunning ? <RefreshCw size={18} className="spin-icon" /> : <Play size={18} />}
                    <span>{payrollRunning ? "Calculating Tax & WPS SIF Files..." : "Run Batch Payroll Execution"}</span>
                  </button>

                  {payrollDone && (
                    <div className="payroll-done-card">
                      <div className="done-header">
                        <CheckCircle2 size={20} className="text-success" />
                        <span>Batch Payroll Calculation Complete!</span>
                      </div>
                      <div className="payroll-breakdown-grid">
                        <div className="pb-item">
                          <span>Total Gross Salary</span>
                          <strong>$482,900.00</strong>
                        </div>
                        <div className="pb-item">
                          <span>Statutory Deductions</span>
                          <strong>$38,400.00</strong>
                        </div>
                        <div className="pb-item">
                          <span>Net Disbursed</span>
                          <strong>$444,500.00</strong>
                        </div>
                        <div className="pb-item">
                          <span>WPS SIF File</span>
                          <strong className="text-accent">Generated & Ready</strong>
                        </div>
                      </div>
                      <button className="btn btn-secondary btn-sm mt-3" onClick={() => alert("WPS SIF Batch File Exported Successfully!")}>
                        <Download size={14} />
                        <span>Export Bank Payment SIF File</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: GATE & MEAL PASS (ORIGINAL) */}
          {activeTab === 'passes' && (
            <div className="demo-view-pane">
              <div className="pane-header">
                <h3>Gate Pass & Cafeteria Meal Pass Scan Verifier</h3>
                <span className="badge">Security & Facilities Module</span>
              </div>

              <div className="pass-sim-grid">
                <div className="pass-card glass-panel">
                  <div className="pass-type"><Key size={18} /> Material & Visitor Gate Pass</div>
                  <p>Scan visitor QR code or material outward pass barcode at security entry gates.</p>
                  
                  <div className="fake-barcode">||| | |||| | ||| |||| |</div>
                  <button className="btn btn-secondary btn-sm w-full" onClick={() => setPassScanned(true)}>
                    Simulate Gate Scan
                  </button>

                  {passScanned && (
                    <div className="scan-alert success mt-2">
                      <CheckCircle2 size={16} /> Gate Pass #GP-901 Verified • Access Granted
                    </div>
                  )}
                </div>

                <div className="pass-card glass-panel">
                  <div className="pass-type"><Utensils size={18} /> Canteen Meal Pass</div>
                  <p>Validates employee daily meal entitlement at cafeteria counters.</p>
                  
                  <div className="meal-entitlement-badge">Entitlement: 1 Lunch Pass Active</div>
                  <button className="btn btn-primary btn-sm w-full mt-2" onClick={() => alert("Meal coupon scanned successfully! Meal log updated.")}>
                    Scan Canteen ID Card
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
