import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramarVisitaPage } from './programar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramarVisitaPageRoutingModule {}
