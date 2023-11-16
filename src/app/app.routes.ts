import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { AuthService } from './auth/auth.service';

export enum RoutePath {
  HOME = '',
  LOGIN = 'login',
}

const LoginGuard: CanActivateFn = () => {
  const isAuthenticated = inject(AuthService).isAuthenticated();
  return isAuthenticated ? inject(Router).createUrlTree([RoutePath.HOME]) : true;
};

const AuthGuard: CanActivateFn = () => {
  const isAuthenticated = inject(AuthService).isAuthenticated();
  return isAuthenticated ? true : inject(Router).createUrlTree([RoutePath.LOGIN]);
};

export const routes: Routes = [
  {
    path: RoutePath.LOGIN,
    loadComponent: () => import('./auth/login/login.component').then((mod) => mod.LoginComponent),
    canActivate: [LoginGuard],
  },
  {
    path: RoutePath.HOME,
    loadComponent: () => import('./home/home.component').then((mod) => mod.HomeComponent),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: RoutePath.HOME, pathMatch: 'full' },
];
