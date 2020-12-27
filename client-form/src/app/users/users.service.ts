import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
/**
 * Created by erivelto on 26/12/20
 */

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_USERS = environment.API + '/user';

  constructor(private httpClient: HttpClient) { }

  findAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_USERS);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_USERS, user);
  }

  findUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.API_USERS + '/' + id);
  }
}
