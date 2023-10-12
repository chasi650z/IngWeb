import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { user } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_API = 'http://localhost:4000';
  URL_API_GetUsers  = 'http://localhost:4000/Users';
  URL_API_Adduser = 'http://localhost:4000/AddUser';

  users : user[] = [];

  selectedUser: user = {
    country: '',
    email: '',
    lastname: '',
    name: '',
    password: '',
    role:'User' ,
  };
  
  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get<user[]>(this.URL_API_GetUsers);
  }

  createUser(user: user){
    return this.http.post(this.URL_API_Adduser, user)
  }

  updateUser(user: user){
    const UpdateUser = `${this.URL_API}/UserProfile/${user._id}`
    return (this.http.put(UpdateUser, user))
  }

  deleteUser(_id: string){
      const deleteUrl = `${this.URL_API}/UserProfile/${_id}`;
      return this.http.delete(deleteUrl);
  }

} 

