import { Component, OnInit } from '@angular/core';
import { ServicioTecnicosService } from '../servicios/servicio-tecnicos.service'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alta-tecnicos',
  templateUrl: './alta-tecnicos.page.html',
  styleUrls: ['./alta-tecnicos.page.scss'],
})
export class AltaTecnicosPage implements OnInit {

  nombre: string;
  apellido: string;
  dni: number;
  telefono: number;
  email: string;

  constructor(private api_tecnicos: ServicioTecnicosService, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  alta_tecnico(){
    this.api_tecnicos.alta_tecnico({nombre_tecnico: this.nombre,
                                  apellido_tecnico: this.apellido,
                                  dni: this.dni,
                                  telefono: this.telefono,
                                  email: this.email}).subscribe(data => {
                                    console.log(data)
                                    location.reload();
                                  }), (error =>
                                    console.log(error))
  }

  cancelar(){
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalCtrl.dismiss({
        'dismissed': true
      });
  }

  

}
