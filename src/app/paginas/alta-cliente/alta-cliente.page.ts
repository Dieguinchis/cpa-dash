import { Component, OnInit } from '@angular/core';
import { AltaClientesApiService } from './servicios/alta-clientes-api.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.page.html',
  styleUrls: ['./alta-cliente.page.scss'],
})
export class AltaClientePage implements OnInit {

  constructor(private api_clientes: AltaClientesApiService, private navCtrl: NavController) { }

  razon_social: string;
  telefono: number;
  email: string;
  direccion: string;

  ngOnInit() {
  }

  cargar_cliente(){
    if(this.razon_social){
      this.api_clientes.alta_cliente({'razon_social_cliente':this.razon_social,
                                  'telefono':this.telefono, 
                                  'email': this.email,
                                  'direccion': this.direccion}).subscribe(data => {

      console.log(data);
      // this.navCtrl.navigateForward('/administrar-clientes')
      // location.reload();
      }),
    (error =>
        console.log(error))
    }else{
      alert('El campo Razon social es obligatorio');
    }
  }

}
