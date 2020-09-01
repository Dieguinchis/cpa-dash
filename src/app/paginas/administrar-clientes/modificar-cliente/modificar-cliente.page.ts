import { Component, OnInit } from '@angular/core';
import { ApiClientesService } from '../servicios/api-clientes.service'
import { NavParams, ModalController } from '@ionic/angular';

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

  public objeto: any;

  constructor(private api_clientes: ApiClientesService, private navParams: NavParams, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.api_clientes.informacion_cliente(this.id_cliente).subscribe(data => {
      this.cliente = data;
      this.cliente = this.cliente.result;
      this.razon_social = this.cliente.clienteDatos[0].razon_social_cliente;
      this.email = this.cliente.clienteDatos[0].email;
      this.telefono = this.cliente.clienteDatos[0].telefono;
      this.direccion = this.cliente.clienteDatos[0].direccion;
    }), (error =>
      console.log(error))
  }

  modificar_cliente(){
    this.objeto = {id_cliente: this.id_cliente, razon_social_cliente: this.razon_social,
    direccion: this.direccion, telefono: this.direccion, email: this.email}
    console.log(this.objeto);
    this.api_clientes.modificar_cliente(this.objeto).subscribe(data => {
      console.log(data);
      this.modalCtrl.dismiss({
        'dismissed': true
      });}, (error =>{
      console.log(error)}))
  }

}
