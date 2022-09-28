import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../../environments/version'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiClientesService {
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
   
  listado_clientes(){
    console.log(this.apiDir)
    return this.http.get(this.apiDir+'clientes',this.requestOptions);
  }

  informacion_cliente(id){
    console.log(this.apiDir)
    return this.http.get(this.apiDir+'clientes/id/'+id,this.requestOptions);
  }

  verificarVisit(id){
    console.log(this.apiDir+'visitas/verificarVisita',{id:id},this.requestOptions)
    return new Promise((resolve, reject) => {
      this.http.post(this.apiDir+'visitas/verificarVisita',{id:id},this.requestOptions)       
      .subscribe(response => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  alta_sucursal(datos){
    console.log(this.apiDir)
    return this.http.post(this.apiDir+'sucursales/crear',datos,this.requestOptions);
  }

  informacion_sucursal(id){
    console.log(this.apiDir)
    return this.http.get(this.apiDir+'sucursales/id/'+id,this.requestOptions);
  }

  async informacion_visita(id){
    console.log(this.apiDir)
    var data = await this.http.get(this.apiDir+'visitas/id/'+id,this.requestOptions);
    console.log(this.apiDir+'visitas/id/'+id,this.requestOptions)
    return data.toPromise()
  }

  listado_workstations(id){
    console.log(this.apiDir)
    return this.http.get(this.apiDir+'servicios/equipos/sucursal/'+id,this.requestOptions);
  }
  listado_grupoWorkstations(id){
    console.log(this.apiDir)
    return this.http.get(this.apiDir+'servicios/gruposEquipos/sucursal/'+id,this.requestOptions);
  }

  borrar_equipo(id_equipo){
    console.log(this.apiDir)
    return this.http.post(this.apiDir+'servicios/eliminarEquipos/'+id_equipo,null,this.requestOptions);
  }

  listado_productosServicio(id_servicio){
    console.log(this.apiDir)
    return this.http.get(this.apiDir+'productos/idServicio/'+id_servicio,this.requestOptions);
  }

  cambiar_estado_visita(id_visita, estado){
    console.log(this.apiDir+'visitas/cambiarEstado',this.requestOptions);
    var params = {id_visita:id_visita, estado:estado}
    return new Promise((resolve, reject) => {
      this.http.post(this.apiDir+'visitas/cambiarEstado', params, this.requestOptions)       
      .subscribe(response => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
    
  }

  eliminar_Grupo_workstation(id_producto){
    console.log('delete2',id_producto)
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'servicios/eliminarGrupoEquipos/'+id_producto,this.requestOptions);
  }

  subir_planos(parametros){
    console.log(this.apiDir)
    return this.http.post(this.apiDir+'planos/crear', parametros, this.requestOptions)
  }

  upload(params,bodyP = {}){
    console.log(this.apiDir)
    return new Promise((resolve, reject) => {
      this.http.post(this.apiDir + params,bodyP)
      // this.http.post(this.url + params, bodyP,{headers: header})
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

  ver_sucursal(id_sucursal){
    console.log(this.apiDir)

    return this.http.get(this.apiDir+'sucursales/id/'+id_sucursal,this.requestOptions)
  }

  crear_pdf(id_visita){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'pdf/create-pdf',id_visita,this.requestOptions);
  }

  ver_pdf(id_visita){
    console.log(this.apiDir)

    return this.http.get(this.apiDir+'pdf/fetch-pdf/'+id_visita,this.requestOptions);
  }

  modificar_cliente(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'clientes/actualizar',parametros,this.requestOptions)
  }

  subir_logo_cliente(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'clientes/actualizarLogo', parametros, this.requestOptions);
  }
  eliminar_Logo_Cliente(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'clientes/eliminarLogo', parametros, this.requestOptions);
  }
  eliminar_cliente(id_cliente){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'clientes/eliminar/'+id_cliente,this.requestOptions)
  }

  eliminar_sucursal(id_sucursal){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'sucursales/eliminar/'+id_sucursal,this.requestOptions)
  }

  eliminar_plano(id_plano){
    return this.http.post(this.apiDir+'planos/eliminar/'+id_plano,this.requestOptions)
  }

  modificar_sucursal(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'sucursales/actualizar',parametros,this.requestOptions)
  }

  estadisticas(parametros){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'clientes/estadisticas/',parametros,this.requestOptions);
  }

}
