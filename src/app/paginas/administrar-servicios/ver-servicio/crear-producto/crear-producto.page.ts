import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
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

  constructor(private navParams: NavParams, private api_servicios: ApiServiciosService, private modalCtrl: ModalController, public alertController: AlertController) { }

  ngOnInit() {
    this.api_servicios.ver_servicio(this.id_servicio).subscribe(data => {
      this.servicio = data;
      this.servicio = this.servicio.result;
      for(let i = 0; i < this.servicio.formulario.length; i++){
        if(this.servicio.formulario[i].nombreCampo == 'Tipo de producto'){
          this.indexTipoProducto = i;
        }
      }
      console.log('Servicio: ',this.servicio);
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

  select_tipo_producto(){
    if(this.tipo_producto == 'nuevo'){
      this.alert_nuevo_tipo()
    }
  }

  async alert_nuevo_tipo(){
    const alert = await this.alertController.create({
      header: 'Crear nuevo tipo de producto',
      // message: 'Ingrese el nombre',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Ingrese el nombre'
        }
      ],
      buttons: [
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            this.crear_tipo_producto(data.name)

          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });
    await alert.present();
  }

  crear_tipo_producto(nombre){
    this.servicio.formulario.forEach(element => {
      if(element.nombreCampo == "Tipo de producto"){
        element.opciones.push({name: nombre})
      }
    });
    this.api_servicios.update_servicio(this.servicio).subscribe(data =>{
      console.log(data)
      // location.reload();
      this.ngOnInit()
    }), (error =>
      console.log(error))
  }
}
