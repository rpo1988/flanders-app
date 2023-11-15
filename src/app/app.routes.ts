import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';

enum RoutePath {
  HOME = '',
  LOGIN = 'login',
}

const AuthGuard: CanActivateFn = () => {
  const isAuthenticated = inject(AuthService).isAuthenticated();
  return isAuthenticated ? true : inject(Router).createUrlTree([RoutePath.LOGIN]);
};

export const routes: Routes = [
  {
    path: RoutePath.LOGIN,
    component: LoginComponent,
  },
  {
    path: RoutePath.HOME,
    loadComponent: () => import('./home/home.component').then((mod) => mod.HomeComponent),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: RoutePath.HOME, pathMatch: 'full' },
];
