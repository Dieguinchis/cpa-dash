import { Component, OnInit } from '@angular/core';
import { AltaTecnicosPage } from './alta-tecnicos/alta-tecnicos.page'
import { ModalController, AlertController } from '@ionic/angular';
import { ServicioTecnicosService } from './servicios/servicio-tecnicos.service'


@Component({
  selector: 'app-administrar-tecnicos',
  templateUrl: './administrar-tecnicos.page.html',
  styleUrls: ['./administrar-tecnicos.page.scss'],
})
export class AdministrarTecnicosPage implements OnInit {

  public tecnicos:any;

  constructor(public modalController: ModalController, public api_tecnicos: ServicioTecnicosService, public alertController: AlertController) { }

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

  async confirmar_baja(id_tecnico) {
    const alert = await this.alertController.create({
      header: '¿Seguro que deseas dar de baja al tecnico?',
      message: 'No podra recuperarse este tecnico si se da de baja.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Dar de baja',
          handler: () => {
            this.baja_tecnico(id_tecnico);
            //console.log('quiero borrar la publicacion', p.idpublicacion);
          }
        }
      ]
    });

    await alert.present();
  }

  baja_tecnico(id_tecnico){
    this.api_tecnicos.baja_tecnico(id_tecnico).subscribe(data =>{
      this.api_tecnicos.listado_tecnicos().subscribe(data => {
        this.tecnicos = data;
        this.tecnicos = this.tecnicos.result;
        console.log(this.tecnicos);
      }), (error =>{
        console.log(error)
      })
    }, (error =>{
      console.log(error)
    }));
  }

}
