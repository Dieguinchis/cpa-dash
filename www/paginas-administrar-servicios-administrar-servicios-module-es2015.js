(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-administrar-servicios-administrar-servicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/administrar-servicios.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/administrar-servicios.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  \r\n  <div style=\"margin-left: 30%; width: 40%;\">\r\n    <ion-card style=\"text-align: center;\">\r\n      <ion-item lines=\"full\" class=\"titulo_lista_servicios\" style=\"margin-bottom: 20px;\">\r\n        <ion-label style=\"text-align: center;\"><b>Servicios</b></ion-label>  \r\n        <ion-button (click)=\"crear_servicio()\">\r\n          Crear servicio\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" *ngFor=\"let servicio of servicios\" class=\"lista_servicios\">\r\n        <ion-label style=\"text-align: left;\">\r\n          <b>{{servicio.nombre_servicio}}</b>\r\n        </ion-label> \r\n        <ion-buttons>\r\n          <ion-icon style=\"margin-right: 10px;\" *ngIf=\"servicio.modificable == 1\" name=\"trash-outline\" color=\"danger\" (click)=\"borrar_servicio(servicio.id_servicio)\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-buttons>\r\n          <ion-icon name=\"create-outline\" style=\"margin-right: 10px;\" (click)=\"modificar_servicio(servicio.id_servicio)\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-buttons >\r\n          <ion-icon name=\"enter-outline\" *ngIf=\"servicio.producto == 1\" (click)=\"ver_servicio(servicio.id_servicio)\"></ion-icon>\r\n        </ion-buttons>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>Crear un nuevo servicio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"background-color: white !important;\">\r\n  <div>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">Nombre del servicio: </ion-label>\r\n      <ion-input [(ngModel)]=\"servicio.nombreDelServicio\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Requiere QR?</ion-label>\r\n      <ion-select [(ngModel)]=\"servicio.requiereQR\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Contiene productos?</ion-label>\r\n      <ion-select [(ngModel)]=\"servicio.producto\" (ionChange)=\"producto_asociado()\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <div *ngFor=\"let campo of formulario; let i = index\" style=\"background-color: white;\">\r\n      <ion-item lines=\"full\">\r\n        <ion-grid style=\"background-color: white;\">\r\n          <ion-row style=\"background-color: white;\">\r\n            <ion-item lines=\"none\" style=\"background-color: white;\">\r\n              <ion-col style=\"background-color: white;\">\r\n                <ion-label>Ingrese titulo del campo: </ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-input [disabled]=\"campo.nombreCampo == 'Tipo de producto'\" [(ngModel)]=\"campo.nombreCampo\"></ion-input>\r\n              </ion-col>\r\n            </ion-item>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div *ngIf=\"campo.nombreCampo != 'Tipo de producto'\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  Seleccione tipo de campo\r\n                </ion-label>\r\n                <ion-select [(ngModel)]=\"campo.tipoCampo\">\r\n                  <ion-select-option value=\"input\">Escritura</ion-select-option>\r\n                  <ion-select-option value=\"select\">Seleccionable</ion-select-option>\r\n                  <ion-select-option value=\"multiple\">Seleccion multiple</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n          </ion-row>\r\n          <div *ngIf=\"campo.tipoCampo == 'select' || campo.tipoCampo == 'multiple'\">\r\n            <ion-item lines=\"none\" *ngFor=\"let opcion of campo.opciones; let j = index\">\r\n              <ion-label>Ingrese la opcion: </ion-label>\r\n              <div style=\"margin-left: 5px\">\r\n                <ion-input [(ngModel)]=\"campo.opciones[j].opcion\"></ion-input>  \r\n              </div>\r\n            </ion-item>  \r\n            <ion-item lines=\"none\">\r\n              <!-- <ion-label style=\"text-align: center;color: black;\"></ion-label> -->\r\n              <ion-button (click)=\"agregar_opcion_select(i)\">Agregar opcion\r\n                <ion-icon name=\"add-outline\"></ion-icon>\r\n              </ion-button>  \r\n            </ion-item>\r\n          </div>\r\n        </ion-grid>  \r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label>\r\n        Agregar campo\r\n      </ion-label>\r\n      <ion-button (click)=\"agregar_campo_formulario()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <div style=\"text-align: center; margin-top: 20px;\">\r\n    <ion-button (click)=\"crear_servicio()\">Listo</ion-button>\r\n  </div>\r\n\r\n  <!-- <div style=\"margin-top: 15px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div> -->\r\n\r\n\r\n</ion-content>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\" color=\"primary\">\r\n    <ion-title>Modiciar servicio: {{servicio.nombreDelServicio}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <!-- <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">Nombre del servicio: </ion-label>\r\n      <ion-input [disabled]=\"servicio.modificable == 0\" [(ngModel)]=\"servicio.nombreDelServicio\"></ion-input>\r\n    </ion-item> -->\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Requiere QR?</ion-label>\r\n      <ion-select [(ngModel)]=\"servicio.requiereQR\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label style=\"text-align: left;\">¿Contiene productos?</ion-label>\r\n      <ion-select [disabled]=\"servicio.modificable == 0\" [(ngModel)]=\"servicio.tieneProducto\" (ionChange)=\"producto_asociado()\">\r\n        <ion-select-option value=\"1\">Si</ion-select-option>\r\n        <ion-select-option value=\"0\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <div *ngFor=\"let campo of campos; let i = index\" style=\"background-color: white;\">\r\n      <ion-item lines=\"full\">\r\n        <ion-grid style=\"background-color: white;\">\r\n          <ion-row style=\"background-color: white;\">\r\n            <ion-item lines=\"none\">\r\n              <ion-col>\r\n                <ion-label>Ingrese titulo del campo: </ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-input [disabled]=\"campo.nombreCampo == 'Tipo de producto' || servicio.modificable == 0\" [(ngModel)]=\"campo.nombreCampo\"></ion-input>\r\n              </ion-col>\r\n            </ion-item>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div *ngIf=\"campo.nombreCampo != 'Tipo de producto'\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  Seleccione tipo de campo\r\n                </ion-label>\r\n                <ion-select [disabled]=\"servicio.modificable == 0\" [(ngModel)]=\"campo.tipoCampo\">\r\n                  <ion-select-option value=\"input\">Escritura</ion-select-option>\r\n                  <ion-select-option value=\"select\">Seleccionable</ion-select-option>\r\n                  <ion-select-option value=\"multiple\">Seleccion multiple</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n          </ion-row>\r\n          <div *ngIf=\"campo.tipoCampo == 'select' || campo.tipoCampo == 'multiple'\">\r\n            <ion-item lines=\"none\" *ngFor=\"let opcion of campo.opt; let j = index\">\r\n              <ion-label>Ingrese la opcion: </ion-label>\r\n              <!-- <div style=\"margin-left: 5px\"> -->\r\n                <ion-input [(ngModel)]=\"opcion.name\"></ion-input>  \r\n              <!-- </div> -->\r\n              <ion-icon name=\"trash-outline\" (click)=\"quitar_opcion_select(i,j,opcion.opcionId)\"></ion-icon>\r\n            </ion-item>  \r\n            <ion-item lines=\"none\">\r\n              <!-- <ion-label style=\"text-align: center;\">\r\n              </ion-label> -->\r\n              <ion-button (click)=\"agregar_opcion_select(i)\">\r\n                Agregar opcion\r\n                <ion-icon name=\"add-outline\"></ion-icon>\r\n              </ion-button>  \r\n            </ion-item>\r\n          </div>\r\n        </ion-grid>  \r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label>\r\n        Agregar campo\r\n      </ion-label>\r\n      <ion-button (click)=\"agregar_campo_formulario()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-item disabled *ngIf=\"servicio.modificable == 0\" lines=\"full\">\r\n        <p>Al ser un servicio con un diseño predeterminado recuerde que si agrega nuevos campos no se veran automaticamente reflejados en el pdf</p> \r\n    </ion-item>\r\n  </div>\r\n\r\n  <div  *ngIf=\"servicio.modificable == 0\" style=\"text-align: center; margin-top: 20px;\">\r\n    <ion-button (click)=\"modificar_servicio()\">Modificar</ion-button>\r\n  </div>\r\n  <div  *ngIf=\"servicio.modificable == 1\" style=\"text-align: center; margin-top: 20px;\">\r\n    <ion-button (click)=\"crear_servicio()\">Modificar</ion-button>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 15px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n\r\n\r\n</ion-content>  \r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title style=\"text-align: center;\">Alta de producto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\">\r\n      Nombre del producto:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"nombre_producto\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Fecha de vencimiento:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"fecha_vencimiento\" type=\"date\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"titulos\" >\r\n      Lote:\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"lote\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\" *ngIf=\"servicio\">\r\n    <ion-label class=\"titulos\">\r\n      Tipo de producto:\r\n    </ion-label>\r\n    <ion-select [(ngModel)]=\"tipo_producto\" (ionChange)=\"select_tipo_producto()\">\r\n      <ion-select-option *ngFor=\"let opcion of servicio.formulario[indexTipoProducto].opciones\" [value]=\"opcion\">{{opcion.name}}</ion-select-option>\r\n      <ion-select-option value=\"nuevo\">Nuevo tipo</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <div style=\"width: 100%; text-align: center; margin-top: 25px;\">\r\n    <ion-button (click)=\"cargar_producto()\">Cargar</ion-button>   \r\n  </div>\r\n\r\n  <div style=\"margin-top: 25px\">\r\n    <img class=\"imagen_empresa\" src='../../../assets/LogoCPA-01.png'>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title *ngIf=\"servicio\" style=\"text-align: center;\">{{servicio.nombreDelServicio}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"servicio\">\r\n    <div *ngIf=\"servicio.tieneProducto\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label style=\"text-align: center;\"><b>Productos</b></ion-label>\r\n        <ion-button (click)=\"altaProducto(id_servicio)\">Agregar producto</ion-button>\r\n      </ion-item>\r\n      <ion-item class=\"titulos\" lines=\"full\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                <b>Nombre del producto</b>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                <b>Fecha de vencimiento</b>\r\n              </ion-label>  \r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                <b>Lote</b>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-label>\r\n                <b>Tipo de producto</b>\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <div *ngFor=\"let producto of servicio.listaProductos\">\r\n        <ion-item lines=\"full\">\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{producto.nombre_producto}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{producto.fecha_vencimiento}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>\r\n                {{producto.lote}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-label>\r\n                {{producto.tipo_producto}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <!-- <ion-icon name=\"create-outline\" (click)=\"modificarProducto(producto)\" *ngIf=\"id_servicio == 20\"></ion-icon> -->\r\n              <ion-icon name=\"trash-outline\" color=\"danger\" style=\"margin-right: 15px\" (click)=\"eliminar_producto(producto.id_producto)\"></ion-icon>\r\n            </ion-col>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/paginas/administrar-servicios/administrar-servicios-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/administrar-servicios-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AdministrarServiciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarServiciosPageRoutingModule", function() { return AdministrarServiciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _administrar_servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrar-servicios.page */ "./src/app/paginas/administrar-servicios/administrar-servicios.page.ts");




const routes = [
    {
        path: '',
        component: _administrar_servicios_page__WEBPACK_IMPORTED_MODULE_3__["AdministrarServiciosPage"]
    },
    {
        path: 'crear-servicio',
        loadChildren: () => __webpack_require__.e(/*! import() | crear-servicio-crear-servicio-module */ "crear-servicio-crear-servicio-module").then(__webpack_require__.bind(null, /*! ./crear-servicio/crear-servicio.module */ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.module.ts")).then(m => m.CrearServicioPageModule)
    },
    {
        path: 'ver-servicio',
        loadChildren: () => __webpack_require__.e(/*! import() | ver-servicio-ver-servicio-module */ "ver-servicio-ver-servicio-module").then(__webpack_require__.bind(null, /*! ./ver-servicio/ver-servicio.module */ "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.module.ts")).then(m => m.VerServicioPageModule)
    },
    {
        path: 'modificar-servicio',
        loadChildren: () => __webpack_require__.e(/*! import() | modificar-servicio-modificar-servicio-module */ "modificar-servicio-modificar-servicio-module").then(__webpack_require__.bind(null, /*! ./modificar-servicio/modificar-servicio.module */ "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.module.ts")).then(m => m.ModificarServicioPageModule)
    }
];
let AdministrarServiciosPageRoutingModule = class AdministrarServiciosPageRoutingModule {
};
AdministrarServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdministrarServiciosPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/administrar-servicios/administrar-servicios.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/administrar-servicios.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdministrarServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarServiciosPageModule", function() { return AdministrarServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _administrar_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrar-servicios-routing.module */ "./src/app/paginas/administrar-servicios/administrar-servicios-routing.module.ts");
/* harmony import */ var _administrar_servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrar-servicios.page */ "./src/app/paginas/administrar-servicios/administrar-servicios.page.ts");







let AdministrarServiciosPageModule = class AdministrarServiciosPageModule {
};
AdministrarServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _administrar_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrarServiciosPageRoutingModule"]
        ],
        declarations: [_administrar_servicios_page__WEBPACK_IMPORTED_MODULE_6__["AdministrarServiciosPage"]]
    })
], AdministrarServiciosPageModule);



