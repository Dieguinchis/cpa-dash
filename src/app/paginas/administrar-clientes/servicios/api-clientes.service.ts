import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiClientesService {
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
   
  listado_clientes(){
    return this.http.get(this.apiDir+'/clientes');
  }

  informacion_cliente(id){
    return this.http.get(this.apiDir+'/clientes/id/'+id);
  }

  alta_sucursal(datos){
    return this.http.post(this.apiDir+'/sucursales/crear',datos,this.requestOptions);
  }

  informacion_sucursal(id){
    return this.http.get(this.apiDir+'/sucursales/id/'+id);
  }

  informacion_visita(id){
    return this.http.get(this.apiDir+'/visitas/id/'+id);
  }

}
