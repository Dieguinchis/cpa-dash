import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import {version} from '../../../environments/version'
import { promise } from 'protractor';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
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

  login(parametros){
    return this.http.post(this.apiDir+'/auth/signin',parametros,this.requestOptions);
  }

  
  checkVersion(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiDir+'/',this.requestOptions).subscribe(resp =>{
        resolve(resp)
      },err =>{
        reject(err)
      })      
    })
  }

}
