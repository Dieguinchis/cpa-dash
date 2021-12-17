function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-programar-visita-programar-visita-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/programar-visita/programar-visita.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/programar-visita/programar-visita.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasProgramarVisitaProgramarVisitaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <!-- <ion-button (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Click me\r\n    </ion-button> -->\r\n    <ion-item style=\"margin-top: 15px;\">\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar un cliente</ion-label>\r\n        <ion-select [interfaceOptions]=\"custom\" (ionChange)=\"sucursalesCliente($event.target.value)\">\r\n            <ion-select-option  *ngFor=\"let cliente of listado_clientes\" value=\"{{cliente.id_cliente}}\">{{cliente.razon_social_cliente}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar una sucursal</ion-label>\r\n        <ion-select [interfaceOptions]=\"custom\" [disabled]=\"id_cliente_elegido == null\" (ionChange)=\"selectSucursal()\" [(ngModel)]=\"sucursal_elegida\">\r\n            <ion-select-option *ngFor=\"let sucursal of listado_sucursales_cliente\" value=\"{{sucursal.id_sucursal}}\">{{sucursal.razon_social_sucursal}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar servicios a ofrecer</ion-label>\r\n        <ion-select [interfaceOptions]=\"custom\" [disabled]=\"(sucursal_elegida == null) && !equiposCargados && !workStationCargados\" [(ngModel)]=\"servicios_elegidosAux\"multiple=\"true\" (ionChange)=\"serviciosElegidosChange()\">\r\n            <ion-select-option *ngFor=\"let servicio of listado_servicios\" value=\"{{servicio.id_servicio}}\">{{servicio.nombre_servicio}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"serviciosElegidos.length > 0\">\r\n        <h2 style=\"text-align: center;\">Tecnico principal</h2>\r\n        <div>\r\n            <ion-item style=\"margin-top: 10px;\">\r\n                <ion-label fixed style=\"text-align: center;\">Tecnico principal</ion-label>\r\n                <ion-select (ionChange)=\"selectTecnicoPrincipal()\" [interfaceOptions]=\"custom\" [(ngModel)]=\"tecnicoPrincipal\">\r\n                    <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" [value]=\"tecnico\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n        </div>    \r\n    </div>\r\n\r\n    <div *ngFor=\"let servicio of serviciosElegidos\" style=\"text-align: center;\">\r\n        <h2 style=\"text-align: center;\">{{servicio.nombre_servicio}}</h2>\r\n        <div *ngFor=\"let equipo of servicio.equipos\">\r\n            <ion-label fixed style=\"text-align: center;color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo}}</ion-label>\r\n            <ion-item style=\"margin-top: 10px;\">\r\n                <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n                <ion-select [interfaceOptions]=\"custom\" [(ngModel)]=\"equipo.tecnico\">\r\n                    <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n        </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"show\">\r\n        <div *ngFor=\"let servicio of grupoWorkStationElegidos; let h = index\" style=\"text-align: center;\">\r\n            <h2 style=\"text-align: center;\">{{servicio.nombre_equipo_grupo}}</h2>\r\n            <ion-item style=\"margin-top: 10px;\" (click)=\"presentAlertCheckbox(servicio, h, servicio.tecnico)\">\r\n                <ion-label style=\"width: fit-content;\" fixed style=\"text-align: center;\">Seleccionar técnicos a cargo</ion-label>\r\n                <p *ngFor=\"let tecnico of servicio.tecnico\">{{tecnico.nombre_tecnico}}, </p>\r\n            </ion-item>\r\n\r\n            <div>\r\n                <ion-row>\r\n                    <ion-col offset=3 size=\"3\" style=\"text-align:start;\">\r\n                        <ion-label style=\"font-weight: bold;\">Equipo</ion-label>\r\n                    </ion-col>\r\n                    <ion-col *ngFor=\"let tecnico of servicio.tecnico\" [size]=\"3/servicio.tecnico.length\">\r\n                        {{tecnico.nombre_tecnico}}\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n            <div style=\"min-width:50%;\" *ngFor=\"let equipo of servicio.equipos ; let i = index\">\r\n                <ion-row>\r\n                    <ion-col offset=3 size=\"3\" style=\"text-align:start; border-bottom: 1px solid black;\">\r\n                        <ion-label style=\"color: var(--ion-color-secondary);font-weight: bold;\">{{equipo.nombre_equipo + ' - ' + equipo.zona + ' - ' + equipo.nro_equipo}}: {{equipo.nombre_servicio}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col style=\"border-bottom: 1px solid;\" *ngFor=\"let tecnico of servicio.tecnico; let t = index\" [size]=\"3/servicio.tecnico.length\">\r\n                        <ion-checkbox (click)=\"prueba(servicio, t,h, i)\" [(ngModel)]=\"tecnico.equipos[h][i].selected\" [checked]=\"servicio.tecnico.length == 1\" ></ion-checkbox>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Seleccionar técnico a cargo</ion-label>\r\n        <ion-select [(ngModel)]=\"tecnico_elegido\">\r\n            <ion-select-option *ngFor=\"let tecnico of listado_tecnicos\" value=\"{{tecnico.id_tecnico}}\">{{tecnico.nombre_tecnico}} {{tecnico.apellido_tecnico}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item> -->\r\n\r\n    <ion-item>\r\n        <ion-label fixed style=\"text-align: center;\">Elegir una fecha</ion-label>\r\n        <ion-datetime [(ngModel)]=\"fecha_elegida\" [doneText]=\"'Listo'\"\r\n        [cancelText]=\"'Cancelar'\" [monthNames]=\"monthNames\" [dayNames]=\"dayNames\" displayFormat=\"DDDD D MMMM YYYY HH:mm\" min=\"{{fecha_actual}}\" max=\"2022\" value=\"{{fecha_actual}}\"></ion-datetime>\r\n    </ion-item>\r\n\r\n    <div style=\"width: 100%; text-align: center;\">\r\n        <ion-button (click)=\"programarVisita()\">Agendar</ion-button>\r\n    </div>\r\n        \r\n    <div style=\"margin-top: 25px\">\r\n        <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n    </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/paginas/programar-visita/programar-visita-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/paginas/programar-visita/programar-visita-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProgramarVisitaPageRoutingModule */

  /***/
  function srcAppPaginasProgramarVisitaProgramarVisitaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramarVisitaPageRoutingModule", function () {
      return ProgramarVisitaPageRoutingModule;
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


    var _programar_visita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./programar-visita.page */
    "./src/app/paginas/programar-visita/programar-visita.page.ts");

    var routes = [{
      path: '',
      component: _programar_visita_page__WEBPACK_IMPORTED_MODULE_3__["ProgramarVisitaPage"]
    }];

    var ProgramarVisitaPageRoutingModule = function ProgramarVisitaPageRoutingModule() {
      _classCallCheck(this, ProgramarVisitaPageRoutingModule);
    };

    ProgramarVisitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProgramarVisitaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/programar-visita/programar-visita.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/paginas/programar-visita/programar-visita.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ProgramarVisitaPageModule */

  /***/
  function srcAppPaginasProgramarVisitaProgramarVisitaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramarVisitaPageModule", function () {
      return ProgramarVisitaPageModule;
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


    var _programar_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./programar-visita-routing.module */
    "./src/app/paginas/programar-visita/programar-visita-routing.module.ts");
    /* harmony import */


    var _programar_visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./programar-visita.page */
    "./src/app/paginas/programar-visita/programar-visita.page.ts");

    var ProgramarVisitaPageModule = function ProgramarVisitaPageModule() {
      _classCallCheck(this, ProgramarVisitaPageModule);
    };

    ProgramarVisitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _programar_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramarVisitaPageRoutingModule"]],
      declarations: [_programar_visita_page__WEBPACK_IMPORTED_MODULE_6__["ProgramarVisitaPage"]]
    })], ProgramarVisitaPageModule);
    /***/
  },

  /***/
  "./src/app/paginas/programar-visita/programar-visita.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/paginas/programar-visita/programar-visita.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasProgramarVisitaProgramarVisitaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  width: 50%;\n  margin-left: 25%;\n  margin-bottom: 10px;\n}\n\n.imagen_empresa {\n  width: 50%;\n  margin-left: 25%;\n}\n\nh2 {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9wcm9ncmFtYXItdmlzaXRhL0Q6XFxSZXBvc2l0b3Jpb3NcXGZyb250ZW5kX2NwYV9hZG1pbi9zcmNcXGFwcFxccGFnaW5hc1xccHJvZ3JhbWFyLXZpc2l0YVxccHJvZ3JhbWFyLXZpc2l0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvcHJvZ3JhbWFyLXZpc2l0YS9wcm9ncmFtYXItdmlzaXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLCtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3Byb2dyYW1hci12aXNpdGEvcHJvZ3JhbWFyLXZpc2l0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmltYWdlbl9lbXByZXNhe1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSVcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iLCJpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbWFnZW5fZW1wcmVzYSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbmgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/paginas/programar-visita/programar-visita.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/paginas/programar-visita/programar-visita.page.ts ***!
    \*******************************************************************/

  /*! exports provided: ProgramarVisitaPage */

  /***/
  function srcAppPaginasProgramarVisitaProgramarVisitaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramarVisitaPage", function () {
      return ProgramarVisitaPage;
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


    var _servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./servicios/api-visitas.service */
    "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../administrar-tecnicos/servicios/servicio-tecnicos.service */
    "./src/app/paginas/administrar-tecnicos/servicios/servicio-tecnicos.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ProgramarVisitaPage = /*#__PURE__*/function () {
      function ProgramarVisitaPage(api, api_tecnicos, alertController) {
        _classCallCheck(this, ProgramarVisitaPage);

        this.api = api;
        this.api_tecnicos = api_tecnicos;
        this.alertController = alertController;
        this.serviciosConEquipos = [];
        this.serviciosElegidos = [];
        this.serviciosParaEnviar = [];
        this.grupoWorkStation = [];
        this.grupoWorkStationElegidos = [];
        this.show = false;
        this.servicios_elegidosAux = [];
        this.id_cliente_elegido = null;
        this.sucursal_elegida = null;
        this.equiposCargados = false;
        this.workStationCargados = false;
        this.dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        this.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.custom = {
          cssClass: 'alertSize'
        };
      }

      _createClass(ProgramarVisitaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.warn(1);
          this.api.mostrar_servicios().subscribe(function (data) {
            console.warn(2);
            _this.listado_servicios = data;
            _this.listado_servicios = _this.listado_servicios.result;
            console.log(_this.listado_servicios, 'servicios');
          }), function (error) {
            console.log('*1*1*1*1*1*1', error);
          };
          this.api.listado_clientes().subscribe(function (data) {
            _this.listado_clientes = data;
            _this.listado_clientes = _this.listado_clientes.result;

            _this.listado_clientes.sort(_this.ordenarClientes);

            console.log(_this.listado_clientes);
          }), function (error) {
            console.log(error);
          };
          this.api_tecnicos.listado_tecnicos().subscribe(function (data) {
            _this.listado_tecnicos = data;
            _this.listado_tecnicos = _this.listado_tecnicos.result;

            _this.listado_tecnicos.sort(_this.ordenarTecnicos);

            console.log(_this.listado_tecnicos);
          }, function (error) {
            console.log(error);
          });
          this.fecha_actual = moment__WEBPACK_IMPORTED_MODULE_3__().format();
        }
      }, {
        key: "sucursalesCliente",
        value: function sucursalesCliente(id_cliente) {
          var _this2 = this;

          this.api.informacion_cliente(id_cliente).subscribe(function (data) {
            _this2.listado_sucursales_cliente = data;
            console.log(data);
            _this2.listado_sucursales_cliente = _this2.listado_sucursales_cliente.result.sucursales.datosSucursal;
            _this2.sucursal_elegida = null;
            _this2.id_cliente_elegido = id_cliente;

            _this2.listado_sucursales_cliente.sort(_this2.ordenarSucursales);

            console.log(_this2.listado_sucursales_cliente);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "selectSucursal",
        value: function selectSucursal() {
          var _this3 = this;

          if (this.sucursal_elegida != null) {
            this.api.listado_equipos_id(this.sucursal_elegida).subscribe(function (res) {
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
              _this3.equiposCargados = true;
            });
          }

          this.api.listado_grupoWorkstations(this.sucursal_elegida).subscribe(function (data) {
            // console.log('Grupo1', data.result)
            var flag = 0;
            var array = [];
            var i = 0;
            var first = true;

            if (data.status == 'error') {
              alert('Ocurrio un error: ' + data.message);
            } else {
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
                    qr: element.qr,
                    nro_equipo: element.nro_equipo,
                    zona: element.zona
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
                    qr: element.qr,
                    nro_equipo: element.nro_equipo,
                    zona: element.zona
                  });
                  first = false;
                }
              });
              _this3.grupoWorkStation = array;
            }

            console.log('grupo2: ', _this3.grupoWorkStation);
            _this3.workStationCargados = true;
          });
        }
      }, {
        key: "programarVisita",
        value: function programarVisita() {
          var _this4 = this;

          var _a;

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

          var arrAux = [];

          var _iterator4 = _createForOfIteratorHelper(this.grupoWorkStationElegidos),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var workstation = _step4.value;
              (_a = workstation.tecnico) === null || _a === void 0 ? void 0 : _a.forEach(function (tecnico) {
                console.log(1);

                for (var index = 0; index < tecnico.equipos.length; index++) {
                  var element = tecnico.equipos[index];
                  console.warn(element);
                  console.log(2);

                  if ((element === null || element === void 0 ? void 0 : element.length) >= 1) {
                    var _loop = function _loop(index2) {
                      console.log(index2, "/", element.length);
                      var equipo = element[index2];

                      if (equipo === null || equipo === void 0 ? void 0 : equipo.selected) {
                        if (!arrAux.find(function (equipoAux) {
                          return equipoAux.id_servicio == equipo.id_servicio && equipoAux.id_equipo == equipo.id_equipo;
                        })) {
                          console.log("SI IF");
                          console.warn(equipo);
                          arrAux.push({
                            id_servicio: equipo.id_servicio,
                            id_tecnico: tecnico.id_tecnico,
                            id_equipo: equipo.id_equipo
                          });

                          _this4.serviciosParaEnviar.push({
                            id_servicio: equipo.id_servicio,
                            id_tecnico: tecnico.id_tecnico,
                            id_equipo: equipo.id_equipo
                          });
                        }
                      }
                    };

                    for (var index2 = 0; index2 < element.length; index2++) {
                      _loop(index2);
                    }
                  }
                }
              });
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          console.log(arrAux);
          console.log(this.serviciosParaEnviar);
          this.api.crear_visita({
            'id_cliente': this.id_cliente_elegido,
            'id_sucursal': this.sucursal_elegida,
            'servicios': this.serviciosParaEnviar,
            'fecha_visita': this.fecha_elegida
          }).subscribe(function (data) {
            console.log(data);
            location.reload();
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "serviciosElegidosChange",
        value: function serviciosElegidosChange() {
          var _this5 = this;

          this.serviciosElegidos = [];

          var _iterator6 = _createForOfIteratorHelper(this.servicios_elegidosAux),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var servicioID = _step6.value;

              var _iterator7 = _createForOfIteratorHelper(this.listado_servicios),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var servicio = _step7.value;

                  if (servicio.id_servicio == servicioID && servicio.qr == 0) {
                    this.serviciosElegidos.push(servicio);
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var arrayWorkstation = [{
            nombre_equipo_grupo: null,
            id_equipo_grupo: null,
            tecnico: null,
            equipos: []
          }];
          var i = 0;
          var first = true; // console.log(this.servicios_elegidosAux)

          this.grupoWorkStation.forEach(function (workstation) {
            workstation.equipos.forEach(function (servicio) {
              var val = servicio.id_servicio.toString();

              if (_this5.servicios_elegidosAux.includes(val)) {
                if (_this5.checkExist(arrayWorkstation, workstation.nombre_equipo_grupo) || arrayWorkstation[0].nombre_equipo_grupo == null) {
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
                    first = false;
                    console.log('2');
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

          for (var index = 0; index < arrayWorkstation.length; index++) {
            var element = arrayWorkstation[index];
            console.log(element.equipos);
            element.equipos.sort(this.ordenarEquipos);
          }

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
        key: "ordenarSucursales",
        value: function ordenarSucursales(a, b) {
          if (a.razon_social_sucursal.toLowerCase() > b.razon_social_sucursal.toLowerCase()) {
            return 1;
          }

          if (a.razon_social_sucursal.toLowerCase() < b.razon_social_sucursal.toLowerCase()) {
            return -1;
          }

          return 0;
        }
      }, {
        key: "ordenarEquipos",
        value: function ordenarEquipos(a, b) {
          if (a.nombre_equipo.toLowerCase() > b.nombre_equipo.toLowerCase()) {
            return 1;
          }

          if (a.nombre_equipo.toLowerCase() < b.nombre_equipo.toLowerCase()) {
            return -1;
          }

          return 0;
        }
      }, {
        key: "ordenarTecnicos",
        value: function ordenarTecnicos(a, b) {
          if (a.nombre_tecnico.toLowerCase() > b.nombre_tecnico.toLowerCase()) {
            return 1;
          }

          if (a.nombre_tecnico.toLowerCase() < b.nombre_tecnico.toLowerCase()) {
            return -1;
          }

          return 0;
        }
      }, {
        key: "presentAlertCheckbox",
        value: function presentAlertCheckbox(servicio, h, tecnicos) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var input, _iterator8, _step8, tecnico, alert;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!tecnicos) {
                      tecnicos = [];
                    }

                    input = [];
                    _iterator8 = _createForOfIteratorHelper(this.listado_tecnicos);

                    try {
                      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                        tecnico = _step8.value;
                        console.log(tecnico);

                        if (tecnicos.includes(tecnico)) {
                          input.push({
                            name: tecnico.nombre_tecnico,
                            type: 'checkbox',
                            label: tecnico.nombre_tecnico,
                            value: tecnico,
                            checked: true
                          });
                        } else {
                          input.push({
                            name: tecnico.nombre_tecnico,
                            type: 'checkbox',
                            label: tecnico.nombre_tecnico,
                            value: tecnico
                          });
                        }
                      }
                    } catch (err) {
                      _iterator8.e(err);
                    } finally {
                      _iterator8.f();
                    }

                    _context.next = 6;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Checkbox',
                      inputs: input,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler(data) {
                          servicio.tecnico = data;
                          servicio.tecnico.forEach(function (tecnico) {
                            if (!tecnico.equipos) {
                              tecnico.equipos = [];
                            }

                            tecnico.equipos[h] = [];

                            for (var index = 0; index < servicio.equipos.length; index++) {
                              var element = servicio.equipos[index];

                              if (servicio.tecnico.length == 1) {
                                element.selected = true;
                              } else {
                                element.selected = false;
                              }

                              tecnico.equipos[h].push(JSON.parse(JSON.stringify(element)));
                            }

                            console.log(tecnico);
                          });
                          console.log(data, "data");
                          console.log(servicio);
                        }
                      }]
                    });

                  case 6:
                    alert = _context.sent;
                    _context.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "prueba",
        value: function prueba(servicio, t, h, i) {
          for (var index = 0; index < servicio.tecnico.length; index++) {
            var tecnico = servicio.tecnico[index];

            if (t != index) {
              if (tecnico.equipos[h][i].selected) {
                tecnico.equipos[h][i].selected = false;
              }
            }
          }
        }
      }, {
        key: "selectTecnicoPrincipal",
        value: function selectTecnicoPrincipal() {
          console.log(this.serviciosElegidos);
          console.log(this.tecnicoPrincipal);
          var aux = [];

          var _iterator9 = _createForOfIteratorHelper(this.serviciosElegidos),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var servicio = _step9.value;

              var _iterator12 = _createForOfIteratorHelper(servicio.equipos),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var equipo = _step12.value;
                  equipo.tecnico = this.tecnicoPrincipal.id_tecnico.toString();
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          var _iterator10 = _createForOfIteratorHelper(this.grupoWorkStationElegidos),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var grupo = _step10.value;
              grupo.equipos.forEach(function (equipo) {
                equipo.selected = true;
              });
              aux.push(grupo.equipos);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          var _iterator11 = _createForOfIteratorHelper(this.grupoWorkStationElegidos),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _grupo = _step11.value;
              _grupo.tecnico = [];
              _grupo.tecnico[0] = this.tecnicoPrincipal;
              _grupo.tecnico[0].equipos = aux;
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          console.log(this.grupoWorkStationElegidos);
        }
      }]);

      return ProgramarVisitaPage;
    }();

    ProgramarVisitaPage.ctorParameters = function () {
      return [{
        type: _servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_2__["ApiVisitasService"]
      }, {
        type: _administrar_tecnicos_servicios_servicio_tecnicos_service__WEBPACK_IMPORTED_MODULE_4__["ServicioTecnicosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    ProgramarVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-programar-visita',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./programar-visita.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/programar-visita/programar-visita.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./programar-visita.page.scss */
      "./src/app/paginas/programar-visita/programar-visita.page.scss"))["default"]]
    })], ProgramarVisitaPage);
    /***/
  }
}]);
//# sourceMappingURL=paginas-programar-visita-programar-visita-module-es5.js.map