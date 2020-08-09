import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerSucursalPage } from './ver-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: VerSucursalPage
  },
  {
    path: 'alta-workstation',
    loadChildren: () => import('./alta-workstation/alta-workstation.module').then( m => m.AltaWorkstationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerSucursalPageRoutingModule {}
