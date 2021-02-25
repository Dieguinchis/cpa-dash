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
  public disabled = false
  public fileNames = []
  public filesToUpload = []

  ngOnInit() {
    this.actualizar_informacion(false);
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
      this.actualizar_informacion(false);
    })
    return await modal.present();
  }

  altaGrupoWorkstation(nombre){
    var body = {nombre_equipo_grupo:nombre ,id_sucursal:this.id_sucursal}
    this.api_servicios.alta_Grupo_workstation(body).subscribe(resp =>{
      this.actualizar_informacion(false);
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
      this.actualizar_informacion(false);
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

  actualizar_informacion(loading){
    this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(data => {
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
      for (let index = 0; index < this.sucursal.planos.length; index++) {
        // this.sucursal.planos[index].url_imagen_plano = 1
        // this.sucursal[index] = this.sucursal[index].url_imagen_plano
        Object.defineProperty(this.sucursal.planos[index],'name',{value:this.sucursal.planos[index].url_imagen_plano.slice(27)});

      }
      console.log('sucursal: ', this.sucursal)
      if(loading){
        this.loadingController.dismiss();
      }

    }), (error => {
      if(loading){
        this.loadingController.dismiss();
      }
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
      console.log('Grupo1', data.result)
      var flag = 0
      var array = []
      var i = 0
      var first = true
      if(data.result != undefined){
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
        for( let grupoEquipo of this.grupoWorkStation){
          grupoEquipo.equipos.sort(function (a, b) {
            if (a.nombre_equipo > b.nombre_equipo) {
              return 1;
            }
            if (a.nombre_equipo < b.nombre_equipo) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }
      }

      

    })
    
  }
  openPdf(url){
    window.open(url)
  }
  agregar_plano(){
    document.getElementById('inputUploadFile').click()
    // this.imageCompress.uploadFile().then(({image, orientation}) => {
    //   console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
    //   this.imageCompress.compressFile(image, orientation, 100, 100).then(
    //     result => {
    //       // console.log(result);
    //       this.imagen[0] = {url: result}
    //       // console.log('rodri1', this.imagen[0]);
    //       // console.log('rodri2', this.sucursal.sucursal[0].id_sucursal)
    //       this.subirPlano(this.imagen);
    //     }
    //   )
    // });
  }


  showFile(files: FileList){
    if(files.length > 0){
      for (const file in files){
        var val = files[file].name;
        var result =  this.filesToUpload.filter(file => file.name == val)
        if(result.length == 0){
          this.filesToUpload.push(files[file]);
          
        }else{
          alert('Ya existe: '+ val)
        }
      }
      this.filesToUpload.splice(-2,2)
      this.uploadFile(this.filesToUpload)
      this.filesToUpload = []
      val = null
      result = null
      // console.log(this.filesToUpload); 
    }else{
    }

  }
  async uploadFile(files){

    var loader = await this.loadingController.create({ message: "Subiendo Archivos" });
    loader.present()
    var err = 0
    this.disabled = true

    for (let index = 0; index < files.length; index++) {

        const formData: FormData = new FormData();
        formData.append('file', files[index], files[index].name)
        formData.append('id_sucursal', this.sucursal.sucursal[0].id_sucursal)
        // {id_sucursal:this.sucursal.sucursal[0].id_sucursal,
        this.api_sucursales.upload('/planos/crear',formData).then(resp =>{
          console.log(resp)
          this.sucursal.planos =[]
          this.actualizar_informacion(true)
        }).catch(error =>{
          this.loadingController.dismiss();
          console.log('Error al subir el plano ', error);
          alert('El plano no se subio')
        })
    }
    this.disabled = false
    // return err
  }


  

  // async subirPlano(imagen){
  //   this.loading = await this.loadingController.create({
  //     message: 'Por favor espere.'
  //   });
    
  //   await this.loading.present();
  //   if (this.imagen.length > 0){
  //     this.object = {id_sucursal:this.sucursal.sucursal[0].id_sucursal, imagen: this.imagen[0].url}
  //     // console.log('LA IMAGEN PUTO',this.imagen[0]);
  //     // console.log('request al sv: ', this.object)
  //     this.api_sucursales.subir_planos(this.object).subscribe(data =>{
  //       console.log('resp sv img: ',data)
  //       this.actualizar_informacion();
  //       this.loading.dismiss();
  //     }, (error =>{
  //       this.loading.dismiss();
  //       console.log('Error al subir el plano ', error);
  //       alert('El plano no se subio')
  //     }))
  //   } else {
  //     this.loading.dismiss();
  //     console.log('No se ha seleccionado ningun plano')
  //   }
  // }
  
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
      for (let index = 0; index < this.sucursal.planos.length; index++) {
        // this.sucursal.planos[index].url_imagen_plano = 1
        // this.sucursal[index] = this.sucursal[index].url_imagen_plano
        Object.defineProperty(this.sucursal.planos[index],'name',{value:this.sucursal.planos[index].url_imagen_plano.slice(27)});

      }
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

Imprimir(){
  this.api_servicios.getZpl({base: this.sucursal.sucursal[0].codigo_qr}).toPromise().then((resp:any) =>{
    console.log(resp.codigo)
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h3>' + resp.codigo + '</h3>');
    // mywindow.document.write(document.getElementById('divContenido').innerHTML);
    mywindow.document.write('</body></html>');
  
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
  
    mywindow.print();
    // mywindow.close();
  })

}

imprimirQrAllWorkstations(){
  var qrs = []
  // console.log(this.grupoWorkStation)
  this.grupoWorkStation.forEach(WorkStation => {
    WorkStation.equipos.forEach(equipo => {
      qrs.push(equipo.codigo_qr_equipo)
    });
  });
  console.log(qrs)
  this.imprimir(qrs)
}

imprimirQrThisWorkstation(grupoEquipo){
  var qrs = []
  // console.log(grupoEquipo)
  grupoEquipo.equipos.forEach(equipo => {
    qrs.push(equipo.codigo_qr_equipo)
  });
  console.log(qrs)
  this.imprimir(qrs)
}

imprimirQr(qr){
  var qrs = []
  console.log(qr)
  qrs.push(qr.codigo_qr_equipo)

  this.imprimir(qrs)
}

imprimirQrSucursal(){
  var qrs = []
  qrs.push(this.sucursal.sucursal[0].codigo_qr)
  this.imprimir(qrs)
}

imprimirAllQrSucursal(){
  var qrs = []
  qrs.push(this.sucursal.sucursal[0].codigo_qr)
  this.grupoWorkStation.forEach(WorkStation => {
    WorkStation.equipos.forEach(equipo => {
      qrs.push(equipo.codigo_qr_equipo)
    });
  });
  // console.log(qrs)
  this.imprimir(qrs)
}

imprimir(qrs){
  var mywindow = window.open('', 'PRINT', 'width=21,5cm');

  mywindow.document.write('<html><head><title>' + document.title  + '</title>');
  mywindow.document.write('</head><body>');
  for (let index = 0; index < qrs.length; index++) {
    // mywindow.document.write('<div style="margin: 0.5cm ;padding: 0.5cm; border-style: solid; border-width: 1px; border-color: rgb(97, 97, 97);height: 4cm; width: 4cm;">');
    mywindow.document.write('<img style="margin: 0.2cm ;padding-left: 0.52cm;padding-top: 0;padding-bottom: 0.52cm; padding-right: 0.52cm; height: 5cm; width: 5cm; border-style: solid; border-width: 1px; border-color: rgb(97, 97, 97);" src="' + qrs[index] + '">');
    // mywindow.document.write('</div>');
    // mywindow.document.write('<img style="height: 6cm; width: 6cm; border-style: solid; border-width: 1px; border-color: rgb(97, 97, 97);" src="' + qrs[index] + '">');


  }
  // mywindow.document.write(document.getElementById('divContenido').innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  // mywindow.close();


}

}

6