import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Oportunidad } from '../Model/oportunidad';

@Injectable({
  providedIn: 'root'
})
export class OportunidadesService {
  URL_API = 'http://localhost:4000';
  URL_API_GetUsers  = 'http://localhost:4000/User';
  URL_API_Adduser = 'http://localhost:4000/AddUser';

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
    const AddOport = `${this.URL_API}/User/Oportunities`
    return this.http.post(AddOport, oport)
  }

  getOports(id:string){
    const Oport = `${this.URL_API}/User/${id}/OportunityUser`
    return this.http.get<Oportunidad[]>(Oport);
  }

  deleteUser(id:string, _id: string,){
    const deleteUrl = `${this.URL_API}/User/OportunityDelete/${_id}`;
    return this.http.delete(deleteUrl);
  }

  updateUser(user: Oportunidad){
    const UpdateOport = `${this.URL_API}/User/Oportunity/`
    return (this.http.put(UpdateOport, user))
  }

}
