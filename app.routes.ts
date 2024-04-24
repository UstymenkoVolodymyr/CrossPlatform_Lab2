import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'lab2',
    loadComponent: () => import('./lab2/lab2.page').then( m => m.Lab2Page)
  },
];
