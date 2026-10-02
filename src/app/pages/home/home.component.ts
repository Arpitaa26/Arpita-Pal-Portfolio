import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { TickerRibbonComponent } from '../../components/ticker-ribbon/ticker-ribbon.component';
import { ProjectGridComponent } from '../../components/project-grid/project-grid.component';
import { AppsShowcaseComponent } from '../../components/apps-showcase/apps-showcase.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectCtaComponent } from '../../components/project-cta/project-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TickerRibbonComponent,
    ProjectGridComponent,
    AppsShowcaseComponent,
    SkillsComponent,
    AboutComponent,
    ProjectCtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
