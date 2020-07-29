import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearServicioPage } from './crear-servicio/crear-servicio.page'

@Component({
  selector: 'app-administrar-servicios',
  templateUrl: './administrar-servicios.page.html',
  styleUrls: ['./administrar-servicios.page.scss'],
})
export class AdministrarServiciosPage implements OnInit {

  constructor(public modalController: ModalController) { }

  servicios = ['Desratizacion', 'Desinsectacion', 'Desfabrizacion']

  ngOnInit() {
  }

  async crear_servicio() {
    const modal = await this.modalController.create({
      component: CrearServicioPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
