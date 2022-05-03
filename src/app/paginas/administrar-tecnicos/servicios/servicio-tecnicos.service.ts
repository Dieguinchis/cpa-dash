import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../../environments/version'

@Injectable({
  providedIn: 'root'
})
export class ServicioTecnicosService {

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
   
  listado_tecnicos(){
    console.log(this.apiDir)

    return this.http.get(this.apiDir+'/tecnicos',this.requestOptions);
  }

  alta_tecnico(datos){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'/tecnicos/crear',datos,this.requestOptions);
  }

  modificar_tecnico(datos){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'/tecnicos/update',datos,this.requestOptions);
  }

  baja_tecnico(id_tecnico){
    console.log(this.apiDir)

    return this.http.delete(this.apiDir+'/tecnicos/eliminar/'+id_tecnico,this.requestOptions)
  }
}
