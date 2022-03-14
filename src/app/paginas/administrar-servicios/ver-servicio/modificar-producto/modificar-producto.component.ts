import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ApiServiciosService } from '../../servicios/api-servicios.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.scss'],
})
export class ModificarProductoComponent implements OnInit {

  public producto;
  public servicio;
  public indexTipoProducto;
  public opcionesCebo = [];
  public opcionesPuesto = [];
  public opcionPredeterminada = [];

  constructor(public apiServicios: ApiServiciosService ,public navParams: NavParams, public modalController: ModalController, private alertController: AlertController) {
    this.producto = navParams.get('producto');
    this.servicio = navParams.get('servicio');
    for(let i = 0; i < this.servicio.formulario.length; i++){
      if(this.servicio.formulario[i].nombreCampo == 'Tipo de producto'){
        this.indexTipoProducto = i;
      }
    }
    var year = this.producto.fecha_vencimiento.split('-')[2]
    var day = this.producto.fecha_vencimiento.split('-')[0]
    var month = this.producto.fecha_vencimiento.split('-')[1]
    this.producto.fecha_vencimiento = year + '-' + month + '-' + day
    this.producto.tipo_producto = this.servicio.formulario[this.indexTipoProducto].opciones.find(opt => opt.name == this.producto.tipo_producto)
    console.log('servide', this.servicio)
   }

  ngOnInit() {}

  guardar(){
    var opcionPredAux = this.opcionPredeterminada[0] + ' - ' + this.opcionPredeterminada[1]
    console.log(opcionPredAux);
    this.producto.opcion_predeterminada = opcionPredAux;
    this.apiServicios.producto_update(this.producto).subscribe(resp => {
      console.log(resp);
      this.modalController.dismiss();
    })
  }

  modalDismiss(){
    this.modalController.dismiss();
  }

  select_tipo_producto(){
    if(this.producto.tipo_producto == 'nuevo'){
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
    this.apiServicios.update_servicio(this.servicio).subscribe(data =>{
      console.log(data)
      // location.reload();
      this.ngOnInit()
    }), (error =>
      console.log(error))
  }

  modificar(){
    var year = this.producto.fecha_vencimiento.split('-')[0]
    var day = this.producto.fecha_vencimiento.split('-')[2]
    var month = this.producto.fecha_vencimiento.split('-')[1]
    this.producto.fecha_vencimiento = day + "-" + month + "-" + year
    var id_serv = Number(JSON.stringify(this.servicio.listaProductos[0].id_servicio));
    console.log({id_servicio: id_serv, nombre_producto: this.producto.nombre_producto, fecha_vencimiento: this.producto.fecha_vencimiento, lote: this.producto.lote, tipo_producto: this.producto.tipo_producto.name, id_producto:this.producto.id_producto})
    this.apiServicios.producto_update({id_servicio: id_serv, nombre_producto: this.producto.nombre_producto, fecha_vencimiento: this.producto.fecha_vencimiento, lote: this.producto.lote, tipo_producto: this.producto.tipo_producto.name, id_producto:this.producto.id_producto}).subscribe(data => {
      console.log(data)
      this.modalController.dismiss();
    }, (error => {
      console.log(error)
    }))
  }
}
