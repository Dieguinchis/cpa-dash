import { Component, OnInit } from '@angular/core';
import { ApiServiciosService } from '../../../../administrar-servicios/servicios/api-servicios.service'
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alta-workstation',
  templateUrl: './alta-workstation.page.html',
  styleUrls: ['./alta-workstation.page.scss'],
})
export class AltaWorkstationPage implements OnInit {

  public servicios: any;
  public id_sucursal = this.navParams.get('id_sucursal');
  public nombre_workstation: string;
  public id_servicio: number;

  object: {}

  constructor(private api_servicios: ApiServiciosService, private navParams: NavParams, private modalCtrl: ModalController) { }

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
    this.object = {nombre_equipos:this.nombre_workstation, id_servicio: this.id_servicio, id_sucursal:this.id_sucursal};
    this.api_servicios.alta_workstation(this.object).subscribe(data => {
      console.log(data)
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }), (error => {
      console.log(error)
    })
  }

}
