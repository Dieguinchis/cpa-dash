import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarServiciosPage } from './administrar-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarServiciosPage
  },
  {
    path: 'crear-servicio',
    loadChildren: () => import('./crear-servicio/crear-servicio.module').then( m => m.CrearServicioPageModule)
  },
  {
    path: 'ver-servicio',
    loadChildren: () => import('./ver-servicio/ver-servicio.module').then( m => m.VerServicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarServiciosPageRoutingModule {}
