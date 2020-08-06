import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaTecnicosPage } from './alta-tecnicos.page';

const routes: Routes = [
  {
    path: '',
    component: AltaTecnicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaTecnicosPageRoutingModule {}
