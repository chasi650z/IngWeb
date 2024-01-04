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
  mostrarQuery: boolean = false;

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
      this.OportunidadesService.selectedOportunidad.TotalProfit = 0;      
    this.OportunidadesService.createOportunidad(form.value,this.usuarioActual._id).subscribe(
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

  AddEvidence(form: NgForm) {
    if (this.oportunidadInfo && this.oportunidadInfo._id) {
      const nuevaEvidencia = {
        nombre: form.value.nombre,
        descripcion: form.value.descripcion,
        note: 0, // No se ingresa nota
        feedback: "Sin feedback", // No se ingresa feedback
        fechaCreacion: "", // No se ingresa fechaCreacion
      };

      this.OportunidadesService.addEvidence(this.oportunidadInfo._id, nuevaEvidencia).subscribe(
        (res: any) => {
          // La evidencia se agregó con éxito
          console.log('Evidencia añadida con éxito:', res);
          // Puedes realizar otras acciones, como actualizar la lista de evidencias
          // o mostrar un mensaje de éxito al usuario.
        },
        (err: any) => {
          // Manejar errores, mostrar mensajes de error, etc.
          console.error('Error al añadir evidencia:', err);
        }
      );
      this.mostrarInfo = !this.mostrarInfo;
      this.mostrarQuery = !this.mostrarQuery;
    }
  }

  SeeEvidence(){
    this.mostrarQuery = true;
  }
  
}

