import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiClientesService } from '../../servicios/api-clientes.service'
import { ApiVisitasService } from '../../../programar-visita/servicios/api-visitas.service'
import { ServicioTecnicosService } from '../../../administrar-tecnicos/servicios/servicio-tecnicos.service'

@Component({
  selector: 'app-modificar-visita',
  templateUrl: './modificar-visita.page.html',
  styleUrls: ['./modificar-visita.page.scss'],
})
export class ModificarVisitaPage implements OnInit {

  constructor(private navParams: NavParams, private api_clientes: ApiClientesService, private api_visitas: ApiVisitasService,
     private api_tecnicos: ServicioTecnicosService, private modalController: ModalController ) { }

  fecha_actual: any;
  dayNames= ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

  public id_visita = this.navParams.get('id_visita');
  public visita: any;
  public servicios_elegidos: any = [];
  public tecnico_elegido: any;
  public fecha_elegida: any;

  public listado_tecnicos: any;
  public listado_servicios: any;

  ngOnInit() {
    this.fecha_actual = moment().format();
    this.api_clientes.informacion_visita(this.id_visita).subscribe(data => {
      console.log(data)
      this.visita = data;
      this.visita = this.visita.result;
      this.fecha_elegida = this.visita.visitas.fecha_visita;
      this.tecnico_elegido = this.visita.visitas.id_tecnico.toString();
      for(let i = 0; i < this.visita.servicios.length; i++){
        this.servicios_elegidos.push(this.visita.servicios[i].id_servicio.toString())
      }

    }, (error =>{
      console.log(error)
    }))
   
    this.api_visitas.mostrar_servicios().subscribe(data =>{
      this.listado_servicios = data;
      this.listado_servicios = this.listado_servicios.result;
      console.log(this.listado_servicios)
    }), (error => {
      console.log(error)
    });

    this.api_tecnicos.listado_tecnicos().subscribe(data => {
      this.listado_tecnicos = data;
      this.listado_tecnicos = this.listado_tecnicos.result;
      console.log(this.listado_tecnicos)
    }, (error => {
      console.log(error)
    }))
  }

  modificar_visita(){
    console.log(this.servicios_elegidos)
    this.api_visitas.modificar_visita({id_visita: this.id_visita, fecha_visita: this.fecha_elegida, id_tecnico: this.tecnico_elegido, servicios: this.servicios_elegidos}).subscribe(data => {
      console.log(data);
      this.modalController.dismiss({
        'dismissed': true
      })
    }, (error => {
      console.log(error)
    }))
  }

}
