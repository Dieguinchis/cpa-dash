import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiVisitasService {
  private requestOptions
  headers : any

  private apiDir = "http://192.168.0.71:3000";

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

  listado_equipos(id){
    return this.http.get(this.apiDir+'/servicios/equipos/offline/'+id);
  }

  listado_equipos_id(id){
    return this.http.get(this.apiDir+'/servicios/equipos/sucursal/'+id);
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

  modificar_visita(parametros){
    return this.http.post(this.apiDir+'/visitas/update',parametros,this.requestOptions);
  }

  listado_grupoWorkstations(id){
    return this.http.get(this.apiDir+'/servicios/gruposEquipos/sucursal/'+id);
  }



}
