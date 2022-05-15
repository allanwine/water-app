import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorizedUsers = [
    {
      email: 'test@test.com',
      password: '123456',
    }
  ];

  isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  login(email: string, password: string): Observable<{ error: string }> | Observable<{}> {
    if (this.checkEmailAndPassword(email, password)) {
      this.isAuthenticated = true;
      this.navigateToDashboard();
      return of();
    } else {
      return of({
        error: 'Usuário ou senha inválidos'
      });
    };
  };

  registerUser(email: string, password: string): Observable<{ error: string }> | Observable<{}> {
    this.authorizedUsers.push({
      email,
      password
    });
    this.router.navigate(['/login']);
    return of();
  }

  checkEmailAndPassword(email: string, password: string): boolean {
    return this.authorizedUsers.some(user => user.email === email && user.password === password);
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  };
}
