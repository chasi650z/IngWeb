import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/home/contacto/contacto.component';
import { PortafolioComponent} from './components/home/portafolio/portafolio.component';
import { UsercompanyComponent } from './components/usercompany/usercompany.component';
import { OportunidadesComponent } from './components/user/oportunidades/oportunidades.component';
import { ReporteComponent } from './components/user/reporte/reporte.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CompanyComponent } from './components/company/company.component';
import { OportunidadesCComponent } from './components/company/oportunidades-c/oportunidades-c.component';
import { ReporteCComponent } from './components/company/reporte-c/reporte-c.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    ContactoComponent,
    PortafolioComponent,
    UsercompanyComponent,
    OportunidadesComponent,
    ReporteComponent,
    CompanyComponent,
    OportunidadesCComponent,
    ReporteCComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
