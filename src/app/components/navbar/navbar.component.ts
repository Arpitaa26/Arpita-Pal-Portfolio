import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';

export interface NavItem {
  label: string;
  target: string;
  isRoute?: boolean;
  routePath?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  private router = inject(Router);

  isScrolled = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('hero');
  currentUrl = signal<string>('/');

  linkedinUrl = 'https://www.linkedin.com/in/arpitapal26/';
  behanceUrl = 'https://www.behance.net/arpitapal1';

  navLinks: NavItem[] = [
    { label: 'Home', target: 'hero', isRoute: false },
    { label: 'All Projects', target: 'all-projects', isRoute: true, routePath: '/all-projects' },
    { label: 'Skills', target: 'skills', isRoute: false },
    { label: 'Experience', target: 'about', isRoute: false },
    { label: 'Contact', target: 'contact', isRoute: false }
  ];

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.currentUrl.set(url);
        if (url.includes('all-projects')) {
          this.activeSection.set('all-projects');
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
          this.activeSection.set('hero');
        }
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 30);
    if (!this.currentUrl().includes('all-projects')) {
      this.updateActiveSection();
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  handleNavClick(item: NavItem, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();

    if (item.isRoute) {
      this.router.navigate([item.routePath || '/all-projects']);
      this.activeSection.set('all-projects');
      return;
    }

    // If currently on /all-projects, navigate back to home then scroll
    if (this.currentUrl().includes('all-projects')) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(item.target);
        }, 150);
      });
    } else {
      this.scrollToElement(item.target);
    }
  }

  scrollTo(targetId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();
    if (this.currentUrl().includes('all-projects')) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(targetId);
        }, 150);
      });
    } else {
      this.scrollToElement(targetId);
    }
  }

  private scrollToElement(targetId: string) {
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.activeSection.set('hero');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection.set(targetId);
    }
  }

  private updateActiveSection() {
    const sections = this.navLinks.filter(l => !l.isRoute).map(l => l.target);
    const scrollPosition = window.scrollY + 200;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }
}
