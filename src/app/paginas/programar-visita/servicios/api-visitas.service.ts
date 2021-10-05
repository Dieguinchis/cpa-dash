import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../../environments/version'

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
        'Content-Type': 'application/json',
        'version': version
      })
    };
   }
   
  listado_clientes(){
    return this.http.get(this.apiDir+'/clientes',this.requestOptions);
  }

  listado_equipos(id){
    return this.http.get(this.apiDir+'/servicios/equipos/offline/'+id,this.requestOptions);
  }

  listado_equipos_id(id){
    return this.http.get(this.apiDir+'/servicios/equipos/sucursal/'+id,this.requestOptions);
  }

  informacion_cliente(id){
    return this.http.get(this.apiDir+'/clientes/id/'+id,this.requestOptions);
  }

  mostrar_servicios(){
    return this.http.get(this.apiDir+'/servicios',this.requestOptions);
  }

  crear_visita(parametros){
    return this.http.post(this.apiDir+'/visitas/crear',parametros,this.requestOptions);
  }

  modificar_visita(parametros){
    console.log(this.apiDir+'/visitas/update', parametros);
    return this.http.post(this.apiDir+'/visitas/update',parametros,this.requestOptions);
  }

  listado_grupoWorkstations(id){
    return this.http.get(this.apiDir+'/servicios/gruposEquipos/sucursal/'+id,this.requestOptions);
  }

  getAllVisitas(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiDir+'/visitas/',this.requestOptions).subscribe(response =>{
        resolve(response);
      }, (error) =>{
        reject (error);
      })
    });
    
  }

  getRespuestas(id_formulario){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiDir+'/formularios/respuestas/'+id_formulario.toString(),this.requestOptions).subscribe(response => {
        resolve(response);
      }, (error) =>{
        reject(error)
      })
    })
  }

  cambiarRespuestas(respuesta){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiDir+'/formularios/respuestas',respuesta,this.requestOptions).subscribe(response => {
        resolve(response);
      }, (error) =>{
        reject(error)
      })
    })
  }

  actualizar_equipo(parametros){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiDir+'/servicios/equipos/update',parametros,this.requestOptions).subscribe(response => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  getEquipo(id_equipo){
    return this.http.get(this.apiDir+'/servicios/equipos/'+ id_equipo,this.requestOptions);
  }

}
