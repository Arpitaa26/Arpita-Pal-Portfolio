import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { DESIGN_TOKENS_DATA, TokenItem } from '../../data/design-tokens.data';

export type PipelineType = 'color' | 'spacing' | 'typography';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemPlaygroundComponent {
  tokens: TokenItem[] = DESIGN_TOKENS_DATA;
  
  // Interactive Pipeline Demonstration
  activePipeline = signal<PipelineType>('color');

  // Interactive Button Matrix Controls
  selectedVariant = signal<'primary' | 'secondary' | 'ghost' | 'destructive'>('primary');
  selectedSize = signal<'sm' | 'md' | 'lg'>('md');
  selectedState = signal<'default' | 'hover' | 'active' | 'disabled' | 'loading'>('default');
  hasIcon = signal<boolean>(true);

  // Interactive Form Inputs
  inputValue = signal<string>('arpita.pal@product-engineering.com');
  inputValidation = signal<'valid' | 'invalid' | 'neutral'>('valid');

  // Interactive Segmented Controls
  activeSegment = signal<string>('Overview');
  segments = ['Overview', 'Variables & Tokens', 'Component Matrix', 'WCAG 2.1 AA'];

  // Token Category Filter
  activeTokenCategory = signal<string>('All');
  tokenCategories = ['All', 'Color', 'Radius', 'Spacing', 'Shadow'];

  filteredTokens = signal<TokenItem[]>(this.tokens);

  setPipeline(p: PipelineType) {
    this.activePipeline.set(p);
  }

  setVariant(v: 'primary' | 'secondary' | 'ghost' | 'destructive') {
    this.selectedVariant.set(v);
  }

  setSize(s: 'sm' | 'md' | 'lg') {
    this.selectedSize.set(s);
  }

  setState(st: 'default' | 'hover' | 'active' | 'disabled' | 'loading') {
    this.selectedState.set(st);
  }

  toggleIcon() {
    this.hasIcon.update(v => !v);
  }

  setTokenCategory(cat: string) {
    this.activeTokenCategory.set(cat);
    if (cat === 'All') {
      this.filteredTokens.set(this.tokens);
    } else {
      this.filteredTokens.set(this.tokens.filter(t => t.category === cat));
    }
  }

  setSegment(s: string) {
    this.activeSegment.set(s);
  }

  handleInputChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.inputValue.set(val);
    if (!val) {
      this.inputValidation.set('neutral');
    } else if (val.includes('@') && val.includes('.')) {
      this.inputValidation.set('valid');
    } else {
      this.inputValidation.set('invalid');
    }
  }
}
