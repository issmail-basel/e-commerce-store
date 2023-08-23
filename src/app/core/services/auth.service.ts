import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../models/User';
import { usersResopnse } from '../constants/user.mock';

const userState: User = {
  username: '',
  role: 'user',
  token: '',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userStore = new BehaviorSubject<User>(userState);
  private userState$ = this.userStore.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    const user = usersResopnse.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('bearerToken', user.token);
      return of(user);
    }
    return throwError(() => new Error('Invalid username or password'));
  }

  logout(): void {
    localStorage.removeItem('bearerToken');
    this.setUserSubject(userState);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('bearerToken');
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('bearerToken');
  }

  getMeValue(): Observable<User | null> {
    const user = usersResopnse.find(u => u.token === this.getToken());
    if (user) {
      this.setUserSubject(user);
      return of(user);
    }
    localStorage.removeItem('bearerToken');
    return of(null);
  }

  setUserSubject(value: User) {
    this.userStore.next(value);
  }

  getUserSubject() {
    return this.userState$;
  }
}
