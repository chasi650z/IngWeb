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

          const usuarioEncontrado: user = {
            _id: response._id,
            name: response.name,
            role: response.role,
            lastname: response.lastname,
            country: response.country,
            email: response.email,
            password: response.password,
            companyName: response.companyName,
            points: response.points,
          };
          this.userservice.actualizarusuarioactual(usuarioEncontrado);
          console.log(this.userservice.obtenerUsuarioActual());
          if (response.role === 'Admin') {
            this.authService.logueado = true;
            this.router.navigateByUrl('/Admin');
          } else {
            this.router.navigateByUrl('/User');
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
