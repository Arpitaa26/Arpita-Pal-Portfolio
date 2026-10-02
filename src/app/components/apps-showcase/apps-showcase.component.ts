import { Component, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

export interface MobileBankingScreen {
  id: string;
  name: string;
  shortName: string;
  category: string;
  image: string;
  badge: string;
  headline: string;
  description: string;
  features: string[];
  stepNumber: string;
}

@Component({
  selector: 'app-apps-showcase',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './apps-showcase.component.html',
  styleUrl: './apps-showcase.component.scss'
})
export class AppsShowcaseComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private progressTimer: ReturnType<typeof setInterval> | null = null;

  screens: MobileBankingScreen[] = [
    {
      id: 'home',
      name: 'Home & Accounts Feed',
      shortName: 'Accounts',
      category: 'Core Banking',
      image: 'assets/projects/hub-app/app_home.png',
      badge: 'Main Banking Feed',
      headline: 'Multi-Currency Balances & Quick Transfers',
      description: 'Clean mobile banking dashboard showing account balances, quick send/receive options, card management, and recent transactions.',
      features: ['Live account balance', 'Quick money transfer', 'Card controls & security'],
      stepNumber: '01'
    },
    {
      id: 'home-detail',
      name: 'Account Details & History',
      shortName: 'Transactions',
      category: 'Core Banking',
      image: 'assets/projects/hub-app/app_home_detail.png',
      badge: 'Account Activity',
      headline: 'Transaction History & Spending Insights',
      description: 'Detailed account statement with organized transaction history, spending categories, and easy export options.',
      features: ['Categorized spending breakdown', 'Download account statements', 'Copy account & routing numbers'],
      stepNumber: '02'
    },
    {
      id: 'onboarding',
      name: 'Welcome & Get Started',
      shortName: 'Welcome',
      category: 'Onboarding',
      image: 'assets/projects/hub-app/app_onboarding.png',
      badge: 'Welcome Screen',
      headline: 'Simple & Welcoming First-Time Setup',
      description: 'Clear welcome screen guiding new users to open an account or log in with ease.',
      features: ['Clean visual design', 'Fast account signup', 'Helpful step-by-step guidance'],
      stepNumber: '03'
    },
    {
      id: 'phone-auth',
      name: 'Mobile Number Verification',
      shortName: 'Phone OTP',
      category: 'Security',
      image: 'assets/projects/hub-app/app_mobile_auth.png',
      badge: 'Phone Verification',
      headline: 'Phone Number Entry & SMS OTP Verification',
      description: 'Fast mobile verification with country code selection and automatic SMS code input for secure sign-in.',
      features: ['Country code selector', 'Auto-read SMS OTP code', 'Secure encryption'],
      stepNumber: '04'
    },
    {
      id: 'passcode',
      name: 'PIN & Biometrics Setup',
      shortName: 'PIN & FaceID',
      category: 'Security',
      image: 'assets/projects/hub-app/app_passcode.png',
      badge: 'Passcode & Login',
      headline: 'Set 6-Digit Passcode & Face ID Access',
      description: 'Easy PIN creation with Face ID or fingerprint login for quick, secure daily access.',
      features: ['6-digit passcode keypad', 'Face ID & Fingerprint setup', 'Visual feedback on PIN entry'],
      stepNumber: '05'
    },
    {
      id: 'new-customer',
      name: 'Customer Registration Form',
      shortName: 'Registration',
      category: 'Profile Setup',
      image: 'assets/projects/hub-app/app_new_customer.png',
      badge: 'Profile Creation',
      headline: 'Step-by-Step Customer Registration',
      description: 'User-friendly sign-up form with instant field validation, clear error messages, and easy navigation.',
      features: ['Step-by-step progress indicator', 'Instant input validation', 'Clear and simple instructions'],
      stepNumber: '06'
    },
    {
      id: 'kyc-resident',
      name: 'Identity & Address Check',
      shortName: 'ID Verification',
      category: 'Verification',
      image: 'assets/projects/hub-app/app_kyc.png',
      badge: 'Identity Check',
      headline: 'Identity & Address Verification',
      description: 'Secure identity check allowing users to confirm their address and tax details quickly.',
      features: ['Quick address lookup', 'ID document upload ready', 'Real-time status check'],
      stepNumber: '07'
    },
    {
      id: 'origin-funds',
      name: 'Source of Funds Check',
      shortName: 'Funds Source',
      category: 'Verification',
      image: 'assets/projects/hub-app/app_origin_funds.png',
      badge: 'Funds Verification',
      headline: 'Source of Funds & Income Details',
      description: 'Simple multiple-choice form to declare employment and primary source of funds.',
      features: ['Clear choice options', 'Instant submission', 'Secure and confidential'],
      stepNumber: '08'
    },
    {
      id: 'ready',
      name: 'Account Ready & Activated',
      shortName: 'All Done',
      category: 'Complete',
      image: 'assets/projects/hub-app/app_ready.png',
      badge: 'Account Active',
      headline: 'Account Ready — Welcome to Banking HUB',
      description: 'Confirmation screen letting the user know their account is open and ready to use right away.',
      features: ['Instant digital card ready', 'Direct access to dashboard', 'Start sending money immediately'],
      stepNumber: '09'
    }
  ];

  activeScreenIndex = signal<number>(0);
  isAutoPlay = signal<boolean>(true);
  isHovered = signal<boolean>(false);
  progressPercent = signal<number>(0);

  private readonly SLIDE_DURATION_MS = 4500;
  private readonly TICK_MS = 50;

  get currentScreen(): MobileBankingScreen {
    return this.screens[this.activeScreenIndex()];
  }

  get nextScreenItem(): MobileBankingScreen {
    const nextIdx = (this.activeScreenIndex() + 1) % this.screens.length;
    return this.screens[nextIdx];
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay();
    if (!this.isBrowser) return;

    let elapsed = 0;
    this.progressPercent.set(0);

    this.progressTimer = setInterval(() => {
      if (!this.isHovered() && this.isAutoPlay()) {
        elapsed += this.TICK_MS;
        const pct = Math.min(100, (elapsed / this.SLIDE_DURATION_MS) * 100);
        this.progressPercent.set(pct);

        if (elapsed >= this.SLIDE_DURATION_MS) {
          elapsed = 0;
          this.progressPercent.set(0);
          this.nextScreen();
        }
      }
    }, this.TICK_MS);
  }

  stopAutoPlay(): void {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  setScreen(idx: number): void {
    this.activeScreenIndex.set(idx);
    this.progressPercent.set(0);
    this.scrollActiveTabIntoView(idx);
  }

  nextScreen(): void {
    const nextIdx = (this.activeScreenIndex() + 1) % this.screens.length;
    this.activeScreenIndex.set(nextIdx);
    this.progressPercent.set(0);
    this.scrollActiveTabIntoView(nextIdx);
  }

  prevScreen(): void {
    const prevIdx = (this.activeScreenIndex() - 1 + this.screens.length) % this.screens.length;
    this.activeScreenIndex.set(prevIdx);
    this.progressPercent.set(0);
    this.scrollActiveTabIntoView(prevIdx);
  }

  toggleAutoPlay(): void {
    this.isAutoPlay.update(v => !v);
    if (this.isAutoPlay()) {
      this.progressPercent.set(0);
    }
  }

  onMouseEnter(): void {
    this.isHovered.set(true);
  }

  onMouseLeave(): void {
    this.isHovered.set(false);
  }

  scrollRibbon(direction: 'left' | 'right'): void {
    if (!this.isBrowser) return;
    const ribbon = document.getElementById('screenFlowRibbon');
    if (ribbon) {
      const scrollAmt = direction === 'left' ? -200 : 200;
      ribbon.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    }
  }

  private scrollActiveTabIntoView(idx: number): void {
    if (!this.isBrowser) return;
    setTimeout(() => {
      const ribbon = document.getElementById('screenFlowRibbon');
      const activeBtn = document.getElementById('screen-tab-' + idx);
      if (ribbon && activeBtn) {
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const ribbonWidth = ribbon.clientWidth;
        const targetScrollLeft = btnLeft - (ribbonWidth / 2) + (btnWidth / 2);
        ribbon.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: 'smooth' });
      }
    }, 50);
  }
}
