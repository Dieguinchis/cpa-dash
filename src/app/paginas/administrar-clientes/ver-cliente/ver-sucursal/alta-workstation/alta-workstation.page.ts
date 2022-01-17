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
  public equipo_grupo = this.navParams.get('equipo_grupo');
  public producto_predeterminado;
  public productos;

  public nombre_workstation: string;
  public zona_workstation: string;
  public nro_workstation: Number;
  public id_servicio;

  object: {}

  constructor(private api_clientes: ApiClientesService, private api_servicios: ApiServiciosService, private navParams: NavParams, private modalCtrl: ModalController, public alertController: AlertController) { }

  ngOnInit() {
    console.log(this.equipo_grupo);
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

  async alta_workstation(){
    var data = null
    if (this.id_servicio == '20'){
      if(this.id_servicio){
        var equipos_zona = this.equipo_grupo.equipos.filter(equipo => equipo.zona == this.zona_workstation)
        console.log("EQUIPOSZONA",equipos_zona, (equipos_zona.some(equipo => equipo.nro_equipo == this.nro_workstation)) )
        if ((equipos_zona.some(equipo => equipo.nro_equipo == this.nro_workstation)) && (equipos_zona.length != 0)) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Ya existe un equipo con ese numero en la zona.',
            buttons: ['OK']
          });
        
          await alert.present();
        }else{
          if (!this.zona_workstation){
            this.zona_workstation = this.nombre_workstation;
          }
          if (!this.nombre_workstation){
            this.nombre_workstation = this.zona_workstation;
          }
          this.object = {nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio, id_sucursal:this.id_sucursal,id_equipo_grupo:this.equipo_grupo.id_equipo_grupo, producto_predeterminado: Number(this.producto_predeterminado), zona:this.zona_workstation, nro_equipo:this.nro_workstation};
          console.log(this.object)
          this.api_servicios.alta_workstation(this.object).subscribe((resp:any) => {
            console.log(resp.equipoCreado.insertId)
            data = {qr:1,nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio,id_equipo: resp.equipoCreado.insertId ,id_sucursal:this.id_sucursal,id_equipo_grupo:this.equipo_grupo.id_equipo_grupo,estado_servicio:'alta',modificable: 0, producto_predeterminado:this.producto_predeterminado};
            this.modalCtrl.dismiss({
              'dismissed': true,
              data: data,
              id:resp.equipoCreado.insertId
    
            });
          }), (error => {
            console.log(error)
          })
        }
      }else{
        this.presentAlert();
      }
    }else{
      if(this.id_servicio){
        var equipos_zona = this.equipo_grupo.equipos.filter(equipo => equipo.zona == this.zona_workstation)
        if (equipos_zona.some(equipo => equipo.nro_equipo == this.nro_workstation)) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Ya existe un equipo con ese numero en la zona.',
            buttons: ['OK']
          });
        
          await alert.present();
        }else{
          if (!this.zona_workstation){
            this.zona_workstation = this.nombre_workstation;
          }
          if (!this.nombre_workstation){
            this.nombre_workstation = this.zona_workstation;
          }
  
          this.object = {nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio, id_sucursal:this.id_sucursal,id_equipo_grupo:this.equipo_grupo.id_equipo_grupo, zona:this.zona_workstation, nro_equipo:this.nro_workstation};
          console.log(this.object)
          // data = this.object
          this.api_servicios.alta_workstation(this.object).subscribe((resp:any) => {
            console.log(resp.equipoCreado.insertId)
            data = {qr:1,nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio,id_equipo: resp.equipoCreado.insertId ,id_sucursal:this.id_sucursal,id_equipo_grupo:this.equipo_grupo.id_equipo_grupo,estado_servicio:'alta',modificable: 0};
            this.modalCtrl.dismiss({
              'dismissed': true,
              data: data,
              id:resp.equipoCreado.insertId
  
            });
          }), (error => {
            console.log(error)
          })
        }
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
