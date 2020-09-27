import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CrearServicioPage } from './crear-servicio/crear-servicio.page'
import { ApiServiciosService } from './servicios/api-servicios.service'
import { VerServicioPage } from './ver-servicio/ver-servicio.page'

@Component({
  selector: 'app-administrar-servicios',
  templateUrl: './administrar-servicios.page.html',
  styleUrls: ['./administrar-servicios.page.scss'],
})
export class AdministrarServiciosPage implements OnInit {

  constructor(public modalController: ModalController, private api: ApiServiciosService, private alertController: AlertController) { }

  public servicios: any;

  ngOnInit() {
    this.actualizar_informacion();
  }

  actualizar_informacion(){
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

  async borrar_servicio(id_servicio){
    const alert = await this.alertController.create({
      header: 'Seguro que desea eliminar el servicio?',
      buttons: 
      [
       { 
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.eliminar_servicio(id_servicio);
          }
        }
      ]
    });
    await alert.present();
  }

  eliminar_servicio(id_servicio){
    this.api.baja_servicio(id_servicio).subscribe(data => {
      console.log(data)
      this.actualizar_informacion();
    }, (error => {
      console.log(error)
    }))
  }

}
