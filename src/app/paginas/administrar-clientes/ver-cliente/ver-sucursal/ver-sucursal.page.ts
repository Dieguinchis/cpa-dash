import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ApiClientesService } from '../../servicios/api-clientes.service'
import { AltaWorkstationPage } from './alta-workstation/alta-workstation.page'
import { LoadingController } from "@ionic/angular";
import { NgxImageCompressService } from "ngx-image-compress";
import { ApiServiciosService } from '../../../administrar-servicios/servicios/api-servicios.service'


@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.page.html',
  styleUrls: ['./ver-sucursal.page.scss'],
})
export class VerSucursalPage implements OnInit {

  constructor(private navParams: NavParams, private api_sucursales: ApiClientesService,
              private modalController: ModalController, private imageCompress: NgxImageCompressService,
              private loadingController: LoadingController,
              private api_servicios: ApiServiciosService,
              private alertController:AlertController) { }

  public id_sucursal = this.navParams.get('id_sucursal');
  public sucursal: any;
  public QR
  public workstations: any;
  public grupoWorkStation: any;
  public loading;
  imagen = [];
  object:any;

  ngOnInit() {
    this.actualizar_informacion();
  }


  async altaWorkstation(id_equipo_grupo){
    const modal = await this.modalController.create({
      component: AltaWorkstationPage,
      cssClass: 'modal-chiquito',
      componentProps: {
        'id_sucursal': this.id_sucursal,
        id_equipo_grupo:id_equipo_grupo
      }
    });
    modal.onDidDismiss().then(data =>{
      this.actualizar_informacion();
    })
    return await modal.present();
  }

  altaGrupoWorkstation(nombre){
    var body = {nombre_equipo_grupo:nombre ,id_sucursal:this.id_sucursal}
    this.api_servicios.alta_Grupo_workstation(body).subscribe(resp =>{
      this.actualizar_informacion();
    }),(error => {
      console.log(error)
    })
  }

  async alertAltaGrupoWorkstation(){
    const alert = await this.alertController.create({
      header: 'Crear Grupo de Workstation',
      inputs:[
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'nombre'
        }
      ],
      buttons: 
      [
       { 
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Crear',
          handler: (input) => {
            this.altaGrupoWorkstation(input.nombre)
          }
        }
      ]
    });
    await alert.present();
  }

  borrar_equipo(id_equipo){
    this.api_sucursales.borrar_equipo(id_equipo).subscribe(data => {
      // console.log(data, id_equipo)
      this.actualizar_informacion();
    }), (error => {
      console.log(error)
    })
  }

  borrar_equipo_grupo(id, i){
    this.api_sucursales.eliminar_Grupo_workstation(id).subscribe(data => {
      // console.log(data, id)
      // this.actualizar_informacion();
      this.grupoWorkStation.splice(i,1)
    }), (error => {
      console.log(error)
    })
    // console.log(i)
  }

  actualizar_informacion(){
    this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(data => {
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
      console.log('sucursal: ', this.sucursal)


    }), (error => {
      console.log(error)
    })
    // this.api_sucursales.listado_workstations(this.id_sucursal).subscribe(data => {
    //   console.log(data)
    //   this.workstations = data;
    //   this.workstations = this.workstations.result;
    //   console.log(this.workstations)
    // }), (error => {
    //   console.log(error)
    // })
    this.api_sucursales.listado_grupoWorkstations(this.id_sucursal).subscribe((data:any) =>{
      // console.log('Grupo1', data.result)
      var flag = 0
      var array = []
      var i = 0
      var first = true
      data.result.forEach((element) => {
        if(element.id_equipo_grupo == flag){
          // console.log(element.id_equipo_grupo, ' ' ,flag)
          array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio})
        }else{
          if(!first){
            i++
          }
          flag = element.id_equipo_grupo
          array.push({nombre_equipo_grupo:element.nombre_equipo_grupo,id_equipo_grupo:element.id_equipo_grupo,equipos:[]})
          array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio})
          first = false
        }
      });
      this.grupoWorkStation = array
      // console.log('grupo2: ', this.grupoWorkStation)
      
    })
    
  }

  agregar_plano(){
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          // console.log(result);
          this.imagen[0] = {url: result}
          // console.log('rodri1', this.imagen[0]);
          // console.log('rodri2', this.sucursal.sucursal[0].id_sucursal)
          this.subirPlano(this.imagen);
        }
      )
    });
  }

  

  async subirPlano(imagen){
    this.loading = await this.loadingController.create({
      message: 'Por favor espere.'
    });
    
    await this.loading.present();
    if (this.imagen.length > 0){
      this.object = {id_sucursal:this.sucursal.sucursal[0].id_sucursal, imagen: this.imagen[0].url}
      // console.log('LA IMAGEN PUTO',this.imagen[0]);
      // console.log('request al sv: ', this.object)
      this.api_sucursales.subir_planos(this.object).subscribe(data =>{
        console.log('resp sv img: ',data)
        this.actualizar_informacion();
        this.loading.dismiss();
      }, (error =>{
        this.loading.dismiss();
        console.log('Error al subir el plano ', error);
        alert('El plano no se subio')
      }))
    } else {
      this.loading.dismiss();
      console.log('No se ha seleccionado ningun plano')
    }
  }
  
async eliminar_plano(id_plano){
  console.log(id_plano)
  this.loading = await this.loadingController.create({
    message: 'Eliminado plano, Por favor espere.'
  });
  await this.loading.present();
  this.api_sucursales.eliminar_plano(id_plano).subscribe(resp =>{
    this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(data => {
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
      console.log('sucursal: ', this.sucursal)
      this.loadingController.dismiss()


    }), (error => {
      this.loadingController.dismiss()
      this.modalController.dismiss()
      console.log(error)
    })
  },(error =>{
    this.loading.dismiss();
    console.log('Error al borrar el plano ', error);
    this.loadingController.dismiss()

    alert('Ocurrio un error')
  }))
}


async alert_eliminar_plano(id_plano){
  const alert = await this.alertController.create({
    header: 'Seguro que desea eliminar el plano?',
    buttons: 
    [
     { 
        text: 'No',
        handler: () => {
          
        }
      },
      {
        text: 'Si',
        handler: () => {
          this.eliminar_plano(id_plano);
        }
      }
    ]
  });
  await alert.present();
}

}
