function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modificar-cliente-modificar-cliente-module"], {
  /***/
  "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente-routing.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente-routing.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ModificarClientePageRoutingModule */

  /***/
  function srcAppPaginasAdministrarClientesModificarClienteModificarClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarClientePageRoutingModule", function () {
      return ModificarClientePageRoutingModule;
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


    var _modificar_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modificar-cliente.page */
    "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.ts");

    var routes = [{
      path: '',
      component: _modificar_cliente_page__WEBPACK_IMPORTED_MODULE_3__["ModificarClientePage"]
    }];

    var ModificarClientePageRoutingModule = function ModificarClientePageRoutingModule() {
      _classCallCheck(this, ModificarClientePageRoutingModule);
    };

    ModificarClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModificarClientePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: ModificarClientePageModule */

  /***/
  function srcAppPaginasAdministrarClientesModificarClienteModificarClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarClientePageModule", function () {
      return ModificarClientePageModule;
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


    var _modificar_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modificar-cliente-routing.module */
    "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente-routing.module.ts");
    /* harmony import */


    var _modificar_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modificar-cliente.page */
    "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");

    var ModificarClientePageModule = function ModificarClientePageModule() {
      _classCallCheck(this, ModificarClientePageModule);
    };

    ModificarClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modificar_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModificarClientePageRoutingModule"]],
      providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"]],
      declarations: [_modificar_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ModificarClientePage"]]
    })], ModificarClientePageModule);
    /***/
  }
}]);
//# sourceMappingURL=modificar-cliente-modificar-cliente-module-es5.js.map