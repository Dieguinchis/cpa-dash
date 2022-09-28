import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../../environments/version'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiciosService {

  private requestOptions
  headers : any

  private apiDir = environment.api.base_url;


  constructor(public http: HttpClient) {
    this.requestOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'version': version
      })
    };
   }

  crear_servicio(parametros){
    console.log(parametros)
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/crear',parametros,this.requestOptions);
  }

  mostrar_servicios(){
    console.log(this.apiDir)

    return this.http.get(this.apiDir+'servicios',this.requestOptions);
  }

  getZpl(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/imprimir',parametros,this.requestOptions);
  }

  alta_producto(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'productos/crear',parametros,this.requestOptions);
  }

  alta_workstation(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/equipos/crear',parametros,this.requestOptions);
  }

  alta_Grupo_workstation(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/gruposEquipos/crear',parametros,this.requestOptions);
  }

  
  eliminar_Grupo_workstation(id_producto){
    console.log('delete2',id_producto)
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/eliminarGrupoEquipos/'+id_producto, null, this.requestOptions);
  }

  
  modificar_Grupo_workstation(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/gruposEquipos/crear',parametros,this.requestOptions);
  }

  ver_servicio(id_servicio){
    console.log(this.apiDir)

    return this.http.get(this.apiDir+'servicios/id/'+id_servicio,this.requestOptions);
  }

  baja_producto(id_producto){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'productos/eliminar/'+id_producto, null, this.requestOptions);
  }

  baja_servicio(id_servicio){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/eliminar/'+id_servicio, null, this.requestOptions);
  }
  update_servicio(parametros){
    // console.log(parametros)
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/update',parametros, this.requestOptions);
  }

  baja_opcion(id){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/opcion/delete/',{id:id}, this.requestOptions);

  }

  ver_opciones_producto(id_servicio){
    console.log(id_servicio);
    console.log(this.apiDir)

    return this.http.get(this.apiDir+'servicios/producto/opciones/'+id_servicio, this.requestOptions);

  }

  producto_update(producto){
    console.log(producto);
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'productos/actualizar',producto, this.requestOptions);
  }

  getProductos(){
    console.log(this.apiDir)

    return this.http.get(this.apiDir+'productos/', this.requestOptions);
  }
  
   
}
