import { Component } from '@angular/core';
import { OportunidadesService } from 'src/app/Services/oportunidades.service';
import {UserService} from 'src/app/Services/user.service';
import { user } from 'src/app/Model/user';
import { Oportunidad } from 'src/app/Model/oportunidad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usercompany',
  templateUrl: './usercompany.component.html',
  styleUrls: ['./usercompany.component.css']
})
export class UsercompanyComponent {

  usuarioActual: user | null = null;

  constructor(public OportunidadesService : OportunidadesService, public userservice: UserService){}

  oportunidadInfo: any;
  mostrarInfo: boolean = false;

  ngOnInit(): void {
    this.usuarioActual = this.userservice.obtenerUsuarioActual();
    if (this.usuarioActual && this.usuarioActual._id) {
      this.getOports(this.usuarioActual._id);
    }
  }
  

  getOports(id: string){
    this.OportunidadesService.getOports(id).subscribe(
      res => {
        this.OportunidadesService.oportunidades = res;
      },
      err => console.error(err)
    )
  }

  addOport(form: NgForm, id:string){
    if(this.usuarioActual && this.usuarioActual._id){

    if(form.value._id){
      this.OportunidadesService.updateUser(form.value).subscribe(
        res => {
          this.getOports(id);
          form.reset();
        },
        err => console.log(err)
      )
    } else {
    this.OportunidadesService.selectedOportunidad.IDEmpleado = this.usuarioActual._id;
    this.userservice.createUser(form.value).subscribe(
      res => {
        this.getOports(id);
        form.reset();
      },
      err => console.log(err)
    )
    } 
  }
  }

  edit(oport: Oportunidad){
    this.OportunidadesService.selectedOportunidad = oport;
  }

  deleteUser(id: string) {
    console.log("deleted");
      if (confirm("Are you sure you want to delete this Oportunity?")) {
        this.userservice.deleteUser(id).subscribe(
          res => {
            if (this.usuarioActual && this.usuarioActual._id) {
              this.getOports(this.usuarioActual._id);
            }
          },
          err => console.log(err)
        )
      }
  }

  toggleInfoVisibility() {
    this.mostrarInfo = !this.mostrarInfo; // Cambiar el valor de la variable para alternar la visibilidad
  }

  Showall(id: string){
    this.OportunidadesService.oneOp(id).subscribe(
      (data) => {
        this.oportunidadInfo = data;
        this.mostrarInfo = true; // Mostrar la información al recibir los datos
      },
      (error) => {
        console.error('Error al obtener la información de la oportunidad:', error);
      }
    );
  }
  AddEvidence(oport: any){
    
  }

}

