import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Oportunidad } from '../Model/oportunidad';

@Injectable({
  providedIn: 'root'
})
export class OportunidadesService {
  URL_API = 'http://localhost:4000';

  oportunidades : Oportunidad[] = [];

  selectedOportunidad: Oportunidad = {
    IDEmpleado: '',
    companyName: '',
    country: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    clientName: '',
    clientLastName: '',
    title: '',
    phone: '',
    expectedCoseDate: new Date(),
    CreationDate: new Date(),
    currency: '',
    projectDescripcion: '',
    numberLicense: 0,
    products: '',
    price: 0,
    Descuento: 0,
    TotalProfit: 0,
    status: 'Registrado',
    Evidence: [
      {
        nombre: '',
        descripcion: '',
        feedback: '',
        fechaCreacion: new Date(),
        note: 0,
      }
    ],
  };

  constructor(private http: HttpClient) { }

  createOportunidad(oport: Oportunidad, _id:string){
    oport.IDEmpleado=_id;
    const AddOport = `${this.URL_API}/User/Oportunities`
    return this.http.post(AddOport, oport)
  }

  getOports(id:string){
    const Oport = `${this.URL_API}/User/${id}/OportunityUser`
    return this.http.get<Oportunidad[]>(Oport);
  }

  getOportsAdmin(){
    const Oport = `${this.URL_API}/Admin/OportunityALL`
    return this.http.get<Oportunidad[]>(Oport);
  }

  deleteUser(_id: string,){
    const deleteUrl = `${this.URL_API}/User/OportunityDelete/${_id}`;
    return this.http.delete(deleteUrl);
  }

  deleteAdminOp(_id: string,){
    const deleteUrl = `${this.URL_API}/User/OportunityDelete/${_id}`;
    return this.http.delete(deleteUrl);
  }

  updateUser(user: Oportunidad){
    const UpdateOport = `${this.URL_API}/User/Oportunity/`
    return (this.http.put(UpdateOport, user))
  }

  oneOp(_id:string){
    const UpdateOport = `${this.URL_API}/Admin/Oportunity/${_id}`
    return (this.http.get(UpdateOport))
  }

  updateEvidenceCalification(evidenceId: string, calification: any) {
    const url = `${this.URL_API}/Admin/Oportunity/Evidence/${evidenceId}/actualizar-calificacion`;
    return this.http.put(url, calification);
  }

  addEvidence(oportunidadId: string, evidencia: any) {
    const url = `${this.URL_API}/Admin/Oportunity/${oportunidadId}/add-evidence`;
    return this.http.post(url, evidencia);
  }

  Reporte(){
    const url = `${this.URL_API}/Admin/Reporte`;
    return this.http.get(url);
  }

  ReporteAverage(){
    const url = `${this.URL_API}/Admin/ReporteAverage`;
    return this.http.get(url);
  }


}
