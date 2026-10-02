import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { PROJECTS_DATA } from '../../data/projects.data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { CaseStudyModalComponent } from '../case-study-modal/case-study-modal.component';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, CaseStudyModalComponent],
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent {
  projects = PROJECTS_DATA;
  activeModalProject = signal<Project | null>(null);

  // Interactive UI Preview States for each showcase
  bankingTab = signal<'overview' | 'accounts' | 'transactions' | 'analytics'>('overview');
  bankingCurrency = signal<string>('USD');

  rpaBotFilter = signal<'all' | 'running' | 'failed' | 'completed'>('all');
  rpaActiveScreen = signal<number>(0);
  lexAiStep = signal<number>(1);
  lexAiActiveScreen = signal<number>(0);
  criboActiveScreen = signal<number>(0);

  // Getters for specific project data
  get bankingProject(): Project {
    return this.projects.find(p => p.id === 'banking-hub') || this.projects[0];
  }

  get rpaProject(): Project {
    return this.projects.find(p => p.id === 'rpa-control-center') || this.projects[1];
  }

  get lexAiProject(): Project {
    return this.projects.find(p => p.id === 'lexaid-ai') || this.projects[2];
  }

  get criboProject(): Project {
    return this.projects.find(p => p.id === 'cribo-real-estate') || this.projects[3];
  }

  // Interactive handlers
  setBankingTab(tab: 'overview' | 'accounts' | 'transactions' | 'analytics', e?: Event): void {
    if (e) e.stopPropagation();
    this.bankingTab.set(tab);
  }

  setBankingCurrency(curr: string, e?: Event): void {
    if (e) e.stopPropagation();
    this.bankingCurrency.set(curr);
  }

  setRpaFilter(filter: 'all' | 'running' | 'failed' | 'completed', e?: Event): void {
    if (e) e.stopPropagation();
    this.rpaBotFilter.set(filter);
  }

  setRpaScreen(idx: number, e?: Event): void {
    if (e) e.stopPropagation();
    this.rpaActiveScreen.set(idx);
  }

  setLexAiStep(step: number, e?: Event): void {
    if (e) e.stopPropagation();
    this.lexAiStep.set(step);
  }

  setLexAiScreen(idx: number, e?: Event): void {
    if (e) e.stopPropagation();
    this.lexAiActiveScreen.set(idx);
  }

  setCriboScreen(idx: number, e?: Event): void {
    if (e) e.stopPropagation();
    this.criboActiveScreen.set(idx);
  }

  openModal(project: Project): void {
    this.activeModalProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.activeModalProject.set(null);
    document.body.style.overflow = 'auto';
  }
}
