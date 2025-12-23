import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Mailer } from './pages/mailer/mailer';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mailer', component: Mailer },
  { path: 'about', component: About }
];