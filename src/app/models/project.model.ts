export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  image?: string;
  codeSnippet?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Product Design' | 'Design Systems' | 'Frontend' | 'AI & SaaS';
  tags: string[];
  year: string;
  role: string;
  client?: string;
  accentColor: string;
  accentGradient: string;
  featured: boolean;
  coverImage: string;
  screens: string[];
  overview: string;
  problem: string;
  solution: string;
  keyOutcomes: string[];
  stats: ProjectStat[];
  sections: ProjectSection[];
  designSpecs?: {
    typography: string[];
    colors: { name: string; hex: string; role: string }[];
    gridSystem: string;
    keyComponents: string[];
  };
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}
