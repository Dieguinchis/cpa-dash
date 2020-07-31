import { Component, OnInit } from '@angular/core';
import { ApiServiciosService } from './servicios/api-servicios.service'

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.page.html',
  styleUrls: ['./crear-servicio.page.scss'],
})
export class CrearServicioPage implements OnInit {

  constructor(private api_servicios: ApiServiciosService) { }

  private formulario = [];
  private servicio : {}

  

  ngOnInit() {
    this.servicio = {nombreDelServicio:'', requiereQR: 0, formulario: this.formulario}
  }

  agregar_campo_formulario(){
    this.formulario.push({nombreCampo:'', tipoCampo:'', opciones:[]})
  }

  agregar_opcion_select(i){
    this.formulario[i].opciones.push('');
  }

  crear_servicio(){

  
     this.api_servicios.crear_servicio(this.servicio).subscribe(data => {
      console.log(data)
    }), (error =>
      console.log(error))
  }
      

}