/***/ }),

/***/ "./src/app/paginas/administrar-servicios/administrar-servicios.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/administrar-servicios.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lista_servicios {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.boton_nuevo_servicio {\n  --background: transparent;\n}\n\nion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MvRDpcXFJlcG9zaXRvcmlvc1xcUFJPRFVDQ0lPTlxcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxhZG1pbmlzdHJhci1zZXJ2aWNpb3NcXGFkbWluaXN0cmFyLXNlcnZpY2lvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL2FkbWluaXN0cmFyLXNlcnZpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLQTtFQUNJLHlCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2FkbWluaXN0cmFyLXNlcnZpY2lvcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubGlzdGFfc2VydmljaW9ze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmJvdG9uX251ZXZvX3NlcnZpY2lve1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIiwiLmxpc3RhX3NlcnZpY2lvcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYm90b25fbnVldm9fc2VydmljaW8ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/paginas/administrar-servicios/administrar-servicios.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/administrar-servicios.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AdministrarServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarServiciosPage", function() { return AdministrarServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_servicio_crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-servicio/crear-servicio.page */ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts");
/* harmony import */ var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/api-servicios.service */ "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
/* harmony import */ var _ver_servicio_ver_servicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-servicio/ver-servicio.page */ "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.ts");
/* harmony import */ var _modificar_servicio_modificar_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modificar-servicio/modificar-servicio.page */ "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.ts");







