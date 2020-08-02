import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.page.html',
  styleUrls: ['./ver-sucursal.page.scss'],
})
export class VerSucursalPage implements OnInit {

  constructor(private navParams: NavParams) { }

  public id_sucursal = this.navParams.get('id_sucursal');

  ngOnInit() {
    console.log(this.id_sucursal)
  }

}
