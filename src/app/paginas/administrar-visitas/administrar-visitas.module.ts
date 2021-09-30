import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarVisitasPageRoutingModule } from './administrar-visitas-routing.module';

import { AdministrarVisitasPage } from './administrar-visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarVisitasPageRoutingModule
  ],
  declarations: [AdministrarVisitasPage]
})
export class AdministrarVisitasPageModule {}