let AdministrarServiciosPage = class AdministrarServiciosPage {
    constructor(modalController, api, alertController) {
        this.modalController = modalController;
        this.api = api;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.actualizar_informacion();
    }
    actualizar_informacion() {
        this.api.mostrar_servicios().subscribe(data => {
            this.servicios = data;
            this.servicios = this.servicios.result;
            console.log(this.servicios);
        }), (error => console.log(error));
    }
    crear_servicio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _crear_servicio_crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__["CrearServicioPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    ver_servicio(id_servicio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _ver_servicio_ver_servicio_page__WEBPACK_IMPORTED_MODULE_5__["VerServicioPage"],
                cssClass: 'modal_grande',
                componentProps: {
                    'id_servicio': id_servicio
                }
            });
            return yield modal.present();
        });
    }
    borrar_servicio(id_servicio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Seguro que desea eliminar el servicio?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            this.eliminar_servicio(id_servicio);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    eliminar_servicio(id_servicio) {
        this.api.baja_servicio(id_servicio).subscribe(data => {
            console.log(data);
            this.actualizar_informacion();
        }, (error => {
            console.log(error);
        }));
    }
    modificar_servicio(id_servicio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modificar_servicio_modificar_servicio_page__WEBPACK_IMPORTED_MODULE_6__["ModificarServicioPage"],
                cssClass: 'modal_grande',
                componentProps: {
                    'id_servicio': id_servicio
                }
            });
            return yield modal.present();
        });
    }
};
AdministrarServiciosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AdministrarServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-administrar-servicios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./administrar-servicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/administrar-servicios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./administrar-servicios.page.scss */ "./src/app/paginas/administrar-servicios/administrar-servicios.page.scss")).default]
    })
], AdministrarServiciosPage);



