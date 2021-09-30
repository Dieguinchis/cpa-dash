import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerVisitaPageRoutingModule } from './ver-visita-routing.module';

import { VerVisitaPage } from './ver-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerVisitaPageRoutingModule,
  ],
  declarations: [VerVisitaPage]
})
export class VerVisitaPageModule {}
