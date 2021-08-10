import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

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
        'Content-Type': 'application/json'
      })
    };
   }
   
   alta_cliente(datos){
    return this.http.post(this.apiDir+'/clientes/crear',datos,this.requestOptions);
  }
}
