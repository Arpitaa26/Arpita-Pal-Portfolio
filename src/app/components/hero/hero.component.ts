import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillNode {
  id: string;
  name: string;
  shortName: string;
  category: 'design' | 'frontend' | 'tools';
  orbit: 'outer' | 'inner';
  angle: number; // in degrees
  color: string;
  bgGlow: string;
  role: string;
  detail: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  // Active hovered skill for the inspection preview
  hoveredSkill = signal<SkillNode | null>(null);
  selectedCategory = signal<'all' | 'design' | 'frontend'>('all');
  isOrbitPaused = signal<boolean>(false);

  // Outer Orbit Skills (Design, UX, IA, Accessibility)
  outerSkills: SkillNode[] = [
    {
      id: 'figma',
      name: 'Figma',
      shortName: 'Figma',
      category: 'design',
      orbit: 'outer',
      angle: 0,
      color: '#F24E1E',
      bgGlow: 'rgba(242, 78, 30, 0.2)',
      role: 'UI/UX & Prototyping',
      detail: 'Design systems, auto-layout, interactive prototypes, variables & components.'
    },
    {
      id: 'design-systems',
      name: 'Design Systems',
      shortName: 'Tokens',
      category: 'design',
      orbit: 'outer',
      angle: 60,
      color: '#EC4899',
      bgGlow: 'rgba(236, 72, 153, 0.2)',
      role: 'Tokens & Architecture',
      detail: 'Figma-to-SCSS token sync, atomic component libraries, and documentation.'
    },
    {
      id: 'ux-research',
      name: 'UX Research',
      shortName: 'Research',
      category: 'design',
      orbit: 'outer',
      angle: 120,
      color: '#F59E0B',
      bgGlow: 'rgba(245, 158, 11, 0.2)',
      role: 'User Journey & IA',
      detail: 'Usability testing, stakeholder interviews, heuristic evaluations & user flows.'
    },
    {
      id: 'wcag-aa',
      name: 'WCAG 2.1 AA',
      shortName: 'WCAG',
      category: 'design',
      orbit: 'outer',
      angle: 180,
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.2)',
      role: 'Accessibility Standards',
      detail: 'Color contrast compliance, ARIA markup, keyboard navigation & screen readers.'
    },
    {
      id: 'wireframing',
      name: 'Wireframing',
      shortName: 'LoFi / HiFi',
      category: 'design',
      orbit: 'outer',
      angle: 240,
      color: '#8B5CF6',
      bgGlow: 'rgba(139, 92, 246, 0.2)',
      role: 'Information Architecture',
      detail: 'Rapid low-to-high fidelity wireframing, sitemaps, and interactive wireflows.'
    },
    {
      id: 'adobe-xd',
      name: 'Adobe Suite',
      shortName: 'Adobe',
      category: 'design',
      orbit: 'outer',
      angle: 300,
      color: '#FF61F6',
      bgGlow: 'rgba(255, 97, 246, 0.2)',
      role: 'Visual & Vector Craft',
      detail: 'Adobe XD, Illustrator vector graphics, and Photoshop raster assets.'
    }
  ];

  // Inner Orbit Skills (Frontend Engineering, Angular, TypeScript, SCSS)
  innerSkills: SkillNode[] = [
    {
      id: 'angular',
      name: 'Angular',
      shortName: 'Angular',
      category: 'frontend',
      orbit: 'inner',
      angle: 30,
      color: '#DD0031',
      bgGlow: 'rgba(221, 0, 49, 0.25)',
      role: 'Standalone & Signals',
      detail: 'Angular 20, Signal-based reactivity, OnPush performance & modular architecture.'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      shortName: 'TS',
      category: 'frontend',
      orbit: 'inner',
      angle: 90,
      color: '#3178C6',
      bgGlow: 'rgba(49, 120, 198, 0.25)',
      role: 'Strict Type Systems',
      detail: 'Enterprise typed architectures, interfaces, state management & clean contracts.'
    },
    {
      id: 'react',
      name: 'React',
      shortName: 'React',
      category: 'frontend',
      orbit: 'inner',
      angle: 150,
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.25)',
      role: 'UI Components & PWA',
      detail: 'React component lifecycles, hooks, responsive single-page applications.'
    },
    {
      id: 'scss',
      name: 'SCSS / CSS3',
      shortName: 'SCSS',
      category: 'frontend',
      orbit: 'inner',
      angle: 210,
      color: '#CC6699',
      bgGlow: 'rgba(204, 102, 153, 0.25)',
      role: 'Modern CSS & Tokens',
      detail: 'Fluid typography clamp(), custom properties, responsive flexbox & grid systems.'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      shortName: 'ES6+',
      category: 'frontend',
      orbit: 'inner',
      angle: 270,
      color: '#F7DF1E',
      bgGlow: 'rgba(247, 223, 30, 0.25)',
      role: 'Modern Web APIs',
      detail: 'DOM manipulation, asynchronous REST workflows, Fabric.js canvas & algorithms.'
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      shortName: 'Git',
      category: 'frontend',
      orbit: 'inner',
      angle: 330,
      color: '#F05032',
      bgGlow: 'rgba(240, 80, 50, 0.25)',
      role: 'Version Control',
      detail: 'Branch workflows, PR reviews, CI/CD pipelines, and open-source collaboration.'
    }
  ];

  // Core Pill Badges for quick reference
  stackHighlights = [
    { label: 'Figma', color: '#F24E1E' },
    { label: 'Angular', color: '#DD0031' },
    { label: 'TypeScript', color: '#3178C6' },
    { label: 'Design Tokens', color: '#EC4899' },
    { label: 'WCAG AA', color: '#10B981' },
    { label: 'SCSS', color: '#CC6699' },
    { label: 'React', color: '#06B6D4' },
    { label: 'LeetCode', color: '#FFA116' }
  ];

  stats = [
    { value: '3+ Years', label: 'Product Design & Frontend' },
    { value: 'Consectus LTD', label: 'Current Role (2025–2026)' },
    { value: 'M.Tech CSE', label: 'Jadavpur University' }
  ];

  marqueeSkills = [
    'Frontend Architecture',
    'Prototyping',
    'WCAG Accessibility',
    'Figma Tokens',
    'UX Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'Design Systems',
    'Angular & React'
  ];

  setHoveredSkill(skill: SkillNode | null): void {
    this.hoveredSkill.set(skill);
  }

  setCategory(cat: 'all' | 'design' | 'frontend'): void {
    this.selectedCategory.set(cat);
  }

  toggleOrbitPause(): void {
    this.isOrbitPaused.update(p => !p);
  }

  scrollTo(targetId: string): void {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
