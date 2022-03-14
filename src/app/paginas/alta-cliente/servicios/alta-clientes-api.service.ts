import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../../environments/version'

@Injectable({
  providedIn: 'root'
})
export class AltaClientesApiService {
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
   
   alta_cliente(datos){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'/clientes/crear',datos,this.requestOptions);
  }
}
