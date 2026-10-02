import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticker-ribbon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticker-ribbon.component.html',
  styleUrls: ['./ticker-ribbon.component.scss']
})
export class TickerRibbonComponent {
  marqueeItems: string[] = [
    'Figma Tokens',
    'UX Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'Design Systems',
    'Frontend Architecture',
    'Prototyping',
    'WCAG Accessibility'
  ];
}
