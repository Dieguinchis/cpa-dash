import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaWorkstationPageRoutingModule } from './alta-workstation-routing.module';

import { AltaWorkstationPage } from './alta-workstation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaWorkstationPageRoutingModule
  ],
  declarations: [AltaWorkstationPage]
})
export class AltaWorkstationPageModule {}
