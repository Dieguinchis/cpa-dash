function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-principal-menu-principal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPrincipalMenuPrincipalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n  <ion-tab-bar  slot=\"top\">\r\n\r\n    <ion-tab-button tab=\"administrar-clientes\">\r\n      <ion-icon name=\"people-outline\"></ion-icon>\r\n      <ion-label>Administrar clientes</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"alta-cliente\">\r\n      <ion-icon name=\"person-add-outline\"></ion-icon>\r\n      <ion-label>Dar de alta a un cliente</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"programar-visita\">\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>Programar una visita</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"administrar-servicios\">\r\n      <ion-icon name=\"document-text-outline\"></ion-icon>\r\n      <ion-label>Administrar servicios</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"administrar-tecnicos\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Administrar tecnicos</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-icon name=\"log-out\" class=\"logout\" (click)=\"logout()\"></ion-icon>\r\n  </ion-tab-bar>\r\n\r\n  \r\n\r\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/menu-principal/menu-principal-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/menu-principal/menu-principal-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MenuPrincipalPageRoutingModule */

  /***/
  function srcAppMenuPrincipalMenuPrincipalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageRoutingModule", function () {
      return MenuPrincipalPageRoutingModule;
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


    var _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu-principal.page */
    "./src/app/menu-principal/menu-principal.page.ts");

    var routes = [{
      path: 'menu-principal',
      component: _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__["MenuPrincipalPage"],
      children: [{
        path: 'administrar-clientes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paginas-administrar-clientes-administrar-clientes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("paginas-administrar-clientes-administrar-clientes-module")]).then(__webpack_require__.bind(null,
          /*! ../paginas/administrar-clientes/administrar-clientes.module */
          "./src/app/paginas/administrar-clientes/administrar-clientes.module.ts")).then(function (m) {
            return m.AdministrarClientesPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/menu-inferior/administrar-clientes',
        pathMatch: 'full'
      }, {
        path: 'administrar-clientes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paginas-administrar-clientes-administrar-clientes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("paginas-administrar-clientes-administrar-clientes-module")]).then(__webpack_require__.bind(null,
          /*! ../paginas/administrar-clientes/administrar-clientes.module */
          "./src/app/paginas/administrar-clientes/administrar-clientes.module.ts")).then(function (m) {
            return m.AdministrarClientesPageModule;
          });
        }
      }, {
        path: 'programar-visita',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paginas-programar-visita-programar-visita-module */
          [__webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-programar-visita-program~2a0c3347"), __webpack_require__.e("paginas-programar-visita-programar-visita-module")]).then(__webpack_require__.bind(null,
          /*! ../paginas/programar-visita/programar-visita.module */
          "./src/app/paginas/programar-visita/programar-visita.module.ts")).then(function (m) {
            return m.ProgramarVisitaPageModule;
          });
        }
      }, {
        path: 'ver-cliente/:id_cliente',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paginas-administrar-clientes-ver-cliente-ver-cliente-module */
          [__webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-programar-visita-program~2a0c3347"), __webpack_require__.e("common"), __webpack_require__.e("paginas-administrar-clientes-ver-cliente-ver-cliente-module")]).then(__webpack_require__.bind(null,
          /*! ../paginas/administrar-clientes/ver-cliente/ver-cliente.module */
          "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.module.ts")).then(function (m) {
            return m.VerClientePageModule;
          });
        }
      }, {
        path: 'alta-cliente',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paginas-alta-cliente-alta-cliente-module */
          "paginas-alta-cliente-alta-cliente-module").then(__webpack_require__.bind(null,
          /*! ../paginas/alta-cliente/alta-cliente.module */
          "./src/app/paginas/alta-cliente/alta-cliente.module.ts")).then(function (m) {
            return m.AltaClientePageModule;
          });
        }
      }, {
        path: 'administrar-servicios',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paginas-administrar-servicios-administrar-servicios-module */
          [__webpack_require__.e("common"), __webpack_require__.e("paginas-administrar-servicios-administrar-servicios-module")]).then(__webpack_require__.bind(null,
          /*! ../paginas/administrar-servicios/administrar-servicios.module */
          "./src/app/paginas/administrar-servicios/administrar-servicios.module.ts")).then(function (m) {
            return m.AdministrarServiciosPageModule;
          });
        }
      }, {
        path: 'administrar-tecnicos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paginas-administrar-tecnicos-administrar-tecnicos-module */
          "paginas-administrar-tecnicos-administrar-tecnicos-module").then(__webpack_require__.bind(null,
          /*! ../paginas/administrar-tecnicos/administrar-tecnicos.module */
          "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.module.ts")).then(function (m) {
            return m.AdministrarTecnicosPageModule;
          });
        }
      }]
    }, {
      path: '',
      redirectTo: '/menu-principal/administrar-clientes',
      pathMatch: 'full'
    }];

    var MenuPrincipalPageRoutingModule = function MenuPrincipalPageRoutingModule() {
      _classCallCheck(this, MenuPrincipalPageRoutingModule);
    };

    MenuPrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPrincipalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menu-principal/menu-principal.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/menu-principal/menu-principal.module.ts ***!
    \*********************************************************/

  /*! exports provided: MenuPrincipalPageModule */

  /***/
  function srcAppMenuPrincipalMenuPrincipalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageModule", function () {
      return MenuPrincipalPageModule;
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


    var _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-principal-routing.module */
    "./src/app/menu-principal/menu-principal-routing.module.ts");
    /* harmony import */


    var _menu_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu-principal.page */
    "./src/app/menu-principal/menu-principal.page.ts");

    var MenuPrincipalPageModule = function MenuPrincipalPageModule() {
      _classCallCheck(this, MenuPrincipalPageModule);
    };

    MenuPrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPrincipalPageRoutingModule"]],
      declarations: [_menu_principal_page__WEBPACK_IMPORTED_MODULE_6__["MenuPrincipalPage"]]
    })], MenuPrincipalPageModule);
    /***/
  },

  /***/
  "./src/app/menu-principal/menu-principal.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/menu-principal/menu-principal.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPrincipalMenuPrincipalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logout {\n  position: absolute;\n  right: 20px;\n  color: white;\n  top: 15px;\n  font-size: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1wcmluY2lwYWwvRTpcXFRyYWJham9cXGNwYVxcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxtZW51LXByaW5jaXBhbFxcbWVudS1wcmluY2lwYWwucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIubG9nb3V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menu-principal/menu-principal.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/menu-principal/menu-principal.page.ts ***!
    \*******************************************************/

  /*! exports provided: MenuPrincipalPage */

  /***/
  function srcAppMenuPrincipalMenuPrincipalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPrincipalPage", function () {
      return MenuPrincipalPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var MenuPrincipalPage = /*#__PURE__*/function () {
      function MenuPrincipalPage(router, storage) {
        _classCallCheck(this, MenuPrincipalPage);

        this.router = router;
        this.storage = storage;
      }

      _createClass(MenuPrincipalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.storage.remove('token');
          this.router.navigate(['/login']);
        }
      }]);

      return MenuPrincipalPage;
    }();

    MenuPrincipalPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    MenuPrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-principal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu-principal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu-principal.page.scss */
      "./src/app/menu-principal/menu-principal.page.scss"))["default"]]
    })], MenuPrincipalPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-principal-menu-principal-module-es5.js.map