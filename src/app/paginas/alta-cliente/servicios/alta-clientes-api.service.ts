import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../../environments/version'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AltaClientesApiService {
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
   
   alta_cliente(datos){
    console.log(this.apiDir)

    return this.http.post(this.apiDir+'clientes/crear',datos,this.requestOptions);
  }
}
