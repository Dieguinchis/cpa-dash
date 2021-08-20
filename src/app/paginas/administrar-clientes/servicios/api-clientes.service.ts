import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../../environments/version'
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
        'Content-Type': 'application/json',
        'version': version
      })
    };
   }
   
  listado_clientes(){
    return this.http.get(this.apiDir+'/clientes',this.requestOptions);
  }

  informacion_cliente(id){
    return this.http.get(this.apiDir+'/clientes/id/'+id,this.requestOptions);
  }

  alta_sucursal(datos){
    return this.http.post(this.apiDir+'/sucursales/crear',datos,this.requestOptions);
  }

  informacion_sucursal(id){
    return this.http.get(this.apiDir+'/sucursales/id/'+id,this.requestOptions);
  }

  async informacion_visita(id){
    var data = await this.http.get(this.apiDir+'/visitas/id/'+id,this.requestOptions);
    return data.toPromise()
  }

  listado_workstations(id){
    return this.http.get(this.apiDir+'/servicios/equipos/sucursal/'+id,this.requestOptions);
  }
  listado_grupoWorkstations(id){
    return this.http.get(this.apiDir+'/servicios/gruposEquipos/sucursal/'+id,this.requestOptions);
  }

  borrar_equipo(id_equipo){
    return this.http.post(this.apiDir+'/servicios/eliminarEquipos/'+id_equipo,this.requestOptions);
  }

  eliminar_visita(id_visita){
    console.log(this.apiDir+'/visitas/eliminar/'+id_visita,this.requestOptions);
    //return this.http.delete(this.apiDir+'/visitas/eliminar/'+id_visita,this.requestOptions);
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiDir+'/visitas/eliminar/'+id_visita,this.requestOptions)       
      .subscribe(response => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
    
  }

  eliminar_Grupo_workstation(id_producto){
    console.log('delete2',id_producto)
    return this.http.post(this.apiDir+'/servicios/eliminarGrupoEquipos/'+id_producto,this.requestOptions);
  }

  subir_planos(parametros){
    return this.http.post(this.apiDir+'/planos/crear', parametros, this.requestOptions)
  }

  upload(params,bodyP = {}){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiDir + params,bodyP,this.requestOptions)
      // this.http.post(this.url + params, bodyP,{headers: header})
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

  ver_sucursal(id_sucursal){
    return this.http.get(this.apiDir+'/sucursales/id/'+id_sucursal,this.requestOptions)
  }

  crear_pdf(id_visita){
    return this.http.post(this.apiDir+'/pdf/create-pdf',id_visita,this.requestOptions);
  }

  ver_pdf(id_visita){
    return this.http.get(this.apiDir+'/pdf/fetch-pdf/'+id_visita,this.requestOptions);
  }

  modificar_cliente(parametros){
    return this.http.post(this.apiDir+'/clientes/actualizar',parametros,this.requestOptions)
  }

  subir_logo_cliente(parametros){
    return this.http.post(this.apiDir+'/clientes/actualizarLogo', parametros, this.requestOptions);
  }
  eliminar_Logo_Cliente(parametros){
    return this.http.post(this.apiDir+'/clientes/eliminarLogo', parametros, this.requestOptions);
  }
  eliminar_cliente(id_cliente){
    return this.http.post(this.apiDir+'/clientes/eliminar/'+id_cliente,this.requestOptions)
  }

  eliminar_sucursal(id_sucursal){
    return this.http.post(this.apiDir+'/sucursales/eliminar/'+id_sucursal,this.requestOptions)
  }

  eliminar_plano(id_plano){
    return this.http.post(this.apiDir+'/planos/eliminar/'+id_plano,this.requestOptions)
  }

  modificar_sucursal(parametros){
    return this.http.post(this.apiDir+'/sucursales/actualizar',parametros,this.requestOptions)
  }


}
