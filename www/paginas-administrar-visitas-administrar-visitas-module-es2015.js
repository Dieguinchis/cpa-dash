(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-administrar-visitas-administrar-visitas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-visitas/administrar-visitas.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-visitas/administrar-visitas.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-item>\r\n      <ion-col size=\"1\">\r\n        <ion-button [disabled]=\"hoyDisable()\" (click)=\"filtroHoy()\" shape=\"round\">\r\n          Hoy\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"floating\">Desde</ion-label>\r\n          <ion-datetime [disabled]=\"filtrar_fecha\" display-format=\"DD.MM.YYYY\" [(ngModel)]=\"fecha_desde\" (ionChange)=\"revisarMenor()\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"floating\">Hasta</ion-label>\r\n          <ion-datetime [disabled]=\"filtrar_fecha\" display-format=\"DD.MM.YYYY\" [(ngModel)]=\"fecha_hasta\" (ionChange)=\"revisarMayor()\"></ion-datetime> \r\n        </ion-item>     \r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"filter-col\">\r\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">Siempre</ion-label>\r\n        <ion-checkbox [(ngModel)]=\"filtrar_fecha\" (ionChange)=\"filtrar()\"></ion-checkbox>\r\n      </ion-col>\r\n      <ion-col offset=\"1\" size=\"1\" class=\"filter-col\">\r\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">Entregado</ion-label>\r\n        <ion-checkbox [(ngModel)]=\"entregado\" (ionChange)=\"filtrar()\"></ion-checkbox>\r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"filter-col\">\r\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">Finalizada</ion-label>\r\n        <ion-checkbox [(ngModel)]=\"finalizada\" (ionChange)=\"filtrar()\"></ion-checkbox>       \r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"filter-col\">\r\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">En proceso</ion-label>\r\n        <ion-checkbox [(ngModel)]=\"enProceso\" (ionChange)=\"filtrar()\"></ion-checkbox>     \r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"filter-col\">\r\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">Pendiente</ion-label>\r\n        <ion-checkbox [(ngModel)]=\"pendiente\" (ionChange)=\"filtrar()\"></ion-checkbox>   \r\n      </ion-col>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar class=\"ion-no-padding\" style=\"--background: rgb(250, 250, 250)\" [(ngModel)]=\"busqueda\" animated placeholder=\"Sucursal || Razon Social\" (ionClear)=\"searchClear()\" (keyup)=\"updateFilter($event)\"></ion-searchbar>\r\n  <ion-item lines=\"full\">\r\n    <ion-col size=\"3\"><b>Fecha</b></ion-col>\r\n    <ion-col size=\"3\"><b>Sucursal</b></ion-col>\r\n    <ion-col size=\"3\"><b>Estado</b></ion-col>\r\n    <ion-col size=\"3\"><b>Acciones</b></ion-col>\r\n  </ion-item>\r\n  <ion-item *ngFor=\"let visita of visitas_filtro\">\r\n    <ion-col size=\"3\">{{visita.fecha_visita | date:  \"dd/MM/yyyy HH:mm\"}} </ion-col>\r\n    <ion-col size=\"3\">{{visita.razon_social_sucursal}}</ion-col>\r\n    <ion-col size=\"3\">{{visita.estado_visitas}}</ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-icon color=\"primary\" name=\"enter-outline\" (click)=\"verVisita(visita.id_visita)\"></ion-icon>\r\n      <ion-icon *ngIf=\"visita.estado_visitas == 'pendiente' || visita.estado_visitas == 'en proceso'\" color=\"danger\" name=\"trash-outline\" (click)=\"eliminarVisitaAlert(visita)\"></ion-icon>\r\n      <!-- <ion-icon class=\"no-pointer\" name=\"close-outline\" *ngIf=\"visita.estado_visitas != 'finalizada' && visita.estado_visitas != 'entregado'\"></ion-icon> -->\r\n      <ion-icon style=\"padding-left: 5px;\" name=\"mail-outline\" *ngIf=\"visita.estado_visitas == 'finalizada' \" (click)=\"marcarEntregadoAlert(visita)\"></ion-icon>\r\n      <!-- <ion-icon style=\"padding-left: 5px;color: rgb(52, 183, 241);\" name=\"checkmark-done-outline\" *ngIf=\"visita.estado_visitas == 'entregado'\" class=\"no-pointer\"></ion-icon> -->\r\n</ion-col>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"visitas_filtro?.length == 0\">\r\n    <ion-label style=\"text-align: center;\">No se encuentran visitas que cumplan las condiciones</ion-label>\r\n  </ion-item>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"padding-right: 20px; padding-bottom: 10px;\" >\r\n    <ion-fab-button (click)=\"navigateToCrearVisita()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/paginas/administrar-visitas/administrar-visitas-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/paginas/administrar-visitas/administrar-visitas-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AdministrarVisitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarVisitasPageRoutingModule", function() { return AdministrarVisitasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _administrar_visitas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrar-visitas.page */ "./src/app/paginas/administrar-visitas/administrar-visitas.page.ts");




const routes = [
    {
        path: '',
        component: _administrar_visitas_page__WEBPACK_IMPORTED_MODULE_3__["AdministrarVisitasPage"]
    }
];
let AdministrarVisitasPageRoutingModule = class AdministrarVisitasPageRoutingModule {
};
AdministrarVisitasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdministrarVisitasPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/administrar-visitas/administrar-visitas.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/paginas/administrar-visitas/administrar-visitas.module.ts ***!
  \***************************************************************************/
/*! exports provided: AdministrarVisitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarVisitasPageModule", function() { return AdministrarVisitasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _administrar_visitas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrar-visitas-routing.module */ "./src/app/paginas/administrar-visitas/administrar-visitas-routing.module.ts");
/* harmony import */ var _administrar_visitas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrar-visitas.page */ "./src/app/paginas/administrar-visitas/administrar-visitas.page.ts");







