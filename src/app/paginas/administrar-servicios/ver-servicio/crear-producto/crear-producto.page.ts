import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiServiciosService } from '../../servicios/api-servicios.service'

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {

  fecha_vencimiento: any;
  nombre_producto: any;
  lote: any;
  tipo_producto: any;

  public servicio: any;
  public indexTipoProducto = 0;

  public id_servicio = this.navParams.get('id_servicio');

  constructor(private navParams: NavParams, private api_servicios: ApiServiciosService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.api_servicios.ver_servicio(this.id_servicio).subscribe(data => {
      this.servicio = data;
      this.servicio = this.servicio.result;
      for(let i = 0; i < this.servicio.formulario.length; i++){
        if(this.servicio.formulario[i].nombreCampo == 'Tipo de producto'){
          this.indexTipoProducto = i;
        }
      }
      console.log(this.servicio);
    }, (error => {
      console.log(error)
    }))
  }

  cargar_producto(){
    this.api_servicios.alta_producto({id_servicio: this.id_servicio, nombre_producto: this.nombre_producto, fecha_vencimiento: this.fecha_vencimiento, lote: this.lote, tipo_producto: this.tipo_producto}).subscribe(data => {
      console.log(data)
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }, (error => {
      console.log(error)
    }))
  }

}
