import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  {
    path: 'heroes',
    loadComponent: () => import('./heroes/heroes.page').then( m => m.HeroesPage)
  }
];
