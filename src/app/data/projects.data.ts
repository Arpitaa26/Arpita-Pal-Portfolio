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
    id: 'cribo-real-estate',
    slug: 'cribo-real-estate',
    title: 'Cribo Real Estate — Property Discovery & Booking Ecosystem',
    subtitle: 'Modern Real Estate Marketplace & Agency Management Dashboard',
    tagline: 'Reimagining Digital Real Estate Search with Interactive Map & Floorplan Previews',
    category: 'Product Design',
    tags: ['Product Design', 'Visual Design', 'Mobile Responsive', 'Component Library', 'Design Tokens'],
    year: '2024',
    role: 'Senior UI/UX Designer',
    accentColor: '#10B981',
    accentGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    featured: true,
    coverImage: 'assets/projects/cribo/Home page with banner change.png',
    screens: [
      'assets/projects/cribo/Home page with banner change.png',
      'assets/projects/cribo/Dashboard.png',
      'assets/projects/cribo/Desktop - 9.png',
      'assets/projects/cribo/Desktop - 11.png',
      'assets/projects/cribo/Ad page.png'
    ],
    overview: 'Cribo is a clean, content-first property portal featuring instant faceted filters, high-fidelity photo carousels, verified broker badges, and seamless interactive inspection booking.',
    problem: 'Traditional property portals suffer from cluttered ad banners, outdated listings, poor mobile UX, and lack of verified property specifications.',
    solution: 'Designed and built a modular property search interface with instant radius maps, price-per-sqft calculators, and amenity pills, optimized across all breakpoints.',
    keyOutcomes: [
      'Streamlined inspection booking and inquiry flows for prospective tenants',
      'Consistent design system reused across consumer web and broker dashboard',
      'Optimized responsive layout from mobile to ultra-wide displays'
    ],
    stats: [
      { label: 'Booking Flow', value: 'Interactive' },
      { label: 'Viewport UX', value: 'Responsive UI' },
      { label: 'Agency Portal', value: 'Integrated Hub' }
    ],
    sections: [
      {
        title: 'Modern Discovery & Smart Filtering',
        description: 'A modular property search interface with instant radius maps, price-per-sqft calculators, and amenity pills.',
        image: 'assets/projects/cribo/Desktop - 9.png',
        highlights: ['Instant filter updates without page reload', 'High-res image gallery preview cards', 'Verified property trust badges']
      },
      {
        title: 'Broker & Asset Management Dashboard',
        description: 'A clean analytics portal for real estate agencies to track listing performance, lead funnels, and scheduled open-house visits.',
        image: 'assets/projects/cribo/Dashboard.png',
        highlights: ['Lead conversion analytics', 'Direct customer messaging module', 'Listing syndication manager']
      }
    ],
    designSpecs: {
      typography: ['Plus Jakarta Sans (Headings)', 'Inter (Body)'],
      colors: [
        { name: 'Emerald Forest', hex: '#10B981', role: 'Brand & Verified Badges' },
        { name: 'Slate Dark', hex: '#0F172A', role: 'Header & Typography' }
      ],
      gridSystem: '12-Column Responsive Layout',
      keyComponents: ['Property Card', 'Amenity Tag', 'Interactive Map Marker', 'Agent Booking Drawer']
    }
  }
];
