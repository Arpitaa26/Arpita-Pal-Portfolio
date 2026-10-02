import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  // Theme Signal
  readonly theme = signal<ThemeMode>('dark');
  readonly isDark = signal<boolean>(true);

  constructor() {
    if (this.isBrowser) {
      // 1. Check localStorage
      const savedTheme = localStorage.getItem('arpita_portfolio_theme') as ThemeMode | null;
      
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.applyTheme(savedTheme);
      } else {
        // Default to dark theme as design primary
        this.applyTheme('dark');
      }

      // Listen for system changes if user hasn't explicitly set preference
      if (!savedTheme && window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        mediaQuery.addEventListener('change', (e) => {
          if (!localStorage.getItem('arpita_portfolio_theme')) {
            this.applyTheme(e.matches ? 'light' : 'dark');
          }
        });
      }
    }
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(newTheme: ThemeMode): void {
    if (!this.isBrowser) return;
    this.applyTheme(newTheme);
    localStorage.setItem('arpita_portfolio_theme', newTheme);
  }

  private applyTheme(newTheme: ThemeMode): void {
    this.theme.set(newTheme);
    this.isDark.set(newTheme === 'dark');

    if (this.isBrowser) {
      const root = document.documentElement;
      root.setAttribute('data-theme', newTheme);
      
      if (newTheme === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    }
  }
}
