function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-producto-crear-producto-module"], {
  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto-routing.module.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto-routing.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: CrearProductoPageRoutingModule */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioCrearProductoCrearProductoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearProductoPageRoutingModule", function () {
      return CrearProductoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _crear_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crear-producto.page */
    "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts");

    var routes = [{
      path: '',
      component: _crear_producto_page__WEBPACK_IMPORTED_MODULE_3__["CrearProductoPage"]
    }];

    var CrearProductoPageRoutingModule = function CrearProductoPageRoutingModule() {
      _classCallCheck(this, CrearProductoPageRoutingModule);
    };

    CrearProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CrearProductoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: CrearProductoPageModule */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioCrearProductoCrearProductoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearProductoPageModule", function () {
      return CrearProductoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _crear_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crear-producto-routing.module */
    "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto-routing.module.ts");
    /* harmony import */


    var _crear_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./crear-producto.page */
    "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts");

    var CrearProductoPageModule = function CrearProductoPageModule() {
      _classCallCheck(this, CrearProductoPageModule);
    };

    CrearProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearProductoPageRoutingModule"]],
      declarations: [_crear_producto_page__WEBPACK_IMPORTED_MODULE_6__["CrearProductoPage"]]
    })], CrearProductoPageModule);
    /***/
  }
}]);
//# sourceMappingURL=crear-producto-crear-producto-module-es5.js.map