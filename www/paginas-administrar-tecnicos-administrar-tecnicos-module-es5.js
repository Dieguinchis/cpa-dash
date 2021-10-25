function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-administrar-tecnicos-administrar-tecnicos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarTecnicosAdministrarTecnicosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div>\r\n    <ion-item lines=\"none\">\r\n      <ion-label style=\"text-align: center;\"><b>Tecnicos</b></ion-label>\r\n      <ion-button (click)=\"altaTecnico()\">Agregar tecnico</ion-button>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" class=\"titulos\">\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Nombre</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Apellido</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>DNI</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Email</b></ion-label></ion-col>\r\n      <ion-col size=\"2\"><ion-label><b>Telefono</b></ion-label></ion-col>\r\n    </ion-item>     \r\n    <div *ngIf=\"tecnicos\">\r\n        <div *ngFor=\"let tecnico of tecnicos\">\r\n          <ion-item lines=\"full\">\r\n              <ion-col size=\"1\"></ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.nombre_tecnico}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.apellido_tecnico}} \r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.dni}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.email_tecnico}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>\r\n                  {{tecnico.telefono_tecnico}}\r\n                </ion-label>\r\n              </ion-col> \r\n              <ion-col size=\"2\">\r\n                <ion-icon name=\"trash-outline\" color=\"danger\" (click)=\"confirmar_baja(tecnico.id_tecnico)\"></ion-icon>\r\n                <ion-icon name=\"create-outline\" color=\"primary\" (click)=\"modificar(tecnico)\"></ion-icon>\r\n              </ion-col>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarTecnicosAltaTecnicosAltaTecnicosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title *ngIf=\"newuser\">Nuevo Tecnico</ion-title>\r\n    <ion-title *ngIf=\"!newuser\">Modificar Tecnico</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content >\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      Nombre:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"nombre\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Apellido:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"apellido\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      DNI:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"dni\" type=\"number\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Email:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"email\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Telefono:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"telefono\" type=\"number\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Usuario:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"usuario\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Contraseña:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"password\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center; margin-top: 15px;\">\r\n    <ion-button (click)=\"cancelar()\">Cancelar</ion-button>\r\n    <ion-button *ngIf=\"newuser\" (click)=\"alta_tecnico()\">Crear</ion-button>   \r\n    <ion-button *ngIf=\"!newuser\" (click)=\"modificar_tecnico()\">Modificar</ion-button>   \r\n\r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-tecnicos/administrar-tecnicos-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AdministrarTecnicosPageRoutingModule */

  /***/
  function srcAppPaginasAdministrarTecnicosAdministrarTecnicosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarTecnicosPageRoutingModule", function () {
      return AdministrarTecnicosPageRoutingModule;
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


    var _administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administrar-tecnicos.page */
    "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts");

    var routes = [{
      path: '',
      component: _administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_3__["AdministrarTecnicosPage"]
    }, {
      path: 'alta-tecnicos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | alta-tecnicos-alta-tecnicos-module */
        "alta-tecnicos-alta-tecnicos-module").then(__webpack_require__.bind(null,
        /*! ./alta-tecnicos/alta-tecnicos.module */
        "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.module.ts")).then(function (m) {
          return m.AltaTecnicosPageModule;
        });
      }
    }];

    var AdministrarTecnicosPageRoutingModule = function AdministrarTecnicosPageRoutingModule() {
      _classCallCheck(this, AdministrarTecnicosPageRoutingModule);
    };

    AdministrarTecnicosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdministrarTecnicosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdministrarTecnicosPageModule */

  /***/
  function srcAppPaginasAdministrarTecnicosAdministrarTecnicosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarTecnicosPageModule", function () {
      return AdministrarTecnicosPageModule;
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


    var _administrar_tecnicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./administrar-tecnicos-routing.module */
    "./src/app/paginas/administrar-tecnicos/administrar-tecnicos-routing.module.ts");
    /* harmony import */


    var _administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./administrar-tecnicos.page */
    "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts");

    var AdministrarTecnicosPageModule = function AdministrarTecnicosPageModule() {
      _classCallCheck(this, AdministrarTecnicosPageModule);
    };

    AdministrarTecnicosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _administrar_tecnicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrarTecnicosPageRoutingModule"]],
      declarations: [_administrar_tecnicos_page__WEBPACK_IMPORTED_MODULE_6__["AdministrarTecnicosPage"]]
    })], AdministrarTecnicosPageModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarTecnicosAdministrarTecnicosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulos {\n  color: #838383;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci10ZWNuaWNvcy9FOlxcVHJhYmFqb1xcY3BhXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLXRlY25pY29zXFxhZG1pbmlzdHJhci10ZWNuaWNvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItdGVjbmljb3MvYWRtaW5pc3RyYXItdGVjbmljb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci10ZWNuaWNvcy9hZG1pbmlzdHJhci10ZWNuaWNvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvc3tcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSlcclxufSIsIi50aXR1bG9zIHtcbiAgY29sb3I6ICM4MzgzODM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.ts ***!
    \***************************************************************************/

  /*! exports provided: AdministrarTecnicosPage */

  /***/
  function srcAppPaginasAdministrarTecnicosAdministrarTecnicosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarTecnicosPage", function () {
      return AdministrarTecnicosPage;
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


    var _alta_tecnicos_alta_tecnicos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alta-tecnicos/alta-tecnicos.page */
    "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./servicios/servicio-tecnicos.service */
    "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");

    var AdministrarTecnicosPage = /*#__PURE__*/function () {
      function AdministrarTecnicosPage(modalController, api_tecnicos, alertController) {
        _classCallCheck(this, AdministrarTecnicosPage);

        this.modalController = modalController;
        this.api_tecnicos = api_tecnicos;
        this.alertController = alertController;
      }

      _createClass(AdministrarTecnicosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.api_tecnicos.listado_tecnicos().subscribe(function (data) {
            _this.tecnicos = data;
            _this.tecnicos = _this.tecnicos.result;
            console.log(_this.tecnicos);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "altaTecnico",
        value: function altaTecnico() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _alta_tecnicos_alta_tecnicos_page__WEBPACK_IMPORTED_MODULE_2__["AltaTecnicosPage"],
                      cssClass: 'my-custom-class'
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "modificar",
        value: function modificar(tecnico) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _alta_tecnicos_alta_tecnicos_page__WEBPACK_IMPORTED_MODULE_2__["AltaTecnicosPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        tecnico: tecnico
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "confirmar_baja",
        value: function confirmar_baja(id_tecnico) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: '¿Seguro que deseas dar de baja al tecnico?',
                      message: 'No podra recuperarse este tecnico si se da de baja.',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Dar de baja',
                        handler: function handler() {
                          _this2.baja_tecnico(id_tecnico); //console.log('quiero borrar la publicacion', p.idpublicacion);

                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "baja_tecnico",
        value: function baja_tecnico(id_tecnico) {
          var _this3 = this;

          this.api_tecnicos.baja_tecnico(id_tecnico).subscribe(function (data) {
            _this3.api_tecnicos.listado_tecnicos().subscribe(function (data) {
              _this3.tecnicos = data;
              _this3.tecnicos = _this3.tecnicos.result;
              console.log(_this3.tecnicos);
            }), function (error) {
              console.log(error);
            };
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return AdministrarTecnicosPage;
    }();

    AdministrarTecnicosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__["ServicioTecnicosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    AdministrarTecnicosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-administrar-tecnicos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./administrar-tecnicos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./administrar-tecnicos.page.scss */
      "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.page.scss"))["default"]]
    })], AdministrarTecnicosPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarTecnicosAltaTecnicosAltaTecnicosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItdGVjbmljb3MvYWx0YS10ZWNuaWNvcy9hbHRhLXRlY25pY29zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.ts ***!
    \**********************************************************************************/

  /*! exports provided: AltaTecnicosPage */

  /***/
  function srcAppPaginasAdministrarTecnicosAltaTecnicosAltaTecnicosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AltaTecnicosPage", function () {
      return AltaTecnicosPage;
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


    var _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios/servicio-tecnicos.service */
    "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AltaTecnicosPage = /*#__PURE__*/function () {
      function AltaTecnicosPage(api_tecnicos, modalCtrl, navParams) {
        _classCallCheck(this, AltaTecnicosPage);

        this.api_tecnicos = api_tecnicos;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.newuser = true;
      }

      _createClass(AltaTecnicosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var data;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.navParams.get('tecnico');

                  case 2:
                    data = _context4.sent;

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

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "alta_tecnico",
        value: function alta_tecnico() {
          console.log(this.usuario);
          this.api_tecnicos.alta_tecnico({
            nombre_tecnico: this.nombre,
            apellido_tecnico: this.apellido,
            dni: this.dni,
            telefono: this.telefono,
            email: this.email,
            user: this.usuario,
            clave: this.password
          }).subscribe(function (data) {
            console.log(data);
            location.reload();
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "modificar_tecnico",
        value: function modificar_tecnico() {
          console.log(this.usuario); // id_tecnico,nombre_tecnico, apellido_tecnico, dni, email_tecnico, telefono_tecnico, user_tecnico, clave

          this.api_tecnicos.modificar_tecnico({
            id_tecnico: this.id,
            nombre_tecnico: this.nombre,
            apellido_tecnico: this.apellido,
            dni: this.dni,
            email_tecnico: this.email,
            telefono_tecnico: this.telefono,
            user_tecnico: this.usuario,
            clave: this.password
          }).subscribe(function (data) {
            console.log(data);
            location.reload();
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return AltaTecnicosPage;
    }();

    AltaTecnicosPage.ctorParameters = function () {
      return [{
        type: _servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_2__["ServicioTecnicosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    AltaTecnicosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alta-tecnicos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alta-tecnicos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alta-tecnicos.page.scss */
      "./src/app/paginas/administrar-tecnicos/alta-tecnicos/alta-tecnicos.page.scss"))["default"]]
    })], AltaTecnicosPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts ***!
    \*************************************************************************************/

  /*! exports provided: ServicioTecnicosService */

  /***/
  function srcAppPaginasAdministrarTecnicosServiciosServicioTecnicosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioTecnicosService", function () {
      return ServicioTecnicosService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/version */
    "./src/environments/version.ts");

    var ServicioTecnicosService = /*#__PURE__*/function () {
      function ServicioTecnicosService(http) {
        _classCallCheck(this, ServicioTecnicosService);

        this.http = http;
        this.apiDir = "http://157.230.90.222:3001";
        this.requestOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'version': _environments_version__WEBPACK_IMPORTED_MODULE_3__["version"]
          })
        };
      }

      _createClass(ServicioTecnicosService, [{
        key: "listado_tecnicos",
        value: function listado_tecnicos() {
          return this.http.get(this.apiDir + '/tecnicos', this.requestOptions);
        }
      }, {
        key: "alta_tecnico",
        value: function alta_tecnico(datos) {
          return this.http.post(this.apiDir + '/tecnicos/crear', datos, this.requestOptions);
        }
      }, {
        key: "modificar_tecnico",
        value: function modificar_tecnico(datos) {
          return this.http.post(this.apiDir + '/tecnicos/update', datos, this.requestOptions);
        }
      }, {
        key: "baja_tecnico",
        value: function baja_tecnico(id_tecnico) {
          return this.http["delete"](this.apiDir + '/tecnicos/eliminar/' + id_tecnico, this.requestOptions);
        }
      }]);

      return ServicioTecnicosService;
    }();

    ServicioTecnicosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServicioTecnicosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServicioTecnicosService);
    /***/
  }
}]);
//# sourceMappingURL=paginas-administrar-tecnicos-administrar-tecnicos-module-es5.js.map