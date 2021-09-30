function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-administrar-clientes-ver-cliente-ver-cliente-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesVerClienteAltaSucursalAltaSucursalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      *Razon social:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"razon_social\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Telefono:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"telefono\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Email:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"email\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      *Direccion:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"direccion\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center; margin-top: 15px;\">\r\n    <ion-button (click)=\"cancelar()\">Cancelar</ion-button>\r\n    <ion-button (click)=\"cargar_sucursal()\">Cargar</ion-button>   \r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesVerClienteModificarSucursalModificarSucursalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>Modificar sucursal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"sucursal\">\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      Razon social:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"razon_social\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Telefono: (solo numeros)\r\n    </ion-label>\r\n    <ion-input  [(ngModel)]=\"telefono\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Email:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"email\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Direccion:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"direccion\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center; margin-top: 10px;\">\r\n    <ion-button (click)=\"modificar_sucursal()\">Modificar</ion-button>   \r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesVerClienteVerClientePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content *ngIf=\"cliente\">\r\n  <div class=\"informacion_cliente\">\r\n    <ion-item class=\"titulos\" lines=\"full\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Razon social</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Telefono</b>\r\n            </ion-label>  \r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Email</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Direccion</b>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  \r\n  \r\n  \r\n    <ion-item lines=\"full\" *ngIf = \"cliente\">\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].razon_social_cliente}}\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].telefono}} \r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].email}}\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].direccion}}\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"text-align: center;\"><b>Sucursales</b></ion-label>\r\n          <ion-button (click)=\"altaSucursal()\">Agregar sucursal</ion-button>\r\n        </ion-item>\r\n        <ion-item lines=\"full\">\r\n          <ion-col size=\"3\">Razon social sucursal</ion-col>\r\n          <ion-col size=\"3\">Telefono sucursal</ion-col>\r\n          <ion-col size=\"3\">Email sucursal</ion-col>\r\n          <ion-col size=\"2\">Direccion sucursal</ion-col>\r\n        </ion-item>\r\n        <div *ngFor=\"let sucursal of cliente.sucursales.datosSucursal\">\r\n          <ion-item lines=\"full\">\r\n            <ion-col size=\"3\">{{sucursal.razon_social_sucursal}}</ion-col>\r\n            <ion-col size=\"3\">{{sucursal.telefono_sucursal}}</ion-col>\r\n            <ion-col size=\"3\">{{sucursal.email_sucursal}}</ion-col>\r\n            <ion-col size=\"2\">\r\n              {{sucursal.direccion_sucursal}}\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-icon name=\"create-outline\" style=\"margin-right: 5px\" (click)=\"modificar_sucursal(sucursal.id_sucursal)\"></ion-icon>\r\n              <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-right: 5px\" (click)=\"baja_sucursal(sucursal.id_sucursal)\"></ion-icon>\r\n              <ion-icon  (click)=\"verSucursal(sucursal.id_sucursal)\" color=\"primary\" name=\"enter-outline\"></ion-icon>\r\n            </ion-col>\r\n          </ion-item>\r\n        </div>     \r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"text-align: center;\"><b>Visitas</b></ion-label>\r\n        </ion-item> \r\n        <ion-item lines=\"full\">\r\n          <ion-col size=\"4\">Fecha de la visita</ion-col>\r\n          <ion-col size=\"4\">Sucursal</ion-col>\r\n          <ion-col size=\"4\">Estado</ion-col>\r\n        </ion-item>\r\n        <div *ngFor=\"let visita of cliente.sucursales.visitas\">\r\n          <ng-container *ngIf=\"visita.estado_visitas != 'eliminado'\">\r\n            <ion-item lines=\"full\">\r\n              <ion-col size=\"4\">{{visita.fecha_visita | date: 'dd/MM/yyyy hh:mm'}}</ion-col>\r\n              <ion-col size=\"4\">{{visita.razon_social_sucursal}}</ion-col>\r\n              <ion-col size=\"3\">{{visita.estado_visitas}}</ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon color=\"primary\" name=\"enter-outline\" (click)=\"verVisita(visita.id_visita)\"></ion-icon>\r\n                <ion-icon *ngIf=\"visita.estado_visitas == 'pendiente'\" color=\"danger\" name=\"trash-outline\" (click)=\"eliminarVisitaAlert(visita)\"></ion-icon>\r\n              </ion-col>\r\n            </ion-item>\r\n          </ng-container>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesVerClienteVerSucursalAltaWorkstationAltaWorkstationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Nombre del workstation: </ion-label>\r\n    <ion-input [(ngModel)]=\"nombre_workstation\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Servicio que cumple</ion-label>\r\n    <ion-select [(ngModel)]=\"id_servicio\">\r\n      <div *ngFor=\"let servicio of servicios\">\r\n        <div *ngIf=\"servicio.qr == 1\">\r\n          <ion-select-option value={{servicio.id_servicio}}>{{servicio.nombre_servicio}}</ion-select-option>\r\n        </div>\r\n      </div>\r\n    </ion-select>\r\n  </ion-item>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button expand=\"full\" (click)=\"alta_workstation()\">Dar de alta</ion-button>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarClientesVerClienteVerSucursalVerSucursalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div *ngIf=\"sucursal\">\r\n      <ion-row style=\"text-align: center; background-color: white;padding: 1%;\">\r\n        <ion-col size=\"9\"><b style=\"margin-top:15px\">Informacion de la sucursal</b></ion-col>\r\n        <ion-col size=\"1\">Acciones: </ion-col>\r\n        <ion-col size=\"0.5\" style=\"font-size: 24px !important;\"><ion-icon color=\"primary\" title=\"Descargar Todos los QRs de la sucursal\" (click)=\"descargarAllQrSucursal()\" name=\"cloud-download-outline\"></ion-icon></ion-col>\r\n        <ion-col size=\"0.5\" style=\"font-size: 24px !important;\"><ion-icon color=\"primary\" title=\"Imprimir Toda la informacion de la sucursal\" (click)=\"imprimirAllQrSucursal()\" name=\"print-outline\"></ion-icon></ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n      </ion-row>\r\n    <ion-item lines=\"full\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <!-- <ion-col size=\"3\"></ion-col> -->\r\n          <ion-col size=\"3\">\r\n            <ion-label><b>Sucursal</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Telefono</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label><b>Mail</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Codigo QR</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Acciones</b></ion-label>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"1\"></ion-col> -->\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <!-- <ion-col size=\"3\"></ion-col> -->\r\n          <ion-col size=\"3\" style=\"margin-top: 10px;\">\r\n            <ion-label>{{sucursal.sucursal[0].razon_social_sucursal}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"margin-top: 10px;\">\r\n            <ion-label>{{sucursal.sucursal[0].telefono_sucursal}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"margin-top: 10px;\">\r\n            <ion-label>{{sucursal.sucursal[0].email_sucursal}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-card style=\"width: 50px; margin-top: 0px;\">\r\n              <div>\r\n                <a (click)=\"descargarSucursal()\">\r\n                  <img style=\"z-index: -1 !important\" [src]='sucursal.sucursal[0].codigo_qr' (click)=\"descargarSucursal()\">\r\n                </a>\r\n                <!-- <ion-button (click)=\"toDataURL(sucursal.sucursal[0].codigo_qr)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                  Click me\r\n                </ion-button> -->\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col style=\"font-size: 24px !important;\" size=\"2\">\r\n            <ion-icon color=\"primary\" title=\"Descargar este QR\" style=\"margin-top:15px\" (click)=\"descargarSucursal()\" name=\"cloud-download-outline\"></ion-icon>\r\n            <ion-icon color=\"primary\" title=\"Seleccionar ESTE QR para Imprimir\" style=\"margin-top:15px\" (click)=\"addImprimirQrSucursal()\" name=\"print-outline\"></ion-icon>\r\n            <ion-icon *ngIf=\"showDeleteQrSucursal.show\" [title]=\"'Eliminar QR de la lista (' + showDeleteQrSucursal.count +')'\" style=\"margin-top:15px; color: red !important;\" (click)=\"deleteImprimirQrSucursal()\" name=\"print-outline\"></ion-icon>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"1\"></ion-col> -->\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <div style=\"margin-top: 5px;\"></div>\r\n    <ion-row style=\"background-color: white;\">\r\n      <ion-col size=\"5\">\r\n        <ion-item style=\"text-align: center;\" lines=\"none\">\r\n          <ion-label style=\"font-size: 100% !important;\"><b>Workstations/equipos</b></ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"7\">\r\n        <ion-item style=\"text-align: right;\" lines=\"none\">\r\n          <ion-label></ion-label>\r\n          <ion-icon color=\"primary\" (click)=\"descargarQrAllWorkstations()\" title=\"Descargar los QR'S de TODAS las Workstations/equipos\" name=\"cloud-download-outline\"></ion-icon>\r\n          <ion-icon color=\"primary\" (click)=\"imprimirQrAllWorkstations()\" title=\"Imprimir los QR'S de TODAS las Workstations/equipos\" name=\"print-outline\"></ion-icon>\r\n          <ion-button (click)=\"alertAltaGrupoWorkstation()\">Agregar grupo de workstations</ion-button>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <!-- <ion-item lines=\"full\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\">\r\n            <ion-label><b>Nombre del workstation</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Nombre del servicio</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Codigo QR</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"1\">\r\n            <ion-label><b>Eliminar</b></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item> -->\r\n    <!-- <ion-item lines=\"full\" *ngFor=\"let equipo of workstations\" class=\"equipos\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\" style=\"margin-top: 15px\">\r\n            <ion-label>{{equipo.nombre_equipo}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"margin-top: 15px\">\r\n            <ion-label>{{equipo.nombre_servicio}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-card style=\"width: 50px; margin-top: 0px;\">\r\n              <div>\r\n                <a [href]=\"equipo.codigo_qr_equipo\" download>\r\n                  <img [src]='equipo.codigo_qr_equipo'>\r\n                </a>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"1\">\r\n            <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-top:15px\" (click)=\"borrar_equipo(equipo.id_equipo)\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item> -->\r\n    <div *ngIf=\"(grupoWorkStation == undefined) && !loadingEquipos\">\r\n      <ion-item>\r\n        <ion-label style=\"width:  100%; text-align: center;\">No se encontraron WorkStation</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"loadding\" *ngIf=\"loadingEquipos\">\r\n      <ion-spinner style=\"margin-top: 10px; color: #3b3b3f\"></ion-spinner>\r\n    </div>\r\n    <div *ngIf=\"(grupoWorkStation != undefined) && !loadingEquipos\">\r\n      <ion-item lines=\"full\" *ngFor=\"let grupoEquipo of grupoWorkStation; let j = index\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"grupoequipo\" size=\"5.5\" >{{grupoEquipo.nombre_equipo_grupo}}</ion-col>\r\n            <ion-col size=\"0.5\">\r\n              <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-top:15px\" (click)=\"borrar_equipo_grupo(grupoEquipo.id_equipo_grupo,j)\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item style=\"text-align: left;\" lines=\"none\">\r\n                <ion-icon color=\"primary\" title=\"Descargar los QR'S de ESTA Workstation/equipo\" (click)=\"descargarQrThisWorkstation(grupoEquipo)\" name=\"cloud-download-outline\"></ion-icon>\r\n                <ion-icon color=\"primary\" title=\"Imprimir los QR'S de ESTA Workstation/equipo\" (click)=\"imprimirQrThisWorkstation(grupoEquipo)\" name=\"print-outline\"></ion-icon>\r\n                <ion-button (click)=\"altaWorkstation(grupoEquipo.id_equipo_grupo,j)\">Agregar workstation</ion-button>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"full\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <ion-label><b>Workstation</b></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\">\r\n                  <ion-label><b>Servicio</b></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\">\r\n                  <ion-label><b>Codigo QR</b></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-label></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"1\">\r\n                  <ion-label><b>Eliminar</b></ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <div *ngIf=\"(grupoEquipo.equipos.length == 0 || grupoEquipo.length == 0)\">\r\n            <ion-item>\r\n              <ion-label style=\"width:  100%; text-align: center;\">No se encontraron equipos</ion-label>\r\n            </ion-item>\r\n          </div>\r\n          <div *ngIf=\"(grupoEquipo.equipos.length > 0)\">\r\n            <div *ngFor=\"let equipo of grupoEquipo.equipos; let i = index\">\r\n              <ion-row class=\"equipos\" *ngIf=\"equipo.nombre_equipo != null\">\r\n                <ion-col size=\"5\" style=\"margin-top: 15px\">\r\n                  <ion-label>{{equipo.nombre_equipo}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\" style=\"margin-top: 15px\">\r\n                  <ion-label>{{equipo.nombre_servicio}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\">\r\n                  <ion-card style=\"width: 50px; margin-top: 0px;\">\r\n                    <div>\r\n                      <a  (click)=\"descargarQrEquipo(equipo)\">\r\n                        <img [src]='equipo.codigo_qr_equipo'  (click)=\"descargarQrEquipo(equipo)\">\r\n                      </a>\r\n                    </div>\r\n                  </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-icon color=\"primary\" title=\"Descargar este QR\" style=\"margin-top:15px\" (click)=\"descargarQrEquipo(equipo)\" name=\"cloud-download-outline\"></ion-icon>\r\n                  <ion-icon color=\"primary\" title=\"Seleccionar ESTE QR para Imprimir\" style=\"margin-top:15px\" (click)=\"addmprimirQr(equipo, i, j)\" name=\"print-outline\"></ion-icon>\r\n                  <ion-icon *ngIf=\"showDeleteQr[j][i].show\" [title]=\"'Eliminar QR de la lista (' + showDeleteQr[j][i].count +')'\" style=\"margin-top:15px; color: red !important;\" (click)=\"deleteImprimirQr(equipo, i, j)\" name=\"print-outline\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"1\">\r\n                  <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-top:15px\" (click)=\"borrar_equipo(equipo.id_equipo,j,i)\"></ion-icon>\r\n                </ion-col>\r\n\r\n\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"sucursal\" style=\"margin-top: 10px;\">\r\n    <ion-item style=\"text-align: center;\" lines=\"none\">\r\n      <ion-label><b>Planos de la sucursal</b></ion-label>\r\n      <input style=\"visibility: hidden;\" id=\"inputUploadFile\" accept=\".pdf\" title=\" \" [disabled]=\"disabled\" type=\"file\" name=\"\" (change)=\"showFile($event.target.files)\">\r\n      <ion-icon slot=\"end\" name=\"add-circle-outline\" color=\"primary\" (click)=\"agregar_plano()\"></ion-icon>\r\n    </ion-item>\r\n    <div *ngFor=\"let plano of sucursal.planos\">\r\n      <ion-item button *ngIf=\"sucursal.planos.length > 0\">\r\n        <ion-icon (click)=\"openPdf(plano.url_imagen_plano)\" name=\"eye\" slot=\"start\"></ion-icon>\r\n        <ion-label (click)=\"openPdf(plano.url_imagen_plano)\">{{plano.name}}</ion-label>\r\n        <ion-icon slot=\"end\" style=\"color: red;\" name=\"trash-outline\" (click)=\"alert_eliminar_plano(plano.id_plano)\"></ion-icon>\r\n      </ion-item>\r\n\r\n    </div>\r\n    <ion-item button *ngIf=\"sucursal.planos.length == 0\">\r\n      <ion-label>No hay planos cargados</ion-label>\r\n    </ion-item>\r\n    <!-- <ion-slides pager=\"true\" style=\"background-color: secondary\">\r\n      <ion-slide *ngFor= \"let plano of sucursal.planos\">\r\n        <ion-card class=\"cardPlanos\">\r\n\r\n          <img src={{plano.url_imagen_plano}}  class=\"planos\">\r\n          <ion-button class=\"deletePlano\" style=\"position:absolute; right: 0%; bottom: 0%;\" (click)=\"alert_eliminar_plano(plano.id_plano)\">\r\n            <ion-icon style=\"color: red;\" name=\"trash-outline\" (click)=\"alert_eliminar_plano(plano.id_plano)\"></ion-icon>\r\n          </ion-button>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides> -->\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"qrsToPrint.length > 0\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>QR'S Seleccionados ({{qrsToPrint.length}})</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"printButton\" (click)=\"printSelect()\">Imprimir</ion-button>\r\n      <ion-button class=\"printButtonCancel\" (click)=\"deletePrintSelect()\">Cancelar</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>visita</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"!visita\" style=\"text-align: center;\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <div *ngIf=\"visita\">\r\n    <div *ngIf=\"visita.visitas.horario_salida != 'NULL'\">\r\n      <ion-item lines=\"full\">\r\n        <ion-label><b>Fecha de concluida la visita:</b> {{visita.visitas.horario_salida}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div *ngIf=\"visita.visitas.horario_salida == 'NULL'\">\r\n      <ion-item>\r\n        <ion-label><b>Fecha estimada de la visita:</b> {{visita.visitas.fecha_visita | date: 'dd/MM/yyyy hh:mm'}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Cliente:</b> {{visita.visitas.razon_social_cliente}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Sucursal:</b> {{visita.visitas.razon_social_sucursal}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label><b>Servicios ofrecidos:</b>\r\n        <div *ngFor=\"let servicio of visita.servicios2\" style=\"margin-left:10px; margin-top: 10px\">\r\n          <ion-icon name=\"document-outline\" color=\"primary\"></ion-icon>\r\n          {{servicio}}\r\n        </div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <div *ngIf=\"visita.visitas.horario_salida != 'NULL'\">\r\n      <div *ngIf=\"!pdf_generado && visita.visitas.pdfGenerado == 0\">\r\n        <ion-button expand=\"full\" (click)=\"generar_pdf()\">Generar PDF</ion-button>\r\n      </div>\r\n      <div *ngIf=\"pdf_generado || visita.visitas.pdfGenerado == 1\">\r\n        <ion-button expand=\"full\" (click)=\"ver_pdf()\" color=\"success\">Ver PDF</ion-button>\r\n      </div>\r\n      <div *ngIf=\"pdf_generado || visita.visitas.pdfGenerado == 1\">\r\n        <ion-button expand=\"full\" (click)=\"generar_pdf()\">Volver a generar PDF</ion-button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"visita.visitas.horario_salida == 'NULL'\">\r\n      <ion-button expand=\"full\" (click)=\"modificar_visita()\">Modificar visita</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteAltaSucursalAltaSucursalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvYWx0YS1zdWN1cnNhbC9hbHRhLXN1Y3Vyc2FsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AltaSucursalPage */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteAltaSucursalAltaSucursalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AltaSucursalPage", function () {
      return AltaSucursalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! .././../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");

    var AltaSucursalPage = /*#__PURE__*/function () {
      function AltaSucursalPage(navParams, api, modalCtrl) {
        _classCallCheck(this, AltaSucursalPage);

        this.navParams = navParams;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.id_cliente = this.navParams.get('id_cliente');
      }

      _createClass(AltaSucursalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cargar_sucursal",
        value: function cargar_sucursal() {
          if (this.direccion && this.razon_social) {
            this.api.alta_sucursal({
              'id_cliente': this.id_cliente,
              'razon_social_sucursal': this.razon_social,
              'direccion_sucursal': this.direccion,
              'telefono_sucursal': this.telefono,
              'email_sucursal': this.email
            }).subscribe(function (data) {
              console.log(data);
              location.reload();
            }), function (error) {
              console.log(error);
            };
          } else {
            alert('Los campos direccion y razon social son obligatorios');
          }
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

      return AltaSucursalPage;
    }();

    AltaSucursalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    AltaSucursalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alta-sucursal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alta-sucursal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alta-sucursal.page.scss */
      "./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.scss"))["default"]]
    })], AltaSucursalPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteModificarSucursalModificarSucursalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvbW9kaWZpY2FyLXN1Y3Vyc2FsL21vZGlmaWNhci1zdWN1cnNhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ModificarSucursalPage */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteModificarSucursalModificarSucursalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarSucursalPage", function () {
      return ModificarSucursalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");

    var ModificarSucursalPage = /*#__PURE__*/function () {
      function ModificarSucursalPage(navParams, api, modalCtrl) {
        _classCallCheck(this, ModificarSucursalPage);

        this.navParams = navParams;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.id_sucursal = this.navParams.get('id_sucursal');
      }

      _createClass(ModificarSucursalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.api.ver_sucursal(this.id_sucursal).subscribe(function (data) {
            console.log(data);
            _this.sucursal = data;
            _this.sucursal = _this.sucursal.result;
            _this.razon_social = _this.sucursal.sucursal[0].razon_social_sucursal;
            _this.email = _this.sucursal.sucursal[0].email_sucursal;
            _this.telefono = _this.sucursal.sucursal[0].telefono_sucursal;
            _this.direccion = _this.sucursal.sucursal[0].direccion_sucursal;
            _this.id_cliente = _this.sucursal.sucursal[0].id_cliente;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "modificar_sucursal",
        value: function modificar_sucursal() {
          var _this2 = this;

          this.objeto = {
            id_cliente: this.id_cliente,
            id_sucursal: this.id_sucursal,
            razon_social_sucursal: this.razon_social,
            direccion_sucursal: this.direccion,
            telefono_sucursal: this.telefono,
            email_sucursal: this.email
          };
          console.log(this.objeto);
          this.api.modificar_sucursal(this.objeto).subscribe(function (data) {
            console.log(data);

            _this2.modalCtrl.dismiss({
              'dismissed': true
            });
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ModificarSucursalPage;
    }();

    ModificarSucursalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModificarSucursalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modificar-sucursal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modificar-sucursal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modificar-sucursal.page.scss */
      "./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.scss"))["default"]]
    })], ModificarSucursalPage);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
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
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
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
                    return _context2.stop();
                }
              }
            }, _callee2, this);
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
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: VerClientePageRoutingModule */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerClientePageRoutingModule", function () {
      return VerClientePageRoutingModule;
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


    var _ver_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ver-cliente.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.ts");

    var routes = [{
      path: '',
      component: _ver_cliente_page__WEBPACK_IMPORTED_MODULE_3__["VerClientePage"]
    }, {
      path: 'alta-sucursal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | alta-sucursal-alta-sucursal-module */
        "alta-sucursal-alta-sucursal-module").then(__webpack_require__.bind(null,
        /*! ./alta-sucursal/alta-sucursal.module */
        "./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.module.ts")).then(function (m) {
          return m.AltaSucursalPageModule;
        });
      }
    }, {
      path: 'ver-sucursal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ver-sucursal-ver-sucursal-module */
        "ver-sucursal-ver-sucursal-module").then(__webpack_require__.bind(null,
        /*! ./ver-sucursal/ver-sucursal.module */
        "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.module.ts")).then(function (m) {
          return m.VerSucursalPageModule;
        });
      }
    }, {
      path: 'ver-visita',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ver-visita-ver-visita-module */
        "ver-visita-ver-visita-module").then(__webpack_require__.bind(null,
        /*! ./ver-visita/ver-visita.module */
        "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.module.ts")).then(function (m) {
          return m.VerVisitaPageModule;
        });
      }
    }, {
      path: 'modificar-sucursal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modificar-sucursal-modificar-sucursal-module */
        "modificar-sucursal-modificar-sucursal-module").then(__webpack_require__.bind(null,
        /*! ./modificar-sucursal/modificar-sucursal.module */
        "./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.module.ts")).then(function (m) {
          return m.ModificarSucursalPageModule;
        });
      }
    }, {
      path: 'modificar-visita',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modificar-visita-modificar-visita-module */
        "modificar-visita-modificar-visita-module").then(__webpack_require__.bind(null,
        /*! ./modificar-visita/modificar-visita.module */
        "./src/app/paginas/administrar-clientes/ver-cliente/modificar-visita/modificar-visita.module.ts")).then(function (m) {
          return m.ModificarVisitaPageModule;
        });
      }
    }];

    var VerClientePageRoutingModule = function VerClientePageRoutingModule() {
      _classCallCheck(this, VerClientePageRoutingModule);
    };

    VerClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerClientePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.module.ts ***!
    \********************************************************************************/

  /*! exports provided: VerClientePageModule */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerClientePageModule", function () {
      return VerClientePageModule;
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


    var _ver_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ver-cliente-routing.module */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente-routing.module.ts");
    /* harmony import */


    var _ver_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ver-cliente.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");

    var VerClientePageModule = function VerClientePageModule() {
      _classCallCheck(this, VerClientePageModule);
    };

    VerClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ver_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerClientePageRoutingModule"]],
      providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"]],
      declarations: [_ver_cliente_page__WEBPACK_IMPORTED_MODULE_6__["VerClientePage"]]
    })], VerClientePageModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerClientePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".informacion_cliente {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS9FOlxcVHJhYmFqb1xcY3BhXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLWNsaWVudGVzXFx2ZXItY2xpZW50ZVxcdmVyLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdpbmFzL2FkbWluaXN0cmFyLWNsaWVudGVzL3Zlci1jbGllbnRlL3Zlci1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNpb25fY2xpZW50ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG59IiwiLmluZm9ybWFjaW9uX2NsaWVudGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.ts ***!
    \******************************************************************************/

  /*! exports provided: VerClientePage */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerClientePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerClientePage", function () {
      return VerClientePage;
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


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _alta_sucursal_alta_sucursal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alta-sucursal/alta-sucursal.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/alta-sucursal/alta-sucursal.page.ts");
    /* harmony import */


    var _ver_sucursal_ver_sucursal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ver-sucursal/ver-sucursal.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.ts");
    /* harmony import */


    var _ver_visita_ver_visita_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ver-visita/ver-visita.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-visita/ver-visita.page.ts");
    /* harmony import */


    var _modificar_sucursal_modificar_sucursal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modificar-sucursal/modificar-sucursal.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/modificar-sucursal/modificar-sucursal.page.ts");

    var VerClientePage = /*#__PURE__*/function () {
      function VerClientePage(activatedRoute, api_clientes, modalController, alertController, loadignController, toastController) {
        _classCallCheck(this, VerClientePage);

        this.activatedRoute = activatedRoute;
        this.api_clientes = api_clientes;
        this.modalController = modalController;
        this.alertController = alertController;
        this.loadignController = loadignController;
        this.toastController = toastController;
      }

      _createClass(VerClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion();
        }
      }, {
        key: "altaSucursal",
        value: function altaSucursal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var id_cliente, modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
                    _context3.next = 3;
                    return this.modalController.create({
                      component: _alta_sucursal_alta_sucursal_page__WEBPACK_IMPORTED_MODULE_5__["AltaSucursalPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_cliente': id_cliente
                      }
                    });

                  case 3:
                    modal = _context3.sent;
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "verSucursal",
        value: function verSucursal(id_sucursal) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var id_cliente, modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
                    _context4.next = 3;
                    return this.modalController.create({
                      component: _ver_sucursal_ver_sucursal_page__WEBPACK_IMPORTED_MODULE_6__["VerSucursalPage"],
                      cssClass: 'modal_grande',
                      componentProps: {
                        'id_sucursal': id_sucursal
                      }
                    });

                  case 3:
                    modal = _context4.sent;
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "verVisita",
        value: function verVisita(id_visita) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _ver_visita_ver_visita_page__WEBPACK_IMPORTED_MODULE_7__["VerVisitaPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_visita': id_visita
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "baja_sucursal",
        value: function baja_sucursal(id_sucursal) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar la sucursal?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this8.eliminar_sucursal(id_sucursal);
                        }
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "eliminar_sucursal",
        value: function eliminar_sucursal(id_sucursal) {
          this.api_clientes.eliminar_sucursal(id_sucursal).subscribe(function (data) {
            location.reload();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          var _this9 = this;

          var id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
          this.api_clientes.informacion_cliente(id_cliente).subscribe(function (data) {
            _this9.cliente = data;
            _this9.cliente = _this9.cliente.result;
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "modificar_sucursal",
        value: function modificar_sucursal(id_sucursal) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this10 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalController.create({
                      component: _modificar_sucursal_modificar_sucursal_page__WEBPACK_IMPORTED_MODULE_8__["ModificarSucursalPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_sucursal': id_sucursal
                      }
                    });

                  case 2:
                    modal = _context7.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this10.actualizar_informacion();
                    });
                    _context7.next = 6;
                    return modal.present();

                  case 6:
                    return _context7.abrupt("return", _context7.sent);

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "eliminarVisitaAlert",
        value: function eliminarVisitaAlert(visita) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this11 = this;

            var al;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar la visita?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this11.eliminarVisita(visita);
                        }
                      }]
                    });

                  case 2:
                    al = _context8.sent;
                    al.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "eliminarVisita",
        value: function eliminarVisita(visita) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this12 = this;

            var load;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadignController.create({
                      message: "Eliminando la visita"
                    });

                  case 2:
                    load = _context9.sent;
                    load.present();
                    this.api_clientes.eliminar_visita(visita.id_visita).then(function (e) {
                      _this12.actualizar_informacion();

                      load.dismiss();

                      _this12.toastController.create({
                        message: "Se elimino correctamente",
                        duration: 2000,
                        color: "success"
                      }).then(function (r) {
                        r.present();
                      });

                      console.log(e);
                    })["catch"](function (error) {
                      load.dismiss();

                      _this12.toastController.create({
                        message: "Hubo un error al eliminar",
                        duration: 2000,
                        color: "danger"
                      }).then(function (r) {
                        r.present();
                      });

                      console.error(error);
                    });

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return VerClientePage;
    }();

    VerClientePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    VerClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-cliente',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ver-cliente.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ver-cliente.page.scss */
      "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.page.scss"))["default"]]
    })], VerClientePage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerSucursalAltaWorkstationAltaWorkstationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(223, 223, 223);\n  border: solid black 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvYWx0YS13b3Jrc3RhdGlvbi9FOlxcVHJhYmFqb1xcY3BhXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLWNsaWVudGVzXFx2ZXItY2xpZW50ZVxcdmVyLXN1Y3Vyc2FsXFxhbHRhLXdvcmtzdGF0aW9uXFxhbHRhLXdvcmtzdGF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvYWx0YS13b3Jrc3RhdGlvbi9hbHRhLXdvcmtzdGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvdmVyLXN1Y3Vyc2FsL2FsdGEtd29ya3N0YXRpb24vYWx0YS13b3Jrc3RhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: AltaWorkstationPage */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerSucursalAltaWorkstationAltaWorkstationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AltaWorkstationPage", function () {
      return AltaWorkstationPage;
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


    var _administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../administrar-servicios/servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AltaWorkstationPage = /*#__PURE__*/function () {
      function AltaWorkstationPage(api_servicios, navParams, modalCtrl, alertController) {
        _classCallCheck(this, AltaWorkstationPage);

        this.api_servicios = api_servicios;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.id_sucursal = this.navParams.get('id_sucursal');
        this.id_equipo_grupo = this.navParams.get('id_equipo_grupo');
      }

      _createClass(AltaWorkstationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          console.log(this.id_sucursal);
          this.api_servicios.mostrar_servicios().subscribe(function (data) {
            _this13.servicios = data;
            _this13.servicios = _this13.servicios.result;
            console.log(_this13.servicios);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "alta_workstation",
        value: function alta_workstation() {
          var _this14 = this;

          var data = null;

          if (this.id_servicio) {
            this.object = {
              nombre_equipos: this.nombre_workstation,
              id_servicio: this.id_servicio,
              id_sucursal: this.id_sucursal,
              id_equipo_grupo: this.id_equipo_grupo
            }; // data = this.object

            this.api_servicios.alta_workstation(this.object).subscribe(function (resp) {
              console.log(resp.equipoCreado.insertId);
              data = {
                qr: 1,
                nombre_equipos: _this14.nombre_workstation,
                id_servicio: _this14.id_servicio,
                id_equipo: resp.equipoCreado.insertId,
                id_sucursal: _this14.id_sucursal,
                id_equipo_grupo: _this14.id_equipo_grupo,
                estado_servicio: 'alta',
                modificable: 0
              };

              _this14.modalCtrl.dismiss({
                'dismissed': true,
                data: data,
                id: resp.equipoCreado.insertId
              });
            }), function (error) {
              console.log(error);
            };
          } else {
            this.presentAlert();
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var alert;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.alertController.create({
                      message: 'Para crear la workstation debes seleccionar el servicio que cumple',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context10.sent;
                    _context10.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return AltaWorkstationPage;
    }();

    AltaWorkstationPage.ctorParameters = function () {
      return [{
        type: _administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    AltaWorkstationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alta-workstation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alta-workstation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alta-workstation.page.scss */
      "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.scss"))["default"]]
    })], AltaWorkstationPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerSucursalVerSucursalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".planos {\n  width: 98%;\n  height: 98%;\n  padding: 5%;\n}\n\n.equipos {\n  height: 65px;\n  margin-left: 3%;\n}\n\n.grupoequipo {\n  align-items: center;\n  align-self: center;\n  align-content: center;\n  vertical-align: center;\n}\n\nion-label {\n  font-size: 80% !important;\n}\n\n.cardPlanos {\n  width: 100% !important;\n  height: 100% !important;\n}\n\nion-slides {\n  --bullet-background: #000000;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.deletePlano {\n  --background: #3881ff00;\n  --background-activated: #3881ff00;\n  --background-activated-opacity: 1;\n  --background-focused: #3881ff00;\n  --background-focused-opacity: 1;\n  --background-hover: #3881ff00;\n  --background-hover-opacity: 1;\n  --border-color: #3881ff00;\n  --border-radius: 8px;\n  --border-style: solid;\n  --border-width: 8px;\n  --box-shadow: 10px 10px;\n  --color: #3881ff00;\n  --color-activated: #3881ff00;\n  --color-focused: #3881ff00;\n  --color-hover: #3881ff00;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n  --ripple-color: #3881ff00;\n  --transition: background-color 15ms linear;\n}\n\n.printButton {\n  --background-activated: #3881ff7a !important;\n  --background-activated-opacity: 1;\n  --background-focused: #3881ff7a !important;\n  --background-focused-opacity: 1;\n  --background-hover: #3881ff7a !important;\n  --background-hover-opacity: 1;\n  --border-color: #3880ff;\n  --border-radius: 8px;\n  --border-style: solid;\n  --border-width: 1px;\n  --opacity: 1;\n  --ripple-color: #1e1e1e;\n  --transition: background-color 15ms linear;\n}\n\n.printButtonCancel {\n  --background: #ff0800c2 !important;\n  --background-activated: #ff0800 !important;\n  --background-activated-opacity: 1;\n  --background-focused: #ff0800 !important;\n  --background-focused-opacity: 1;\n  --background-hover: #ff0800 !important;\n  --background-hover-opacity: 1;\n  --border-color: #ff0800;\n  --border-radius: 8px;\n  --border-style: solid;\n  --border-width: 1px;\n  --opacity: 1;\n  --ripple-color: #1e1e1e;\n  --transition: background-color 15ms linear;\n}\n\n.loadding {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: var(--ion-color-light);\n  background-color: white;\n  color: white;\n  padding-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvRTpcXFRyYWJham9cXGNwYVxcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxhZG1pbmlzdHJhci1jbGllbnRlc1xcdmVyLWNsaWVudGVcXHZlci1zdWN1cnNhbFxcdmVyLXN1Y3Vyc2FsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvdmVyLXN1Y3Vyc2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFFSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FBOztBREdBO0VBQ0ksNEJBQUE7QUNBSjs7QURRQTtFQUNJLFlBQUE7QUNMSjs7QURRRTtFQUNFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtBQ0xKOztBRFFFO0VBQ0ksNENBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBQ0xOOztBRE9FO0VBQ0Usa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0FDSko7O0FET0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2FkbWluaXN0cmFyLWNsaWVudGVzL3Zlci1jbGllbnRlL3Zlci1zdWN1cnNhbC92ZXItc3VjdXJzYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYW5vc3tcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDk4JTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5lcXVpcG9ze1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi5ncnVwb2VxdWlwb3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAvLyAtLWNvbG9yOiAjMzg4MGZmO1xyXG4gICAgZm9udC1zaXplOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmRQbGFub3Mge1xyXG53aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLy8gLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XHJcbiAgICAvLyAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiAzODgwZmZcclxuICAgIC8vIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlOiAzODgwZmZcclxuICAgIC8vIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiAzODgwZmZcclxuICAgIC8vIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogMzg4MGZmXHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZVBsYW5vIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODFmZjAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODFmZjAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzODgxZmYwMDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzODgxZmYwMDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICMzODgxZmYwMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDhweDtcclxuICAgIC0tYm94LXNoYWRvdzogMTBweCAxMHB4O1xyXG4gICAgLS1jb2xvcjogIzM4ODFmZjAwO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzODgxZmYwMDtcclxuICAgIC0tY29sb3ItZm9jdXNlZDogIzM4ODFmZjAwO1xyXG4gICAgLS1jb2xvci1ob3ZlcjogIzM4ODFmZjAwO1xyXG4gICAgLS1vcGFjaXR5OiAxO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogIzM4ODFmZjAwO1xyXG4gICAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO1xyXG4gIH1cclxuXHJcbiAgLnByaW50QnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODFmZjdhICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzODgxZmY3YSAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzODgxZmY3YSAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxuICAgICAgLS1ib3JkZXItY29sb3I6ICMzODgwZmY7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgIC0tb3BhY2l0eTogMTtcclxuICAgICAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XHJcbiAgICAgIC0tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtcclxuICB9XHJcbiAgLnByaW50QnV0dG9uQ2FuY2Vse1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogI2ZmMDgwMGMyICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmYwODAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmMDgwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmMDgwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmMDgwMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIC0tb3BhY2l0eTogMTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xyXG4gICAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyOyBcclxuICB9XHJcblxyXG4gIC5sb2FkZGluZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICB9IiwiLnBsYW5vcyB7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogOTglO1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmVxdWlwb3Mge1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLmdydXBvZXF1aXBvIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkUGxhbm9zIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGVsZXRlUGxhbm8ge1xuICAtLWJhY2tncm91bmQ6ICMzODgxZmYwMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODFmZjAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMzg4MWZmMDA7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzM4ODFmZjAwO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgLS1ib3JkZXItY29sb3I6ICMzODgxZmYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgLS1ib3gtc2hhZG93OiAxMHB4IDEwcHg7XG4gIC0tY29sb3I6ICMzODgxZmYwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzODgxZmYwMDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMzg4MWZmMDA7XG4gIC0tY29sb3ItaG92ZXI6ICMzODgxZmYwMDtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMzODgxZmYwMDtcbiAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4ucHJpbnRCdXR0b24ge1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMzg4MWZmN2EgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzM4ODFmZjdhICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzM4ODFmZjdhICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICAtLWJvcmRlci1jb2xvcjogIzM4ODBmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbiAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4ucHJpbnRCdXR0b25DYW5jZWwge1xuICAtLWJhY2tncm91bmQ6ICNmZjA4MDBjMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmYwODAwICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZjA4MDAgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmYwODAwICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICAtLWJvcmRlci1jb2xvcjogI2ZmMDgwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbiAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4ubG9hZGRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.ts ***!
    \********************************************************************************************/

  /*! exports provided: VerSucursalPage */

  /***/
  function srcAppPaginasAdministrarClientesVerClienteVerSucursalVerSucursalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerSucursalPage", function () {
      return VerSucursalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _alta_workstation_alta_workstation_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alta-workstation/alta-workstation.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var _administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../administrar-servicios/servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");

    var VerSucursalPage = /*#__PURE__*/function () {
      function VerSucursalPage(navParams, api_sucursales, modalController, imageCompress, loadingController, api_servicios, alertController) {
        _classCallCheck(this, VerSucursalPage);

        this.navParams = navParams;
        this.api_sucursales = api_sucursales;
        this.modalController = modalController;
        this.imageCompress = imageCompress;
        this.loadingController = loadingController;
        this.api_servicios = api_servicios;
        this.alertController = alertController;
        this.id_sucursal = this.navParams.get('id_sucursal');
        this.imagen = [];
        this.disabled = false;
        this.fileNames = [];
        this.filesToUpload = [];
        this.qrsToPrint = [];
        this.showDeleteQrSucursal = {
          show: false,
          count: 0
        };
        this.showDeleteQr = [];
        this.loadingEquipos = true;
      }

      _createClass(VerSucursalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion(false);
        }
      }, {
        key: "altaWorkstation",
        value: function altaWorkstation(id_equipo_grupo, j) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this15 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.modalController.create({
                      component: _alta_workstation_alta_workstation_page__WEBPACK_IMPORTED_MODULE_4__["AltaWorkstationPage"],
                      cssClass: 'modal-chiquito',
                      componentProps: {
                        'id_sucursal': this.id_sucursal,
                        id_equipo_grupo: id_equipo_grupo
                      }
                    });

                  case 2:
                    modal = _context11.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this15.actualizar_informacion(false); // console.log(data)
                      // this.grupoWorkStation[j].equipos.push(data.data)

                    });
                    _context11.next = 6;
                    return modal.present();

                  case 6:
                    return _context11.abrupt("return", _context11.sent);

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "altaGrupoWorkstation",
        value: function altaGrupoWorkstation(nombre) {
          var _this16 = this;

          var body = {
            nombre_equipo_grupo: nombre,
            id_sucursal: this.id_sucursal
          };
          this.api_servicios.alta_Grupo_workstation(body).subscribe(function (resp) {
            _this16.actualizar_informacion(false);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "alertAltaGrupoWorkstation",
        value: function alertAltaGrupoWorkstation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this17 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.alertController.create({
                      header: 'Crear Grupo de Workstation',
                      inputs: [{
                        name: 'nombre',
                        type: 'text',
                        placeholder: 'nombre'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        handler: function handler() {}
                      }, {
                        text: 'Crear',
                        handler: function handler(input) {
                          _this17.altaGrupoWorkstation(input.nombre);
                        }
                      }]
                    });

                  case 2:
                    alert = _context12.sent;
                    _context12.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "borrar_equipo",
        value: function borrar_equipo(id_equipo, j, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this18 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.loadingController.create({
                      message: 'Eliminado, Por favor espere.'
                    });

                  case 2:
                    this.loading = _context13.sent;
                    this.loading.pre; // console.warn(this.grupoWorkStation[j].equipos[i])
                    // this.loadingController.dismiss()

                    this.api_sucursales.borrar_equipo(id_equipo).subscribe(function (data) {
                      // console.log(data, id_equipo)
                      // this.actualizar_informacion(false);
                      _this18.grupoWorkStation[j].equipos.splice(i, 1);

                      _this18.loadingController.dismiss();
                    }), function (error) {
                      _this18.loadingController.dismiss();

                      alert('Ocurrio un error al eliminar, por favor intente nuevamente');
                      console.log(error);
                    };

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "borrar_equipo_grupo",
        value: function borrar_equipo_grupo(id, i) {
          var _this19 = this;

          this.api_sucursales.eliminar_Grupo_workstation(id).subscribe(function (data) {
            // console.log(data, id)
            // this.actualizar_informacion();
            _this19.grupoWorkStation.splice(i, 1);
          }), function (error) {
            console.log(error);
          }; // console.log(i)
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion(loading) {
          var _this20 = this;

          this.loadingEquipos = true;
          this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(function (data) {
            _this20.sucursal = data;
            _this20.sucursal = _this20.sucursal.result;
            console.warn(_this20.sucursal);

            for (var index = 0; index < _this20.sucursal.planos.length; index++) {
              // this.sucursal.planos[index].url_imagen_plano = 1
              // this.sucursal[index] = this.sucursal[index].url_imagen_plano
              Object.defineProperty(_this20.sucursal.planos[index], 'name', {
                value: _this20.sucursal.planos[index].url_imagen_plano.slice(27)
              });
            }

            console.log('sucursal: ', _this20.sucursal);

            if (loading) {
              _this20.loadingController.dismiss();
            }
          }), function (error) {
            if (loading) {
              _this20.loadingController.dismiss();
            }

            console.log(error);
          }; // this.api_sucursales.listado_workstations(this.id_sucursal).subscribe(data => {
          //   console.log(data)
          //   this.workstations = data;
          //   this.workstations = this.workstations.result;
          //   console.log(this.workstations)
          // }), (error => {
          //   console.log(error)
          // })

          this.api_sucursales.listado_grupoWorkstations(this.id_sucursal).subscribe(function (data) {
            console.log('Grupo1', data.result);
            var flag = 0;
            var array = [];
            var i = 0;
            var first = true;

            if (data.result != undefined) {
              data.result.forEach(function (element) {
                if (element.id_equipo_grupo == flag) {
                  // console.log(element.id_equipo_grupo, ' ' ,flag)
                  _this20.showDeleteQr[i].push({
                    show: false,
                    count: 0
                  });

                  array[i].equipos.push({
                    id_equipo: element.id_equipo,
                    id_servicio: element.id_servicio,
                    id_sucursal: element.id_sucursal,
                    nombre_equipo: element.nombre_equipo,
                    codigo_qr_equipo: element.codigo_qr_equipo,
                    estado_servicio: element.estado_servicio,
                    nombre_servicio: element.nombre_servicio
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

                  _this20.showDeleteQr.push([]);

                  array[i].equipos.push({
                    id_equipo: element.id_equipo,
                    id_servicio: element.id_servicio,
                    id_sucursal: element.id_sucursal,
                    nombre_equipo: element.nombre_equipo,
                    codigo_qr_equipo: element.codigo_qr_equipo,
                    estado_servicio: element.estado_servicio,
                    nombre_servicio: element.nombre_servicio
                  });

                  _this20.showDeleteQr[i].push({
                    show: false,
                    count: 0
                  });

                  first = false;
                }
              });
              console.log(_this20.showDeleteQr);
              _this20.grupoWorkStation = array; // console.log('grupo2: ', this.grupoWorkStation)

              var _iterator9 = _createForOfIteratorHelper(_this20.grupoWorkStation),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var grupoEquipo = _step9.value;
                  grupoEquipo.equipos.sort(function (a, b) {
                    if (a.nombre_equipo > b.nombre_equipo) {
                      return 1;
                    }

                    if (a.nombre_equipo < b.nombre_equipo) {
                      return -1;
                    } // a must be equal to b


                    return 0;
                  });
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            _this20.loadingEquipos = false;
          });
        }
      }, {
        key: "openPdf",
        value: function openPdf(url) {
          window.open(url);
        }
      }, {
        key: "agregar_plano",
        value: function agregar_plano() {
          document.getElementById('inputUploadFile').click(); // this.imageCompress.uploadFile().then(({image, orientation}) => {
          //   console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
          //   this.imageCompress.compressFile(image, orientation, 100, 100).then(
          //     result => {
          //       // console.log(result);
          //       this.imagen[0] = {url: result}
          //       // console.log('rodri1', this.imagen[0]);
          //       // console.log('rodri2', this.sucursal.sucursal[0].id_sucursal)
          //       this.subirPlano(this.imagen);
          //     }
          //   )
          // });
        }
      }, {
        key: "showFile",
        value: function showFile(files) {
          if (files.length > 0) {
            for (var file in files) {
              var val = files[file].name;
              var result = this.filesToUpload.filter(function (file) {
                return file.name == val;
              });

              if (result.length == 0) {
                this.filesToUpload.push(files[file]);
              } else {
                alert('Ya existe: ' + val);
              }
            }

            this.filesToUpload.splice(-2, 2);
            this.uploadFile(this.filesToUpload);
            this.filesToUpload = [];
            val = null;
            result = null; // console.log(this.filesToUpload); 
          } else {}
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this21 = this;

            var loader, err, index, formData;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.loadingController.create({
                      message: "Subiendo Archivos"
                    });

                  case 2:
                    loader = _context14.sent;
                    loader.present();
                    err = 0;
                    this.disabled = true;

                    for (index = 0; index < files.length; index++) {
                      formData = new FormData();
                      formData.append('file', files[index], files[index].name);
                      formData.append('id_sucursal', this.sucursal.sucursal[0].id_sucursal); // {id_sucursal:this.sucursal.sucursal[0].id_sucursal,

                      this.api_sucursales.upload('/planos/crear', formData).then(function (resp) {
                        console.log(resp);
                        _this21.sucursal.planos = [];

                        _this21.actualizar_informacion(true);
                      })["catch"](function (error) {
                        _this21.loadingController.dismiss();

                        console.log('Error al subir el plano ', error);
                        alert('El plano no se subio');
                      });
                    }

                    this.disabled = false; // return err

                  case 8:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        } // async subirPlano(imagen){
        //   this.loading = await this.loadingController.create({
        //     message: 'Por favor espere.'
        //   });
        //   await this.loading.present();
        //   if (this.imagen.length > 0){
        //     this.object = {id_sucursal:this.sucursal.sucursal[0].id_sucursal, imagen: this.imagen[0].url}
        //     // console.log('LA IMAGEN PUTO',this.imagen[0]);
        //     // console.log('request al sv: ', this.object)
        //     this.api_sucursales.subir_planos(this.object).subscribe(data =>{
        //       console.log('resp sv img: ',data)
        //       this.actualizar_informacion();
        //       this.loading.dismiss();
        //     }, (error =>{
        //       this.loading.dismiss();
        //       console.log('Error al subir el plano ', error);
        //       alert('El plano no se subio')
        //     }))
        //   } else {
        //     this.loading.dismiss();
        //     console.log('No se ha seleccionado ningun plano')
        //   }
        // }

      }, {
        key: "eliminar_plano",
        value: function eliminar_plano(id_plano) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    console.log(id_plano);
                    _context15.next = 3;
                    return this.loadingController.create({
                      message: 'Eliminado plano, Por favor espere.'
                    });

                  case 3:
                    this.loading = _context15.sent;
                    _context15.next = 6;
                    return this.loading.present();

                  case 6:
                    this.api_sucursales.eliminar_plano(id_plano).subscribe(function (resp) {
                      _this22.api_sucursales.informacion_sucursal(_this22.id_sucursal).subscribe(function (data) {
                        _this22.sucursal = data;
                        _this22.sucursal = _this22.sucursal.result;

                        for (var index = 0; index < _this22.sucursal.planos.length; index++) {
                          // this.sucursal.planos[index].url_imagen_plano = 1
                          // this.sucursal[index] = this.sucursal[index].url_imagen_plano
                          Object.defineProperty(_this22.sucursal.planos[index], 'name', {
                            value: _this22.sucursal.planos[index].url_imagen_plano.slice(27)
                          });
                        }

                        console.log('sucursal: ', _this22.sucursal);

                        _this22.loadingController.dismiss();
                      }), function (error) {
                        _this22.loadingController.dismiss();

                        _this22.modalController.dismiss();

                        console.log(error);
                      };
                    }, function (error) {
                      _this22.loading.dismiss();

                      console.log('Error al borrar el plano ', error);

                      _this22.loadingController.dismiss();

                      alert('Ocurrio un error');
                    });

                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "alert_eliminar_plano",
        value: function alert_eliminar_plano(id_plano) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this23 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar el plano?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this23.eliminar_plano(id_plano);
                        }
                      }]
                    });

                  case 2:
                    alert = _context16.sent;
                    _context16.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "Imprimir",
        value: function Imprimir() {
          this.api_servicios.getZpl({
            base: this.sucursal.sucursal[0].codigo_qr
          }).toPromise().then(function (resp) {
            console.log(resp.codigo);
            var mywindow = window.open('', 'PRINT', 'height=400,width=600');
            mywindow.document.write('<html><head><title>' + document.title + '</title>');
            mywindow.document.write('</head><body >');
            mywindow.document.write('<h3>' + resp.codigo + '</h3>'); // mywindow.document.write(document.getElementById('divContenido').innerHTML);

            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10

            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print(); // mywindow.close();
          });
        }
      }, {
        key: "imprimirQrAllWorkstations",
        value: function imprimirQrAllWorkstations() {
          var qrs = []; // console.log(this.grupoWorkStation)

          this.grupoWorkStation.forEach(function (WorkStation) {
            WorkStation.equipos.forEach(function (equipo) {
              qrs.push(equipo.codigo_qr_equipo);
            });
          });
          console.log(qrs);
          this.imprimir(qrs);
        }
      }, {
        key: "imprimirQrThisWorkstation",
        value: function imprimirQrThisWorkstation(grupoEquipo) {
          var qrs = []; // console.log(grupoEquipo)

          grupoEquipo.equipos.forEach(function (equipo) {
            qrs.push(equipo.codigo_qr_equipo);
          });
          console.log(qrs);
          this.imprimir(qrs);
        }
      }, {
        key: "addmprimirQr",
        value: function addmprimirQr(qr, i, j) {
          this.qrsToPrint.push(qr.codigo_qr_equipo);
          this.showDeleteQr[j][i].show = true;
          this.showDeleteQr[j][i].count++;
        }
      }, {
        key: "deleteImprimirQr",
        value: function deleteImprimirQr(qr, i, j) {
          var pos = this.qrsToPrint.indexOf(qr.codigo_qr_equipo);

          if (pos != -1) {
            this.qrsToPrint.splice(pos, 1);
            this.showDeleteQr[j][i].count--;
          }

          pos = this.qrsToPrint.indexOf(qr.codigo_qr_equipo);

          if (pos == -1) {
            this.showDeleteQr[j][i].show = false;
          }
        }
      }, {
        key: "addImprimirQrSucursal",
        value: function addImprimirQrSucursal() {
          this.qrsToPrint.push(this.sucursal.sucursal[0].codigo_qr);
          this.showDeleteQrSucursal.show = true;
          this.showDeleteQrSucursal.count++;
        }
      }, {
        key: "deleteImprimirQrSucursal",
        value: function deleteImprimirQrSucursal() {
          var pos = this.qrsToPrint.indexOf(this.sucursal.sucursal[0].codigo_qr);

          if (pos != -1) {
            this.qrsToPrint.splice(pos, 1);
            this.showDeleteQrSucursal.count--;
          }

          pos = this.qrsToPrint.indexOf(this.sucursal.sucursal[0].codigo_qr);

          if (pos == -1) {
            this.showDeleteQrSucursal.show = false;
          }
        }
      }, {
        key: "imprimirAllQrSucursal",
        value: function imprimirAllQrSucursal() {
          var qrs = [];
          qrs.push(this.sucursal.sucursal[0].codigo_qr);
          this.grupoWorkStation.forEach(function (WorkStation) {
            WorkStation.equipos.forEach(function (equipo) {
              qrs.push(equipo.codigo_qr_equipo);
            });
          }); // console.log(qrs)

          this.imprimir(qrs);
        }
      }, {
        key: "printSelect",
        value: function printSelect() {
          this.imprimir(this.qrsToPrint);
        }
      }, {
        key: "deletePrintSelect",
        value: function deletePrintSelect() {
          this.showDeleteQrSucursal.count = 0;
          this.showDeleteQrSucursal.show = false;
          this.showDeleteQr.forEach(function (element) {
            element.forEach(function (element2) {
              element2.show = false;
              element2.count = 0;
            });
          });
          this.qrsToPrint = [];
        }
      }, {
        key: "imprimir",
        value: function imprimir(qrs) {
          var mywindow = window.open('', 'PRINT', 'width=21,5cm');
          mywindow.document.write('<html><head><title>' + document.title + '</title>');
          mywindow.document.write('</head><body>');

          for (var index = 0; index < qrs.length; index++) {
            // mywindow.document.write('<div style="margin: 0.5cm ;padding: 0.5cm; border-style: solid; border-width: 1px; border-color: rgb(97, 97, 97);height: 4cm; width: 4cm;">');
            mywindow.document.write('<img style="margin: 0.2cm ;padding-left: 0.52cm;padding-top: 0;padding-bottom: 0.52cm; padding-right: 0.52cm; height: 5cm; width: 5cm; border-style: solid; border-width: 1px; border-color: rgb(97, 97, 97);" src="' + qrs[index] + '">'); // mywindow.document.write('</div>');
            // mywindow.document.write('<img style="height: 6cm; width: 6cm; border-style: solid; border-width: 1px; border-color: rgb(97, 97, 97);" src="' + qrs[index] + '">');
          } // mywindow.document.write(document.getElementById('divContenido').innerHTML);


          mywindow.document.write('</body></html>');
          mywindow.document.close(); // necessary for IE >= 10

          mywindow.focus(); // necessary for IE >= 10*/

          mywindow.print(); // mywindow.close();
        }
      }, {
        key: "test",
        value: function test($event) {
          console.warn($event); // window.open('http://192.168.0.71:3000/getZip')
        }
      }, {
        key: "descargar",
        value: function descargar() {}
      }, {
        key: "descargarSucursal",
        value: function descargarSucursal() {
          // console.warn(1)
          var link = document.createElement("a");
          link.download = this.sucursal.sucursal[0].id_sucursal + ".png";
          link.href = "http://192.168.0.71:3000/getfile/sucursales/" + this.sucursal.sucursal[0].id_sucursal;
          link.click();
        }
      }, {
        key: "descargarQrEquipo",
        value: function descargarQrEquipo(equipo) {
          // console.warn(equipo)
          // console.warn(equipo.id_equipo)
          var link = document.createElement("a");
          link.download = equipo.id_equipo + ".png";
          link.href = "http://192.168.0.71:3000/getfile/equipos/" + equipo.id_equipo;
          link.click();
        }
      }, {
        key: "descargarQrThisWorkstation",
        value: function descargarQrThisWorkstation(grupoEquipo) {
          // console.warn(grupoEquipo)
          var ids = null;

          for (var index = 0; index < grupoEquipo.equipos.length; index++) {
            var element = grupoEquipo.equipos[index];

            if (index == 0) {
              ids = element.id_equipo.toString();
            } else {
              ids = ids + "," + element.id_equipo.toString();
            }
          }

          var link = document.createElement("a");
          link.download = "qrs.png";
          link.href = "http://192.168.0.71:3000/getZip?type=equipos&name=" + grupoEquipo.nombre_equipo_grupo + "&data=" + ids;
          link.click();
        }
      }, {
        key: "descargarAllQrSucursal",
        value: function descargarAllQrSucursal() {
          var data = [];
          var ids = null;
          data.push(this.sucursal.sucursal[0].id_sucursal);
          this.grupoWorkStation.forEach(function (WorkStation) {
            WorkStation.equipos.forEach(function (equipo) {
              data.push(equipo.id_equipo);
            });
          });

          for (var index = 0; index < data.length; index++) {
            var element = data[index];

            if (index == 0) {
              ids = element.toString();
            } else {
              ids = ids + "," + element.toString();
            }
          }

          var link = document.createElement("a");
          link.download = "qrs.png";
          link.href = "http://192.168.0.71:3000/getZip?type=all&name=" + this.sucursal.sucursal[0].razon_social_sucursal + "&data=" + ids;
          link.click();
        }
      }, {
        key: "descargarQrAllWorkstations",
        value: function descargarQrAllWorkstations() {
          var data = [];
          var ids = null;
          this.grupoWorkStation.forEach(function (WorkStation) {
            WorkStation.equipos.forEach(function (equipo) {
              data.push(equipo.id_equipo);
            });
          });

          for (var index = 0; index < data.length; index++) {
            var element = data[index];

            if (index == 0) {
              ids = element.toString();
            } else {
              ids = ids + "," + element.toString();
            }
          }

          var link = document.createElement("a");
          link.download = "qrs.png";
          link.href = "http://192.168.0.71:3000/getZip?type=equipos&name=equipos_" + this.sucursal.sucursal[0].razon_social_sucursal + "&data=" + ids;
          link.click();
        }
      }]);

      return VerSucursalPage;
    }();

    VerSucursalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__["NgxImageCompressService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_6__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    VerSucursalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-sucursal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ver-sucursal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ver-sucursal.page.scss */
      "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/ver-sucursal.page.scss"))["default"]]
    })], VerSucursalPage);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _modificar_visita_modificar_visita_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
      }

      _createClass(VerVisitaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion();
        }
      }, {
        key: "generar_pdf",
        value: function generar_pdf() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this24 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.loadingController.create({
                      message: "Generando PDF"
                    });

                  case 2:
                    loader = _context17.sent;
                    loader.present();
                    console.log(this.id_visita);
                    this.api_visitas.crear_pdf({
                      id_visita: this.id_visita
                    }).subscribe(function (data) {
                      console.log(data);
                      _this24.pdf_generado = true;
                      loader.dismiss();
                    }, function (error) {
                      console.log(error);
                      loader.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "ver_pdf",
        value: function ver_pdf() {
          var _this25 = this;

          this.api_visitas.ver_pdf(this.id_visita).subscribe(function (data) {
            _this25.url = data;
            console.log(_this25.url.url);
            var win = window.open(_this25.url.url, '_blank');
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
          var _this26 = this;

          this.api_visitas.informacion_visita(this.id_visita).then(function (data) {
            _this26.visita = data;
            _this26.visita = _this26.visita.result;
            _this26.visita.servicios2 = [];

            var _iterator10 = _createForOfIteratorHelper(_this26.visita.servicios),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var servicio = _step10.value;

                if (!_this26.visita.servicios2.includes(servicio.nombre_servicio)) {
                  _this26.visita.servicios2.push(servicio.nombre_servicio);
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "modificar_visita",
        value: function modificar_visita() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this27 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.modalController.create({
                      component: _modificar_visita_modificar_visita_page__WEBPACK_IMPORTED_MODULE_4__["ModificarVisitaPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_visita': this.id_visita
                      }
                    });

                  case 2:
                    modal = _context18.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this27.actualizar_informacion();
                    });
                    _context18.next = 6;
                    return modal.present();

                  case 6:
                    return _context18.abrupt("return", _context18.sent);

                  case 7:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return VerVisitaPage;
    }();

    VerVisitaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"]
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
//# sourceMappingURL=paginas-administrar-clientes-ver-cliente-ver-cliente-module-es5.js.map