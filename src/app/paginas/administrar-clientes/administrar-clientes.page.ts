import { Component, OnInit } from '@angular/core';
import { ApiClientesService } from './servicios/api-clientes.service'
@Component({
  selector: 'app-administrar-clientes',
  templateUrl: './administrar-clientes.page.html',
  styleUrls: ['./administrar-clientes.page.scss'],
})
export class AdministrarClientesPage implements OnInit {

  constructor(private api_clientes: ApiClientesService) { }

  clientes: any;

  ngOnInit() {
    this.api_clientes.listado_clientes().subscribe(data => {
      console.log(data)
      this.clientes = data;
      this.clientes = this.clientes.result;
    }),
    (error => {
      console.log(error)
    })
  }

  


}
