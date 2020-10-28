import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaClientePageRoutingModule } from './alta-cliente-routing.module';

import { AltaClientePage } from './alta-cliente.page';
import { NgxImageCompressService } from 'ngx-image-compress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaClientePageRoutingModule
  ],
  providers: [NgxImageCompressService],
  declarations: [AltaClientePage]
})
export class AltaClientePageModule {}
