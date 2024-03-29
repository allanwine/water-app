import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authorizedUsers = [
    {
      email: 'test@test.com',
      height: 175,
      weight: 85,
      password: '123456',
    },
  ];

  loggedUser:
    | { email: string; height: number; weight: number; password: string }
    | undefined;
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  login(
    email: string,
    password: string
  ): Observable<{ error: string }> | Observable<{}> {
    if (this.checkEmailAndPassword(email, password)) {
      this.isAuthenticated = true;
      this.loggedUser = this.authorizedUsers.find(
        (user) => user.email === email
      );
      this.navigateToDashboard();
      return of();
    } else {
      return of({
        error: 'Usuário ou senha inválidos',
      });
    }
  }

  registerUser(
    email: string,
    height: number,
    weight: number,
    password: string
  ): Observable<{ error: string }> | Observable<{}> {
    this.authorizedUsers.push({
      email,
      height,
      weight,
      password,
    });
    this.router.navigate(['/login']);
    return of();
  }

  checkEmailAndPassword(email: string, password: string): boolean {
    return this.authorizedUsers.some(
      (user) => user.email === email && user.password === password
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  getUserWeight(): number {
    return this.loggedUser!.weight;
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
