import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'banking-hub',
    slug: 'banking-hub',
    title: 'Banking HUB — Enterprise FinTech Banking Portal',
    subtitle: 'Streamlined Multi-Step Onboarding & Account Management for FinTech Enterprise',
    tagline: 'Streamlining Banking Onboarding & Treasury Operations with Standardized UI Patterns',
    category: 'Product Design',
    tags: ['Product Design', 'Figma', 'Angular', 'Design Systems', 'Accessibility'],
    year: '2025',
    role: 'UI/UX Designer & Frontend Developer',
    client: 'Consectus LTD',
    accentColor: '#3B82F6',
    accentGradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
    featured: true,
    coverImage: 'assets/projects/banking/banking_dashboard.png',
    screens: [
      'assets/projects/banking/banking_dashboard.png',
      'assets/projects/banking/banking_customer_management.png',
      'assets/projects/banking/banking_product_management.png',
      'assets/projects/banking/banking_staff_management.png',
      'assets/projects/banking/banking_create_branch.png',
      'assets/projects/banking/banking_create_product.png',
      'assets/projects/banking/banking_app_settings.png',
      'assets/projects/banking/banking_login.png',
      'assets/projects/banking/banking_2fa.png'
    ],
    overview: 'Banking HUB is an enterprise FinTech banking portal built to eliminate fragmented navigation and non-standardized UI patterns across tablet and desktop interfaces, simplifying multi-step verification and account workflows for thousands of active enterprise users.',
    problem: 'Enterprise banking onboarding and transaction management suffered from fragmented navigation and non-standardized UI patterns across tablet and desktop interfaces, creating onboarding friction and verification delays.',
    solution: 'Evaluated financial regulatory constraints, security compliance flows, and user journey pain points. Created detailed sitemaps, user flows, low-to-high fidelity Figma wireframes, interactive prototypes, and built a scalable Angular UI component library linked to Figma design tokens.',
    keyOutcomes: [
      'Accelerated frontend sprint turnaround through modular Figma design tokens',
      'Unified multi-step banking onboarding flow across tablet and desktop viewports',
      'Strict WCAG 2.1 AA accessibility compliance across all high-density financial data tables',
      'Seamless multi-signature authorization and treasury monitoring workflows'
    ],
    stats: [
      { label: 'Architecture', value: 'Design Tokens' },
      { label: 'User Scale', value: 'Enterprise Active' },
      { label: 'Device Support', value: 'Tablet & Desktop' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA' }
    ],
    sections: [
      {
        title: 'Research & Discovery',
        subtitle: 'Regulatory Compliance & Journey Mapping',
        description: 'Evaluated financial regulatory constraints, security compliance flows, and user journey pain points to map streamlined account verification workflows without compromising security standards.',
        highlights: ['KYC verification flow optimization', 'Step-by-step identity audit trails', 'Role-based authorization matrices'],
        image: 'assets/projects/banking/banking_dashboard.png'
      },
      {
        title: 'Design Execution & System Architecture',
        subtitle: 'Figma to Angular Implementation',
        description: 'Delivered pixel-perfect design specifications for engineering teams and built a scalable UI component library linked directly to Figma design tokens.',
        highlights: ['Standardized tablet & desktop UI patterns', 'Automated token synchronization', 'Zero-regression design QA'],
        image: 'assets/projects/banking/banking_customer_management.png'
      }
    ],
    designSpecs: {
      typography: ['Urbanist / Caros (Headings)', 'Urbanist (Data UI)', 'JetBrains Mono (Ledger & Numbers)'],
      colors: [
        { name: 'FinTech Blue', hex: '#3B82F6', role: 'Primary Brand & Active Actions' },
        { name: 'Cyan Surplus', hex: '#06B6D4', role: 'Liquidity Accents' },
        { name: 'Obsidian Canvas', hex: '#0B1120', role: 'Enterprise Dark Surface' }
      ],
      gridSystem: '12-Column Responsive Layout with 24px Gutters',
      keyComponents: ['Account Verification Stepper', 'Consolidated Balance Card', 'Transaction Data Table', 'Authorization Modal']
    }
  },
  {
    id: 'rpa-control-center',
    slug: 'rpa-control-center',
    title: 'RPA Portal — Enterprise Automation & Bot Telemetry Dashboard',
    subtitle: 'Real-Time Bot Orchestration, Health Telemetry & Incident Alerts (Consectus LTD)',
    tagline: 'Real-Time Bot Execution Monitors, Agent Allocation Controls & Incident Diagnostics',
    category: 'Product Design',
    tags: ['Product Design', 'UI/UX', 'Figma', 'Data Visualisation', 'Dashboard UX', 'Angular'],
    year: '2025',
    role: 'UI/UX Designer & Frontend Developer',
    client: 'Consectus LTD',
    accentColor: '#8B5CF6',
    accentGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    featured: true,
    coverImage: 'assets/projects/rpa/rpa_dashboard.png',
    screens: [
      'assets/projects/rpa/rpa_dashboard.png',
      'assets/projects/rpa/rpa_action_path.png',
      'assets/projects/rpa/rpa_task_details.png',
      'assets/projects/rpa/rpa_robot_availability.png',
      'assets/projects/rpa/rpa_action_management.png',
      'assets/projects/rpa/rpa_dashboard_metrics.png',
      'assets/projects/rpa/rpa_view_users.png',
      'assets/projects/rpa/rpa_user_profile.png',
      'assets/projects/rpa/rpa_login.png'
    ],
    overview: 'Architected and designed the Consectus RPA Portal from scratch, establishing real-time telemetry dashboards, bot execution status monitors (Processed, Allocated, Failed, Pending), agent allocation controls, and alert notification dialogs.',
    problem: 'Enterprise operations teams lacked centralized visibility to monitor RPA bot execution states in real-time, resulting in prolonged bot downtime and delayed incident response.',
    solution: 'Conducted workflow mapping with operations teams to define key operational telemetry metrics, alert triggers, and high-contrast UI modes. Designed data-visualization dashboards, live bot status toggles, telemetry reporting modules, and email alert modal flows in Figma.',
    keyOutcomes: [
      'Unified bot orchestration into an intuitive dashboard interface',
      'Drastically streamlined MTTR (Mean Time To Resolution) for failed automation tasks',
      'Enabled instant incident diagnostics with visual execution step playback',
      'High-contrast telemetry views supporting 24/7 monitoring environments'
    ],
    stats: [
      { label: 'Incident MTTR', value: 'Streamlined' },
      { label: 'Fleet Scale', value: 'Active Bots' },
      { label: 'Bot States', value: '4 Modes' },
      { label: 'Monitoring', value: 'Real-Time' }
    ],
    sections: [
      {
        title: 'User Insights & Architecture',
        subtitle: 'Workflow Mapping with Operations Teams',
        description: 'Conducted workflow mapping with operations engineers to define key operational telemetry metrics, alert thresholds, agent allocation rules, and high-contrast UI modes.',
        highlights: ['Categorized bot states: Processed, Allocated, Failed, Pending', 'Engineered instant recovery action buttons', 'Designed email alert modal flows'],
        image: 'assets/projects/rpa/rpa_action_path.png'
      },
      {
        title: 'Data-Visualisation & Live Telemetry',
        subtitle: 'Real-Time Telemetry & Status Toggles',
        description: 'Designed interactive data grids, live bot health indicators, and visual execution traces allowing engineers to diagnose timeout issues with single-click replays.',
        highlights: ['Streaming log terminal mockup', 'Live node heartbeat indicators', 'Custom execution flow graph'],
        image: 'assets/projects/rpa/rpa_task_details.png'
      }
    ],
    designSpecs: {
      typography: ['Urbanist / Caros', 'JetBrains Mono for live terminal traces'],
      colors: [
        { name: 'Telemetry Purple', hex: '#8B5CF6', role: 'Primary Bot Status & Accents' },
        { name: 'SLA Emerald', hex: '#10B981', role: 'Healthy Nodes' },
        { name: 'Alert Crimson', hex: '#F43F5E', role: 'Failed Bots & Replay Triggers' }
      ],
      gridSystem: '12-Column Responsive Dashboard Layout',
      keyComponents: ['Bot Node Status Card', 'Live Heartbeat Pill', 'Execution Stepper', 'Log Terminal']
    }
  },
  {
    id: 'lexaid-ai',
    slug: 'lexaid-ai',
    title: 'LexAI — AI Legal Platform & Case Intake Interface',
    subtitle: 'AI-Assisted Legal Repository Search, Intake & Case Drafting Platform',
    tagline: 'Transforming Complex Legal Workflows into an Accessible AI-Assisted Experience',
    category: 'AI & SaaS',
    tags: ['Product Design', 'AI UX Patterns', 'Figma', 'React', 'Angular', 'Workflow Design'],
    year: '2024 - 2025',
    role: 'Lead Product Designer & Frontend Architect',
    client: 'AsyLex / SidLabs Online LLP',
    accentColor: '#FF6B00',
    accentGradient: 'linear-gradient(135deg, #FF6B00 0%, #FF8F3D 100%)',
    featured: true,
    coverImage: 'assets/projects/lexaid/lexai_home.png',
    screens: [
      'assets/projects/lexaid/lexai_home.png',
      'assets/projects/lexaid/lexai_dashboard.png',
      'assets/projects/lexaid/lexai_eligibility_1.png',
      'assets/projects/lexaid/lexai_eligibility_2.png',
      'assets/projects/lexaid/lexai_eligibility_3.png',
      'assets/projects/lexaid/lexai_login.png',
      'assets/projects/lexaid/lexai_signup.png'
    ],
    overview: 'LexAI transforms complex refugee legal asylum and Swiss legal workflows into an accessible AI-assisted platform. Designed intuitive AI search interfaces, automated case summary cards, client onboarding flows, and structured case management dashboards in Figma.',
    problem: 'Legal professionals experienced significant friction and cognitive overload when searching complex legal repositories and processing case intake documents.',
    solution: 'Designed intuitive AI search interfaces, automated case summary cards, multi-lingual client onboarding flows, and structured case management dashboards in Figma; engineered responsive components with real-time validation and evidence review.',
    keyOutcomes: [
      'Improved user onboarding efficiency and document analysis speed',
      'Integrated multi-lingual intake tailored to official Swiss procedures',
      'Accelerated appeal brief preparation for legal caseworkers',
      'Unified design system with accessible components'
    ],
    stats: [
      { label: 'Petition Drafting', value: 'Automated Flow' },
      { label: 'Case Intake', value: 'Multi-Step UX' },
      { label: 'Jurisprudence', value: 'Swiss AsylG' },
      { label: 'Multi-Lingual', value: '4 Languages' }
    ],
    sections: [
      {
        title: 'AI Search & Case Summary Cards',
        subtitle: 'Streamlined Intake Flow',
        description: 'Designed frictionless step-by-step forms and automated AI case summary cards that extract key legal precedents and evidence milestones instantly.',
        image: 'assets/projects/lexaid/lexai_eligibility_1.png',
        highlights: ['Progressive disclosure UX', 'Automated document extraction', 'Multi-lingual official form support']
      },
      {
        title: 'Centralized Case Management Dashboard',
        subtitle: 'Real-time Review Radar',
        description: 'Crafted an intuitive dashboard displaying active cases, tribunal deadlines, upcoming client hearings, and circular milestone review charts.',
        image: 'assets/projects/lexaid/lexai_dashboard.png',
        highlights: ['Circular appeal progress radar', 'Upcoming client meeting calendar', 'Instant petition draft generator']
      }
    ],
    designSpecs: {
      typography: ['Urbanist / Caros (Headings)', 'Urbanist (Body UI)', 'JetBrains Mono (Case IDs)'],
      colors: [
        { name: 'Lex Orange Primary', hex: '#FF6B00', role: 'Brand CTA & Active States' },
        { name: 'Swiss Slate Deep', hex: '#0F172A', role: 'Header & Navigation' },
        { name: 'Warm Cream Surface', hex: '#F8FAFC', role: 'Card & Canvas Fills' }
      ],
      gridSystem: '12-Column Responsive Fluid Grid with 24px Gutters',
      keyComponents: ['Progress Radar Chart', 'Multi-step Progress Stepper', 'Case Summary Card', 'Event Schedule Timeline']
    }
  },
  {
    id: 'crypto-miners-hub',
    slug: 'crypto-miners-hub',
    title: 'OS Mining — Crypto Mining Hardware & Service Hub',
    subtitle: 'Hardware Marketplace, Real-Time Profitability Calculator & Global Repair Portal',
    tagline: 'Streamlining ASIC Hardware Sourcing, Earnings Forecasting & Multi-Region Diagnostics',
    category: 'Product Design',
    tags: ['Product Design', 'E-Commerce', 'Web3 & Crypto', 'Profit Calculator', 'Figma', 'Responsive Design'],
    year: '2024',
    role: 'Lead UI/UX Designer & Frontend',
    client: 'OS Mining / Digifarm Group',
    accentColor: '#F59E0B',
    accentGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    featured: true,
    coverImage: 'assets/projects/crypto/Home.png',
    screens: [
      'assets/projects/crypto/Home.png',
      'assets/projects/crypto/shop.png',
      'assets/projects/crypto/Repair.png',
      'assets/projects/crypto/single product page.png',
      'assets/projects/crypto/News.png',
      'assets/projects/crypto/contact us.png'
    ],
    overview: 'OS Mining (Miners Hub) is a specialized Web3 hardware marketplace and enterprise mining service portal designed for individual and institutional cryptocurrency miners across the Middle East, Europe, and Asia-Pacific. The platform features real-time monthly earnings calculators, ASIC miner catalogs with detailed power/hashrate telemetry, automated repair ticketing, and multi-currency global support.',
    problem: 'Prospective and enterprise crypto miners faced steep barriers when purchasing hardware: opaque profitability metrics, uncertain power consumption figures, complex warranty/repair procedures, and fragmented global shipping details.',
    solution: 'Designed an intuitive end-to-end e-commerce experience featuring an interactive dynamic earnings slider (AED 1,000 to AED 100,000+), standardized ASIC technical cards (Hashrate, Power, Algorithm), a diagnostic repair scheduling module with global branch coverage, and transparent multi-currency pricing.',
    keyOutcomes: [
      'Interactive monthly earnings slider bridging customer investment goals with exact ASIC recommendations',
      'Standardized technical spec sheets (TH/s, Wattage, SHA-256 algorithm) boosting buyer conversion',
      'Dedicated diagnostic repair tracking portal reducing hardware servicing turnarounds across 6 global hubs',
      'High-contrast dark-mode aesthetic with golden liquidity accents tailored for Web3 audiences'
    ],
    stats: [
      { label: 'Platform Type', value: 'Web3 & E-Commerce' },
      { label: 'Global Hubs', value: '6 Regions' },
      { label: 'Calculator UX', value: 'Interactive' },
      { label: 'Hardware Spec', value: 'ASIC & GPU' }
    ],
    sections: [
      {
        title: 'Interactive Earnings Calculator & Storefront',
        subtitle: 'Dynamic Yield Projections & Hero Flow',
        description: 'Designed an intuitive financial slider allowing customers to adjust expected monthly earnings to immediately receive estimated machine purchase requirements, ROI timelines, and power usage breakdowns.',
        image: 'assets/projects/crypto/Home.png',
        highlights: ['Dynamic purchase price projection', 'Frictionless quick-purchase CTAs', 'Clear 95% uptime & security trust badges']
      },
      {
        title: 'High-Density Hardware Catalog & Diagnostics',
        subtitle: 'Technical Filtering & Diagnostic Portal',
        description: 'Created modular product grids categorized by manufacturer (Antminer, Whatsminer, Avalon) with instant at-a-glance hashrate metrics, alongside a worldwide repair booking service.',
        image: 'assets/projects/crypto/Repair.png',
        highlights: ['Hashrate (TH/s) & Power (Watts) comparison cards', 'Global repair centers in Dubai, USA, Australia, and UK', 'Integrated multi-currency checkout']
      }
    ],
    designSpecs: {
      typography: ['Urbanist / Space Grotesk (Headings)', 'Inter (Body UI)', 'JetBrains Mono (Hashrate & Price Metrics)'],
      colors: [
        { name: 'Amber Gold', hex: '#F59E0B', role: 'Primary CTAs, Brand Accents & Yield Sliders' },
        { name: 'Obsidian Black', hex: '#0B0F19', role: 'Hero Backgrounds & Dark Canvas' },
        { name: 'Pure White', hex: '#FFFFFF', role: 'High-Density Catalog Cards & Clarity' }
      ],
      gridSystem: '12-Column Responsive Layout with Fluid Card Breakpoints',
      keyComponents: ['Earnings Calculator Slider', 'ASIC Spec Badge Card', 'Repair Status Table', 'Global Office Locator']
    }
  }
];
