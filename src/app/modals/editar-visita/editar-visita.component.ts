import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiServiciosService } from 'src/app/paginas/administrar-servicios/servicios/api-servicios.service';
import { ApiVisitasService } from 'src/app/paginas/programar-visita/servicios/api-visitas.service';

@Component({
  selector: 'app-editar-visita',
  templateUrl: './editar-visita.component.html',
  styleUrls: ['./editar-visita.component.scss'],
})
export class EditarVisitaComponent implements OnInit {

  public id_servicio;
  public id_visita;
  public servicio;
  public respuestas;
  public id_formulario;
  public otros;
  public equipo;

  constructor(
    public navParams: NavParams,
    public apiServicios: ApiServiciosService,
    public apiVisitas: ApiVisitasService,
    public modalcontroller: ModalController
    ) {}

  ngOnInit() {
    this.id_servicio = this.navParams.get('id_servicio');
    this.id_visita = this.navParams.get('id_visita');
    this.id_formulario = this.navParams.get('id_formulario');
    if (this.navParams.get('equipo')) {
      this.equipo = this.navParams.get('equipo');
    }
    console.log(this.id_formulario);
    this.apiVisitas.getRespuestas(this.id_formulario).then((resp:any) => {
      this.respuestas = resp.respuestas;
      console.log('respuestas',this.respuestas);
      this.apiServicios.ver_servicio(this.id_servicio).subscribe((resp:any) =>{
        this.servicio = resp.result;
        for (let index = 0; index < this.servicio.formulario.length; index++) {
          const element = this.servicio.formulario[index];
          if ((element.tipoCampo.toLowerCase() == 'multiple') && (element.id_campo == 30)) {
            var lastElement = this.respuestas[index].respuesta.split(' - ')[this.respuestas[index].respuesta.split(' - ').length - 1]
            if (!element.opciones.find(opcion => opcion.name == lastElement)) {
              this.otros = lastElement
            }
            var aux = this.respuestas[index].respuesta;
            this.respuestas[index].respuesta = [];
            for (let index2 = 0; index2 < aux.split(' - ').length; index2++) {
              const element = aux.split(' - ')[index2];
              if (!(element == "")){
                this.respuestas[index].respuesta[index2] = element;
              }
            }
            if ( !element.opciones.find(opcion => opcion.name == this.respuestas[index].respuesta[this.respuestas[index].respuesta.length - 1])){
              this.respuestas[index].respuesta[this.respuestas[index].respuesta.length -1 ] = 'Otros';
            }
          }
          if ((element.tipoCampo.toLowerCase() == 'multiple') && (element.id_campo != 30)) {
            var aux = this.respuestas[index].respuesta;
            this.respuestas[index].respuesta = [];
            for (let index2 = 0; index2 < aux.split(' - ').length; index2++) {
              const element = aux.split(' - ')[index2];
              if (!(element == "")){
                this.respuestas[index].respuesta[index2] = element ;
              }
            }
            if (this.respuestas[index].respuesta.length == 1){
              
            }
          }
          
        }
        console.log(this.servicio);
        var indexRespId55 = this.respuestas.findIndex(respuesta => respuesta.id_campo == 55);
        if(this.respuestas[indexRespId55]){
          this.respuestas[indexRespId55].respuesta = this.servicio.listaProductos.find(producto => producto.id_producto == this.respuestas[indexRespId55].respuesta).tipo_producto;
        }
        var indexRespId70 = this.respuestas.findIndex(respuesta => respuesta.id_campo == 70);
        if (this.respuestas[indexRespId70]) {
          var aux = this.respuestas[indexRespId70];
          var arrayAux = [];
          for (let index = 0; index < this.respuestas[indexRespId70].respuesta.length; index++){
            arrayAux.push(this.servicio.listaProductos.find(producto => producto.id_producto == this.respuestas[indexRespId70].respuesta[index]).tipo_producto);
          }
          this.respuestas[indexRespId70].respuesta =  arrayAux;
        }
        console.log(this.respuestas);
      })
    }).catch(err =>{
      console.warn(err);
    })
    
  }

  modalDissmiss() {
    this.modalcontroller.dismiss();
  }

  prueba1(campo){
    console.log(campo);
  }

  prueba(){
    console.log(this.respuestas);
  }

  cambio(respuesta,i){
    this.respuestas[i].respuesta = respuesta.toString();
  }

  guardar(){
    if (this.respuestas.find(respuesta => respuesta.id_campo == 30)){
      var auxIndex = this.respuestas.findIndex(respuesta => respuesta.id_campo == 30)
      if (this.respuestas[auxIndex].respuesta.includes('Otros')) {
        (this.respuestas[auxIndex].respuesta.splice((this.respuestas[auxIndex].respuesta.length -1), 1, this.otros));
      }
    }
    for (let index = 0; index < this.servicio.formulario.length; index++) {
      const element = this.servicio.formulario[index];
      if (element.tipoCampo.toLowerCase() == 'multiple') {
        var aux = this.respuestas[index].respuesta;
        var cadenaFinal;
        for (let index2 = 0; index2 < aux.length; index2++) {
          const cadena = aux[index2];
          console.log(cadena);
          if (index2 == 0) {
            console.log('5');
            cadenaFinal = cadena;
          }else{
            console.log('6');
            cadenaFinal = cadenaFinal + ' - ' + cadena;
          }
        }
        this.respuestas[index].respuesta = cadenaFinal;
      }
      var stringAux
      if (element.nombreCampo == 'Tipo de producto'){
        for (let index2 = 0; index2 < this.respuestas[index].respuesta.split(' - ').length; index2++) {
          const nombreProducto = this.respuestas[index].respuesta.split(' - ')[index2];
          console.log(nombreProducto)
          var aux = this.servicio.listaProductos.find(producto => producto.nombre_producto.toLowerCase() == nombreProducto.toLowerCase());
          if (!aux) {
            aux = this.servicio.listaProductos.find(producto => producto.tipo_producto.toLowerCase() == nombreProducto.toLowerCase());
          }
          if (index2 == 0) {
            stringAux = aux.id_producto.toString()
          }else{
            stringAux = stringAux + ' - ' + aux.id_producto.toString()
          }
        }
        this.respuestas[index].respuesta = stringAux;
      }
    }
    this.apiVisitas.cambiarRespuestas(this.respuestas).then(resp => {
      this.modalDissmiss();
    })
  }

  mostrarOtros(){
    var aux = this.respuestas.find(respuesta => respuesta.id_campo == 30)
    return aux?.respuesta?.includes('Otros')
  }
}
