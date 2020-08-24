import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
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

  login(parametros){
    return this.http.post(this.apiDir+'/auth/signin',parametros,this.requestOptions);
  }

}
