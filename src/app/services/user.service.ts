import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL="http://localhost:8080/api/v1/auth";
  constructor(private httpClient : HttpClient) { }

  getUserLogin(): Observable<User[]>{
return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
}
