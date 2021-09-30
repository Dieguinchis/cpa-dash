import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarVisitasPage } from './administrar-visitas.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarVisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarVisitasPageRoutingModule {}
