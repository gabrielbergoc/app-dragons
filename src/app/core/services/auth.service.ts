import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({ user, password }: { user: string; password: string }): Observable<boolean> {
    // oauth2 here ...

    // dummy login just to exemplify
    return new Observable((subscriber) => {
      sessionStorage.setItem('user', user);
      subscriber.next(true);
      subscriber.complete();
    });
  }

  logout(): Observable<boolean> {
    // same

    return new Observable((subscriber) => {
      sessionStorage.removeItem('user');
      subscriber.next(true);
      subscriber.complete();
    });
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('user');
  }
}
