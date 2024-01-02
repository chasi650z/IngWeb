import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ContactoComponent } from './components/home/contacto/contacto.component';
import { PortafolioComponent} from './components/home/portafolio/portafolio.component';
import { UsercompanyComponent } from './components/usercompany/usercompany.component';
import { OportunidadesComponent } from './components/user/oportunidades/oportunidades.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo:'/Home', pathMatch:'full'
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Admin', component: UserComponent, canActivate:[AuthGuard]
  },
  {
    path: 'Home/Portafolio', component: PortafolioComponent
  },
  {
    path: 'Home/Contacto', component:ContactoComponent
  },
  {
    path: 'User', component:UsercompanyComponent
  },
  {
    path: 'Admin/Oportunidades', component:OportunidadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
