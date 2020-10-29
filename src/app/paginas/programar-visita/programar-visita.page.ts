import { Component, OnInit } from '@angular/core';
import { ApiVisitasService } from './servicios/api-visitas.service'
import * as moment from 'moment';
import { ServicioTecnicosService } from '../administrar-tecnicos/servicios/servicio-tecnicos.service'

@Component({
  selector: 'app-programar-visita',
  templateUrl: './programar-visita.page.html',
  styleUrls: ['./programar-visita.page.scss'],
})
export class ProgramarVisitaPage implements OnInit {

  public equipos;
  public serviciosConEquipos = [];
  public serviciosElegidos = [];
  public serviciosParaEnviar = [];

  constructor(private api: ApiVisitasService, private api_tecnicos: ServicioTecnicosService) { 
    this.api.mostrar_servicios().subscribe(data =>{
      this.listado_servicios = data;
      this.listado_servicios = this.listado_servicios.result;
      console.log(this.listado_servicios,'servicios')
      this.api.listado_equipos().subscribe((res:any)=>{
        this.equipos = res.result;
        console.log(this.equipos,'equipos')
        for ( let servicio of this.listado_servicios){
          servicio.equipos = [];
          for ( let equipo of this.equipos){
            if(equipo.id_servicio == servicio.id_servicio){
              servicio.equipos.push(equipo);
            }
          }
          if (servicio.equipos.length < 1){
            servicio.equipos.push({id_equipo: 0, id_servicio:servicio.id_servicio, nombre_equipo: 'Servicio principal'});
          }
        }
        console.log(this.listado_servicios,'servicios completos');
      })
    }), (error => {
      console.log(error)
    });
    
  }

  servicios_elegidosAux: [];
  id_cliente_elegido: any;
  sucursal_elegida: any;
  fecha_elegida: any;
  tecnico_elegido: any;

  listado_clientes: any;
  listado_sucursales_cliente: any;
  listado_servicios: any;
  listado_tecnicos: any;

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
    

    this.api_tecnicos.listado_tecnicos().subscribe(data => {
      this.listado_tecnicos = data;
      this.listado_tecnicos = this.listado_tecnicos.result;
      console.log(this.listado_tecnicos)
    }, (error => {
      console.log(error)
    }))

    this.fecha_actual = moment().format();

  }

  sucursalesCliente(id_cliente){
    this.api.informacion_cliente(id_cliente).subscribe(data => {
      this.listado_sucursales_cliente = data
      console.log(data)
      this.listado_sucursales_cliente = this.listado_sucursales_cliente.result.sucursales.datosSucursal
      this.sucursal_elegida = null;
      this.id_cliente_elegido = id_cliente;
      console.log(this.listado_sucursales_cliente)
    }), (error => {
      console.log(error)})
  }

  programarVisita(){
    for(let servicio of this.serviciosElegidos){
      for(let equipo of servicio.equipos){
        this.serviciosParaEnviar.push({id_servicio: servicio.id_servicio, id_tecnico: equipo.tecnico, id_equipo: equipo.id_equipo})
      }
    }
    console.log(this.serviciosParaEnviar);
    this.api.crear_visita({'id_cliente': this.id_cliente_elegido,
                          'id_sucursal': this.sucursal_elegida,
                          'servicios': this.serviciosParaEnviar,
                          'fecha_visita': this.fecha_elegida}).subscribe(data => {
                              console.log(data)
                              location.reload();
                           }), (error =>{
                             console.log(error)
                           })
  }

  test(){
    this.serviciosElegidos = [];
    for (let servicioID of this.servicios_elegidosAux){
      for(let servicio of this.listado_servicios){
        if(servicio.id_servicio == servicioID){
          this.serviciosElegidos.push(servicio);
        }
      }
    }
    console.log(this.serviciosElegidos)
  }

}
