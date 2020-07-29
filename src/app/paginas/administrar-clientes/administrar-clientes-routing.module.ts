import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarClientesPage } from './administrar-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarClientesPageRoutingModule {}
