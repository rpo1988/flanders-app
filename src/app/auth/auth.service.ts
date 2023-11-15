import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceInterval } from '../shared/utils';

export interface LoginRequest {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly SESSION_LOCAL_STORAGE_KEY = 'session';
  private readonly SESSION_DURATION = 300000; // 5 mins

  isAuthenticated(): boolean {
    try {
      const session = localStorage.getItem(this.SESSION_LOCAL_STORAGE_KEY);
      return !!session && new Date(+session).getTime() > Date.now();
    } catch (error) {
      return false;
    }
  }

  login(body: LoginRequest): Observable<boolean> {
    return new Observable((subscriber) => {
      debounceInterval(
        () => {
          const isValid = this.validateLogin(body.username, body.password);
          if (isValid) {
            localStorage.setItem(this.SESSION_LOCAL_STORAGE_KEY, `${Date.now() + this.SESSION_DURATION}`);
          }
          subscriber.next(isValid);
          subscriber.complete();
        },
        100,
        600,
      );
    });
  }

  logout(): Observable<void> {
    return new Observable((subscriber) => {
      debounceInterval(
        () => {
          localStorage.removeItem(this.SESSION_LOCAL_STORAGE_KEY);
          subscriber.next();
          subscriber.complete();
        },
        100,
        600,
      );
    });
  }

  private validateLogin(username: string, password: string): boolean {
    const USERNAME = 'MAINT';
    const PASSWORD = 'safetyiskey';
    return username === USERNAME && password === PASSWORD;
  }
}
