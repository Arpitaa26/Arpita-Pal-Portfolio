import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { EXPERIENCE_DATA, ExperienceItem, EDUCATION_DATA, EducationItem, INTERESTS_AND_LANGUAGES } from '../../data/process.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  experiences: ExperienceItem[] = EXPERIENCE_DATA;
  educationList: EducationItem[] = EDUCATION_DATA;
  interestsAndLanguages = INTERESTS_AND_LANGUAGES;

  socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arpitapal26/', icon: 'linkedin' },
    { label: 'Behance', url: 'https://www.behance.net/arpitapal1', icon: 'behance' },
    { label: 'GitHub', url: 'https://github.com/Arpitaa26', icon: 'github' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/Arpita26/', icon: 'code' }
  ];
}
