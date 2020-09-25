import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearServicioPage } from './crear-servicio/crear-servicio.page'
import { ApiServiciosService } from './servicios/api-servicios.service'
import { VerServicioPage } from './ver-servicio/ver-servicio.page'

@Component({
  selector: 'app-administrar-servicios',
  templateUrl: './administrar-servicios.page.html',
  styleUrls: ['./administrar-servicios.page.scss'],
})
export class AdministrarServiciosPage implements OnInit {

  constructor(public modalController: ModalController, private api: ApiServiciosService) { }

  public servicios: any;

  ngOnInit() {

    this.api.mostrar_servicios().subscribe(data => {
      this.servicios = data;
      this.servicios = this.servicios.result
      console.log(this.servicios)
    }), (error =>
      console.log(error))

  }

  async crear_servicio() {
    const modal = await this.modalController.create({
      component: CrearServicioPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async ver_servicio(id_servicio){
    const modal = await this.modalController.create({
      component: VerServicioPage,
      cssClass: 'modal_grande',
      componentProps: {
        'id_servicio': id_servicio
      }
    });
    return await modal.present();
  }

}
