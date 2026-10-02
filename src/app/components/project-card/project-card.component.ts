import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  @Input() isLarge: boolean = false;
  @Output() openDetails = new EventEmitter<Project>();

  onCardClick() {
    this.openDetails.emit(this.project);
  }
}