/***/ }),

/***/ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagen_empresa {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MvY3JlYXItc2VydmljaW8vRDpcXFJlcG9zaXRvcmlvc1xcUFJPRFVDQ0lPTlxcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxhZG1pbmlzdHJhci1zZXJ2aWNpb3NcXGNyZWFyLXNlcnZpY2lvXFxjcmVhci1zZXJ2aWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL2NyZWFyLXNlcnZpY2lvL2NyZWFyLXNlcnZpY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL2NyZWFyLXNlcnZpY2lvL2NyZWFyLXNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5fZW1wcmVzYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLmltYWdlbl9lbXByZXNhIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.ts ***!
  \*************************************************************************************/
/*! exports provided: CrearServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearServicioPage", function() { return CrearServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/api-servicios.service */ "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let CrearServicioPage = class CrearServicioPage {
    constructor(api_servicios, navCtrl) {
        this.api_servicios = api_servicios;
        this.navCtrl = navCtrl;
        this.formulario = [];
        this.servicio = {};
    }
    ngOnInit() {
        this.servicio = { nombreDelServicio: '', requiereQR: 0, formulario: this.formulario, producto: 0 };
    }
    agregar_campo_formulario() {
        this.formulario.push({ nombreCampo: '', tipoCampo: '', opciones: [] });
    }
    agregar_opcion_select(i) {
        this.formulario[i].opciones.push({ opcion: '' });
    }
    crear_servicio() {
        this.api_servicios.crear_servicio(this.servicio).subscribe(data => {
            console.log(data);
            location.reload();
        }), (error => console.log(error));
    }
    producto_asociado() {
        if (this.servicio.producto == 1) {
            this.formulario.push({ nombreCampo: 'Tipo de producto', tipoCampo: 'select', opciones: [] });
        }
        else {
            this.formulario.splice(0);
        }
    }
};
CrearServicioPage.ctorParameters = () => [
    { type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
CrearServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-servicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-servicio.page.scss */ "./src/app/paginas/administrar-servicios/crear-servicio/crear-servicio.page.scss")).default]
    })
], CrearServicioPage);



