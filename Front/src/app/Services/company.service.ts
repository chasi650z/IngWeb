import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { user } from '../Model/user';
import { Oportunidad } from '../Model/oportunidad';
import { Company } from '../Model/company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  users : user[] = [];

  oportunidades : Oportunidad[] = [];

  compactual: Company = {

    _id: '',
    name: '',
    password: '',
    RUC:'',
    Identify: '',
    Direccion: ''

  };

  URL_API = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getOports(name:string){
    const Oport = `${this.URL_API}/${name}/OportunityALL`
    return this.http.get<Oportunidad[]>(Oport);
  }

  getUsers(name:string){
    const Oport = `${this.URL_API}/${name}/Users`
    return this.http.get<user[]>(Oport);
  }

  getProfits(name:string){
    const Oport = `${this.URL_API}/${name}/Profits`
    return (this.http.get(Oport));
  }

  getProfitsDate(name:string){
    const Oport = `${this.URL_API}/${name}/ProfitsDate`
    return (this.http.get(Oport));
  }

  getNotasOportunidades(name:string){
    const Oport = `${this.URL_API}/${name}/NotesOport`
    return (this.http.get(Oport));
  }

  getPromOport(name:string){
    const Oport = `${this.URL_API}/${name}/PromOport`
    return (this.http.get(Oport));
  }

  searchUser(email: string, password: string) {
    const searchUser = `${this.URL_API}/Company/${email}/${password}`;
    return this.http.get<Company>(searchUser);
  }

  actualizarusuarioactual(user: Company) {
    console.log('Updating compactual:', user);
    this.compactual=user;
  }

  obtenerUsuarioActual() {
    return this.compactual;
  }

  generarReporte(name:string) {
    const RUser = `${this.URL_API}/${name}/PromOport`;
    return (this.http.get(RUser));
  }

  generarReporteDetalle(name:string,id:string) {
    const RUser = `${this.URL_API}/${name}/UserNotesOport/${id}`;
    return (this.http.get(RUser));
  }
  
  generarReporteTotalProfit(name:string) {
    const RUser = `${this.URL_API}/${name}/TotalProfit`;
    return (this.http.get(RUser));
  }

  generarReporteProfit(name:string) {
    const RUser = `${this.URL_API}/${name}/PromOport`;
    return (this.http.get(RUser));
  }

}
