import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ApiClientesService } from '../../servicios/api-clientes.service'



@Component({
  selector: 'app-ver-visita',
  templateUrl: './ver-visita.page.html',
  styleUrls: ['./ver-visita.page.scss'],
})
export class VerVisitaPage implements OnInit {

  public id_visita = this.navParams.get('id_visita');
  public visita: any;

  constructor(private navParams: NavParams, private api_visitas: ApiClientesService) { }

  

  ngOnInit() {
    
    console.log(this.id_visita)
    this.api_visitas.informacion_visita(this.id_visita).subscribe(data => {
      this.visita = data;
      this.visita = this.visita.result;
      console.log(this.visita)
    }), (error => {
      console.log(error)
    })
  }

}
