(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-estadisticas-estadisticas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estadisticas/estadisticas.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estadisticas/estadisticas.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-col class=\"ion-no-padding\" size=\"1.2\">\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-label position=\"floating\">Desde</ion-label>\n          <ion-datetime min=\"2021-02-15\"  display-format=\"DD.MM.YYYY\" [(ngModel)]=\"fecha_desde\" (ionChange)=\"revisarMenor()\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.2\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Hasta</ion-label>\n          <ion-datetime min=\"2021-02-15\" display-format=\"DD.MM.YYYY\" [(ngModel)]=\"fecha_hasta\" (ionChange)=\"revisarMayor()\"></ion-datetime> \n        </ion-item>     \n      </ion-col>\n      <ion-col size=\"0.7\" class=\"filter-col\">\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">UV</ion-label>\n        <ion-checkbox [(ngModel)]=\"filtro_uv\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"1.25\" class=\"filter-col\">\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">Desratizacion</ion-label>\n        <ion-checkbox [(ngModel)]=\"filtro_desratizacion\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item>\n          <ion-label position=\"floating\">Cliente</ion-label>\n          <ion-select [interfaceOptions]=\"interfaceOption\" (ionChange)=\"changeCliente()\" [(ngModel)]=\"clientesElegidos\" multiple>\n            <ion-select-option *ngFor=\"let cliente of clientes\" [value]=\"cliente\">{{cliente.razon_social_cliente}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item *ngIf=\"clientesElegidos.length == 1\">\n          <ion-label position=\"floating\">Sucursal</ion-label>\n          <ion-select [interfaceOptions]=\"interfaceOption\" (ionChange)=\"changeSucursal()\" [(ngModel)]=\"sucursalesElegidas\" multiple>\n            <ion-select-option *ngFor=\"let sucursal of sucursales\" [value]=\"sucursal\">{{sucursal.razon_social_sucursal}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item *ngIf=\"sucursalesElegidas.length == 1\">\n          <ion-label position=\"floating\">Sector</ion-label>\n          <ion-select [interfaceOptions]=\"interfaceOption\" (ionChange)=\"changeSector(sectoresElegidos[0].id_equipo_grupo)\" [(ngModel)]=\"sectoresElegidos\" multiple>\n            <ion-select-option *ngFor=\"let sector of sectores\" [value]=\"sector\">{{sector.nombre_equipo_grupo}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item *ngIf=\"sectoresElegidos.length == 1\">\n          <ion-label position=\"floating\">Equipo</ion-label>\n          <ion-select (ionChange)=\"equiposChange()\" [interfaceOptions]=\"interfaceOption\" [(ngModel)]=\"equiposElegidos\" multiple>\n            <ion-select-option *ngFor=\"let equipo of equipos\" [value]=\"equipo\">{{equipo.nombre_equipo}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"0.8\">\n        <ion-button (click)=\"buscar()\" expand=\"block\"  shape=\"round\">\n          Buscar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"0.3\" style=\"text-align: center;\">\n        <ion-icon (click)=\"borrarFiltros()\"  style=\"font-size: 24px; cursor: pointer;\" name=\"close\"></ion-icon>\n      </ion-col>\n    </ion-item>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"filtro_desratizacion\">\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n      <ion-item lines=\"none\">\n        <ion-label position=\"fixed\">Productos</ion-label>\n        <ion-select (ionChange)=\"productosChange()\"  [interfaceOptions]=\"interfaceOption\" [(ngModel)]=\"productosFiltrados\" multiple>\n          <ion-select-option *ngFor=\"let producto of productos\" [value]=\"producto.id_producto\">{{producto.nombre_producto}} - {{producto.tipo_producto}}</ion-select-option>\n          <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  #content>\n  <div *ngFor=\"let equipos of respuestas\">\n    <ion-item *ngIf=\"equipos[0]?.length == 3\">\n      <ion-col size=\"1\"><b>Fecha</b></ion-col>\n      <ion-col size=\"1.5\"><b>Cliente</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sucursal</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sector</b></ion-col>\n      <ion-col size=\"1.5\"><b>Workstation</b></ion-col>\n      <ion-col size=\"1.5\"><b>Producto</b></ion-col>\n      <ion-col size=\"1.5\"><b>Estado Puesto</b></ion-col>\n      <ion-col size=\"1.5\"><b>Estado cebo</b></ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"equipos[0]?.length == 4\">\n      <ion-col size=\"1\"><b>Fecha</b></ion-col>\n      <ion-col size=\"1.5\"><b>Cliente</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sucursal</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sector</b></ion-col>\n      <ion-col size=\"1.5\"><b>Workstation</b></ion-col>\n      <ion-col size=\"1.25\"><b>Observacion</b></ion-col>\n      <ion-col size=\"1.25\"><b>Conteo / Saturacion</b></ion-col>\n      <ion-col size=\"1.25\"><b>Encendido</b></ion-col>\n      <ion-col size=\"1.25\"><b>Medicion UV</b></ion-col>\n    </ion-item>\n    <div *ngFor=\"let formularios of equipos\">\n      <ion-item *ngIf=\"formularios.length == 3\">\n        <ion-col size=\"1\">\n          {{formularios[0]?.fecha_visita | date:\"dd/MM/yyyy\"}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.cliente?.razon_social_cliente}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sucursal?.razon_social_sucursal}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sector?.nombre_equipo_grupo}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.nombre_equipo}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.nombre_producto}} - {{formularios[0]?.tipo_producto}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[1]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[2]?.respuesta}}\n        </ion-col>\n      </ion-item>\n      <ion-item *ngIf=\"formularios.length == 4\">\n        <ion-col size=\"1\">\n          {{formularios[0]?.fecha_visita | date:\"dd/MM/yyyy\"}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.cliente?.razon_social_cliente}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sucursal?.razon_social_sucursal}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sector?.nombre_equipo_grupo}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.nombre_equipo}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[0]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[1]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[2]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[3]?.respuesta}}\n        </ion-col>\n      </ion-item>\n    </div>\n  </div>\n\n  <ion-card *ngIf=\"respuestas.length > 0\">\n    <ion-card-header color=\"primary\">\n      <ion-card-title>Resumen</ion-card-title>\n    </ion-card-header>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Captura:</b> {{contadores.capturas}}</ion-label>\n      </ion-col>\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Consumo:</b> {{contadores.consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Intactos:</b> {{contadores.intacto}}</ion-label>\n      </ion-col>\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Nuevos:</b> {{contadores.nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Tapados:</b> {{contadores.tapado}}</ion-label>\n      </ion-col>\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Faltantes:</b> {{contadores.faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"12\">\n        <ion-label><b>Total Mal estado:</b> {{contadores.malEstado}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[0]\">\n      <ion-label ><b>Promedio mediciones UV:</b> {{promedioUV?promedioUV:'No hay mediciones'}}</ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-label><b>Pegamento - Pegamento:</b></ion-label>\n    </ion-item >\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Captura: {{productos[0].captura}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Consumo: {{productos[0].consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Intactos: {{productos[0].intacto}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Nuevos {{productos[0].nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Tapados: {{productos[0].tapado}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Faltantes: {{productos[0].faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\"> \n      <ion-col size=\"12\">\n        <ion-label>Mal estado: {{productos[0].malEstado}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-label><b>Parafinado - Floucoumafen:</b></ion-label>\n    </ion-item >\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Captura: {{productos[1].captura}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Consumo: {{productos[1].consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Intactos: {{productos[1].intacto}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Nuevos {{productos[1].nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Tapados: {{productos[1].tapado}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Faltantes: {{productos[1].faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\"> \n      <ion-col size=\"12\">\n        <ion-label>Mal estado: {{productos[1].malEstado}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-label><b>Parafinado - Bromadiolone:</b></ion-label>\n    </ion-item >\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Captura: {{productos[2].captura}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Consumo: {{productos[2].consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Intactos: {{productos[2].intacto}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Nuevos {{productos[2].nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Tapados: {{productos[2].tapado}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Faltantes: {{productos[2].faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\"> \n      <ion-col size=\"12\">\n        <ion-label>Mal estado: {{productos[2].malEstado}}</ion-label>\n      </ion-col>\n    </ion-item> \n  </ion-card>\n  <ion-button *ngIf=\"respuestas.length > 0\" (click)=\"verPdf()\" expand=\"block\"  shape=\"round\">\n    Ver PDF\n  </ion-button>\n</ion-content>\n\n<ion-fab *ngIf=\"respuestas.length > 0\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"botonBajar()\">\n    <ion-icon name=\"chevron-down-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n");

