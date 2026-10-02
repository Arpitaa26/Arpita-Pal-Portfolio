import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { PROJECTS_DATA } from '../../data/projects.data';
import { CaseStudyModalComponent } from '../../components/case-study-modal/case-study-modal.component';

export interface PlaceholderProject {
  id: string;
  slotNumber: number;
  title: string;
  subtitle: string;
  category: 'UI/UX Design' | 'Frontend Engineering' | 'Design Systems' | 'Mobile & Web Apps' | 'FinTech & Enterprise';
  tags: string[];
  role: string;
  year: string;
  status: 'Ready for Project Details' | 'Featured Project';
  isPlaceholder: boolean;
  accentColor: string;
  realProject?: Project;
}

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, CaseStudyModalComponent],
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent {
  // Existing real projects
  featuredProjects: Project[] = PROJECTS_DATA;

  // Active filter tab
  selectedCategory = signal<string>('All');
  searchQuery = signal<string>('');

  // Selected project for modal deep-dive
  activeModalProject = signal<Project | null>(null);
  selectedPlaceholder = signal<PlaceholderProject | null>(null);

  categories: string[] = [
    'All',
    'UI/UX Design',
    'Frontend Engineering',
    'Design Systems',
    'FinTech & Enterprise'
  ];

  // Projects list: real ones mapped + placeholders Project 1, Project 2...
  allProjectCards = signal<PlaceholderProject[]>([
    {
      id: 'banking-hub',
      slotNumber: 1,
      title: 'Banking HUB — Enterprise FinTech Portal',
      subtitle: 'Streamlined Multi-Step Onboarding & Account Management for FinTech Enterprise',
      category: 'UI/UX Design',
      tags: ['Product Design', 'Figma', 'Angular', 'FinTech', 'WCAG 2.1 AA'],
      role: 'UI/UX Designer & Frontend Developer',
      year: '2025',
      status: 'Featured Project',
      isPlaceholder: false,
      accentColor: '#3B82F6',
      realProject: PROJECTS_DATA[0]
    },
    {
      id: 'rpa-control-center',
      slotNumber: 2,
      title: 'RPA Portal — Bot Telemetry & Automation Dashboard',
      subtitle: 'Real-Time Bot Execution Monitors, Agent Allocation Controls & Diagnostics',
      category: 'Frontend Engineering',
      tags: ['Product Design', 'UI/UX', 'Figma', 'Data Visualisation', 'Angular'],
      role: 'UI/UX Designer & Frontend Developer',
      year: '2025',
      status: 'Featured Project',
      isPlaceholder: false,
      accentColor: '#8B5CF6',
      realProject: PROJECTS_DATA[1]
    },
    {
      id: 'lexaid-ai',
      slotNumber: 3,
      title: 'LexAI — AI Legal Platform & Case Intake Interface',
      subtitle: 'AI-Assisted Legal Repository Search, Intake & Case Drafting Platform',
      category: 'UI/UX Design',
      tags: ['AI UX Patterns', 'Figma', 'React', 'Angular', 'Workflow Design'],
      role: 'Lead Product Designer & Frontend Architect',
      year: '2024 - 2025',
      status: 'Featured Project',
      isPlaceholder: false,
      accentColor: '#FF6B00',
      realProject: PROJECTS_DATA[2]
    },
    {
      id: 'esbs-portal',
      slotNumber: 4,
      title: 'esbs — Online Banking & Member Savings Portal',
      subtitle: 'Member Dashboard, UK Residency Gating & Dual-Channel 2FA Authentication',
      category: 'FinTech & Enterprise',
      tags: ['Mutual Banking', 'Figma', 'Savings & Mortgages', '2FA', 'FSCS'],
      role: 'Lead UI/UX Designer & Frontend Developer',
      year: '2024 - 2025',
      status: 'Featured Project',
      isPlaceholder: false,
      accentColor: '#002157',
      realProject: PROJECTS_DATA[3]
    },
    {
      id: 'bigbyte',
      slotNumber: 5,
      title: 'BigByte — Enterprise IT Solutions & Cloud Consulting',
      subtitle: 'Modern Corporate Digital Platform for Cloud Services, AI & Digital Transformation',
      category: 'Frontend Engineering',
      tags: ['Web Design', 'UI/UX', 'Cloud Services', 'LLM & GenAI', 'HTML5/CSS3'],
      role: 'Web Designer & Frontend Developer',
      year: '2024',
      status: 'Featured Project',
      isPlaceholder: false,
      accentColor: '#2563EB',
      realProject: PROJECTS_DATA[4]
    },
    {
      id: 'atg-hotels',
      slotNumber: 6,
      title: 'ATG Hotels — Luxury Hospitality & Hotel Booking Platform',
      subtitle: 'End-to-End Hotel Search, Room Reservation & Hospitality Guest Experience',
      category: 'UI/UX Design',
      tags: ['Product Design', 'Hospitality UX', 'Hotel Booking', 'Figma', 'Frontend'],
      role: 'Lead UI/UX Designer & Frontend Developer',
      year: '2024',
      status: 'Featured Project',
      isPlaceholder: false,
      accentColor: '#D97706',
      realProject: PROJECTS_DATA[5]
    },
    {
      id: 'empowering-sankalpa',
      slotNumber: 7,
      title: 'Sankalpa — Empowering Women & Girls Worldwide',
      subtitle: 'Non-Profit Community Platform, Global Impact Activities & Donation Portal',
      category: 'Frontend Engineering',
      tags: ['Web Design', 'NGO & Social Impact', 'Donation UX', 'Responsive Web'],
      role: 'UI/UX Designer & Web Developer',
      year: '2023 - 2024',
      status: 'Featured Project',
      isPlaceholder: false,
      accentColor: '#E11D48',
      realProject: PROJECTS_DATA[6]
    },
    // Placeholder projects for upcoming showcase
    {
      id: 'placeholder-project-1',
      slotNumber: 8,
      title: 'Project 8 — UI/UX Case Study',
      subtitle: 'Slot ready for your upcoming project details, wireframes, and design workflow.',
      category: 'UI/UX Design',
      tags: ['UI/UX Design', 'User Research', 'Wireframing', 'Interactive Prototype'],
      role: 'Product Designer',
      year: '2025',
      status: 'Ready for Project Details',
      isPlaceholder: true,
      accentColor: '#06B6D4'
    },
    {
      id: 'placeholder-project-2',
      slotNumber: 9,
      title: 'Project 9 — Design System & Tokens',
      subtitle: 'Slot ready for your scalable design system, UI components, and token specifications.',
      category: 'Design Systems',
      tags: ['Design System', 'Figma Tokens', 'Atomic Design', 'Component Library'],
      role: 'Design System Architect',
      year: '2025',
      status: 'Ready for Project Details',
      isPlaceholder: true,
      accentColor: '#F59E0B'
    }
  ]);

  filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    const query = this.searchQuery().toLowerCase().trim();

    return this.allProjectCards().filter(project => {
      const matchesCategory =
        cat === 'All' ||
        project.category === cat ||
        project.tags.some(t => t.toLowerCase().includes(cat.toLowerCase()));

      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.tags.some(t => t.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  });

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  onProjectClick(project: PlaceholderProject) {
    if (project.realProject) {
      this.activeModalProject.set(project.realProject);
      document.body.style.overflow = 'hidden';
    } else {
      this.selectedPlaceholder.set(project);
    }
  }

  closeModal() {
    this.activeModalProject.set(null);
    this.selectedPlaceholder.set(null);
    document.body.style.overflow = 'auto';
  }
}
