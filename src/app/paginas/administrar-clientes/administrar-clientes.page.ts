import { Component, OnInit } from '@angular/core';
import { ApiClientesService } from './servicios/api-clientes.service'
import { AlertController, ModalController } from '@ionic/angular';
import { ModificarClientePage } from './modificar-cliente/modificar-cliente.page'

@Component({
  selector: 'app-administrar-clientes',
  templateUrl: './administrar-clientes.page.html',
  styleUrls: ['./administrar-clientes.page.scss'],
})
export class AdministrarClientesPage implements OnInit {

  constructor(private api_clientes: ApiClientesService, private alertController: AlertController, private modalController: ModalController) { }

  clientes: any;

  ngOnInit() {
   this.actualizar_informacion();
  }

  async baja_cliente(id_cliente){
    const alert = await this.alertController.create({
      header: 'Seguro que desea eliminar el cliente?',
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
            this.eliminar_cliente(id_cliente);
          }
        }
      ]
    });
    await alert.present();
  }

  eliminar_cliente(id_cliente){
    this.api_clientes.eliminar_cliente(id_cliente).subscribe(data =>{
      this.actualizar_informacion(), (error =>{
      console.log(error)
      })
    })
  }

  actualizar_informacion(){
    this.api_clientes.listado_clientes().subscribe(data => {
      console.log(data)
      this.clientes = data;
      this.clientes = this.clientes.result;
    }),
    (error => {
      console.log(error)
    })
  }

  async modificar_cliente(id_cliente){
    const modal = await this.modalController.create({
      component: ModificarClientePage,
      componentProps: {
        'id_cliente': id_cliente
      }
    });
    modal.onDidDismiss().then(data =>{
      this.actualizar_informacion();
    })
    return await modal.present();
  }

}
