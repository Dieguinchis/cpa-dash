import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from './servicios/servicio-login.service'
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any;
  password:any;
  status:any;
  public loader;

  constructor(private api_login: ServicioLoginService,
    public router:Router,
    public storage: Storage,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async login(){
    this.loader = await this.loadingController.create({ message: "Ingresando..." });
    this.loader.present();
    this.api_login.login({nombre: this.usuario, psw_admin: this.password}).subscribe((data:any) => {
      if(data.status == "OK"){
        this.storage.set('token', data).then(res=>{
          this.loadingController.dismiss();
          this.router.navigate(['']);
        },error=>{
          console.log(error);
          this.loadingController.dismiss();
          alert('algo salio mal =(');
        })
      }else{
        alert(data.message.message);
        this.loadingController.dismiss();
      }      
    }),(error => {
      console.log(error)
      this.loadingController.dismiss();
      alert('Algo salio mal, por favor intente de nuevo mas tarde');
    })
  }

}
