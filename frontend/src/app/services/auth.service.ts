import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApiUrl = 'https://energysolutions.onrender.com/auth';
  private userApiUrl = 'https://energysolutions.onrender.com/users';

  private loggedInUser: BehaviorSubject<User | null> = new BehaviorSubject<
    User | null
  >(null);

  constructor(private http: HttpClient) {}

  getLoggedInUser(): Observable<User | null> {
    return this.loggedInUser.asObservable();
  }

  login(
    email: string,
    password: string,
    selectedCompany: string
  ): Observable<any> {
    const body = { email, password, company:selectedCompany };
    return this.http.post(`${this.authApiUrl}/login`, body);
  }

  setLoggedInUser(response: User | null): void {
    this.loggedInUser.next(response);
  }

  logout(): void {
    this.loggedInUser.next(null);
  }
}

interface User{
  userName: string,
  company:string
}