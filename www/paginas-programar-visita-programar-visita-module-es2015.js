(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-programar-visita-programar-visita-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/programar-visita/programar-visita.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/programar-visita/programar-visita.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <!-- <ion-button (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Click me\r\n    </ion-button> -->\r\n    <ion-item style=\"margin-top: 15px;\">\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar un cliente</ion-label>\r\n        <ion-select [interfaceOptions]=\"custom\" (ionChange)=\"sucursalesCliente($event.target.value)\">\r\n            <ion-select-option  *ngFor=\"let cliente of listado_clientes\" value=\"{{cliente.id_cliente}}\">{{cliente.razon_social_cliente}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar una sucursal</ion-label>\r\n        <ion-select [interfaceOptions]=\"custom\" [disabled]=\"id_cliente_elegido == null\" (ionChange)=\"selectSucursal()\" [(ngModel)]=\"sucursal_elegida\">\r\n            <ion-select-option *ngFor=\"let sucursal of listado_sucursales_cliente\" value=\"{{sucursal.id_sucursal}}\">{{sucursal.razon_social_sucursal}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar servicios a ofrecer</ion-label>\r\n        <ion-select [interfaceOptions]=\"custom\" [disabled]=\"(sucursal_elegida == null) && !equiposCargados && !workStationCargados\" [(ngModel)]=\"servicios_elegidosAux\"multiple=\"true\" (ionChange)=\"serviciosElegidosChange()\">\r\n            <ion-select-option *ngFor=\"let servicio of listado_servicios\" value=\"{{servicio.id_servicio}}\">{{servicio.nombre_servicio}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n\r\n    <div *ngFor=\"let servicio of serviciosElegidos\" style=\"text-align: center;\">\r\n        <h2 style=\"text-align: center;\">{{servicio.nombre_servicio}}</h2>\r\n        <div *ngFor=\"let equipo of servicio.equipos\">\r\n            <ion-label fixed style=\"text-align: center;color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo}}</ion-label>\r\n            <ion-item style=\"margin-top: 10px;\">\r\n                <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n                <ion-select [interfaceOptions]=\"custom\" [(ngModel)]=\"equipo.tecnico\">\r\n                    <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"show\">\r\n        <div *ngFor=\"let servicio of grupoWorkStationElegidos\" style=\"text-align: center;\">\r\n            <h2 style=\"text-align: center;\">{{servicio.nombre_equipo_grupo}}</h2>\r\n            <div *ngFor=\"let equipo of servicio.equipos\">\r\n                <ion-label fixed style=\"text-align: center;color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo}}: {{equipo.nombre_servicio}}</ion-label>\r\n            </div>\r\n            <ion-item style=\"margin-top: 10px;\">\r\n                <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n                <ion-select [interfaceOptions]=\"custom\" [(ngModel)]=\"servicio.tecnico\">\r\n                    <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n        <ion-select [(ngModel)]=\"tecnico_elegido\">\r\n            <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item> -->\r\n\r\n    <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Elegir una fecha</ion-label>\r\n        <ion-datetime [(ngModel)]=\"fecha_elegida\" [doneText]=\"'Listo'\"\r\n        [cancelText]=\"'Cancelar'\" [monthNames]=\"monthNames\" [dayNames]=\"dayNames\" displayFormat=\"DDDD D MMMM YYYY HH:mm\" min=\"{{fecha_actual}}\" max=\"2022\" value=\"{{fecha_actual}}\"></ion-datetime>\r\n    </ion-item>\r\n\r\n    <div style=\"width: 100%; text-align: center;\">\r\n        <ion-button (click)=\"programarVisita()\">Agendar</ion-button>\r\n    </div>\r\n\r\n        \r\n    <div style=\"margin-top: 25px\">\r\n        <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/paginas/programar-visita/programar-visita-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/paginas/programar-visita/programar-visita-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProgramarVisitaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramarVisitaPageRoutingModule", function() { return ProgramarVisitaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _programar_visita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programar-visita.page */ "./src/app/paginas/programar-visita/programar-visita.page.ts");




const routes = [
    {
        path: '',
        component: _programar_visita_page__WEBPACK_IMPORTED_MODULE_3__["ProgramarVisitaPage"]
    }
];
let ProgramarVisitaPageRoutingModule = class ProgramarVisitaPageRoutingModule {
};
ProgramarVisitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgramarVisitaPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/programar-visita/programar-visita.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/programar-visita/programar-visita.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProgramarVisitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramarVisitaPageModule", function() { return ProgramarVisitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _programar_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programar-visita-routing.module */ "./src/app/paginas/programar-visita/programar-visita-routing.module.ts");
/* harmony import */ var _programar_visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programar-visita.page */ "./src/app/paginas/programar-visita/programar-visita.page.ts");







let ProgramarVisitaPageModule = class ProgramarVisitaPageModule {
};
ProgramarVisitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _programar_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramarVisitaPageRoutingModule"]
        ],
        declarations: [_programar_visita_page__WEBPACK_IMPORTED_MODULE_6__["ProgramarVisitaPage"]]
    })
], ProgramarVisitaPageModule);



