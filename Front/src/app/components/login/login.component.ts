import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import { Router } from '@angular/router'
import { user } from 'src/app/Model/user';
import { AuthService } from '../../Services/auth.service';
import { CompanyService } from '../../Services/company.service';
import { Company } from 'src/app/Model/company';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''; 
  password: string = '';


  constructor(private router: Router, public userservice: UserService, private authService: AuthService,public companyservice: CompanyService){}

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
          if (response.role === 'Admin') {
            this.authService.logueado = true;
            this.router.navigateByUrl('/Admin');
          } else {
            this.router.navigateByUrl('/User');
          }
        }
      }
    );

    this.companyservice.searchUser(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response)
        if (response) {
          const compañia: Company = {
            _id: response._id,
            name: response.name,
            password: response.password,
            RUC: response.RUC,
            Identify: response.Identify,
            Direccion: response.Direccion
          };
          this.companyservice.actualizarusuarioactual(compañia);
          this.router.navigateByUrl('/Company');
      } 
    }
    )
  }
}
