import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiClientesService } from '../../servicios/api-clientes.service'

@Component({
  selector: 'app-modificar-sucursal',
  templateUrl: './modificar-sucursal.page.html',
  styleUrls: ['./modificar-sucursal.page.scss'],
})
export class ModificarSucursalPage implements OnInit {

  constructor(private navParams: NavParams, private api: ApiClientesService, private modalCtrl: ModalController) { }

  public id_sucursal = this.navParams.get('id_sucursal');
  public sucursal: any;
  public id_cliente;
  
  public razon_social;
  public email;
  public telefono;
  public direccion;
  public objeto: any;

  ngOnInit() {
    this.api.ver_sucursal(this.id_sucursal).subscribe(data => {
      console.log(data)
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
      this.razon_social = this.sucursal.sucursal[0].razon_social_sucursal;
      this.email = this.sucursal.sucursal[0].email_sucursal;
      this.telefono = this.sucursal.sucursal[0].telefono_sucursal;
      this.direccion = this.sucursal.sucursal[0].direccion_sucursal;
      this.id_cliente = this.sucursal.sucursal[0].id_cliente;
    }, error =>{
      console.log(error)
    })
  }

  modificar_sucursal(){
    this.objeto = {id_cliente: this.id_cliente, id_sucursal: this.id_sucursal, razon_social_sucursal: this.razon_social,
      direccion_sucursal: this.direccion, telefono_sucursal: this.telefono, email_sucursal: this.email}
      console.log(this.objeto);
      this.api.modificar_sucursal(this.objeto).subscribe(data => {
        console.log(data);
        this.modalCtrl.dismiss({
          'dismissed': true
        });}, (error =>{
        console.log(error)}))
  }
}
