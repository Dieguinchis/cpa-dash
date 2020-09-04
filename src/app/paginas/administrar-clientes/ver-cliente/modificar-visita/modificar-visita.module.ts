import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarVisitaPageRoutingModule } from './modificar-visita-routing.module';

import { ModificarVisitaPage } from './modificar-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarVisitaPageRoutingModule
  ],
  declarations: [ModificarVisitaPage]
})
export class ModificarVisitaPageModule {}
