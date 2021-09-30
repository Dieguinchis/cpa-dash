(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-alta-cliente-alta-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/alta-cliente/alta-cliente.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/alta-cliente/alta-cliente.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n\r\n  <ion-item style=\"margin-top: 15px;\" lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      *Razon social:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"razon_social\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Telefono (solo numeros):\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"telefono\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Email:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"email\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Direccion:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"direccion\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center;\">\r\n    <ion-button (click)=\"cargar_cliente()\">Cargar</ion-button>   \r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/paginas/alta-cliente/alta-cliente-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AltaClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaClientePageRoutingModule", function() { return AltaClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alta_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alta-cliente.page */ "./src/app/paginas/alta-cliente/alta-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _alta_cliente_page__WEBPACK_IMPORTED_MODULE_3__["AltaClientePage"]
    }
];
let AltaClientePageRoutingModule = class AltaClientePageRoutingModule {
};
AltaClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AltaClientePageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/alta-cliente/alta-cliente.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente.module.ts ***!
  \*************************************************************/
/*! exports provided: AltaClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaClientePageModule", function() { return AltaClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alta_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alta-cliente-routing.module */ "./src/app/paginas/alta-cliente/alta-cliente-routing.module.ts");
/* harmony import */ var _alta_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alta-cliente.page */ "./src/app/paginas/alta-cliente/alta-cliente.page.ts");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");








let AltaClientePageModule = class AltaClientePageModule {
};
AltaClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alta_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["AltaClientePageRoutingModule"]
        ],
        providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"]],
        declarations: [_alta_cliente_page__WEBPACK_IMPORTED_MODULE_6__["AltaClientePage"]]
    })
], AltaClientePageModule);



/***/ }),

/***/ "./src/app/paginas/alta-cliente/alta-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulos {\n  color: #838383;\n}\n\n.planos {\n  --background: rgb(214, 235, 245);\n}\n\nion-item {\n  width: 30%;\n  margin-left: 35%;\n  margin-bottom: 10px;\n}\n\n.imagen_empresa {\n  width: 50%;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hbHRhLWNsaWVudGUvRTpcXFRyYWJham9cXGNwYVxcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxhbHRhLWNsaWVudGVcXGFsdGEtY2xpZW50ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWx0YS1jbGllbnRlL2FsdGEtY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hbHRhLWNsaWVudGUvYWx0YS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG9ze1xyXG4gICAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKVxyXG59XHJcblxyXG4ucGxhbm9ze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE0LCAyMzUsIDI0NSk7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2VuX2VtcHJlc2F7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JVxyXG59IiwiLnRpdHVsb3Mge1xuICBjb2xvcjogIzgzODM4Mztcbn1cblxuLnBsYW5vcyB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIxNCwgMjM1LCAyNDUpO1xufVxuXG5pb24taXRlbSB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbWFnZW5fZW1wcmVzYSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/alta-cliente/alta-cliente.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente.page.ts ***!
  \***********************************************************/
/*! exports provided: AltaClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaClientePage", function() { return AltaClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_alta_clientes_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios/alta-clientes-api.service */ "./src/app/paginas/alta-cliente/servicios/alta-clientes-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let AltaClientePage = class AltaClientePage {
    constructor(api_clientes, navCtrl) {
        this.api_clientes = api_clientes;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    cargar_cliente() {
        if (this.razon_social) {
            this.api_clientes.alta_cliente({ 'razon_social_cliente': this.razon_social,
                'telefono': this.telefono,
                'email': this.email,
                'direccion': this.direccion }).subscribe(data => {
                console.log(data);
                this.navCtrl.navigateForward('/administrar-clientes');
                location.reload();
            }),
                (error => console.log(error));
        }
        else {
            alert('El campo Razon social es obligatorio');
        }
    }
};
AltaClientePage.ctorParameters = () => [
    { type: _servicios_alta_clientes_api_service__WEBPACK_IMPORTED_MODULE_2__["AltaClientesApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
AltaClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alta-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alta-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/alta-cliente/alta-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alta-cliente.page.scss */ "./src/app/paginas/alta-cliente/alta-cliente.page.scss")).default]
    })
], AltaClientePage);



/***/ }),

/***/ "./src/app/paginas/alta-cliente/servicios/alta-clientes-api.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/paginas/alta-cliente/servicios/alta-clientes-api.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AltaClientesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaClientesApiService", function() { return AltaClientesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/version */ "./src/environments/version.ts");




let AltaClientesApiService = class AltaClientesApiService {
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
    alta_cliente(datos) {
        return this.http.post(this.apiDir + '/clientes/crear', datos, this.requestOptions);
    }
};
AltaClientesApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AltaClientesApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AltaClientesApiService);



/***/ })

}]);
//# sourceMappingURL=paginas-alta-cliente-alta-cliente-module-es2015.js.map