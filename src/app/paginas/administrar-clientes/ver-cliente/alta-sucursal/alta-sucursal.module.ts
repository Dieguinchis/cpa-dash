import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaSucursalPageRoutingModule } from './alta-sucursal-routing.module';

import { AltaSucursalPage } from './alta-sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaSucursalPageRoutingModule
  ],
  declarations: [AltaSucursalPage]
})
export class AltaSucursalPageModule {}
