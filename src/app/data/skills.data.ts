export interface SkillItem {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  badge: string;
  description: string;
  productionUse: string;
  subSkills: string[];
  tags: string[];
  icon: string;
  accent: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accent: string;
  skills: SkillItem[];
}

export const DETAILED_SKILLS_DATA: SkillCategory[] = [
  {
    id: 'product-ux',
    title: 'Product & UX Design',
    subtitle: 'User Experience, Wireframing & Interactive Prototyping',
    icon: 'layout',
    accent: '#FF6B00',
    skills: [
      {
        id: 'ui-ux-design',
        name: 'UI/UX & Product Design',
        category: 'Product & UX Design',
        proficiency: 98,
        badge: 'Priority Core',
        description: 'End-to-end interface design, responsive layouts, user journey mapping, and interactive hi-fi prototypes built with precision.',
        productionUse: 'Consectus Banking HUB, RPA Control Center & LegalTech Platform',
        subSkills: ['Figma', 'Adobe XD', 'Interactive Prototyping', 'Wireframing', 'Motion Design', 'Information Architecture'],
        tags: ['Figma', 'Auto-Layout', 'Adobe XD', 'Prototyping', 'Motion Design', 'User Flows'],
        icon: 'figma',
        accent: '#FF6B00'
      }
    ]
  },
  {
    id: 'frontend-angular',
    title: 'Frontend Engineering',
    subtitle: 'Angular, TypeScript, State Management & React',
    icon: 'code-2',
    accent: '#DD0031',
    skills: [
      {
        id: 'angular-typescript',
        name: 'Frontend Engineering (Angular & TypeScript)',
        category: 'Frontend Engineering',
        proficiency: 96,
        badge: 'Priority Core',
        description: 'Architecting fast, modular enterprise web applications using Angular Standalone Components, Signal reactivity, RxJS streams, and strict TypeScript.',
        productionUse: 'Enterprise FinTech Banking Portal & Real-time Bot Telemetry Dashboards',
        subSkills: ['Angular', 'TypeScript', 'Signals & RxJS', 'Standalone Components', 'Custom Directives', 'Enterprise State'],
        tags: ['Angular', 'TypeScript', 'Signals', 'RxJS', 'Standalone Components', 'Enterprise UI'],
        icon: 'angular',
        accent: '#DD0031'
      },
      {
        id: 'web-react-styling',
        name: 'Core Web & Styling (HTML, CSS/SCSS, React)',
        category: 'Frontend Engineering',
        proficiency: 94,
        badge: 'Modern Web',
        description: 'Pixel-perfect CSS Grid & Flexbox, fluid responsive design, modern SCSS design tokens, React components, and REST API integration.',
        productionUse: 'Cribo Property Studio, SaaS Client Apps & Multi-Device Interfaces',
        subSkills: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'React', 'Bootstrap / Tailwind', 'REST APIs'],
        tags: ['HTML5', 'CSS3/SCSS', 'JavaScript', 'React', 'Bootstrap', 'REST APIs'],
        icon: 'code',
        accent: '#06B6D4'
      }
    ]
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    subtitle: 'Design Tokens, Component Libraries & Dev Handoff',
    icon: 'palette',
    accent: '#EC4899',
    skills: [
      {
        id: 'design-systems-tokens',
        name: 'Design Systems & Token Architecture',
        category: 'Design Systems',
        proficiency: 96,
        badge: 'Design Tokens',
        description: 'Building multi-brand design systems, Figma Variables, structured design tokens (colors, typography, spacing), and seamless developer handoff specs.',
        productionUse: 'Unified Figma-to-SCSS Design Tokens across Desktop & Mobile',
        subSkills: ['Figma Variables', 'Token Studio', 'Component Libraries', 'Dark/Light Themes', 'Developer Handoff', 'WCAG Tokens'],
        tags: ['Figma Variables', 'Token Architecture', 'Component Sets', 'Dark/Light Modes', 'Handoff Specs'],
        icon: 'palette',
        accent: '#EC4899'
      }
    ]
  },
  {
    id: 'research-a11y',
    title: 'Research & Usability',
    subtitle: 'WCAG 2.1 AA Standards, User Testing & Audits',
    icon: 'search',
    accent: '#10B981',
    skills: [
      {
        id: 'a11y-user-research',
        name: 'Accessibility (WCAG AA) & User Research',
        category: 'Research & Usability',
        proficiency: 95,
        badge: 'Accessibility',
        description: 'Implementing strict WCAG 2.1 AA accessibility (4.5:1+ contrast, screen reader ARIA, keyboard navigation) paired with user interviews and usability testing.',
        productionUse: 'Zero-barrier accessibility across complex financial data tables and forms',
        subSkills: ['WCAG 2.1 AA', 'User Interviews', 'Usability Testing', 'ARIA Standards', 'Keyboard Navigation', 'Heuristic Audits'],
        tags: ['WCAG 2.1 AA', 'User Interviews', 'Usability Testing', 'ARIA Labels', 'Contrast 4.5:1+'],
        icon: 'shield-check',
        accent: '#10B981'
      }
    ]
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    subtitle: 'Git, GitHub, VS Code, Postman & AI Tools',
    icon: 'cpu',
    accent: '#8B5CF6',
    skills: [
      {
        id: 'tools-dev-workflow',
        name: 'Developer Tools & Workflow',
        category: 'Tools & Workflow',
        proficiency: 92,
        badge: 'Dev Tools',
        description: 'Modern developer workflow including Git version control, collaborative GitHub PRs, Postman API testing, and AI-assisted prototyping.',
        productionUse: 'Daily Frontend Engineering, Agile Sprints & M.Tech CSE @ Jadavpur University',
        subSkills: ['Git & GitHub', 'VS Code', 'Postman', 'npm / Webpack', 'Figma Dev Mode', 'AI-Assisted Tools'],
        tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'Agile / Jira', 'AI Tools'],
        icon: 'terminal',
        accent: '#8B5CF6'
      }
    ]
  }
];

// Flat list for easy filtering
export const ALL_SKILLS: SkillItem[] = DETAILED_SKILLS_DATA.flatMap(c => c.skills);
export const SKILLS_DATA = DETAILED_SKILLS_DATA;
