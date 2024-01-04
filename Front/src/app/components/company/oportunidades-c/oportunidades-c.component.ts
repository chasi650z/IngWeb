import { Component } from '@angular/core';
import { Oportunidad } from 'src/app/Model/oportunidad';
import { OportunidadesService } from 'src/app/Services/oportunidades.service';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-oportunidades-c',
  templateUrl: './oportunidades-c.component.html',
  styleUrls: ['./oportunidades-c.component.css']
})
export class OportunidadesCComponent {

  ngOnInit(): void {
    this.getOports();
  }

  constructor(public OportunidadesService : OportunidadesService, public companyservice: CompanyService){}

  oportunidadInfo: any;
  mostrarInfo: boolean = false;
  mostrarEvidence: boolean = false;
  evidence:any;

  name = this.companyservice.compactual.name;

  getOports(){
    console.log(this.companyservice.compactual);
    this.companyservice.getOports(this.name).subscribe(
      res => {
        this.OportunidadesService.oportunidades = res;
      },
      err => console.error(err)
    )
  }

  SeeEvidence(evidence: any){
    this.mostrarEvidence = !this.mostrarEvidence;
    this.evidence = evidence;
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
}

