import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarServiciosPageRoutingModule } from './administrar-servicios-routing.module';

import { AdministrarServiciosPage } from './administrar-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarServiciosPageRoutingModule
  ],
  declarations: [AdministrarServiciosPage]
})
export class AdministrarServiciosPageModule {}
