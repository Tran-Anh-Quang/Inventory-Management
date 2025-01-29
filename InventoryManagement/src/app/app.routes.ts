import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthComponent} from './components/auth/auth.component';
import {CategoryComponent} from './components/category/category.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'categories',
    component: CategoryComponent
  }
];
