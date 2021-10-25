(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-principal-menu-principal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n  <ion-tab-bar  slot=\"top\">\r\n\r\n    <ion-tab-button tab=\"administrar-clientes\">\r\n      <ion-icon name=\"people-outline\"></ion-icon>\r\n      <ion-label>Administrar clientes</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"alta-cliente\">\r\n      <ion-icon name=\"person-add-outline\"></ion-icon>\r\n      <ion-label>Dar de alta a un cliente</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"administrar-visitas\">\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>Administrar Visitas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"administrar-servicios\">\r\n      <ion-icon name=\"document-text-outline\"></ion-icon>\r\n      <ion-label>Administrar servicios</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"administrar-tecnicos\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Administrar tecnicos</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-icon name=\"log-out\" class=\"logout\" (click)=\"logout()\"></ion-icon>\r\n  </ion-tab-bar>\r\n\r\n  \r\n\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/menu-principal/menu-principal-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/menu-principal/menu-principal-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MenuPrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageRoutingModule", function() { return MenuPrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/menu-principal/menu-principal.page.ts");




const routes = [
    {
        path: 'menu-principal',
        component: _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__["MenuPrincipalPage"],
        children: [
            {
                path: 'administrar-clientes',
                loadChildren: () => __webpack_require__.e(/*! import() | paginas-administrar-clientes-administrar-clientes-module */ "paginas-administrar-clientes-administrar-clientes-module").then(__webpack_require__.bind(null, /*! ../paginas/administrar-clientes/administrar-clientes.module */ "./src/app/paginas/administrar-clientes/administrar-clientes.module.ts")).then(m => m.AdministrarClientesPageModule)
            },
            {
                path: '',
                redirectTo: '/menu-inferior/administrar-clientes',
                pathMatch: 'full'
            },
            {
                path: 'administrar-clientes',
                loadChildren: () => __webpack_require__.e(/*! import() | paginas-administrar-clientes-administrar-clientes-module */ "paginas-administrar-clientes-administrar-clientes-module").then(__webpack_require__.bind(null, /*! ../paginas/administrar-clientes/administrar-clientes.module */ "./src/app/paginas/administrar-clientes/administrar-clientes.module.ts")).then(m => m.AdministrarClientesPageModule)
            },
            {
                path: 'administrar-visitas',
                loadChildren: () => Promise.all(/*! import() | paginas-administrar-visitas-administrar-visitas-module */[__webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~b66acba8"), __webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~5d227966"), __webpack_require__.e("paginas-administrar-visitas-administrar-visitas-module")]).then(__webpack_require__.bind(null, /*! ../paginas/administrar-visitas/administrar-visitas.module */ "./src/app/paginas/administrar-visitas/administrar-visitas.module.ts")).then(m => m.AdministrarVisitasPageModule)
            },
            {
                path: 'ver-cliente/:id_cliente',
                loadChildren: () => Promise.all(/*! import() | paginas-administrar-clientes-ver-cliente-ver-cliente-module */[__webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~b66acba8"), __webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~5d227966"), __webpack_require__.e("paginas-administrar-clientes-ver-cliente-ver-cliente-module")]).then(__webpack_require__.bind(null, /*! ../paginas/administrar-clientes/ver-cliente/ver-cliente.module */ "./src/app/paginas/administrar-clientes/ver-cliente/ver-cliente.module.ts")).then(m => m.VerClientePageModule)
            },
            {
                path: 'alta-cliente',
                loadChildren: () => __webpack_require__.e(/*! import() | paginas-alta-cliente-alta-cliente-module */ "paginas-alta-cliente-alta-cliente-module").then(__webpack_require__.bind(null, /*! ../paginas/alta-cliente/alta-cliente.module */ "./src/app/paginas/alta-cliente/alta-cliente.module.ts")).then(m => m.AltaClientePageModule)
            },
            {
                path: 'administrar-servicios',
                loadChildren: () => __webpack_require__.e(/*! import() | paginas-administrar-servicios-administrar-servicios-module */ "paginas-administrar-servicios-administrar-servicios-module").then(__webpack_require__.bind(null, /*! ../paginas/administrar-servicios/administrar-servicios.module */ "./src/app/paginas/administrar-servicios/administrar-servicios.module.ts")).then(m => m.AdministrarServiciosPageModule)
            },
            {
                path: 'administrar-tecnicos',
                loadChildren: () => __webpack_require__.e(/*! import() | paginas-administrar-tecnicos-administrar-tecnicos-module */ "paginas-administrar-tecnicos-administrar-tecnicos-module").then(__webpack_require__.bind(null, /*! ../paginas/administrar-tecnicos/administrar-tecnicos.module */ "./src/app/paginas/administrar-tecnicos/administrar-tecnicos.module.ts")).then(m => m.AdministrarTecnicosPageModule)
            },
            {
                path: 'programar-visita',
                loadChildren: () => Promise.all(/*! import() | paginas-programar-visita-programar-visita-module */[__webpack_require__.e("default~paginas-administrar-clientes-ver-cliente-ver-cliente-module~paginas-administrar-visitas-admi~b66acba8"), __webpack_require__.e("paginas-programar-visita-programar-visita-module")]).then(__webpack_require__.bind(null, /*! ../paginas/programar-visita/programar-visita.module */ "./src/app/paginas/programar-visita/programar-visita.module.ts")).then(m => m.ProgramarVisitaPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/menu-principal/administrar-clientes',
        pathMatch: 'full'
    }
];
let MenuPrincipalPageRoutingModule = class MenuPrincipalPageRoutingModule {
};
MenuPrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPrincipalPageRoutingModule);



/***/ }),

/***/ "./src/app/menu-principal/menu-principal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu-principal/menu-principal.module.ts ***!
  \*********************************************************/
/*! exports provided: MenuPrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageModule", function() { return MenuPrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-principal-routing.module */ "./src/app/menu-principal/menu-principal-routing.module.ts");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/menu-principal/menu-principal.page.ts");







let MenuPrincipalPageModule = class MenuPrincipalPageModule {
};
MenuPrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPrincipalPageRoutingModule"]
        ],
        declarations: [_menu_principal_page__WEBPACK_IMPORTED_MODULE_6__["MenuPrincipalPage"]]
    })
], MenuPrincipalPageModule);



/***/ }),

/***/ "./src/app/menu-principal/menu-principal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/menu-principal/menu-principal.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logout {\n  position: absolute;\n  right: 20px;\n  color: white;\n  top: 15px;\n  font-size: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1wcmluY2lwYWwvRTpcXFRyYWJham9cXGNwYVxcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxtZW51LXByaW5jaXBhbFxcbWVudS1wcmluY2lwYWwucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIubG9nb3V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu-principal/menu-principal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/menu-principal/menu-principal.page.ts ***!
  \*******************************************************/
/*! exports provided: MenuPrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPage", function() { return MenuPrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let MenuPrincipalPage = class MenuPrincipalPage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
    }
    logout() {
        this.storage.remove('token');
        this.router.navigate(['/login']);
    }
};
MenuPrincipalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
MenuPrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-principal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-principal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-principal.page.scss */ "./src/app/menu-principal/menu-principal.page.scss")).default]
    })
], MenuPrincipalPage);



/***/ })

}]);
//# sourceMappingURL=menu-principal-menu-principal-module-es2015.js.map