import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { DETAILED_SKILLS_DATA, ALL_SKILLS, SkillCategory, SkillItem } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = DETAILED_SKILLS_DATA;
  allSkills: SkillItem[] = ALL_SKILLS;

  // Active filters and interaction state
  selectedCategoryId = signal<string>('all');
  searchQuery = signal<string>('');
  selectedSkill = signal<SkillItem>(ALL_SKILLS[0]); // default selected is Figma

  // Filtered skills computation
  filteredSkills = computed(() => {
    let result = this.allSkills;
    const catId = this.selectedCategoryId();
    const query = this.searchQuery().toLowerCase().trim();

    if (catId !== 'all') {
      const cat = this.categories.find(c => c.id === catId);
      if (cat) {
        result = cat.skills;
      }
    }

    if (query) {
      result = result.filter(s => 
        s.name.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        (s.subSkills && s.subSkills.some(sub => sub.toLowerCase().includes(query))) ||
        s.tags.some(t => t.toLowerCase().includes(query)) ||
        s.description.toLowerCase().includes(query) ||
        s.productionUse.toLowerCase().includes(query)
      );
    }

    return result;
  });

  setCategory(catId: string): void {
    this.selectedCategoryId.set(catId);
  }

  selectSkill(skill: SkillItem): void {
    this.selectedSkill.set(skill);
  }

  onSearchChange(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }
}