/***/ }),

/***/ "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL21vZGlmaWNhci1zZXJ2aWNpby9tb2RpZmljYXItc2VydmljaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: ModificarServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarServicioPage", function() { return ModificarServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/api-servicios.service */ "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");




let ModificarServicioPage = class ModificarServicioPage {
    constructor(api_servicios, navCtrl, navParams, modalController) {
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
    iniicar() {
        this.start = true;
        this.servicio = [];
        this.campos = null;
        this.api_servicios.ver_servicio(this.id_servicio).subscribe(data => {
            console.log('RESPUESTA:  ', data);
            this.servicio = data;
            this.servicio = this.servicio.result;
            this.servicio.requiereQR = this.servicio.requiereQR.toString();
            this.servicio.tieneProducto = this.servicio.tieneProducto.toString();
            var init = [];
            this.servicio.formulario.forEach((element, i) => {
                init.push({ opt: [], id_campo: element.id_campo, tipoCampo: element.tipoCampo, nombreCampo: element.nombreCampo });
                element.opciones.forEach(element2 => {
                    // console.log(element2)
                    init[i].opt.push(element2);
                });
            });
            this.campos = init;
            console.log(this.servicio);
        }, (error => {
            console.log(error);
        }));
    }
    ngOnInit() {
        this.servicio = { nombreDelServicio: '', requiereQR: 0, formulario: this.servicio.formulario, producto: 0 };
        this.iniicar();
    }
    agregar_campo_formulario() {
        this.servicio.formulario.push({ nombreCampo: '', tipoCampo: '', opciones: [] });
        this.campos.push({ opt: [], tipoCampo: "", nombreCampo: "" });
    }
    agregar_opcion_select(i) {
        this.servicio.formulario[i].opciones.push('');
        this.campos[i].opt.push({ name: null });
    }
    quitar_opcion_select(i, j, id) {
        this.servicio.formulario[i].opciones.splice(j, 1);
        this.campos[i].opt.splice(j, 1);
        console.log(id);
        this.api_servicios.baja_opcion(id).subscribe(data => {
            console.log(data);
        }), (error => {
            console.log(error);
        });
    }
    crear_servicio() {
        this.servicio.formulario = [];
        // console.log(this.servicio)
        this.campos.forEach((campo, i) => {
            this.servicio.formulario.push({ nombreCampo: campo.nombreCampo, tipoCampo: campo.tipoCampo, opciones: [] });
            campo.opt.forEach(opt => {
                this.servicio.formulario[i].opciones.push({ opcion: opt.name });
            });
        });
        this.servicio.requiereQR = parseInt(this.servicio.requiereQR, 10);
        this.servicio.producto = parseInt(this.servicio.tieneProducto, 10);
        console.log(this.servicio);
        this.api_servicios.crear_servicio(this.servicio).subscribe(data => {
            console.log(data);
            this.borrar();
            location.reload();
        }), (error => console.log(error));
    }
    modificar_servicio() {
        this.servicio.formulario = [];
        this.campos.forEach((campo, i) => {
            // console.log(campo)
            this.servicio.formulario.push({ nombreCampo: campo.nombreCampo, tipoCampo: campo.tipoCampo, id_campo: campo.id_campo, opciones: [] });
            campo.opt.forEach(opt => {
                this.servicio.formulario[i].opciones.push(opt);
            });
        });
        this.servicio.requiereQR = parseInt(this.servicio.requiereQR, 10);
        this.servicio.producto = parseInt(this.servicio.tieneProducto, 10);
        this.api_servicios.update_servicio(this.servicio).subscribe(data => {
            console.log(data);
            location.reload();
        }), (error => console.log(error));
    }
    producto_asociado() {
        if (this.servicio.tieneProducto == 1 && this.servicio.modificable == 1 && this.start == false && this.servicio.formulario[0].nombreCampo != "Tipo de producto") {
            console.log('troll');
            this.servicio.formulario.unshift({ nombreCampo: 'Tipo de producto', tipoCampo: 'select', opciones: [] });
            this.campos.unshift({ nombreCampo: 'Tipo de producto', tipoCampo: 'select', opt: [] });
        }
        else if (this.servicio.formulario[0].nombreCampo == "Tipo de producto" && this.start == false) {
            this.servicio.formulario.splice(0, 1);
            this.campos.splice(0, 1);
        }
        else {
            this.start = false;
        }
    }
    borrar() {
        this.api_servicios.baja_servicio(this.id_servicio).subscribe(data => {
            console.log(data);
        }), (error => console.log(error));
    }
};
ModificarServicioPage.ctorParameters = () => [
    { type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModificarServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modificar-servicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modificar-servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modificar-servicio.page.scss */ "./src/app/paginas/administrar-servicios/modificar-servicio/modificar-servicio.page.scss")).default]
    })
], ModificarServicioPage);



