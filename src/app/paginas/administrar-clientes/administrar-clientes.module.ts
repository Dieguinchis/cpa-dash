import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarClientesPageRoutingModule } from './administrar-clientes-routing.module';

import { AdministrarClientesPage } from './administrar-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarClientesPageRoutingModule
  ],
  declarations: [AdministrarClientesPage]
})
export class AdministrarClientesPageModule {}
