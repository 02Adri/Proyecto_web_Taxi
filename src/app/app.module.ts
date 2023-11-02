import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//inicio servicio
import { CargarscriptService } from './cargarscript.service'; 
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { GoogleMapsModule } from '@angular/google-maps';
// importamos el service que creamos en nuestro proyecto


//fin servicio

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './micomponentes/header/header.component';
import { ServiciosComponent } from './micomponentes/servicios/servicios.component';
import { RegistrarseComponent } from './micomponentes/registrarse/registrarse.component';
import { ContactosComponent } from './micomponentes/contactos/contactos.component';
import { HomeComponent } from './micomponentes/home/home.component';
import { FooterComponent } from './micomponentes/footer/footer.component';
import { SeccionComponent } from './micomponentes/seccion/seccion.component';
import { FormsModule } from '@angular/forms';
import { UbicacionesComponent } from './micomponentes/ubicaciones/ubicaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiciosComponent,
    RegistrarseComponent,
    ContactosComponent,
    HomeComponent,
    FooterComponent,
    SeccionComponent,
    UbicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule,
   GoogleMapsModule,
   

  ],
  providers: [
    CargarscriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
