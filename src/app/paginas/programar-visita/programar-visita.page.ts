import { Component, OnInit } from '@angular/core';
import { ApiVisitasService } from './servicios/api-visitas.service'
import * as moment from 'moment';

@Component({
  selector: 'app-programar-visita',
  templateUrl: './programar-visita.page.html',
  styleUrls: ['./programar-visita.page.scss'],
})
export class ProgramarVisitaPage implements OnInit {

  constructor(private api: ApiVisitasService) { }

  servicios_elegidos: [];
  id_cliente_elegido: any;
  sucursal_elegida: any;
  fecha_elegida: any;

  listado_clientes: any;
  listado_sucursales_cliente: any;
  listado_servicios: any;

  fecha_actual: any;
  dayNames= ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

  ngOnInit() {
    this.api.listado_clientes().subscribe(data => {
      this.listado_clientes = data;
      this.listado_clientes = this.listado_clientes.result;
      console.log(this.listado_clientes)
    }), 
    (error => {
      console.log(error)
    });
    
    this.api.mostrar_servicios().subscribe(data =>{
      this.listado_servicios = data;
      this.listado_servicios = this.listado_servicios.result;
      console.log(this.listado_servicios)
    }), (error => {
      console.log(error)
    });

    this.fecha_actual = moment().format();

  }

  sucursalesCliente(id_cliente){
    this.api.informacion_cliente(id_cliente).subscribe(data => {
      this.listado_sucursales_cliente = data
      this.listado_sucursales_cliente = this.listado_sucursales_cliente.result.sucursales.datosSucursal
      this.sucursal_elegida = null;
      this.id_cliente_elegido = id_cliente;
      console.log(this.listado_sucursales_cliente)
    }), (error => {
      console.log(error)})
  }

  programarVisita(){
    this.api.crear_visita({'id_cliente': this.id_cliente_elegido,
                           'id_sucursal': this.sucursal_elegida,
                           'servicios': this.servicios_elegidos,
                           'fecha_visita': this.fecha_elegida}).subscribe(data => {
                              console.log(data)
                           }), (error =>{
                             console.log(error)
                           })
  }


}
