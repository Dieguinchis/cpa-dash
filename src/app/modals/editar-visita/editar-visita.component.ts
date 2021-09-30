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

  public id_servicio
  public id_visita
  public servicio
  public respuestas
  public id_formulario

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
    console.log(this.id_formulario)
    this.apiVisitas.getRespuestas(this.id_formulario).then((resp:any) => {
      console.log(resp.respuestas);
      this.respuestas = resp.respuestas;
      console.log(this.respuestas);
      this.apiServicios.ver_servicio(this.id_servicio).subscribe((resp:any) =>{
        this.servicio = resp.result;
        console.log('test');
        for (let index = 0; index < this.servicio.formulario.length; index++) {
          console.log('test');
          const element = this.servicio.formulario[index];
          if (element.tipoCampo.toLowerCase() == 'multiple') {
            console.log('testif1');
            var aux = this.respuestas[index].respuesta;
            this.respuestas[index].respuesta = [];
            for (let index2 = 0; index2 < aux.split(' - ').length; index2++) {
              console.log('testfor');
              const element = aux.split(' - ')[index2];
              if (!(element == "")){
                console.log('testid2');
                this.respuestas[index].respuesta[index2] = element ;
              }
            }
            if (this.respuestas[index].respuesta.length == 1){
              
            }
          }
          
        }
        console.log(this.servicio);
      })
    }).catch(err =>{
      console.warn(err);
    })
    
  }

  modalDissmiss() {
    this.modalcontroller.dismiss();
  }

  prueba(){
    console.log(this.respuestas);
  }

  cambio(respuesta,i){
    this.respuestas[i].respuesta = respuesta.toString();
  }

  guardar(){
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

}
