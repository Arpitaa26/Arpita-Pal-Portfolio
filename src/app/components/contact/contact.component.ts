import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailCopied = signal<boolean>(false);
  phoneCopied = signal<boolean>(false);
  formSubmitted = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);

  contactEmail = 'apal59349@gmail.com';
  contactPhone = '+91-7439064671';
  contactLocation = 'Kolkata, WB, India';

  socialLinks = [
    { label: 'LinkedIn', handle: 'arpitapal26', url: 'https://www.linkedin.com/in/arpitapal26/', icon: 'linkedin' },
    { label: 'Behance', handle: 'arpitapal1', url: 'https://www.behance.net/arpitapal1', icon: 'behance' },
    { label: 'GitHub', handle: 'Arpitaa26', url: 'https://github.com/Arpitaa26', icon: 'github' },
    { label: 'LeetCode', handle: 'Arpita26', url: 'https://leetcode.com/u/Arpita26/', icon: 'code' }
  ];

  formData = {
    name: '',
    email: '',
    projectType: 'FinTech / Enterprise SaaS Product Design',
    budget: '$5k - $15k',
    message: ''
  };

  copyEmail() {
    navigator.clipboard.writeText(this.contactEmail);
    this.emailCopied.set(true);
    setTimeout(() => {
      this.emailCopied.set(false);
    }, 2500);
  }

  copyPhone() {
    navigator.clipboard.writeText(this.contactPhone);
    this.phoneCopied.set(true);
    setTimeout(() => {
      this.phoneCopied.set(false);
    }, 2500);
  }

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.formSubmitted.set(true);
    }, 1200);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      projectType: 'FinTech / Enterprise SaaS Product Design',
      budget: '$5k - $15k',
      message: ''
    };
    this.formSubmitted.set(false);
  }
}
