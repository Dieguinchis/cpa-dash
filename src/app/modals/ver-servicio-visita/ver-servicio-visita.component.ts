import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiServiciosService } from 'src/app/paginas/administrar-servicios/servicios/api-servicios.service';
import { ApiVisitasService } from 'src/app/paginas/programar-visita/servicios/api-visitas.service';
import { EditarVisitaComponent } from '../editar-visita/editar-visita.component';

@Component({
  selector: 'app-ver-servicio-visita',
  templateUrl: './ver-servicio-visita.component.html',
  styleUrls: ['./ver-servicio-visita.component.scss'],
})
export class VerServicioVisitaComponent implements OnInit {

  public id_servicio;
  public servicios;

  constructor(
    public navParams: NavParams,
    public apiServicios: ApiServiciosService,
    public apiVisitas: ApiVisitasService,
    public modalController: ModalController,

  ) { }


  ngOnInit() {
    this.id_servicio = this.navParams.get('id_servicio');
    var aux = [];
    new Promise((resolve, reject) => {
      for (let index = 0; index < this.navParams.get('visita').servicios.length; index++) {
        const servicio = this.navParams.get('visita').servicios[index];
        if ((servicio.id_servicio == 20 || servicio.id_servicio == 22) && (servicio.id_servicio == this.id_servicio)){
          this.apiVisitas.getRespuestas(servicio.id_formulario).then((resp:any) => {
            servicio.respuestas = resp.respuestas;
            this.apiVisitas.getEquipo(servicio.respuestas[0].id_equipo).then((response:any) => {
              if (response.result){
                if (response.result[0]) {
                  servicio.nombre_equipo = response.result[0].nombre_equipo;
                }
              }
            })
          }).catch(err =>{
            console.error(err);
          })
          aux.push(servicio);
        }
        if (index == this.navParams.get('visita').servicios.length - 1) {
          resolve('');
        }
      }
    }).then(() => {
      this.servicios = aux;
      console.log(this.servicios);
    }).catch(err =>{
      console.error(err);
    })
  }

  ngOnDestroy(){
  }

  async editarServicio(id_formulario, equipo){
    const modal = await this.modalController.create({
      component: EditarVisitaComponent,
      componentProps: { id_servicio: this.id_servicio, id_visita:this.navParams.get('visita').id_visita, id_formulario: id_formulario, equipo:equipo }
      });
    
      await modal.present();
  }

  modalDismiss(){
    this.modalController.dismiss();
  }
}
