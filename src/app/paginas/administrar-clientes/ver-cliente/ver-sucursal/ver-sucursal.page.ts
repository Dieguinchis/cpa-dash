import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiClientesService } from '../../servicios/api-clientes.service'
import { AltaWorkstationPage } from './alta-workstation/alta-workstation.page'
import { LoadingController } from "@ionic/angular";
import { NgxImageCompressService } from "ngx-image-compress";

@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.page.html',
  styleUrls: ['./ver-sucursal.page.scss'],
})
export class VerSucursalPage implements OnInit {

  constructor(private navParams: NavParams, private api_sucursales: ApiClientesService,
              private modalController: ModalController, private imageCompress: NgxImageCompressService,
              private loadingController: LoadingController) { }

  public id_sucursal = this.navParams.get('id_sucursal');
  public sucursal: any;
  public QR
  public workstations: any;
  public loading;
  imagen = [];

  ngOnInit() {
    this.actualizar_informacion();
  }


  async altaWorkstation(){
    const modal = await this.modalController.create({
      component: AltaWorkstationPage,
      cssClass: 'modal-chiquito',
      componentProps: {
        'id_sucursal': this.id_sucursal
      }
    });
    modal.onDidDismiss().then(data =>{
      this.actualizar_informacion();
    })
    return await modal.present();
  }

  borrar_equipo(id_equipo){
    this.api_sucursales.borrar_equipo(id_equipo).subscribe(data => {
      console.log(data)
      this.actualizar_informacion();
    }), (error => {
      console.log(error)
    })
  }

  actualizar_informacion(){
    this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(data => {
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
    }), (error => {
      console.log(error)
    })
    this.api_sucursales.listado_workstations(this.id_sucursal).subscribe(data => {
      console.log(data)
      this.workstations = data;
      this.workstations = this.workstations.result;
      console.log(this.workstations)
    }), (error => {
      console.log(error)
    })
    
  }

  agregar_plano(){
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          console.log(result);
          this.imagen.push({url: result})
          console.log('rodri1', this.imagen);
          console.log('rodri2', this.sucursal.sucursal[0].id_sucursal)
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
      this.api_sucursales.subir_planos({"id_sucursal": this.sucursal.sucursal[0].id_sucursal, "imagen": this.imagen[0].url}).subscribe(data =>{
        console.log(data)
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

}
