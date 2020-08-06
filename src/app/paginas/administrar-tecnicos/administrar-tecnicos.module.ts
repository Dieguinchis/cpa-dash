import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarTecnicosPageRoutingModule } from './administrar-tecnicos-routing.module';

import { AdministrarTecnicosPage } from './administrar-tecnicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarTecnicosPageRoutingModule
  ],
  declarations: [AdministrarTecnicosPage]
})
export class AdministrarTecnicosPageModule {}
