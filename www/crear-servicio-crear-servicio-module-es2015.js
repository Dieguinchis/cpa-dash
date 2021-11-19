(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-servicio-crear-servicio-module"],{

/***/ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CrearServicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearServicioPageRoutingModule", function() { return CrearServicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-servicio.page */ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts");




const routes = [
    {
        path: '',
        component: _crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__["CrearServicioPage"]
    }
];
let CrearServicioPageRoutingModule = class CrearServicioPageRoutingModule {
};
CrearServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearServicioPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CrearServicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearServicioPageModule", function() { return CrearServicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-servicio-routing.module */ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio-routing.module.ts");
/* harmony import */ var _crear_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-servicio.page */ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts");







let CrearServicioPageModule = class CrearServicioPageModule {
};
CrearServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearServicioPageRoutingModule"]
        ],
        declarations: [_crear_servicio_page__WEBPACK_IMPORTED_MODULE_6__["CrearServicioPage"]]
    })
], CrearServicioPageModule);



/***/ })

}]);
//# sourceMappingURL=crear-servicio-crear-servicio-module-es2015.js.map