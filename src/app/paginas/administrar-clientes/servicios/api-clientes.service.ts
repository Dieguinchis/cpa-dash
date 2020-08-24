import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiClientesService {
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

  listado_workstations(id){
    return this.http.get(this.apiDir+'/servicios/equipos/sucursal/'+id);
  }

  borrar_equipo(id_equipo){
    return this.http.post(this.apiDir+'/servicios/eliminarEquipos/'+id_equipo,this.requestOptions);
  }

  subir_planos(parametros){
    return this.http.post(this.apiDir+'/planos/crear', parametros, this.requestOptions)
  }

  crear_pdf(id_visita){
    return this.http.post(this.apiDir+'/pdf/create-pdf',id_visita,this.requestOptions);
  }

  ver_pdf(id_visita){
    return this.http.get(this.apiDir+'/pdf/fetch-pdf/'+id_visita);
  }


}
