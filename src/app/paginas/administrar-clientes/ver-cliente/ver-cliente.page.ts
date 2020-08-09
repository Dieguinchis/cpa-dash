import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientesService } from '../servicios/api-clientes.service'
import { ModalController } from '@ionic/angular';
import { AltaSucursalPage } from './alta-sucursal/alta-sucursal.page'
import { VerSucursalPage } from './ver-sucursal/ver-sucursal.page'
import { VerVisitaPage } from './ver-visita/ver-visita.page'

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.page.html',
  styleUrls: ['./ver-cliente.page.scss'],
})
export class VerClientePage implements OnInit {

  public cliente: any;

  constructor(private activatedRoute: ActivatedRoute, private api_clientes: ApiClientesService, public modalController: ModalController) { }

  ngOnInit() {
    let id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
    this.api_clientes.informacion_cliente(id_cliente).subscribe(data => {
      this.cliente = data;
      this.cliente = this.cliente.result;
      console.log(this.cliente)

    }), (error =>
      console.log(error))
  }

  async altaSucursal() {
    let id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
    const modal = await this.modalController.create({
      component: AltaSucursalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id_cliente': id_cliente
      }
    });
    return await modal.present();
  }

  async verSucursal(id_sucursal) {
    let id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
    const modal = await this.modalController.create({
      component: VerSucursalPage,
      cssClass: 'modal_grande',
      componentProps: {
        'id_sucursal': id_sucursal
      }
    });
    return await modal.present();
  }

  async verVisita(id_visita) {
    const modal = await this.modalController.create({
      component: VerVisitaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id_visita': id_visita
      }
    });
    return await modal.present();
  }

}
