import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerClientePage } from './ver-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: VerClientePage
  },
  {
    path: 'alta-sucursal',
    loadChildren: () => import('./alta-sucursal/alta-sucursal.module').then( m => m.AltaSucursalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerClientePageRoutingModule {}