/***/ }),

/***/ "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts ***!
  \********************************************************************************/
/*! exports provided: ApiClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClientesService", function() { return ApiClientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/version */ "./src/environments/version.ts");




let ApiClientesService = class ApiClientesService {
    constructor(http) {
        this.http = http;
        this.apiDir = "http://192.168.0.71:3000";
        this.requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'version': _environments_version__WEBPACK_IMPORTED_MODULE_3__["version"]
            })
        };
    }
    listado_clientes() {
        return this.http.get(this.apiDir + '/clientes', this.requestOptions);
    }
    informacion_cliente(id) {
        return this.http.get(this.apiDir + '/clientes/id/' + id, this.requestOptions);
    }
    alta_sucursal(datos) {
        return this.http.post(this.apiDir + '/sucursales/crear', datos, this.requestOptions);
    }
    informacion_sucursal(id) {
        return this.http.get(this.apiDir + '/sucursales/id/' + id, this.requestOptions);
    }
    informacion_visita(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = yield this.http.get(this.apiDir + '/visitas/id/' + id, this.requestOptions);
            console.log(this.apiDir + '/visitas/id/' + id, this.requestOptions);
            return data.toPromise();
        });
    }
    listado_workstations(id) {
        return this.http.get(this.apiDir + '/servicios/equipos/sucursal/' + id, this.requestOptions);
    }
    listado_grupoWorkstations(id) {
        return this.http.get(this.apiDir + '/servicios/gruposEquipos/sucursal/' + id, this.requestOptions);
    }
    borrar_equipo(id_equipo) {
        return this.http.post(this.apiDir + '/servicios/eliminarEquipos/' + id_equipo, null, this.requestOptions);
    }
    listado_productosServicio(id_servicio) {
        return this.http.get(this.apiDir + '/productos/idServicio/' + id_servicio, this.requestOptions);
    }
    cambiar_estado_visita(id_visita, estado) {
        console.log(this.apiDir + '/visitas/cambiarEstado', this.requestOptions);
        var params = { id_visita: id_visita, estado: estado };
        return new Promise((resolve, reject) => {
            this.http.post(this.apiDir + '/visitas/cambiarEstado', params, this.requestOptions)
                .subscribe(response => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    eliminar_Grupo_workstation(id_producto) {
        console.log('delete2', id_producto);
        return this.http.post(this.apiDir + '/servicios/eliminarGrupoEquipos/' + id_producto, this.requestOptions);
    }
    subir_planos(parametros) {
        return this.http.post(this.apiDir + '/planos/crear', parametros, this.requestOptions);
    }
    upload(params, bodyP = {}) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiDir + params, bodyP)
                // this.http.post(this.url + params, bodyP,{headers: header})
                .subscribe(response => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    ver_sucursal(id_sucursal) {
        return this.http.get(this.apiDir + '/sucursales/id/' + id_sucursal, this.requestOptions);
    }
    crear_pdf(id_visita) {
        return this.http.post(this.apiDir + '/pdf/create-pdf', id_visita, this.requestOptions);
    }
    ver_pdf(id_visita) {
        return this.http.get(this.apiDir + '/pdf/fetch-pdf/' + id_visita, this.requestOptions);
    }
    modificar_cliente(parametros) {
        return this.http.post(this.apiDir + '/clientes/actualizar', parametros, this.requestOptions);
    }
    subir_logo_cliente(parametros) {
        return this.http.post(this.apiDir + '/clientes/actualizarLogo', parametros, this.requestOptions);
    }
    eliminar_Logo_Cliente(parametros) {
        return this.http.post(this.apiDir + '/clientes/eliminarLogo', parametros, this.requestOptions);
    }
    eliminar_cliente(id_cliente) {
        return this.http.post(this.apiDir + '/clientes/eliminar/' + id_cliente, this.requestOptions);
    }
    eliminar_sucursal(id_sucursal) {
        return this.http.post(this.apiDir + '/sucursales/eliminar/' + id_sucursal, this.requestOptions);
    }
    eliminar_plano(id_plano) {
        return this.http.post(this.apiDir + '/planos/eliminar/' + id_plano, this.requestOptions);
    }
    modificar_sucursal(parametros) {
        return this.http.post(this.apiDir + '/sucursales/actualizar', parametros, this.requestOptions);
    }
    estadisticas(parametros) {
        return this.http.post(this.apiDir + '/clientes/estadisticas/', parametros, this.requestOptions);
    }
};
ApiClientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiClientesService);



/***/ }),