let AdministrarVisitasPageModule = class AdministrarVisitasPageModule {
};
AdministrarVisitasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _administrar_visitas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrarVisitasPageRoutingModule"]
        ],
        declarations: [_administrar_visitas_page__WEBPACK_IMPORTED_MODULE_6__["AdministrarVisitasPage"]]
    })
], AdministrarVisitasPageModule);



/***/ }),

/***/ "./src/app/paginas/administrar-visitas/administrar-visitas.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/paginas/administrar-visitas/administrar-visitas.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-col {\n  display: flex;\n  align-items: center;\n}\n\nion-checkbox {\n  min-width: 18px;\n}\n\nion-icon {\n  cursor: pointer;\n}\n\n.no-pointer {\n  cursor: default;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci12aXNpdGFzL0U6XFxUcmFiYWpvXFxjcGFcXGZyb250ZW5kX2NwYV9hZG1pbi9zcmNcXGFwcFxccGFnaW5hc1xcYWRtaW5pc3RyYXItdmlzaXRhc1xcYWRtaW5pc3RyYXItdmlzaXRhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItdmlzaXRhcy9hZG1pbmlzdHJhci12aXNpdGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBREZDO0VBQ0csZUFBQTtFQUNBLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItdmlzaXRhcy9hZG1pbmlzdHJhci12aXNpdGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItY29se1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWNoZWNrYm94e1xyXG4gICAgbWluLXdpZHRoOiAxOHB4O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Lm5vLXBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6ZGVmYXVsdDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59IiwiLmZpbHRlci1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY2hlY2tib3gge1xuICBtaW4td2lkdGg6IDE4cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcG9pbnRlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/administrar-visitas/administrar-visitas.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/administrar-visitas/administrar-visitas.page.ts ***!
  \*************************************************************************/
/*! exports provided: AdministrarVisitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarVisitasPage", function() { return AdministrarVisitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _administrar_clientes_servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../administrar-clientes/servicios/api-clientes.service */ "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
/* harmony import */ var _administrar_clientes_ver_cliente_ver_visita_ver_visita_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../administrar-clientes/ver-cliente/ver-visita/ver-visita.page */ "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts");
/* harmony import */ var _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../programar-visita/servicios/api-visitas.service */ "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");







