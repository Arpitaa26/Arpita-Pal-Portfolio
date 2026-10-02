export interface TokenItem {
  category: string;
  name: string;
  figmaName: string;
  cssVariable: string;
  value: string;
  previewType: 'color' | 'spacing' | 'radius' | 'shadow' | 'font';
  description: string;
}

export const DESIGN_TOKENS_DATA: TokenItem[] = [
  // Colors
  { category: 'Color', name: 'Brand Primary', figmaName: 'color/brand/primary', cssVariable: '--primary-500', value: '#FF6B00', previewType: 'color', description: 'Primary interactive accent for CTAs and highlights' },
  { category: 'Color', name: 'Brand Orange Deep', figmaName: 'color/brand/primary-600', cssVariable: '--primary-600', value: '#EA580C', previewType: 'color', description: 'Pressed and active button background' },
  { category: 'Color', name: 'Cyan Accent', figmaName: 'color/accent/cyan', cssVariable: '--accent-cyan', value: '#06B6D4', previewType: 'color', description: 'Data streams, telemetries, and code elements' },
  { category: 'Color', name: 'Emerald Success', figmaName: 'color/semantic/success', cssVariable: '--accent-emerald', value: '#10B981', previewType: 'color', description: 'Live statuses, verified badges, and SLA compliance' },
  { category: 'Color', name: 'Canvas Dark', figmaName: 'color/surface/canvas', cssVariable: '--bg-canvas', value: '#090C10', previewType: 'color', description: 'Deep obsidian background for maximum focus' },
  { category: 'Color', name: 'Surface Elevated', figmaName: 'color/surface/elevated', cssVariable: '--bg-surface-elevated', value: '#161D28', previewType: 'color', description: 'Card containers and interactive drawers' },

  // Radii
  { category: 'Radius', name: 'Radius Small', figmaName: 'radius/sm', cssVariable: '--radius-sm', value: '10px', previewType: 'radius', description: 'Badges, tags, and internal micro-controls' },
  { category: 'Radius', name: 'Radius Medium', figmaName: 'radius/md', cssVariable: '--radius-md', value: '14px', previewType: 'radius', description: 'Inputs, dropdowns, and form items' },
  { category: 'Radius', name: 'Radius Large', figmaName: 'radius/lg', cssVariable: '--radius-lg', value: '18px', previewType: 'radius', description: 'Cards and dashboard widget containers' },
  { category: 'Radius', name: 'Radius Full (Pill)', figmaName: 'radius/full', cssVariable: '--radius-full', value: '9999px', previewType: 'radius', description: 'Buttons and segmented switch tabs' },

  // Spacing
  { category: 'Spacing', name: 'Space Small', figmaName: 'spacing/sm', cssVariable: '--space-sm', value: '16px', previewType: 'spacing', description: 'Standard container gap between tight elements' },
  { category: 'Spacing', name: 'Space Medium', figmaName: 'spacing/md', cssVariable: '--space-md', value: '24px', previewType: 'spacing', description: 'Default gutter and card interior padding' },
  { category: 'Spacing', name: 'Space Large', figmaName: 'spacing/lg', cssVariable: '--space-lg', value: '32px', previewType: 'spacing', description: 'Section sub-group padding' },

  // Shadows
  { category: 'Shadow', name: 'Card Elevation', figmaName: 'elevation/card', cssVariable: '--shadow-md', value: '0 4px 14px rgba(0,0,0,0.5)', previewType: 'shadow', description: 'Base elevation for elevated panels' },
  { category: 'Shadow', name: 'Primary Glow', figmaName: 'elevation/glow-primary', cssVariable: '--shadow-glow', value: '0 0 35px rgba(255,107,0,0.28)', previewType: 'shadow', description: 'Hero CTA and focus highlights' }
];
