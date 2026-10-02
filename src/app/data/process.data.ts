export interface ProcessStep {
  step: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
  icon: string;
  accent: string;
}

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'Research & Discovery',
    phase: 'Stakeholder Interviews & Workflow Mapping',
    description: 'Evaluate regulatory constraints, security compliance flows, and user journey pain points through user interviews and heuristic reviews.',
    deliverables: ['User Personas', 'Pain Point Matrix', 'User Journey Maps', 'Information Architecture (IA)'],
    icon: 'search',
    accent: '#FF6B00'
  },
  {
    step: '02',
    title: 'Information Architecture & Wireframes',
    phase: 'Structural UX & Flow Design',
    description: 'Create detailed sitemaps, low-to-high fidelity wireframes, and interactive flows to validate navigation and reduce cognitive friction.',
    deliverables: ['Sitemaps', 'User Flows', 'Low-Fi Wireframes', 'Interactive Prototypes'],
    icon: 'layout-grid',
    accent: '#06B6D4'
  },
  {
    step: '03',
    title: 'Figma Design System & High-Fi UI',
    phase: 'Design Tokens & Component Libraries',
    description: 'Establish modular Figma design tokens, accessible color palettes, responsive component libraries, and interactive high-fidelity prototypes.',
    deliverables: ['Figma Component Library', 'Design Tokens', 'Design Specs & Style Guides', 'Interactive High-Fi Prototypes'],
    icon: 'palette',
    accent: '#8B5CF6'
  },
  {
    step: '04',
    title: 'Frontend Engineering & Tokens',
    phase: 'Production Code & Feasibility',
    description: 'Translate Figma designs into reusable UI component libraries in Angular and React with TypeScript, strict accessibility, and token synchronization.',
    deliverables: ['Reusable Angular Components', 'Modular SCSS Tokens', 'WCAG 2.1 AA Compliance', 'API Integration'],
    icon: 'terminal',
    accent: '#10B981'
  },
  {
    step: '05',
    title: 'Design Handoff & Optimization',
    phase: 'Cross-Functional Collaboration',
    description: 'Partner closely with Product Managers and Engineering leads in Agile sprints, audit for accessibility compliance, and optimize web performance.',
    deliverables: ['AI Design Specs Documentation', 'Accessibility Audits', 'Performance Optimization', 'Design QA'],
    icon: 'sparkles',
    accent: '#F59E0B'
  }
];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: { title: string; desc: string }[];
  skills: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: 'Feb 2025 – Jun 2026',
    role: 'UI/UX Designer & Frontend Developer',
    company: 'Consectus LTD',
    location: 'Mumbai, India',
    summary: 'Designed end-to-end FinTech banking workflows, architected the enterprise RPA bot telemetry portal from scratch, and built modular design systems linked to Angular component libraries.',
    highlights: [
      {
        title: 'FinTech Product Design & Onboarding',
        desc: 'Designed end-to-end user flows, wireframes, and interactive Figma prototypes for enterprise banking onboarding and account management, simplifying multi-step verification for thousands of active users.'
      },
      {
        title: 'Enterprise RPA Automation Dashboard',
        desc: 'Architected and designed the Consectus RPA Portal from scratch, establishing real-time telemetry dashboards, bot execution status monitors, agent allocation controls, and alert notification dialogs.'
      },
      {
        title: 'Scalable Design System & Component Library',
        desc: 'Created and documented modular Figma design tokens and led the development of reusable UI component libraries in Angular, reducing UI sprint implementation time by ~30%.'
      },
      {
        title: 'Cross-Functional Design Handoff',
        desc: 'Partnered closely with Product Managers, Backend Developers, and QA engineers in Agile sprints to conduct design reviews and author comprehensive design specifications using AI documentation tools.'
      }
    ],
    skills: ['Figma', 'Figma Tokens', 'Angular', 'TypeScript', 'SCSS', 'FinTech UI/UX', 'RPA Dashboards', 'Design Systems', 'AI Documentation Tools']
  },
  {
    period: 'Aug 2022 – Mar 2024',
    role: 'Web Designer & Developer',
    company: 'Websofttechs',
    location: 'Kolkata, India',
    summary: 'Led end-to-end UX/UI design for 12+ responsive web applications and corporate admin portals across multiple industry verticals, taking concepts from user research to production-ready design assets.',
    highlights: [
      {
        title: 'End-to-End Product UX',
        desc: 'Led end-to-end UX/UI design for 12+ responsive web applications and corporate admin portals across multiple industry verticals, taking concepts from user research to production-ready design assets.'
      },
      {
        title: 'Figma Prototyping & Client Alignment',
        desc: 'Created sitemaps, wireframes, and high-fidelity interactive prototypes in Figma, conducting client design reviews to validate product requirements against business goals.'
      },
      {
        title: 'Accessibility & UX Optimization',
        desc: 'Audited and optimized client web portals for accessibility compliance, responsive layout integrity, and web performance, resulting in a ~40% improvement in page load speeds and user accessibility.'
      }
    ],
    skills: ['UX/UI Design', 'Wireframing', 'Interactive Prototypes', 'Responsive Web & Mobile', 'HTML5/CSS3/JavaScript', 'Accessibility Audits']
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.Tech – Computer Science & Engineering',
    institution: 'Jadavpur University',
    period: 'Jul 2023 – Jun 2026',
    grade: 'CGPA: 7.70 / 10',
    details: 'Specialization in advanced software systems, human-computer interaction, and user-centered design.'
  },
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Dream Institute of Technology',
    period: 'Jul 2018 – Jul 2022',
    grade: 'CGPA: 8.80 / 10',
    details: 'Foundation in data structures, web engineering, computer graphics, and UI architecture.'
  }
];

export const INTERESTS_AND_LANGUAGES = {
  interests: [
    'Design Systems & Tokens',
    'UX Research Methods',
    'Human-Computer Interaction (HCI)',
    'Strategic Chess',
    'Tech Writing'
  ],
  languages: [
    { name: 'English', level: 'Proficient' },
    { name: 'Bengali', level: 'Native' },
    { name: 'Hindi', level: 'Proficient' }
  ]
};
