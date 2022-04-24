import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/users');
  }

  addUser(user: any) {
    return this.http.post('http://localhost:5001/user/add', {user});
  }

}
