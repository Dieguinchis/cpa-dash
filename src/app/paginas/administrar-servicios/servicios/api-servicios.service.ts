import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiciosService {

  private requestOptions
  headers : any

  private apiDir = "http://appbackendcpa.herokuapp.com";


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

  alta_producto(parametros){
    return this.http.post(this.apiDir+'/productos/crear',parametros,this.requestOptions);
  }

  alta_workstation(parametros){
    return this.http.post(this.apiDir+'/servicios/equipos/crear',parametros,this.requestOptions);
  }

  ver_servicio(id_servicio){
    return this.http.get(this.apiDir+'/servicios/id/'+id_servicio);
  }

  baja_producto(id_producto){
    return this.http.post(this.apiDir+'/productos/eliminar/'+id_producto, this.requestOptions);
  }

  baja_servicio(id_servicio){
    return this.http.post(this.apiDir+'/servicios/eliminar/'+id_servicio, this.requestOptions);
  }

  
   
}
