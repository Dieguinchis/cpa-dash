import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ApiServiciosService } from '../servicios/api-servicios.service'
import { CrearProductoPage } from './crear-producto/crear-producto.page'
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';

@Component({
  selector: 'app-ver-servicio',
  templateUrl: './ver-servicio.page.html',
  styleUrls: ['./ver-servicio.page.scss'],
})
export class VerServicioPage implements OnInit {

  public id_servicio = this.navParams.get('id_servicio');
  public servicio: any;

  constructor(private navParams: NavParams, private api_servicios: ApiServiciosService, private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
    this.actualizar_informacion();
  }

  actualizar_informacion(){
    this.api_servicios.ver_servicio(this.id_servicio).subscribe(data => {
      this.servicio = data;
      this.servicio = this.servicio.result;
      console.log(this.servicio)
    }, (error =>{
      console.log(error)
    }))
  }

  async altaProducto(id_servicio){
    const modal = await this.modalController.create({
      component: CrearProductoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id_servicio': id_servicio
      }
    });
    modal.onDidDismiss().then(data =>{
      this.actualizar_informacion();
    })
    return await modal.present();
  }

  baja_producto(id_producto){
    this.api_servicios.baja_producto(id_producto).subscribe(data => {
      console.log(data)
      this.actualizar_informacion()
    }, (error =>{
      console.log(error)
    }))
  }

  async eliminar_producto(id_producto){
    const alert = await this.alertController.create({
      header: 'Seguro que desea eliminar el producto?',
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
            this.baja_producto(id_producto);
          }
        }
      ]
    });
    await alert.present();
  }

  async modificarProducto(producto){
    const modal = await this.modalController.create({
      component: ModificarProductoComponent,
      cssClass:'stack-modal',
      showBackdrop:true,
      componentProps: {
        'producto': producto,
        'servicio': this.servicio
      }
    });
    modal.onDidDismiss().then(data =>{
      this.actualizar_informacion();
    })
    return await modal.present();
  }
}