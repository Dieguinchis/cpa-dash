import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPrincipalPage } from './menu-principal.page';

const routes: Routes = [
  {
    path: 'menu-principal',
    component: MenuPrincipalPage,
    children: [
     {
      path: 'inicio',
      loadChildren: () => import('../paginas/inicio/inicio.module').then(m => m.InicioPageModule)
     },
     {
       path: '',
       redirectTo: '/menu-inferior/inicio',
       pathMatch: 'full'
     },
    {
      path: 'administrar-clientes',
      loadChildren: () => import('../paginas/administrar-clientes/administrar-clientes.module').then( m => m.AdministrarClientesPageModule)
    },
    {
      path: 'programar-visita',
      loadChildren: () => import('../paginas/programar-visita/programar-visita.module').then( m => m.ProgramarVisitaPageModule)
    },
    {
      path: 'ver-cliente/:id_cliente',
      loadChildren: () => import('../paginas/administrar-clientes/ver-cliente/ver-cliente.module').then( m => m.VerClientePageModule)
    },
    {
      path: 'alta-cliente',
      loadChildren: () => import('../paginas/alta-cliente/alta-cliente.module').then( m => m.AltaClientePageModule)
    },
    {
      path: 'administrar-servicios',
      loadChildren: () => import('../paginas/administrar-servicios/administrar-servicios.module').then( m => m.AdministrarServiciosPageModule)
    },
    {
      path: 'administrar-tecnicos',
      loadChildren: () => import('../paginas/administrar-tecnicos/administrar-tecnicos.module').then( m => m.AdministrarTecnicosPageModule)
    }  
    ]
  },
  {
    path: '',
    redirectTo: '/menu-principal/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPrincipalPageRoutingModule {}
