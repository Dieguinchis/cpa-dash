function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~5d227966"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesVerClienteModificarVisitaModificarVisitaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Modificar Visita</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- <ion-button (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n      Click me\r\n  </ion-button> -->\r\n\r\n  <ion-item>\r\n      <ion-label fixed style=\"text-align: center;\">Seleccionar servicios a ofrecer</ion-label>\r\n      <ion-select [disabled]=\"sucursal_elegida == null\" [(ngModel)]=\"servicios_elegidosAux\"multiple=\"true\" (ionChange)=\"serviciosElegidosChange()\">\r\n          <ion-select-option *ngFor=\"let servicio of listado_servicios\" value=\"{{servicio.id_servicio}}\">{{servicio.nombre_servicio}}</ion-select-option>\r\n      </ion-select>\r\n  </ion-item>\r\n\r\n  <div *ngFor=\"let servicio of serviciosElegidos\" style=\"text-align: center;\">\r\n      <h2 style=\"text-align: center;\">{{servicio.nombre_servicio}}</h2>\r\n      <div *ngFor=\"let equipo of servicio.equipos\">\r\n          <ion-label fixed style=\"text-align: center;color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo}}</ion-label>\r\n          <ion-item style=\"margin-top: 10px;\">\r\n              <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n              <ion-select [(ngModel)]=\"equipo.tecnico\">\r\n                  <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n      </div>\r\n  </div>\r\n  <div *ngIf=\"show\">\r\n      <div *ngFor=\"let servicio of grupoWorkStationElegidos\" style=\"text-align: center;\">\r\n          <h2 style=\"text-align: center;\">{{servicio.nombre_equipo_grupo}}</h2>\r\n          <div *ngFor=\"let equipo of servicio.equipos\">\r\n              <ion-label fixed style=\"text-align: center;color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo}}: {{equipo.nombre_servicio}}</ion-label>\r\n          </div>\r\n          <ion-item style=\"margin-top: 10px;\">\r\n              <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n              <ion-select [(ngModel)]=\"servicio.tecnico\">\r\n                  <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n      </div>\r\n  </div>\r\n\r\n\r\n  <!-- <ion-item>\r\n      <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n      <ion-select [(ngModel)]=\"tecnico_elegido\">\r\n          <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n      </ion-select>\r\n  </ion-item> -->\r\n\r\n  <ion-item>\r\n      <ion-label fixed style=\"text-align: center;\">Elegir una fecha</ion-label>\r\n      <ion-datetime [(ngModel)]=\"fecha_elegida\" [doneText]=\"'Listo'\"\r\n      [cancelText]=\"'Cancelar'\" [monthNames]=\"monthNames\" [dayNames]=\"dayNames\" displayFormat=\"DDDD D MMMM YYYY HH:mm\" min=\"{{fecha_actual}}\" max=\"2022\" value=\"{{fecha_actual}}\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center;\">\r\n      <ion-button (click)=\"programarVisita()\">Modificar</ion-button>\r\n  </div>\r\n\r\n      \r\n  <div style=\"margin-top: 25px\">\r\n      <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesVerClienteVerVisitaVerVisitaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>visita</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"!visita\" style=\"text-align: center;\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <div *ngIf=\"visita\">\r\n    <div *ngIf=\"visita.visitas.horario_salida != 'NULL'\">\r\n      <ion-item lines=\"full\">\r\n        <ion-label *ngIf=\"validDate\"><b>Fecha de concluida la visita:</b> {{visita.visitas.horario_salida | date: 'dd/MM/yyyy hh:mm a'}}</ion-label>\r\n        <ion-label *ngIf=\"!validDate\"><b>Fecha de concluida la visita:</b> {{visita.visitas.horario_salida}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div *ngIf=\"visita.visitas.horario_salida == 'NULL'\">\r\n      <ion-item>\r\n        <ion-label><b>Fecha estimada de la visita:</b> {{visita.visitas.fecha_visita | date: 'dd/MM/yyyy hh:mm'}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Cliente:</b> {{visita.visitas.razon_social_cliente}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Sucursal:</b> {{visita.visitas.razon_social_sucursal}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Servicios ofrecidos:</b>\r\n        <div *ngFor=\"let servicio of visita.servicios2; let i = index\" style=\"margin-left:10px; margin-top: 10px\">\r\n          <div style=\"cursor: pointer;\" *ngIf=\"visita.visitas.estado_visitas == 'finalizada'\" (click)=\"editarServicio(servicio.id_servicio, servicio.id_formulario)\">\r\n            <ion-icon name=\"document-outline\" color=\"primary\"></ion-icon>\r\n            {{servicio.nombre_servicio}}{{\" - \" + servicio?.tecnicos}}\r\n            <ion-icon name=\"create-outline\" style=\"cursor: pointer;\" *ngIf=\"visita.visitas.estado_visitas == 'finalizada'\" ></ion-icon>  \r\n          </div>\r\n          <div *ngIf=\"visita.visitas.estado_visitas != 'finalizada'\">\r\n            <ion-icon name=\"document-outline\" color=\"primary\"></ion-icon>\r\n            {{servicio.nombre_servicio}}{{\" - \" + servicio?.tecnicos}}\r\n            <ion-icon name=\"create-outline\" style=\"cursor: pointer;\" *ngIf=\"visita.visitas.estado_visitas == 'finalizada'\" ></ion-icon>  \r\n          </div>\r\n        </div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <div *ngIf=\"(visita.visitas.horario_salida != 'NULL') && (visita.visitas.estado_visitas != 'en proceso')\">\r\n      <div *ngIf=\"!pdf_generado && visita.visitas.pdfGenerado == 0\">\r\n        <ion-button expand=\"full\" (click)=\"generar_pdf()\">Generar PDF</ion-button>\r\n      </div>\r\n      <div *ngIf=\"pdf_generado || visita.visitas.pdfGenerado == 1\">\r\n        <ion-button expand=\"full\" (click)=\"ver_pdf()\" color=\"success\">Ver PDF</ion-button>\r\n      </div>\r\n      <div *ngIf=\"pdf_generado || visita.visitas.pdfGenerado == 1\">\r\n        <ion-button expand=\"full\" (click)=\"generar_pdf()\">Volver a generar PDF</ion-button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"visita.visitas.horario_salida == 'NULL'\">\r\n      <ion-button expand=\"full\" (click)=\"modificar_visita()\">Modificar visita</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n";
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
        this.apiDir = "http://192.168.0.71:3000";
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
          return this.http.get(this.apiDir + '/clientes', this.requestOptions);
        }
      }, {
        key: "informacion_cliente",
        value: function informacion_cliente(id) {
          return this.http.get(this.apiDir + '/clientes/id/' + id, this.requestOptions);
        }
      }, {
        key: "alta_sucursal",
        value: function alta_sucursal(datos) {
          return this.http.post(this.apiDir + '/sucursales/crear', datos, this.requestOptions);
        }
      }, {
        key: "informacion_sucursal",
        value: function informacion_sucursal(id) {
          return this.http.get(this.apiDir + '/sucursales/id/' + id, this.requestOptions);
        }
      }, {
        key: "informacion_visita",
        value: function informacion_visita(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.http.get(this.apiDir + '/visitas/id/' + id, this.requestOptions);

                  case 2:
                    data = _context.sent;
                    console.log(this.apiDir + '/visitas/id/' + id, this.requestOptions);
                    return _context.abrupt("return", data.toPromise());

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "listado_workstations",
        value: function listado_workstations(id) {
          return this.http.get(this.apiDir + '/servicios/equipos/sucursal/' + id, this.requestOptions);
        }
      }, {
        key: "listado_grupoWorkstations",
        value: function listado_grupoWorkstations(id) {
          return this.http.get(this.apiDir + '/servicios/gruposEquipos/sucursal/' + id, this.requestOptions);
        }
      }, {
        key: "borrar_equipo",
        value: function borrar_equipo(id_equipo) {
          return this.http.post(this.apiDir + '/servicios/eliminarEquipos/' + id_equipo, null, this.requestOptions);
        }
      }, {
        key: "listado_productosServicio",
        value: function listado_productosServicio(id_servicio) {
          return this.http.get(this.apiDir + '/productos/idServicio/' + id_servicio, this.requestOptions);
        }
      }, {
        key: "cambiar_estado_visita",
        value: function cambiar_estado_visita(id_visita, estado) {
          var _this = this;

          console.log(this.apiDir + '/visitas/cambiarEstado', this.requestOptions);
          var params = {
            id_visita: id_visita,
            estado: estado
          };
          return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiDir + '/visitas/cambiarEstado', params, _this.requestOptions).subscribe(function (response) {
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
          return this.http.post(this.apiDir + '/servicios/eliminarGrupoEquipos/' + id_producto, this.requestOptions);
        }
      }, {
        key: "subir_planos",
        value: function subir_planos(parametros) {
          return this.http.post(this.apiDir + '/planos/crear', parametros, this.requestOptions);
        }
      }, {
        key: "upload",
        value: function upload(params) {
          var _this2 = this;

          var bodyP = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return new Promise(function (resolve, reject) {
            _this2.http.post(_this2.apiDir + params, bodyP) // this.http.post(this.url + params, bodyP,{headers: header})
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
          return this.http.get(this.apiDir + '/sucursales/id/' + id_sucursal, this.requestOptions);
        }
      }, {
        key: "crear_pdf",
        value: function crear_pdf(id_visita) {
          return this.http.post(this.apiDir + '/pdf/create-pdf', id_visita, this.requestOptions);
        }
      }, {
        key: "ver_pdf",
        value: function ver_pdf(id_visita) {
          return this.http.get(this.apiDir + '/pdf/fetch-pdf/' + id_visita, this.requestOptions);
        }
      }, {
        key: "modificar_cliente",
        value: function modificar_cliente(parametros) {
          return this.http.post(this.apiDir + '/clientes/actualizar', parametros, this.requestOptions);
        }
      }, {
        key: "subir_logo_cliente",
        value: function subir_logo_cliente(parametros) {
          return this.http.post(this.apiDir + '/clientes/actualizarLogo', parametros, this.requestOptions);
        }
      }, {
        key: "eliminar_Logo_Cliente",
        value: function eliminar_Logo_Cliente(parametros) {
          return this.http.post(this.apiDir + '/clientes/eliminarLogo', parametros, this.requestOptions);
        }
      }, {
        key: "eliminar_cliente",
        value: function eliminar_cliente(id_cliente) {
          return this.http.post(this.apiDir + '/clientes/eliminar/' + id_cliente, this.requestOptions);
        }
      }, {
        key: "eliminar_sucursal",
        value: function eliminar_sucursal(id_sucursal) {
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
          return this.http.post(this.apiDir + '/sucursales/actualizar', parametros, this.requestOptions);
        }
      }, {
        key: "estadisticas",
        value: function estadisticas(parametros) {
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
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteModificarVisitaModificarVisitaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvbW9kaWZpY2FyLXZpc2l0YS9tb2RpZmljYXItdmlzaXRhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ModificarVisitaPage */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteModificarVisitaModificarVisitaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarVisitaPage", function () {
      return ModificarVisitaPage;
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


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../programar-visita/servicios/api-visitas.service */
    "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");
    /* harmony import */


    var _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../administrar-tecnicos/servicios/servicio-tecnicos.service */
    "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var ModificarVisitaPage = /*#__PURE__*/function () {
      function ModificarVisitaPage(api, api_tecnicos, api_clientes, navParams, ModalController, api_visitas) {
        _classCallCheck(this, ModificarVisitaPage);

        this.api = api;
        this.api_tecnicos = api_tecnicos;
        this.api_clientes = api_clientes;
        this.navParams = navParams;
        this.ModalController = ModalController;
        this.api_visitas = api_visitas;
        this.serviciosConEquipos = [];
        this.serviciosElegidos = [];
        this.serviciosParaEnviar = [];
        this.grupoWorkStation = [];
        this.grupoWorkStationElegidos = [];
        this.show = false;
        this.id_visita = this.navParams.get('id_visita');
        this.servicios_elegidosAux = [];
        this.id_cliente_elegido = null;
        this.sucursal_elegida = null;
        this.dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        this.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      }

      _createClass(ModificarVisitaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.api.mostrar_servicios().subscribe(function (data) {
                      _this3.listado_servicios = data;
                      _this3.listado_servicios = _this3.listado_servicios.result;
                      console.log(_this3.listado_servicios, 'servicios');

                      _this3.actualizar_informacion().then(function (id) {
                        console.warn(_this3.sucursal_elegida);

                        _this3.api.listado_equipos(_this3.sucursal_elegida).subscribe(function (res) {
                          _this3.equipos = res.result;
                          console.log(_this3.equipos, 'equipos');

                          var _iterator = _createForOfIteratorHelper(_this3.listado_servicios),
                              _step;

                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                              var servicio = _step.value;
                              servicio.equipos = [];

                              var _iterator2 = _createForOfIteratorHelper(_this3.equipos),
                                  _step2;

                              try {
                                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                  var equipo = _step2.value;

                                  if (equipo.id_servicio == servicio.id_servicio) {
                                    servicio.equipos.push(equipo);
                                  }
                                }
                              } catch (err) {
                                _iterator2.e(err);
                              } finally {
                                _iterator2.f();
                              }

                              if (servicio.equipos.length < 1) {
                                servicio.equipos.push({
                                  id_equipo: 0,
                                  id_servicio: servicio.id_servicio,
                                  nombre_equipo: 'Servicio principal'
                                });
                              }
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }

                          console.log(_this3.listado_servicios, 'servicios completos');
                        });
                      });
                    });

                  case 2:
                    (function (error) {
                      console.log(error);
                    });

                    this.api_tecnicos.listado_tecnicos().subscribe(function (data) {
                      _this3.listado_tecnicos = data;
                      _this3.listado_tecnicos = _this3.listado_tecnicos.result;
                      console.log(_this3.listado_tecnicos);
                    }, function (error) {
                      console.log(error);
                    });
                    this.fecha_actual = moment__WEBPACK_IMPORTED_MODULE_6__().format();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.api_clientes.informacion_visita(this.id_visita).then(function (data) {
                      _this4.visita = data;
                      _this4.visita = _this4.visita.result;
                      _this4.id_cliente_elegido = _this4.visita.visitas.id_cliente;
                      _this4.sucursal_elegida = _this4.visita.visitas.id_sucursal;

                      _this4.sucursalesCliente(_this4.id_cliente_elegido); // console.log('IDS:  ',this.visita, this.sucursal_elegida)


                      return _this4.visita.visitas.id_sucursal;
                    });

                  case 2:
                    (function (error) {
                      console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "sucursalesCliente",
        value: function sucursalesCliente(id_cliente) {
          var _this5 = this;

          this.api.informacion_cliente(id_cliente).subscribe(function (data) {
            _this5.listado_sucursales_cliente = data;
            console.log(data);
            _this5.listado_sucursales_cliente = _this5.listado_sucursales_cliente.result.sucursales.datosSucursal; // this.sucursal_elegida = null;

            _this5.id_cliente_elegido = id_cliente;

            _this5.selectSucursal();

            console.log(_this5.listado_sucursales_cliente);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "selectSucursal",
        value: function selectSucursal() {
          var _this6 = this;

          this.api.listado_grupoWorkstations(this.sucursal_elegida).subscribe(function (data) {
            // console.log('Grupo1', data.result)
            var flag = 0;
            var array = [];
            var i = 0;
            var first = true;
            data.result.forEach(function (element) {
              if (element.id_equipo_grupo == flag) {
                // console.log(element.id_equipo_grupo, ' ' ,flag)
                array[i].equipos.push({
                  id_equipo: element.id_equipo,
                  id_servicio: element.id_servicio,
                  id_sucursal: element.id_sucursal,
                  nombre_equipo: element.nombre_equipo,
                  codigo_qr_equipo: element.codigo_qr_equipo,
                  estado_servicio: element.estado_servicio,
                  nombre_servicio: element.nombre_servicio,
                  qr: element.qr
                });
              } else {
                if (!first) {
                  i++;
                }

                flag = element.id_equipo_grupo;
                array.push({
                  nombre_equipo_grupo: element.nombre_equipo_grupo,
                  id_equipo_grupo: element.id_equipo_grupo,
                  equipos: []
                });
                array[i].equipos.push({
                  id_equipo: element.id_equipo,
                  id_servicio: element.id_servicio,
                  id_sucursal: element.id_sucursal,
                  nombre_equipo: element.nombre_equipo,
                  codigo_qr_equipo: element.codigo_qr_equipo,
                  estado_servicio: element.estado_servicio,
                  nombre_servicio: element.nombre_servicio,
                  qr: element.qr
                });
                first = false;
              }
            });
            _this6.grupoWorkStation = array; // console.log('grupo2: ', this.grupoWorkStation)
          });
        }
      }, {
        key: "programarVisita",
        value: function programarVisita() {
          var _iterator3 = _createForOfIteratorHelper(this.serviciosElegidos),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var servicio = _step3.value;

              var _iterator5 = _createForOfIteratorHelper(servicio.equipos),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var equipo = _step5.value;
                  this.serviciosParaEnviar.push({
                    id_servicio: servicio.id_servicio,
                    id_tecnico: equipo.tecnico,
                    id_equipo: equipo.id_equipo
                  });
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var _iterator4 = _createForOfIteratorHelper(this.grupoWorkStationElegidos),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var workstation = _step4.value;

              var _iterator6 = _createForOfIteratorHelper(workstation.equipos),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _equipo = _step6.value;
                  this.serviciosParaEnviar.push({
                    id_servicio: _equipo.id_servicio,
                    id_tecnico: workstation.tecnico,
                    id_equipo: _equipo.id_equipo
                  });
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          console.log(this.serviciosParaEnviar);
          this.api_visitas.modificar_visita({
            'id_cliente': this.id_cliente_elegido,
            'id_sucursal': this.sucursal_elegida,
            'servicios': this.serviciosParaEnviar,
            'fecha_visita': this.fecha_elegida,
            'id': this.visita.visitas.id_visita
          }).subscribe(function (data) {
            console.log(data);
            location.reload();
          }), function (error) {
            console.log(error);
          }; // this.api.crear_visita({'id_cliente': this.id_cliente_elegido,
          //                       'id_sucursal': this.sucursal_elegida,
          //                       'servicios': this.serviciosParaEnviar,
          //                       'fecha_visita': this.fecha_elegida}).subscribe(data => {
          //                           console.log(data)
          //                           location.reload();
          //                        }), (error =>{
          //                          console.log(error)
          //                        })
        }
      }, {
        key: "serviciosElegidosChange",
        value: function serviciosElegidosChange() {
          var _this7 = this;

          this.serviciosElegidos = [];

          var _iterator7 = _createForOfIteratorHelper(this.servicios_elegidosAux),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var servicioID = _step7.value;

              var _iterator8 = _createForOfIteratorHelper(this.listado_servicios),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var servicio = _step8.value;

                  if (servicio.id_servicio == servicioID && servicio.qr == 0) {
                    this.serviciosElegidos.push(servicio);
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          var arrayWorkstation = [{
            nombre_equipo_grupo: null,
            id_equipo_grupo: null,
            tecnico: null,
            equipos: []
          }];
          var i = 0;
          var first = true;
          console.log(this.servicios_elegidosAux);
          this.grupoWorkStation.forEach(function (workstation) {
            workstation.equipos.forEach(function (servicio) {
              var val = servicio.id_servicio.toString();

              if (_this7.servicios_elegidosAux.includes(val)) {
                if (_this7.checkExist(arrayWorkstation, workstation.nombre_equipo_grupo) || arrayWorkstation[0].nombre_equipo_grupo == null) {
                  if (!first) {
                    console.log('1');
                    i = i + 1;
                    first = false;
                    arrayWorkstation.push({
                      nombre_equipo_grupo: workstation.nombre_equipo_grupo,
                      id_equipo_grupo: workstation.id_equipo_grupo,
                      tecnico: null,
                      equipos: [servicio]
                    });
                  } else {
                    first = false; // console.log('2')

                    arrayWorkstation = [{
                      nombre_equipo_grupo: workstation.nombre_equipo_grupo,
                      id_equipo_grupo: workstation.id_equipo_grupo,
                      tecnico: null,
                      equipos: [servicio]
                    }];
                  }
                } else {
                  console.log('3');
                  arrayWorkstation[i].equipos.push(servicio);
                }
              }
            });
          });
          this.grupoWorkStationElegidos = arrayWorkstation;
          this.show = true;

          if (this.grupoWorkStationElegidos[0].nombre_equipo_grupo == null) {
            this.show = false;
          }

          console.log('Servicio elegidos: ', arrayWorkstation);
        }
      }, {
        key: "checkExist",
        value: function checkExist(array, nombre_equipo_grupo) {
          var resp = [];
          resp = array.find(function (resp) {
            return resp.nombre_equipo_grupo == nombre_equipo_grupo;
          });

          if (resp == undefined) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.ModalController.dismiss();
        }
      }]);

      return ModificarVisitaPage;
    }();

    ModificarVisitaPage.ctorParameters = function () {
      return [{
        type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"]
      }, {
        type: _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_5__["ServicioTecnicosService"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"]
      }];
    };

    ModificarVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modificar-visita',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modificar-visita.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modificar-visita.page.scss */
      "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.scss"))["default"]]
    })], ModificarVisitaPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerVisitaVerVisitaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvdmVyLXZpc2l0YS92ZXItdmlzaXRhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts ***!
    \****************************************************************************************/

  /*! exports provided: VerVisitaPage */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerVisitaVerVisitaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerVisitaPage", function () {
      return VerVisitaPage;
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


    var src_app_modals_editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modals/editar-visita/editar-visita.component */
    "./src/app/modals/editar-visita/editar-visita.component.ts");
    /* harmony import */


    var src_app_modals_ver_servicio_visita_ver_servicio_visita_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modals/ver-servicio-visita/ver-servicio-visita.component */
    "./src/app/modals/ver-servicio-visita/ver-servicio-visita.component.ts");
    /* harmony import */


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _modificar_visita_modificar_visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modificar-visita/modificar-visita.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.page.ts");

    var VerVisitaPage = /*#__PURE__*/function () {
      function VerVisitaPage(navParams, api_visitas, modalController, loadingController) {
        _classCallCheck(this, VerVisitaPage);

        this.navParams = navParams;
        this.api_visitas = api_visitas;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.id_visita = this.navParams.get('id_visita');
        this.pdf_generado = false;
        this.validDate = true;
      }

      _createClass(VerVisitaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion();
        }
      }, {
        key: "generar_pdf",
        value: function generar_pdf() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this8 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: "Generando PDF"
                    });

                  case 2:
                    loader = _context4.sent;
                    loader.present();
                    console.log(this.id_visita);
                    this.api_visitas.crear_pdf({
                      id_visita: this.id_visita
                    }).subscribe(function (data) {
                      console.log(data);
                      _this8.pdf_generado = true;
                      loader.dismiss();
                    }, function (error) {
                      console.log(error);
                      loader.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ver_pdf",
        value: function ver_pdf() {
          var _this9 = this;

          this.api_visitas.ver_pdf(this.id_visita).subscribe(function (data) {
            _this9.url = data;
            console.log(_this9.url.url);
            var win = window.open(_this9.url.url, '_blank');
            win.focus();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss();
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          var _this10 = this;

          this.api_visitas.informacion_visita(this.id_visita).then(function (data) {
            var _a;

            _this10.visita = data;
            _this10.visita = _this10.visita.result;

            if (new Date(_this10.visita.visitas.horario_salida).valueOf()) {
              _this10.visita.visitas.horario_salida = new Date(_this10.visita.visitas.horario_salida);
            } else {
              _this10.validDate = false;
            }

            console.log(_this10.visita);

            if (_this10.visita) {
              _this10.visita.servicios2 = [];

              var _iterator9 = _createForOfIteratorHelper(_this10.visita.servicios),
                  _step9;

              try {
                var _loop5 = function _loop5() {
                  var servicio = _step9.value;

                  if (!((_a = _this10.visita) === null || _a === void 0 ? void 0 : _a.servicios2.find(function (servicioAux) {
                    return servicioAux.nombre_servicio == servicio.nombre_servicio;
                  }))) {
                    if (servicio.id_servicio == 22 || servicio.id_servicio == 20) {
                      _this10.visita.servicios2.push({
                        nombre_servicio: servicio.nombre_servicio,
                        id_servicio: servicio.id_servicio,
                        id_formulario: null
                      });
                    } else {
                      _this10.visita.servicios2.push(servicio);
                    }
                  }
                };

                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  _loop5();
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              var aux = [];
              var aux2 = [];

              var _loop = function _loop(index) {
                var element = _this10.visita.servicios[index];

                if (!aux.some(function (servicio) {
                  return servicio.id_servicio == element.id_servicio;
                })) {
                  aux.push(element);
                }
              };

              for (var index = 0; index < _this10.visita.servicios.length; index++) {
                _loop(index);
              }

              var _loop2 = function _loop2(_index) {
                var element = aux[_index];
                aux[_index].tecnicos = [];
                aux[_index] = _this10.visita.servicios.filter(function (servicio) {
                  return servicio.id_servicio == element.id_servicio;
                });
                console.log(element);
              };

              for (var _index = 0; _index < aux.length; _index++) {
                _loop2(_index);
              }

              var _loop3 = function _loop3(_index2) {
                var element = _this10.visita.servicios[_index2];

                if (!aux2.some(function (servicio) {
                  var _a, _b;

                  return ((_a = servicio.tecnico) === null || _a === void 0 ? void 0 : _a.id_tecnico) == ((_b = element.tecnico) === null || _b === void 0 ? void 0 : _b.id_tecnico);
                })) {
                  aux2.push(element.tecnico);
                }
              };

              for (var _index2 = 0; _index2 < _this10.visita.servicios.length; _index2++) {
                _loop3(_index2);
              }

              var _loop4 = function _loop4(_index3) {
                var element = aux2[_index3];

                for (var index2 = 0; index2 < aux.length; index2++) {
                  var element2 = aux[index2];

                  if (element2.find(function (servicio) {
                    return servicio.tecnico == element;
                  }) && !element2[0].tecnicos.some(function (tecnico) {
                    return tecnico.id_tecnico == element.id_tecnico;
                  })) {
                    aux[index2][0].tecnicos.push(element);
                  }
                }
              };

              for (var _index3 = 0; _index3 < aux2.length; _index3++) {
                _loop4(_index3);
              }

              for (var _index4 = 0; _index4 < _this10.visita.servicios2.length; _index4++) {
                var element = _this10.visita.servicios2[_index4];
                var nombreTecnico = "";

                var _iterator10 = _createForOfIteratorHelper(aux[_index4][0].tecnicos),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var tecnico = _step10.value;

                    if (nombreTecnico) {
                      nombreTecnico = nombreTecnico + ", " + tecnico.nombre_tecnico + " " + tecnico.apellido_tecnico;
                    } else {
                      nombreTecnico = tecnico.nombre_tecnico + " " + tecnico.apellido_tecnico;
                    }
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }

                element.tecnicos = nombreTecnico;
              }
            }
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "modificar_visita",
        value: function modificar_visita() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this11 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _modificar_visita_modificar_visita_page__WEBPACK_IMPORTED_MODULE_6__["ModificarVisitaPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_visita': this.id_visita
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this11.actualizar_informacion();
                    });
                    _context5.next = 6;
                    return modal.present();

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "editarServicio",
        value: function editarServicio(id_servicio, id_formulario) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var modal, _modal;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!id_formulario) {
                      _context6.next = 8;
                      break;
                    }

                    _context6.next = 3;
                    return this.modalController.create({
                      component: src_app_modals_editar_visita_editar_visita_component__WEBPACK_IMPORTED_MODULE_3__["EditarVisitaComponent"],
                      componentProps: {
                        id_servicio: id_servicio,
                        id_visita: this.id_visita,
                        id_formulario: id_formulario
                      }
                    });

                  case 3:
                    modal = _context6.sent;
                    _context6.next = 6;
                    return modal.present();

                  case 6:
                    _context6.next = 13;
                    break;

                  case 8:
                    _context6.next = 10;
                    return this.modalController.create({
                      component: src_app_modals_ver_servicio_visita_ver_servicio_visita_component__WEBPACK_IMPORTED_MODULE_4__["VerServicioVisitaComponent"],
                      componentProps: {
                        id_servicio: id_servicio,
                        visita: this.visita
                      }
                    });

                  case 10:
                    _modal = _context6.sent;
                    _context6.next = 13;
                    return _modal.present();

                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return VerVisitaPage;
    }();

    VerVisitaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    VerVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-visita',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ver-visita.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ver-visita.page.scss */
      "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.scss"))["default"]]
    })], VerVisitaPage);
    /***/
  }
}]);
//# sourceMappingURL=default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~5d227966-es5.js.map