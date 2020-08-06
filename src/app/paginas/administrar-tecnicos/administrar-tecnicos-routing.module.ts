import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarTecnicosPage } from './administrar-tecnicos.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarTecnicosPage
  },
  {
    path: 'alta-tecnicos',
    loadChildren: () => import('./alta-tecnicos/alta-tecnicos.module').then( m => m.AltaTecnicosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarTecnicosPageRoutingModule {}
