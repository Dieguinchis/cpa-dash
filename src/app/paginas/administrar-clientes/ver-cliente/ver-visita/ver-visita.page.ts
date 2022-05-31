import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { EditarVisitaComponent } from 'src/app/modals/editar-visita/editar-visita.component';
import { VerServicioVisitaComponent } from 'src/app/modals/ver-servicio-visita/ver-servicio-visita.component';
import { ApiClientesService } from '../../servicios/api-clientes.service'
import { ModificarVisitaPage } from '../modificar-visita/modificar-visita.page'



@Component({
  selector: 'app-ver-visita',
  templateUrl: './ver-visita.page.html',
  styleUrls: ['./ver-visita.page.scss'],
})
export class VerVisitaPage implements OnInit {

  public id_visita = this.navParams.get('id_visita');
  public visita: any;
  public url;
  public pdf_generado:boolean = false;
  public validDate = true;

  constructor(private navParams: NavParams, private api_visitas: ApiClientesService, private modalController: ModalController, public loadingController: LoadingController) { }

  

  ngOnInit() {
    this.actualizar_informacion()
  }

  async generar_pdf(){
    var loader = await this.loadingController.create({ message: "Generando PDF" });
     loader.present();

    console.log(this.id_visita)
    this.api_visitas.crear_pdf({id_visita:this.id_visita}).subscribe(data => {
      console.log(data)
      this.pdf_generado = true;
      loader.dismiss()
    }, error => {
      console.log(error)
      loader.dismiss()
    })
  }

  async verificarVisita(){
    var loader = await this.loadingController.create({ message: "Actualizando visita" });
    loader.present();
    this.api_visitas.verificarVisit(this.id_visita).then(data => {
      loader.dismiss()
      console.log("DATA",data)
      this.actualizar_informacion();
    })
  }

  ver_pdf(){
    this.api_visitas.ver_pdf(this.id_visita).subscribe(data => {
      this.url = data;
      console.log(this.url.url)
      var win = window.open(this.url.url, '_blank');
      win.focus();  
    }, error => {
      console.log(error)
    })
  }

  close(){
    this.modalController.dismiss()
  }

  actualizar_informacion(){
    this.api_visitas.informacion_visita(this.id_visita).then(data => {
      this.visita = data;
      this.visita = this.visita.result;
      console.log(this.visita.visitas.estado_visitas)
      if (new Date (this.visita.visitas.horario_salida).valueOf()) {
        this.visita.visitas.horario_salida = new Date (this.visita.visitas.horario_salida)
      }else{
        this.validDate = false;
      }
      console.log(this.visita)
      if (this.visita) {
        this.visita.servicios2 = [];
        for(let servicio of this.visita.servicios){
          if(!this.visita?.servicios2.find(servicioAux => servicioAux.nombre_servicio == servicio.nombre_servicio)){
            if (servicio.id_servicio == 22 || servicio.id_servicio == 20){
              this.visita.servicios2.push({nombre_servicio: servicio.nombre_servicio, id_servicio:servicio.id_servicio, id_formulario:null});
            }else{
              this.visita.servicios2.push(servicio); 
            }
          }
        }
        var aux = []
        var aux2 = []
        for (let index = 0; index < this.visita.servicios.length; index++) {
          const element = this.visita.servicios[index];
          if (!aux.some(servicio => servicio.id_servicio == element.id_servicio)) {
            aux.push(element)
          }
        }
        for (let index = 0; index < aux.length; index++) {
          const element = aux[index];
          aux[index].tecnicos = [];
          aux[index] = this.visita.servicios.filter(servicio => servicio.id_servicio == element.id_servicio)
          console.log(element)
        }
        for (let index = 0; index < this.visita.servicios.length; index++) {
          const element = this.visita.servicios[index];
          if (!aux2.some(servicio => servicio.tecnico?.id_tecnico == element.tecnico?.id_tecnico)) {
            aux2.push(element.tecnico)
          }
        }
        for (let index = 0; index < aux2.length; index++) {
          const element = aux2[index];
          for (let index2 = 0; index2 < aux.length; index2++) {
            const element2 = aux[index2];
            if ((element2.find(servicio => servicio.tecnico == element) && (!element2[0].tecnicos.some(tecnico => tecnico.id_tecnico == element.id_tecnico)))){
              aux[index2][0].tecnicos.push(element)
            }
          }
        }
        for (let index = 0; index < this.visita.servicios2.length; index++) {
          const element = this.visita.servicios2[index];
          var nombreTecnico = "";
          for (let tecnico of aux[index][0].tecnicos) {
            if (nombreTecnico){
              nombreTecnico = nombreTecnico + ", " +tecnico.nombre_tecnico + " " + tecnico.apellido_tecnico;
            }else{
              nombreTecnico = tecnico.nombre_tecnico + " " + tecnico.apellido_tecnico;
            }
          }
          element.tecnicos  = nombreTecnico
        }    
      }
    }), (error => {
      console.log(error)
    })
  }

  async modificar_visita(){
    const modal = await this.modalController.create({
      component: ModificarVisitaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id_visita': this.id_visita
      }
    });
    modal.onDidDismiss().then(data =>{
      this.actualizar_informacion();
    })
    return await modal.present();
  }

  async editarServicio(id_servicio, id_formulario) {
    if (id_formulario) {
      const modal = await this.modalController.create({
        component: EditarVisitaComponent,
        componentProps: { id_servicio: id_servicio, id_visita:this.id_visita, id_formulario: id_formulario }
        });
      
        await modal.present();
    }else{ 
      const modal = await this.modalController.create({
      component: VerServicioVisitaComponent,
      componentProps: { id_servicio: id_servicio, visita:this.visita}
      });
      
      await modal.present();
    }
    
  
  }
}
