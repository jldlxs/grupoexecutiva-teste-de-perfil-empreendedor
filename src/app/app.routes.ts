import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent)
  },
  {
    path: 'results',
    loadComponent: () => import('./pages/results/results.component').then(m => m.ResultsComponent)
  }
];