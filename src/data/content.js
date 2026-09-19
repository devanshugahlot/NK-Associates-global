/**
 * NK ASSOCIATES - Centralized Global Content Repository
 * 
 * Client can edit any text, service description, contact details, 
 * or placeholders directly in this file.
 */

export const siteContent = {
  // Company Essentials
  company: {
    name: "NK Associates",
    fullName: "NK Associates International",
    tagline: "Things you hate, let's us calculate.",
    subTagline: "Your Global Offshore Accounting Team, Powered from India",
    established: "2020",
    logo: "/logo-nk.png",
    favicon: "/favicon.png",
  },

  // Contact Information (Placeholders clearly marked)
  contact: {
    email: "contact@nkassociates.com",
    phone: "+91 75688 20015",
    phoneRaw: "+917568820015",
    phoneIntl: "+91 75688 20015",
    whatsappNumber: "917568820015",
    whatsappDisplay: "+91 75688 20015",
    address: {
      line1: "Business Hub, International Financial District",
      line2: "Global Offshore Delivery Operations",
      city: "Mumbai / Bengaluru",
      state: "Maharashtra / Karnataka",
      country: "India",
      postalCode: "400001",
    },
    officeHours: "Monday to Friday: 24/5 Shift Operations (Covers UK, Australia, UAE, Europe & Americas)",
    responseGuarantee: "Guaranteed initial response within 12 business hours across all time zones",
    calendlyUrl: "https://calendly.com/your-firm/15min-consultation", // [Placeholder: replace with client's link]
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Security", href: "/security" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],

  // Social Links
  socialLinks: {
    linkedin: "https://linkedin.com/company/nk-associates",
    twitter: "https://twitter.com/nkassociates",
    facebook: "https://facebook.com/nkassociates",
  },

  // Hero Section - WORLDWIDE POSITIONING
  hero: {
    badge: "GLOBAL OFFSHORE ACCOUNTING PARTNER",
    headlineStart: "Your Global Offshore Accounting Team,",
    headlineHighlight: "Powered from India.",
    subheadline: "Add accurate, reliable accounting capacity to your practice without local recruitment bottlenecks. We support Chartered Accountants, CPA firms, bookkeeping practices, and expanding enterprises across the UK, Australia, UAE, Europe, Singapore, Canada, and the USA.",
    primaryCta: {
      text: "Start a 2–4 Week Pilot",
      href: "/contact?intent=pilot",
    },
    secondaryCta: {
      text: "Explore Services",
      href: "/services",
    },
    trustChips: [
      { text: "IFRS, UK GAAP, US GAAP & Regional Workflows", icon: "Globe2" },
      { text: "100% White-Label Delivery", icon: "ShieldCheck" },
      { text: "Enterprise NDA & MFA Security", icon: "Lock" },
      { text: "Active Shift Overlap (UK, AU, UAE, EU, US)", icon: "Clock" },
    ],
  },

  // Key Value Metrics
  metrics: [
    {
      value: "2–4 Wks",
      label: "Risk-Free Pilot",
      detail: "Test accuracy, communication, and turnaround on live client ledgers before scaling."
    },
    {
      value: "24–48h",
      label: "Turnaround SLA",
      detail: "Standard SLA for weekly ledger upkeep, reconciliations, and ticket resolution."
    },
    {
      value: "50%+",
      label: "Operational Savings",
      detail: "Achieved vs. hiring domestic senior staff [Add verified firm metric]."
    },
    {
      value: "99.4%",
      label: "Quality Control Accuracy",
      detail: "Two-tier review system ensuring reviewer-ready, audit-compliant workpapers."
    }
  ],

  // Supported Ecosystem / Global Software Strip
  softwareStack: [
    { name: "Xero", category: "Global Cloud Leader (UK/AU/NZ)", logoText: "Xero" },
    { name: "QuickBooks Online", category: "Global Ledger Platform", logoText: "QuickBooks Online" },
    { name: "Dext Prepare", category: "Receipt & Invoice Automation", logoText: "Dext" },
    { name: "Zoho Books", category: "UAE & Global Compliance", logoText: "Zoho Books" },
    { name: "Bill.com", category: "AP / AR Automation", logoText: "Bill.com" },
    { name: "Gusto & Employment Hero", category: "Payroll Across Jurisdictions", logoText: "Payroll" },
    { name: "Tally Prime", category: "Regional & Gulf Workflows", logoText: "Tally Prime" },
    { name: "Stripe & Shopify", category: "eCommerce Multi-Currency", logoText: "eCommerce" },
    { name: "AdvanceFlow & CaseWare", category: "Audit & Working Papers", logoText: "Workpapers" },
    { name: "Sage & FreeAgent", category: "UK & European Ledgers", logoText: "Sage" },
  ],

  // Why Partner With Us (4 Global Pillars)
  whyPartner: [
    {
      id: "capacity",
      title: "Immediate Global Capacity",
      shortDesc: "Eliminate burnout and take on high-margin advisory work without local recruiting bottlenecks.",
      fullDesc: "Recruiting and retaining qualified accountants locally in London, Sydney, Toronto, Dubai, or New York is increasingly costly. Partnering with NK Associates gives your firm an immediate bench of qualified accounting talent ready to execute bookkeeping, reconciliations, and statutory workpapers.",
      icon: "TrendingUp",
      highlight: "Immediate Bandwidth"
    },
    {
      id: "delivery",
      title: "Multi-Tier Quality Control",
      shortDesc: "Documented SOPs, two-tier maker-checker reviews, and structured month-end closes.",
      fullDesc: "Every ledger, VAT/GST tie-out, and financial statement passes through our senior review desk before delivery. You receive pristine, reviewer-ready files formatted directly to your practice templates.",
      icon: "CheckSquare",
      highlight: "Reviewer-Ready Files"
    },
    {
      id: "efficiency",
      title: "Substantial Cost Advantage",
      shortDesc: "Convert heavy domestic payroll overheads into flexible, predictable operational margins.",
      fullDesc: "Eliminate local workstation expenses, payroll taxes, benefits, recruiting agency fees, and software overhead. Gain high-caliber offshore delivery capacity at competitive global rates.",
      icon: "BadgePercent",
      highlight: "Capital Efficiency"
    },
    {
      id: "scale",
      title: "Frictionless Scalability",
      shortDesc: "Ramp up during financial year-ends, tax deadlines, or client acquisitions with zero downtime.",
      fullDesc: "Start small with one or two client ledgers during our 2–4 week pilot. Once comfortable, smoothly transition into monthly recurring ledger pods or dedicated full-time offshore associates.",
      icon: "Layers",
      highlight: "Scale on Demand"
    },
  ],

  // 12 Comprehensive Core Services - WORLDWIDE FOCUS
  services: [
    {
      id: "cloud-accounting-setup",
      name: "Cloud Accounting Management (Xero, QBO, Zoho)",
      shortDesc: "Chart of accounts standardization, multi-currency feeds, rules automation, and daily upkeep.",
      fullDesc: "Complete administration across global cloud platforms including Xero, QuickBooks Online, and Zoho Books. We establish standardized charts of accounts mapped to local statutory frameworks, configure smart bank rules, reconcile multi-currency conversions, and maintain accurate daily ledgers.",
      deliverables: [
        "Standardized Chart of Accounts configuration for local compliance",
        "Automated bank feed classification & intelligent rule creation",
        "Multi-currency conversion entries & realized/unrealized FX gains/losses",
        "Tracking categories, departments, and cost center allocation",
        "Periodic ledger maintenance & audit trail review"
      ],
      tools: ["Xero", "QuickBooks Online", "Zoho Books", "Dext"],
      category: "Core Bookkeeping",
      icon: "FileSpreadsheet"
    },
    {
      id: "reconciliations",
      name: "Bank, Merchant & Multi-Currency Reconciliations",
      shortDesc: "Meticulous reconciliation of bank accounts, credit cards, merchant gateways, and loans.",
      fullDesc: "Eliminate discrepancies between statement balances and general ledgers. We systematically match clearing feeds, investigate uncleared transactions, record payment gateway fees (Stripe, PayPal, Square, Adyen), and compile spotless reconciliation tie-out packages.",
      deliverables: [
        "Operating, savings, and foreign currency bank reconciliations",
        "Credit card balance tie-outs with zero penny discrepancies",
        "Payment gateway fee clearing (Stripe, PayPal, Square, Shopify Payments)",
        "Intercompany loan account reconciliations & eliminations",
        "Monthly reconciliation sign-off packages with statement backups"
      ],
      tools: ["Xero", "QBO", "Excel", "Bank Feeds"],
      category: "Core Bookkeeping",
      icon: "Scale"
    },
    {
      id: "accounts-payable",
      name: "Accounts Payable (AP) & Vendor Management",
      shortDesc: "Automated invoice extraction, purchase order matching, approval routing, and vendor tie-outs.",
      fullDesc: "Streamline payables across Dext, Bill.com, or Hubdoc. We capture vendor bills via OCR, match against purchase orders, route for client approval, and prepare scheduled payment batches without accessing firm disbursement funds.",
      deliverables: [
        "Bill extraction, OCR verification, and GL tax/expense code mapping",
        "Multi-level approval routing adhering to firm internal controls",
        "Vendor statement reconciliations & discrepancy resolution",
        "Payment batch compilation for partner release",
        "Statutory supplier information maintenance (VAT/GST/Tax IDs)"
      ],
      tools: ["Dext", "Bill.com", "Hubdoc", "Xero", "QBO"],
      category: "AP & AR Operations",
      icon: "CreditCard"
    },
    {
      id: "accounts-receivable",
      name: "Accounts Receivable (AR) & Invoicing",
      shortDesc: "Customer billing generation, receipt matching, aged debt reporting, and collections support.",
      fullDesc: "Accelerate cash flow cycles with accurate billing issuance, automated payment reconciliation, credit note tracking, and granular accounts receivable aging analysis for practice leaders.",
      deliverables: [
        "Recurring and progress billing invoice generation",
        "Customer remittance matching & unapplied cash allocation",
        "Aged debtor analysis (30 / 60 / 90+ days) with commentary",
        "Customer balance reconciliations & dispute flagging",
        "Gentle, professional overdue payment reminder logs"
      ],
      tools: ["Xero", "QuickBooks", "Stripe", "Chargebee"],
      category: "AP & AR Operations",
      icon: "Receipt"
    },
    {
      id: "month-end-close",
      name: "Month-End & Period-End Close",
      shortDesc: "Comprehensive close checklists, accruals, prepayments, depreciation, and trial balance sign-off.",
      fullDesc: "Accelerate close cycles down to 5–7 business days. We post necessary adjusting journal entries, calculate straight-line depreciation, amortize prepaid assets, record accrued expenses, and lock period ledgers.",
      deliverables: [
        "Prepaid expense amortization & accrued expense schedules",
        "Fixed asset registers & statutory depreciation calculations",
        "Deferred revenue & subscription revenue recognition schedules",
        "Intercompany balance tie-outs & elimination entries",
        "Adjusted Trial Balance sign-off checklist ready for partner review"
      ],
      tools: ["Excel", "Xero", "QBO", "FloQast / Keeper"],
      category: "Financial Reporting",
      icon: "CalendarCheck"
    },
    {
      id: "financial-statements",
      name: "Financial Statement Preparation (IFRS & GAAP)",
      shortDesc: "Balance Sheets, Profit & Loss, and Cash Flow Statements compliant with global accounting standards.",
      fullDesc: "Produce boardroom-ready financial reporting packages formatted for partner review, banking covenants, board meetings, or statutory filings under IFRS, UK GAAP (FRS 102), Australian AASB, or US GAAP.",
      deliverables: [
        "Statement of Financial Position (Balance Sheet) with lead schedules",
        "Statement of Profit or Loss with period-over-period variance analysis",
        "Statement of Cash Flows (Direct and Indirect methods)",
        "Statement of Changes in Equity & Retained Earnings tie-outs",
        "Executive financial health dashboards & financial ratio summaries"
      ],
      tools: ["Excel", "Power BI", "Fathom", "Xero Reporting"],
      category: "Financial Reporting",
      icon: "BarChart3"
    },
    {
      id: "catchup-cleanup",
      name: "Historical Catch-Up & Ledger Cleanup",
      shortDesc: "Untangle multi-month or multi-year backlogs of unrecorded transactions and broken balances.",
      fullDesc: "Have a client whose books are months behind or disorganized? We specialize in intensive backlog remediation: categorizing historical bank feeds, clearing uncategorized assets/expenses, repairing opening equity, and restoring clean compliance.",
      deliverables: [
        "Multi-year backlog transaction ingestion & categorization",
        "Diagnostic ledger health audit & discrepancy identification",
        "Opening balance equity corrections & retained earnings alignment",
        "Historical VAT/GST/Sales Tax reconciliation catch-up",
        "Clean, audit-ready closing file ready for ongoing maintenance"
      ],
      tools: ["Xero", "QBO", "Tally", "Excel Remediation Tools"],
      category: "Advisory & Cleanup",
      icon: "Sparkles"
    },
    {
      id: "payroll-support",
      name: "Payroll Support & Processing",
      shortDesc: "Timesheet verification, gross-to-net calculations, payroll journals, and tax liability reconciliations.",
      fullDesc: "Seamless back-office payroll coordination across global platforms (Gusto, ADP, Xero Payroll, Employment Hero, Paychex). We audit hours, verify deductions, calculate statutory contributions, and post gross-to-net journal entries.",
      deliverables: [
        "Timesheet validation and gross-to-net calculation audits",
        "Detailed payroll journal entry preparation & posting",
        "Reconciliation of payroll tax liabilities against clearing accounts",
        "Contractor invoice verification and payment scheduling",
        "Year-end payroll summaries & statutory compliance tie-outs"
      ],
      tools: ["Xero Payroll", "Gusto", "ADP", "Employment Hero"],
      category: "Core Bookkeeping",
      icon: "Users2"
    },
    {
      id: "tax-prep-support",
      name: "Tax & Statutory Workpapers Preparation",
      shortDesc: "Lead schedule organization, book-to-tax adjustments, and return-ready working paper folders.",
      fullDesc: "Relieve senior partners and tax managers from tedious preparation. We assemble standardized electronic binders, compute book-to-tax adjustments, cross-reference trial balance accounts, and prepare files ready for tax return filing across global jurisdictions (UK CT600, Australian Tax/BAS, UAE Corporate Tax, US 1120/1065).",
      deliverables: [
        "Tax workpaper binders organized to your firm's exact folder taxonomy",
        "Trial balance mapping to regional statutory tax return lines",
        "Book-to-tax timing differences and permanent adjustment schedules",
        "Fixed asset tax depreciation schedules (Capital Allowances / Section 179)",
        "Statutory lead schedules fully cross-referenced to source documents"
      ],
      tools: ["Excel", "CaseWare", "AdvanceFlow", "Drake / ProConnect (Prep)"],
      category: "Advisory & Cleanup",
      icon: "FileCheck"
    },
    {
      id: "audit-working-papers",
      name: "Audit Working Papers & Lead Schedules",
      shortDesc: "Reviewer-ready audit binders, PBC list management, and substantive analytical review schedules.",
      fullDesc: "Support your firm's audit and assurance engagements with structured audit working papers. We compile lead schedules tied to the trial balance, manage Prepared by Client (PBC) document requests, and perform fluctuation analytics.",
      deliverables: [
        "Audit lead schedules tied directly to financial statement line items",
        "Prepared by Client (PBC) documentation tracking & indexing",
        "Analytical review flux analysis with documented management commentary",
        "Debtor and creditor confirmation control logs",
        "Clean, standardized electronic audit working paper files"
      ],
      tools: ["CaseWare", "Excel", "AdvanceFlow", "Adobe Acrobat Pro"],
      category: "Advisory & Cleanup",
      icon: "FolderCheck"
    },
    {
      id: "management-reporting",
      name: "Management Accounts & Advisory Dashboards",
      shortDesc: "Custom KPI reporting, budget vs. actual variance analysis, and rolling cash flow projections.",
      fullDesc: "Help your practice deliver high-value Client Advisory Services (CAS). We build monthly management reporting decks highlighting gross margins, departmental profitability, customer unit economics, and 13-week rolling cash forecasts.",
      deliverables: [
        "Monthly management accounts pack with executive commentary",
        "Budget vs. Actual performance variance analysis",
        "13-week rolling cash runway and liquidity forecasts",
        "Industry-specific KPI dashboards (SaaS, eCommerce, Agency, Healthcare)",
        "Board-ready presentation slides in PDF or PowerPoint"
      ],
      tools: ["Fathom", "Power BI", "Jirav", "Excel Advanced"],
      category: "Financial Reporting",
      icon: "LineChart"
    },
    {
      id: "dedicated-teams",
      name: "Dedicated Offshore Accounting Pods",
      shortDesc: "Full-time, qualified accounting professionals dedicated exclusively to your practice.",
      fullDesc: "Build your firm’s dedicated offshore team in India without the cost or legal complexity of foreign incorporation. We recruit, screen, and house qualified accountants working exclusively on your systems, firm culture, and time-zone shifts.",
      deliverables: [
        "Full-time accountants (40 hrs/week) matching your local business hours",
        "Direct daily collaboration via your firm Slack, Teams, and email domain",
        "Managed workstation security, high-speed fiber, and power redundancy",
        "Ongoing professional development in global accounting standards",
        "Scalable structure: seamlessly add capacity as your practice expands"
      ],
      tools: ["Your Firm's Complete Technology Stack"],
      category: "Dedicated Staffing",
      icon: "Building2"
    },
  ],

  // 4-Step Global Process Timeline
  processSteps: [
    {
      step: "01",
      title: "Share Requirements & Systems",
      duration: "Day 1 – 3",
      summary: "Review your current workflow, software platforms, client volume, and time-zone requirements.",
      details: [
        "Review your firm tech stack (Xero, QBO, Dext, Bill.com, etc.)",
        "Identify specific bottlenecks: monthly close, reconciliations, catch-up",
        "Sign mutual bilateral Non-Disclosure Agreement (NDA) for total security",
        "Establish communication channels (Slack, Microsoft Teams, or firm email)"
      ],
      icon: "MessageSquareText"
    },
    {
      step: "02",
      title: "Align Team & Practice SOPs",
      duration: "Day 4 – 7",
      summary: "Meet your assigned team lead, review Standard Operating Procedures, and set up role-based access.",
      details: [
        "Meet the dedicated accountants and review their qualifications",
        "Configure role-based guest access with mandatory Multi-Factor Authentication",
        "Document firm-specific formatting preferences and review checklists",
        "Agree upon Service Level Agreements (SLAs) and delivery deadlines"
      ],
      icon: "UserCheck"
    },
    {
      step: "03",
      title: "Run the 2–4 Week Pilot",
      duration: "Weeks 2 – 4",
      summary: "Test the partnership risk-free with 1 or 2 client ledgers or a specific cleanup scope.",
      details: [
        "Execute daily reconciliations, close checklists, and bill entries",
        "Weekly status touchpoint calls or written progress summaries",
        "Your reviewers evaluate turnaround speed, accuracy, and communication",
        "Zero long-term lock-in commitment required during the pilot"
      ],
      icon: "Gauge"
    },
    {
      step: "04",
      title: "Scale Seamlessly on Demand",
      duration: "Ongoing",
      summary: "Smoothly transition into monthly recurring ledger management or build a dedicated offshore team.",
      details: [
        "Gradually onboard additional client books at your own pace",
        "Add dedicated full-time associates as practice revenue expands",
        "Maintain consistent team members familiar with your clients' nuances",
        "Benefit from continuous operational feedback and quality audits"
      ],
      icon: "Rocket"
    },
  ],

  // Global Regions We Serve - EQUAL WORLDWIDE PROMINENCE
  regions: [
    {
      id: "uk-ireland",
      name: "United Kingdom & Ireland",
      flag: "🇬🇧 🇮🇪",
      timezones: "GMT / BST",
      coverage: "4–6 hours direct business hours overlap with London",
      standards: "UK GAAP (FRS 102), Making Tax Digital (MTD), VAT, Companies House filing prep",
      coreTools: "Xero, Dext Prepare, FreeAgent, Sage, Excel",
      highlights: "VAT return reconciliations, CIS support, statutory accounts preparation, and MTD compliance."
    },
    {
      id: "australia-nz",
      name: "Australia & New Zealand",
      flag: "🇦🇺 🇳🇿",
      timezones: "AEST / AWST / NZST",
      coverage: "Direct daytime shift alignment with Sydney, Melbourne, Perth & Auckland",
      standards: "AASB standards, GST reporting, BAS preparation support",
      coreTools: "Xero, MYOB, Hubdoc, Employment Hero",
      highlights: "Month-end ledger tie-outs, payroll clearing, BAS workpapers, and depreciation schedules."
    },
    {
      id: "uae-middle-east",
      name: "UAE & Middle East / GCC",
      flag: "🇦🇪 🇸🇦",
      timezones: "GST / AST",
      coverage: "Fully synchronized same-day working hours (Dubai, Abu Dhabi, Riyadh)",
      standards: "FTA Corporate Tax compliance, UAE VAT laws, IFRS accounting",
      coreTools: "Zoho Books, QuickBooks, Tally Prime",
      highlights: "FTA audit files, corporate tax workpapers, VAT returns, and multi-currency commerce bookkeeping."
    },
    {
      id: "singapore-apac",
      name: "Singapore, Hong Kong & APAC",
      flag: "🇸🇬 🇭🇰",
      timezones: "SGT / HKT",
      coverage: "Synchronized Asian business hours alignment",
      standards: "SFRS, GST reporting, ACRA compliance support, multi-currency reporting",
      coreTools: "Xero, QuickBooks Online, Aspire",
      highlights: "Cross-border multi-currency reconciliations, corporate secretarial ledger integration."
    },
    {
      id: "europe",
      name: "Continental Europe",
      flag: "🇪🇺",
      timezones: "CET / CEST",
      coverage: "5+ hours active daily collaboration window with European capitals",
      standards: "IFRS accounting, EU cross-border VAT, multi-currency consolidation",
      coreTools: "Xero, QuickBooks, Exact, Excel",
      highlights: "Cross-border VAT tracking, intercompany reconciliations, and statutory reporting support."
    },
    {
      id: "north-america",
      name: "United States & Canada",
      flag: "🇺🇸 🇨🇦",
      timezones: "EST, CST, MST, PST",
      coverage: "Overlapping morning hours & overnight processing",
      standards: "US GAAP, ASPE, Federal & State compliance workflows",
      coreTools: "QuickBooks Online, Bill.com, Gusto, Dext",
      highlights: "1099 vendor data prep, sales tax summaries, and clean trial balances for year-end tax filings."
    }
  ],

  // Security & Confidentiality Architecture
  securityPillars: [
    {
      title: "Legally Binding Bilateral NDA",
      desc: "Every partnership is protected by comprehensive bilateral non-disclosure agreements before any file or system access is granted.",
      icon: "FileLock2"
    },
    {
      title: "Multi-Factor Authentication (MFA)",
      desc: "Enforced MFA across all portals, accounting applications, and cloud environments to prevent unauthorized entry.",
      icon: "ShieldAlert"
    },
    {
      title: "Role-Based Least Privilege",
      desc: "Staff receive strictly compartmentalized access only to the specific client ledgers required for their active assignments.",
      icon: "KeyRound"
    },
    {
      title: "Enterprise Password Vaults",
      desc: "Credentials managed via 1Password / Bitwarden enterprise vaults. Passwords are never exchanged in plaintext.",
      icon: "Lock"
    },
    {
      title: "Zero Local Data Storage",
      desc: "All client work is conducted directly inside cloud environments. No financial data is downloaded to local personal devices.",
      icon: "CloudOff"
    },
    {
      title: "Documented SOPs & Quality Checklists",
      desc: "Standardized operating manuals and two-tier maker-checker sign-offs ensure rigorous compliance on every transaction.",
      icon: "ClipboardCheck"
    }
  ],

  // White-Label Partnership Section
  whiteLabel: {
    badge: "100% WHITE-LABEL PARTNERSHIP",
    headline: "Your Client. Your Brand. Our Accounting Engine.",
    subheadline: "Your practice retains complete client ownership and public branding. Our team operates behind the scenes as your silent back-office delivery engine, serving accounting firms across the UK, Australia, North America, the Middle East, and Europe.",
    bulletPoints: [
      {
        title: "Client Communications Under Your Domain",
        desc: "If required, our associates operate using your firm's email address (e.g., alex@yourpractice.com) or communicate strictly through your internal managers."
      },
      {
        title: "Standardized to Your Workpaper Formats",
        desc: "We adopt your existing folder hierarchy, trial balance templates, and review conventions so work feels completed in-house."
      },
      {
        title: "Contractual Non-Solicitation Protection",
        desc: "Ironclad contractual non-solicitation covenants guaranteeing we will never interact with or solicit your firm's clients."
      },
      {
        title: "Expand Advisory Offerings Overnight",
        desc: "Offer management accounts, weekly bookkeeping, and cleanup to your clients without hiring a single domestic employee."
      }
    ]
  },

  // Transparent Engagement Models
  engagementModels: [
    {
      id: "pilot",
      name: "2–4 Week Pilot",
      badge: "RECOMMENDED STARTING POINT",
      tagline: "Test our turnaround speed, accuracy, and communication with zero risk.",
      deliverables: [
        "1 to 2 client ledgers or a specific historical cleanup scope",
        "Full bank, credit card, and merchant account reconciliations",
        "Weekly review touchpoint & feedback integration",
        "Direct access to your assigned delivery team lead",
        "Clear demonstration of reviewer-ready workpaper quality",
        "No long-term lock-in or ongoing contractual commitment"
      ],
      pricingText: "Custom Pilot Scope",
      subPricing: "Priced transparently based on ledger volume and transaction history.",
      ctaText: "Start a 2–4 Week Pilot",
      ctaHref: "/contact?intent=pilot",
      isPopular: true
    },
    {
      id: "recurring",
      name: "Monthly Recurring Retainer",
      badge: "FOR GROWING PRACTICES",
      tagline: "Predictable monthly accounting support for ongoing client portfolios.",
      deliverables: [
        "Scheduled weekly bookkeeping & bank reconciliations",
        "Month-end close & adjusted trial balance completion",
        "Accounts payable & bill scheduling support",
        "Dedicated point of contact and designated backup associate",
        "Guaranteed 24–48h SLA response time",
        "Flexible volume adjustment as client base expands"
      ],
      pricingText: "Tailored Monthly Retainer",
      subPricing: "Flat monthly fee per entity or batch of client ledgers.",
      ctaText: "Inquire About Monthly Retainers",
      ctaHref: "/contact?intent=recurring",
      isPopular: false
    },
    {
      id: "dedicated",
      name: "Dedicated Offshore Pod",
      badge: "FOR HIGH-VOLUME FIRMS",
      tagline: "Full-time qualified accountants working exclusively as members of your team.",
      deliverables: [
        "Full-time accountants (160 hours/month per seat)",
        "Trained in your specific firm software & SOPs",
        "Direct daily integration via Slack, Teams, & firm email",
        "Time-zone shifted hours matching your local business day",
        "Managed hardware, high-speed fiber, and security protocols",
        "Comprehensive replacement and holiday coverage guarantee"
      ],
      pricingText: "Dedicated Seat Retainer",
      subPricing: "Significant cost efficiency compared to domestic on-site recruitment.",
      ctaText: "Build Your Dedicated Pod",
      ctaHref: "/contact?intent=dedicated",
      isPopular: false
    }
  ],

  // Testimonials - DIVERSE GLOBAL CLIENT PERSPECTIVES (Templates)
  testimonials: [
    {
      quote: "Partnering with NK Associates has allowed our UK practice to scale our monthly management accounting services without hiring local staff. Their proficiency in Xero and Dext is exceptional, and files arrive on our desks ready for senior review.",
      author: "[Director Name]",
      role: "Founder & Chartered Certified Accountant",
      firm: "[Chartered Accountancy Practice - London, UK]",
      metric: "Month-end close completed in 5 days",
      isPlaceholder: true
    },
    {
      quote: "Their team's familiarity with Australian GST and BAS preparation was immediately evident. Communication via Slack is seamless, and their turnaround time on weekly reconciliations has eliminated our tax-season backlog completely.",
      author: "[Principal Name]",
      role: "Principal Director",
      firm: "[Boutique Advisory & Tax Practice - Sydney, Australia]",
      metric: "Zero backlog across all client accounts",
      isPlaceholder: true
    },
    {
      quote: "Managing corporate tax filings and VAT compliance for fast-growing Dubai businesses required immediate bench strength. NK Associates provided qualified accountants who integrated into our Zoho Books workflows within 48 hours.",
      author: "[Managing Partner Name]",
      role: "Managing Director",
      firm: "[Corporate Services & Accounting Firm - Dubai, UAE]",
      metric: "40+ hours saved weekly per manager",
      isPlaceholder: true
    }
  ],

  // FAQ Accordion - BALANCED GLOBAL PERSPECTIVE
  faqs: [
    {
      q: "How does the 2–4 week pilot work?",
      a: "Our pilot is designed to give your practice complete peace of mind before making any long-term commitment. You select 1 or 2 representative client ledgers (or a specific backlog cleanup). We sign an NDA, establish secure cloud access, and execute the agreed scope. You evaluate our communication, turnaround speed, and workpaper quality firsthand. At the end of the pilot, you can choose to transition into a monthly retainer or walk away with zero obligations."
    },
    {
      q: "How do you protect client financial data and confidentiality?",
      a: "Confidentiality is our foundation. We operate under legally binding bilateral NDAs with strict non-solicitation clauses. Our accountants work exclusively within secure cloud environments (Xero, QBO, Bill.com, Zoho) using role-based permissions and mandatory Multi-Factor Authentication (MFA). We manage credentials through enterprise vaults (1Password / Bitwarden) and enforce a strict zero-local-data-storage protocol—no client financial records are ever downloaded to local personal machines."
    },
    {
      q: "Can you operate 100% white-label under our firm's brand?",
      a: "Yes. The vast majority of our partner firms engage us on a 100% white-label basis. Your clients will never know that offshore support is involved unless you choose to disclose it. If direct client communication is needed, our accountants can operate using email accounts under your firm's domain (e.g., alex@yourfirm.com), or we can operate strictly as a back-office delivery unit communicating solely with your internal managers."
    },
    {
      q: "What accounting software, platforms, and add-ons do you support?",
      a: "We support industry-standard platforms across global markets: Xero, QuickBooks Online, Zoho Books, FreeAgent, Sage, and Tally Prime. For workflow automation and payables, we regularly work with Dext Prepare, Hubdoc, Bill.com, Melio, Gusto, Employment Hero, ADP, Stripe, Shopify, and advanced Excel-based financial models."
    },
    {
      q: "How do you handle time zone differences between India and our country?",
      a: "We operate 24/5 shift coverage tailored to your geographic location. Whether you are in the UK (GMT/BST), Australia (AEST/AWST), the UAE (GST), Europe (CET), or North America (EST/PST), we schedule active shift overlap so you have real-time communication during your active business day. Tasks submitted at the end of your day are often completed overnight by our India team and ready on your desk the next morning."
    },
    {
      q: "What are your team qualifications, and do you understand regional standards?",
      a: "Our team consists of Commerce Graduates, Postgraduates, semi-qualified and qualified Chartered Accountants (ICAI). They undergo rigorous training in global standards including IFRS, UK GAAP (FRS 102), Australian Tax & GST, UAE Corporate Tax & VAT, and US GAAP. Our accountants produce reviewer-ready workpapers formatted to international professional accounting standards."
    },
    {
      q: "What is your typical turnaround time for reconciliations and month-end closes?",
      a: "Standard routine inquiries and weekly ledger categorizations are typically completed within 24 to 48 hours. For month-end closes, once bank statements and supporting documents are available, we typically complete full reconciliations, adjust journal entries, and compile draft financial statements within 3 to 5 business days."
    },
    {
      q: "How does your pricing work?",
      a: "We do not enforce rigid, one-size-fits-all pricing because transaction complexity and volume vary greatly across clients. We offer three transparent structures: a fixed-scope pilot, a flat monthly retainer per ledger, or a dedicated full-time accountant seat retainer. We provide itemized quotes with zero hidden fees after reviewing your requirements."
    },
    {
      q: "Can we scale up our team during busy financial year-ends or tax seasons?",
      a: "Absolutely. Flexibility is a core advantage of offshore delivery. Many of our partner practices temporarily expand capacity during regional tax seasons or financial year-ends to handle heavy catch-up and workpaper preparation, then return to baseline capacity during quieter months."
    },
    {
      q: "How quickly can we get started?",
      a: "We can execute an NDA, conduct an initial workflow alignment call, and receive guest software access within 48 to 72 hours. From there, pilot work can commence immediately."
    }
  ],

  // About NK Associates Section - GLOBAL FOCUS
  about: {
    story: "NK Associates was founded to solve a critical global challenge facing modern accounting practices: the acute shortage of qualified, reliable local accounting talent. Headquartered in India—the world's premier offshore accounting delivery hub—we bridge the gap between international accounting firms and skilled, dedicated finance professionals.",
    mission: "To empower accounting practices, Chartered Accountants, CPA firms, and growing enterprises worldwide with dependable, high-accuracy offshore accounting capacity, freeing practice leaders to focus on high-value client advisory and growth.",
    values: [
      {
        title: "Absolute Precision",
        desc: "We treat every transaction with equal reverence. Structured tie-outs and two-tier quality checks ensure zero shortcuts."
      },
      {
        title: "Ironclad Confidentiality",
        desc: "Client confidentiality is our foundation. We adhere to enterprise-grade security protocols, bilateral NDAs, and role-based access."
      },
      {
        title: "Proactive Communication",
        desc: "No communication gaps or delayed responses. We believe in clear status tracking, timely queries, and responsive collaboration."
      },
      {
        title: "Long-Term Partnership",
        desc: "We do not operate as detached external vendors; we function as an organic, reliable back-office extension of your firm."
      }
    ],
    deliveryHub: {
      location: "India Central Delivery Hub",
      advantages: [
        "Access to a vast pool of Commerce graduates, semi-qualified, and qualified Chartered Accountants",
        "Modern infrastructure with redundant high-speed fiber internet and power backups",
        "Deep exposure to global accounting frameworks (IFRS, UK GAAP, Australian Tax, UAE Corporate Tax, US GAAP)",
        "Time-zone bridge advantage allowing 'work while you sleep' processing for Western practices"
      ]
    },
    teamStructure: [
      {
        role: "Managing Director / Head of Global Delivery",
        name: "[Leadership Name - Add Real Name]",
        bio: "Oversees international practice relationships, cross-border compliance governance, and quality assurance."
      },
      {
        role: "Senior Accounting Manager & Review Lead",
        name: "[Manager Name - Add Real Name]",
        bio: "Specializes in multi-currency consolidations, IFRS/GAAP statutory reporting, and tax workpaper reviews."
      },
      {
        role: "Lead Cloud Accounting Specialist",
        name: "[Lead Name - Add Real Name]",
        bio: "Expert in Xero, QuickBooks Online, Dext, and automated multi-platform workflow integrations."
      }
    ]
  }
};
