import { Component, OnInit } from '@angular/core';
import { ApiVisitasService } from './servicios/api-visitas.service'
import * as moment from 'moment';
import { ServicioTecnicosService } from '../administrar-tecnicos/servicios/servicio-tecnicos.service'
import { AlertController } from '@ionic/angular';
import { element } from 'protractor';

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
  public grupoWorkStation = []
  public grupoWorkStationElegidos = []
  public show = false
  public tecnicoPrincipal;

  servicios_elegidosAux: string[] = [];
  id_cliente_elegido: any = null;
  sucursal_elegida: any = null;
  fecha_elegida: any;
  tecnico_elegido: any;
  equiposCargados: boolean = false
  workStationCargados: boolean = false
  listado_clientes: any;
  listado_sucursales_cliente: any;
  listado_servicios: any;
  listado_tecnicos: any;

  fecha_actual: any;
  fecha_maxima:any;
  dayNames= ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

  public custom = {
    cssClass:'alertSize'
  }

  constructor(private api: ApiVisitasService, private api_tecnicos: ServicioTecnicosService, public alertController: AlertController) { 
   
  }

  ngOnInit() {
    console.warn(1)
    this.api.mostrar_servicios().subscribe(data =>{
      console.warn(2)
      this.listado_servicios = data;
      this.listado_servicios = this.listado_servicios.result;
      console.log(this.listado_servicios,'servicios')
    }), (error => {
      console.log('*1*1*1*1*1*1',error)
    }); 


    this.api.listado_clientes().subscribe(data => {
      this.listado_clientes = data;
      this.listado_clientes = this.listado_clientes.result;
      this.listado_clientes.sort(this.ordenarClientes);
      console.log(this.listado_clientes)
    }), 
    (error => {
      console.log(error)
    });
    

    this.api_tecnicos.listado_tecnicos().subscribe(data => {
      this.listado_tecnicos = data;
      this.listado_tecnicos = this.listado_tecnicos.result;
      this.listado_tecnicos.sort(this.ordenarTecnicos);
      console.log(this.listado_tecnicos)
    }, (error => {
      console.log(error)
    }))

    this.fecha_actual = moment().format();
    this.fecha_maxima = moment().add(1, 'years').format();

  }

  sucursalesCliente(id_cliente){
    this.api.informacion_cliente(id_cliente).subscribe(data => {
      this.listado_sucursales_cliente = data
      console.log(data)
      this.listado_sucursales_cliente = this.listado_sucursales_cliente.result.sucursales.datosSucursal
      this.sucursal_elegida = null;
      this.id_cliente_elegido = id_cliente;
      this.listado_sucursales_cliente.sort(this.ordenarSucursales);
      console.log(this.listado_sucursales_cliente)
    }), (error => {
      console.log(error)
    })
  }

  selectSucursal(){
    if(this.sucursal_elegida != null){
      this.api.listado_equipos_id(this.sucursal_elegida).subscribe((res:any)=>{  
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
        this.equiposCargados = true
      })
    }

    this.api.listado_grupoWorkstations(this.sucursal_elegida).subscribe((data:any) =>{
      // console.log('Grupo1', data.result)
      var flag = 0
      var array = []
      var i = 0
      var first = true
      if(data.status == 'error'){
        alert('Ocurrio un error: ' + data.message)
      }else{
        data.result.forEach((element) => {
          if(element.id_equipo_grupo == flag){
            // console.log(element.id_equipo_grupo, ' ' ,flag)
            array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio, qr:element.qr, nro_equipo: element.nro_equipo, zona:element.zona})
          }else{
            if(!first){
              i++
            }
            flag = element.id_equipo_grupo
            array.push({nombre_equipo_grupo:element.nombre_equipo_grupo,id_equipo_grupo:element.id_equipo_grupo,equipos:[]})
            array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio,qr:element.qr, nro_equipo: element.nro_equipo, zona:element.zona})
            first = false
          }
        });
        this.grupoWorkStation = array
      }

      console.log('grupo2: ', this.grupoWorkStation)
      this.workStationCargados = true

    })
  }

  programarVisita(){
    for(let servicio of this.serviciosElegidos){
      for(let equipo of servicio.equipos){
        this.serviciosParaEnviar.push({id_servicio: servicio.id_servicio, id_tecnico: equipo.tecnico, id_equipo: equipo.id_equipo})
      }
    }
    var arrAux = []
    for(let workstation of this.grupoWorkStationElegidos){
      
      workstation.tecnico?.forEach(tecnico => {
        console.log(1)
        for (let index = 0; index < tecnico.equipos.length; index++) {
          const element = tecnico.equipos[index];
          console.warn(element)
          console.log(2)
          if (element?.length >= 1) {
            for (let index2 = 0; index2 < element.length; index2++) {
              console.log(index2, "/", element.length)
              const equipo = element[index2];
              if (equipo?.selected){
                if (!arrAux.find(equipoAux => (equipoAux.id_servicio == equipo.id_servicio) && (equipoAux.id_equipo == equipo.id_equipo))){
                  console.log("SI IF")
                  console.warn(equipo)
                  arrAux.push({id_servicio: equipo.id_servicio, id_tecnico: tecnico.id_tecnico, id_equipo: equipo.id_equipo})
                  this.serviciosParaEnviar.push({id_servicio: equipo.id_servicio, id_tecnico: tecnico.id_tecnico, id_equipo: equipo.id_equipo})
  
                }
              }
            }
          }
        }
      });

    }
    console.log(arrAux)
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
        console.log(servicio)
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
    for (let index = 0; index < arrayWorkstation.length; index++) {
      const element = arrayWorkstation[index];
      console.log(element.equipos);
      element.equipos.sort(this.ordenarEquipos);
      
    }
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

  ordenarClientes(a,b){
    if (a.razon_social_cliente.toLowerCase() > b.razon_social_cliente.toLowerCase()) {
      return 1;
    }
    if (a.razon_social_cliente.toLowerCase() < b.razon_social_cliente.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  ordenarSucursales(a,b){
    if (a.razon_social_sucursal.toLowerCase() > b.razon_social_sucursal.toLowerCase()) {
      return 1;
    }
    if (a.razon_social_sucursal.toLowerCase() < b.razon_social_sucursal.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  ordenarEquipos(a,b){
    if (a.nombre_equipo.toLowerCase() > b.nombre_equipo.toLowerCase()) {
      return 1;
    }
    if (a.nombre_equipo.toLowerCase() < b.nombre_equipo.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  ordenarTecnicos(a,b){
    if (a.nombre_tecnico.toLowerCase() > b.nombre_tecnico.toLowerCase()) {
      return 1;
    }
    if (a.nombre_tecnico.toLowerCase() < b.nombre_tecnico.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  async presentAlertCheckbox(servicio, h, tecnicos) {
    if (!tecnicos){
      tecnicos = []
    }
    var input = []
    for (let tecnico of this.listado_tecnicos) {
      console.log(tecnico)
      if (tecnicos.includes(tecnico)){
        input.push({
          name: tecnico.nombre_tecnico,
          type: 'checkbox',
          label: tecnico.nombre_tecnico,
          value: tecnico,
          checked:true
        })
      }else{
        input.push({
          name: tecnico.nombre_tecnico,
          type: 'checkbox',
          label: tecnico.nombre_tecnico,
          value: tecnico,
        })
      }
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: input,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            servicio.tecnico = data;
            servicio.tecnico.forEach(tecnico => {
              if (!tecnico.equipos) {
                tecnico.equipos = [];
                
              }
              tecnico.equipos[h] = [];
              for (let index = 0; index < servicio.equipos.length; index++) {
                const element = servicio.equipos[index];
                if (servicio.tecnico.length == 1){
                  element.selected = true;
                }else{
                  element.selected = false;
                }
                tecnico.equipos[h].push(JSON.parse(JSON.stringify(element)));
                
              }
              console.log(tecnico);
            });
            if (this.tecnicoPrincipal){
              this.tecnicoPrincipal = this.listado_tecnicos.find(tec => tec.id_tecnico == this.tecnicoPrincipal.id_tecnico);
              if (!servicio.tecnico.find(tec => tec.id_tecnico == this.tecnicoPrincipal.id_tecnico)){
                this.tecnicoPrincipal.equipos[h] = [];
                this.listado_tecnicos[this.listado_tecnicos.findIndex(tec => tec.id_tecnico == this.tecnicoPrincipal.id_tecnico)] = this.tecnicoPrincipal;
              }
            }
            console.log(data,"data");
            console.log(servicio);
            console.log(this.grupoWorkStationElegidos)
            console.log(this.listado_tecnicos, "TECNISO")
          }
        }
      ]
    });

    await alert.present();
  }

  prueba(servicio, t,h, i){
    for (let index = 0; index < servicio.tecnico.length; index++) {
      const tecnico = servicio.tecnico[index];
      if (t != index) {
        if (tecnico.equipos[h][i].selected) {
          tecnico.equipos[h][i].selected = false;
        }
      }
    }
  }

  selectTecnicoPrincipal(){
    console.log(this.serviciosElegidos)
    console.log(this.tecnicoPrincipal)
    var aux = []
    for (let servicio of this.serviciosElegidos) {
      for (let equipo of servicio.equipos) {
        equipo.tecnico = this.tecnicoPrincipal.id_tecnico.toString();
      }
    }
    for (let grupo of this.grupoWorkStationElegidos) {
      grupo.equipos.forEach(equipo => {
        equipo.selected = true;
      });
      aux.push(grupo.equipos);
    }
    for (let grupo of this.grupoWorkStationElegidos) {
      grupo.tecnico = [];
      grupo.tecnico[0] = this.tecnicoPrincipal;
      grupo.tecnico[0].equipos = aux;
    }

    console.log(this.tecnicoPrincipal)
    console.log(this.grupoWorkStationElegidos)
  }

}
