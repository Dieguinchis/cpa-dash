import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioTecnicosService {

  private requestOptions
  headers : any

  private apiDir = "http://cpaserver1.ddns.net:3000";


  constructor(public http: HttpClient) {
    this.requestOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }
   
  listado_tecnicos(){
    return this.http.get(this.apiDir+'/tecnicos');
  }

  alta_tecnico(datos){
    return this.http.post(this.apiDir+'/tecnicos/crear',datos,this.requestOptions);
  }

  baja_tecnico(id_tecnico){
    return this.http.delete(this.apiDir+'/tecnicos/eliminar/'+id_tecnico)
  }
}
