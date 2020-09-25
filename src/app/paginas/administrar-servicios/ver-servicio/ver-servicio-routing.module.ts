import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerServicioPage } from './ver-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: VerServicioPage
  },
  {
    path: 'crear-producto',
    loadChildren: () => import('./crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerServicioPageRoutingModule {}
