import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServicioLoginService } from './login/servicios/servicio-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: ServicioLoginService,
    public router:Router,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkVersion()
    });
  }

  checkVersion(){
    this.loginService.checkVersion().then((resp:any) =>{
      if(resp.badVersion){
        alert('La version utilizada de la app no es la ultima, Por favor aguarde unos minutos, elimine el cache y actualice la pagina.')
      }else{
      }
    }).catch(err =>{
      console.error(err)
      if(err.error.badVersion){
        alert('La version utilizada de la app no es la ultima, Por favor aguarde unos minutos, elimine el cache y actualice la pagina.')
        this.router.navigate(['/login']);

      }else{

      }
    })
  }
}


