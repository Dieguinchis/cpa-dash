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
  public servicios = [];

  constructor(
    public navParams: NavParams,
    public apiServicios: ApiServiciosService,
    public apiVisitas: ApiVisitasService,
    public modalController: ModalController,

  ) { }


  ngOnInit() {
    this.id_servicio = this.navParams.get('id_servicio');
    var aux = [];
    new Promise(async(resolve, reject) => {
      for (let index = 0; index < this.navParams.get('visita').servicios.length; index++) {
        const servicio = this.navParams.get('visita').servicios[index];
        console.log('I',index)
        if ((servicio.id_servicio == 20 || servicio.id_servicio == 22) && (servicio.id_servicio == this.id_servicio)){
          var resp = await this.apiVisitas.getRespuestas(servicio.id_formulario);
          servicio.respuestas = resp;
          servicio.respuestas = servicio.respuestas.respuestas;
          var response = await this.apiVisitas.getEquipo(servicio.respuestas[0].id_equipo)
          var response2;
          response2 = response;
          if (index == 100) {
            console.warn(response2);
          }
          if (response2.result){
            if (response2.result[0]) {
              servicio.nombre_equipo = response2.result[0].nombre_equipo;
              servicio.zona = response2.result[0].zona;
              servicio.nro_equipo = response2.result[0].nro_equipo;
            }
          }
          aux.push(servicio);
          console.log(index == this.navParams.get('visita').servicios.length - 1)
          if (index == this.navParams.get('visita').servicios.length - 1) {
            console.log("CERRO")
            resolve('');
          }
        }else{
          if (index == this.navParams.get('visita').servicios.length - 1) {
            console.log("CERRO")
            resolve('');
          }
        }
      }
    }).then(() => {
      this.servicios = aux;
      console.log(this.servicios);
      this.servicios.sort(function (a, b) {
        if (a.nombre_equipo > b.nombre_equipo) {
          return 1
        }else if (b.nombre_equipo > a.nombre_equipo){
          return -1
        }else{
          if (a.zona > b.zona) {
            return 1
          }else if (b.zona > a.zona){
            return -1
          }else{
            console.log(a.zona, b.zona)
            return a.nro_equipo - b.nro_equipo
          }
        }
      });
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
