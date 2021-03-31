function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-visita-ver-visita-module"], {
  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita-routing.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: VerVisitaPageRoutingModule */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerVisitaVerVisitaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerVisitaPageRoutingModule", function () {
      return VerVisitaPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ver_visita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ver-visita.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts");

    var routes = [{
      path: '',
      component: _ver_visita_page__WEBPACK_IMPORTED_MODULE_3__["VerVisitaPage"]
    }];

    var VerVisitaPageRoutingModule = function VerVisitaPageRoutingModule() {
      _classCallCheck(this, VerVisitaPageRoutingModule);
    };

    VerVisitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerVisitaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: VerVisitaPageModule */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerVisitaVerVisitaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerVisitaPageModule", function () {
      return VerVisitaPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ver_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ver-visita-routing.module */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita-routing.module.ts");
    /* harmony import */


    var _ver_visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ver-visita.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts");

    var VerVisitaPageModule = function VerVisitaPageModule() {
      _classCallCheck(this, VerVisitaPageModule);
    };

    VerVisitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ver_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerVisitaPageRoutingModule"]],
      declarations: [_ver_visita_page__WEBPACK_IMPORTED_MODULE_6__["VerVisitaPage"]]
    })], VerVisitaPageModule);
    /***/
  }
}]);
//# sourceMappingURL=ver-visita-ver-visita-module-es5.js.map