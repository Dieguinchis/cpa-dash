import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaWorkstationPage } from './alta-workstation.page';

const routes: Routes = [
  {
    path: '',
    component: AltaWorkstationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaWorkstationPageRoutingModule {}
