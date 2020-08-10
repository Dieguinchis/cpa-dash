import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerClientePageRoutingModule } from './ver-cliente-routing.module';

import { VerClientePage } from './ver-cliente.page';
import { NgxImageCompressService } from 'ngx-image-compress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerClientePageRoutingModule
  ],
  providers: [NgxImageCompressService],
  declarations: [VerClientePage]
})
export class VerClientePageModule {}
