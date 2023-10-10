import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { user } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'http://localhost:4000/Users';

  users : user[] = [];

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get<user[]>(this.URL_API);
  }

} 

