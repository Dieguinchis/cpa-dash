import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiClientesService {
  private requestOptions
  headers : any

  private apiDir = "http://157.230.90.222:3000";


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
  listado_grupoWorkstations(id){
    return this.http.get(this.apiDir+'/servicios/gruposEquipos/sucursal/'+id);
  }

  borrar_equipo(id_equipo){
    return this.http.post(this.apiDir+'/servicios/eliminarEquipos/'+id_equipo,this.requestOptions);
  }

  eliminar_Grupo_workstation(id_producto){
    console.log('delete2',id_producto)
    return this.http.post(this.apiDir+'/servicios/eliminarGrupoEquipos/'+id_producto,this.requestOptions);
  }

  subir_planos(parametros){
    return this.http.post(this.apiDir+'/planos/crear', parametros, this.requestOptions)
  }

  ver_sucursal(id_sucursal){
    return this.http.get(this.apiDir+'/sucursales/id/'+id_sucursal)
  }

  crear_pdf(id_visita){
    return this.http.post(this.apiDir+'/pdf/create-pdf',id_visita,this.requestOptions);
  }

  ver_pdf(id_visita){
    return this.http.get(this.apiDir+'/pdf/fetch-pdf/'+id_visita);
  }

  modificar_cliente(parametros){
    return this.http.post(this.apiDir+'/clientes/actualizar',parametros,this.requestOptions)
  }

  subir_logo_cliente(parametros){
    return this.http.post(this.apiDir+'/clientes/actualizarLogo', parametros, this.requestOptions);
  }

  eliminar_cliente(id_cliente){
    return this.http.post(this.apiDir+'/clientes/eliminar/'+id_cliente,this.requestOptions)
  }

  eliminar_sucursal(id_sucursal){
    return this.http.post(this.apiDir+'/sucursales/eliminar/'+id_sucursal,this.requestOptions)
  }

  modificar_sucursal(parametros){
    return this.http.post(this.apiDir+'/sucursales/actualizar',parametros,this.requestOptions)
  }


}
