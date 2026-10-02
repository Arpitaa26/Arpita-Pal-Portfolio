import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-cta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-cta.component.html',
  styleUrls: ['./project-cta.component.scss']
})
export class ProjectCtaComponent {
  emailInput = signal<string>('');
  submitted = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);
  emailCopied = signal<boolean>(false);

  contactEmail = 'apal59349@gmail.com';

  submitInquiry(e?: Event): void {
    if (e) e.preventDefault();
    const email = this.emailInput().trim();
    if (!email || !email.includes('@')) {
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitted.set(true);
    }, 600);
  }

  resetForm(): void {
    this.emailInput.set('');
    this.submitted.set(false);
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.contactEmail);
    this.emailCopied.set(true);
    setTimeout(() => {
      this.emailCopied.set(false);
    }, 2500);
  }
}