/***/ }),

/***/ "./src/app/paginas/programar-visita/programar-visita.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/programar-visita/programar-visita.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  width: 50%;\n  margin-left: 25%;\n  margin-bottom: 10px;\n}\n\n.imagen_empresa {\n  width: 50%;\n  margin-left: 25%;\n}\n\nh2 {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9wcm9ncmFtYXItdmlzaXRhL0U6XFxUcmFiYWpvXFxjcGFcXGZyb250ZW5kX2NwYV9hZG1pbi9zcmNcXGFwcFxccGFnaW5hc1xccHJvZ3JhbWFyLXZpc2l0YVxccHJvZ3JhbWFyLXZpc2l0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvcHJvZ3JhbWFyLXZpc2l0YS9wcm9ncmFtYXItdmlzaXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLCtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3Byb2dyYW1hci12aXNpdGEvcHJvZ3JhbWFyLXZpc2l0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmltYWdlbl9lbXByZXNhe1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSVcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iLCJpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbWFnZW5fZW1wcmVzYSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbmgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/paginas/programar-visita/programar-visita.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/programar-visita/programar-visita.page.ts ***!
  \*******************************************************************/
/*! exports provided: ProgramarVisitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramarVisitaPage", function() { return ProgramarVisitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios/api-visitas.service */ "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../administrar-tecnicos/servicios/servicio-tecnicos.service */ "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");





let ProgramarVisitaPage = class ProgramarVisitaPage {
    constructor(api, api_tecnicos) {
        this.api = api;
        this.api_tecnicos = api_tecnicos;
        this.serviciosConEquipos = [];
        this.serviciosElegidos = [];
        this.serviciosParaEnviar = [];
        this.grupoWorkStation = [];
        this.grupoWorkStationElegidos = [];
        this.show = false;
        this.servicios_elegidosAux = [];
        this.id_cliente_elegido = null;
        this.sucursal_elegida = null;
        this.equiposCargados = false;
        this.workStationCargados = false;
        this.dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        this.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.custom = {
            cssClass: 'alertSize'
        };
    }
    ngOnInit() {
        console.warn(1);
        this.api.mostrar_servicios().subscribe(data => {
            console.warn(2);
            this.listado_servicios = data;
            this.listado_servicios = this.listado_servicios.result;
            console.log(this.listado_servicios, 'servicios');
        }), (error => {
            console.log('*1*1*1*1*1*1', error);
        });
        this.api.listado_clientes().subscribe(data => {
            this.listado_clientes = data;
            this.listado_clientes = this.listado_clientes.result;
            this.listado_clientes.sort(this.ordenarClientes);
            console.log(this.listado_clientes);
        }),
            (error => {
                console.log(error);
            });
        this.api_tecnicos.listado_tecnicos().subscribe(data => {
            this.listado_tecnicos = data;
            this.listado_tecnicos = this.listado_tecnicos.result;
            this.listado_tecnicos.sort(this.ordenarTecnicos);
            console.log(this.listado_tecnicos);
        }, (error => {
            console.log(error);
        }));
        this.fecha_actual = moment__WEBPACK_IMPORTED_MODULE_3__().format();
    }
    sucursalesCliente(id_cliente) {
        this.api.informacion_cliente(id_cliente).subscribe(data => {
            this.listado_sucursales_cliente = data;
            console.log(data);
            this.listado_sucursales_cliente = this.listado_sucursales_cliente.result.sucursales.datosSucursal;
            this.sucursal_elegida = null;
            this.id_cliente_elegido = id_cliente;
            this.listado_sucursales_cliente.sort(this.ordenarSucursales);
            console.log(this.listado_sucursales_cliente);
        }), (error => {
            console.log(error);
        });
    }
    selectSucursal() {
        if (this.sucursal_elegida != null) {
            this.api.listado_equipos_id(this.sucursal_elegida).subscribe((res) => {
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
                this.equiposCargados = true;
            });
        }
        this.api.listado_grupoWorkstations(this.sucursal_elegida).subscribe((data) => {
            // console.log('Grupo1', data.result)
            var flag = 0;
            var array = [];
            var i = 0;
            var first = true;
            if (data.status == 'error') {
                alert('Ocurrio un error: ' + data.message);
            }
            else {
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
            }
            console.log('grupo2: ', this.grupoWorkStation);
            this.workStationCargados = true;
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
        this.api.crear_visita({ 'id_cliente': this.id_cliente_elegido,
            'id_sucursal': this.sucursal_elegida,
            'servicios': this.serviciosParaEnviar,
            'fecha_visita': this.fecha_elegida }).subscribe(data => {
            console.log(data);
            location.reload();
        }), (error => {
            console.log(error);
        });
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
        // console.log(this.servicios_elegidosAux)
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
                            console.log('2');
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
        for (let index = 0; index < arrayWorkstation.length; index++) {
            const element = arrayWorkstation[index];
            console.log(element.equipos);
            element.equipos.sort(this.ordenarEquipos);
        }
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
    ordenarClientes(a, b) {
        if (a.razon_social_cliente.toLowerCase() > b.razon_social_cliente.toLowerCase()) {
            return 1;
        }
        if (a.razon_social_cliente.toLowerCase() < b.razon_social_cliente.toLowerCase()) {
            return -1;
        }
        return 0;
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
    ordenarEquipos(a, b) {
        if (a.nombre_equipo.toLowerCase() > b.nombre_equipo.toLowerCase()) {
            return 1;
        }
        if (a.nombre_equipo.toLowerCase() < b.nombre_equipo.toLowerCase()) {
            return -1;
        }
        return 0;
    }
    ordenarTecnicos(a, b) {
        if (a.nombre_tecnico.toLowerCase() > b.nombre_tecnico.toLowerCase()) {
            return 1;
        }
        if (a.nombre_tecnico.toLowerCase() < b.nombre_tecnico.toLowerCase()) {
            return -1;
        }
        return 0;
    }
};
ProgramarVisitaPage.ctorParameters = () => [
    { type: _servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_2__["ApiVisitasService"] },
    { type: _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__["ServicioTecnicosService"] }
];
ProgramarVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-programar-visita',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./programar-visita.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/programar-visita/programar-visita.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./programar-visita.page.scss */ "./src/app/paginas/programar-visita/programar-visita.page.scss")).default]
    })
], ProgramarVisitaPage);



/***/ })

}]);
//# sourceMappingURL=paginas-programar-visita-programar-visita-module-es2015.js.map