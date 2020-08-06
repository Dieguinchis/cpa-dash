import { Component, OnInit } from '@angular/core';
import { AltaTecnicosPage } from './alta-tecnicos/alta-tecnicos.page'
import { ModalController } from '@ionic/angular';
import { ServicioTecnicosService } from './servicios/servicio-tecnicos.service'


@Component({
  selector: 'app-administrar-tecnicos',
  templateUrl: './administrar-tecnicos.page.html',
  styleUrls: ['./administrar-tecnicos.page.scss'],
})
export class AdministrarTecnicosPage implements OnInit {

  public tecnicos:any;

  constructor(public modalController: ModalController, public api_tecnicos: ServicioTecnicosService) { }

  ngOnInit() {
    this.api_tecnicos.listado_tecnicos().subscribe(data => {
      this.tecnicos = data;
      this.tecnicos = this.tecnicos.result;
      console.log(this.tecnicos);
    }), (error =>{
      console.log(error)
    })
  }

  async altaTecnico() {
    const modal = await this.modalController.create({
      component: AltaTecnicosPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
