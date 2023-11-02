import { Component,OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  Cliente:any={
    Nombre:'',
    Identificacion:'',
    Telefono:'',
    Servicio:'',
    Fecha_hora:'',

  }

  //parte de api de servidor 
  Servidor:any={
    nombre_servidor:'',
    Identificacion:'',
    Telefono:'',
    Licencia_conductor:'',


  }


  ngOnInit(): void {
    
  }
  public constructor( private appcomponent:AppComponent){


  }

  agregar_cliente(){
    this.appcomponent.Agregar_Cliente(JSON.stringify(this.Cliente)).subscribe(
      response=>{
        console.log("Agregado Correctanmente",response);
      }
    );

  }
 
  //funcion para agregar valores  de
  agregar_Servidor(){
    this.appcomponent.Agregar_Servidor(JSON.stringify(this.Servidor)).subscribe(
      response=>{
        console.log("Agregado Correctanmente",response);
      }
    );

  }

}
