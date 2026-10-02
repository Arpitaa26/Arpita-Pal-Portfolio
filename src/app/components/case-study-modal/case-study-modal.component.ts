import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-case-study-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study-modal.component.html',
  styleUrls: ['./case-study-modal.component.scss']
})
export class CaseStudyModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  activeImageIndex: number = 0;

  closeModal() {
    this.close.emit();
  }

  setImage(index: number) {
    this.activeImageIndex = index;
  }
}
