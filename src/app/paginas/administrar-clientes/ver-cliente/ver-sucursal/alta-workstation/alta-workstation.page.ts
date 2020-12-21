import { Component, OnInit } from '@angular/core';
import { ApiServiciosService } from '../../../../administrar-servicios/servicios/api-servicios.service'
import { NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alta-workstation',
  templateUrl: './alta-workstation.page.html',
  styleUrls: ['./alta-workstation.page.scss'],
})
export class AltaWorkstationPage implements OnInit {

  public servicios: any;
  public id_sucursal = this.navParams.get('id_sucursal');
  public id_equipo_grupo = this.navParams.get('id_equipo_grupo');

  public nombre_workstation: string;
  public id_servicio: number;

  object: {}

  constructor(private api_servicios: ApiServiciosService, private navParams: NavParams, private modalCtrl: ModalController, public alertController: AlertController) { }

  ngOnInit() {
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
    if(this.id_servicio){
      this.object = {nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio, id_sucursal:this.id_sucursal,id_equipo_grupo:this.id_equipo_grupo};
      this.api_servicios.alta_workstation(this.object).subscribe(data => {
        console.log(data)
        this.modalCtrl.dismiss({
          'dismissed': true
        });
      }), (error => {
        console.log(error)
      })
    }else{
      this.presentAlert();
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
