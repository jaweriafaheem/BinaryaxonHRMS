export const MODULES_DATA = [
  {
    id: 1,
    name: "Dashboard",
    category: "Core HR",
    icon: "LayoutDashboard",
    shortDesc: "Real-time HR KPIs, workforce analytics, and role-tailored self-service dashboards.",
    description: "Tailored by role — Administrators access enterprise-wide HR operational intelligence, financial liabilities, and attendance charts, while employees see a personalized self-service snapshot.",
    subModules: [
      { name: "Admin Dashboard", desc: "Real-time KPIs (Active, Permanent, Daily Wagers), Pending Approvals, HR Costs & Liabilities, Attendance Trend Graphs." },
      { name: "Employee Dashboard", desc: "Personal snapshot, tenure, current month attendance grid, payslip shortcuts, pending doc alerts, real-time geo map view." }
    ],
    features: [
      "Real-time headcount KPIs (Permanent, Contractual, Daily Wagers)",
      "HR Cost breakdown (Invoices, Statutory Payments, Cheques)",
      "Monthly Active Employee & Absenteeism trend charts",
      "Employee attendance snapshot with star rating & pay shortcut",
      "Interactive Geo-Location map view for field staff"
    ]
  },
  {
    id: 2,
    name: "Personal",
    category: "Core HR",
    icon: "User",
    shortDesc: "Employee self-service portal for company policies, monthly payslips, and tax certificates.",
    description: "Empowers employees to securely view and download company documentation, combined payslips, and annual tax certificates without HR intervention.",
    subModules: [
      { name: "Company Policy", desc: "Centralized policy repository with instant PDF download access for active staff." },
      { name: "PaySlip", desc: "Filter payslips by company, department, and custom date range. Supports multi-component merging." },
      { name: "Tax Certificate", desc: "Annual fiscal tax certificates download for easy tax filing compliance." }
    ],
    features: [
      "Direct PDF download of official company policies",
      "Custom date-range payslip filtering and batch viewing",
      "Merge multi-component payslips into single document",
      "Annual tax certificate downloads filtered by fiscal year"
    ]
  },
  {
    id: 3,
    name: "Employee Queries",
    category: "Core HR",
    icon: "MessageSquare",
    shortDesc: "Streamlined HR workflow for processing employee profile updates and data requests.",
    description: "Provides a controlled channel for employees to request profile modifications or information updates, subject to HR review and approval.",
    subModules: [
      { name: "Pending Queries", desc: "HR inbox of unverified employee profile update requests awaiting verification." },
      { name: "Processed Queries", desc: "Historical record of approved and rejected profile data change requests." }
    ],
    features: [
      "Employee profile update request submission",
      "HR verification with side-by-side data comparison",
      "Automated notification upon query approval or rejection",
      "Complete audit trail of profile change requests"
    ]
  },
  {
    id: 4,
    name: "Attendance",
    category: "Time & Attendance",
    icon: "Clock",
    shortDesc: "End-to-end time & attendance tracking with biometric sync and roster management.",
    description: "Captures attendance from biometric devices, mobile apps, and manual inputs, automatically processing shifts, rosters, and overtime calculations.",
    subModules: [
      { name: "Biometric Device Machine", desc: "Direct integration with IP biometric hardware and facial recognition devices." },
      { name: "Manual Attendance", desc: "HR override for authorized manual attendance entries and corrections." },
      { name: "Overtime Setup & Process", desc: "Configurable overtime rules, rates, and multi-level approval workflows." },
      { name: "Roster Setup", desc: "Flexible shift definition, rotational rosters, and night shift tracking." }
    ],
    features: [
      "Real-time biometric attendance machine auto-synchronization",
      "Rotational shift and flexible roster management",
      "Automated overtime calculation based on company policies",
      "Real-time late arrival and early departure flags"
    ]
  },
  {
    id: 5,
    name: "Leave Management",
    category: "Time & Attendance",
    icon: "Calendar",
    shortDesc: "Comprehensive leave policy engine, holiday calendars, and automated approval workflows.",
    description: "Manages leave quotas, encashments, public holidays, and employee leave requests through multi-level approval chains.",
    subModules: [
      { name: "Leave Application", desc: "Self-service leave submission with balance check and document attachment." },
      { name: "Leave Approval", desc: "Manager approval workflow with delegation and escalation rules." },
      { name: "Leave Policy", desc: "Configure paid, casual, medical, maternity, and earned leave rules." },
      { name: "Public Holidays", desc: "Multi-company annual public holiday calendar management." }
    ],
    features: [
      "Real-time leave balance validation during application",
      "Multi-tier manager approval workflow with instant notification",
      "Customizable leave policy engine per employee grade/type",
      "Automated leave accrual and annual encashment logic"
    ]
  },
  {
    id: 6,
    name: "Payroll Management",
    category: "Payroll & Financials",
    icon: "CreditCard",
    shortDesc: "Full-cycle multi-company payroll processing, WPS generation, and statutory compliance.",
    description: "Automates complex monthly salary processing, statutory deductions, bank transfer advice, WPS SIF file generation, and end-of-service settlements.",
    subModules: [
      { name: "Payroll Setup", desc: "Salary components, allowances, tax slabs, and deduction master rules." },
      { name: "Payroll Process", desc: "One-click batch payroll execution, validation, and hold/release controls." },
      { name: "Payroll Reports", desc: "Salary sheets, bank payment advice files, WPS compliance SIF files, and cost allocations." }
    ],
    features: [
      "One-click multi-company monthly salary calculation",
      "Automated UAE/GCC Wage Protection System (WPS) SIF file creation",
      "Customizable allowance, bonus, and deduction formulas",
      "Bank transfer file generation for all major financial institutions"
    ]
  },
  {
    id: 7,
    name: "Geo Fencing",
    category: "Operations & Field",
    icon: "MapPin",
    shortDesc: "GPS-validated mobile attendance and field employee location verification.",
    description: "Ensures field force accountability by restricting mobile clock-ins to authorized GPS geofences and tracking employee check-in coordinates.",
    subModules: [
      { name: "Geofence Zones", desc: "Define precise circular or polygonal GPS boundary coordinates for sites and offices." },
      { name: "Mobile Attendance", desc: "Mobile app punch validation against defined geofence boundaries with selfie capture." }
    ],
    features: [
      "Real-time GPS coordinate validation for remote punches",
      "Configurable geofence radius per branch or project site",
      "Map view tracking for field sales and service staff",
      "Offline punch buffer with auto-sync when online"
    ]
  },
  {
    id: 8,
    name: "Advance / Loan",
    category: "Payroll & Financials",
    icon: "DollarSign",
    shortDesc: "Employee financial assistance management with automated salary deductions.",
    description: "Handles salary advance and loan requisitions from application through approval, disbursement tracking, and monthly salary deduction scheduling.",
    subModules: [
      { name: "Loan Request", desc: "Employee loan application with tenure selection and purpose declaration." },
      { name: "Loan Approval", desc: "HR & Finance approval chain with credit limit validation." },
      { name: "Deduction Schedule", desc: "Automated monthly payroll deduction schedule generator." }
    ],
    features: [
      "Configurable maximum loan limits based on employee gross salary",
      "Automated monthly repayment scheduling integrated into payroll",
      "Loan ledger with real-time outstanding balance tracking",
      "Early settlement and lump-sum adjustment support"
    ]
  },
  {
    id: 9,
    name: "Document Archiving",
    category: "Governance & Data",
    icon: "FolderCheck",
    shortDesc: "Digital document repository with expiry alerts and mandatory file collection rules.",
    description: "Centralizes digital employee records (Passports, Visas, Emirates IDs, Contracts) with automated expiry notification tracking and compliance auditing.",
    subModules: [
      { name: "Document Vault", desc: "Secure digital document storage tagged by employee and category." },
      { name: "Expiry Tracker", desc: "Automated alert dashboard for expiring passports, visas, and certifications." }
    ],
    features: [
      "Categorized document uploads with mandatory file policies",
      "Automated email & in-app alerts 30/60/90 days prior to document expiry",
      "Bulk document export and compliance readiness reports",
      "Strict role-based encryption and document access controls"
    ]
  },
  {
    id: 10,
    name: "Assets Management",
    category: "Operations & Field",
    icon: "Laptop",
    shortDesc: "Company asset lifecycle tracking from assignment to return and maintenance.",
    description: "Tracks physical assets (Laptops, Mobile Devices, Vehicles) assigned to employees, managing allocation status, condition logs, and exit clearances.",
    subModules: [
      { name: "Asset Requisition", desc: "Department asset requests and procurement alignment." },
      { name: "Asset Allocation", desc: "Assign serial-numbered assets to employees with digital acknowledgment." },
      { name: "Asset Return", desc: "Offboarding asset return verification and condition logging." }
    ],
    features: [
      "Complete inventory tracking with barcode and serial number mapping",
      "Digital employee sign-off on asset handovers",
      "Automated asset clearance checklist during offboarding",
      "Maintenance history and depreciation tracking"
    ]
  },
  {
    id: 11,
    name: "Procurement",
    category: "Operations & Field",
    icon: "ShoppingBag",
    shortDesc: "Purchase order management, item catalogs, and vendor coordination.",
    description: "Streamlines internal procurement requisitions, item catalogs, purchase orders, and vendor interactions for enterprise operational needs.",
    subModules: [
      { name: "Procurement Requisition", desc: "Internal item requests with budget check." },
      { name: "Purchase Order", desc: "PO creation, multi-level approval, and vendor dispatch." },
      { name: "Vendor Management", desc: "Vendor master profiles, contact records, and rating logs." }
    ],
    features: [
      "Item catalog with categorization and unit price tracking",
      "Automated PO generation with multi-currency support",
      "Vendor performance tracking and payment terms linking",
      "Seamless integration with Assets Management module"
    ]
  },
  {
    id: 12,
    name: "Appraisal (Performance)",
    category: "Core HR",
    icon: "Award",
    shortDesc: "KPI-driven employee performance evaluation framework and appraisal scoring.",
    description: "Facilitates structured performance review cycles, self-evaluations, manager ratings, KPI tracking, and score aggregations for promotions and bonuses.",
    subModules: [
      { name: "Evaluation Setup", desc: "Define evaluation periods, KPI templates, and rating scales." },
      { name: "Evaluation Process", desc: "Self-appraisal, manager evaluation, and moderation workflow." }
    ],
    features: [
      "Configurable KPI templates by department and designation",
      "Multi-stage review (Self -> Manager -> HR Review)",
      "Automated weighted score calculation and bell curve distribution",
      "Historical appraisal trends and career progression tracking"
    ]
  },
  {
    id: 13,
    name: "Gate Pass",
    category: "Operations & Field",
    icon: "Key",
    shortDesc: "Facility entry and exit security control with scan verification and visit logs.",
    description: "Monitors employee, material, and visitor movements through security gates using verified digital gate passes and barcode scan verification.",
    subModules: [
      { name: "Visitor Pass", desc: "Visitor entry registration, host notification, and badge printing." },
      { name: "Material Gate Pass", desc: "Inward/outward material entry logs with supervisor approval." },
      { name: "Employee Movement Pass", desc: "Duty-related temporary out-of-office entry/exit logs." }
    ],
    features: [
      "Barcode/QR code scan verification at security gates",
      "Real-time host notification upon visitor check-in",
      "Material pass authorization with photo attachment",
      "Comprehensive visitor audit logs and duration reports"
    ]
  },
  {
    id: 14,
    name: "Meal Pass",
    category: "Operations & Field",
    icon: "Utensils",
    shortDesc: "Canteen meal entitlement tracking, coupon scanning, and utilization logs.",
    description: "Manages employee canteen entitlements, preventing unauthorized usage and generating clear vendor billing reports based on actual meal scans.",
    subModules: [
      { name: "Meal Entitlement", desc: "Configure meal entitlements by shift, designation, or company policy." },
      { name: "Canteen Scanner", desc: "Quick barcode/ID card scan validation at cafeteria counters." }
    ],
    features: [
      "Instant ID card scan validation at canteen counters",
      "Meal entitlement capping per shift to prevent duplicate meals",
      "Automated monthly vendor billing summary reports",
      "Real-time daily meal consumption statistics"
    ]
  },
  {
    id: 15,
    name: "Resign (Offboarding)",
    category: "Core HR",
    icon: "LogOut",
    shortDesc: "Structured resignation workflow, department clearances, and final settlement.",
    description: "Orchestrates the entire employee offboarding lifecycle from resignation submission and approval through clearance check-offs to final settlement generation.",
    subModules: [
      { name: "Resignation Form", desc: "Self-service resignation submission with notice period calculation." },
      { name: "Department Clearance", desc: "Parallel clearance tasks for IT, Finance, Admin, and HR." },
      { name: "Final Settlement Trigger", desc: "Auto-trigger gratuity, unavailed leave, and salary balance calculations." }
    ],
    features: [
      "Automated notice period tracking based on contract terms",
      "Multi-department parallel clearance workflow",
      "Automated End of Service Gratuity calculation (GCC compliant)",
      "One-click final settlement voucher generation"
    ]
  },
  {
    id: 16,
    name: "Utilities",
    category: "Governance & Data",
    icon: "Wrench",
    shortDesc: "Batch processing engine for attendance computation and bulk payslip publishing.",
    description: "Equips system administrators with background processing tools for night shift attendance recalculation, bulk email payslip distribution, and data syncing.",
    subModules: [
      { name: "Attendance Computation", desc: "Batch recalculation of attendance logs over custom date ranges." },
      { name: "Payslip Publisher", desc: "Bulk password-protected PDF payslip email dispatcher." }
    ],
    features: [
      "Mass attendance log recalculation engine",
      "Bulk encrypted PDF payslip generation and email broadcast",
      "Automated system maintenance and database sync utilities",
      "Job status queue monitoring"
    ]
  },
  {
    id: 17,
    name: "Reports",
    category: "Governance & Data",
    icon: "FileSpreadsheet",
    shortDesc: "Pre-built HR, Payroll, Attendance, Meal, Gate Pass, and Costing reports.",
    description: "Extensive reporting suite delivering high-level executive analytics and granular operational reports ready for Excel, PDF, and print exports.",
    subModules: [
      { name: "Attendance Reports", desc: "Daily Strength, Man Hours, Absenteeism, Attendance Register, Time Sheet." },
      { name: "Meal Reports", desc: "Canteen utilization, employee-level meal consumption, period summary." },
      { name: "Gate Pass & Costing Reports", desc: "Visit logs, labour costing by department/project, printable ID cards." }
    ],
    features: [
      "30+ standard pre-built reports with multi-filter controls",
      "Printable Employee ID Card designer with configurable fields",
      "Labour costing breakdown by project and department",
      "Export to Excel, CSV, PDF, and direct print layouts"
    ]
  },
  {
    id: 18,
    name: "Logs",
    category: "Governance & Data",
    icon: "ShieldAlert",
    shortDesc: "Application-level error logging, mobile diagnostics, and audit trail.",
    description: "Provides IT admins with visibility into mobile application error events, biometric device sync logs, and user activity for rapid troubleshooting.",
    subModules: [
      { name: "Mobile Error Logs", desc: "Debug log stream from Prime HR mobile apps filtered by date and user." },
      { name: "Device Audit Logs", desc: "Biometric machine connectivity and punch sync status log." }
    ],
    features: [
      "Real-time mobile app exception logging with stack traces",
      "Filter error events by user, device type, and date",
      "Biometric hardware connection diagnostic dashboard",
      "Audit trail for sensitive HR master data modifications"
    ]
  },
  {
    id: 19,
    name: "Setup",
    category: "Governance & Data",
    icon: "Settings",
    shortDesc: "Master data configuration hub for companies, 20+ tab employee profiles, and org structures.",
    description: "The foundational setup core of Prime HR. Manages multi-company profiles, comprehensive 20+ tab employee master records, org charts, and master references.",
    subModules: [
      { name: "Company Master", desc: "Multi-company registration, legal entities, tax IDs, and independent setups." },
      { name: "Employee Master", desc: "Comprehensive profile with 20+ tabs (Personal, Bank, Visa, Docs, Skills, Family)." },
      { name: "Organisation Structure", desc: "Departments, Designations, Branches, Regions, Employee Grades." }
    ],
    features: [
      "Multi-company support with independent configurations per entity",
      "Employee Master with 20+ data tabs & Smart Bulk Upload",
      "Flexible Org Chart builder (Branches, Departments, Grades)",
      "Global geography master (Countries, States, Emirates, Cities)"
    ]
  },
  {
    id: 20,
    name: "Config",
    category: "Governance & Data",
    icon: "Sliders",
    shortDesc: "System-level classification tables driving dropdown options across the platform.",
    description: "Houses core classification lookup tables like Employment Types and Gender definitions that power dropdown filters throughout the system.",
    subModules: [
      { name: "Employment Type", desc: "Define Permanent, Contractual, Daily Wager, Intern categories." },
      { name: "Gender Master", desc: "Manage gender classifications for profile fields." }
    ],
    features: [
      "Custom employment category definitions",
      "Uniform filter behavior across Attendance, Leave, and Payroll",
      "System-wide dropdown option master management"
    ]
  },
  {
    id: 21,
    name: "Security",
    category: "Governance & Data",
    icon: "Lock",
    shortDesc: "Role-Based Access Control (RBAC) engine with fine-grained page permissions.",
    description: "Granular access control engine enabling precise permissions (Read, Write, Edit, Delete, Approve) per page, bundled into reusable roles.",
    subModules: [
      { name: "Permissions", desc: "Define granular page-level action permissions." },
      { name: "Roles", desc: "Bundle permission sets into roles (HR Manager, Payroll Officer, Admin)." },
      { name: "User Management", desc: "Link system users to employee profiles with status toggles." }
    ],
    features: [
      "Granular Read/Write/Edit/Delete/Approve actions per page",
      "Unlimited custom roles (HR Admin, Branch Manager, Finance)",
      "Strict data isolation between multi-company entities",
      "User password reset and account security controls"
    ]
  },
  {
    id: 22,
    name: "Onboarding",
    category: "Core HR",
    icon: "UserPlus",
    shortDesc: "Pre-joining candidate offer letter generation and multi-tier approval workflow.",
    description: "Streamlines pre-joining candidate management from offer letter template design to formal offer generation, multi-stage approvals, and acceptance.",
    subModules: [
      { name: "Offer Templates", desc: "Design customized offer templates by company and grade." },
      { name: "Create Offer", desc: "Generate candidate offer with salary, joining date, and designation." },
      { name: "Offer Approval", desc: "Multi-level authorization chain before sending offer to candidate." }
    ],
    features: [
      "Dynamic offer letter template builder with auto-fill fields",
      "Multi-stage approval chain for salary offer packages",
      "Candidate acceptance tracking prior to official onboarding",
      "Seamless auto-conversion from candidate to active employee record"
    ]
  },
  {
    id: 23,
    name: "General Setting",
    category: "Governance & Data",
    icon: "SlidersHorizontal",
    shortDesc: "Approval hierarchies, broadcast communications, and email/letter template builders.",
    description: "Cross-cutting system configurations including multi-level approval hierarchies for all workflows, employee broadcast messaging, and dynamic letter templates.",
    subModules: [
      { name: "Approval Hierarchy", desc: "Multi-level approval chains for Leave, Payroll, Loans, Resignations." },
      { name: "Employee Communication", desc: "Broadcast announcements to targeted departments/branches." },
      { name: "Letter & Email Templates", desc: "Rich-text editor for Experience Letters, Warning Letters, Notification Emails." }
    ],
    features: [
      "Flexible multi-tier approval chain builder with delegation rules",
      "Targeted employee announcement broadcasts (In-App & Email)",
      "Rich-text HR Letter template generator with logo & signature placement",
      "Dynamic email notification trigger rules"
    ]
  }
];

export const CATEGORIES = [
  "All Modules",
  "Core HR",
  "Time & Attendance",
  "Payroll & Financials",
  "Operations & Field",
  "Governance & Data"
];

export const IMPACT_STATS = [
  { value: "23+", label: "Integrated Modules", desc: "All-in-one HRMS solution" },
  { value: "100+", label: "Sub-Modules", desc: "Complete lifecycle coverage" },
  { value: "99.9%", label: "Payroll Accuracy", desc: "WPS & Multi-currency ready" },
  { value: "100%", label: "Biometric & Geo Sync", desc: "Real-time field tracking" }
];
