import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ApiClientesService } from '../../servicios/api-clientes.service'
import { AltaWorkstationPage } from './alta-workstation/alta-workstation.page'
import { LoadingController } from "@ionic/angular";
import { NgxImageCompressService } from "ngx-image-compress";
import { ApiServiciosService } from '../../../administrar-servicios/servicios/api-servicios.service'
import { element } from 'protractor';
import { ApiVisitasService } from 'src/app/paginas/programar-visita/servicios/api-visitas.service';
import { type } from 'os';


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
              private alertController:AlertController,
              private api_visitas: ApiVisitasService) { }

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
  public qrsToPrint = []
  public showDeleteQrSucursal = {show:false,count:0}
  public showDeleteQr = [];
  public loadingEquipos = true;
  public productos;

  ngOnInit() {
    this.actualizar_informacion(false);
  }


  async altaWorkstation(equipo_grupo,j){
    const modal = await this.modalController.create({
      component: AltaWorkstationPage,
      cssClass: 'modal-chiquito',
      componentProps: {
        'id_sucursal': this.id_sucursal,
        equipo_grupo:equipo_grupo
      }
    });
    modal.onDidDismiss().then((data:any) =>{
      this.actualizar_informacion(false);
      // console.log(data)
      // this.grupoWorkStation[j].equipos.push(data.data)

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
            this.altaGrupoWorkstation(input.nombre);
            this.actualizar_informacion(true);
          }
        }
      ]
    });
    await alert.present();
  }

  async borrar_equipo(equipo,j,i){

    const alerta = await this.alertController.create({
      header: 'Eliminar ' + equipo.nombre_equipo,
      message: 'Estas seguro que deseas eliminar ' + equipo.nombre_equipo,
      buttons: [
        'Cancelar',
        {
          text:'Borrar',
          handler: async() =>{
            this.loading = await this.loadingController.create({
              message: 'Eliminado, Por favor espere.'
            });
            this.loading.present()
            // console.warn(this.grupoWorkStation[j].equipos[i])
            // this.loadingController.dismiss()
            this.api_sucursales.borrar_equipo(equipo.id_equipo).subscribe(data => {
              // console.log(data, id_equipo)
              // this.actualizar_informacion(false);
              this.grupoWorkStation[j].equipos.splice(i,1)
              this.loadingController.dismiss()
        
            }), (error => {
              this.loadingController.dismiss()
              alert('Ocurrio un error al eliminar, por favor intente nuevamente')
              console.log(error)
            })
          }
        }
      ]
    });
  
    await alerta.present();

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

  prueba(algo){
    console.log(algo)
  }

  actualizar_informacion(loading){
    this.api_sucursales.listado_productosServicio(20).subscribe((resp:any)=>{
      console.log(resp)
      this.productos = resp.result
    })
    this.loadingEquipos = true
    this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(data => {
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
      console.warn(this.sucursal)
      for (let index = 0; index < this.sucursal.planos.length; index++) {
        // this.sucursal.planos[index].url_imagen_plano = 1
        // this.sucursal[index] = this.sucursal[index].url_imagen_plano
        Object.defineProperty(this.sucursal.planos[index],'name',{value:this.sucursal.planos[index].url_imagen_plano.slice(27)});

      }
      console.log('sucursal: ', this.sucursal);
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
    this.api_sucursales.listado_grupoWorkstations(this.id_sucursal).subscribe((data:any) =>{
      console.log('Grupo1',  data.result)
      var flag = 0
      var array = []
      var i = 0
      var first = true
      if(data.result != undefined){
        data.result.forEach((element) => {
          if (element.zona == element.nombre_equipo) {
            element.nombre = element.nombre_equipo +  ' - ' + element.nro_equipo;
          }else{
            element.nombre = element.nombre_equipo +  ' - ' + element.zona + ' - ' + element.nro_equipo;
          }
          if(element.id_equipo_grupo == flag){
            // console.log(element.id_equipo_grupo, ' ' ,flag)
            this.showDeleteQr[i].push({show: false, count:0})
            if (element.producto_predeterminado){
              const product = this.productos.find(producto => producto.id_producto == element.producto_predeterminado)

              element.producto_predeterminado_nombre = product?.nombre_producto + ' - '+ product?.tipo_producto;
            }
            array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio, producto_predeterminado:element.producto_predeterminado, producto_predeterminado_nombre:element.producto_predeterminado_nombre, zona:element.zona, nro_equipo:element.nro_equipo, nombre: element.nombre})
            first = false
          }else{
            if(!first){
              i++
            }
            flag = element.id_equipo_grupo;
            console.log('element?',element)
            array.push({nombre_equipo_grupo:(element.nombre_equipo_grupo?element.nombre_equipo_grupo:null),id_equipo_grupo:(element.id_equipo_grupo?element.id_equipo_grupo:null),equipos:[], plano:this.sucursal?.planos.find(plano => plano.id_plano == (element.id_plano?element.id_plano:null))})
            this.showDeleteQr.push([])
            if (element.producto_predeterminado){
              const product = this.productos.find(producto => producto.id_producto == element.producto_predeterminado);

              element.producto_predeterminado_nombre = product?.nombre_producto + ' - '+ product?.tipo_producto;
            }
            array[i].equipos.push({id_equipo: element.id_equipo, id_servicio:element.id_servicio,id_sucursal:element.id_sucursal, nombre_equipo:element.nombre_equipo,codigo_qr_equipo:element.codigo_qr_equipo,estado_servicio:element.estado_servicio,nombre_servicio:element.nombre_servicio, producto_predeterminado:element.producto_predeterminado, producto_predeterminado_nombre:element.producto_predeterminado_nombre,zona:element.zona, nro_equipo:element.nro_equipo, nombre: element.nombre})
            this.showDeleteQr[i].push({show: false, count:0})
            first = false
          }
        });
        console.log(this.showDeleteQr)
        this.grupoWorkStation = array
        console.log('grupo2: ', this.grupoWorkStation)
        for( let grupoEquipo of this.grupoWorkStation){
          grupoEquipo.equipos.sort(function (a, b) {
            var aNoNumber = a.nombre.split(' - ')
            aNoNumber.pop()
            aNoNumber = aNoNumber.join(' - ')
            var bNoNumber = b.nombre.split(' - ')
            bNoNumber.pop()
            bNoNumber = bNoNumber.join(' - ')
            if (aNoNumber > bNoNumber) {
              return 1;
            }
            if (aNoNumber < bNoNumber) {
              return -1;
            }
            if (bNoNumber == aNoNumber) {
              return (a.nro_equipo) - (b.nro_equipo)
            }
            // a must be equal to b
            return 0;
          });
        }
      }
      this.loadingEquipos = false

    })
    // this.api_sucursales.listado_workstations(this.id_sucursal).subscribe(data => {
    //   console.log(data)
    //   this.workstations = data;
    //   this.workstations = this.workstations.result;
    //   console.log(this.workstations)
    // }), (error => {
    //   console.log(error)
    // })
    
    
  }

  async editName(equipo,grupoEquipo) {
    const alert = await this.alertController.create({
      header: 'Modificar',
      inputs:[
        {
          type:'textarea',
          value:equipo.nombre_equipo,
          placeholder:'Nombre'
        },
        {
          type:'textarea',
          value:equipo.zona,
          placeholder:'Zona'
        },
        {
          type:'number',
          value:equipo.nro_equipo,
          placeholder:'Numero'
        }
      ],
      buttons: [
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text:'Guardar',
          handler:(data)=>{
            console.log(data)
            this.loadingController.create({ message: "Guardando Cambios" }).then(async (loader)=>{
              loader.present();
              var newEquipo = JSON.parse(JSON.stringify(equipo))
              newEquipo.nombre_equipo = data[0];
              newEquipo.zona = data[1];
              newEquipo.nro_equipo = data[2];
              newEquipo.nombre = newEquipo.nombre_equipo + ' - ' + newEquipo.zona + ' - ' + newEquipo.nro_equipo;
              console.log("EQUIPO",equipo)
              if (grupoEquipo.equipos.some(equip => (equip.nro_equipo == newEquipo.nro_equipo) && (equip.zona == newEquipo.zona))) {
                const alert = await this.alertController.create({
                  header: 'Error',
                  message: 'Ya existe un equipo con ese numero en la zona.',
                  buttons: ['OK']
                });
              
                await alert.present();
                loader.dismiss();
              }else{
                this.api_visitas.actualizar_equipo(newEquipo).then((resp: any) =>{
                  equipo.nombre_equipo = data[0];
                  equipo.zona = data[1];
                  equipo.nro_equipo = data[2];
                  equipo.nombre = equipo.nombre_equipo + ' - ' + equipo.zona + ' - ' + equipo.nro_equipo;
                  loader.dismiss();
                  console.log(resp)
                }).catch(err =>{
                  console.log(err);
                  loader.dismiss();
                })
              }
            });
          }
        }
      ]
    });
  
    await alert.present();
  }

  async actualizarEquipo(equipo){
    const loading = await this.loadingController.create({
      message: 'Actualizando',
    });
    await loading.present();
    this.api_visitas.actualizar_equipo(equipo).then((resp: any) =>{
      loading.dismiss();
      equipo.codigo_qr_equipo = resp.equipoCreado.url;
      console.log(equipo);
      console.log(resp);
      equipo.actualizado = true;  
    }).catch(err =>{
      console.log(err);
      loading.dismiss();
    })
  }

  openPdf(url){
    window.open(url)
  }
  agregar_plano(){
    document.getElementById('inputUploadFile').click();
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
      console.log('sucursal: ', this.sucursal);
      this.loadingController.dismiss();


    }), (error => {
      this.loadingController.dismiss();
      this.modalController.dismiss();
      console.log(error)
    })
  },(error =>{
    this.loading.dismiss();
    console.log('Error al borrar el plano ', error);
    this.loadingController.dismiss();

    alert('Ocurrio un error');
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

addmprimirQr(qr, i, j){
  this.qrsToPrint.push(qr.codigo_qr_equipo)
  this.showDeleteQr[j][i].show = true
  this.showDeleteQr[j][i].count++
}

deleteImprimirQr(qr, i, j){
  var pos = this.qrsToPrint.indexOf(qr.codigo_qr_equipo)
  if(pos != -1){
    this.qrsToPrint.splice(pos,1)
    this.showDeleteQr[j][i].count--
  }
  pos = this.qrsToPrint.indexOf(qr.codigo_qr_equipo)
  if(pos == -1){
    this.showDeleteQr[j][i].show = false
  }}

addImprimirQrSucursal(){
  this.qrsToPrint.push(this.sucursal.sucursal[0].codigo_qr)
  this.showDeleteQrSucursal.show = true
  this.showDeleteQrSucursal.count++
}

deleteImprimirQrSucursal(){
  var pos = this.qrsToPrint.indexOf(this.sucursal.sucursal[0].codigo_qr)
  if(pos != -1){
    this.qrsToPrint.splice(pos,1)
    this.showDeleteQrSucursal.count--

  }
  pos = this.qrsToPrint.indexOf(this.sucursal.sucursal[0].codigo_qr)
  if(pos == -1){
    this.showDeleteQrSucursal.show = false
  }

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

printSelect(){
  this.imprimir(this.qrsToPrint)
}

deletePrintSelect(){
  this.showDeleteQrSucursal.count = 0
  this.showDeleteQrSucursal.show = false
  this.showDeleteQr.forEach(element =>{
    element.forEach(element2 => {
      element2.show = false
      element2.count = 0
    });
  })

  this.qrsToPrint = []
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

test($event) {
  console.warn($event)
  // window.open('http://192.168.0.71:3000/getZip')
}

descargar(){

}
descargarSucursal(){
  // console.warn(1)
  var link = document.createElement("a");
  link.download = this.sucursal.sucursal[0].id_sucursal + ".png";
  link.href = "http://192.168.0.71:3000/getfile/sucursales/"+this.sucursal.sucursal[0].id_sucursal ;
  link.click();
}

descargarQrEquipo(equipo){
  // console.warn(equipo)
  // console.warn(equipo.id_equipo)
  var link = document.createElement("a");
  link.download = equipo.id_equipo + ".png";
  link.href = "http://192.168.0.71:3000/getfile/equipos/"+equipo.id_equipo;
  link.click();
}

descargarQrThisWorkstation(grupoEquipo){
  // console.warn(grupoEquipo)
  var ids = null
  for (let index = 0; index < grupoEquipo.equipos.length; index++) {
    const element = grupoEquipo.equipos[index];
    if(index == 0){
      ids = (element.id_equipo.toString())
    }else{
      ids = ids + "," + (element.id_equipo.toString())
    }
  }
  var link = document.createElement("a");
  link.download = "qrs.png";
  link.href = "http://192.168.0.71:3000/getZip?type=equipos&name="+grupoEquipo.nombre_equipo_grupo+"&data="+ids;
  link.click();
}

descargarAllQrSucursal(){
  var data = []
  var ids = null
  data.push(this.sucursal.sucursal[0].id_sucursal)
  this.grupoWorkStation.forEach(WorkStation => {
    WorkStation.equipos.forEach(equipo => {
      data.push(equipo.id_equipo)
    });
  });
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(index == 0){
      ids = (element.toString())
    }else{
      ids = ids + "," + (element.toString())
    }
  }
  var link = document.createElement("a");
  link.download = "qrs.png";
  link.href = "http://192.168.0.71:3000/getZip?type=all&name="+this.sucursal.sucursal[0].razon_social_sucursal+"&data="+ids;
  link.click();

}

descargarQrAllWorkstations(){
  var data = []
  var ids = null
  this.grupoWorkStation.forEach(WorkStation => {
    WorkStation.equipos.forEach(equipo => {
      data.push(equipo.id_equipo)
    });
  });
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(index == 0){
      ids = (element.toString())
    }else{
      ids = ids + "," + (element.toString())
    }
  }
  var link = document.createElement("a");
  link.download = "qrs.png";
  link.href = "http://192.168.0.71:3000/getZip?type=equipos&name=equipos_"+this.sucursal.sucursal[0].razon_social_sucursal+"&data="+ids;
  link.click();
}


  async elegirProducto(equipo){
    var input = [];
    for (let producto of this.productos){
      if (equipo.producto_predeterminado == producto.id_producto) {
        input.push({
          label:producto.nombre_producto + ' - ' + producto.tipo_producto,
          value:producto.id_producto,
          checked:true,
          type:"radio"
        })
      }else{
        input.push({
          label:producto.nombre_producto + ' - ' + producto.tipo_producto,
          value:producto.id_producto,
          type:"radio"
        })
      }

    }
    input.push({
        label:'Sin Producto',
        value:null,
        type:"radio"
    })
    console.log(input)
    
    const alert = await this.alertController.create({
      subHeader: equipo.nombre_equipo,
      header:'Producto predeterminado',
      inputs: input,
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            var equipoAux = JSON.parse(JSON.stringify(equipo))
            equipo.producto_predeterminado = data;
            equipo.estado_servicio = undefined;
            equipo.modificable = undefined;
            equipo.nombre_equipo_grupo = undefined;
            equipo.nombre_servicio = undefined;
            equipo.producto = undefined;
            equipo.qr = undefined;
            this.api_visitas.actualizar_equipo(equipo).then(resp =>{
              console.log(resp);
              var aux ;
              aux = resp;
              aux = aux.equipoCreado.retorno;
              if (aux.producto_predeterminado) {
                equipo.nombre_servicio = equipoAux.nombre_servicio;
                equipo.producto_predeterminado = this.productos.find(producto => producto.id_producto == aux.producto_predeterminado).id_producto;
                equipo.producto_predeterminado_nombre = this.productos.find(producto => producto.id_producto == aux.producto_predeterminado).nombre_producto +' - '+ this.productos.find(producto => producto.id_producto == aux.producto_predeterminado).tipo_producto;  
              }else{
                equipo.nombre_servicio = equipoAux.nombre_servicio;
                equipo.producto_predeterminado = null;
                equipo.producto_predeterminado_nombre = null;
  
              }
              // this.actualizar_informacion(false);
            }).catch(err => {
              console.error(err)
            })
          }
        }
    ]
    });
  
    await alert.present();
  }

  async elegirPlano(grupoEquipo){
    var input = [];
    for (let plano of this.sucursal.planos){
      input.push({
        label:plano.name,
        value:plano.id_plano,
        type:"radio"
      });
    }
    input.push({
        label:'Sin Plano',
        value:null,
        type:"radio"
    });
    console.log(input)
    
    const alert = await this.alertController.create({
      subHeader: grupoEquipo.nombre_equipo_grupo,
      header:'Elegir plano',
      inputs: input,
      cssClass: 'wide-alert',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            grupoEquipo.id_plano = data;
            this.api_visitas.setPlano(grupoEquipo).subscribe(resp =>{
              console.log(resp);
              this.actualizar_informacion(false);
            })
          }
        }
    ]
    });
  
    await alert.present();
  }
  async cambiarProductoSector(sector){
    console.log(sector)

    var input = [];
    for (let producto of this.productos){
      input.push({
        label:producto.nombre_producto + ' - ' + producto.tipo_producto,
        value:producto.id_producto,
        type:"radio"
      })
    }
    input.push({
        label:'Sin Producto',
        value:null,
        type:"radio"
    })
    const alert = await this.alertController.create({
      subHeader: sector.nombre_equipo_grupo,
      header:'Producto predeterminado',
      inputs: input,
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            for (let index = 0; index < sector.equipos.length; index++) {
              console.log(index)
              var equipo = sector.equipos[index];
              equipo.producto_predeterminado = data;
              equipo.estado_servicio = undefined;
              equipo.modificable = undefined;
              equipo.nombre_equipo_grupo = undefined;
              equipo.nombre_servicio = undefined;
              equipo.producto = undefined;
              equipo.qr = undefined;
              console.log(equipo)
              this.api_visitas.actualizar_equipo(equipo).then(resp =>{
                console.log(resp);
                var aux ;
                aux = resp;
                aux = aux.equipoCreado.retorno;
                if (aux.producto_predeterminado) {
                  equipo.producto_predeterminado = this.productos.find(producto => producto.id_producto == aux.producto_predeterminado).id_producto;
                  equipo.producto_predeterminado_nombre = this.productos.find(producto => producto.id_producto == aux.producto_predeterminado).nombre_producto +' - '+ this.productos.find(producto => producto.id_producto == aux.producto_predeterminado).tipo_producto; 
                  this.actualizar_informacion(false); 
                }else{
                  equipo.producto_predeterminado = null;
                  equipo.producto_predeterminado_nombre = null;
                  this.actualizar_informacion(false);
                }
              }).catch(err => {
                console.error(err)
              })
            }  
          }
        }
    ]
    });
  
    await alert.present();

  }
}
