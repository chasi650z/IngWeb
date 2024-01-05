import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CompanyService } from '../../Services/company.service';
import { NgForm, FormsModule } from '@angular/forms';
import { user } from 'src/app/Model/user';
import { Oportunidad } from 'src/app/Model/oportunidad';
import { OportunidadesService } from 'src/app/Services/oportunidades.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {

  constructor(public userservice: UserService, public companyservice: CompanyService,public OportunidadesService : OportunidadesService) {}

  name = this.companyservice.compactual.name;
  reporteGeneral : any[] = [];
  totalProfit: number = 0;
  Seereport:boolean=false;

  ngOnInit(): void {
    this.getUsers();
    this.getOports();
  }

  getUsers() {
    this.companyservice.getUsers(this.name).subscribe(
      res => {
        this.companyservice.users = res;
      },
      err => console.error(err)
    );
  }

  getOports() {
    this.companyservice.getOports(this.name).subscribe(
      res => {
        // Asigna las oportunidades directamente (si el arreglo está anidado)
        this.companyservice.oportunidades = res.flat(); // Utiliza flat() para aplanar el arreglo anidado
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

  deleteOport(id: string) {
    console.log("deleted");
      if (confirm("Are you sure you want to delete this user?")) {
        this.OportunidadesService.deleteUser(id).subscribe(
          res => {
            this.getOports();
          },
          err => console.log(err)
        )
      }
  }

  editOport(user: Oportunidad){
    this.OportunidadesService.selectedOportunidad = user;
  }

  editUser(user: user){
    this.userservice.selectedUser = user;
  }

  generarReporte() {
    this.Seereport = true;

    this.companyservice.generarReporte(this.name).subscribe(
      (data: any) => {
        // Guardar el reporteGeneral
        this.reporteGeneral = Object.values(data);
      },
      (error) => {
        console.error('Error al generar el reporte:', error);
      }
    );

    this.companyservice.generarReporteTotalProfit(this.name).subscribe(
      (data: any) => {
        // Guardar el TotalProfit
        this.totalProfit = data.totalProfit;
      },
      (error) => {
        console.error('Error al obtener el TotalProfit:', error);
      }
    );
  }
}

