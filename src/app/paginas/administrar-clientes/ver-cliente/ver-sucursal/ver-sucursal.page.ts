import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ApiClientesService } from '../../servicios/api-clientes.service'

@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.page.html',
  styleUrls: ['./ver-sucursal.page.scss'],
})
export class VerSucursalPage implements OnInit {

  constructor(private navParams: NavParams, private api_sucursales: ApiClientesService) { }

  public id_sucursal = this.navParams.get('id_sucursal');
  public sucursal: any;
  public QR

  ngOnInit() {
    this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(data => {
      this.sucursal = data;
      this.sucursal = this.sucursal.result;
      console.log(this.sucursal.sucursal[0].codigo_qr)
    }), (error => {
      console.log(error)
    })
  }

}
