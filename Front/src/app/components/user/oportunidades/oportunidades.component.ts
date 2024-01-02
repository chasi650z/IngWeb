import { Component } from '@angular/core';
import { OportunidadesService } from 'src/app/Services/oportunidades.service';
import {UserService} from 'src/app/Services/user.service';
import { user } from 'src/app/Model/user';
import { Oportunidad } from 'src/app/Model/oportunidad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.css']
})
export class OportunidadesComponent {

  constructor(public OportunidadesService : OportunidadesService, public userservice: UserService){}

  ngOnInit(): void {
    this.getOports();
  }

  oportunidadInfo: any;
  mostrarInfo: boolean = false;
  mostrarEvidence: boolean = false;
  evidence:any;
  note:Number = 0;
  feedback:string = '';

  updateOports(form: NgForm){
    this.OportunidadesService.updateUser(form.value).subscribe(
      res => {
        this.getOports();
        form.reset();
      },
      err => console.log(err)
    )
  }

  getOports(){
    this.OportunidadesService.getOportsAdmin().subscribe(
      res => {
        this.OportunidadesService.oportunidades = res;
      },
      err => console.error(err)
    )
  }

  edit(oport: Oportunidad){
    this.OportunidadesService.selectedOportunidad = oport;
  }

  deleteUser(id: string) {
    console.log("deleted");
      if (confirm("Are you sure you want to delete this Oportunity?")) {
        this.OportunidadesService.deleteAdminOp(id).subscribe(
          res => {
              this.OportunidadesService.getOportsAdmin();
          },
          err => console.log(err)
        )
      }
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
  
    toggleInfoVisibility() {
      this.mostrarInfo = !this.mostrarInfo; // Cambiar el valor de la variable para alternar la visibilidad
    }

  SeeEvidence(evidence: any){
    this.mostrarEvidence = !this.mostrarEvidence;
    this.evidence = evidence;
  }

  AddEvidenceCalificacion(note: Number, feedback:string) {
    const calification = {
      note: note, // Obtener la nota de algún lugar o proporcionarla directamente
      feedback: feedback, // Obtener el feedback de algún lugar o proporcionarlo directamente
    };
  
    this.OportunidadesService.updateEvidenceCalification(this.evidence._id, calification).subscribe(
      (res) => {
        // Actualizar la información de la oportunidad después de actualizar la calificación
        this.getOports();
        this.mostrarInfo = !this.mostrarInfo;
        // Ocultar el formulario de calificación después de actualizar
        this.mostrarEvidence = false;
      },
      (error) => {
        console.error('Error al actualizar calificación de evidencia:', error);
      }
    );
  }

  Cancel(){
    this.getOports();
    this.mostrarInfo = !this.mostrarInfo;
  }
  
  }

