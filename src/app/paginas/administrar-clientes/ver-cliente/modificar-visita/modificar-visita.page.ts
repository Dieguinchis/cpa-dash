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

  public serviciosElegidos
  public servicios_elegidosAux
  public grupoWorkStation
  public grupoWorkStationElegidos
  public show

  constructor(private navParams: NavParams, private api_clientes: ApiClientesService, private api_visitas: ApiVisitasService,
     private api_tecnicos: ServicioTecnicosService, private modalController: ModalController ) { }



  ngOnInit() {
    this.fecha_actual = moment().format();
    this.api_clientes.informacion_visita(this.id_visita).subscribe(data => {
      console.log(data)
      this.visita = data;
      this.visita = this.visita.result;
      this.fecha_elegida = this.visita.visitas.fecha_visita;
      this.tecnico_elegido = this.visita.visitas.id_tecnico;
      for(let i = 0; i < this.visita.servicios.length; i++){
        this.servicios_elegidos.push(this.visita.servicios[i].id_servicio.toString())
      }
      console.log('QWERTY;; ',this.visita)

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

  // selectSucursal(){
  //   this.api.listado_grupoWorkstations(this.sucursal_elegida).subscribe((data:any) =>{
  //     console.log('Grupo1', data.result)
  //     var flag = 0
  //     var array = []
  //     var i = 0
  //     var first = true
  //     data.result.forEach((element) => {
  //       if(element.id_equipo_grupo == flag){
  //         // console.log(element.id_equipo_grupo, ' ' ,flag)
  //         array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio, qr:element.qr})
  //       }else{
  //         if(!first){
  //           i++
  //         }
  //         flag = element.id_equipo_grupo
  //         array.push({nombre_equipo_grupo:element.nombre_equipo_grupo,id_equipo_grupo:element.id_equipo_grupo,equipos:[]})
  //         array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio,qr:element.qr})
  //         first = false
  //       }
  //     });
  //     this.grupoWorkStation = array
  //     console.log('grupo2: ', this.grupoWorkStation)
  //   })
  // }

  serviciosElegidosChange(){
    this.serviciosElegidos = [];
    for (let servicioID of this.servicios_elegidosAux){
      for(let servicio of this.listado_servicios){
        if(servicio.id_servicio == servicioID && servicio.qr == 0){
          this.serviciosElegidos.push(servicio);
        }
      }
    }
    var arrayWorkstation:any = [{nombre_equipo_grupo:null, id_equipo_grupo:null, tecnico: null ,equipos:[]}]
    var i = 0
    var first = true
    // console.log(this.servicios_elegidosAux)
    this.grupoWorkStation.forEach((workstation:any) =>{
      workstation.equipos.forEach((servicio) => {
        var val = servicio.id_servicio.toString()
        if(this.servicios_elegidosAux.includes(val)){
          if(this.checkExist(arrayWorkstation,workstation.nombre_equipo_grupo) || arrayWorkstation[0].nombre_equipo_grupo == null){
              if(!first){
                console.log('1')
                i = i + 1
                first = false
                arrayWorkstation.push({nombre_equipo_grupo:workstation.nombre_equipo_grupo, id_equipo_grupo:workstation.id_equipo_grupo, tecnico: null ,equipos:[servicio]})
              }else{
                first = false
                console.log('2')
                arrayWorkstation = [{nombre_equipo_grupo:workstation.nombre_equipo_grupo, id_equipo_grupo:workstation.id_equipo_grupo, tecnico: null ,equipos:[servicio]}]  
              }
          }else{
            console.log('3')
            arrayWorkstation[i].equipos.push(servicio)
          }
        }
      });
    })
    this.grupoWorkStationElegidos = arrayWorkstation
    this.show = true
    if(this.grupoWorkStationElegidos[0].nombre_equipo_grupo == null){
      this.show = false
    }
    console.log('Servicio elegidos: ',arrayWorkstation)
  }

  checkExist(array,nombre_equipo_grupo){
    var resp = []
    resp = array.find(resp =>
      (resp.nombre_equipo_grupo == nombre_equipo_grupo)
    )
    if(resp == undefined){
      return true
    }else{
      return false
    }
  }

}
