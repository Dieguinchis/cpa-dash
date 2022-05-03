function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-administrar-clientes-administrar-clientes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/administrar-clientes.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/administrar-clientes.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesAdministrarClientesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-searchbar animated placeholder=\"Razon Social || Telefono || Email || Direccion\" (ionClear)=\"searchClear()\" (keyup)=\"updateFilter($event)\"></ion-searchbar>\r\n  <ion-item lines=\"none\">\r\n    <ion-label style=\"text-align: center;\"><b>Clientes</b></ion-label>\r\n  </ion-item>\r\n  <ion-item class=\"titulos\" lines=\"full\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"3\">\r\n          <ion-label>\r\n            <b>Razon social</b>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-label>\r\n            <b>Telefono</b>\r\n          </ion-label>  \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-label>\r\n            <b>Email</b>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-label>\r\n            <b>Direccion</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n\r\n    <div *ngIf=\"clientes\">\r\n      <div *ngFor=\"let cliente of clientes\">\r\n        <ion-item lines=\"full\">\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{cliente.razon_social_cliente}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-label>\r\n                {{cliente.telefono}} \r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{cliente.email}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{cliente.direccion}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-icon name=\"create-outline\" style=\"margin-right: 15px\" (click)=\"modificar_cliente(cliente.id_cliente)\"></ion-icon>\r\n              <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-right: 15px\" (click)=\"baja_cliente(cliente.id_cliente)\"></ion-icon>\r\n              <ion-icon [routerLink]=\"'/menu-principal/ver-cliente/' + cliente.id_cliente\" color=\"primary\" name=\"enter-outline\"></ion-icon>\r\n            </ion-col>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n  \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesModificarClienteModificarClientePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>Modificar cliente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"cliente\">\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      Razon social:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"razon_social\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Telefono: (solo numeros)\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"telefono\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Email:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"email\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Direccion:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"direccion\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <!-- <img [src]=\"cliente.clienteDatos[0].logo_cliente\" alt=\"\" *ngIf=\"cliente.clienteDatos[0].logo_cliente\"> -->\r\n    <img [src]=\"logo\" alt=\"\" style=\"width: 50%;margin-left: 25%;padding: 5px;\">\r\n    <ion-icon *ngIf=\"!(logo == null || logo == 'NULL')\" name=\"trash-outline\" color=\"danger\" style=\"margin-top:15px\" (click)=\"deleteLogo()\"></ion-icon>\r\n    <ion-button (click)=\"agregarLogo()\" *ngIf=\"(logo == null || logo == 'NULL')\">Seleccionar Logo</ion-button>\r\n\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center; margin-top: 10px;\">\r\n    <ion-button (click)=\"modificar_cliente()\">Modificar</ion-button>   \r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/administrar-clientes-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/administrar-clientes-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AdministrarClientesPageRoutingModule */

  /***/
  function srcAppPaginasAdministrarClientesAdministrarClientesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarClientesPageRoutingModule", function () {
      return AdministrarClientesPageRoutingModule;
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


    var _administrar_clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administrar-clientes.page */
    "./src/app/paginas/administrar-clientes/administrar-clientes.page.ts");

    var routes = [{
      path: '',
      component: _administrar_clientes_page__WEBPACK_IMPORTED_MODULE_3__["AdministrarClientesPage"]
    }, {
      path: 'modificar-cliente',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modificar-cliente-modificar-cliente-module */
        "modificar-cliente-modificar-cliente-module").then(__webpack_require__.bind(null,
        /*! ./modificar-cliente/modificar-cliente.module */
        "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.module.ts")).then(function (m) {
          return m.ModificarClientePageModule;
        });
      }
    }];

    var AdministrarClientesPageRoutingModule = function AdministrarClientesPageRoutingModule() {
      _classCallCheck(this, AdministrarClientesPageRoutingModule);
    };

    AdministrarClientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdministrarClientesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/administrar-clientes.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/administrar-clientes.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdministrarClientesPageModule */

  /***/
  function srcAppPaginasAdministrarClientesAdministrarClientesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarClientesPageModule", function () {
      return AdministrarClientesPageModule;
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


    var _administrar_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./administrar-clientes-routing.module */
    "./src/app/paginas/administrar-clientes/administrar-clientes-routing.module.ts");
    /* harmony import */


    var _administrar_clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./administrar-clientes.page */
    "./src/app/paginas/administrar-clientes/administrar-clientes.page.ts");

    var AdministrarClientesPageModule = function AdministrarClientesPageModule() {
      _classCallCheck(this, AdministrarClientesPageModule);
    };

    AdministrarClientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _administrar_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrarClientesPageRoutingModule"]],
      declarations: [_administrar_clientes_page__WEBPACK_IMPORTED_MODULE_6__["AdministrarClientesPage"]]
    })], AdministrarClientesPageModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/administrar-clientes.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/administrar-clientes.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesAdministrarClientesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulos {\n  color: #838383;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy9EOlxcUmVwb3NpdG9yaW9zXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLWNsaWVudGVzXFxhZG1pbmlzdHJhci1jbGllbnRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvYWRtaW5pc3RyYXItY2xpZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy9hZG1pbmlzdHJhci1jbGllbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvc3tcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSlcclxufSIsIi50aXR1bG9zIHtcbiAgY29sb3I6ICM4MzgzODM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/administrar-clientes.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/administrar-clientes.page.ts ***!
    \***************************************************************************/

  /*! exports provided: AdministrarClientesPage */

  /***/
  function srcAppPaginasAdministrarClientesAdministrarClientesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarClientesPage", function () {
      return AdministrarClientesPage;
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


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modificar_cliente_modificar_cliente_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modificar-cliente/modificar-cliente.page */
    "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.ts");

    var AdministrarClientesPage = /*#__PURE__*/function () {
      function AdministrarClientesPage(api_clientes, alertController, modalController) {
        _classCallCheck(this, AdministrarClientesPage);

        this.api_clientes = api_clientes;
        this.alertController = alertController;
        this.modalController = modalController;
      }

      _createClass(AdministrarClientesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion();
        }
      }, {
        key: "baja_cliente",
        value: function baja_cliente(id_cliente) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar el cliente?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this.eliminar_cliente(id_cliente);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "eliminar_cliente",
        value: function eliminar_cliente(id_cliente) {
          var _this2 = this;

          this.api_clientes.eliminar_cliente(id_cliente).subscribe(function (data) {
            _this2.actualizar_informacion(), function (error) {
              console.log(error);
            };
          });
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          var _this3 = this;

          this.api_clientes.listado_clientes().subscribe(function (data) {
            _this3.clientes = data;
            _this3.clientes = _this3.clientes.result;

            _this3.clientes.sort(_this3.ordenarClientes);

            _this3.temp = _this3.clientes;
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "ordenarClientes",
        value: function ordenarClientes(a, b) {
          if (a.razon_social_cliente.toLowerCase() > b.razon_social_cliente.toLowerCase()) {
            return 1;
          }

          if (a.razon_social_cliente.toLowerCase() < b.razon_social_cliente.toLowerCase()) {
            return -1;
          }

          return 0;
        }
      }, {
        key: "modificar_cliente",
        value: function modificar_cliente(id_cliente) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modificar_cliente_modificar_cliente_page__WEBPACK_IMPORTED_MODULE_4__["ModificarClientePage"],
                      componentProps: {
                        'id_cliente': id_cliente
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this4.actualizar_informacion();
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value.toLowerCase(); // filter our data

          var temp = this.temp.filter(function (d) {
            var _a, _b, _c, _d;

            return ((_a = d.razon_social_cliente) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(val)) || ((_b = d.direccion) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(val)) || ((_c = d.email) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(val)) || ((_d = d.telefono) === null || _d === void 0 ? void 0 : _d.toString().toLowerCase().includes(val));
          }); // update the rows

          this.clientes = temp;
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.clientes = this.temp;
        }
      }]);

      return AdministrarClientesPage;
    }();

    AdministrarClientesPage.ctorParameters = function () {
      return [{
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    AdministrarClientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-administrar-clientes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./administrar-clientes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/administrar-clientes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./administrar-clientes.page.scss */
      "./src/app/paginas/administrar-clientes/administrar-clientes.page.scss"))["default"]]
    })], AdministrarClientesPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesModificarClienteModificarClientePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulos {\n  color: #838383;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy9tb2RpZmljYXItY2xpZW50ZS9EOlxcUmVwb3NpdG9yaW9zXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLWNsaWVudGVzXFxtb2RpZmljYXItY2xpZW50ZVxcbW9kaWZpY2FyLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdpbmFzL2FkbWluaXN0cmFyLWNsaWVudGVzL21vZGlmaWNhci1jbGllbnRlL21vZGlmaWNhci1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvbW9kaWZpY2FyLWNsaWVudGUvbW9kaWZpY2FyLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsb3N7XHJcbiAgICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpXHJcbn1cclxuXHJcbiIsIi50aXR1bG9zIHtcbiAgY29sb3I6ICM4MzgzODM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.ts ***!
    \******************************************************************************************/

  /*! exports provided: ModificarClientePage */

  /***/
  function srcAppPaginasAdministrarClientesModificarClienteModificarClientePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarClientePage", function () {
      return ModificarClientePage;
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


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");

    var ModificarClientePage = /*#__PURE__*/function () {
      function ModificarClientePage(loadingController, api_clientes, navParams, modalCtrl, imageCompress) {
        _classCallCheck(this, ModificarClientePage);

        this.loadingController = loadingController;
        this.api_clientes = api_clientes;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.imageCompress = imageCompress;
        this.id_cliente = this.navParams.get('id_cliente');
      }

      _createClass(ModificarClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.api_clientes.informacion_cliente(this.id_cliente).subscribe(function (data) {
            _this5.cliente = data;
            _this5.cliente = _this5.cliente.result;
            _this5.razon_social = _this5.cliente.clienteDatos[0].razon_social_cliente;
            _this5.email = _this5.cliente.clienteDatos[0].email;
            _this5.telefono = _this5.cliente.clienteDatos[0].telefono;
            _this5.direccion = _this5.cliente.clienteDatos[0].direccion;
            _this5.logo = _this5.cliente.clienteDatos[0].logo_cliente;
            console.log(_this5.cliente);
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "modificar_cliente",
        value: function modificar_cliente() {
          var _this6 = this;

          this.objeto = {
            id_cliente: this.id_cliente,
            razon_social_cliente: this.razon_social,
            direccion: this.direccion,
            telefono: this.telefono,
            email: this.email
          };
          console.log(this.objeto);
          this.api_clientes.modificar_cliente(this.objeto).subscribe(function (data) {
            if (_this6.logo) {
              _this6.api_clientes.subir_logo_cliente({
                id_cliente: _this6.id_cliente,
                logo: _this6.logo
              }).subscribe(function (response) {
                _this6.modalCtrl.dismiss({
                  'dismissed': true
                });
              });
            } else {
              _this6.modalCtrl.dismiss({
                'dismissed': true
              });
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "agregarLogo",
        value: function agregarLogo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.imageCompress.uploadFile().then(function (_ref) {
                      var image = _ref.image,
                          orientation = _ref.orientation;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this8 = this;

                        var loading;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.loadingController.create({
                                  message: 'Subiendo img'
                                });

                              case 2:
                                loading = _context3.sent;
                                _context3.next = 5;
                                return loading.present();

                              case 5:
                                console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
                                this.imageCompress.compressFile(image, orientation, 50, 50).then(function (result) {
                                  console.log(result);
                                  _this8.logo = result;
                                  _this8.api_clientes.subir_logo_cliente({
                                    id_cliente: _this8.id_cliente,
                                    logo: _this8.logo
                                  }).subscribe(function (response) {
                                    _this8.loadingController.dismiss();
                                  }), function (error) {
                                    console.log(error);

                                    _this8.loadingController.dismiss();
                                  };
                                });

                              case 7:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "deleteLogo",
        value: function deleteLogo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this9 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: 'Eliminando img'
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    this.api_clientes.subir_logo_cliente({
                      id_cliente: this.id_cliente,
                      logo: null
                    }).subscribe(function (response) {
                      _this9.ngOnInit();

                      _this9.loadingController.dismiss();
                    }), function (error) {
                      console.log(error);

                      _this9.loadingController.dismiss();
                    }; // this.api_clientes.eliminar_Logo_Cliente({id:this.id_cliente}).subscribe(resp =>{
                    //   this.loadingController.dismiss()
                    //   this.logo = null
                    // }), (error =>{
                    //   this.loadingController.dismiss()
                    //   console.log('123',error)
                    // })

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ModificarClientePage;
    }();

    ModificarClientePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_4__["NgxImageCompressService"]
      }];
    };

    ModificarClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modificar-cliente',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modificar-cliente.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modificar-cliente.page.scss */
      "./src/app/paginas/administrar-clientes/modificar-cliente/modificar-cliente.page.scss"))["default"]]
    })], ModificarClientePage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts ***!
    \********************************************************************************/

  /*! exports provided: ApiClientesService */

  /***/
  function srcAppPaginasAdministrarClientesServiciosApiClientesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiClientesService", function () {
      return ApiClientesService;
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

    var ApiClientesService = /*#__PURE__*/function () {
      function ApiClientesService(http) {
        _classCallCheck(this, ApiClientesService);

        this.http = http;
        this.apiDir = "http://157.230.90.222:3000";
        this.requestOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'version': _environments_version__WEBPACK_IMPORTED_MODULE_3__["version"]
          })
        };
      }

      _createClass(ApiClientesService, [{
        key: "listado_clientes",
        value: function listado_clientes() {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/clientes', this.requestOptions);
        }
      }, {
        key: "informacion_cliente",
        value: function informacion_cliente(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/clientes/id/' + id, this.requestOptions);
        }
      }, {
        key: "alta_sucursal",
        value: function alta_sucursal(datos) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/sucursales/crear', datos, this.requestOptions);
        }
      }, {
        key: "informacion_sucursal",
        value: function informacion_sucursal(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/sucursales/id/' + id, this.requestOptions);
        }
      }, {
        key: "informacion_visita",
        value: function informacion_visita(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var data;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    console.log(this.apiDir);
                    _context6.next = 3;
                    return this.http.get(this.apiDir + '/visitas/id/' + id, this.requestOptions);

                  case 3:
                    data = _context6.sent;
                    console.log(this.apiDir + '/visitas/id/' + id, this.requestOptions);
                    return _context6.abrupt("return", data.toPromise());

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "listado_workstations",
        value: function listado_workstations(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios/equipos/sucursal/' + id, this.requestOptions);
        }
      }, {
        key: "listado_grupoWorkstations",
        value: function listado_grupoWorkstations(id) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/servicios/gruposEquipos/sucursal/' + id, this.requestOptions);
        }
      }, {
        key: "borrar_equipo",
        value: function borrar_equipo(id_equipo) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/eliminarEquipos/' + id_equipo, null, this.requestOptions);
        }
      }, {
        key: "listado_productosServicio",
        value: function listado_productosServicio(id_servicio) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/productos/idServicio/' + id_servicio, this.requestOptions);
        }
      }, {
        key: "cambiar_estado_visita",
        value: function cambiar_estado_visita(id_visita, estado) {
          var _this10 = this;

          console.log(this.apiDir + '/visitas/cambiarEstado', this.requestOptions);
          var params = {
            id_visita: id_visita,
            estado: estado
          };
          return new Promise(function (resolve, reject) {
            _this10.http.post(_this10.apiDir + '/visitas/cambiarEstado', params, _this10.requestOptions).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "eliminar_Grupo_workstation",
        value: function eliminar_Grupo_workstation(id_producto) {
          console.log('delete2', id_producto);
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/servicios/eliminarGrupoEquipos/' + id_producto, this.requestOptions);
        }
      }, {
        key: "subir_planos",
        value: function subir_planos(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/planos/crear', parametros, this.requestOptions);
        }
      }, {
        key: "upload",
        value: function upload(params) {
          var _this11 = this;

          var bodyP = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          console.log(this.apiDir);
          return new Promise(function (resolve, reject) {
            _this11.http.post(_this11.apiDir + params, bodyP) // this.http.post(this.url + params, bodyP,{headers: header})
            .subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "ver_sucursal",
        value: function ver_sucursal(id_sucursal) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/sucursales/id/' + id_sucursal, this.requestOptions);
        }
      }, {
        key: "crear_pdf",
        value: function crear_pdf(id_visita) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/pdf/create-pdf', id_visita, this.requestOptions);
        }
      }, {
        key: "ver_pdf",
        value: function ver_pdf(id_visita) {
          console.log(this.apiDir);
          return this.http.get(this.apiDir + '/pdf/fetch-pdf/' + id_visita, this.requestOptions);
        }
      }, {
        key: "modificar_cliente",
        value: function modificar_cliente(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/clientes/actualizar', parametros, this.requestOptions);
        }
      }, {
        key: "subir_logo_cliente",
        value: function subir_logo_cliente(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/clientes/actualizarLogo', parametros, this.requestOptions);
        }
      }, {
        key: "eliminar_Logo_Cliente",
        value: function eliminar_Logo_Cliente(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/clientes/eliminarLogo', parametros, this.requestOptions);
        }
      }, {
        key: "eliminar_cliente",
        value: function eliminar_cliente(id_cliente) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/clientes/eliminar/' + id_cliente, this.requestOptions);
        }
      }, {
        key: "eliminar_sucursal",
        value: function eliminar_sucursal(id_sucursal) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/sucursales/eliminar/' + id_sucursal, this.requestOptions);
        }
      }, {
        key: "eliminar_plano",
        value: function eliminar_plano(id_plano) {
          return this.http.post(this.apiDir + '/planos/eliminar/' + id_plano, this.requestOptions);
        }
      }, {
        key: "modificar_sucursal",
        value: function modificar_sucursal(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/sucursales/actualizar', parametros, this.requestOptions);
        }
      }, {
        key: "estadisticas",
        value: function estadisticas(parametros) {
          console.log(this.apiDir);
          return this.http.post(this.apiDir + '/clientes/estadisticas/', parametros, this.requestOptions);
        }
      }]);

      return ApiClientesService;
    }();

    ApiClientesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiClientesService);
    /***/
  }
}]);
//# sourceMappingURL=paginas-administrar-clientes-administrar-clientes-module-es5.js.map