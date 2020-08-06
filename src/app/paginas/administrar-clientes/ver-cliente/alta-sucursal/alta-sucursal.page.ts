import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiClientesService } from '.././../servicios/api-clientes.service'

@Component({
  selector: 'app-alta-sucursal',
  templateUrl: './alta-sucursal.page.html',
  styleUrls: ['./alta-sucursal.page.scss'],
})
export class AltaSucursalPage implements OnInit {

  constructor(private navParams: NavParams, private api: ApiClientesService, private modalCtrl: ModalController) { }

  public id_cliente = this.navParams.get('id_cliente');
  public razon_social: string;
  public telefono: number;
  public email: string;
  public direccion: string;

  ngOnInit() {
    
  }

  cargar_sucursal(){
    this.api.alta_sucursal({'id_cliente': this.id_cliente,
                            'razon_social_sucursal': this.razon_social,
                            'direccion_sucursal': this.direccion,
                            'telefono_sucursal': this.telefono,
                            'email_sucursal': this.email}).subscribe(data => {
                              console.log(data)
                              location.reload();
                            }), (error => {
                              console.log(error)
                            })
  }

  cancelar(){
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
}

}
