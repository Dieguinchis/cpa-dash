(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-sucursal-ver-sucursal-module"],{

/***/ "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: VerSucursalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerSucursalPageRoutingModule", function() { return VerSucursalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ver_sucursal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-sucursal.page */ "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.ts");




const routes = [
    {
        path: '',
        component: _ver_sucursal_page__WEBPACK_IMPORTED_MODULE_3__["VerSucursalPage"]
    },
    {
        path: 'alta-workstation',
        loadChildren: () => __webpack_require__.e(/*! import() | alta-workstation-alta-workstation-module */ "alta-workstation-alta-workstation-module").then(__webpack_require__.bind(null, /*! ./alta-workstation/alta-workstation.module */ "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.module.ts")).then(m => m.AltaWorkstationPageModule)
    }
];
let VerSucursalPageRoutingModule = class VerSucursalPageRoutingModule {
};
VerSucursalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerSucursalPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: VerSucursalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerSucursalPageModule", function() { return VerSucursalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ver_sucursal_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-sucursal-routing.module */ "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal-routing.module.ts");
/* harmony import */ var _ver_sucursal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ver-sucursal.page */ "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.ts");








let VerSucursalPageModule = class VerSucursalPageModule {
};
VerSucursalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ver_sucursal_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerSucursalPageRoutingModule"]
        ],
        providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_4__["NgxImageCompressService"]],
        declarations: [_ver_sucursal_page__WEBPACK_IMPORTED_MODULE_7__["VerSucursalPage"]]
    })
], VerSucursalPageModule);



/***/ })

}]);
//# sourceMappingURL=ver-sucursal-ver-sucursal-module-es2015.js.map