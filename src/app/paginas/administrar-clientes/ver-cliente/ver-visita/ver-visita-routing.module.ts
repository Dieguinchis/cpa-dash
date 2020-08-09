import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerVisitaPage } from './ver-visita.page';

const routes: Routes = [
  {
    path: '',
    component: VerVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerVisitaPageRoutingModule {}
