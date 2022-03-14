(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~5d227966"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Modificar Visita</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- <ion-button (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n      Click me\r\n  </ion-button> -->\r\n\r\n  <ion-item>\r\n      <ion-label fixed style=\"text-align: center;\">Seleccionar servicios a ofrecer</ion-label>\r\n      <ion-select [disabled]=\"sucursal_elegida == null\" [(ngModel)]=\"servicios_elegidosAux\"multiple=\"true\" (ionChange)=\"serviciosElegidosChange()\">\r\n          <ion-select-option *ngFor=\"let servicio of listado_servicios\" value=\"{{servicio.id_servicio}}\">{{servicio.nombre_servicio}}</ion-select-option>\r\n      </ion-select>\r\n  </ion-item>\r\n\r\n  <div *ngFor=\"let servicio of serviciosElegidos\" style=\"text-align: center;\">\r\n      <h2 style=\"text-align: center;\">{{servicio.nombre_servicio}}</h2>\r\n      <div *ngFor=\"let equipo of servicio.equipos\">\r\n          <ion-label fixed style=\"text-align: center;color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo}}</ion-label>\r\n          <ion-item style=\"margin-top: 10px;\">\r\n              <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n              <ion-select [(ngModel)]=\"equipo.tecnico\">\r\n                  <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n      </div>\r\n  </div>\r\n  <div *ngIf=\"show\">\r\n      <div *ngFor=\"let servicio of grupoWorkStationElegidos\" style=\"text-align: center;\">\r\n          <h2 style=\"text-align: center;\">{{servicio.nombre_equipo_grupo}}</h2>\r\n          <div *ngFor=\"let equipo of servicio.equipos\">\r\n              <ion-label fixed style=\"text-align: center;color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo}}: {{equipo.nombre_servicio}}</ion-label>\r\n          </div>\r\n          <ion-item style=\"margin-top: 10px;\">\r\n              <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n              <ion-select [(ngModel)]=\"servicio.tecnico\">\r\n                  <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n      </div>\r\n  </div>\r\n\r\n\r\n  <!-- <ion-item>\r\n      <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n      <ion-select [(ngModel)]=\"tecnico_elegido\">\r\n          <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n      </ion-select>\r\n  </ion-item> -->\r\n\r\n  <ion-item>\r\n      <ion-label fixed style=\"text-align: center;\">Elegir una fecha</ion-label>\r\n      <ion-datetime [(ngModel)]=\"fecha_elegida\" [doneText]=\"'Listo'\"\r\n      [cancelText]=\"'Cancelar'\" [monthNames]=\"monthNames\" [dayNames]=\"dayNames\" displayFormat=\"DDDD D MMMM YYYY HH:mm\" min=\"{{fecha_actual}}\" max=\"2022\" value=\"{{fecha_actual}}\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center;\">\r\n      <ion-button (click)=\"programarVisita()\">Modificar</ion-button>\r\n  </div>\r\n\r\n      \r\n  <div style=\"margin-top: 25px\">\r\n      <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>visita</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"!visita\" style=\"text-align: center;\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <div *ngIf=\"visita\">\r\n    <div *ngIf=\"visita.visitas.horario_salida != 'NULL'\">\r\n      <ion-item lines=\"full\">\r\n        <ion-label *ngIf=\"validDate\"><b>Fecha de concluida la visita:</b> {{visita.visitas.horario_salida | date: 'dd/MM/yyyy hh:mm a'}}</ion-label>\r\n        <ion-label *ngIf=\"!validDate\"><b>Fecha de concluida la visita:</b> {{visita.visitas.horario_salida}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div *ngIf=\"visita.visitas.horario_salida == 'NULL'\">\r\n      <ion-item>\r\n        <ion-label><b>Fecha estimada de la visita:</b> {{visita.visitas.fecha_visita | date: 'dd/MM/yyyy hh:mm'}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Cliente:</b> {{visita.visitas.razon_social_cliente}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Sucursal:</b> {{visita.visitas.razon_social_sucursal}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Servicios ofrecidos:</b>\r\n        <div *ngFor=\"let servicio of visita.servicios2; let i = index\" style=\"margin-left:10px; margin-top: 10px\">\r\n          <div style=\"cursor: pointer;\" *ngIf=\"visita.visitas.estado_visitas == 'finalizada'\" (click)=\"editarServicio(servicio.id_servicio, servicio.id_formulario)\">\r\n            <ion-icon name=\"document-outline\" color=\"primary\"></ion-icon>\r\n            {{servicio.nombre_servicio}}{{\" - \" + servicio?.tecnicos}}\r\n            <ion-icon name=\"create-outline\" style=\"cursor: pointer;\" *ngIf=\"visita.visitas.estado_visitas == 'finalizada'\" ></ion-icon>  \r\n          </div>\r\n          <div *ngIf=\"visita.visitas.estado_visitas != 'finalizada'\">\r\n            <ion-icon name=\"document-outline\" color=\"primary\"></ion-icon>\r\n            {{servicio.nombre_servicio}}{{\" - \" + servicio?.tecnicos}}\r\n            <ion-icon name=\"create-outline\" style=\"cursor: pointer;\" *ngIf=\"visita.visitas.estado_visitas == 'finalizada'\" ></ion-icon>  \r\n          </div>\r\n        </div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <div *ngIf=\"(visita.visitas.horario_salida != 'NULL') && (visita.visitas.estado_visitas != 'en proceso')\">\r\n      <div *ngIf=\"!pdf_generado && visita.visitas.pdfGenerado == 0\">\r\n        <ion-button expand=\"full\" (click)=\"generar_pdf()\">Generar PDF</ion-button>\r\n      </div>\r\n      <div *ngIf=\"pdf_generado || visita.visitas.pdfGenerado == 1\">\r\n        <ion-button expand=\"full\" (click)=\"ver_pdf()\" color=\"success\">Ver PDF</ion-button>\r\n      </div>\r\n      <div *ngIf=\"pdf_generado || visita.visitas.pdfGenerado == 1\">\r\n        <ion-button expand=\"full\" (click)=\"generar_pdf()\">Volver a generar PDF</ion-button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"visita.visitas.horario_salida == 'NULL'\">\r\n      <ion-button expand=\"full\" (click)=\"modificar_visita()\">Modificar visita</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n");

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
        console.log(this.apiDir);
        return this.http.get(this.apiDir + '/clientes', this.requestOptions);
    }
    informacion_cliente(id) {
        console.log(this.apiDir);
        return this.http.get(this.apiDir + '/clientes/id/' + id, this.requestOptions);
    }
    alta_sucursal(datos) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/sucursales/crear', datos, this.requestOptions);
    }
    informacion_sucursal(id) {
        console.log(this.apiDir);
        return this.http.get(this.apiDir + '/sucursales/id/' + id, this.requestOptions);
    }
    informacion_visita(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.apiDir);
            var data = yield this.http.get(this.apiDir + '/visitas/id/' + id, this.requestOptions);
            console.log(this.apiDir + '/visitas/id/' + id, this.requestOptions);
            return data.toPromise();
        });
    }
    listado_workstations(id) {
        console.log(this.apiDir);
        return this.http.get(this.apiDir + '/servicios/equipos/sucursal/' + id, this.requestOptions);
    }
    listado_grupoWorkstations(id) {
        console.log(this.apiDir);
        return this.http.get(this.apiDir + '/servicios/gruposEquipos/sucursal/' + id, this.requestOptions);
    }
    borrar_equipo(id_equipo) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/servicios/eliminarEquipos/' + id_equipo, null, this.requestOptions);
    }
    listado_productosServicio(id_servicio) {
        console.log(this.apiDir);
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
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/servicios/eliminarGrupoEquipos/' + id_producto, this.requestOptions);
    }
    subir_planos(parametros) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/planos/crear', parametros, this.requestOptions);
    }
    upload(params, bodyP = {}) {
        console.log(this.apiDir);
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
        console.log(this.apiDir);
        return this.http.get(this.apiDir + '/sucursales/id/' + id_sucursal, this.requestOptions);
    }
    crear_pdf(id_visita) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/pdf/create-pdf', id_visita, this.requestOptions);
    }
    ver_pdf(id_visita) {
        console.log(this.apiDir);
        return this.http.get(this.apiDir + '/pdf/fetch-pdf/' + id_visita, this.requestOptions);
    }
    modificar_cliente(parametros) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/clientes/actualizar', parametros, this.requestOptions);
    }
    subir_logo_cliente(parametros) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/clientes/actualizarLogo', parametros, this.requestOptions);
    }
    eliminar_Logo_Cliente(parametros) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/clientes/eliminarLogo', parametros, this.requestOptions);
    }
    eliminar_cliente(id_cliente) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/clientes/eliminar/' + id_cliente, this.requestOptions);
    }
    eliminar_sucursal(id_sucursal) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/sucursales/eliminar/' + id_sucursal, this.requestOptions);
    }
    eliminar_plano(id_plano) {
        return this.http.post(this.apiDir + '/planos/eliminar/' + id_plano, this.requestOptions);
    }
    modificar_sucursal(parametros) {
        console.log(this.apiDir);
        return this.http.post(this.apiDir + '/sucursales/actualizar', parametros, this.requestOptions);
    }
    estadisticas(parametros) {
        console.log(this.apiDir);
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

/***/ "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvbW9kaWZpY2FyLXZpc2l0YS9tb2RpZmljYXItdmlzaXRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: ModificarVisitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarVisitaPage", function() { return ModificarVisitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/api-clientes.service */ "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
/* harmony import */ var _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../programar-visita/servicios/api-visitas.service */ "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");
/* harmony import */ var _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../administrar-tecnicos/servicios/servicio-tecnicos.service */ "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let ModificarVisitaPage = class ModificarVisitaPage {
    constructor(api, api_tecnicos, api_clientes, navParams, ModalController, api_visitas) {
        this.api = api;
        this.api_tecnicos = api_tecnicos;
        this.api_clientes = api_clientes;
        this.navParams = navParams;
        this.ModalController = ModalController;
        this.api_visitas = api_visitas;
        this.serviciosConEquipos = [];
        this.serviciosElegidos = [];
        this.serviciosParaEnviar = [];
        this.grupoWorkStation = [];
        this.grupoWorkStationElegidos = [];
        this.show = false;
        this.id_visita = this.navParams.get('id_visita');
        this.servicios_elegidosAux = [];
        this.id_cliente_elegido = null;
        this.sucursal_elegida = null;
        this.dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        this.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.api.mostrar_servicios().subscribe((data) => {
                this.listado_servicios = data;
                this.listado_servicios = this.listado_servicios.result;
                console.log(this.listado_servicios, 'servicios');
                this.actualizar_informacion().then(id => {
                    console.warn(this.sucursal_elegida);
                    this.api.listado_equipos(this.sucursal_elegida).subscribe((res) => {
                        this.equipos = res.result;
                        console.log(this.equipos, 'equipos');
                        for (let servicio of this.listado_servicios) {
                            servicio.equipos = [];
                            for (let equipo of this.equipos) {
                                if (equipo.id_servicio == servicio.id_servicio) {
                                    servicio.equipos.push(equipo);
                                }
                            }
                            if (servicio.equipos.length < 1) {
                                servicio.equipos.push({ id_equipo: 0, id_servicio: servicio.id_servicio, nombre_equipo: 'Servicio principal' });
                            }
                        }
                        console.log(this.listado_servicios, 'servicios completos');
                    });
                });
            }), (error => {
                console.log(error);
            });
            this.api_tecnicos.listado_tecnicos().subscribe(data => {
                this.listado_tecnicos = data;
                this.listado_tecnicos = this.listado_tecnicos.result;
                console.log(this.listado_tecnicos);
            }, (error => {
                console.log(error);
            }));
            this.fecha_actual = moment__WEBPACK_IMPORTED_MODULE_6__().format();
        });
    }
    actualizar_informacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.api_clientes.informacion_visita(this.id_visita).then((data) => {
                this.visita = data;
                this.visita = this.visita.result;
                this.id_cliente_elegido = this.visita.visitas.id_cliente;
                this.sucursal_elegida = this.visita.visitas.id_sucursal;
                this.sucursalesCliente(this.id_cliente_elegido);
                // console.log('IDS:  ',this.visita, this.sucursal_elegida)
                return this.visita.visitas.id_sucursal;
            }), (error => {
                console.log(error);
            });
        });
    }
    sucursalesCliente(id_cliente) {
        this.api.informacion_cliente(id_cliente).subscribe(data => {
            this.listado_sucursales_cliente = data;
            console.log(data);
            this.listado_sucursales_cliente = this.listado_sucursales_cliente.result.sucursales.datosSucursal;
            // this.sucursal_elegida = null;
            this.id_cliente_elegido = id_cliente;
            this.selectSucursal();
            console.log(this.listado_sucursales_cliente);
        }), (error => {
            console.log(error);
        });
    }
    selectSucursal() {
        this.api.listado_grupoWorkstations(this.sucursal_elegida).subscribe((data) => {
            // console.log('Grupo1', data.result)
            var flag = 0;
            var array = [];
            var i = 0;
            var first = true;
            data.result.forEach((element) => {
                if (element.id_equipo_grupo == flag) {
                    // console.log(element.id_equipo_grupo, ' ' ,flag)
                    array[i].equipos.push({ id_equipo: element.id_equipo, id_servicio: element.id_servicio, id_sucursal: element.id_sucursal, nombre_equipo: element.nombre_equipo, codigo_qr_equipo: element.codigo_qr_equipo, estado_servicio: element.estado_servicio, nombre_servicio: element.nombre_servicio, qr: element.qr });
                }
                else {
                    if (!first) {
                        i++;
                    }
                    flag = element.id_equipo_grupo;
                    array.push({ nombre_equipo_grupo: element.nombre_equipo_grupo, id_equipo_grupo: element.id_equipo_grupo, equipos: [] });
                    array[i].equipos.push({ id_equipo: element.id_equipo, id_servicio: element.id_servicio, id_sucursal: element.id_sucursal, nombre_equipo: element.nombre_equipo, codigo_qr_equipo: element.codigo_qr_equipo, estado_servicio: element.estado_servicio, nombre_servicio: element.nombre_servicio, qr: element.qr });
                    first = false;
                }
            });
            this.grupoWorkStation = array;
            // console.log('grupo2: ', this.grupoWorkStation)
        });
    }
    programarVisita() {
        for (let servicio of this.serviciosElegidos) {
            for (let equipo of servicio.equipos) {
                this.serviciosParaEnviar.push({ id_servicio: servicio.id_servicio, id_tecnico: equipo.tecnico, id_equipo: equipo.id_equipo });
            }
        }
        for (let workstation of this.grupoWorkStationElegidos) {
            for (let equipo of workstation.equipos) {
                this.serviciosParaEnviar.push({ id_servicio: equipo.id_servicio, id_tecnico: workstation.tecnico, id_equipo: equipo.id_equipo });
            }
        }
        console.log(this.serviciosParaEnviar);
        this.api_visitas.modificar_visita({ 'id_cliente': this.id_cliente_elegido,
            'id_sucursal': this.sucursal_elegida,
            'servicios': this.serviciosParaEnviar,
            'fecha_visita': this.fecha_elegida,
            'id': this.visita.visitas.id_visita
        }).subscribe(data => {
            console.log(data);
            location.reload();
        }), (error => {
            console.log(error);
        });
        // this.api.crear_visita({'id_cliente': this.id_cliente_elegido,
        //                       'id_sucursal': this.sucursal_elegida,
        //                       'servicios': this.serviciosParaEnviar,
        //                       'fecha_visita': this.fecha_elegida}).subscribe(data => {
        //                           console.log(data)
        //                           location.reload();
        //                        }), (error =>{
        //                          console.log(error)
        //                        })
    }
    serviciosElegidosChange() {
        this.serviciosElegidos = [];
        for (let servicioID of this.servicios_elegidosAux) {
            for (let servicio of this.listado_servicios) {
                if (servicio.id_servicio == servicioID && servicio.qr == 0) {
                    this.serviciosElegidos.push(servicio);
                }
            }
        }
        var arrayWorkstation = [{ nombre_equipo_grupo: null, id_equipo_grupo: null, tecnico: null, equipos: [] }];
        var i = 0;
        var first = true;
        console.log(this.servicios_elegidosAux);
        this.grupoWorkStation.forEach((workstation) => {
            workstation.equipos.forEach((servicio) => {
                var val = servicio.id_servicio.toString();
                if (this.servicios_elegidosAux.includes(val)) {
                    if (this.checkExist(arrayWorkstation, workstation.nombre_equipo_grupo) || arrayWorkstation[0].nombre_equipo_grupo == null) {
                        if (!first) {
                            console.log('1');
                            i = i + 1;
                            first = false;
                            arrayWorkstation.push({ nombre_equipo_grupo: workstation.nombre_equipo_grupo, id_equipo_grupo: workstation.id_equipo_grupo, tecnico: null, equipos: [servicio] });
                        }
                        else {
                            first = false;
                            // console.log('2')
                            arrayWorkstation = [{ nombre_equipo_grupo: workstation.nombre_equipo_grupo, id_equipo_grupo: workstation.id_equipo_grupo, tecnico: null, equipos: [servicio] }];
                        }
                    }
                    else {
                        console.log('3');
                        arrayWorkstation[i].equipos.push(servicio);
                    }
                }
            });
        });
        this.grupoWorkStationElegidos = arrayWorkstation;
        this.show = true;
        if (this.grupoWorkStationElegidos[0].nombre_equipo_grupo == null) {
            this.show = false;
        }
        console.log('Servicio elegidos: ', arrayWorkstation);
    }
    checkExist(array, nombre_equipo_grupo) {
        var resp = [];
        resp = array.find(resp => (resp.nombre_equipo_grupo == nombre_equipo_grupo));
        if (resp == undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    close() {
        this.ModalController.dismiss();
    }
};
ModificarVisitaPage.ctorParameters = () => [
    { type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"] },
    { type: _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_5__["ServicioTecnicosService"] },
    { type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"] }
];
ModificarVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modificar-visita',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modificar-visita.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modificar-visita.page.scss */ "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.scss")).default]
    })
], ModificarVisitaPage);



/***/ }),

/***/ "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvdmVyLXZpc2l0YS92ZXItdmlzaXRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts ***!
  \****************************************************************************************/
/*! exports provided: VerVisitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerVisitaPage", function() { return VerVisitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_modals_editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/editar-visita/editar-visita.component */ "./src/app/modals/editar-visita/editar-visita.component.ts");
/* harmony import */ var src_app_modals_ver_servicio_visita_ver_servicio_visita_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/ver-servicio-visita/ver-servicio-visita.component */ "./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.ts");
/* harmony import */ var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servicios/api-clientes.service */ "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
/* harmony import */ var _modificar_visita_modificar_visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modificar-visita/modificar-visita.page */ "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.ts");







let VerVisitaPage = class VerVisitaPage {
    constructor(navParams, api_visitas, modalController, loadingController) {
        this.navParams = navParams;
        this.api_visitas = api_visitas;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.id_visita = this.navParams.get('id_visita');
        this.pdf_generado = false;
        this.validDate = true;
    }
    ngOnInit() {
        this.actualizar_informacion();
    }
    generar_pdf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var loader = yield this.loadingController.create({ message: "Generando PDF" });
            loader.present();
            console.log(this.id_visita);
            this.api_visitas.crear_pdf({ id_visita: this.id_visita }).subscribe(data => {
                console.log(data);
                this.pdf_generado = true;
                loader.dismiss();
            }, error => {
                console.log(error);
                loader.dismiss();
            });
        });
    }
    ver_pdf() {
        this.api_visitas.ver_pdf(this.id_visita).subscribe(data => {
            this.url = data;
            console.log(this.url.url);
            var win = window.open(this.url.url, '_blank');
            win.focus();
        }, error => {
            console.log(error);
        });
    }
    close() {
        this.modalController.dismiss();
    }
    actualizar_informacion() {
        this.api_visitas.informacion_visita(this.id_visita).then(data => {
            var _a;
            this.visita = data;
            this.visita = this.visita.result;
            if (new Date(this.visita.visitas.horario_salida).valueOf()) {
                this.visita.visitas.horario_salida = new Date(this.visita.visitas.horario_salida);
            }
            else {
                this.validDate = false;
            }
            console.log(this.visita);
            if (this.visita) {
                this.visita.servicios2 = [];
                for (let servicio of this.visita.servicios) {
                    if (!((_a = this.visita) === null || _a === void 0 ? void 0 : _a.servicios2.find(servicioAux => servicioAux.nombre_servicio == servicio.nombre_servicio))) {
                        if (servicio.id_servicio == 22 || servicio.id_servicio == 20) {
                            this.visita.servicios2.push({ nombre_servicio: servicio.nombre_servicio, id_servicio: servicio.id_servicio, id_formulario: null });
                        }
                        else {
                            this.visita.servicios2.push(servicio);
                        }
                    }
                }
                var aux = [];
                var aux2 = [];
                for (let index = 0; index < this.visita.servicios.length; index++) {
                    const element = this.visita.servicios[index];
                    if (!aux.some(servicio => servicio.id_servicio == element.id_servicio)) {
                        aux.push(element);
                    }
                }
                for (let index = 0; index < aux.length; index++) {
                    const element = aux[index];
                    aux[index].tecnicos = [];
                    aux[index] = this.visita.servicios.filter(servicio => servicio.id_servicio == element.id_servicio);
                    console.log(element);
                }
                for (let index = 0; index < this.visita.servicios.length; index++) {
                    const element = this.visita.servicios[index];
                    if (!aux2.some(servicio => { var _a, _b; return ((_a = servicio.tecnico) === null || _a === void 0 ? void 0 : _a.id_tecnico) == ((_b = element.tecnico) === null || _b === void 0 ? void 0 : _b.id_tecnico); })) {
                        aux2.push(element.tecnico);
                    }
                }
                for (let index = 0; index < aux2.length; index++) {
                    const element = aux2[index];
                    for (let index2 = 0; index2 < aux.length; index2++) {
                        const element2 = aux[index2];
                        if ((element2.find(servicio => servicio.tecnico == element) && (!element2[0].tecnicos.some(tecnico => tecnico.id_tecnico == element.id_tecnico)))) {
                            aux[index2][0].tecnicos.push(element);
                        }
                    }
                }
                for (let index = 0; index < this.visita.servicios2.length; index++) {
                    const element = this.visita.servicios2[index];
                    var nombreTecnico = "";
                    for (let tecnico of aux[index][0].tecnicos) {
                        if (nombreTecnico) {
                            nombreTecnico = nombreTecnico + ", " + tecnico.nombre_tecnico + " " + tecnico.apellido_tecnico;
                        }
                        else {
                            nombreTecnico = tecnico.nombre_tecnico + " " + tecnico.apellido_tecnico;
                        }
                    }
                    element.tecnicos = nombreTecnico;
                }
            }
        }), (error => {
            console.log(error);
        });
    }
    modificar_visita() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modificar_visita_modificar_visita_page__WEBPACK_IMPORTED_MODULE_6__["ModificarVisitaPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    'id_visita': this.id_visita
                }
            });
            modal.onDidDismiss().then(data => {
                this.actualizar_informacion();
            });
            return yield modal.present();
        });
    }
    editarServicio(id_servicio, id_formulario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (id_formulario) {
                const modal = yield this.modalController.create({
                    component: src_app_modals_editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_3__["EditarVisitaComponent"],
                    componentProps: { id_servicio: id_servicio, id_visita: this.id_visita, id_formulario: id_formulario }
                });
                yield modal.present();
            }
            else {
                const modal = yield this.modalController.create({
                    component: src_app_modals_ver_servicio_visita_ver_servicio_visita_component__WEBPACK_IMPORTED_MODULE_4__["VerServicioVisitaComponent"],
                    componentProps: { id_servicio: id_servicio, visita: this.visita }
                });
                yield modal.present();
            }
        });
    }
};
VerVisitaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ApiClientesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
VerVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ver-visita',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ver-visita.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ver-visita.page.scss */ "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.scss")).default]
    })
], VerVisitaPage);



/***/ })

}]);
//# sourceMappingURL=default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~5d227966-es2015.js.map