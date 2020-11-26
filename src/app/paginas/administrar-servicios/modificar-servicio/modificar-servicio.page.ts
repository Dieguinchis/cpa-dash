import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { element } from 'protractor';
import { ApiServiciosService } from '../servicios/api-servicios.service';

@Component({
  selector: 'app-modificar-servicio',
  templateUrl: './modificar-servicio.page.html',
  styleUrls: ['./modificar-servicio.page.scss'],
})
export class ModificarServicioPage implements OnInit {

  public id_servicio
  public formulario:any = [];
  public servicio:any = {}
  public id_equipo
  public auxiliar =  []
  public resultado
  public qr
  public campos
  public start = false

  constructor(private api_servicios: ApiServiciosService, private navCtrl: NavController, private navParams:NavParams, private modalController: ModalController) {
    this.id_servicio = this.navParams.get('id_servicio');
   }


  iniicar(){
    this.start = true
    this.servicio = []
    this.campos = null
    this.api_servicios.ver_servicio(this.id_servicio).subscribe(data => {
      console.log('RESPUESTA:  ',data)
      this.servicio = data;
      this.servicio = this.servicio.result;
      this.servicio.requiereQR = this.servicio.requiereQR.toString()
      this.servicio.tieneProducto = this.servicio.tieneProducto.toString()
      var init:any = []
      this.servicio.formulario.forEach((element,i) => {
        init.push({opt:[], id_campo: element.id_campo , tipoCampo:element.tipoCampo, nombreCampo:element.nombreCampo})
        element.opciones.forEach(element2 => {
          // console.log(element2)
          init[i].opt.push(element2)
        });
      });
      this.campos = init
      console.log(this.servicio)
    }, (error =>{
      console.log(error)
    }))
  }

  ngOnInit() {
    this.servicio = {nombreDelServicio:'', requiereQR: 0, formulario: this.servicio.formulario, producto: 0}
    this.iniicar()
  }

  agregar_campo_formulario(){
    this.servicio.formulario.push({nombreCampo:'', tipoCampo:'', opciones:[]})
  }

  agregar_opcion_select(i){
    this.servicio.formulario[i].opciones.push('');
    this.campos[i].opt.push({name:null})
  }

  quitar_opcion_select(i,j,id){
    this.servicio.formulario[i].opciones.splice(j,1);
    this.campos[i].opt.splice(j,1);
    console.log(id)
    this.api_servicios.baja_opcion(id).subscribe(data =>{
      console.log(data)
    }),(error =>{
      console.log(error)
    })
  }

  crear_servicio(){
    this.servicio.formulario = []
    // console.log(this.servicio)
    this.campos.forEach((campo,i) => {
      this.servicio.formulario.push({nombreCampo:campo.nombreCampo ,tipoCampo:campo.tipoCampo, opciones:[]})
      campo.opt.forEach(opt => {
        this.servicio.formulario[i].opciones.push({opcion:opt.name})
      });
    });

    this.servicio.requiereQR = parseInt(this.servicio.requiereQR,10)
    this.servicio.producto = parseInt(this.servicio.tieneProducto,10)
    console.log(this.servicio)
    this.api_servicios.crear_servicio(this.servicio).subscribe(data => {
      console.log(data)
      this.borrar()
      location.reload();
    }), (error =>
      console.log(error))
  }

  modificar_servicio(){
    this.servicio.formulario = []
    this.campos.forEach((campo,i) => {
      // console.log(campo)
      this.servicio.formulario.push({nombreCampo:campo.nombreCampo ,tipoCampo:campo.tipoCampo,id_campo: campo.id_campo , opciones:[]})
      campo.opt.forEach(opt => {
        this.servicio.formulario[i].opciones.push(opt)
      });
    });
    this.servicio.requiereQR = parseInt(this.servicio.requiereQR,10)
    this.servicio.producto = parseInt(this.servicio.tieneProducto,10)
    this.api_servicios.update_servicio(this.servicio).subscribe(data =>{
      console.log(data)
      location.reload();
    }), (error =>
      console.log(error))
  }

  producto_asociado(){
    if(this.servicio.tieneProducto == 1 && this.servicio.modificable == 1 && this.start == false && this.servicio.formulario[0].nombreCampo != "Tipo de producto"){
      console.log('troll')
      this.servicio.formulario.unshift({nombreCampo:'Tipo de producto', tipoCampo: 'select', opciones:[]})
      this.campos.unshift({nombreCampo:'Tipo de producto', tipoCampo: 'select', opt:[]})
    } else if(this.servicio.formulario[0].nombreCampo == "Tipo de producto" && this.start == false){
      this.servicio.formulario.splice(0,1);
      this.campos.splice(0,1);
    }else{
      this.start = false
    }
  }

  borrar(){
    this.api_servicios.baja_servicio(this.id_servicio).subscribe(data =>{
      console.log(data)
    }), (error =>
      console.log(error))

  }
      
}
