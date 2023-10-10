import { Component,OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userservice: UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userservice.getUsers().subscribe(
      res => {
        this.userservice.users = res;
      },
      err => console.error(err)
    )
  }

  addUser(){
    
  }

}
