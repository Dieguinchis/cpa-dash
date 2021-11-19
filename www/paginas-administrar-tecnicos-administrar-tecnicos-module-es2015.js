(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-administrar-tecnicos-administrar-tecnicos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div>\r\n    <ion-item lines=\"none\">\r\n      <ion-label style=\"text-align: center;\"><b>Tecnicos</b></ion-label>\r\n      <ion-button (click)=\"altaTecnico()\">Agregar tecnico</ion-button>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" class=\"titulos\">\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Nombre</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Apellido</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>DNI</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Email</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Telefono</b></ion-label></ion-col>\r\n    </ion-item>     \r\n    <div *ngIf=\"tecnicos\">\r\n        <div *ngFor=\"let tecnico of tecnicos\">\r\n          <ion-item lines=\"full\">\r\n              <ion-col size=\"1\"></ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.nombre_tecnico}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.apellido_tecnico}} \r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.dni}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.email_tecnico}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.telefono_tecnico}}\r\n                </ion-label>\r\n              </ion-col> \r\n              <ion-col size=\"2\">\r\n                <ion-icon name=\"trash-outline\" color=\"danger\" (click)=\"confirmar_baja(tecnico.id_tecnico)\"></ion-icon>\r\n                <ion-icon name=\"create-outline\" color=\"primary\" (click)=\"modificar(tecnico)\"></ion-icon>\r\n              </ion-col>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title *ngIf=\"newuser\">Nuevo Tecnico</ion-title>\r\n    <ion-title *ngIf=\"!newuser\">Modificar Tecnico</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content >\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      Nombre:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"nombre\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Apellido:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"apellido\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      DNI:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"dni\" type=\"number\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Email:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"email\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Telefono:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"telefono\" type=\"number\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Usuario:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"usuario\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Contraseña:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"password\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center; margin-top: 15px;\">\r\n    <ion-button (click)=\"cancelar()\">Cancelar</ion-button>\r\n    <ion-button *ngIf=\"newuser\" (click)=\"alta_tecnico()\">Crear</ion-button>   \r\n    <ion-button *ngIf=\"!newuser\" (click)=\"modificar_tecnico()\">Modificar</ion-button>   \r\n\r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdministrarTecnicosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarTecnicosPageRoutingModule", function() { return AdministrarTecnicosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrar-tecnicos.page */ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts");




const routes = [
    {
        path: '',
        component: _administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_3__["AdministrarTecnicosPage"]
    },
    {
        path: 'alta-tecnicos',
        loadChildren: () => __webpack_require__.e(/*! import() | alta-tecnicos-alta-tecnicos-module */ "alta-tecnicos-alta-tecnicos-module").then(__webpack_require__.bind(null, /*! ./alta-tecnicos/alta-tecnicos.module */ "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.module.ts")).then(m => m.AltaTecnicosPageModule)
    }
];
let AdministrarTecnicosPageRoutingModule = class AdministrarTecnicosPageRoutingModule {
};
AdministrarTecnicosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdministrarTecnicosPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdministrarTecnicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarTecnicosPageModule", function() { return AdministrarTecnicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _administrar_tecnicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrar-tecnicos-routing.module */ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos-routing.module.ts");
/* harmony import */ var _administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrar-tecnicos.page */ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts");







let AdministrarTecnicosPageModule = class AdministrarTecnicosPageModule {
};
AdministrarTecnicosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _administrar_tecnicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrarTecnicosPageRoutingModule"]
        ],
        declarations: [_administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_6__["AdministrarTecnicosPage"]]
    })
], AdministrarTecnicosPageModule);



/***/ }),

