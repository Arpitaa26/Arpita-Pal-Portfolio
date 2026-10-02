import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

export interface PipelineStage {
  id: number;
  key: 'figma' | 'tokens' | 'angular' | 'rendered';
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-design-to-code',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './design-to-code.component.html',
  styleUrls: ['./design-to-code.component.scss']
})
export class DesignToCodeComponent {
  activeStage = signal<'figma' | 'tokens' | 'angular' | 'rendered'>('figma');

  stages: PipelineStage[] = [
    {
      id: 1,
      key: 'figma',
      title: '1. Figma Specification',
      subtitle: 'Component Architecture & Variants',
      badge: 'Figma Auto-Layout 5.0',
      icon: 'figma',
      accent: '#FF6B00'
    },
    {
      id: 2,
      key: 'tokens',
      title: '2. Semantic Tokens',
      subtitle: 'Bi-directional JSON & SCSS Map',
      badge: 'Design Tokens W3C Spec',
      icon: 'tokens',
      accent: '#EC4899'
    },
    {
      id: 3,
      key: 'angular',
      title: '3. Angular Component',
      subtitle: 'Strict TypeScript & OnPush Signals',
      badge: 'Angular 20 Standalone',
      icon: 'code',
      accent: '#06B6D4'
    },
    {
      id: 4,
      key: 'rendered',
      title: '4. Live DOM Output',
      subtitle: 'Zero Layout Shift & 100% WCAG',
      badge: 'Production 60 FPS',
      icon: 'sparkles',
      accent: '#10B981'
    }
  ];

  figmaJsonCode = `{
  "name": "LegalCaseCard",
  "type": "COMPONENT",
  "layoutMode": "VERTICAL",
  "padding": { "top": 24, "bottom": 24, "left": 24, "right": 24 },
  "itemSpacing": 16,
  "cornerRadius": 16,
  "fills": [{ "type": "SOLID", "color": "#161D28" }],
  "strokes": [{ "color": "rgba(255,255,255,0.08)", "weight": 1 }],
  "effects": [{ "type": "DROP_SHADOW", "radius": 12, "opacity": 0.5 }]
}`;

  tokensJsonCode = `{
  "case-card": {
    "bg": { "$value": "{surface.elevated}", "$type": "color" },
    "radius": { "$value": "{radius.lg}", "$type": "dimension" },
    "padding": { "$value": "{space.md}", "$type": "dimension" },
    "border": { "$value": "{border.subtle}", "$type": "border" },
    "accent": { "$value": "#FF6B00", "$type": "color" }
  }
}`;

  angularTsCode = `@Component({
  selector: 'app-case-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss']
})
export class CaseCardComponent {
  @Input({ required: true }) caseData!: LegalCase;
  @Output() draftClick = new EventEmitter<string>();
}`;

  renderedDomCode = `<app-case-card class="rendered-case-card">
  <article class="case-container" role="region">
    <h3 class="case-title">Refugee Case #CH-4481</h3>
    <span class="status-pill">Pending Tribunal Review</span>
    <button class="btn-action">Draft Evidence Brief →</button>
  </article>
</app-case-card>`;

  selectStage(key: 'figma' | 'tokens' | 'angular' | 'rendered') {
    this.activeStage.set(key);
  }
}
