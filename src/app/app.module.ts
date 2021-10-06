import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgxImageCompressService } from 'ngx-image-compress';
import { EditarVisitaComponent } from './modals/editar-visita/editar-visita.component';
import { FormsModule } from '@angular/forms';
import { ModificarProductoComponent } from './paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component';
import { VerServicioVisitaComponent } from './modals/ver-servicio-visita/ver-servicio-visita.component';

@NgModule({
  declarations: [AppComponent,EditarVisitaComponent, ModificarProductoComponent, VerServicioVisitaComponent],
  entryComponents: [EditarVisitaComponent, ModificarProductoComponent, VerServicioVisitaComponent],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    NgxImageCompressService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
