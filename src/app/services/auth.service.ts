import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  private apiURL = 'http://localhost:8000/users';

  setUser(token: string): void {
    localStorage.setItem('token', token);
  }

  getUser(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token')!);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  signup(user: User): any {
    let exist = false;
    this.http.get<User>(this.apiURL).subscribe((users) => {
      //@ts-ignore
      const currentUser = users.find((u) => u.email === user.email);
      if (currentUser) {
        alert('A user with this email address already exist!');
        return;
      } else {
        this.http.post<User>(this.apiURL, user).subscribe();
        this.router.navigate(['login']);
      }
    });
  }

  login(user: User): any {
    return this.http.get<User>(this.apiURL).subscribe((users) => {
      //@ts-ignore
      const currentUser = users.find((u) => u.email === user.email);
      if (!currentUser) {
        alert('There is no user with that email address.');
        return;
      }
      if (currentUser && currentUser.password !== user.password) {
        alert('The password you provided is not correct.');
        return;
      }
      this.setUser(JSON.stringify(currentUser));
      this.router.navigate(['admin']);
    });

    // if (email === 'admin@gmail.com' && password === 'admin123') {
    //   this.setToken('abcdefghijklmnopqrstuvwxyz');
    //   return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    // }
    // return throwError(new Error('Failed to login'));
  }
}
