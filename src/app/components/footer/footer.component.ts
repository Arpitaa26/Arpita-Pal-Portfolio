import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = signal<string>('');
  subscribed = signal<boolean>(false);

  contactEmail = 'apal59349@gmail.com';
  contactPhone = '+91-7439064671';

  onSubscribe(e?: Event): void {
    if (e) e.preventDefault();
    const email = this.newsletterEmail().trim();
    if (email && email.includes('@')) {
      this.subscribed.set(true);
      setTimeout(() => {
        this.subscribed.set(false);
        this.newsletterEmail.set('');
      }, 3500);
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
