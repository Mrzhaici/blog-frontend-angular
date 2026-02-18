import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./routes/main/main.routes').then(mod => mod.MainRoutes),
    title: 'nihao'
  },
];



