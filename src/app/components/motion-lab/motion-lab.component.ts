import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-motion-lab',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './motion-lab.component.html',
  styleUrls: ['./motion-lab.component.scss']
})
export class MotionLabComponent {
  // Experiment 1: Spring Elevation Card
  cardRotateX = signal<number>(0);
  cardRotateY = signal<number>(0);

  // Experiment 2: Multi-step Flow Stepper
  currentStep = signal<number>(1);
  stepNames = ['Upload Case PDF', 'AI Evidence Parsing', 'Tribunal Citation Match', 'Appeals Ready'];

  // Experiment 3: Shimmer Skeleton to Live Telemetry
  isDataLoading = signal<boolean>(false);
  simulatedVouchers = signal<number>(1420);

  // Experiment 4: Expanding Contextual Sheet
  isDrawerExpanded = signal<boolean>(false);

  // Experiment 5: Interactive Metric Pill Counter
  activeCounter = signal<number>(99);

  onCardMouseMove(event: MouseEvent) {
    const card = (event.currentTarget as HTMLElement);
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    this.cardRotateX.set(-(y / 15));
    this.cardRotateY.set(x / 15);
  }

  onCardMouseLeave() {
    this.cardRotateX.set(0);
    this.cardRotateY.set(0);
  }

  nextStep() {
    this.currentStep.update(s => (s < 4 ? s + 1 : 1));
  }

  prevStep() {
    this.currentStep.update(s => (s > 1 ? s - 1 : 4));
  }

  refreshTelemetry() {
    this.isDataLoading.set(true);
    setTimeout(() => {
      this.simulatedVouchers.set(Math.floor(1200 + Math.random() * 800));
      this.isDataLoading.set(false);
    }, 1000);
  }

  toggleDrawer() {
    this.isDrawerExpanded.update(v => !v);
  }

  incrementCounter() {
    this.activeCounter.update(c => c + 1);
  }
}
