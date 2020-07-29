import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.page.html',
  styleUrls: ['./crear-servicio.page.scss'],
})
export class CrearServicioPage implements OnInit {

  constructor() { }

  private campos = [];

  ngOnInit() {}

  agregar_campo_formulario(){
    this.campos.push({nombre:'', tipo:'', opciones:[]})
  }

  agregar_opcion_select(i){
    this.campos[i].opciones.push({opcion:''});
  }

  faf(){
    console.log(this.campos)
  }

}
