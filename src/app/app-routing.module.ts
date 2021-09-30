import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuardsGuard } from "./guards/login-guards.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule),
    canActivate: [LoginGuardsGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'administrar-visitas',
    loadChildren: () => import('./paginas/administrar-visitas/administrar-visitas.module').then( m => m.AdministrarVisitasPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
