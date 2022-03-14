function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n  <!-- <div style=\"color: red; padding: 10px; border: solid red 1px; position: fixed;top: 0px; left: 0px;font-weight: bold;\">\r\n    Version de desarrollo\r\n  </div> -->\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/editar-visita/editar-visita.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/editar-visita/editar-visita.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsEditarVisitaEditarVisitaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\n    <ion-title>{{equipo?equipo:servicio?.nombreDelServicio}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- Servicios Sin productos -->\n    <div *ngIf=\"servicio\">\n      <div *ngFor = \"let campo of servicio.formulario; let i = index\">\n        <div *ngIf = \"campo.tipoCampo =='Select' || campo.tipoCampo =='select'\">\n          <ion-item>\n            <ion-label>{{campo.nombreCampo}}</ion-label>\n            <ion-select [(ngModel)] = \"respuestas[i].respuesta\" mode=\"ios\" >\n              <ion-select-option *ngFor = \"let campo_opciones of campo.opciones; let h = index\" [value]=\"campo_opciones.name\" >{{campo_opciones.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div *ngIf = \"campo.tipoCampo =='multiple' || campo.tipoCampo =='Multiple' \">\n          <ion-item>\n            <ion-label>{{campo.nombreCampo}}</ion-label>\n            <ion-select multiple [(ngModel)] = \"respuestas[i].respuesta\" mode=\"ios\">\n              <ion-select-option *ngFor = \"let campo_opciones of campo.opciones\" [value]=\"campo_opciones.name\" >{{campo_opciones.name}}</ion-select-option>\n            </ion-select>\n            </ion-item>\n            <div *ngIf = \"(campo.tipoCampo =='multiple' || campo.tipoCampo =='Multiple') && campo.id_campo == 30 && mostrarOtros()\">\n            <ion-item>\n                  <ion-label>Otros: </ion-label>\n                  <ion-input  style = \"margin-left: 10px;\" [(ngModel)] =\"otros\" mode=\"ios\"></ion-input>\n            </ion-item>\n          </div>\n        </div>\n  \n  \n        <div *ngIf = \"campo.tipoCampo == 'input'|| campo.tipoCampo =='Input'\">\n          <ion-item>\n                <ion-label>{{campo.nombreCampo}}</ion-label>\n                <ion-input style = \"margin-left: 10px;\" [(ngModel)] =\"respuestas[i].respuesta\" mode=\"ios\"></ion-input>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n  \n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <div>\n         <ion-button (click)=\"modalDissmiss()\" style=\"width: 50%\" class = \"button\">Volver</ion-button>\n        </div>\n      </ion-col>\n      <ion-col class=\"ion-text-center\">\n        <div>\n         <ion-button  (click)=\"guardar()\" style=\"width: 50%\" class = \"button\">Guardar</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsVerServicioVisitaVerServicioVisitaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>{{servicios?servicios[0]?.nombre_servicio:null}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"servicios?.length == 0\" style=\"text-align: center;\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <div *ngIf=\"servicios?.length != 0\">\r\n    <ion-item *ngFor=\"let servicio of servicios\" (click)=\"editarServicio(servicio.id_formulario, servicio.nombre_equipo)\">\r\n      <ion-label>{{servicio.nombre_equipo}} {{servicio.zona}} - {{servicio.nro_equipo}}{{(servicio.tecnico.nombre_tecnico)?' - ' + servicio.tecnico.nombre_tecnico + ' ' + servicio.tecnico.apellido_tecnico:''}}{{(servicio?.respuestas[0]?.tapado == 0)?' - (QR)':''}}</ion-label>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        <div>\r\n         <ion-button (click)=\"modalDismiss()\" style=\"width: 50%\" class = \"button\">Volver</ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarServiciosVerServicioModificarProductoModificarProductoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Estado del Puesto:\n    </ion-label>\n    <ion-select [(ngModel)]=\"opcionPredeterminada[0]\">\n      <ion-select-option *ngFor=\"let opcion of opcionesPuesto\" [value]=\"opcion.tipo_opcion\">{{opcion.tipo_opcion}}</ion-select-option>\n      <ion-select-option [value]=\"null\" >Sin Preselección</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Estado del Cebo:\n    </ion-label>\n    <ion-select [(ngModel)]=\"opcionPredeterminada[1]\">\n      <ion-select-option *ngFor=\"let opcion of opcionesCebo\" [value]=\"opcion.tipo_opcion\">{{opcion.tipo_opcion}}</ion-select-option>\n      <ion-select-option [value]=\"null\" >Sin Preselección</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <div>\n       <ion-button (click)=\"modalDismiss()\" style=\"width: 50%\" class = \"button\">Volver</ion-button>\n      </div>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <div>\n       <ion-button  (click)=\"guardar()\" style=\"width: 50%\" class = \"button\">Guardar</ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_login_guards_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/login-guards.guard */
    "./src/app/guards/login-guards.guard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | menu-principal-menu-principal-module */
        "menu-principal-menu-principal-module").then(__webpack_require__.bind(null,
        /*! ./menu-principal/menu-principal.module */
        "./src/app/menu-principal/menu-principal.module.ts")).then(function (m) {
          return m.MenuPrincipalPageModule;
        });
      },
      canActivate: [_guards_login_guards_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuardsGuard"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'administrar-visitas',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | paginas-administrar-visitas-administrar-visitas-module */
        [__webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~b66acba8"), __webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~5d227966"), __webpack_require__.e("paginas-administrar-visitas-administrar-visitas-module")]).then(__webpack_require__.bind(null,
        /*! ./paginas/administrar-visitas/administrar-visitas.module */
        "./src/app/paginas/administrar-visitas/administrar-visitas.module.ts")).then(function (m) {
          return m.AdministrarVisitasPageModule;
        });
      }
    }, {
      path: 'estadisticas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | paginas-estadisticas-estadisticas-module */
        "paginas-estadisticas-estadisticas-module").then(__webpack_require__.bind(null,
        /*! ./paginas/estadisticas/estadisticas.module */
        "./src/app/paginas/estadisticas/estadisticas.module.ts")).then(function (m) {
          return m.EstadisticasPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _login_servicios_servicio_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/servicios/servicio-login.service */
    "./src/app/login/servicios/servicio-login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, loginService, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.loginService = loginService;
        this.router = router;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.checkVersion();
          });
        }
      }, {
        key: "checkVersion",
        value: function checkVersion() {
          var _this2 = this;

          this.loginService.checkVersion().then(function (resp) {
            if (resp.badVersion) {
              alert('La version utilizada de la app no es la ultima, Por favor aguarde unos minutos, elimine el cache y actualice la pagina.');
            } else {}
          })["catch"](function (err) {
            console.error(err);

            if (err.error.badVersion) {
              alert('La version utilizada de la app no es la ultima, Por favor aguarde unos minutos, elimine el cache y actualice la pagina.');

              _this2.router.navigate(['/login']);
            } else {}
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _login_servicios_servicio_login_service__WEBPACK_IMPORTED_MODULE_5__["ServicioLoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var _modals_editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modals/editar-visita/editar-visita.component */
    "./src/app/modals/editar-visita/editar-visita.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _paginas_administrar_servicios_ver_servicio_modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component */
    "./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.ts");
    /* harmony import */


    var _modals_ver_servicio_visita_ver_servicio_visita_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modals/ver-servicio-visita/ver-servicio-visita.component */
    "./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _modals_editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_14__["EditarVisitaComponent"], _paginas_administrar_servicios_ver_servicio_modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_16__["ModificarProductoComponent"], _modals_ver_servicio_visita_ver_servicio_visita_component__WEBPACK_IMPORTED_MODULE_17__["VerServicioVisitaComponent"]],
      entryComponents: [_modals_editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_14__["EditarVisitaComponent"], _paginas_administrar_servicios_ver_servicio_modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_16__["ModificarProductoComponent"], _modals_ver_servicio_visita_ver_servicio_visita_component__WEBPACK_IMPORTED_MODULE_17__["VerServicioVisitaComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], ngx_image_compress__WEBPACK_IMPORTED_MODULE_13__["NgxImageCompressService"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guards/login-guards.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/guards/login-guards.guard.ts ***!
    \**********************************************/

  /*! exports provided: LoginGuardsGuard */

  /***/
  function srcAppGuardsLoginGuardsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuardsGuard", function () {
      return LoginGuardsGuard;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var LoginGuardsGuard = /*#__PURE__*/function () {
      function LoginGuardsGuard(storage, router) {
        _classCallCheck(this, LoginGuardsGuard);

        this.storage = storage;
        this.router = router;
      }

      _createClass(LoginGuardsGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            _this3.storage.get('token').then(function (data) {
              if (data) {
                resolve(true);
              } else {
                _this3.router.navigate(['/login']);

                console.log('no tenia token');
                resolve(false);
              }
            }, function (error) {
              _this3.router.navigate(['/login']);

              console.log('no tenia token');
              resolve(false);
            });
          });
        }
      }]);

      return LoginGuardsGuard;
    }();

    LoginGuardsGuard.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginGuardsGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginGuardsGuard);
    /***/
  },

  /***/
  "./src/app/login/servicios/servicio-login.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/login/servicios/servicio-login.service.ts ***!
    \***********************************************************/

  /*! exports provided: ServicioLoginService */

  /***/
  function srcAppLoginServiciosServicioLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioLoginService", function () {
      return ServicioLoginService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/version */
    "./src/environments/version.ts");

    var ServicioLoginService = /*#__PURE__*/function () {
      function ServicioLoginService(http) {
        _classCallCheck(this, ServicioLoginService);

        this.http = http;
        this.apiDir = "http://192.168.0.71:3000";
        this.requestOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'version': _environments_version__WEBPACK_IMPORTED_MODULE_3__["version"]
          })
        };
      }

      _createClass(ServicioLoginService, [{
        key: "login",
        value: function login(parametros) {
          return this.http.post(this.apiDir + '/auth/signin', parametros, this.requestOptions);
        }
      }, {
        key: "checkVersion",
        value: function checkVersion() {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.http.get(_this4.apiDir + '/', _this4.requestOptions).subscribe(function (resp) {
              resolve(resp);
            }, function (err) {
              reject(err);
            });
          });
        }
      }]);

      return ServicioLoginService;
    }();

    ServicioLoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServicioLoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServicioLoginService);
    /***/
  },

  /***/
  "./src/app/modals/editar-visita/editar-visita.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/modals/editar-visita/editar-visita.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsEditarVisitaEditarVisitaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9lZGl0YXItdmlzaXRhL2VkaXRhci12aXNpdGEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modals/editar-visita/editar-visita.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modals/editar-visita/editar-visita.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EditarVisitaComponent */

  /***/
  function srcAppModalsEditarVisitaEditarVisitaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarVisitaComponent", function () {
      return EditarVisitaComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_paginas_administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/paginas/administrar-servicios/servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var src_app_paginas_programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/paginas/programar-visita/servicios/api-visitas.service */
    "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");

    var EditarVisitaComponent = /*#__PURE__*/function () {
      function EditarVisitaComponent(navParams, apiServicios, apiVisitas, modalcontroller) {
        _classCallCheck(this, EditarVisitaComponent);

        this.navParams = navParams;
        this.apiServicios = apiServicios;
        this.apiVisitas = apiVisitas;
        this.modalcontroller = modalcontroller;
      }

      _createClass(EditarVisitaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.id_servicio = this.navParams.get('id_servicio');
          this.id_visita = this.navParams.get('id_visita');
          this.id_formulario = this.navParams.get('id_formulario');

          if (this.navParams.get('equipo')) {
            this.equipo = this.navParams.get('equipo');
          }

          console.log(this.id_formulario);
          this.apiVisitas.getRespuestas(this.id_formulario).then(function (resp) {
            _this5.respuestas = resp.respuestas;
            console.log(_this5.respuestas);

            _this5.apiServicios.ver_servicio(_this5.id_servicio).subscribe(function (resp) {
              _this5.servicio = resp.result;

              var _loop = function _loop(index) {
                var element = _this5.servicio.formulario[index];

                if (element.tipoCampo.toLowerCase() == 'multiple' && element.id_campo == 30) {
                  lastElement = _this5.respuestas[index].respuesta.split(' - ')[_this5.respuestas[index].respuesta.split(' - ').length - 1];

                  if (!element.opciones.find(function (opcion) {
                    return opcion.name == lastElement;
                  })) {
                    _this5.otros = lastElement;
                  }

                  aux = _this5.respuestas[index].respuesta;
                  _this5.respuestas[index].respuesta = [];

                  for (var index2 = 0; index2 < aux.split(' - ').length; index2++) {
                    var _element = aux.split(' - ')[index2];

                    if (!(_element == "")) {
                      _this5.respuestas[index].respuesta[index2] = _element;
                    }
                  }

                  if (!element.opciones.find(function (opcion) {
                    return opcion.name == _this5.respuestas[index].respuesta[_this5.respuestas[index].respuesta.length - 1];
                  })) {
                    _this5.respuestas[index].respuesta[_this5.respuestas[index].respuesta.length - 1] = 'Otros';
                  }
                }

                if (element.tipoCampo.toLowerCase() == 'multiple' && element.id_campo != 30) {
                  aux = _this5.respuestas[index].respuesta;
                  _this5.respuestas[index].respuesta = [];

                  for (var _index2 = 0; _index2 < aux.split(' - ').length; _index2++) {
                    var _element2 = aux.split(' - ')[_index2];

                    if (!(_element2 == "")) {
                      _this5.respuestas[index].respuesta[_index2] = _element2;
                    }
                  }

                  if (_this5.respuestas[index].respuesta.length == 1) {}
                }
              };

              for (var index = 0; index < _this5.servicio.formulario.length; index++) {
                var lastElement;
                var aux;
                var aux;

                _loop(index);
              }

              console.log(_this5.servicio);

              var indexRespId55 = _this5.respuestas.findIndex(function (respuesta) {
                return respuesta.id_campo == 55;
              });

              if (_this5.respuestas[indexRespId55]) {
                _this5.respuestas[indexRespId55].respuesta = _this5.servicio.listaProductos.find(function (producto) {
                  return producto.id_producto == _this5.respuestas[indexRespId55].respuesta;
                }).tipo_producto;
              }

              var indexRespId70 = _this5.respuestas.findIndex(function (respuesta) {
                return respuesta.id_campo == 70;
              });

              if (_this5.respuestas[indexRespId70]) {
                var aux = _this5.respuestas[indexRespId70];
                var arrayAux = [];

                var _loop2 = function _loop2(_index) {
                  arrayAux.push(_this5.servicio.listaProductos.find(function (producto) {
                    return producto.id_producto == _this5.respuestas[indexRespId70].respuesta[_index];
                  }).tipo_producto);
                };

                for (var _index = 0; _index < _this5.respuestas[indexRespId70].respuesta.length; _index++) {
                  _loop2(_index);
                }

                _this5.respuestas[indexRespId70].respuesta = arrayAux;
              }

              console.log(_this5.respuestas);
            });
          })["catch"](function (err) {
            console.warn(err);
          });
        }
      }, {
        key: "modalDissmiss",
        value: function modalDissmiss() {
          this.modalcontroller.dismiss();
        }
      }, {
        key: "prueba1",
        value: function prueba1(campo) {
          console.log(campo);
        }
      }, {
        key: "prueba",
        value: function prueba() {
          console.log(this.respuestas);
        }
      }, {
        key: "cambio",
        value: function cambio(respuesta, i) {
          this.respuestas[i].respuesta = respuesta.toString();
        }
      }, {
        key: "guardar",
        value: function guardar() {
          var _this6 = this;

          if (this.respuestas.find(function (respuesta) {
            return respuesta.id_campo == 30;
          })) {
            var auxIndex = this.respuestas.findIndex(function (respuesta) {
              return respuesta.id_campo == 30;
            });

            if (this.respuestas[auxIndex].respuesta.includes('Otros')) {
              this.respuestas[auxIndex].respuesta.splice(this.respuestas[auxIndex].respuesta.length - 1, 1, this.otros);
            }
          }

          for (var index = 0; index < this.servicio.formulario.length; index++) {
            var element = this.servicio.formulario[index];

            if (element.tipoCampo.toLowerCase() == 'multiple') {
              var aux = this.respuestas[index].respuesta;
              var cadenaFinal;

              for (var index2 = 0; index2 < aux.length; index2++) {
                var cadena = aux[index2];
                console.log(cadena);

                if (index2 == 0) {
                  console.log('5');
                  cadenaFinal = cadena;
                } else {
                  console.log('6');
                  cadenaFinal = cadenaFinal + ' - ' + cadena;
                }
              }

              this.respuestas[index].respuesta = cadenaFinal;
            }

            var stringAux;

            if (element.nombreCampo == 'Tipo de producto') {
              var _loop3 = function _loop3(_index3) {
                var nombreProducto = _this6.respuestas[index].respuesta.split(' - ')[_index3];

                console.log(nombreProducto);
                aux = _this6.servicio.listaProductos.find(function (producto) {
                  return producto.nombre_producto.toLowerCase() == nombreProducto.toLowerCase();
                });

                if (!aux) {
                  aux = _this6.servicio.listaProductos.find(function (producto) {
                    return producto.tipo_producto.toLowerCase() == nombreProducto.toLowerCase();
                  });
                }

                if (_index3 == 0) {
                  stringAux = aux.id_producto.toString();
                } else {
                  stringAux = stringAux + ' - ' + aux.id_producto.toString();
                }
              };

              for (var _index3 = 0; _index3 < this.respuestas[index].respuesta.split(' - ').length; _index3++) {
                var aux;

                _loop3(_index3);
              }

              this.respuestas[index].respuesta = stringAux;
            }
          }

          this.apiVisitas.cambiarRespuestas(this.respuestas).then(function (resp) {
            _this6.modalDissmiss();
          });
        }
      }, {
        key: "mostrarOtros",
        value: function mostrarOtros() {
          var _a;

          var aux = this.respuestas.find(function (respuesta) {
            return respuesta.id_campo == 30;
          });
          return (_a = aux === null || aux === void 0 ? void 0 : aux.respuesta) === null || _a === void 0 ? void 0 : _a.includes('Otros');
        }
      }]);

      return EditarVisitaComponent;
    }();

    EditarVisitaComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_paginas_administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"]
      }, {
        type: src_app_paginas_programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditarVisitaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editar-visita',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editar-visita.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/editar-visita/editar-visita.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editar-visita.component.scss */
      "./src/app/modals/editar-visita/editar-visita.component.scss"))["default"]]
    })], EditarVisitaComponent);
    /***/
  },

  /***/
  "./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsVerServicioVisitaVerServicioVisitaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy92ZXItc2VydmljaW8tdmlzaXRhL3Zlci1zZXJ2aWNpby12aXNpdGEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: VerServicioVisitaComponent */

  /***/
  function srcAppModalsVerServicioVisitaVerServicioVisitaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerServicioVisitaComponent", function () {
      return VerServicioVisitaComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_paginas_administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/paginas/administrar-servicios/servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var src_app_paginas_programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/paginas/programar-visita/servicios/api-visitas.service */
    "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");
    /* harmony import */


    var _editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../editar-visita/editar-visita.component */
    "./src/app/modals/editar-visita/editar-visita.component.ts");

    var VerServicioVisitaComponent = /*#__PURE__*/function () {
      function VerServicioVisitaComponent(navParams, apiServicios, apiVisitas, modalController) {
        _classCallCheck(this, VerServicioVisitaComponent);

        this.navParams = navParams;
        this.apiServicios = apiServicios;
        this.apiVisitas = apiVisitas;
        this.modalController = modalController;
        this.servicios = [];
      }

      _createClass(VerServicioVisitaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.id_servicio = this.navParams.get('id_servicio');
          var aux = [];
          new Promise(function (resolve, reject) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var index, servicio, resp, response, response2;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      index = 0;

                    case 1:
                      if (!(index < this.navParams.get('visita').servicios.length)) {
                        _context.next = 25;
                        break;
                      }

                      servicio = this.navParams.get('visita').servicios[index];
                      console.log('I', index);

                      if (!((servicio.id_servicio == 20 || servicio.id_servicio == 22) && servicio.id_servicio == this.id_servicio)) {
                        _context.next = 21;
                        break;
                      }

                      _context.next = 7;
                      return this.apiVisitas.getRespuestas(servicio.id_formulario);

                    case 7:
                      resp = _context.sent;
                      servicio.respuestas = resp;
                      servicio.respuestas = servicio.respuestas.respuestas;
                      _context.next = 12;
                      return this.apiVisitas.getEquipo(servicio.respuestas[0].id_equipo);

                    case 12:
                      response = _context.sent;
                      response2 = response;

                      if (index == 100) {
                        console.warn(response2);
                      }

                      if (response2.result) {
                        if (response2.result[0]) {
                          servicio.nombre_equipo = response2.result[0].nombre_equipo;
                          servicio.zona = response2.result[0].zona;
                          servicio.nro_equipo = response2.result[0].nro_equipo;
                        }
                      }

                      aux.push(servicio);
                      console.log(index == this.navParams.get('visita').servicios.length - 1);

                      if (index == this.navParams.get('visita').servicios.length - 1) {
                        console.log("CERRO");
                        resolve('');
                      }

                      _context.next = 22;
                      break;

                    case 21:
                      if (index == this.navParams.get('visita').servicios.length - 1) {
                        console.log("CERRO");
                        resolve('');
                      }

                    case 22:
                      index++;
                      _context.next = 1;
                      break;

                    case 25:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }).then(function () {
            _this7.servicios = aux;
            console.log(_this7.servicios);

            _this7.servicios.sort(function (a, b) {
              if (a.nombre_equipo > b.nombre_equipo) {
                return 1;
              } else if (b.nombre_equipo > a.nombre_equipo) {
                return -1;
              } else {
                if (a.zona > b.zona) {
                  return 1;
                } else if (b.zona > a.zona) {
                  return -1;
                } else {
                  console.log(a.zona, b.zona);
                  return a.nro_equipo - b.nro_equipo;
                }
              }
            });
          })["catch"](function (err) {
            console.error(err);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "editarServicio",
        value: function editarServicio(id_formulario, equipo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_5__["EditarVisitaComponent"],
                      componentProps: {
                        id_servicio: this.id_servicio,
                        id_visita: this.navParams.get('visita').id_visita,
                        id_formulario: id_formulario,
                        equipo: equipo
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "modalDismiss",
        value: function modalDismiss() {
          this.modalController.dismiss();
        }
      }]);

      return VerServicioVisitaComponent;
    }();

    VerServicioVisitaComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_paginas_administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"]
      }, {
        type: src_app_paginas_programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    VerServicioVisitaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-servicio-visita',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ver-servicio-visita.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ver-servicio-visita.component.scss */
      "./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.scss"))["default"]]
    })], VerServicioVisitaComponent);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: ApiServiciosService */

  /***/
  function srcAppPaginasAdministrarServiciosServiciosApiServiciosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiServiciosService", function () {
      return ApiServiciosService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/version */
    "./src/environments/version.ts");

    var ApiServiciosService = /*#__PURE__*/function () {
      function ApiServiciosService(http) {
        _classCallCheck(this, ApiServiciosService);

        this.http = http;
        this.apiDir = "http://192.168.0.71:3000";
        this.requestOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'version': _environments_version__WEBPACK_IMPORTED_MODULE_3__["version"]
          })
        };
      }

      _createClass(ApiServiciosService, [{
        key: "crear_servicio",
        value: function crear_servicio(parametros) {
          console.log(parametros);
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/crear', parametros, this.requestOptions);
        }
      }, {
        key: "mostrar_servicios",
        value: function mostrar_servicios() {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios', this.requestOptions);
        }
      }, {
        key: "getZpl",
        value: function getZpl(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/imprimir', parametros, this.requestOptions);
        }
      }, {
        key: "alta_producto",
        value: function alta_producto(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/productos/crear', parametros, this.requestOptions);
        }
      }, {
        key: "alta_workstation",
        value: function alta_workstation(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/equipos/crear', parametros, this.requestOptions);
        }
      }, {
        key: "alta_Grupo_workstation",
        value: function alta_Grupo_workstation(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/gruposEquipos/crear', parametros, this.requestOptions);
        }
      }, {
        key: "eliminar_Grupo_workstation",
        value: function eliminar_Grupo_workstation(id_producto) {
          console.log('delete2', id_producto);
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/eliminarGrupoEquipos/' + id_producto, null, this.requestOptions);
        }
      }, {
        key: "modificar_Grupo_workstation",
        value: function modificar_Grupo_workstation(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/gruposEquipos/crear', parametros, this.requestOptions);
        }
      }, {
        key: "ver_servicio",
        value: function ver_servicio(id_servicio) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios/id/' + id_servicio, this.requestOptions);
        }
      }, {
        key: "baja_producto",
        value: function baja_producto(id_producto) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/productos/eliminar/' + id_producto, null, this.requestOptions);
        }
      }, {
        key: "baja_servicio",
        value: function baja_servicio(id_servicio) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/eliminar/' + id_servicio, null, this.requestOptions);
        }
      }, {
        key: "update_servicio",
        value: function update_servicio(parametros) {
          // console.log(parametros)
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/update', parametros, this.requestOptions);
        }
      }, {
        key: "baja_opcion",
        value: function baja_opcion(id) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/opcion/delete/', {
            id: id
          }, this.requestOptions);
        }
      }, {
        key: "ver_opciones_producto",
        value: function ver_opciones_producto(id_servicio) {
          console.log(id_servicio);
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios/producto/opciones/' + id_servicio, this.requestOptions);
        }
      }, {
        key: "producto_update",
        value: function producto_update(producto) {
          console.log(producto);
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/productos/actualizar', producto, this.requestOptions);
        }
      }, {
        key: "getProductos",
        value: function getProductos() {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/productos/', this.requestOptions);
        }
      }]);

      return ApiServiciosService;
    }();

    ApiServiciosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiServiciosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiServiciosService);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioModificarProductoModificarProductoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL3Zlci1zZXJ2aWNpby9tb2RpZmljYXItcHJvZHVjdG8vbW9kaWZpY2FyLXByb2R1Y3RvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: ModificarProductoComponent */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioModificarProductoModificarProductoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarProductoComponent", function () {
      return ModificarProductoComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");

    var ModificarProductoComponent = /*#__PURE__*/function () {
      function ModificarProductoComponent(apiServicios, navParams, modalController) {
        var _this8 = this;

        _classCallCheck(this, ModificarProductoComponent);

        this.apiServicios = apiServicios;
        this.navParams = navParams;
        this.modalController = modalController;
        this.opcionesCebo = [];
        this.opcionesPuesto = [];
        this.opcionPredeterminada = [];
        this.producto = navParams.get('producto');
        apiServicios.ver_opciones_producto(this.producto.id_servicio).subscribe(function (resp) {
          var opciones;
          console.log(resp);
          opciones = resp.result;

          var _iterator = _createForOfIteratorHelper(opciones),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var opcion = _step.value;

              if (opcion.id_campo == 56) {
                _this8.opcionesPuesto.push(opcion);
              } else {
                _this8.opcionesCebo.push(opcion);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (_this8.producto.opcion_predeterminada) {
            _this8.opcionPredeterminada[0] = _this8.producto.opcion_predeterminada.split(' - ')[0];
            _this8.opcionPredeterminada[1] = _this8.producto.opcion_predeterminada.split(' - ')[1];
          }

          console.log(_this8.opcionPredeterminada);
          console.log("PRODUCTO", _this8.producto);
          console.log("CEBO", _this8.opcionesCebo);
          console.log("PUESTO", _this8.opcionesPuesto);
        });
      }

      _createClass(ModificarProductoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "guardar",
        value: function guardar() {
          var _this9 = this;

          var opcionPredAux = this.opcionPredeterminada[0] + ' - ' + this.opcionPredeterminada[1];
          console.log(opcionPredAux);
          this.producto.opcion_predeterminada = opcionPredAux;
          this.apiServicios.producto_update(this.producto).subscribe(function (resp) {
            console.log(resp);

            _this9.modalController.dismiss();
          });
        }
      }, {
        key: "modalDismiss",
        value: function modalDismiss() {
          this.modalController.dismiss();
        }
      }]);

      return ModificarProductoComponent;
    }();

    ModificarProductoComponent.ctorParameters = function () {
      return [{
        type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModificarProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modificar-producto',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modificar-producto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modificar-producto.component.scss */
      "./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.scss"))["default"]]
    })], ModificarProductoComponent);
    /***/
  },

  /***/
  "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/paginas/programar-visita/servicios/api-visitas.service.ts ***!
    \***************************************************************************/

  /*! exports provided: ApiVisitasService */

  /***/
  function srcAppPaginasProgramarVisitaServiciosApiVisitasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiVisitasService", function () {
      return ApiVisitasService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/version */
    "./src/environments/version.ts");

    var ApiVisitasService = /*#__PURE__*/function () {
      function ApiVisitasService(http) {
        _classCallCheck(this, ApiVisitasService);

        this.http = http;
        this.apiDir = "http://192.168.0.71:3000";
        this.requestOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'version': _environments_version__WEBPACK_IMPORTED_MODULE_3__["version"]
          })
        };
      }

      _createClass(ApiVisitasService, [{
        key: "listado_clientes",
        value: function listado_clientes() {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/clientes', this.requestOptions);
        }
      }, {
        key: "listado_equipos",
        value: function listado_equipos(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios/equipos/offline/' + id, this.requestOptions);
        }
      }, {
        key: "listado_equipos_id",
        value: function listado_equipos_id(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios/equipos/sucursal/' + id, this.requestOptions);
        }
      }, {
        key: "informacion_cliente",
        value: function informacion_cliente(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/clientes/id/' + id, this.requestOptions);
        }
      }, {
        key: "mostrar_servicios",
        value: function mostrar_servicios() {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios', this.requestOptions);
        }
      }, {
        key: "crear_visita",
        value: function crear_visita(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/visitas/crear', parametros, this.requestOptions);
        }
      }, {
        key: "modificar_visita",
        value: function modificar_visita(parametros) {
          console.log(this.apiDir);
          console.log(this.apiDir + '/visitas/update', parametros);
          return this.http.post(this.apiDir + '/visitas/update', parametros, this.requestOptions);
        }
      }, {
        key: "listado_grupoWorkstations",
        value: function listado_grupoWorkstations(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios/gruposEquipos/sucursal/' + id, this.requestOptions);
        }
      }, {
        key: "getAllVisitas",
        value: function getAllVisitas() {
          var _this10 = this;

          console.log(this.apiDir);
          return new Promise(function (resolve, reject) {
            _this10.http.get(_this10.apiDir + '/visitas/', _this10.requestOptions).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getRespuestas",
        value: function getRespuestas(id_formulario) {
          var _this11 = this;

          console.log(this.apiDir);
          return new Promise(function (resolve, reject) {
            _this11.http.get(_this11.apiDir + '/formularios/respuestas/' + id_formulario.toString(), _this11.requestOptions).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "cambiarRespuestas",
        value: function cambiarRespuestas(respuesta) {
          var _this12 = this;

          console.log(this.apiDir);
          return new Promise(function (resolve, reject) {
            _this12.http.put(_this12.apiDir + '/formularios/respuestas', respuesta, _this12.requestOptions).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "actualizar_equipo",
        value: function actualizar_equipo(parametros) {
          var _this13 = this;

          console.log(this.apiDir);
          return new Promise(function (resolve, reject) {
            _this13.http.post(_this13.apiDir + '/servicios/equipos/update', parametros, _this13.requestOptions).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getEquipo",
        value: function getEquipo(id_equipo) {
          var _this14 = this;

          console.log(this.apiDir);
          return new Promise(function (resolve, reject) {
            _this14.http.get(_this14.apiDir + '/servicios/equipos/' + id_equipo, _this14.requestOptions).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "setPlano",
        value: function setPlano(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/gruposEquipos/plano', parametros, this.requestOptions);
        }
      }, {
        key: "pdfEstadisticas",
        value: function pdfEstadisticas(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/pdf/stats-pdf', parametros, this.requestOptions);
        }
      }]);

      return ApiVisitasService;
    }();

    ApiVisitasService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiVisitasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiVisitasService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/environments/version.ts":
  /*!*************************************!*\
    !*** ./src/environments/version.ts ***!
    \*************************************/

  /*! exports provided: version */

  /***/
  function srcEnvironmentsVersionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "version", function () {
      return version;
    });

    var version = '0.1.0';
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Repositorios\frontend_cpa_admin\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map