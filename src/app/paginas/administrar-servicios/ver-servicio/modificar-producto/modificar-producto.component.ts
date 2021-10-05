import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiServiciosService } from '../../servicios/api-servicios.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.scss'],
})
export class ModificarProductoComponent implements OnInit {

  public producto;
  public opcionesCebo = [];
  public opcionesPuesto = [];
  public opcionPredeterminada = [];

  constructor(public apiServicios: ApiServiciosService ,public navParams: NavParams, public modalController: ModalController) {
    this.producto = navParams.get('producto');
    apiServicios.ver_opciones_producto(this.producto.id_servicio).subscribe((resp: any) =>{
      var opciones;
      console.log(resp);
      opciones = resp.result;
      for (let opcion of opciones) {
        if (opcion.id_campo == 56){
          this.opcionesPuesto.push(opcion);
        }else{
          this.opcionesCebo.push(opcion);
        }
      }
      
      if (this.producto.opcion_predeterminada) {
        this.opcionPredeterminada[0] = this.producto.opcion_predeterminada.split(' - ')[0];
        this.opcionPredeterminada[1] = this.producto.opcion_predeterminada.split(' - ')[1];
      }
      console.log(this.opcionPredeterminada);
      console.log("PRODUCTO",this.producto);
      console.log("CEBO",this.opcionesCebo);
      console.log("PUESTO",this.opcionesPuesto);
    })
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

}
