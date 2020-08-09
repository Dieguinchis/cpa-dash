import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiClientesService } from '../../servicios/api-clientes.service'
import { AltaWorkstationPage } from './alta-workstation/alta-workstation.page'

@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.page.html',
  styleUrls: ['./ver-sucursal.page.scss'],
})
export class VerSucursalPage implements OnInit {

  constructor(private navParams: NavParams, private api_sucursales: ApiClientesService, private modalController: ModalController) { }

  public id_sucursal = this.navParams.get('id_sucursal');
  public sucursal: any;
  public QR
  public workstations = []

  ngOnInit() {
    this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(data => {
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
      console.log(this.sucursal.sucursal[0].codigo_qr)
      this.workstations = []
    }), (error => {
      console.log(error)
    })
  }

  async altaWorkstation(){
    const modal = await this.modalController.create({
      component: AltaWorkstationPage,
      cssClass: 'modal-chiquito',
      componentProps: {
        'id_sucursal': this.id_sucursal
      }
    });
    return await modal.present();
  }

}
