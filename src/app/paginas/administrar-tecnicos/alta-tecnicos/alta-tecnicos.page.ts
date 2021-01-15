import { Component, OnInit } from '@angular/core';
import { ServicioTecnicosService } from '../servicios/servicio-tecnicos.service'
import { ModalController, NavParams } from '@ionic/angular';

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
  usuario: any;
  password: any;
  newuser = true
  id:any

  constructor(private api_tecnicos: ServicioTecnicosService, public modalCtrl: ModalController, public navParams: NavParams) { }

  async ngOnInit() {
    var data = await this.navParams.get('tecnico')
    // id_tecnico,nombre_tecnico, apellido_tecnico, dni, email_tecnico, telefono_tecnico, user_tecnico, clave
    if(data != undefined || data != null){
      this.nombre = data.nombre_tecnico
      this.apellido= data.apellido_tecnico
      this.dni= data.dni
      this.telefono= data.telefono_tecnico
      this.email= data.email_tecnico
      this.usuario= data.user_tecnico
      this.password= null
      this.newuser = false
      this.id = data.id_tecnico
    }

  }

  alta_tecnico(){
    console.log(this.usuario)
    this.api_tecnicos.alta_tecnico({nombre_tecnico: this.nombre,
                                  apellido_tecnico: this.apellido,
                                  dni: this.dni,
                                  telefono: this.telefono,
                                  email: this.email,
                                  user: this.usuario,
                                  clave: this.password}).subscribe(data => {
                                    console.log(data)
                                    location.reload();
                                  }), (error =>
                                    console.log(error))
  }

  modificar_tecnico(){
    console.log(this.usuario)
    // id_tecnico,nombre_tecnico, apellido_tecnico, dni, email_tecnico, telefono_tecnico, user_tecnico, clave
    this.api_tecnicos.modificar_tecnico({id_tecnico:this.id,
                                  nombre_tecnico: this.nombre,
                                  apellido_tecnico: this.apellido,
                                  dni: this.dni,
                                  email_tecnico: this.email,
                                  telefono_tecnico: this.telefono,
                                  user_tecnico: this.usuario,
                                  clave: this.password}
                                  ).subscribe(data => {
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