/***/ }),

/***/ "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(223, 223, 223);\n  border: solid black 2px;\n}\n\n.imagen_empresa {\n  width: 50%;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbmlzdHJhci1zZXJ2aWNpb3MvdmVyLXNlcnZpY2lvL2NyZWFyLXByb2R1Y3RvL0Q6XFxSZXBvc2l0b3Jpb3NcXFBST0RVQ0NJT05cXGZyb250ZW5kX2NwYV9hZG1pbi9zcmNcXGFwcFxccGFnaW5hc1xcYWRtaW5pc3RyYXItc2VydmljaW9zXFx2ZXItc2VydmljaW9cXGNyZWFyLXByb2R1Y3RvXFxjcmVhci1wcm9kdWN0by5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL3Zlci1zZXJ2aWNpby9jcmVhci1wcm9kdWN0by9jcmVhci1wcm9kdWN0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL3Zlci1zZXJ2aWNpby9jcmVhci1wcm9kdWN0by9jcmVhci1wcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XHJcbn1cclxuXHJcbi5pbWFnZW5fZW1wcmVzYXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlXHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMpO1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcbn1cblxuLmltYWdlbl9lbXByZXNhIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: CrearProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoPage", function() { return CrearProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/api-servicios.service */ "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");




let CrearProductoPage = class CrearProductoPage {
    constructor(navParams, api_servicios, modalCtrl, alertController) {
        this.navParams = navParams;
        this.api_servicios = api_servicios;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.indexTipoProducto = 0;
        this.id_servicio = this.navParams.get('id_servicio');
    }
    ngOnInit() {
        this.api_servicios.ver_servicio(this.id_servicio).subscribe(data => {
            this.servicio = data;
            this.servicio = this.servicio.result;
            for (let i = 0; i < this.servicio.formulario.length; i++) {
                if (this.servicio.formulario[i].nombreCampo == 'Tipo de producto') {
                    this.indexTipoProducto = i;
                }
            }
            console.log('Servicio: ', this.servicio);
        }, (error => {
            console.log(error);
        }));
    }
    cargar_producto() {
        const year = this.fecha_vencimiento.slice(0, 4);
        const month = this.fecha_vencimiento.slice(5, 7);
        const day = this.fecha_vencimiento.slice(8, 10);
        this.fecha_vencimiento = day + "-" + month + "-" + year;
        this.api_servicios.alta_producto({ id_servicio: this.id_servicio, nombre_producto: this.nombre_producto, fecha_vencimiento: this.fecha_vencimiento, lote: this.lote, tipo_producto: this.tipo_producto }).subscribe(data => {
            console.log(data);
            this.modalCtrl.dismiss({
                'dismissed': true
            });
        }, (error => {
            console.log(error);
        }));
    }
    select_tipo_producto() {
        if (this.tipo_producto == 'nuevo') {
            this.alert_nuevo_tipo();
        }
    }
    alert_nuevo_tipo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Crear nuevo tipo de producto',
                // message: 'Ingrese el nombre',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Ingrese el nombre'
                    }
                ],
                buttons: [
                    {
                        text: 'Crear',
                        handler: (data) => {
                            console.log(data);
                            this.crear_tipo_producto(data.name);
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    crear_tipo_producto(nombre) {
        this.servicio.formulario.forEach(element => {
            if (element.nombreCampo == "Tipo de producto") {
                element.opciones.push({ name: nombre });
            }
        });
        this.api_servicios.update_servicio(this.servicio).subscribe(data => {
            console.log(data);
            // location.reload();
            this.ngOnInit();
        }), (error => console.log(error));
    }
};
CrearProductoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
CrearProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-producto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-producto.page.scss */ "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.scss")).default]
    })
], CrearProductoPage);



