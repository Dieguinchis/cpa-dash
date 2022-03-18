function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-administrar-servicios-administrar-servicios-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/administrar-servicios.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/administrar-servicios.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarServiciosAdministrarServiciosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  \r\n  <div style=\"margin-left: 30%; width: 40%;\">\r\n    <ion-card style=\"text-align: center;\">\r\n      <ion-item lines=\"full\" class=\"titulo_lista_servicios\" style=\"margin-bottom: 20px;\">\r\n        <ion-label style=\"text-align: center;\"><b>Servicios</b></ion-label>  \r\n        <ion-button (click)=\"crear_servicio()\">\r\n          Crear servicio\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" *ngFor=\"let servicio of servicios\" class=\"lista_servicios\">\r\n        <ion-label style=\"text-align: left;\">\r\n          <b>{{servicio.nombre_servicio}}</b>\r\n        </ion-label> \r\n        <ion-buttons>\r\n          <ion-icon style=\"margin-right: 10px;\" *ngIf=\"servicio.modificable == 1\" name=\"trash-outline\" color=\"danger\" (click)=\"borrar_servicio(servicio.id_servicio)\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-buttons>\r\n          <ion-icon name=\"create-outline\" style=\"margin-right: 10px;\" (click)=\"modificar_servicio(servicio.id_servicio)\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-buttons >\r\n          <ion-icon name=\"enter-outline\" *ngIf=\"servicio.producto == 1\" (click)=\"ver_servicio(servicio.id_servicio)\"></ion-icon>\r\n        </ion-buttons>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarServiciosCrearServicioCrearServicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>Crear un nuevo servicio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"background-color: white !important;\">\r\n  <div>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">Nombre del servicio: </ion-label>\r\n      <ion-input [(ngModel)]=\"servicio.nombreDelServicio\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Requiere QR?</ion-label>\r\n      <ion-select [(ngModel)]=\"servicio.requiereQR\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Contiene productos?</ion-label>\r\n      <ion-select [(ngModel)]=\"servicio.producto\" (ionChange)=\"producto_asociado()\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <div *ngFor=\"let campo of formulario; let i = index\" style=\"background-color: white;\">\r\n      <ion-item lines=\"full\">\r\n        <ion-grid style=\"background-color: white;\">\r\n          <ion-row style=\"background-color: white;\">\r\n            <ion-item lines=\"none\" style=\"background-color: white;\">\r\n              <ion-col style=\"background-color: white;\">\r\n                <ion-label>Ingrese titulo del campo: </ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-input [disabled]=\"campo.nombreCampo == 'Tipo de producto'\" [(ngModel)]=\"campo.nombreCampo\"></ion-input>\r\n              </ion-col>\r\n            </ion-item>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div *ngIf=\"campo.nombreCampo != 'Tipo de producto'\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  Seleccione tipo de campo\r\n                </ion-label>\r\n                <ion-select [(ngModel)]=\"campo.tipoCampo\">\r\n                  <ion-select-option value=\"input\">Escritura</ion-select-option>\r\n                  <ion-select-option value=\"select\">Seleccionable</ion-select-option>\r\n                  <ion-select-option value=\"multiple\">Seleccion multiple</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n          </ion-row>\r\n          <div *ngIf=\"campo.tipoCampo == 'select' || campo.tipoCampo == 'multiple'\">\r\n            <ion-item lines=\"none\" *ngFor=\"let opcion of campo.opciones; let j = index\">\r\n              <ion-label>Ingrese la opcion: </ion-label>\r\n              <div style=\"margin-left: 5px\">\r\n                <ion-input [(ngModel)]=\"campo.opciones[j].opcion\"></ion-input>  \r\n              </div>\r\n            </ion-item>  \r\n            <ion-item lines=\"none\">\r\n              <!-- <ion-label style=\"text-align: center;color: black;\"></ion-label> -->\r\n              <ion-button (click)=\"agregar_opcion_select(i)\">Agregar opcion\r\n                <ion-icon name=\"add-outline\"></ion-icon>\r\n              </ion-button>  \r\n            </ion-item>\r\n          </div>\r\n        </ion-grid>  \r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label>\r\n        Agregar campo\r\n      </ion-label>\r\n      <ion-button (click)=\"agregar_campo_formulario()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <div style=\"text-align: center; margin-top: 20px;\">\r\n    <ion-button (click)=\"crear_servicio()\">Listo</ion-button>\r\n  </div>\r\n\r\n  <!-- <div style=\"margin-top: 15px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div> -->\r\n\r\n\r\n</ion-content>  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarServiciosModificarServicioModificarServicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>Modiciar servicio: {{servicio.nombreDelServicio}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <!-- <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">Nombre del servicio: </ion-label>\r\n      <ion-input [disabled]=\"servicio.modificable == 0\" [(ngModel)]=\"servicio.nombreDelServicio\"></ion-input>\r\n    </ion-item> -->\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Requiere QR?</ion-label>\r\n      <ion-select [(ngModel)]=\"servicio.requiereQR\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Contiene productos?</ion-label>\r\n      <ion-select [disabled]=\"servicio.modificable == 0\" [(ngModel)]=\"servicio.tieneProducto\" (ionChange)=\"producto_asociado()\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <div *ngFor=\"let campo of campos; let i = index\" style=\"background-color: white;\">\r\n      <ion-item lines=\"full\">\r\n        <ion-grid style=\"background-color: white;\">\r\n          <ion-row style=\"background-color: white;\">\r\n            <ion-item lines=\"none\">\r\n              <ion-col>\r\n                <ion-label>Ingrese titulo del campo: </ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-input [disabled]=\"campo.nombreCampo == 'Tipo de producto' || servicio.modificable == 0\" [(ngModel)]=\"campo.nombreCampo\"></ion-input>\r\n              </ion-col>\r\n            </ion-item>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div *ngIf=\"campo.nombreCampo != 'Tipo de producto'\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  Seleccione tipo de campo\r\n                </ion-label>\r\n                <ion-select [disabled]=\"servicio.modificable == 0\" [(ngModel)]=\"campo.tipoCampo\">\r\n                  <ion-select-option value=\"input\">Escritura</ion-select-option>\r\n                  <ion-select-option value=\"select\">Seleccionable</ion-select-option>\r\n                  <ion-select-option value=\"multiple\">Seleccion multiple</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n          </ion-row>\r\n          <div *ngIf=\"campo.tipoCampo == 'select' || campo.tipoCampo == 'multiple'\">\r\n            <ion-item lines=\"none\" *ngFor=\"let opcion of campo.opt; let j = index\">\r\n              <ion-label>Ingrese la opcion: </ion-label>\r\n              <!-- <div style=\"margin-left: 5px\"> -->\r\n                <ion-input [(ngModel)]=\"opcion.name\"></ion-input>  \r\n              <!-- </div> -->\r\n              <ion-icon name=\"trash-outline\" (click)=\"quitar_opcion_select(i,j,opcion.opcionId)\"></ion-icon>\r\n            </ion-item>  \r\n            <ion-item lines=\"none\">\r\n              <!-- <ion-label style=\"text-align: center;\">\r\n              </ion-label> -->\r\n              <ion-button (click)=\"agregar_opcion_select(i)\">\r\n                Agregar opcion\r\n                <ion-icon name=\"add-outline\"></ion-icon>\r\n              </ion-button>  \r\n            </ion-item>\r\n          </div>\r\n        </ion-grid>  \r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label>\r\n        Agregar campo\r\n      </ion-label>\r\n      <ion-button (click)=\"agregar_campo_formulario()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-item disabled *ngIf=\"servicio.modificable == 0\" lines=\"full\">\r\n        <p>Al ser un servicio con un diseño predeterminado recuerde que si agrega nuevos campos no se veran automaticamente reflejados en el pdf</p> \r\n    </ion-item>\r\n  </div>\r\n\r\n  <div  *ngIf=\"servicio.modificable == 0\" style=\"text-align: center; margin-top: 20px;\">\r\n    <ion-button (click)=\"modificar_servicio()\">Modificar</ion-button>\r\n  </div>\r\n  <div  *ngIf=\"servicio.modificable == 1\" style=\"text-align: center; margin-top: 20px;\">\r\n    <ion-button (click)=\"crear_servicio()\">Modificar</ion-button>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 15px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n\r\n</ion-content>  \r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarServiciosVerServicioCrearProductoCrearProductoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title style=\"text-align: center;\">Alta de producto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      Nombre del producto:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"nombre_producto\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Fecha de vencimiento:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"fecha_vencimiento\" type=\"date\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Lote:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"lote\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\" *ngIf=\"servicio\">\r\n    <ion-label class=\"titulos\">\r\n      Tipo de producto:\r\n    </ion-label>\r\n    <ion-select [(ngModel)]=\"tipo_producto\" (ionChange)=\"select_tipo_producto()\">\r\n      <ion-select-option *ngFor=\"let opcion of servicio.formulario[indexTipoProducto].opciones\" [value]=\"opcion\">{{opcion.name}}</ion-select-option>\r\n      <ion-select-option value=\"nuevo\">Nuevo tipo</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center; margin-top: 25px;\">\r\n    <ion-button (click)=\"cargar_producto()\">Cargar</ion-button>   \r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasAdministrarServiciosVerServicioVerServicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title *ngIf=\"servicio\" style=\"text-align: center;\">{{servicio.nombreDelServicio}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"servicio\">\r\n    <div *ngIf=\"servicio.tieneProducto\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label style=\"text-align: center;\"><b>Productos</b></ion-label>\r\n        <ion-button (click)=\"altaProducto(id_servicio)\">Agregar producto</ion-button>\r\n      </ion-item>\r\n      <ion-item class=\"titulos\" lines=\"full\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                <b>Nombre del producto</b>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                <b>Fecha de vencimiento</b>\r\n              </ion-label>  \r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                <b>Lote</b>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-label>\r\n                <b>Tipo de producto</b>\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <div *ngFor=\"let producto of servicio.listaProductos\">\r\n        <ion-item lines=\"full\">\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{producto.nombre_producto}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{producto.fecha_vencimiento}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{producto.lote}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-label>\r\n                {{producto.tipo_producto}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-icon name=\"create-outline\" (click)=\"modificarProducto(producto)\"></ion-icon>\r\n              <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-right: 15px\" (click)=\"eliminar_producto(producto.id_producto)\"></ion-icon>\r\n            </ion-col>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/administrar-servicios-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/administrar-servicios-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: AdministrarServiciosPageRoutingModule */

  /***/
  function srcAppPaginasAdministrarServiciosAdministrarServiciosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarServiciosPageRoutingModule", function () {
      return AdministrarServiciosPageRoutingModule;
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


    var _administrar_servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administrar-servicios.page */
    "./src/app/paginas/administrar-servicios/administrar-servicios.page.ts");

    var routes = [{
      path: '',
      component: _administrar_servicios_page__WEBPACK_IMPORTED_MODULE_3__["AdministrarServiciosPage"]
    }, {
      path: 'crear-servicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | crear-servicio-crear-servicio-module */
        "crear-servicio-crear-servicio-module").then(__webpack_require__.bind(null,
        /*! ./crear-servicio/crear-servicio.module */
        "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.module.ts")).then(function (m) {
          return m.CrearServicioPageModule;
        });
      }
    }, {
      path: 'ver-servicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ver-servicio-ver-servicio-module */
        "ver-servicio-ver-servicio-module").then(__webpack_require__.bind(null,
        /*! ./ver-servicio/ver-servicio.module */
        "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.module.ts")).then(function (m) {
          return m.VerServicioPageModule;
        });
      }
    }, {
      path: 'modificar-servicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modificar-servicio-modificar-servicio-module */
        "modificar-servicio-modificar-servicio-module").then(__webpack_require__.bind(null,
        /*! ./modificar-servicio/modificar-servicio.module */
        "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.module.ts")).then(function (m) {
          return m.ModificarServicioPageModule;
        });
      }
    }];

    var AdministrarServiciosPageRoutingModule = function AdministrarServiciosPageRoutingModule() {
      _classCallCheck(this, AdministrarServiciosPageRoutingModule);
    };

    AdministrarServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdministrarServiciosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/administrar-servicios.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/administrar-servicios.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: AdministrarServiciosPageModule */

  /***/
  function srcAppPaginasAdministrarServiciosAdministrarServiciosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarServiciosPageModule", function () {
      return AdministrarServiciosPageModule;
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


    var _administrar_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./administrar-servicios-routing.module */
    "./src/app/paginas/administrar-servicios/administrar-servicios-routing.module.ts");
    /* harmony import */


    var _administrar_servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./administrar-servicios.page */
    "./src/app/paginas/administrar-servicios/administrar-servicios.page.ts");

    var AdministrarServiciosPageModule = function AdministrarServiciosPageModule() {
      _classCallCheck(this, AdministrarServiciosPageModule);
    };

    AdministrarServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _administrar_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrarServiciosPageRoutingModule"]],
      declarations: [_administrar_servicios_page__WEBPACK_IMPORTED_MODULE_6__["AdministrarServiciosPage"]]
    })], AdministrarServiciosPageModule);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/administrar-servicios.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/administrar-servicios.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarServiciosAdministrarServiciosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lista_servicios {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.boton_nuevo_servicio {\n  --background: transparent;\n}\n\nion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MvRDpcXFJlcG9zaXRvcmlvc1xcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxhZG1pbmlzdHJhci1zZXJ2aWNpb3NcXGFkbWluaXN0cmFyLXNlcnZpY2lvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL2FkbWluaXN0cmFyLXNlcnZpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLQTtFQUNJLHlCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2FkbWluaXN0cmFyLXNlcnZpY2lvcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubGlzdGFfc2VydmljaW9ze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmJvdG9uX251ZXZvX3NlcnZpY2lve1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIiwiLmxpc3RhX3NlcnZpY2lvcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYm90b25fbnVldm9fc2VydmljaW8ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/administrar-servicios.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/administrar-servicios.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdministrarServiciosPage */

  /***/
  function srcAppPaginasAdministrarServiciosAdministrarServiciosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrarServiciosPage", function () {
      return AdministrarServiciosPage;
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


    var _crear_servicio_crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crear-servicio/crear-servicio.page */
    "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts");
    /* harmony import */


    var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var _ver_servicio_ver_servicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ver-servicio/ver-servicio.page */
    "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.ts");
    /* harmony import */


    var _modificar_servicio_modificar_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modificar-servicio/modificar-servicio.page */
    "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.ts");

    var AdministrarServiciosPage = /*#__PURE__*/function () {
      function AdministrarServiciosPage(modalController, api, alertController) {
        _classCallCheck(this, AdministrarServiciosPage);

        this.modalController = modalController;
        this.api = api;
        this.alertController = alertController;
      }

      _createClass(AdministrarServiciosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion();
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          var _this = this;

          this.api.mostrar_servicios().subscribe(function (data) {
            _this.servicios = data;
            _this.servicios = _this.servicios.result;
            console.log(_this.servicios);
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "crear_servicio",
        value: function crear_servicio() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _crear_servicio_crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__["CrearServicioPage"],
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
        key: "ver_servicio",
        value: function ver_servicio(id_servicio) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _ver_servicio_ver_servicio_page__WEBPACK_IMPORTED_MODULE_5__["VerServicioPage"],
                      cssClass: 'modal_grande',
                      componentProps: {
                        'id_servicio': id_servicio
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
        key: "borrar_servicio",
        value: function borrar_servicio(id_servicio) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar el servicio?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this2.eliminar_servicio(id_servicio);
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
        key: "eliminar_servicio",
        value: function eliminar_servicio(id_servicio) {
          var _this3 = this;

          this.api.baja_servicio(id_servicio).subscribe(function (data) {
            console.log(data);

            _this3.actualizar_informacion();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "modificar_servicio",
        value: function modificar_servicio(id_servicio) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _modificar_servicio_modificar_servicio_page__WEBPACK_IMPORTED_MODULE_6__["ModificarServicioPage"],
                      cssClass: 'modal_grande',
                      componentProps: {
                        'id_servicio': id_servicio
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return AdministrarServiciosPage;
    }();

    AdministrarServiciosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    AdministrarServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-administrar-servicios',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./administrar-servicios.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/administrar-servicios.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./administrar-servicios.page.scss */
      "./src/app/paginas/administrar-servicios/administrar-servicios.page.scss"))["default"]]
    })], AdministrarServiciosPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarServiciosCrearServicioCrearServicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagen_empresa {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MvY3JlYXItc2VydmljaW8vRDpcXFJlcG9zaXRvcmlvc1xcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxhZG1pbmlzdHJhci1zZXJ2aWNpb3NcXGNyZWFyLXNlcnZpY2lvXFxjcmVhci1zZXJ2aWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL2NyZWFyLXNlcnZpY2lvL2NyZWFyLXNlcnZpY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL2NyZWFyLXNlcnZpY2lvL2NyZWFyLXNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5fZW1wcmVzYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLmltYWdlbl9lbXByZXNhIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: CrearServicioPage */

  /***/
  function srcAppPaginasAdministrarServiciosCrearServicioCrearServicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearServicioPage", function () {
      return CrearServicioPage;
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


    var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CrearServicioPage = /*#__PURE__*/function () {
      function CrearServicioPage(api_servicios, navCtrl) {
        _classCallCheck(this, CrearServicioPage);

        this.api_servicios = api_servicios;
        this.navCtrl = navCtrl;
        this.formulario = [];
        this.servicio = {};
      }

      _createClass(CrearServicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.servicio = {
            nombreDelServicio: '',
            requiereQR: 0,
            formulario: this.formulario,
            producto: 0
          };
        }
      }, {
        key: "agregar_campo_formulario",
        value: function agregar_campo_formulario() {
          this.formulario.push({
            nombreCampo: '',
            tipoCampo: '',
            opciones: []
          });
        }
      }, {
        key: "agregar_opcion_select",
        value: function agregar_opcion_select(i) {
          this.formulario[i].opciones.push({
            opcion: ''
          });
        }
      }, {
        key: "crear_servicio",
        value: function crear_servicio() {
          this.api_servicios.crear_servicio(this.servicio).subscribe(function (data) {
            console.log(data);
            location.reload();
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "producto_asociado",
        value: function producto_asociado() {
          if (this.servicio.producto == 1) {
            this.formulario.push({
              nombreCampo: 'Tipo de producto',
              tipoCampo: 'select',
              opciones: []
            });
          } else {
            this.formulario.splice(0);
          }
        }
      }]);

      return CrearServicioPage;
    }();

    CrearServicioPage.ctorParameters = function () {
      return [{
        type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    CrearServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-servicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./crear-servicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./crear-servicio.page.scss */
      "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.scss"))["default"]]
    })], CrearServicioPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarServiciosModificarServicioModificarServicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL21vZGlmaWNhci1zZXJ2aWNpby9tb2RpZmljYXItc2VydmljaW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ModificarServicioPage */

  /***/
  function srcAppPaginasAdministrarServiciosModificarServicioModificarServicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarServicioPage", function () {
      return ModificarServicioPage;
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
    /*! ../servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");

    var ModificarServicioPage = /*#__PURE__*/function () {
      function ModificarServicioPage(api_servicios, navCtrl, navParams, modalController) {
        _classCallCheck(this, ModificarServicioPage);

        this.api_servicios = api_servicios;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.formulario = [];
        this.servicio = {};
        this.auxiliar = [];
        this.start = false;
        this.id_servicio = this.navParams.get('id_servicio');
      }

      _createClass(ModificarServicioPage, [{
        key: "iniicar",
        value: function iniicar() {
          var _this4 = this;

          this.start = true;
          this.servicio = [];
          this.campos = null;
          this.api_servicios.ver_servicio(this.id_servicio).subscribe(function (data) {
            console.log('RESPUESTA:  ', data);
            _this4.servicio = data;
            _this4.servicio = _this4.servicio.result;
            _this4.servicio.requiereQR = _this4.servicio.requiereQR.toString();
            _this4.servicio.tieneProducto = _this4.servicio.tieneProducto.toString();
            var init = [];

            _this4.servicio.formulario.forEach(function (element, i) {
              init.push({
                opt: [],
                id_campo: element.id_campo,
                tipoCampo: element.tipoCampo,
                nombreCampo: element.nombreCampo
              });
              element.opciones.forEach(function (element2) {
                // console.log(element2)
                init[i].opt.push(element2);
              });
            });

            _this4.campos = init;
            console.log(_this4.servicio);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.servicio = {
            nombreDelServicio: '',
            requiereQR: 0,
            formulario: this.servicio.formulario,
            producto: 0
          };
          this.iniicar();
        }
      }, {
        key: "agregar_campo_formulario",
        value: function agregar_campo_formulario() {
          this.servicio.formulario.push({
            nombreCampo: '',
            tipoCampo: '',
            opciones: []
          });
          this.campos.push({
            opt: [],
            tipoCampo: "",
            nombreCampo: ""
          });
        }
      }, {
        key: "agregar_opcion_select",
        value: function agregar_opcion_select(i) {
          this.servicio.formulario[i].opciones.push('');
          this.campos[i].opt.push({
            name: null
          });
        }
      }, {
        key: "quitar_opcion_select",
        value: function quitar_opcion_select(i, j, id) {
          this.servicio.formulario[i].opciones.splice(j, 1);
          this.campos[i].opt.splice(j, 1);
          console.log(id);
          this.api_servicios.baja_opcion(id).subscribe(function (data) {
            console.log(data);
          }), function (error) {
            console.log(error);
          };
        }
      }, {
        key: "crear_servicio",
        value: function crear_servicio() {
          var _this5 = this;

          this.servicio.formulario = []; // console.log(this.servicio)

          this.campos.forEach(function (campo, i) {
            _this5.servicio.formulario.push({
              nombreCampo: campo.nombreCampo,
              tipoCampo: campo.tipoCampo,
              opciones: []
            });

            campo.opt.forEach(function (opt) {
              _this5.servicio.formulario[i].opciones.push({
                opcion: opt.name
              });
            });
          });
          this.servicio.requiereQR = parseInt(this.servicio.requiereQR, 10);
          this.servicio.producto = parseInt(this.servicio.tieneProducto, 10);
          console.log(this.servicio);
          this.api_servicios.crear_servicio(this.servicio).subscribe(function (data) {
            console.log(data);

            _this5.borrar();

            location.reload();
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "modificar_servicio",
        value: function modificar_servicio() {
          var _this6 = this;

          this.servicio.formulario = [];
          this.campos.forEach(function (campo, i) {
            // console.log(campo)
            _this6.servicio.formulario.push({
              nombreCampo: campo.nombreCampo,
              tipoCampo: campo.tipoCampo,
              id_campo: campo.id_campo,
              opciones: []
            });

            campo.opt.forEach(function (opt) {
              _this6.servicio.formulario[i].opciones.push(opt);
            });
          });
          this.servicio.requiereQR = parseInt(this.servicio.requiereQR, 10);
          this.servicio.producto = parseInt(this.servicio.tieneProducto, 10);
          this.api_servicios.update_servicio(this.servicio).subscribe(function (data) {
            console.log(data);
            location.reload();
          }), function (error) {
            return console.log(error);
          };
        }
      }, {
        key: "producto_asociado",
        value: function producto_asociado() {
          if (this.servicio.tieneProducto == 1 && this.servicio.modificable == 1 && this.start == false && this.servicio.formulario[0].nombreCampo != "Tipo de producto") {
            console.log('troll');
            this.servicio.formulario.unshift({
              nombreCampo: 'Tipo de producto',
              tipoCampo: 'select',
              opciones: []
            });
            this.campos.unshift({
              nombreCampo: 'Tipo de producto',
              tipoCampo: 'select',
              opt: []
            });
          } else if (this.servicio.formulario[0].nombreCampo == "Tipo de producto" && this.start == false) {
            this.servicio.formulario.splice(0, 1);
            this.campos.splice(0, 1);
          } else {
            this.start = false;
          }
        }
      }, {
        key: "borrar",
        value: function borrar() {
          this.api_servicios.baja_servicio(this.id_servicio).subscribe(function (data) {
            console.log(data);
          }), function (error) {
            return console.log(error);
          };
        }
      }]);

      return ModificarServicioPage;
    }();

    ModificarServicioPage.ctorParameters = function () {
      return [{
        type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModificarServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modificar-servicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modificar-servicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modificar-servicio.page.scss */
      "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.scss"))["default"]]
    })], ModificarServicioPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioCrearProductoCrearProductoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(223, 223, 223);\n  border: solid black 2px;\n}\n\n.imagen_empresa {\n  width: 50%;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MvdmVyLXNlcnZpY2lvL2NyZWFyLXByb2R1Y3RvL0Q6XFxSZXBvc2l0b3Jpb3NcXGZyb250ZW5kX2NwYV9hZG1pbi9zcmNcXGFwcFxccGFnaW5hc1xcYWRtaW5pc3RyYXItc2VydmljaW9zXFx2ZXItc2VydmljaW9cXGNyZWFyLXByb2R1Y3RvXFxjcmVhci1wcm9kdWN0by5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL3Zlci1zZXJ2aWNpby9jcmVhci1wcm9kdWN0by9jcmVhci1wcm9kdWN0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL3Zlci1zZXJ2aWNpby9jcmVhci1wcm9kdWN0by9jcmVhci1wcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XHJcbn1cclxuXHJcbi5pbWFnZW5fZW1wcmVzYXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlXHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcbn1cblxuLmltYWdlbl9lbXByZXNhIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts ***!
    \**************************************************************************************************/

  /*! exports provided: CrearProductoPage */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioCrearProductoCrearProductoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearProductoPage", function () {
      return CrearProductoPage;
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

    var CrearProductoPage = /*#__PURE__*/function () {
      function CrearProductoPage(navParams, api_servicios, modalCtrl, alertController) {
        _classCallCheck(this, CrearProductoPage);

        this.navParams = navParams;
        this.api_servicios = api_servicios;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.indexTipoProducto = 0;
        this.id_servicio = this.navParams.get('id_servicio');
      }

      _createClass(CrearProductoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.api_servicios.ver_servicio(this.id_servicio).subscribe(function (data) {
            _this7.servicio = data;
            _this7.servicio = _this7.servicio.result;

            for (var i = 0; i < _this7.servicio.formulario.length; i++) {
              if (_this7.servicio.formulario[i].nombreCampo == 'Tipo de producto') {
                _this7.indexTipoProducto = i;
              }
            }

            console.log('Servicio: ', _this7.servicio);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "cargar_producto",
        value: function cargar_producto() {
          var _this8 = this;

          var year = this.fecha_vencimiento.slice(0, 4);
          var month = this.fecha_vencimiento.slice(5, 7);
          var day = this.fecha_vencimiento.slice(8, 10);
          this.fecha_vencimiento = day + "-" + month + "-" + year;
          this.api_servicios.alta_producto({
            id_servicio: this.id_servicio,
            nombre_producto: this.nombre_producto,
            fecha_vencimiento: this.fecha_vencimiento,
            lote: this.lote,
            tipo_producto: this.tipo_producto
          }).subscribe(function (data) {
            console.log(data);

            _this8.modalCtrl.dismiss({
              'dismissed': true
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "select_tipo_producto",
        value: function select_tipo_producto() {
          if (this.tipo_producto == 'nuevo') {
            this.alert_nuevo_tipo();
          }
        }
      }, {
        key: "alert_nuevo_tipo",
        value: function alert_nuevo_tipo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this9 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Crear nuevo tipo de producto',
                      // message: 'Ingrese el nombre',
                      inputs: [{
                        name: 'name',
                        type: 'text',
                        placeholder: 'Ingrese el nombre'
                      }],
                      buttons: [{
                        text: 'Crear',
                        handler: function handler(data) {
                          console.log(data);

                          _this9.crear_tipo_producto(data.name);
                        }
                      }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "crear_tipo_producto",
        value: function crear_tipo_producto(nombre) {
          var _this10 = this;

          this.servicio.formulario.forEach(function (element) {
            if (element.nombreCampo == "Tipo de producto") {
              element.opciones.push({
                name: nombre
              });
            }
          });
          this.api_servicios.update_servicio(this.servicio).subscribe(function (data) {
            console.log(data); // location.reload();

            _this10.ngOnInit();
          }), function (error) {
            return console.log(error);
          };
        }
      }]);

      return CrearProductoPage;
    }();

    CrearProductoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    CrearProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-producto',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./crear-producto.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./crear-producto.page.scss */
      "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.scss"))["default"]]
    })], CrearProductoPage);
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioVerServicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL3Zlci1zZXJ2aWNpby92ZXItc2VydmljaW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: VerServicioPage */

  /***/
  function srcAppPaginasAdministrarServiciosVerServicioVerServicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerServicioPage", function () {
      return VerServicioPage;
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
    /*! ../servicios/api-servicios.service */
    "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
    /* harmony import */


    var _crear_producto_crear_producto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./crear-producto/crear-producto.page */
    "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts");
    /* harmony import */


    var _modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modificar-producto/modificar-producto.component */
    "./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.ts");

    var VerServicioPage = /*#__PURE__*/function () {
      function VerServicioPage(navParams, api_servicios, modalController, alertController) {
        _classCallCheck(this, VerServicioPage);

        this.navParams = navParams;
        this.api_servicios = api_servicios;
        this.modalController = modalController;
        this.alertController = alertController;
        this.id_servicio = this.navParams.get('id_servicio');
      }

      _createClass(VerServicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizar_informacion();
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          var _this11 = this;

          this.api_servicios.ver_servicio(this.id_servicio).subscribe(function (data) {
            _this11.servicio = data;
            _this11.servicio = _this11.servicio.result;
            console.log(_this11.servicio);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "altaProducto",
        value: function altaProducto(id_servicio) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this12 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalController.create({
                      component: _crear_producto_crear_producto_page__WEBPACK_IMPORTED_MODULE_4__["CrearProductoPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'id_servicio': id_servicio
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this12.actualizar_informacion();
                    });
                    _context6.next = 6;
                    return modal.present();

                  case 6:
                    return _context6.abrupt("return", _context6.sent);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "baja_producto",
        value: function baja_producto(id_producto) {
          var _this13 = this;

          this.api_servicios.baja_producto(id_producto).subscribe(function (data) {
            console.log(data);

            _this13.actualizar_informacion();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "eliminar_producto",
        value: function eliminar_producto(id_producto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this14 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Seguro que desea eliminar el producto?',
                      buttons: [{
                        text: 'No',
                        handler: function handler() {}
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          _this14.baja_producto(id_producto);
                        }
                      }]
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "modificarProducto",
        value: function modificarProducto(producto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this15 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalController.create({
                      component: _modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_5__["ModificarProductoComponent"],
                      cssClass: 'stack-modal',
                      showBackdrop: true,
                      componentProps: {
                        'producto': producto,
                        'servicio': this.servicio
                      }
                    });

                  case 2:
                    modal = _context8.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this15.actualizar_informacion();
                    });
                    _context8.next = 6;
                    return modal.present();

                  case 6:
                    return _context8.abrupt("return", _context8.sent);

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return VerServicioPage;
    }();

    VerServicioPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    VerServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-servicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ver-servicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ver-servicio.page.scss */
      "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.scss"))["default"]]
    })], VerServicioPage);
    /***/
  }
}]);
//# sourceMappingURL=paginas-administrar-servicios-administrar-servicios-module-es5.js.map