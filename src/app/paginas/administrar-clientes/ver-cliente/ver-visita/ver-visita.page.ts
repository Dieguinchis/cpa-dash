import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
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

  constructor(private navParams: NavParams, private api_visitas: ApiClientesService, private modalController: ModalController) { }

  

  ngOnInit() {
    this.actualizar_informacion()
  }

  generar_pdf(){
    console.log(this.id_visita)
    this.api_visitas.crear_pdf({id_visita:this.id_visita}).subscribe(data => {
      console.log(data)
      this.pdf_generado = true;
    }, error => {
      console.log(error)
    })
  }

  ver_pdf(){
    this.api_visitas.ver_pdf(this.id_visita).subscribe(data => {
      this.url = data;
      console.log(this.url.url)
      var win = window.open('http://'+this.url.url, '_blank');
      win.focus();  
    }, error => {
      console.log(error)
    })
  }

  actualizar_informacion(){
    this.api_visitas.informacion_visita(this.id_visita).subscribe(data => {
      this.visita = data;
      this.visita = this.visita.result;
      console.log(this.visita)
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

}
