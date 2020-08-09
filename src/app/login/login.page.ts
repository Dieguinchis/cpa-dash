import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from './servicios/servicio-login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any;
  password:any;
  status:any;

  constructor(private api_login: ServicioLoginService) { }

  ngOnInit() {
  }

  login(){
    this.api_login.login({nombre: this.usuario, psw_admin: this.password}).subscribe(data => {
      console.log(data)
      this.status = data;
      this.status = this.status.status;
      if(this.status == 'OK'){
        
      }
      
    }),(error => {
      console.log(error)
    })
  }

}
