import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramarVisitaPageRoutingModule } from './programar-visita-routing.module';

import { ProgramarVisitaPage } from './programar-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramarVisitaPageRoutingModule
  ],
  declarations: [ProgramarVisitaPage]
})
export class ProgramarVisitaPageModule {}
