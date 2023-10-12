import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import { Router } from '@angular/router'
import { user } from 'src/app/Model/user';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''; 
  password: string = '';

  constructor(private router: Router, public userservice: UserService, private authService: AuthService){}

  ngOnInit(): void {

  }

  addUser(){
    this.userservice.selectedUser.role = 'User';
    this.userservice.createUser(this.userservice.selectedUser).subscribe(
      res => console.log("New User Created"),
      err => console.log(err)
    )
  }

  Login() {
    this.userservice.searchUser(this.email, this.password).subscribe(
      (response: any) => {
        if (response) {
          console.log('Usuario registrado:', response);
          if (response.role === 'Admin') {
            this.authService.logueado = true;
            console.log('Usuario con rol de administrador');
            this.router.navigateByUrl('/Admin');
          } 
        } else {
          console.log('Usuario no registrado');
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