/***/ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulos {\n  color: #838383;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci10ZWNuaWNvcy9EOlxcUmVwb3NpdG9yaW9zXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLXRlY25pY29zXFxhZG1pbmlzdHJhci10ZWNuaWNvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItdGVjbmljb3MvYWRtaW5pc3RyYXItdGVjbmljb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci10ZWNuaWNvcy9hZG1pbmlzdHJhci10ZWNuaWNvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvc3tcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSlcclxufSIsIi50aXR1bG9zIHtcbiAgY29sb3I6ICM4MzgzODM7XG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts ***!
  \***************************************************************************/
/*! exports provided: AdministrarTecnicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarTecnicosPage", function() { return AdministrarTecnicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alta_tecnicos_alta_tecnicos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alta-tecnicos/alta-tecnicos.page */ "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/servicio-tecnicos.service */ "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");





let AdministrarTecnicosPage = class AdministrarTecnicosPage {
    constructor(modalController, api_tecnicos, alertController) {
        this.modalController = modalController;
        this.api_tecnicos = api_tecnicos;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.api_tecnicos.listado_tecnicos().subscribe(data => {
            this.tecnicos = data;
            this.tecnicos = this.tecnicos.result;
            console.log(this.tecnicos);
        }), (error => {
            console.log(error);
        });
    }
    altaTecnico() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _alta_tecnicos_alta_tecnicos_page__WEBPACK_IMPORTED_MODULE_2__["AltaTecnicosPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    modificar(tecnico) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _alta_tecnicos_alta_tecnicos_page__WEBPACK_IMPORTED_MODULE_2__["AltaTecnicosPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    tecnico: tecnico
                }
            });
            return yield modal.present();
        });
    }
    confirmar_baja(id_tecnico) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Seguro que deseas dar de baja al tecnico?',
                message: 'No podra recuperarse este tecnico si se da de baja.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Dar de baja',
                        handler: () => {
                            this.baja_tecnico(id_tecnico);
                            //console.log('quiero borrar la publicacion', p.idpublicacion);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    baja_tecnico(id_tecnico) {
        this.api_tecnicos.baja_tecnico(id_tecnico).subscribe(data => {
            this.api_tecnicos.listado_tecnicos().subscribe(data => {
                this.tecnicos = data;
                this.tecnicos = this.tecnicos.result;
                console.log(this.tecnicos);
            }), (error => {
                console.log(error);
            });
        }, (error => {
            console.log(error);
        }));
    }
};
AdministrarTecnicosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__["ServicioTecnicosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
AdministrarTecnicosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-administrar-tecnicos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./administrar-tecnicos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./administrar-tecnicos.page.scss */ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.scss")).default]
    })
], AdministrarTecnicosPage);



/***/ }),

/***/ "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItdGVjbmljb3MvYWx0YS10ZWNuaWNvcy9hbHRhLXRlY25pY29zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.ts ***!
  \**********************************************************************************/
/*! exports provided: AltaTecnicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaTecnicosPage", function() { return AltaTecnicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/servicio-tecnicos.service */ "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let AltaTecnicosPage = class AltaTecnicosPage {
    constructor(api_tecnicos, modalCtrl, navParams) {
        this.api_tecnicos = api_tecnicos;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.newuser = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = yield this.navParams.get('tecnico');
            // id_tecnico,nombre_tecnico, apellido_tecnico, dni, email_tecnico, telefono_tecnico, user_tecnico, clave
            if (data != undefined || data != null) {
                this.nombre = data.nombre_tecnico;
                this.apellido = data.apellido_tecnico;
                this.dni = data.dni;
                this.telefono = data.telefono_tecnico;
                this.email = data.email_tecnico;
                this.usuario = data.user_tecnico;
                this.password = null;
                this.newuser = false;
                this.id = data.id_tecnico;
            }
        });
    }
    alta_tecnico() {
        console.log(this.usuario);
        this.api_tecnicos.alta_tecnico({ nombre_tecnico: this.nombre,
            apellido_tecnico: this.apellido,
            dni: this.dni,
            telefono: this.telefono,
            email: this.email,
            user: this.usuario,
            clave: this.password }).subscribe(data => {
            console.log(data);
            location.reload();
        }), (error => console.log(error));
    }
    modificar_tecnico() {
        console.log(this.usuario);
        // id_tecnico,nombre_tecnico, apellido_tecnico, dni, email_tecnico, telefono_tecnico, user_tecnico, clave
        this.api_tecnicos.modificar_tecnico({ id_tecnico: this.id,
            nombre_tecnico: this.nombre,
            apellido_tecnico: this.apellido,
            dni: this.dni,
            email_tecnico: this.email,
            telefono_tecnico: this.telefono,
            user_tecnico: this.usuario,
            clave: this.password }).subscribe(data => {
            console.log(data);
            location.reload();
        }), (error => console.log(error));
    }
    cancelar() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
AltaTecnicosPage.ctorParameters = () => [
    { type: _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_2__["ServicioTecnicosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
AltaTecnicosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alta-tecnicos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alta-tecnicos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alta-tecnicos.page.scss */ "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.scss")).default]
    })
], AltaTecnicosPage);



/***/ }),

/***/ "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ServicioTecnicosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioTecnicosService", function() { return ServicioTecnicosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/version */ "./src/environments/version.ts");




let ServicioTecnicosService = class ServicioTecnicosService {
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
    listado_tecnicos() {
        return this.http.get(this.apiDir + '/tecnicos', this.requestOptions);
    }
    alta_tecnico(datos) {
        return this.http.post(this.apiDir + '/tecnicos/crear', datos, this.requestOptions);
    }
    modificar_tecnico(datos) {
        return this.http.post(this.apiDir + '/tecnicos/update', datos, this.requestOptions);
    }
    baja_tecnico(id_tecnico) {
        return this.http.delete(this.apiDir + '/tecnicos/eliminar/' + id_tecnico, this.requestOptions);
    }
};
ServicioTecnicosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServicioTecnicosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServicioTecnicosService);



/***/ })

}]);
//# sourceMappingURL=paginas-administrar-tecnicos-administrar-tecnicos-module-es2015.js.map