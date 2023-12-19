import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://loalhost:4000/users'

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}`)
  }

  getUser(user:User): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${user._id}`)
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/`,user)
  }

  editUser(user:User):Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${user._id}`,user)
  }

  deleteUser(userId: string):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${userId}`)
  }
}
