import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiciosService {

  private requestOptions
  headers : any

  private apiDir = "http://186.60.130.65:3000";


  constructor(public http: HttpClient) {
    this.requestOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }

  crear_servicio(parametros){
    return this.http.post(this.apiDir+'/servicios/crear',parametros,this.requestOptions);
  }

  mostrar_servicios(){
    return this.http.get(this.apiDir+'/servicios');
  }

  alta_workstation(parametros){
    return this.http.post(this.apiDir+'/servicios/equipos/crear',parametros,this.requestOptions);
  }
   
}
