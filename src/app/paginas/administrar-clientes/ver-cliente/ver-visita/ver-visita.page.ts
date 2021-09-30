import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { EditarVisitaComponent } from 'src/app/modals/editar-visita/editar-visita.component';
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
      for (let index = 0; index < this.visita.servicios.length; index++) {
        const element = this.visita.servicios[index];
        element
        
      }
      console.log(this.visita)
      this.visita.servicios2 = [];
      for(let servicio of this.visita.servicios){
        if(!this.visita.servicios2.includes(servicio.nombre_servicio)){
          this.visita.servicios2.push({nombre_servicio:servicio.nombre_servicio, id_servicio:servicio.id_servicio}); 
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

  async editarServicio(id_servicio, i) {
    console.log(id_servicio)
    const modal = await this.modalController.create({
    component: EditarVisitaComponent,
    componentProps: { id_servicio: id_servicio, id_visita:this.id_visita, id_formulario: this.visita.servicios[i].id_formulario }
    });
  
    await modal.present();
  
  }
}
