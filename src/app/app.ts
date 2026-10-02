import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
import { AppsShowcaseComponent } from './components/apps-showcase/apps-showcase.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectCtaComponent } from './components/project-cta/project-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ProjectGridComponent,
    AppsShowcaseComponent,
    SkillsComponent,
    AboutComponent,
    ProjectCtaComponent,
    FooterComponent,
    ThemeToggleComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = signal('Arpita Pal — Product Designer & Frontend Engineer');
}
