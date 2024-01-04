import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CompanyService } from '../../Services/company.service';
import { NgForm, FormsModule } from '@angular/forms';
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {

  constructor(public userservice: UserService, public companyservice: CompanyService) {}

  name = this.companyservice.compactual.name;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    console.log(this.name);
    this.companyservice.getUsers(this.name).subscribe(
      res => {
        console.log(res);
        this.companyservice.users = res;
      },
      err => console.error(err)
    );
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
}

