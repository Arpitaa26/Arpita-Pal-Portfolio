import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Arpita Pal — Product Designer & Frontend Engineer'
  },
  {
    path: 'all-projects',
    component: AllProjectsComponent,
    title: 'All Projects — Arpita Pal'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