/***/ "./src/app/paginas/estadisticas/estadisticas-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/estadisticas/estadisticas-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EstadisticasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasPageRoutingModule", function() { return EstadisticasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _estadisticas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estadisticas.page */ "./src/app/paginas/estadisticas/estadisticas.page.ts");




const routes = [
    {
        path: '',
        component: _estadisticas_page__WEBPACK_IMPORTED_MODULE_3__["EstadisticasPage"]
    }
];
let EstadisticasPageRoutingModule = class EstadisticasPageRoutingModule {
};
EstadisticasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstadisticasPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/estadisticas/estadisticas.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/estadisticas/estadisticas.module.ts ***!
  \*************************************************************/
/*! exports provided: EstadisticasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasPageModule", function() { return EstadisticasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _estadisticas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estadisticas-routing.module */ "./src/app/paginas/estadisticas/estadisticas-routing.module.ts");
/* harmony import */ var _estadisticas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estadisticas.page */ "./src/app/paginas/estadisticas/estadisticas.page.ts");







let EstadisticasPageModule = class EstadisticasPageModule {
};
EstadisticasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estadisticas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstadisticasPageRoutingModule"]
        ],
        declarations: [_estadisticas_page__WEBPACK_IMPORTED_MODULE_6__["EstadisticasPage"]]
    })
], EstadisticasPageModule);



