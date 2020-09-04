import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarVisitaPage } from './modificar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarVisitaPageRoutingModule {}
