import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
    companyName: '',
    points: 0,
  };
  private usuarioActualSubject: BehaviorSubject<user | null> = new BehaviorSubject<user | null>(null);

  // Observable para que los componentes se suscriban a cambios en el usuario actual
  usuarioActual$: Observable<user | null> = this.usuarioActualSubject.asObservable();

  // ... otros métodos

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get<user[]>(this.URL_API_GetUsers);
  }

  createUser(user: user){
    console.log("entrada 3");
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

  searchUser(email: string, password: string) {
    const searchUser = `${this.URL_API}/SearchUserProfileC/${email}/${password}`;
    return this.http.get(searchUser);
  }

  searchUserName(email: string, password: string) {
    const searchUser = `${this.URL_API}/SearchUserProfileN/${email}/${password}`;
    return this.http.get(searchUser);
  }

  obtenerUsuarioActual(): user | null {
    return this.usuarioActualSubject.value;
  }

  actualizarusuarioactual(user: user) {
    this.usuarioActualSubject.next(user);
  }

  Search(name: string, lastname: string) {
    const searchUser = `${this.URL_API}/SearchUserProfileN`;
    const params = new HttpParams().set('name', name).set('lastname', lastname);
    return this.http.get(searchUser, { params });
  }

  Search2(name: string, lastname: string, company:string) {
    const searchUser = `${this.URL_API}/SearchUserProfileAdmin`;
    const params = new HttpParams().set('name', name).set('lastname', lastname).set('company',company);
    return this.http.get(searchUser, { params });
  }

} 

