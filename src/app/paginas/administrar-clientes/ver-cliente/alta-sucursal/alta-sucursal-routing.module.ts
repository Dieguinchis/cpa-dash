import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaSucursalPage } from './alta-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: AltaSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaSucursalPageRoutingModule {}
