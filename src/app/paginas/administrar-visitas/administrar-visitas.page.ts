import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ApiClientesService } from '../administrar-clientes/servicios/api-clientes.service';
import { VerVisitaPage } from '../administrar-clientes/ver-cliente/ver-visita/ver-visita.page';
import { ApiVisitasService } from '../programar-visita/servicios/api-visitas.service';

@Component({
  selector: 'app-administrar-visitas',
  templateUrl: './administrar-visitas.page.html',
  styleUrls: ['./administrar-visitas.page.scss'],
})
export class AdministrarVisitasPage implements OnInit {

  public visitas = [];
  public fecha_desde;
  public fecha_hasta;
  public visitas_filtro;
  public entregado = true;
  public finalizada = true;
  public enProceso = true;
  public pendiente = true;
  public filtrar_fecha = false;
  public temp;
  public busqueda;


  constructor(
    public apiVisitasService: ApiVisitasService,
    public router: Router,
    public modalController: ModalController,
    public api_clientes: ApiClientesService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.filtroHoy();
    this.getVisitas();
  }

  getVisitas(){
    this.apiVisitasService.getAllVisitas().then((resp: any) => {
      console.log(resp.result)
      this.visitas = resp.result;
      this.filtrar();
    })
  }

  entreFechas(visita){
    console.log(new Date(new Date(this.fecha_desde).setHours(0)),'///////',new Date(new Date(visita.fecha_visita).setDate(new Date(visita.fecha_visita).getDate())),'////////////', new Date(new Date(this.fecha_desde).setHours(24)))
    if ((new Date(visita.fecha_visita).setDate(new Date(visita.fecha_visita).getDate()).valueOf() >= new Date(this.fecha_desde).setHours(0).valueOf()) && (new Date(visita.fecha_visita).setDate(new Date(visita.fecha_visita).getDate()).valueOf() <= new Date(this.fecha_hasta).setHours(24).valueOf())) {
      return true
    }else {
      return false
    }
  }

  filtrar(){
    if (!this.filtrar_fecha) {
      this.visitas_filtro = this.visitas.filter(visita => this.entreFechas(visita) && this.revisarEstado(visita))
      this.visitas_filtro.sort(this.ordenarVisitas)
    } else {
      this.visitas_filtro = this.visitas.filter(visita => this.revisarEstado(visita))
      this.visitas_filtro.sort(this.ordenarVisitas)
    }
    this.temp = this.visitas_filtro;
    this.updateFilter();
  }

  ordenarVisitas(a,b){
    var aaux = new Date(a.fecha_visita).valueOf();
    var baux = new Date(b.fecha_visita).valueOf();
    return  baux -aaux;
  }

  revisarEstado(visita){
    if(visita.estado_visitas == 'entregado'){
      return this.entregado
    }
    if(visita.estado_visitas == 'finalizada'){
      return this.finalizada
    }
    if(visita.estado_visitas == 'en proceso'){
      return this.enProceso
    }
    if(visita.estado_visitas == 'pendiente'){
      return this.pendiente
    }
  }
  
  revisarMenor(){
    if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()){
      this.fecha_hasta = this.fecha_desde
    }
    this.filtrar();
  }

  revisarMayor(){
    if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()){
      this.fecha_desde = this.fecha_hasta
    }
    this.filtrar();
  }

  navigateToCrearVisita(){
    this.router.navigateByUrl('menu-principal/programar-visita')
  }

  async verVisita(id_visita) {
    const modal = await this.modalController.create({
      component: VerVisitaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id_visita': id_visita
      }
    });
    return await modal.present();
  }

  async eliminarVisitaAlert(visita){
    var al = await this.alertController.create({
      header: 'Seguro que desea eliminar la visita?',
      buttons: 
      [
       { 
          text: 'No',
          handler: () => {
            
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.eliminarVisita(visita);
            
          }
        }
      ]
    })
    al.present()
  }

  async eliminarVisita(visita){
    var load = await this.loadingController.create({
      message:"Eliminando la visita"
    })
    load.present();
    this.api_clientes.cambiar_estado_visita(visita.id_visita, 'eliminado').then(e => {
      load.dismiss();
      this.getVisitas();
      this.toastController.create({
        message:"Se elimino correctamente",
        duration: 2000,
        color:"success"
      }).then(r =>{
        r.present();
      })
      console.log(e);
    }).catch(error => {
      load.dismiss();
      this.toastController.create({
        message:"Hubo un error al eliminar",
        duration: 2000,
        color:"danger"
      }).then(r =>{
        r.present();
      })
      console.error(error);
    })
  }

  async marcarEntregadoAlert(visita) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: '¿Estas seguro que deseas marcar esta visita como entregada?',
      buttons: [
        {text:'No',role:'cancel'},
        {text:'Si',
        handler: () =>{
          this.marcarEntregado(visita.id_visita);
        }  
      }
      ]
    });
  
    await alert.present();
  }

  async marcarEntregado(id){
    var load = await this.loadingController.create({
      message:"Cargando visita"
    })
    load.present();
    this.api_clientes.cambiar_estado_visita(id, 'entregado').then(e => {
      this.getVisitas();
      load.dismiss();
      this.toastController.create({
        message:"Se Marco como entregada",
        duration: 2000,
        color:"success"
      }).then(r =>{
        r.present();
      })
    }).catch(err =>{
      load.dismiss();
      this.toastController.create({
        message:"Hubo un error al marcar como entregada",
        duration: 2000,
        color:"danger"
      }).then(r =>{
        r.present();
      })
      console.error(err);
    })

  }

  filtroHoy(){
    var aux = new Date().getFullYear().toString() + '-' + (((new Date().getMonth() + 1) >= 10 )?(new Date().getMonth() + 1).toString():'0' + (new Date().getMonth() + 1).toString()) + '-' + ((new Date().getDate() >= 10) ? new Date().getDate() : '0' + new Date().getDate().toString()) + 'T00:00:00-03:00';
    this.fecha_hasta = aux;
    this.fecha_desde = aux;
    console.log("filtroHoy", aux)
    this.filtrar_fecha = false;
  }

  sumarDia(dia){
    console.log(new Date(dia).setDate(dia.getDate()+1))
    return new Date(dia).setDate(dia.getDate()+1)
  }

  hoyDisable(){
    var aux = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + (new Date().getDate()).toString() + 'T00:00:00-03:00';
    if ((aux == this.fecha_hasta && aux == this.fecha_desde) && (!this.filtrar_fecha)){
      return true;
    }else{
      return false;
    }
  }

  updateFilter(event?) {
    if (event){
      const val = event.target.value.toLowerCase();
      const temp = this.temp.filter(function (d) {

        return d.razon_social_cliente?.toLowerCase().includes(val) || d.razon_social_sucursal?.toLowerCase().includes(val);
        
      });
  
      // update the rows
      this.visitas_filtro = temp;
    }else{
      const val = this.busqueda;
      const temp = this.temp.filter(function (d) {

        return d.razon_social_cliente?.toLowerCase().includes(val) || d.razon_social_sucursal?.toLowerCase().includes(val);
        
      });
  
      if (val){
        this.visitas_filtro = temp;
      }
    }

    
  }

  searchClear(){
    this.visitas_filtro = this.temp;
  }
}