/***/ }),

/***/ "./src/app/paginas/estadisticas/estadisticas.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/estadisticas/estadisticas.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-col {\n  display: flex;\n  align-items: center;\n}\n\nion-checkbox {\n  min-width: 18px;\n}\n\nion-card {\n  margin-bottom: 30px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9lc3RhZGlzdGljYXMvRDpcXFJlcG9zaXRvcmlvc1xcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxlc3RhZGlzdGljYXNcXGVzdGFkaXN0aWNhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvZXN0YWRpc3RpY2FzL2VzdGFkaXN0aWNhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZXN0YWRpc3RpY2FzL2VzdGFkaXN0aWNhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWNvbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1jaGVja2JveHtcclxuICAgIG1pbi13aWR0aDogMThweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSIsIi5maWx0ZXItY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgbWluLXdpZHRoOiAxOHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/estadisticas/estadisticas.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/estadisticas/estadisticas.page.ts ***!
  \***********************************************************/
/*! exports provided: EstadisticasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasPage", function() { return EstadisticasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _administrar_clientes_servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../administrar-clientes/servicios/api-clientes.service */ "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
/* harmony import */ var _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../programar-visita/servicios/api-visitas.service */ "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");





let EstadisticasPage = class EstadisticasPage {
    constructor(api_clientes, api_visitas, loadingController, alertController) {
        this.api_clientes = api_clientes;
        this.api_visitas = api_visitas;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.clientesElegidos = [];
        this.sucursalesElegidas = [];
        this.sectoresElegidos = [];
        this.equiposElegidos = [];
        this.filtro_desratizacion = true;
        this.filtro_uv = true;
        this.respuestas = [];
        this.contadores = {
            capturas: 0,
            consumo: 0,
            intacto: 0,
            nuevo: 0,
            tapado: 0,
            faltante: 0,
            malEstado: 0
        };
        this.productosFiltrados = [];
        this.productosUtilizados = [];
        this.interfaceOption = {
            cssClass: 'wide-alert',
            buttons: {
                text: 'Todos',
                handler: () => {
                    this.sucursalesElegidas == this.sucursales;
                }
            }
        };
        this.url = "http://192.168.0.71:3000/public/pdfs/informe .pdf";
    }
    ngOnInit() {
        this.actualizar_informacion();
        this.api_clientes.listado_productosServicio(20).subscribe(data => {
            this.productos = data;
            this.productos = this.productos.result;
            console.log(this.productos);
        });
        var dia = ((new Date().getDate() >= 10) ? new Date().getDate() : '0' + new Date().getDate().toString()) + 'T00:00:00-03:00';
        var mes1 = (new Date().getMonth());
        var mes2 = (new Date().getMonth() + 1);
        var year = new Date().getFullYear().toString();
        if (mes1 <= 9) {
            mes1 = '0' + mes1.toString();
        }
        else {
            mes1 = mes1.toString();
        }
        if (mes2 <= 9) {
            mes2 = '0' + mes2.toString();
        }
        else {
            mes2 = mes2.toString();
        }
        this.fecha_desde = year + '-' + mes1 + '-' + dia;
        this.fecha_hasta = year + '-' + mes2 + '-' + dia;
    }
    revisarMenor() {
        if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
            this.fecha_hasta = this.fecha_desde;
        }
    }
    revisarMayor() {
        if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
            this.fecha_desde = this.fecha_hasta;
        }
    }
    botonBajar() {
        this.content.scrollToBottom(300);
    }
    actualizar_informacion() {
        this.api_clientes.listado_clientes().subscribe(data => {
            this.clientes = data;
            this.clientes = this.clientes.result;
            this.clientes.sort(this.ordenarClientes);
        }),
            (error => {
                console.log(error);
            });
    }
    ordenarClientes(a, b) {
        if (a.razon_social_cliente.toLowerCase() > b.razon_social_cliente.toLowerCase()) {
            return 1;
        }
        if (a.razon_social_cliente.toLowerCase() < b.razon_social_cliente.toLowerCase()) {
            return -1;
        }
        return 0;
    }
    changeCliente() {
        this.sucursalesElegidas = [];
        this.sectoresElegidos = [];
        this.equiposElegidos = [];
        if (this.clientesElegidos.includes('all')) {
            this.clientesElegidos = this.clientes;
        }
        console.log(this.clientesElegidos);
        if (this.clientesElegidos.length == 1) {
            this.sucursalesCliente(this.clientesElegidos[0].id_cliente);
        }
    }
    sucursalesCliente(id_cliente) {
        this.api_visitas.informacion_cliente(id_cliente).subscribe(data => {
            this.sucursales = data;
            this.sucursales = this.sucursales.result.sucursales.datosSucursal;
            this.sucursales.sort(this.ordenarSucursales);
            if (this.sucursales.length == 1) {
                this.sucursalesElegidas = [this.sucursales[0]];
            }
            console.log(this.sucursales);
        }), (error => {
            console.log(error);
        });
    }
    ordenarSucursales(a, b) {
        if (a.razon_social_sucursal.toLowerCase() > b.razon_social_sucursal.toLowerCase()) {
            return 1;
        }
        if (a.razon_social_sucursal.toLowerCase() < b.razon_social_sucursal.toLowerCase()) {
            return -1;
        }
        return 0;
    }
    changeSucursal() {
        this.sectoresElegidos = [];
        this.equiposElegidos = [];
        if (this.sucursalesElegidas.includes('all')) {
            this.sucursalesElegidas = this.sucursales;
        }
        this.grupoWorkstations();
    }
    grupoWorkstations() {
        this.api_clientes.listado_grupoWorkstations(this.sucursalesElegidas[0].id_sucursal).subscribe(data => {
            this.sectores = data;
            this.sectores = this.sectores.result;
            this.allEquipos = JSON.parse(JSON.stringify(this.sectores));
            console.log(this.allEquipos);
            var aux = [];
            for (let index = 0; index < this.allEquipos.length; index++) {
                if (this.sectores.find(sector => !aux.find(auxSector => auxSector.nombre_equipo_grupo == sector.nombre_equipo_grupo))) {
                    aux.push(this.sectores.find(sector => !aux.find(auxSector => auxSector.nombre_equipo_grupo == sector.nombre_equipo_grupo)));
                }
            }
            this.sectores = aux;
            console.log(this.sectores);
        });
    }
    changeSector(id_grupo) {
        console.log(id_grupo);
        this.equiposElegidos = [];
        this.equipos = this.allEquipos.filter(equipo => equipo.id_equipo_grupo == id_grupo);
        if (this.sectoresElegidos.includes('all')) {
            this.sectoresElegidos = this.sectores;
        }
        console.warn(this.equipos);
    }
    equiposChange() {
        if (this.equiposElegidos.includes('all')) {
            this.equiposElegidos = this.equipos;
        }
        console.log(this.equiposElegidos);
    }
    productosChange() {
        if (this.productosFiltrados.includes('all')) {
            this.productosFiltrados = this.productos.map(producto => producto.id_producto);
        }
        console.log(this.productosFiltrados);
    }
    buscar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.clientesElegidos.length == 0) {
                const alert = yield this.alertController.create({
                    header: 'Error',
                    subHeader: 'No ha seleccionado ningun cliente',
                    buttons: ['OK']
                });
                yield alert.present();
            }
            else {
                if (!this.filtro_uv && !this.filtro_desratizacion) {
                    const alert = yield this.alertController.create({
                        header: 'Error',
                        subHeader: 'No ha seleccionado ningun servicio',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
                else {
                    const loading = yield this.loadingController.create({
                        message: 'Cargando estadisticas',
                        spinner: 'bubbles'
                    });
                    yield loading.present();
                    this.filtroUtilizado = [this.filtro_uv, this.filtro_desratizacion];
                    this.productosUtilizados = JSON.parse(JSON.stringify(this.productosFiltrados));
                    this.respuestas = [];
                    for (let index = 0; index < this.productos.length; index++) {
                        const producto = this.productos[index];
                        producto.captura = 0;
                        producto.consumo = 0;
                        producto.faltante = 0;
                        producto.intacto = 0;
                        producto.malEstado = 0;
                        producto.nuevo = 0;
                        producto.tapado = 0;
                    }
                    var filtro = [this.fecha_desde, this.fecha_hasta, this.filtro_uv, this.filtro_desratizacion, this.clientesElegidos, this.sucursalesElegidas, this.sectoresElegidos, this.equiposElegidos, this.productosUtilizados, this.productos];
                    this.api_clientes.estadisticas(filtro).subscribe((datos) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        var aux;
                        aux = datos;
                        aux = aux.respuestas;
                        console.log(datos);
                        window.open(aux.url, '_blank');
                        this.contadores = aux.contadores;
                        console.log(this.contadores);
                        this.respuestas = aux.respuesta;
                        this.productos = aux.productos;
                        loading.dismiss();
                        if (this.respuestas.length == 0) {
                            const alert = yield this.alertController.create({
                                header: 'Error',
                                message: 'No se encontro ningun dato sobre los filtros aplicados',
                                buttons: ['OK']
                            });
                            yield alert.present();
                        }
                    }));
                }
            }
        });
    }
    borrarFiltros() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: '¿Estas seguro que deseeas limpiar los filtros?',
                buttons: [
                    "Cancelar",
                    {
                        text: 'Si',
                        handler: () => {
                            this.clientesElegidos = [];
                            this.sucursalesElegidas = [];
                            this.sectoresElegidos = [];
                            this.equiposElegidos = [];
                            this.productosFiltrados = [];
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    verPdf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // var params = {
            //   respuestas: this.respuestas,
            //   contadores: this.contadores,
            //   productos: this.productos
            // }
            // const loading = await this.loadingController.create({
            //   message: 'Cargando',
            // });
            // await loading.present();
            // console.log(params)
            // this.api_visitas.pdfEstadisticas(params).subscribe((resp:any) => {
            //   console.log(resp)
            //   loading.dismiss();
            //   window.open(resp.url,'_blank')
            // })
            window.open(this.url, '_blank');
        });
    }
};
EstadisticasPage.ctorParameters = () => [
    { type: _administrar_clientes_servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"] },
    { type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content')
], EstadisticasPage.prototype, "content", void 0);
EstadisticasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estadisticas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./estadisticas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estadisticas/estadisticas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./estadisticas.page.scss */ "./src/app/paginas/estadisticas/estadisticas.page.scss")).default]
    })
], EstadisticasPage);



/***/ })

}]);
//# sourceMappingURL=paginas-estadisticas-estadisticas-module-es2015.js.map