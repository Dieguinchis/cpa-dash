import { Component, OnInit } from '@angular/core';
import { ApiServiciosService } from '../../../../administrar-servicios/servicios/api-servicios.service'
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ApiClientesService } from '../../../servicios/api-clientes.service';

@Component({
  selector: 'app-alta-workstation',
  templateUrl: './alta-workstation.page.html',
  styleUrls: ['./alta-workstation.page.scss'],
})
export class AltaWorkstationPage implements OnInit {

  public servicios: any;
  public id_sucursal = this.navParams.get('id_sucursal');
  public id_equipo_grupo = this.navParams.get('id_equipo_grupo');
  public producto_predeterminado;
  public productos;

  public nombre_workstation: string;
  public id_servicio;

  object: {}

  constructor(private api_clientes: ApiClientesService, private api_servicios: ApiServiciosService, private navParams: NavParams, private modalCtrl: ModalController, public alertController: AlertController) { }

  ngOnInit() {
    this.api_clientes.listado_productosServicio(20).subscribe((resp:any)=>{
      console.log(resp)
      this.productos = resp.result
    })
    console.log(this.id_sucursal)
    this.api_servicios.mostrar_servicios().subscribe(data => {
      this.servicios = data;
      this.servicios = this.servicios.result;
      console.log(this.servicios);
    }), (error => {
      console.log(error)
    })
  }

  alta_workstation(){
    var data = null
    if (this.id_servicio == '20'){
      if(this.id_servicio){
        this.object = {nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio, id_sucursal:this.id_sucursal,id_equipo_grupo:this.id_equipo_grupo, producto_predeterminado: Number(this.producto_predeterminado)};
        console.log(this.object)
        this.api_servicios.alta_workstation(this.object).subscribe((resp:any) => {
          console.log(resp.equipoCreado.insertId)
          data = {qr:1,nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio,id_equipo: resp.equipoCreado.insertId ,id_sucursal:this.id_sucursal,id_equipo_grupo:this.id_equipo_grupo,estado_servicio:'alta',modificable: 0, producto_predeterminado:this.producto_predeterminado};
          this.modalCtrl.dismiss({
            'dismissed': true,
            data: data,
            id:resp.equipoCreado.insertId
  
          });
        }), (error => {
          console.log(error)
        })
      }else{
        this.presentAlert();
      }
    }else{
      if(this.id_servicio){
        this.object = {nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio, id_sucursal:this.id_sucursal,id_equipo_grupo:this.id_equipo_grupo};
        // data = this.object
        this.api_servicios.alta_workstation(this.object).subscribe((resp:any) => {
          console.log(resp.equipoCreado.insertId)
          data = {qr:1,nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio,id_equipo: resp.equipoCreado.insertId ,id_sucursal:this.id_sucursal,id_equipo_grupo:this.id_equipo_grupo,estado_servicio:'alta',modificable: 0};
          this.modalCtrl.dismiss({
            'dismissed': true,
            data: data,
            id:resp.equipoCreado.insertId

          });
        }), (error => {
          console.log(error)
        })
      }else{
        this.presentAlert();
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Para crear la workstation debes seleccionar el servicio que cumple',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
