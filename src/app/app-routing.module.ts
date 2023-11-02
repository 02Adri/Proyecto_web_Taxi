import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './micomponentes/servicios/servicios.component';

import { RegistrarseComponent } from './micomponentes/registrarse/registrarse.component';
import { ContactosComponent } from './micomponentes/contactos/contactos.component';
import { HomeComponent } from './micomponentes/home/home.component';
import {UbicacionesComponent} from './micomponentes/ubicaciones/ubicaciones.component';

const routes: Routes = [
  {
    path:'servicios', component:ServiciosComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'ubicaciones', component:UbicacionesComponent
  },
  {
    path:"registrarse", component:RegistrarseComponent
  },
  {
    path:"contactos", component:ContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