let AdministrarVisitasPage = class AdministrarVisitasPage {
    constructor(apiVisitasService, router, modalController, api_clientes, toastController, loadingController, alertController) {
        this.apiVisitasService = apiVisitasService;
        this.router = router;
        this.modalController = modalController;
        this.api_clientes = api_clientes;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.visitas = [];
        this.entregado = true;
        this.finalizada = true;
        this.enProceso = true;
        this.pendiente = true;
        this.filtrar_fecha = false;
    }
    ngOnInit() {
        this.filtroHoy();
        this.getVisitas();
    }
    getVisitas() {
        this.apiVisitasService.getAllVisitas().then((resp) => {
            console.log(resp.result);
            this.visitas = resp.result;
            this.filtrar();
        });
    }
    entreFechas(visita) {
        console.log(new Date(new Date(this.fecha_desde).setHours(0)), '///////', new Date(new Date(visita.fecha_visita).setDate(new Date(visita.fecha_visita).getDate())), '////////////', new Date(new Date(this.fecha_desde).setHours(24)));
        if ((new Date(visita.fecha_visita).setDate(new Date(visita.fecha_visita).getDate()).valueOf() >= new Date(this.fecha_desde).setHours(0).valueOf()) && (new Date(visita.fecha_visita).setDate(new Date(visita.fecha_visita).getDate()).valueOf() <= new Date(this.fecha_hasta).setHours(24).valueOf())) {
            return true;
        }
        else {
            return false;
        }
    }
    filtrar() {
        if (!this.filtrar_fecha) {
            this.visitas_filtro = this.visitas.filter(visita => this.entreFechas(visita) && this.revisarEstado(visita));
            this.visitas_filtro.sort(this.ordenarVisitas);
        }
        else {
            this.visitas_filtro = this.visitas.filter(visita => this.revisarEstado(visita));
            this.visitas_filtro.sort(this.ordenarVisitas);
        }
        this.temp = this.visitas_filtro;
        this.updateFilter();
    }
    ordenarVisitas(a, b) {
        var aaux = new Date(a.fecha_visita).valueOf();
        var baux = new Date(b.fecha_visita).valueOf();
        return baux - aaux;
    }
    revisarEstado(visita) {
        if (visita.estado_visitas == 'entregado') {
            return this.entregado;
        }
        if (visita.estado_visitas == 'finalizada') {
            return this.finalizada;
        }
        if (visita.estado_visitas == 'en proceso') {
            return this.enProceso;
        }
        if (visita.estado_visitas == 'pendiente') {
            return this.pendiente;
        }
    }
    revisarMenor() {
        if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
            this.fecha_hasta = this.fecha_desde;
        }
        this.filtrar();
    }
    revisarMayor() {
        if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
            this.fecha_desde = this.fecha_hasta;
        }
        this.filtrar();
    }
    navigateToCrearVisita() {
        this.router.navigateByUrl('menu-principal/programar-visita');
    }
    verVisita(id_visita) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _administrar_clientes_ver_cliente_ver_visita_ver_visita_page__WEBPACK_IMPORTED_MODULE_5__["VerVisitaPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    'id_visita': id_visita
                }
            });
            return yield modal.present();
        });
    }
    eliminarVisitaAlert(visita) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var al = yield this.alertController.create({
                header: 'Seguro que desea eliminar la visita?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            this.eliminarVisita(visita);
                        }
                    }
                ]
            });
            al.present();
        });
    }
    eliminarVisita(visita) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var load = yield this.loadingController.create({
                message: "Eliminando la visita"
            });
            load.present();
            this.api_clientes.cambiar_estado_visita(visita.id_visita, 'eliminado').then(e => {
                load.dismiss();
                this.getVisitas();
                this.toastController.create({
                    message: "Se elimino correctamente",
                    duration: 2000,
                    color: "success"
                }).then(r => {
                    r.present();
                });
                console.log(e);
            }).catch(error => {
                load.dismiss();
                this.toastController.create({
                    message: "Hubo un error al eliminar",
                    duration: 2000,
                    color: "danger"
                }).then(r => {
                    r.present();
                });
                console.error(error);
            });
        });
    }
    marcarEntregadoAlert(visita) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención',
                message: '¿Estas seguro que deseas marcar esta visita como entregada?',
                buttons: [
                    { text: 'No', role: 'cancel' },
                    { text: 'Si',
                        handler: () => {
                            this.marcarEntregado(visita.id_visita);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    marcarEntregado(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var load = yield this.loadingController.create({
                message: "Cargando visita"
            });
            load.present();
            this.api_clientes.cambiar_estado_visita(id, 'entregado').then(e => {
                this.getVisitas();
                load.dismiss();
                this.toastController.create({
                    message: "Se Marco como entregada",
                    duration: 2000,
                    color: "success"
                }).then(r => {
                    r.present();
                });
            }).catch(err => {
                load.dismiss();
                this.toastController.create({
                    message: "Hubo un error al marcar como entregada",
                    duration: 2000,
                    color: "danger"
                }).then(r => {
                    r.present();
                });
                console.error(err);
            });
        });
    }
    filtroHoy() {
        var aux = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + (new Date().getDate()).toString() + 'T00:00:00-03:00';
        this.fecha_hasta = aux;
        this.fecha_desde = aux;
        this.filtrar_fecha = false;
    }
    sumarDia(dia) {
        console.log(new Date(dia).setDate(dia.getDate() + 1));
        return new Date(dia).setDate(dia.getDate() + 1);
    }
    hoyDisable() {
        var aux = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + (new Date().getDate()).toString() + 'T00:00:00-03:00';
        if ((aux == this.fecha_hasta && aux == this.fecha_desde) && (!this.filtrar_fecha)) {
            return true;
        }
        else {
            return false;
        }
    }
    updateFilter(event) {
        if (event) {
            const val = event.target.value.toLowerCase();
            const temp = this.temp.filter(function (d) {
                var _a, _b;
                return ((_a = d.razon_social_cliente) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(val)) || ((_b = d.razon_social_sucursal) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(val));
            });
            // update the rows
            this.visitas_filtro = temp;
        }
        else {
            const val = this.busqueda;
            const temp = this.temp.filter(function (d) {
                var _a, _b;
                return ((_a = d.razon_social_cliente) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(val)) || ((_b = d.razon_social_sucursal) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(val));
            });
            if (val) {
                this.visitas_filtro = temp;
            }
        }
    }
    searchClear() {
        this.visitas_filtro = this.temp;
    }
};
AdministrarVisitasPage.ctorParameters = () => [
    { type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_6__["ApiVisitasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _administrar_clientes_servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ApiClientesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
AdministrarVisitasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-administrar-visitas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./administrar-visitas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-visitas/administrar-visitas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./administrar-visitas.page.scss */ "./src/app/paginas/administrar-visitas/administrar-visitas.page.scss")).default]
    })
], AdministrarVisitasPage);



/***/ })

}]);
//# sourceMappingURL=paginas-administrar-visitas-administrar-visitas-module-es2015.js.map