import { Component, OnInit } from '@angular/core';
import { ApiClientesService } from '../servicios/api-clientes.service'
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {

  public cliente: any;
  public id_cliente = this.navParams.get('id_cliente');

  public razon_social;
  public email;
  public telefono;
  public direccion;
  public logo;
  public estado;

  public objeto: any;

  constructor(
    public loadingController: LoadingController,
    private api_clientes: ApiClientesService,
    private navParams: NavParams,
    public modalCtrl: ModalController,
    private imageCompress: NgxImageCompressService
  ) { }

  ngOnInit() {
    this.api_clientes.informacion_cliente(this.id_cliente).subscribe(data => {
      this.cliente = data;
      this.cliente = this.cliente.result;
      this.razon_social = this.cliente.clienteDatos[0].razon_social_cliente;
      this.email = this.cliente.clienteDatos[0].email;
      this.telefono = this.cliente.clienteDatos[0].telefono;
      this.direccion = this.cliente.clienteDatos[0].direccion;
      this.logo = this.cliente.clienteDatos[0].logo_cliente;
      this.estado = this.cliente.clienteDatos[0].estado;
      console.log(this.cliente);
    }), (error =>
      console.log(error))
  }

  modificar_cliente() {
    this.objeto = {
      id_cliente: this.id_cliente,
      razon_social_cliente: this.razon_social,
      direccion: this.direccion,
      telefono: this.telefono,
      email: this.email,
      estado: this.estado
    };

    console.log(this.objeto);

    this.api_clientes.modificar_cliente(this.objeto).subscribe(data => {
      if (this.logo) {
        this.api_clientes.subir_logo_cliente({ id_cliente: this.id_cliente, logo: this.logo }).subscribe(response => {
          this.modalCtrl.dismiss({
            'dismissed': true
          })
        })
      } else {
        this.modalCtrl.dismiss({
          'dismissed': true
        })
      }
    }, (error => {
      console.log(error)
    }))
  }

  async agregarLogo() {
    this.imageCompress.uploadFile().then(async ({ image, orientation }) => {
      const loading = await this.loadingController.create({
        message: 'Subiendo img',
      });
      await loading.present();
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          console.log(result);
          this.logo = result;
          this.api_clientes.subir_logo_cliente({ id_cliente: this.id_cliente, logo: this.logo }).subscribe(response => {
            this.loadingController.dismiss()
          }), (error => {
            console.log(error)
            this.loadingController.dismiss()
          })
        }
      )
    });
  }

  async deleteLogo() {
    const loading = await this.loadingController.create({
      message: 'Eliminando img',
    });
    await loading.present();
    this.api_clientes.subir_logo_cliente({ id_cliente: this.id_cliente, logo: null }).subscribe(response => {
      this.ngOnInit()
      this.loadingController.dismiss()
    }), (error => {
      console.log(error)
      this.loadingController.dismiss()
    })
  }
}
