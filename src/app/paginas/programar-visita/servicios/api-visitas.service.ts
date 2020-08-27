import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiVisitasService {
  private requestOptions
  headers : any

  private apiDir = "http://192.168.1.220:3000";


  constructor(public http: HttpClient) {
    this.requestOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }
   
  listado_clientes(){
    return this.http.get(this.apiDir+'/clientes');
  }

  informacion_cliente(id){
    return this.http.get(this.apiDir+'/clientes/id/'+id);
  }

  mostrar_servicios(){
    return this.http.get(this.apiDir+'/servicios');
  }

  crear_visita(parametros){
    return this.http.post(this.apiDir+'/visitas/crear',parametros,this.requestOptions);
  }



}
