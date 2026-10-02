import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { PROCESS_DATA, ProcessStep } from '../../data/process.data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  steps: ProcessStep[] = PROCESS_DATA;
  activeStep = signal<string>('01');

  selectStep(stepNum: string) {
    this.activeStep.set(stepNum);
  }
}
