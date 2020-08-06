import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaTecnicosPageRoutingModule } from './alta-tecnicos-routing.module';

import { AltaTecnicosPage } from './alta-tecnicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaTecnicosPageRoutingModule
  ],
  declarations: [AltaTecnicosPage]
})
export class AltaTecnicosPageModule {}
