import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarClientesPage } from './administrar-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarClientesPage
  },
  {
    path: 'modificar-cliente',
    loadChildren: () => import('./modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarClientesPageRoutingModule {}
