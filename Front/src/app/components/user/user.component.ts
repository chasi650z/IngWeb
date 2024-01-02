import { Component,OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {NgForm, FormsModule} from '@angular/forms'
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarioActual: user | null = null;

  constructor(public userservice: UserService){}

  name = '';
  lastname = '';
  company='';

  ngOnInit(): void {
    this.getUsers();
    this.usuarioActual = this.userservice.obtenerUsuarioActual();
  }

  getUsers(){
    this.userservice.getUsers().subscribe(
      res => {
        this.userservice.users = res;
      },
      err => console.error(err)
    )
  }

  addUser(form: NgForm){
    if(form.value._id){
      this.userservice.updateUser(form.value).subscribe(
        res => {
          this.getUsers();
          form.reset();
        },
        err => console.log(err)
      )
    } else {
    this.userservice.selectedUser.role = 'User';
    this.userservice.createUser(form.value).subscribe(
      res => {
        this.getUsers();
        form.reset();
      },
      err => console.log(err)
    )
    }
  }

  deleteUser(id: string) {
    console.log("deleted");
      if (confirm("Are you sure you want to delete this user?")) {
        this.userservice.deleteUser(id).subscribe(
          res => {
            this.getUsers();
          },
          err => console.log(err)
        )
      }
  }

  editUser(user: user){
    this.userservice.selectedUser = user;
  }

  Search(name: string, lastname: string, company: string) {
    this.userservice.Search2(name, lastname, company).subscribe(
      (res) => {
        // Convierte el resultado al tipo esperado (user[])
        const usersResult = res as user[];
        this.userservice.users = usersResult; // Actualizar la lista de usuarios con los resultados de la búsqueda
      },
      (error) => {
        console.error('Error en la solicitud de búsqueda:', error);
      }
    );
  }
  
  Cancel(){
    this.getUsers();
  }


}