/***/ }),

/***/ "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW5pc3RyYXItc2VydmljaW9zL3Zlci1zZXJ2aWNpby92ZXItc2VydmljaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.ts ***!
  \*********************************************************************************/
/*! exports provided: VerServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerServicioPage", function() { return VerServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/api-servicios.service */ "./src/app/paginas/administrar-servicios/servicios/api-servicios.service.ts");
/* harmony import */ var _crear_producto_crear_producto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crear-producto/crear-producto.page */ "./src/app/paginas/administrar-servicios/ver-servicio/crear-producto/crear-producto.page.ts");
/* harmony import */ var _modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modificar-producto/modificar-producto.component */ "./src/app/paginas/administrar-servicios/ver-servicio/modificar-producto/modificar-producto.component.ts");






let VerServicioPage = class VerServicioPage {
    constructor(navParams, api_servicios, modalController, alertController) {
        this.navParams = navParams;
        this.api_servicios = api_servicios;
        this.modalController = modalController;
        this.alertController = alertController;
        this.id_servicio = this.navParams.get('id_servicio');
    }
    ngOnInit() {
        this.actualizar_informacion();
    }
    actualizar_informacion() {
        this.api_servicios.ver_servicio(this.id_servicio).subscribe(data => {
            this.servicio = data;
            this.servicio = this.servicio.result;
            console.log(this.servicio);
        }, (error => {
            console.log(error);
        }));
    }
    altaProducto(id_servicio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _crear_producto_crear_producto_page__WEBPACK_IMPORTED_MODULE_4__["CrearProductoPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    'id_servicio': id_servicio
                }
            });
            modal.onDidDismiss().then(data => {
                this.actualizar_informacion();
            });
            return yield modal.present();
        });
    }
    baja_producto(id_producto) {
        this.api_servicios.baja_producto(id_producto).subscribe(data => {
            console.log(data);
            this.actualizar_informacion();
        }, (error => {
            console.log(error);
        }));
    }
    eliminar_producto(id_producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Seguro que desea eliminar el producto?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            this.baja_producto(id_producto);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    modificarProducto(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_5__["ModificarProductoComponent"],
                cssClass: 'stack-modal',
                showBackdrop: true,
                componentProps: {
                    'producto': producto,
                }
            });
            return yield modal.present();
        });
    }
};
VerServicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _servicios_api_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
VerServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ver-servicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ver-servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ver-servicio.page.scss */ "./src/app/paginas/administrar-servicios/ver-servicio/ver-servicio.page.scss")).default]
    })
], VerServicioPage);



/***/ })

}]);
//# sourceMappingURL=paginas-administrar-servicios-administrar-servicios-module-es2015.js.map