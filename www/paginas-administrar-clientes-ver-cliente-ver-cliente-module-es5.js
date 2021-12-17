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


    __webpack_exports__["default"] = "<ion-content *ngIf=\"cliente\">\r\n  <div class=\"informacion_cliente\">\r\n    <ion-item class=\"titulos\" lines=\"full\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Razon social</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Telefono</b>\r\n            </ion-label>  \r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Email</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label>\r\n              <b>Direccion</b>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  \r\n  \r\n  \r\n    <ion-item lines=\"full\" *ngIf = \"cliente\">\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].razon_social_cliente}}\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].telefono}} \r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].email}}\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-label>\r\n          {{cliente.clienteDatos[0].direccion}}\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"text-align: center;\"><b>Sucursales</b></ion-label>\r\n          <ion-button (click)=\"altaSucursal()\">Agregar sucursal</ion-button>\r\n        </ion-item>\r\n        <ion-item lines=\"full\">\r\n          <ion-col size=\"3\">Razon social sucursal</ion-col>\r\n          <ion-col size=\"3\">Telefono sucursal</ion-col>\r\n          <ion-col size=\"3\">Email sucursal</ion-col>\r\n          <ion-col size=\"2\">Direccion sucursal</ion-col>\r\n        </ion-item>\r\n        <div *ngFor=\"let sucursal of cliente.sucursales.datosSucursal\">\r\n          <ion-item lines=\"full\">\r\n            <ion-col size=\"3\">{{sucursal.razon_social_sucursal}}</ion-col>\r\n            <ion-col size=\"3\">{{sucursal.telefono_sucursal}}</ion-col>\r\n            <ion-col size=\"3\">{{sucursal.email_sucursal}}</ion-col>\r\n            <ion-col size=\"2\">\r\n              {{sucursal.direccion_sucursal}}\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-icon name=\"create-outline\" style=\"margin-right: 5px\" (click)=\"modificar_sucursal(sucursal.id_sucursal)\"></ion-icon>\r\n              <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-right: 5px\" (click)=\"baja_sucursal(sucursal.id_sucursal)\"></ion-icon>\r\n              <ion-icon  (click)=\"verSucursal(sucursal.id_sucursal)\" color=\"primary\" name=\"enter-outline\"></ion-icon>\r\n            </ion-col>\r\n          </ion-item>\r\n        </div>     \r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"text-align: center;\"><b>Visitas</b></ion-label>\r\n        </ion-item> \r\n        <ion-item lines=\"full\">\r\n          <ion-col size=\"4\">Fecha de la visita</ion-col>\r\n          <ion-col size=\"4\">Sucursal</ion-col>\r\n          <ion-col size=\"2\">Estado</ion-col>\r\n          <ion-col size=\"2\">Acciones</ion-col>\r\n        </ion-item>\r\n        <div *ngFor=\"let visita of cliente.sucursales.visitas\">\r\n          <ng-container *ngIf=\"visita.estado_visitas != 'eliminado'\">\r\n            <ion-item lines=\"full\">\r\n              <ion-col size=\"4\">{{visita.fecha_visita | date: 'dd/MM/yyyy hh:mm'}}</ion-col>\r\n              <ion-col size=\"4\">{{visita.razon_social_sucursal}}</ion-col>\r\n              <ion-col size=\"2\">\r\n                {{visita.estado_visitas}}\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon color=\"primary\" name=\"enter-outline\" (click)=\"verVisita(visita.id_visita)\"></ion-icon>\r\n                <ion-icon *ngIf=\"visita.estado_visitas == 'pendiente' || visita.estado_visitas == 'en proceso'\" color=\"danger\" name=\"trash-outline\" (click)=\"eliminarVisitaAlert(visita)\"></ion-icon>\r\n                <!-- <ion-icon class=\"no-pointer\" name=\"close-outline\" *ngIf=\"visita.estado_visitas != 'finalizada' && visita.estado_visitas != 'entregado'\"></ion-icon> -->\r\n                <ion-icon style=\"padding-left: 5px;\" name=\"mail-outline\" *ngIf=\"visita.estado_visitas == 'finalizada' \" (click)=\"marcarEntregadoAlert(visita)\"></ion-icon>\r\n                <!-- <ion-icon style=\"padding-left: 5px;color: rgb(52, 183, 241);\" name=\"checkmark-done-outline\" *ngIf=\"visita.estado_visitas == 'entregado'\" class=\"no-pointer\"></ion-icon> -->\r\n              </ion-col>\r\n\r\n            </ion-item>\r\n          </ng-container>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Nombre del workstation: </ion-label>\r\n    <ion-input [(ngModel)]=\"nombre_workstation\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Zona del workstation: </ion-label>\r\n    <ion-input [(ngModel)]=\"zona_workstation\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Numero del workstation: </ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"nro_workstation\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Servicio que cumple</ion-label>\r\n    <ion-select [(ngModel)]=\"id_servicio\" (ionChange)=\"producto_predeterminado = null\">\r\n      <div *ngFor=\"let servicio of servicios\">\r\n        <div *ngIf=\"servicio.qr == 1\">\r\n          <ion-select-option value={{servicio.id_servicio}}>{{servicio.nombre_servicio}}</ion-select-option>\r\n        </div>\r\n      </div>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"id_servicio == '20'\">\r\n    <ion-label>Producto Predeterminado</ion-label>\r\n    <ion-select [(ngModel)]=\"producto_predeterminado\">\r\n      <div *ngFor=\"let producto of productos\">\r\n        <div>\r\n          <ion-select-option value={{producto.id_producto}}>{{producto.nombre_producto + ' - ' + producto.tipo_producto}}</ion-select-option>\r\n        </div>\r\n      </div>\r\n      <ion-select-option value=null>Sin Producto</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button expand=\"full\" (click)=\"alta_workstation()\">Dar de alta</ion-button>\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "<ion-content>\r\n  <div *ngIf=\"sucursal\">\r\n      <ion-row style=\"text-align: center; background-color: white;padding: 1%;\">\r\n        <ion-col size=\"9\"><b style=\"margin-top:15px\">Informacion de la sucursal</b></ion-col>\r\n        <ion-col size=\"1\">Acciones: </ion-col>\r\n        <ion-col size=\"0.5\" style=\"font-size: 24px !important;\"><ion-icon color=\"primary\" title=\"Descargar Todos los QRs de la sucursal\" (click)=\"descargarAllQrSucursal()\" name=\"cloud-download-outline\"></ion-icon></ion-col>\r\n        <ion-col size=\"0.5\" style=\"font-size: 24px !important;\"><ion-icon color=\"primary\" title=\"Imprimir Toda la informacion de la sucursal\" (click)=\"imprimirAllQrSucursal()\" name=\"print-outline\"></ion-icon></ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n      </ion-row>\r\n    <ion-item lines=\"full\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <!-- <ion-col size=\"3\"></ion-col> -->\r\n          <ion-col size=\"3\">\r\n            <ion-label><b>Sucursal</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Telefono</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label><b>Mail</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Codigo QR</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Acciones</b></ion-label>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"1\"></ion-col> -->\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <!-- <ion-col size=\"3\"></ion-col> -->\r\n          <ion-col size=\"3\" style=\"margin-top: 10px;\">\r\n            <ion-label>{{sucursal.sucursal[0].razon_social_sucursal}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"margin-top: 10px;\">\r\n            <ion-label>{{sucursal.sucursal[0].telefono_sucursal}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"margin-top: 10px;\">\r\n            <ion-label>{{sucursal.sucursal[0].email_sucursal}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-card style=\"width: 50px; margin-top: 0px;\">\r\n              <div>\r\n                <a (click)=\"descargarSucursal()\">\r\n                  <img style=\"z-index: -1 !important\" [src]='sucursal.sucursal[0].codigo_qr' (click)=\"descargarSucursal()\">\r\n                </a>\r\n                <!-- <ion-button (click)=\"toDataURL(sucursal.sucursal[0].codigo_qr)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                  Click me\r\n                </ion-button> -->\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col style=\"font-size: 24px !important;\" size=\"2\">\r\n            <ion-icon color=\"primary\" title=\"Descargar este QR\" style=\"margin-top:15px\" (click)=\"descargarSucursal()\" name=\"cloud-download-outline\"></ion-icon>\r\n            <!-- <ion-icon color=\"primary\" title=\"Seleccionar ESTE QR para Imprimir\" style=\"margin-top:15px\" (click)=\"addImprimirQrSucursal()\" name=\"print-outline\"></ion-icon> -->\r\n            <ion-icon *ngIf=\"showDeleteQrSucursal.show\" [title]=\"'Eliminar QR de la lista (' + showDeleteQrSucursal.count +')'\" style=\"margin-top:15px; color: red !important;\" (click)=\"deleteImprimirQrSucursal()\" name=\"print-outline\"></ion-icon>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"1\"></ion-col> -->\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <div style=\"margin-top: 5px;\"></div>\r\n    <ion-row style=\"background-color: white;\">\r\n      <ion-col size=\"5\">\r\n        <ion-item style=\"text-align: center;\" lines=\"none\">\r\n          <ion-label style=\"font-size: 100% !important;\"><b>Workstations/equipos</b></ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"7\">\r\n        <ion-item style=\"text-align: right;\" lines=\"none\">\r\n          <ion-label></ion-label>\r\n          <ion-icon color=\"primary\" (click)=\"descargarQrAllWorkstations()\" title=\"Descargar los QR'S de TODAS las Workstations/equipos\" name=\"cloud-download-outline\"></ion-icon>\r\n          <ion-icon color=\"primary\" (click)=\"imprimirQrAllWorkstations()\" title=\"Imprimir los QR'S de TODAS las Workstations/equipos\" name=\"print-outline\"></ion-icon>\r\n          <ion-button (click)=\"alertAltaGrupoWorkstation()\">Agregar grupo de workstations</ion-button>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <!-- <ion-item lines=\"full\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\">\r\n            <ion-label><b>Nombre del workstation</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Nombre del servicio</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label><b>Codigo QR</b></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"1\">\r\n            <ion-label><b>Eliminar</b></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item> -->\r\n    <!-- <ion-item lines=\"full\" *ngFor=\"let equipo of workstations\" class=\"equipos\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\" style=\"margin-top: 15px\">\r\n            <ion-label>{{equipo.nombre_equipo}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"margin-top: 15px\">\r\n            <ion-label>{{equipo.nombre_servicio}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-card style=\"width: 50px; margin-top: 0px;\">\r\n              <div>\r\n                <a [href]=\"equipo.codigo_qr_equipo\" download>\r\n                  <img [src]='equipo.codigo_qr_equipo'>\r\n                </a>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"1\">\r\n            <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-top:15px\" (click)=\"borrar_equipo(equipo.id_equipo)\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item> -->\r\n    <div *ngIf=\"(grupoWorkStation == undefined) && !loadingEquipos\">\r\n      <ion-item>\r\n        <ion-label style=\"width:  100%; text-align: center;\">No se encontraron WorkStation</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"loadding\" *ngIf=\"loadingEquipos\">\r\n      <ion-spinner style=\"margin-top: 10px; color: #3b3b3f\"></ion-spinner>\r\n    </div>\r\n    <div *ngIf=\"(grupoWorkStation != undefined) && !loadingEquipos\">\r\n      <div style=\"background-color: white;\" *ngFor=\"let grupoEquipo of grupoWorkStation; let j = index\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"grupoequipo\" size=\"1.25\" >\r\n              {{grupoEquipo.nombre_equipo_grupo}}\r\n              <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-top:15px\" (click)=\"borrar_equipo_grupo(grupoEquipo.id_equipo_grupo,j)\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"6.5\">\r\n              <ion-item style=\"text-align: left;\" lines=\"none\">\r\n                <ion-icon color=\"primary\" title=\"Descargar los QR'S de ESTA Workstation/equipo\" (click)=\"descargarQrThisWorkstation(grupoEquipo)\" name=\"cloud-download-outline\"></ion-icon>\r\n                <ion-icon color=\"primary\" title=\"Imprimir los QR'S de ESTA Workstation/equipo\" (click)=\"imprimirQrThisWorkstation(grupoEquipo)\" name=\"print-outline\"></ion-icon>\r\n                <ion-button (click)=\"altaWorkstation(grupoEquipo,j)\">Agregar workstation</ion-button>\r\n                <ion-button (click)=\"elegirPlano(grupoEquipo)\">Asignar plano</ion-button>\r\n                <ion-button (click)=\"cambiarProductoSector(grupoEquipo)\">Producto predeterminado</ion-button>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"4.25\">\r\n              <p>{{grupoEquipo.plano?grupoEquipo.plano.name:\"Sin plano\"}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"full\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"2\">\r\n                  <ion-label><b>Workstation</b></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ion-label *ngIf=\"grupoEquipo?.equipos[0]?.id_servicio == 20\"><b>Producto predeterminado</b></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\">\r\n                  <ion-label><b>Servicio</b></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\">\r\n                  <ion-label><b>Codigo QR</b></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-label></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"1\">\r\n                  <ion-label><b>Acciones</b></ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <div *ngIf=\"(grupoEquipo.equipos.length == 0 || grupoEquipo.length == 0)\">\r\n            <ion-item>\r\n              <ion-label style=\"width:  100%; text-align: center;\">No se encontraron equipos</ion-label>\r\n            </ion-item>\r\n          </div>\r\n          <div *ngIf=\"(grupoEquipo.equipos.length > 0)\">\r\n            <div *ngFor=\"let equipo of grupoEquipo.equipos; let i = index\">\r\n              <ion-row class=\"equipos\" *ngIf=\"equipo.nombre_equipo != null\">\r\n                <ion-col size=\"2\" style=\"margin-top: 15px\">\r\n                  <ion-label>\r\n                    {{equipo.nombre}}\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\" style=\"margin-top: 15px\">\r\n                  <ion-label *ngIf=\"equipo.id_servicio == 20\">\r\n                    {{equipo.producto_predeterminado_nombre?equipo.producto_predeterminado_nombre:\"Sin producto\"}}\r\n                    <ion-icon color=\"primary\" slot=\"start\" name=\"create-outline\" (click)=\"elegirProducto(equipo)\"></ion-icon>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\" style=\"margin-top: 15px\">\r\n                  <ion-label>{{equipo.nombre_servicio}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\">\r\n                  <ion-card style=\"width: 50px; margin-top: 0px;\">\r\n                    <div>\r\n                      <a  (click)=\"descargarQrEquipo(equipo)\">\r\n                        <img [src]='equipo.codigo_qr_equipo'  (click)=\"descargarQrEquipo(equipo)\">\r\n                      </a>\r\n                    </div>\r\n                  </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-icon color=\"primary\" title=\"Descargar este QR\" style=\"margin-top:15px\" (click)=\"descargarQrEquipo(equipo)\" name=\"cloud-download-outline\"></ion-icon>\r\n                  <ion-icon color=\"primary\" title=\"Seleccionar ESTE QR para Imprimir\" style=\"margin-top:15px\" (click)=\"addmprimirQr(equipo, i, j)\" name=\"print-outline\"></ion-icon>\r\n                  <ion-icon *ngIf=\"showDeleteQr[j][i].show\" [title]=\"'Eliminar QR de la lista (' + showDeleteQr[j][i].count +')'\" style=\"margin-top:15px; color: red !important;\" (click)=\"deleteImprimirQr(equipo, i, j)\" name=\"print-outline\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"1\">\r\n                  <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-top:15px\" (click)=\"borrar_equipo(equipo,j,i)\"></ion-icon>\r\n                  <ion-icon color=\"primary\" name=\"create-outline\" style=\"padding-left: 5px;\" (click)=\"editName(equipo, grupoEquipo)\"></ion-icon> \r\n                </ion-col>\r\n\r\n\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"sucursal\" style=\"margin-top: 10px;\">\r\n    <ion-item style=\"text-align: center;\" lines=\"none\">\r\n      <ion-label><b>Planos de la sucursal</b></ion-label>\r\n      <input style=\"visibility: hidden;\" id=\"inputUploadFile\" title=\" \" [disabled]=\"disabled\" type=\"file\" name=\"\" (change)=\"showFile($event.target.files)\">\r\n      <ion-icon slot=\"end\" name=\"add-circle-outline\" color=\"primary\" (click)=\"agregar_plano()\"></ion-icon>\r\n    </ion-item>\r\n    <div *ngFor=\"let plano of sucursal.planos\">\r\n      <ion-item button *ngIf=\"sucursal.planos.length > 0\">\r\n        <ion-icon (click)=\"openPdf(plano.url_imagen_plano)\" name=\"eye\" slot=\"start\"></ion-icon>\r\n        <ion-label (click)=\"openPdf(plano.url_imagen_plano)\">{{plano.name}}</ion-label>\r\n        <ion-icon slot=\"end\" style=\"color: red;\" name=\"trash-outline\" (click)=\"alert_eliminar_plano(plano.id_plano)\"></ion-icon>\r\n      </ion-item>\r\n\r\n    </div>\r\n    <ion-item button *ngIf=\"sucursal.planos.length == 0\">\r\n      <ion-label>No hay planos cargados</ion-label>\r\n    </ion-item>\r\n    <!-- <ion-slides pager=\"true\" style=\"background-color: secondary\">\r\n      <ion-slide *ngFor= \"let plano of sucursal.planos\">\r\n        <ion-card class=\"cardPlanos\">\r\n\r\n          <img src={{plano.url_imagen_plano}}  class=\"planos\">\r\n          <ion-button class=\"deletePlano\" style=\"position:absolute; right: 0%; bottom: 0%;\" (click)=\"alert_eliminar_plano(plano.id_plano)\">\r\n            <ion-icon style=\"color: red;\" name=\"trash-outline\" (click)=\"alert_eliminar_plano(plano.id_plano)\"></ion-icon>\r\n          </ion-button>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides> -->\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"qrsToPrint.length > 0\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>QR'S Seleccionados ({{qrsToPrint.length}})</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"printButton\" (click)=\"printSelect()\">Imprimir</ion-button>\r\n      <ion-button class=\"printButtonCancel\" (click)=\"deletePrintSelect()\">Cancelar</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");

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


    __webpack_exports__["default"] = ".informacion_cliente {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\nion-icon {\n  cursor: pointer;\n}\n\n.no-pointer {\n  cursor: default;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS9EOlxcUmVwb3NpdG9yaW9zXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLWNsaWVudGVzXFx2ZXItY2xpZW50ZVxcdmVyLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdpbmFzL2FkbWluaXN0cmFyLWNsaWVudGVzL3Zlci1jbGllbnRlL3Zlci1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRERDO0VBQ0csZUFBQTtFQUNBLFdBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvdmVyLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9ybWFjaW9uX2NsaWVudGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxufVxyXG5pb24taWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufS5uby1wb2ludGVye1xyXG4gICAgY3Vyc29yOmRlZmF1bHQ7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufSIsIi5pbmZvcm1hY2lvbl9jbGllbnRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1wb2ludGVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
    /* harmony import */


    var _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../programar-visita/servicios/api-visitas.service */
    "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");

    var VerClientePage = /*#__PURE__*/function () {
      function VerClientePage(activatedRoute, api_clientes, modalController, alertController, loadingController, toastController, apiVisitasService) {
        _classCallCheck(this, VerClientePage);

        this.activatedRoute = activatedRoute;
        this.api_clientes = api_clientes;
        this.modalController = modalController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.apiVisitasService = apiVisitasService;
      }

      _createClass(VerClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion();
        }
      }, {
        key: "altaSucursal",
        value: function altaSucursal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var id_cliente, modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
                    _context.next = 3;
                    return this.modalController.create({
                      component: _alta_sucursal_alta_sucursal_page__WEBPACK_IMPORTED_MODULE_5__["AltaSucursalPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_cliente': id_cliente
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "verSucursal",
        value: function verSucursal(id_sucursal) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var id_cliente, modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _ver_sucursal_ver_sucursal_page__WEBPACK_IMPORTED_MODULE_6__["VerSucursalPage"],
                      cssClass: 'modal_grande',
                      componentProps: {
                        'id_sucursal': id_sucursal
                      }
                    });

                  case 3:
                    modal = _context2.sent;
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
        key: "verVisita",
        value: function verVisita(id_visita) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _ver_visita_ver_visita_page__WEBPACK_IMPORTED_MODULE_7__["VerVisitaPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_visita': id_visita
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "baja_sucursal",
        value: function baja_sucursal(id_sucursal) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar la sucursal?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this3.eliminar_sucursal(id_sucursal);
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
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
          var _this4 = this;

          var id_cliente = this.activatedRoute.snapshot.paramMap.get('id_cliente');
          this.api_clientes.informacion_cliente(id_cliente).subscribe(function (data) {
            _this4.cliente = data;
            _this4.cliente = _this4.cliente.result;
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "modificar_sucursal",
        value: function modificar_sucursal(id_sucursal) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _modificar_sucursal_modificar_sucursal_page__WEBPACK_IMPORTED_MODULE_8__["ModificarSucursalPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_sucursal': id_sucursal
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this5.actualizar_informacion();
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
        key: "eliminarVisitaAlert",
        value: function eliminarVisitaAlert(visita) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var al;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar la visita?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this6.eliminarVisita(visita);
                        }
                      }]
                    });

                  case 2:
                    al = _context6.sent;
                    al.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "eliminarVisita",
        value: function eliminarVisita(visita) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var load;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingController.create({
                      message: "Eliminando la visita"
                    });

                  case 2:
                    load = _context7.sent;
                    load.present();
                    this.api_clientes.cambiar_estado_visita(visita.id_visita, 'eliminado').then(function (e) {
                      _this7.actualizar_informacion();

                      load.dismiss();

                      _this7.toastController.create({
                        message: "Se elimino correctamente",
                        duration: 2000,
                        color: "success"
                      }).then(function (r) {
                        r.present();
                      });

                      console.log(e);
                    })["catch"](function (error) {
                      load.dismiss();

                      _this7.toastController.create({
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
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "marcarEntregadoAlert",
        value: function marcarEntregadoAlert(visita) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertController.create({
                      header: 'Atención',
                      message: '¿Estas seguro que deseas marcar esta visita como entregada?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel'
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this8.marcarEntregado(visita.id_visita);
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "marcarEntregado",
        value: function marcarEntregado(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this9 = this;

            var load;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadingController.create({
                      message: "Cargando visita"
                    });

                  case 2:
                    load = _context9.sent;
                    load.present();
                    this.api_clientes.cambiar_estado_visita(id, 'entregado').then(function (e) {
                      _this9.actualizar_informacion();

                      load.dismiss();

                      _this9.toastController.create({
                        message: "Se Marco como entregada",
                        duration: 2000,
                        color: "success"
                      }).then(function (r) {
                        r.present();
                      });
                    })["catch"](function (err) {
                      load.dismiss();

                      _this9.toastController.create({
                        message: "Hubo un error al marcar como entregada",
                        duration: 2000,
                        color: "danger"
                      }).then(function (r) {
                        r.present();
                      });

                      console.error(err);
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
      }, {
        type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_9__["ApiVisitasService"]
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


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(223, 223, 223);\n  border: solid black 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvYWx0YS13b3Jrc3RhdGlvbi9EOlxcUmVwb3NpdG9yaW9zXFxmcm9udGVuZF9jcGFfYWRtaW4vc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluaXN0cmFyLWNsaWVudGVzXFx2ZXItY2xpZW50ZVxcdmVyLXN1Y3Vyc2FsXFxhbHRhLXdvcmtzdGF0aW9uXFxhbHRhLXdvcmtzdGF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvYWx0YS13b3Jrc3RhdGlvbi9hbHRhLXdvcmtzdGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItY2xpZW50ZXMvdmVyLWNsaWVudGUvdmVyLXN1Y3Vyc2FsL2FsdGEtd29ya3N0YXRpb24vYWx0YS13b3Jrc3RhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcbn0iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../administrar-servicios/servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");

    var AltaWorkstationPage = /*#__PURE__*/function () {
      function AltaWorkstationPage(api_clientes, api_servicios, navParams, modalCtrl, alertController) {
        _classCallCheck(this, AltaWorkstationPage);

        this.api_clientes = api_clientes;
        this.api_servicios = api_servicios;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.id_sucursal = this.navParams.get('id_sucursal');
        this.equipo_grupo = this.navParams.get('equipo_grupo');
      }

      _createClass(AltaWorkstationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          console.log(this.equipo_grupo);
          this.api_clientes.listado_productosServicio(20).subscribe(function (resp) {
            console.log(resp);
            _this10.productos = resp.result;
          });
          console.log(this.id_sucursal);
          this.api_servicios.mostrar_servicios().subscribe(function (data) {
            _this10.servicios = data;
            _this10.servicios = _this10.servicios.result;
            console.log(_this10.servicios);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "alta_workstation",
        value: function alta_workstation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this11 = this;

            var data, equipos_zona, _alert, _alert2;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    data = null;

                    if (!(this.id_servicio == '20')) {
                      _context10.next = 22;
                      break;
                    }

                    if (!this.id_servicio) {
                      _context10.next = 19;
                      break;
                    }

                    equipos_zona = this.equipo_grupo.equipos.filter(function (equipo) {
                      return equipo.zona == _this11.zona_workstation;
                    });

                    if (!equipos_zona.every(function (equipo) {
                      return equipo.nro_equipo == _this11.nro_workstation;
                    })) {
                      _context10.next = 12;
                      break;
                    }

                    _context10.next = 7;
                    return this.alertController.create({
                      header: 'Error',
                      message: 'Ya existe un equipo con ese numero en la zona.',
                      buttons: ['OK']
                    });

                  case 7:
                    _alert = _context10.sent;
                    _context10.next = 10;
                    return _alert.present();

                  case 10:
                    _context10.next = 17;
                    break;

                  case 12:
                    if (!this.zona_workstation) {
                      this.zona_workstation = this.nombre_workstation;
                    }

                    if (!this.nombre_workstation) {
                      this.nombre_workstation = this.zona_workstation;
                    }

                    this.object = {
                      nombre_equipos: this.nombre_workstation,
                      id_servicio: this.id_servicio,
                      id_sucursal: this.id_sucursal,
                      id_equipo_grupo: this.equipo_grupo.id_equipo_grupo,
                      producto_predeterminado: Number(this.producto_predeterminado),
                      zona: this.zona_workstation,
                      nro_equipo: this.nro_workstation
                    };
                    console.log(this.object);
                    this.api_servicios.alta_workstation(this.object).subscribe(function (resp) {
                      console.log(resp.equipoCreado.insertId);
                      data = {
                        qr: 1,
                        nombre_equipos: _this11.nombre_workstation,
                        id_servicio: _this11.id_servicio,
                        id_equipo: resp.equipoCreado.insertId,
                        id_sucursal: _this11.id_sucursal,
                        id_equipo_grupo: _this11.equipo_grupo.id_equipo_grupo,
                        estado_servicio: 'alta',
                        modificable: 0,
                        producto_predeterminado: _this11.producto_predeterminado
                      };

                      _this11.modalCtrl.dismiss({
                        'dismissed': true,
                        data: data,
                        id: resp.equipoCreado.insertId
                      });
                    }), function (error) {
                      console.log(error);
                    };

                  case 17:
                    _context10.next = 20;
                    break;

                  case 19:
                    this.presentAlert();

                  case 20:
                    _context10.next = 40;
                    break;

                  case 22:
                    if (!this.id_servicio) {
                      _context10.next = 39;
                      break;
                    }

                    equipos_zona = this.equipo_grupo.equipos.filter(function (equipo) {
                      return equipo.zona == _this11.zona_workstation;
                    });

                    if (!equipos_zona.some(function (equipo) {
                      return equipo.nro_equipo == _this11.nro_workstation;
                    })) {
                      _context10.next = 32;
                      break;
                    }

                    _context10.next = 27;
                    return this.alertController.create({
                      header: 'Error',
                      message: 'Ya existe un equipo con ese numero en la zona.',
                      buttons: ['OK']
                    });

                  case 27:
                    _alert2 = _context10.sent;
                    _context10.next = 30;
                    return _alert2.present();

                  case 30:
                    _context10.next = 37;
                    break;

                  case 32:
                    if (!this.zona_workstation) {
                      this.zona_workstation = this.nombre_workstation;
                    }

                    if (!this.nombre_workstation) {
                      this.nombre_workstation = this.zona_workstation;
                    }

                    this.object = {
                      nombre_equipos: this.nombre_workstation,
                      id_servicio: this.id_servicio,
                      id_sucursal: this.id_sucursal,
                      id_equipo_grupo: this.equipo_grupo.id_equipo_grupo,
                      zona: this.zona_workstation,
                      nro_equipo: this.nro_workstation
                    };
                    console.log(this.object); // data = this.object

                    this.api_servicios.alta_workstation(this.object).subscribe(function (resp) {
                      console.log(resp.equipoCreado.insertId);
                      data = {
                        qr: 1,
                        nombre_equipos: _this11.nombre_workstation,
                        id_servicio: _this11.id_servicio,
                        id_equipo: resp.equipoCreado.insertId,
                        id_sucursal: _this11.id_sucursal,
                        id_equipo_grupo: _this11.equipo_grupo.id_equipo_grupo,
                        estado_servicio: 'alta',
                        modificable: 0
                      };

                      _this11.modalCtrl.dismiss({
                        'dismissed': true,
                        data: data,
                        id: resp.equipoCreado.insertId
                      });
                    }), function (error) {
                      console.log(error);
                    };

                  case 37:
                    _context10.next = 40;
                    break;

                  case 39:
                    this.presentAlert();

                  case 40:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      message: 'Para crear la workstation debes seleccionar el servicio que cumple',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return AltaWorkstationPage;
    }();

    AltaWorkstationPage.ctorParameters = function () {
      return [{
        type: _servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ApiClientesService"]
      }, {
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


    __webpack_exports__["default"] = ".planos {\n  width: 98%;\n  height: 98%;\n  padding: 5%;\n}\n\n.equipos {\n  height: 65px;\n  margin-left: 3%;\n}\n\n.grupoequipo {\n  align-items: center;\n  align-self: center;\n  align-content: center;\n  vertical-align: center;\n}\n\nion-label {\n  font-size: 80% !important;\n}\n\n.cardPlanos {\n  width: 100% !important;\n  height: 100% !important;\n}\n\nion-slides {\n  --bullet-background: #000000;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.deletePlano {\n  --background: #3881ff00;\n  --background-activated: #3881ff00;\n  --background-activated-opacity: 1;\n  --background-focused: #3881ff00;\n  --background-focused-opacity: 1;\n  --background-hover: #3881ff00;\n  --background-hover-opacity: 1;\n  --border-color: #3881ff00;\n  --border-radius: 8px;\n  --border-style: solid;\n  --border-width: 8px;\n  --box-shadow: 10px 10px;\n  --color: #3881ff00;\n  --color-activated: #3881ff00;\n  --color-focused: #3881ff00;\n  --color-hover: #3881ff00;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n  --ripple-color: #3881ff00;\n  --transition: background-color 15ms linear;\n}\n\n.printButton {\n  --background-activated: #3881ff7a !important;\n  --background-activated-opacity: 1;\n  --background-focused: #3881ff7a !important;\n  --background-focused-opacity: 1;\n  --background-hover: #3881ff7a !important;\n  --background-hover-opacity: 1;\n  --border-color: #3880ff;\n  --border-radius: 8px;\n  --border-style: solid;\n  --border-width: 1px;\n  --opacity: 1;\n  --ripple-color: #1e1e1e;\n  --transition: background-color 15ms linear;\n}\n\n.printButtonCancel {\n  --background: #ff0800c2 !important;\n  --background-activated: #ff0800 !important;\n  --background-activated-opacity: 1;\n  --background-focused: #ff0800 !important;\n  --background-focused-opacity: 1;\n  --background-hover: #ff0800 !important;\n  --background-hover-opacity: 1;\n  --border-color: #ff0800;\n  --border-radius: 8px;\n  --border-style: solid;\n  --border-width: 1px;\n  --opacity: 1;\n  --ripple-color: #1e1e1e;\n  --transition: background-color 15ms linear;\n}\n\n.loadding {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: var(--ion-color-light);\n  background-color: white;\n  color: white;\n  padding-bottom: 5%;\n}\n\nion-icon {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvRDpcXFJlcG9zaXRvcmlvc1xcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxhZG1pbmlzdHJhci1jbGllbnRlc1xcdmVyLWNsaWVudGVcXHZlci1zdWN1cnNhbFxcdmVyLXN1Y3Vyc2FsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1jbGllbnRlcy92ZXItY2xpZW50ZS92ZXItc3VjdXJzYWwvdmVyLXN1Y3Vyc2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFFSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FBOztBREdBO0VBQ0ksNEJBQUE7QUNBSjs7QURRQTtFQUNJLFlBQUE7QUNMSjs7QURRRTtFQUNFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtBQ0xKOztBRFFFO0VBQ0ksNENBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBQ0xOOztBRE9FO0VBQ0Usa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0FDSko7O0FET0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSko7O0FETUU7RUFDRSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2FkbWluaXN0cmFyLWNsaWVudGVzL3Zlci1jbGllbnRlL3Zlci1zdWN1cnNhbC92ZXItc3VjdXJzYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYW5vc3tcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDk4JTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5lcXVpcG9ze1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi5ncnVwb2VxdWlwb3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAvLyAtLWNvbG9yOiAjMzg4MGZmO1xyXG4gICAgZm9udC1zaXplOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmRQbGFub3Mge1xyXG53aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLy8gLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XHJcbiAgICAvLyAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiAzODgwZmZcclxuICAgIC8vIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlOiAzODgwZmZcclxuICAgIC8vIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiAzODgwZmZcclxuICAgIC8vIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogMzg4MGZmXHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZVBsYW5vIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODFmZjAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODFmZjAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzODgxZmYwMDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzODgxZmYwMDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICMzODgxZmYwMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDhweDtcclxuICAgIC0tYm94LXNoYWRvdzogMTBweCAxMHB4O1xyXG4gICAgLS1jb2xvcjogIzM4ODFmZjAwO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzODgxZmYwMDtcclxuICAgIC0tY29sb3ItZm9jdXNlZDogIzM4ODFmZjAwO1xyXG4gICAgLS1jb2xvci1ob3ZlcjogIzM4ODFmZjAwO1xyXG4gICAgLS1vcGFjaXR5OiAxO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogIzM4ODFmZjAwO1xyXG4gICAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO1xyXG4gIH1cclxuXHJcbiAgLnByaW50QnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODFmZjdhICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzODgxZmY3YSAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzODgxZmY3YSAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxuICAgICAgLS1ib3JkZXItY29sb3I6ICMzODgwZmY7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgIC0tb3BhY2l0eTogMTtcclxuICAgICAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XHJcbiAgICAgIC0tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtcclxuICB9XHJcbiAgLnByaW50QnV0dG9uQ2FuY2Vse1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogI2ZmMDgwMGMyICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmYwODAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmMDgwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmMDgwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmMDgwMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIC0tb3BhY2l0eTogMTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xyXG4gICAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyOyBcclxuICB9XHJcblxyXG4gIC5sb2FkZGluZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSIsIi5wbGFub3Mge1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDk4JTtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5lcXVpcG9zIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5ncnVwb2VxdWlwbyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDgwJSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZFBsYW5vcyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRlbGV0ZVBsYW5vIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzg4MWZmMDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMzODgxZmYwMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzM4ODFmZjAwO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMzODgxZmYwMDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMzg4MWZmMDA7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gIC0tYm94LXNoYWRvdzogMTBweCAxMHB4O1xuICAtLWNvbG9yOiAjMzg4MWZmMDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMzg4MWZmMDA7XG4gIC0tY29sb3ItZm9jdXNlZDogIzM4ODFmZjAwO1xuICAtLWNvbG9yLWhvdmVyOiAjMzg4MWZmMDA7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMzg4MWZmMDA7XG4gIC0tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLnByaW50QnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODFmZjdhICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzODgxZmY3YSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMzODgxZmY3YSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgLS1ib3JkZXItY29sb3I6ICMzODgwZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG4gIC0tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLnByaW50QnV0dG9uQ2FuY2VsIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmYwODAwYzIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmMDgwMCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmYwODAwICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmMDgwMCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgLS1ib3JkZXItY29sb3I6ICNmZjA4MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG4gIC0tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmxvYWRkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuaW9uLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
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


    var _alta_workstation_alta_workstation_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alta-workstation/alta-workstation.page */
    "./src/app/paginas/administrar-clientes/ver-cliente/ver-sucursal/alta-workstation/alta-workstation.page.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var _administrar_servicios_servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../administrar-servicios/servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var src_app_paginas_programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/paginas/programar-visita/servicios/api-visitas.service */
    "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");

    var VerSucursalPage = /*#__PURE__*/function () {
      function VerSucursalPage(navParams, api_sucursales, modalController, imageCompress, loadingController, api_servicios, alertController, api_visitas) {
        _classCallCheck(this, VerSucursalPage);

        this.navParams = navParams;
        this.api_sucursales = api_sucursales;
        this.modalController = modalController;
        this.imageCompress = imageCompress;
        this.loadingController = loadingController;
        this.api_servicios = api_servicios;
        this.alertController = alertController;
        this.api_visitas = api_visitas;
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
        value: function altaWorkstation(equipo_grupo, j) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this12 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.modalController.create({
                      component: _alta_workstation_alta_workstation_page__WEBPACK_IMPORTED_MODULE_4__["AltaWorkstationPage"],
                      cssClass: 'modal-chiquito',
                      componentProps: {
                        'id_sucursal': this.id_sucursal,
                        equipo_grupo: equipo_grupo
                      }
                    });

                  case 2:
                    modal = _context12.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this12.actualizar_informacion(false); // console.log(data)
                      // this.grupoWorkStation[j].equipos.push(data.data)

                    });
                    _context12.next = 6;
                    return modal.present();

                  case 6:
                    return _context12.abrupt("return", _context12.sent);

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "altaGrupoWorkstation",
        value: function altaGrupoWorkstation(nombre) {
          var _this13 = this;

          var body = {
            nombre_equipo_grupo: nombre,
            id_sucursal: this.id_sucursal
          };
          this.api_servicios.alta_Grupo_workstation(body).subscribe(function (resp) {
            _this13.actualizar_informacion(false);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "alertAltaGrupoWorkstation",
        value: function alertAltaGrupoWorkstation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this14 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
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
                          _this14.altaGrupoWorkstation(input.nombre);

                          _this14.actualizar_informacion(true);
                        }
                      }]
                    });

                  case 2:
                    alert = _context13.sent;
                    _context13.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "borrar_equipo",
        value: function borrar_equipo(equipo, j, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this15 = this;

            var alerta;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.alertController.create({
                      header: 'Eliminar ' + equipo.nombre_equipo,
                      message: 'Estas seguro que deseas eliminar ' + equipo.nombre_equipo,
                      buttons: ['Cancelar', {
                        text: 'Borrar',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                            var _this16 = this;

                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                              while (1) {
                                switch (_context14.prev = _context14.next) {
                                  case 0:
                                    _context14.next = 2;
                                    return this.loadingController.create({
                                      message: 'Eliminado, Por favor espere.'
                                    });

                                  case 2:
                                    this.loading = _context14.sent;
                                    this.loading.present(); // console.warn(this.grupoWorkStation[j].equipos[i])
                                    // this.loadingController.dismiss()

                                    this.api_sucursales.borrar_equipo(equipo.id_equipo).subscribe(function (data) {
                                      // console.log(data, id_equipo)
                                      // this.actualizar_informacion(false);
                                      _this16.grupoWorkStation[j].equipos.splice(i, 1);

                                      _this16.loadingController.dismiss();
                                    }), function (error) {
                                      _this16.loadingController.dismiss();

                                      alert('Ocurrio un error al eliminar, por favor intente nuevamente');
                                      console.log(error);
                                    };

                                  case 5:
                                  case "end":
                                    return _context14.stop();
                                }
                              }
                            }, _callee14, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alerta = _context15.sent;
                    _context15.next = 5;
                    return alerta.present();

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "borrar_equipo_grupo",
        value: function borrar_equipo_grupo(id, i) {
          var _this17 = this;

          this.api_sucursales.eliminar_Grupo_workstation(id).subscribe(function (data) {
            // console.log(data, id)
            // this.actualizar_informacion();
            _this17.grupoWorkStation.splice(i, 1);
          }), function (error) {
            console.log(error);
          }; // console.log(i)
        }
      }, {
        key: "prueba",
        value: function prueba(algo) {
          console.log(algo);
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion(loading) {
          var _this18 = this;

          this.api_sucursales.listado_productosServicio(20).subscribe(function (resp) {
            console.log(resp);
            _this18.productos = resp.result;
          });
          this.loadingEquipos = true;
          this.api_sucursales.informacion_sucursal(this.id_sucursal).subscribe(function (data) {
            _this18.sucursal = data;
            _this18.sucursal = _this18.sucursal.result;
            console.warn(_this18.sucursal);

            for (var index = 0; index < _this18.sucursal.planos.length; index++) {
              // this.sucursal.planos[index].url_imagen_plano = 1
              // this.sucursal[index] = this.sucursal[index].url_imagen_plano
              Object.defineProperty(_this18.sucursal.planos[index], 'name', {
                value: _this18.sucursal.planos[index].url_imagen_plano.slice(27)
              });
            }

            console.log('sucursal: ', _this18.sucursal);
            console.log('sucursal: ', _this18.sucursal);

            if (loading) {
              _this18.loadingController.dismiss();
            }
          }), function (error) {
            if (loading) {
              _this18.loadingController.dismiss();
            }

            console.log(error);
          };
          this.api_sucursales.listado_grupoWorkstations(this.id_sucursal).subscribe(function (data) {
            console.log('Grupo1', data.result);
            var flag = 0;
            var array = [];
            var i = 0;
            var first = true;

            if (data.result != undefined) {
              data.result.forEach(function (element) {
                if (element.zona == element.nombre_equipo) {
                  element.nombre = element.nombre_equipo + ' - ' + element.nro_equipo;
                } else {
                  element.nombre = element.nombre_equipo + ' - ' + element.zona + ' - ' + element.nro_equipo;
                }

                if (element.id_equipo_grupo == flag) {
                  // console.log(element.id_equipo_grupo, ' ' ,flag)
                  _this18.showDeleteQr[i].push({
                    show: false,
                    count: 0
                  });

                  if (element.producto_predeterminado) {
                    var product = _this18.productos.find(function (producto) {
                      return producto.id_producto == element.producto_predeterminado;
                    });

                    element.producto_predeterminado_nombre = product.nombre_producto + ' - ' + product.tipo_producto;
                  }

                  array[i].equipos.push({
                    id_equipo: element.id_equipo,
                    id_servicio: element.id_servicio,
                    id_sucursal: element.id_sucursal,
                    nombre_equipo: element.nombre_equipo,
                    codigo_qr_equipo: element.codigo_qr_equipo,
                    estado_servicio: element.estado_servicio,
                    nombre_servicio: element.nombre_servicio,
                    producto_predeterminado: element.producto_predeterminado,
                    producto_predeterminado_nombre: element.producto_predeterminado_nombre,
                    zona: element.zona,
                    nro_equipo: element.nro_equipo,
                    nombre: element.nombre
                  });
                  first = false;
                } else {
                  if (!first) {
                    i++;
                  }

                  flag = element.id_equipo_grupo;
                  array.push({
                    nombre_equipo_grupo: element.nombre_equipo_grupo,
                    id_equipo_grupo: element.id_equipo_grupo,
                    equipos: [],
                    plano: _this18.sucursal.planos.find(function (plano) {
                      return plano.id_plano == element.id_plano;
                    })
                  });

                  _this18.showDeleteQr.push([]);

                  if (element.producto_predeterminado) {
                    var _product = _this18.productos.find(function (producto) {
                      return producto.id_producto == element.producto_predeterminado;
                    });

                    element.producto_predeterminado_nombre = _product.nombre_producto + ' - ' + _product.tipo_producto;
                  }

                  array[i].equipos.push({
                    id_equipo: element.id_equipo,
                    id_servicio: element.id_servicio,
                    id_sucursal: element.id_sucursal,
                    nombre_equipo: element.nombre_equipo,
                    codigo_qr_equipo: element.codigo_qr_equipo,
                    estado_servicio: element.estado_servicio,
                    nombre_servicio: element.nombre_servicio,
                    producto_predeterminado: element.producto_predeterminado,
                    producto_predeterminado_nombre: element.producto_predeterminado_nombre,
                    zona: element.zona,
                    nro_equipo: element.nro_equipo,
                    nombre: element.nombre
                  });

                  _this18.showDeleteQr[i].push({
                    show: false,
                    count: 0
                  });

                  first = false;
                }
              });
              console.log(_this18.showDeleteQr);
              _this18.grupoWorkStation = array;
              console.log('grupo2: ', _this18.grupoWorkStation);

              var _iterator = _createForOfIteratorHelper(_this18.grupoWorkStation),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var grupoEquipo = _step.value;
                  grupoEquipo.equipos.sort(function (a, b) {
                    var aNoNumber = a.nombre.split(' - ');
                    aNoNumber.pop();
                    aNoNumber = aNoNumber.join(' - ');
                    var bNoNumber = b.nombre.split(' - ');
                    bNoNumber.pop();
                    bNoNumber = bNoNumber.join(' - ');

                    if (aNoNumber > bNoNumber) {
                      return 1;
                    }

                    if (aNoNumber < bNoNumber) {
                      return -1;
                    }

                    if (bNoNumber == aNoNumber) {
                      return a.nro_equipo - b.nro_equipo;
                    } // a must be equal to b


                    return 0;
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            _this18.loadingEquipos = false;
          }); // this.api_sucursales.listado_workstations(this.id_sucursal).subscribe(data => {
          //   console.log(data)
          //   this.workstations = data;
          //   this.workstations = this.workstations.result;
          //   console.log(this.workstations)
          // }), (error => {
          //   console.log(error)
          // })
        }
      }, {
        key: "editName",
        value: function editName(equipo, grupoEquipo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this19 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.alertController.create({
                      header: 'Modificar',
                      inputs: [{
                        type: 'textarea',
                        value: equipo.nombre_equipo,
                        placeholder: 'Nombre'
                      }, {
                        type: 'textarea',
                        value: equipo.zona,
                        placeholder: 'Zona'
                      }, {
                        type: 'number',
                        value: equipo.nro_equipo,
                        placeholder: 'Numero'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel'
                      }, {
                        text: 'Guardar',
                        handler: function handler(data) {
                          console.log(data);

                          _this19.loadingController.create({
                            message: "Guardando Cambios"
                          }).then(function (loader) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                              var newEquipo, _alert3;

                              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                                while (1) {
                                  switch (_context16.prev = _context16.next) {
                                    case 0:
                                      loader.present();
                                      newEquipo = JSON.parse(JSON.stringify(equipo));
                                      newEquipo.nombre_equipo = data[0];
                                      newEquipo.zona = data[1];
                                      newEquipo.nro_equipo = data[2];
                                      console.log("EQUIPO", grupoEquipo);

                                      if (!grupoEquipo.equipos.some(function (equip) {
                                        return equip.nro_equipo == newEquipo.nro_equipo && equip.zona == newEquipo.zona;
                                      })) {
                                        _context16.next = 15;
                                        break;
                                      }

                                      _context16.next = 9;
                                      return this.alertController.create({
                                        header: 'Error',
                                        message: 'Ya existe un equipo con ese numero en la zona.',
                                        buttons: ['OK']
                                      });

                                    case 9:
                                      _alert3 = _context16.sent;
                                      _context16.next = 12;
                                      return _alert3.present();

                                    case 12:
                                      loader.dismiss();
                                      _context16.next = 16;
                                      break;

                                    case 15:
                                      this.api_visitas.actualizar_equipo(newEquipo).then(function (resp) {
                                        loader.dismiss();
                                        console.log(resp);
                                      })["catch"](function (err) {
                                        console.log(err);
                                        loader.dismiss();
                                      });

                                    case 16:
                                    case "end":
                                      return _context16.stop();
                                  }
                                }
                              }, _callee16, this);
                            }));
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context17.sent;
                    _context17.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this20 = this;

            var loader, err, index, formData;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.loadingController.create({
                      message: "Subiendo Archivos"
                    });

                  case 2:
                    loader = _context18.sent;
                    loader.present();
                    err = 0;
                    this.disabled = true;

                    for (index = 0; index < files.length; index++) {
                      formData = new FormData();
                      formData.append('file', files[index], files[index].name);
                      formData.append('id_sucursal', this.sucursal.sucursal[0].id_sucursal); // {id_sucursal:this.sucursal.sucursal[0].id_sucursal,

                      this.api_sucursales.upload('/planos/crear', formData).then(function (resp) {
                        console.log(resp);
                        _this20.sucursal.planos = [];

                        _this20.actualizar_informacion(true);
                      })["catch"](function (error) {
                        _this20.loadingController.dismiss();

                        console.log('Error al subir el plano ', error);
                        alert('El plano no se subio');
                      });
                    }

                    this.disabled = false; // return err

                  case 8:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this21 = this;

            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    console.log(id_plano);
                    _context19.next = 3;
                    return this.loadingController.create({
                      message: 'Eliminado plano, Por favor espere.'
                    });

                  case 3:
                    this.loading = _context19.sent;
                    _context19.next = 6;
                    return this.loading.present();

                  case 6:
                    this.api_sucursales.eliminar_plano(id_plano).subscribe(function (resp) {
                      _this21.api_sucursales.informacion_sucursal(_this21.id_sucursal).subscribe(function (data) {
                        _this21.sucursal = data;
                        _this21.sucursal = _this21.sucursal.result;

                        for (var index = 0; index < _this21.sucursal.planos.length; index++) {
                          // this.sucursal.planos[index].url_imagen_plano = 1
                          // this.sucursal[index] = this.sucursal[index].url_imagen_plano
                          Object.defineProperty(_this21.sucursal.planos[index], 'name', {
                            value: _this21.sucursal.planos[index].url_imagen_plano.slice(27)
                          });
                        }

                        console.log('sucursal: ', _this21.sucursal);

                        _this21.loadingController.dismiss();
                      }), function (error) {
                        _this21.loadingController.dismiss();

                        _this21.modalController.dismiss();

                        console.log(error);
                      };
                    }, function (error) {
                      _this21.loading.dismiss();

                      console.log('Error al borrar el plano ', error);

                      _this21.loadingController.dismiss();

                      alert('Ocurrio un error');
                    });

                  case 7:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "alert_eliminar_plano",
        value: function alert_eliminar_plano(id_plano) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this22 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar el plano?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this22.eliminar_plano(id_plano);
                        }
                      }]
                    });

                  case 2:
                    alert = _context20.sent;
                    _context20.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
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
          console.warn($event); // window.open('http://157.230.90.222:3000/getZip')
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
          link.href = "http://157.230.90.222:3000/getfile/sucursales/" + this.sucursal.sucursal[0].id_sucursal;
          link.click();
        }
      }, {
        key: "descargarQrEquipo",
        value: function descargarQrEquipo(equipo) {
          // console.warn(equipo)
          // console.warn(equipo.id_equipo)
          var link = document.createElement("a");
          link.download = equipo.id_equipo + ".png";
          link.href = "http://157.230.90.222:3000/getfile/equipos/" + equipo.id_equipo;
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
          link.href = "http://157.230.90.222:3000/getZip?type=equipos&name=" + grupoEquipo.nombre_equipo_grupo + "&data=" + ids;
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
          link.href = "http://157.230.90.222:3000/getZip?type=all&name=" + this.sucursal.sucursal[0].razon_social_sucursal + "&data=" + ids;
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
          link.href = "http://157.230.90.222:3000/getZip?type=equipos&name=equipos_" + this.sucursal.sucursal[0].razon_social_sucursal + "&data=" + ids;
          link.click();
        }
      }, {
        key: "elegirProducto",
        value: function elegirProducto(equipo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this23 = this;

            var input, _iterator2, _step2, producto, alert;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    input = [];
                    _iterator2 = _createForOfIteratorHelper(this.productos);

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        producto = _step2.value;
                        input.push({
                          label: producto.nombre_producto + ' - ' + producto.tipo_producto,
                          value: producto.id_producto,
                          type: "radio"
                        });
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    input.push({
                      label: 'Sin Producto',
                      value: null,
                      type: "radio"
                    });
                    console.log(input);
                    _context21.next = 7;
                    return this.alertController.create({
                      subHeader: equipo.nombre_equipo,
                      header: 'Producto predeterminado',
                      inputs: input,
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary'
                      }, {
                        text: 'Aceptar',
                        handler: function handler(data) {
                          equipo.producto_predeterminado = data;
                          equipo.estado_servicio = undefined;
                          equipo.modificable = undefined;
                          equipo.nombre_equipo_grupo = undefined;
                          equipo.nombre_servicio = undefined;
                          equipo.producto = undefined;
                          equipo.qr = undefined;

                          _this23.api_visitas.actualizar_equipo(equipo).then(function (resp) {
                            console.log(resp);
                            var aux;
                            aux = resp;
                            aux = aux.equipoCreado.retorno;

                            if (aux.producto_predeterminado) {
                              equipo.producto_predeterminado = _this23.productos.find(function (producto) {
                                return producto.id_producto == aux.producto_predeterminado;
                              }).id_producto;
                              equipo.producto_predeterminado_nombre = _this23.productos.find(function (producto) {
                                return producto.id_producto == aux.producto_predeterminado;
                              }).nombre_producto + ' - ' + _this23.productos.find(function (producto) {
                                return producto.id_producto == aux.producto_predeterminado;
                              }).tipo_producto;
                            } else {
                              equipo.producto_predeterminado = null;
                              equipo.producto_predeterminado_nombre = null;
                            } // this.actualizar_informacion(false);

                          })["catch"](function (err) {
                            console.error(err);
                          });
                        }
                      }]
                    });

                  case 7:
                    alert = _context21.sent;
                    _context21.next = 10;
                    return alert.present();

                  case 10:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "elegirPlano",
        value: function elegirPlano(grupoEquipo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this24 = this;

            var input, _iterator3, _step3, plano, alert;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    input = [];
                    _iterator3 = _createForOfIteratorHelper(this.sucursal.planos);

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        plano = _step3.value;
                        input.push({
                          label: plano.name,
                          value: plano.id_plano,
                          type: "radio"
                        });
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }

                    input.push({
                      label: 'Sin Plano',
                      value: null,
                      type: "radio"
                    });
                    console.log(input);
                    _context22.next = 7;
                    return this.alertController.create({
                      subHeader: grupoEquipo.nombre_equipo_grupo,
                      header: 'Elegir plano',
                      inputs: input,
                      cssClass: 'wide-alert',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary'
                      }, {
                        text: 'Aceptar',
                        handler: function handler(data) {
                          grupoEquipo.id_plano = data;

                          _this24.api_visitas.setPlano(grupoEquipo).subscribe(function (resp) {
                            console.log(resp);

                            _this24.actualizar_informacion(false);
                          });
                        }
                      }]
                    });

                  case 7:
                    alert = _context22.sent;
                    _context22.next = 10;
                    return alert.present();

                  case 10:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "cambiarProductoSector",
        value: function cambiarProductoSector(sector) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var _this25 = this;

            var input, _iterator4, _step4, producto, alert;

            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    console.log(sector);
                    input = [];
                    _iterator4 = _createForOfIteratorHelper(this.productos);

                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        producto = _step4.value;
                        input.push({
                          label: producto.nombre_producto + ' - ' + producto.tipo_producto,
                          value: producto.id_producto,
                          type: "radio"
                        });
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }

                    input.push({
                      label: 'Sin Producto',
                      value: null,
                      type: "radio"
                    });
                    _context23.next = 7;
                    return this.alertController.create({
                      subHeader: sector.nombre_equipo_grupo,
                      header: 'Producto predeterminado',
                      inputs: input,
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary'
                      }, {
                        text: 'Aceptar',
                        handler: function handler(data) {
                          for (var index = 0; index < sector.equipos.length; index++) {
                            console.log(index);
                            var equipo = sector.equipos[index];
                            equipo.producto_predeterminado = data;
                            equipo.estado_servicio = undefined;
                            equipo.modificable = undefined;
                            equipo.nombre_equipo_grupo = undefined;
                            equipo.nombre_servicio = undefined;
                            equipo.producto = undefined;
                            equipo.qr = undefined;
                            console.log(equipo);

                            _this25.api_visitas.actualizar_equipo(equipo).then(function (resp) {
                              console.log(resp);
                              var aux;
                              aux = resp;
                              aux = aux.equipoCreado.retorno;

                              if (aux.producto_predeterminado) {
                                equipo.producto_predeterminado = _this25.productos.find(function (producto) {
                                  return producto.id_producto == aux.producto_predeterminado;
                                }).id_producto;
                                equipo.producto_predeterminado_nombre = _this25.productos.find(function (producto) {
                                  return producto.id_producto == aux.producto_predeterminado;
                                }).nombre_producto + ' - ' + _this25.productos.find(function (producto) {
                                  return producto.id_producto == aux.producto_predeterminado;
                                }).tipo_producto;

                                _this25.actualizar_informacion(false);
                              } else {
                                equipo.producto_predeterminado = null;
                                equipo.producto_predeterminado_nombre = null;

                                _this25.actualizar_informacion(false);
                              }
                            })["catch"](function (err) {
                              console.error(err);
                            });
                          }
                        }
                      }]
                    });

                  case 7:
                    alert = _context23.sent;
                    _context23.next = 10;
                    return alert.present();

                  case 10:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
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
      }, {
        type: src_app_paginas_programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_7__["ApiVisitasService"]
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
  }
}]);
//# sourceMappingURL=paginas-administrar-clientes-ver-cliente-ver-cliente-module-es5.js.map