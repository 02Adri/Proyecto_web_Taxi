import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarscriptService {

  constructor() { }

  cargar( archivos:string[]){
    for( let archivo of archivos){
      //      console.log("cargando "+archivo);
              var script = document.createElement('script');
                     script.src= "../assets/js/"+archivo + ".js";
      let body=document.getElementsByTagName("body")[0];
      body.appendChild(script);


    }
    
  }



}
