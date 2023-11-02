
import { Component, OnInit,ElementRef,NgZone,ViewChild} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import Swal from 'sweetalert2';

//declaro la variable google para reconozca las propiedades de google
declare var google:any;
 
@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
 
export class UbicacionesComponent implements OnInit {
  @ViewChild('origenInput') origenInput:ElementRef;
  @ViewChild('destinoInput') destinoInput:ElementRef;
   private direccionServicio:google.maps.DirectionsService
   private direccionDisplay:google.maps.DirectionsRenderer
  coordenadas:{lat:number,lng:number}
  distancia:number
 
  constructor(private firestore:AngularFirestore,private ngZone:NgZone,private elementoRef:ElementRef){
    this.coordenadas={lat:0,lng:0}
    this.distancia=0
  
    this.direccionServicio=new google.maps.DirectionsService();
    this.direccionDisplay=new google.maps.DirectionsRenderer();
    this.origenInput= this.elementoRef.nativeElement.value
    this.destinoInput=this.elementoRef.nativeElement.value
  }
  ngOnInit(): void {
    this.intregar_mapa();
   
    
  }
   
  intregar_mapa():void{
   
   const map=new google.maps.Map(document.getElementById('maps'),{
    center:{lat:0,lng:0},
    zoom:10
   })
   
   const marker=new google.maps.Marker({map:map})
  map.addListener('click',(event:any)=>{
    marker.setPosition(event.latLng);
   this.coordenadas={
      lat:event.latLng.lat(),
      lng:event.latLng.lng()
    }
   })
    this.direccionDisplay.setMap(map)
  }
  
 guardarCoordenadas()
 {
  if(this.coordenadas)
  {
    this.firestore.collection('Rutas').add(this.coordenadas).then((referencia)=>{
    //  console.log('Enviado Correctamente',referencia);
      Swal.fire({
        icon:'success',
        title:`Guardado Correctamente en la base de datos `,
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch((error)=>{
      console.error('Error al enviar',error);
 
    })
    
  }
  
  
 }
 calcularDistancia(){
    const origen=this.origenInput.nativeElement.value;
    const destino=this.destinoInput.nativeElement.value; 
    const repuesta:google.maps.DirectionsRequest={
       origin:origen,
       destination:destino,
       travelMode:google.maps.TravelMode.DRIVING
    };
    this.direccionServicio.route(repuesta, (response,status)=>{
       if(status == 'OK')
       {
        this.direccionDisplay.setDirections(response)
        const route=response?.routes[0]
        const distancias=route?.legs[0].distance?.text;
        Swal.fire({
          icon:'success',
          title:`La distancia es ${distancias} `,
          showConfirmButton: false,
          timer: 1500
        })
       
      }
      else{
        Swal.fire({
          icon:'error',
          title:'Error en la distancia',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    

  }
  
}
