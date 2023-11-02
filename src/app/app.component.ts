import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Proyecto_web_Taxi';
  private Api_Cliente='http://localhost/Api_Taxi/Cliente';
  private Api_Servidor='http://localhost/Api_Taxi/Servidor'
  public constructor (private http:HttpClient){

  }

  Agregar_Cliente( cliente:string):Observable<any>{
    return this.http.post<any>(this.Api_Cliente,cliente).pipe(
         catchError(this.handlerror)
    );
  }
  handlerror(error:HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      console.log('Error al lado del servidor',error.error.message);
    }
    return throwError('Datos ingresados incorrectamente');
  }

  Agregar_Servidor( Servidor:string):Observable<any>{
    return this.http.post<any>(this.Api_Servidor,Servidor).pipe(
         catchError(this.handlerror)
    );
  }
  


}
