import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-heading" [class.align-left]="align === 'left'">
      @if (tag) {
        <div class="section-heading__badge">
          <span class="badge-dot" [style.background-color]="dotColor"></span>
          <span>{{ tag }}</span>
        </div>
      }
      <h2 class="section-heading__title">
        <ng-content select="[title]"></ng-content>
      </h2>
      @if (description) {
        <p class="section-heading__desc">{{ description }}</p>
      }
    </div>
  `,
  styles: [`
    .section-heading {
      text-align: center;
      max-width: 720px;
      margin: 0 auto clamp(2.5rem, 5vw, 4rem);

      &.align-left {
        text-align: left;
        margin-left: 0;
      }

      &__badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.85rem;
        border-radius: var(--radius-full);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--border-subtle);
        font-size: var(--font-size-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--primary-400);
        margin-bottom: 1rem;
      }

      .badge-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--primary-400);
      }

      &__title {
        font-size: var(--font-size-4xl);
        font-weight: var(--font-weight-extrabold);
        letter-spacing: -0.03em;
        line-height: 1.18;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      &__desc {
        font-size: var(--font-size-base);
        color: var(--text-secondary);
        line-height: 1.6;
      }
    }
  `]
})
export class SectionHeadingComponent {
  @Input() tag?: string;
  @Input() description?: string;
  @Input() align: 'center' | 'left' = 'center';
  @Input() dotColor: string = '#FF6B00';
}
