function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-estadisticas-estadisticas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estadisticas/estadisticas.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estadisticas/estadisticas.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasEstadisticasEstadisticasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-col class=\"ion-no-padding\" size=\"1.2\">\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-label position=\"floating\">Desde</ion-label>\n          <ion-datetime min=\"2021-02-15\"  display-format=\"DD.MM.YYYY\" [(ngModel)]=\"fecha_desde\" (ionChange)=\"revisarMenor()\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.2\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Hasta</ion-label>\n          <ion-datetime min=\"2021-02-15\" display-format=\"DD.MM.YYYY\" [(ngModel)]=\"fecha_hasta\" (ionChange)=\"revisarMayor()\"></ion-datetime> \n        </ion-item>     \n      </ion-col>\n      <ion-col size=\"0.7\" class=\"filter-col\">\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">UV</ion-label>\n        <ion-checkbox [(ngModel)]=\"filtro_uv\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"1.25\" class=\"filter-col\">\n        <ion-label class=\"ion-text-wrap\" style=\"padding-right: 5px;\">Desratizacion</ion-label>\n        <ion-checkbox [(ngModel)]=\"filtro_desratizacion\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item>\n          <ion-label position=\"floating\">Cliente</ion-label>\n          <ion-select [interfaceOptions]=\"interfaceOption\" (ionChange)=\"changeCliente()\" [(ngModel)]=\"clientesElegidos\" multiple>\n            <ion-select-option *ngFor=\"let cliente of clientes\" [value]=\"cliente\">{{cliente.razon_social_cliente}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item *ngIf=\"clientesElegidos.length == 1\">\n          <ion-label position=\"floating\">Sucursal</ion-label>\n          <ion-select [interfaceOptions]=\"interfaceOption\" (ionChange)=\"changeSucursal()\" [(ngModel)]=\"sucursalesElegidas\" multiple>\n            <ion-select-option *ngFor=\"let sucursal of sucursales\" [value]=\"sucursal\">{{sucursal.razon_social_sucursal}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item *ngIf=\"sucursalesElegidas.length == 1\">\n          <ion-label position=\"floating\">Sector</ion-label>\n          <ion-select [interfaceOptions]=\"interfaceOption\" (ionChange)=\"changeSector(sectoresElegidos[0].id_equipo_grupo)\" [(ngModel)]=\"sectoresElegidos\" multiple>\n            <ion-select-option *ngFor=\"let sector of sectores\" [value]=\"sector\">{{sector.nombre_equipo_grupo}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1.65\">\n        <ion-item *ngIf=\"sectoresElegidos.length == 1\">\n          <ion-label position=\"floating\">Equipo</ion-label>\n          <ion-select (ionChange)=\"equiposChange()\" [interfaceOptions]=\"interfaceOption\" [(ngModel)]=\"equiposElegidos\" multiple>\n            <ion-select-option *ngFor=\"let equipo of equipos\" [value]=\"equipo\">{{equipo.nombre_equipo}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"0.8\">\n        <ion-button (click)=\"buscar()\" expand=\"block\"  shape=\"round\">\n          Buscar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"0.3\" style=\"text-align: center;\">\n        <ion-icon (click)=\"borrarFiltros()\"  style=\"font-size: 24px; cursor: pointer;\" name=\"close\"></ion-icon>\n      </ion-col>\n    </ion-item>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"filtro_desratizacion\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"ion-no-padding\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">Productos</ion-label>\n          <ion-select (ionChange)=\"productosChange()\"  [interfaceOptions]=\"interfaceOption\" [(ngModel)]=\"productosFiltrados\" multiple>\n            <ion-select-option *ngFor=\"let producto of productos\" [value]=\"producto.id_producto\">{{producto.nombre_producto}} - {{producto.tipo_producto}}</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-no-padding\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">Campos Grafico de barra</ion-label>\n          <ion-select (ionChange)=\"graficoBarrasChange()\"  [interfaceOptions]=\"interfaceOption\" [(ngModel)]=\"graficoBarra\" multiple>\n            <ion-select-option [value]=\"'Capturas'\">Capturas</ion-select-option>\n            <ion-select-option [value]=\"'Consumo'\">Consumo</ion-select-option>\n            <ion-select-option [value]=\"'Faltante'\">Faltante</ion-select-option>\n            <ion-select-option [value]=\"'Intacto'\">Intacto</ion-select-option>\n            <ion-select-option [value]=\"'malEstado'\">Mal estado</ion-select-option>\n            <ion-select-option [value]=\"'Nuevo'\">Nuevo</ion-select-option>\n            <ion-select-option [value]=\"'Tapado'\">Tapado</ion-select-option>\n            <ion-select-option [value]=\"'all'\">Todos</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  #content>\n  <div *ngFor=\"let equipos of respuestas\">\n    <ion-item *ngIf=\"equipos[0]?.length == 3\">\n      <ion-col size=\"1\"><b>Fecha</b></ion-col>\n      <ion-col size=\"1.5\"><b>Cliente</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sucursal</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sector</b></ion-col>\n      <ion-col size=\"1.5\"><b>Workstation</b></ion-col>\n      <ion-col size=\"1.5\"><b>Producto</b></ion-col>\n      <ion-col size=\"1.5\"><b>Estado Puesto</b></ion-col>\n      <ion-col size=\"1.5\"><b>Estado cebo</b></ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"equipos[0]?.length == 4\">\n      <ion-col size=\"1\"><b>Fecha</b></ion-col>\n      <ion-col size=\"1.5\"><b>Cliente</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sucursal</b></ion-col>\n      <ion-col size=\"1.5\"><b>Sector</b></ion-col>\n      <ion-col size=\"1.5\"><b>Workstation</b></ion-col>\n      <ion-col size=\"1.25\"><b>Observacion</b></ion-col>\n      <ion-col size=\"1.25\"><b>Conteo / Saturacion</b></ion-col>\n      <ion-col size=\"1.25\"><b>Encendido</b></ion-col>\n      <ion-col size=\"1.25\"><b>Medicion UV</b></ion-col>\n    </ion-item>\n    <div *ngFor=\"let formularios of equipos\">\n      <ion-item *ngIf=\"formularios.length == 3\">\n        <ion-col size=\"1\">\n          {{formularios[0]?.fecha_visita | date:\"dd/MM/yyyy\"}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.cliente?.razon_social_cliente}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sucursal?.razon_social_sucursal}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sector?.nombre_equipo_grupo}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.nombre_equipo}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.nombre_producto}} - {{formularios[0]?.tipo_producto}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[1]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[2]?.respuesta}}\n        </ion-col>\n      </ion-item>\n      <ion-item *ngIf=\"formularios.length == 4\">\n        <ion-col size=\"1\">\n          {{formularios[0]?.fecha_visita | date:\"dd/MM/yyyy\"}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.cliente?.razon_social_cliente}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sucursal?.razon_social_sucursal}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.sector?.nombre_equipo_grupo}}\n        </ion-col>\n        <ion-col size=\"1.5\">\n          {{formularios[0]?.nombre_equipo}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[0]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[1]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[2]?.respuesta}}\n        </ion-col>\n        <ion-col size=\"1.25\">\n          {{formularios[3]?.respuesta}}\n        </ion-col>\n      </ion-item>\n    </div>\n  </div>\n\n  <ion-card *ngIf=\"respuestas.length > 0\">\n    <ion-card-header color=\"primary\">\n      <ion-card-title>Resumen</ion-card-title>\n    </ion-card-header>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Captura:</b> {{contadores.capturas}}</ion-label>\n      </ion-col>\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Consumo:</b> {{contadores.consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Intactos:</b> {{contadores.intacto}}</ion-label>\n      </ion-col>\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Nuevos:</b> {{contadores.nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Tapados:</b> {{contadores.tapado}}</ion-label>\n      </ion-col>\n      <ion-col style=\"padding: 0;\" size=\"6\">\n        <ion-label><b>Total Faltantes:</b> {{contadores.faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[1]\">\n      <ion-col style=\"padding: 0;\" size=\"12\">\n        <ion-label><b>Total Mal estado:</b> {{contadores.malEstado}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"filtroUtilizado[0]\">\n      <ion-label ><b>Promedio Conteo/Saturacion UV:</b> {{promedioUV?promedioUV:'No hay mediciones'}}</ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-label><b>Pegamento - Pegamento:</b></ion-label>\n    </ion-item >\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Captura: {{productos[0].captura}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Consumo: {{productos[0].consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Intactos: {{productos[0].intacto}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Nuevos {{productos[0].nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Tapados: {{productos[0].tapado}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Faltantes: {{productos[0].faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[0].id_producto) || productosUtilizados?.length == 0)\"> \n      <ion-col size=\"12\">\n        <ion-label>Mal estado: {{productos[0].malEstado}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-label><b>Parafinado - Floucoumafen:</b></ion-label>\n    </ion-item >\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Captura: {{productos[1].captura}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Consumo: {{productos[1].consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Intactos: {{productos[1].intacto}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Nuevos {{productos[1].nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Tapados: {{productos[1].tapado}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Faltantes: {{productos[1].faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[1].id_producto) || productosUtilizados?.length == 0)\"> \n      <ion-col size=\"12\">\n        <ion-label>Mal estado: {{productos[1].malEstado}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-label><b>Parafinado - Bromadiolone:</b></ion-label>\n    </ion-item >\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Captura: {{productos[2].captura}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Consumo: {{productos[2].consumo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Intactos: {{productos[2].intacto}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Nuevos {{productos[2].nuevo}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\">\n      <ion-col size=\"6\">\n        <ion-label>Tapados: {{productos[2].tapado}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>Faltantes: {{productos[2].faltante}}</ion-label>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"(filtroUtilizado[1]) && (productosUtilizados?.includes(productos[2].id_producto) || productosUtilizados?.length == 0)\"> \n      <ion-col size=\"12\">\n        <ion-label>Mal estado: {{productos[2].malEstado}}</ion-label>\n      </ion-col>\n    </ion-item> \n  </ion-card>\n  <ion-button *ngIf=\"respuestas.length > 0\" (click)=\"verPdf()\" expand=\"block\"  shape=\"round\">\n    Ver PDF\n  </ion-button>\n</ion-content>\n\n<ion-fab *ngIf=\"respuestas.length > 0\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"botonBajar()\">\n    <ion-icon name=\"chevron-down-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n";
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.apiDir);
                    _context.next = 3;
                    return this.http.get(this.apiDir + '/visitas/id/' + id, this.requestOptions);

                  case 3:
                    data = _context.sent;
                    console.log(this.apiDir + '/visitas/id/' + id, this.requestOptions);
                    return _context.abrupt("return", data.toPromise());

                  case 6:
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
          var _this2 = this;

          var bodyP = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          console.log(this.apiDir);
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
  },

  /***/
  "./src/app/paginas/estadisticas/estadisticas-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/paginas/estadisticas/estadisticas-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: EstadisticasPageRoutingModule */

  /***/
  function srcAppPaginasEstadisticasEstadisticasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadisticasPageRoutingModule", function () {
      return EstadisticasPageRoutingModule;
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


    var _estadisticas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./estadisticas.page */
    "./src/app/paginas/estadisticas/estadisticas.page.ts");

    var routes = [{
      path: '',
      component: _estadisticas_page__WEBPACK_IMPORTED_MODULE_3__["EstadisticasPage"]
    }];

    var EstadisticasPageRoutingModule = function EstadisticasPageRoutingModule() {
      _classCallCheck(this, EstadisticasPageRoutingModule);
    };

    EstadisticasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EstadisticasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paginas/estadisticas/estadisticas.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/paginas/estadisticas/estadisticas.module.ts ***!
    \*************************************************************/

  /*! exports provided: EstadisticasPageModule */

  /***/
  function srcAppPaginasEstadisticasEstadisticasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadisticasPageModule", function () {
      return EstadisticasPageModule;
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


    var _estadisticas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./estadisticas-routing.module */
    "./src/app/paginas/estadisticas/estadisticas-routing.module.ts");
    /* harmony import */


    var _estadisticas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./estadisticas.page */
    "./src/app/paginas/estadisticas/estadisticas.page.ts");

    var EstadisticasPageModule = function EstadisticasPageModule() {
      _classCallCheck(this, EstadisticasPageModule);
    };

    EstadisticasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _estadisticas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstadisticasPageRoutingModule"]],
      declarations: [_estadisticas_page__WEBPACK_IMPORTED_MODULE_6__["EstadisticasPage"]]
    })], EstadisticasPageModule);
    /***/
  },

  /***/
  "./src/app/paginas/estadisticas/estadisticas.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/paginas/estadisticas/estadisticas.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasEstadisticasEstadisticasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter-col {\n  display: flex;\n  align-items: center;\n}\n\nion-checkbox {\n  min-width: 18px;\n}\n\nion-card {\n  margin-bottom: 30px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9lc3RhZGlzdGljYXMvRDpcXFJlcG9zaXRvcmlvc1xcZnJvbnRlbmRfY3BhX2FkbWluL3NyY1xcYXBwXFxwYWdpbmFzXFxlc3RhZGlzdGljYXNcXGVzdGFkaXN0aWNhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvZXN0YWRpc3RpY2FzL2VzdGFkaXN0aWNhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZXN0YWRpc3RpY2FzL2VzdGFkaXN0aWNhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWNvbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1jaGVja2JveHtcclxuICAgIG1pbi13aWR0aDogMThweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSIsIi5maWx0ZXItY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgbWluLXdpZHRoOiAxOHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/estadisticas/estadisticas.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/paginas/estadisticas/estadisticas.page.ts ***!
    \***********************************************************/

  /*! exports provided: EstadisticasPage */

  /***/
  function srcAppPaginasEstadisticasEstadisticasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadisticasPage", function () {
      return EstadisticasPage;
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


    var _administrar_clientes_servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../administrar-clientes/servicios/api-clientes.service */
    "./src/app/paginas/administrar-clientes/servicios/api-clientes.service.ts");
    /* harmony import */


    var _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../programar-visita/servicios/api-visitas.service */
    "./src/app/paginas/programar-visita/servicios/api-visitas.service.ts");

    var EstadisticasPage = /*#__PURE__*/function () {
      function EstadisticasPage(api_clientes, api_visitas, loadingController, alertController) {
        var _this3 = this;

        _classCallCheck(this, EstadisticasPage);

        this.api_clientes = api_clientes;
        this.api_visitas = api_visitas;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.clientesElegidos = [];
        this.sucursalesElegidas = [];
        this.sectoresElegidos = [];
        this.equiposElegidos = [];
        this.filtro_desratizacion = true;
        this.filtro_uv = true;
        this.respuestas = [];
        this.graficoBarra = [];
        this.contadores = {
          capturas: 0,
          consumo: 0,
          intacto: 0,
          nuevo: 0,
          tapado: 0,
          faltante: 0,
          malEstado: 0
        };
        this.productosFiltrados = [];
        this.productosUtilizados = [];
        this.interfaceOption = {
          cssClass: 'wide-alert',
          buttons: {
            text: 'Todos',
            handler: function handler() {
              _this3.sucursalesElegidas == _this3.sucursales;
            }
          }
        };
        this.url = "http://192.168.0.71:3000/public/pdfs/informe .pdf";
      }

      _createClass(EstadisticasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.actualizar_informacion();
          this.api_clientes.listado_productosServicio(20).subscribe(function (data) {
            _this4.productos = data;
            _this4.productos = _this4.productos.result;
            console.log(_this4.productos);
          });
          var dia = (new Date().getDate() >= 10 ? new Date().getDate() : '0' + new Date().getDate().toString()) + 'T00:00:00-03:00';
          var mes1 = new Date().getMonth();
          var mes2 = new Date().getMonth() + 1;
          var year = new Date().getFullYear().toString();

          if (mes1 == 0) {
            year = new Date().getFullYear();
            this.fecha_desde = (year - 1).toString() + '-' + '12' + '-' + dia;
            this.fecha_hasta = year.toString() + '-' + '01' + '-' + dia;
          } else {
            if (mes1 <= 9) {
              mes1 = '0' + mes1.toString();
            } else {
              mes1 = mes1.toString();
            }

            if (mes2 <= 9) {
              mes2 = '0' + mes2.toString();
            } else {
              mes2 = mes2.toString();
            }

            this.fecha_desde = year + '-' + mes1 + '-' + dia;
            this.fecha_hasta = year + '-' + mes2 + '-' + dia;
          }
        }
      }, {
        key: "revisarMenor",
        value: function revisarMenor() {
          if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
            this.fecha_hasta = this.fecha_desde;
          }
        }
      }, {
        key: "revisarMayor",
        value: function revisarMayor() {
          if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
            this.fecha_desde = this.fecha_hasta;
          }
        }
      }, {
        key: "botonBajar",
        value: function botonBajar() {
          this.content.scrollToBottom(300);
        }
      }, {
        key: "actualizar_informacion",
        value: function actualizar_informacion() {
          var _this5 = this;

          this.api_clientes.listado_clientes().subscribe(function (data) {
            _this5.clientes = data;
            _this5.clientes = _this5.clientes.result;

            _this5.clientes.sort(_this5.ordenarClientes);
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
        key: "changeCliente",
        value: function changeCliente() {
          this.sucursalesElegidas = [];
          this.sectoresElegidos = [];
          this.equiposElegidos = [];

          if (this.clientesElegidos.includes('all')) {
            this.clientesElegidos = this.clientes;
          }

          console.log(this.clientesElegidos);

          if (this.clientesElegidos.length == 1) {
            this.sucursalesCliente(this.clientesElegidos[0].id_cliente);
          }
        }
      }, {
        key: "sucursalesCliente",
        value: function sucursalesCliente(id_cliente) {
          var _this6 = this;

          this.api_visitas.informacion_cliente(id_cliente).subscribe(function (data) {
            _this6.sucursales = data;
            _this6.sucursales = _this6.sucursales.result.sucursales.datosSucursal;

            _this6.sucursales.sort(_this6.ordenarSucursales);

            if (_this6.sucursales.length == 1) {
              _this6.sucursalesElegidas = [_this6.sucursales[0]];
            }

            console.log(_this6.sucursales);
          }), function (error) {
            console.log(error);
          };
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
        key: "changeSucursal",
        value: function changeSucursal() {
          this.sectoresElegidos = [];
          this.equiposElegidos = [];

          if (this.sucursalesElegidas.includes('all')) {
            this.sucursalesElegidas = this.sucursales;
          }

          this.grupoWorkstations();
        }
      }, {
        key: "grupoWorkstations",
        value: function grupoWorkstations() {
          var _this7 = this;

          this.api_clientes.listado_grupoWorkstations(this.sucursalesElegidas[0].id_sucursal).subscribe(function (data) {
            _this7.sectores = data;
            _this7.sectores = _this7.sectores.result;
            _this7.allEquipos = JSON.parse(JSON.stringify(_this7.sectores));
            console.log(_this7.allEquipos);
            var aux = [];

            for (var index = 0; index < _this7.allEquipos.length; index++) {
              if (_this7.sectores.find(function (sector) {
                return !aux.find(function (auxSector) {
                  return auxSector.nombre_equipo_grupo == sector.nombre_equipo_grupo;
                });
              })) {
                aux.push(_this7.sectores.find(function (sector) {
                  return !aux.find(function (auxSector) {
                    return auxSector.nombre_equipo_grupo == sector.nombre_equipo_grupo;
                  });
                }));
              }
            }

            _this7.sectores = aux;
            console.log(_this7.sectores);
          });
        }
      }, {
        key: "changeSector",
        value: function changeSector(id_grupo) {
          console.log(id_grupo);
          this.equiposElegidos = [];
          this.equipos = this.allEquipos.filter(function (equipo) {
            return equipo.id_equipo_grupo == id_grupo;
          });

          if (this.sectoresElegidos.includes('all')) {
            this.sectoresElegidos = this.sectores;
          }

          console.warn(this.equipos);
        }
      }, {
        key: "equiposChange",
        value: function equiposChange() {
          if (this.equiposElegidos.includes('all')) {
            this.equiposElegidos = this.equipos;
          }

          console.log(this.equiposElegidos);
        }
      }, {
        key: "productosChange",
        value: function productosChange() {
          if (this.productosFiltrados.includes('all')) {
            this.productosFiltrados = this.productos.map(function (producto) {
              return producto.id_producto;
            });
          }

          console.log(this.productosFiltrados);
        }
      }, {
        key: "graficoBarrasChange",
        value: function graficoBarrasChange() {
          if (this.graficoBarra.includes('all')) {
            this.graficoBarra = ['Captura', 'Consumido', 'Faltante', 'Intacto', 'Mal estado', 'Nuevo', 'Tapado'];
          }

          console.log(this.graficoBarra);
        }
      }, {
        key: "buscar",
        value: function buscar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var alert, _alert, loading, index, producto, filtro;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.clientesElegidos.length == 0)) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 3;
                    return this.alertController.create({
                      header: 'Error',
                      subHeader: 'No ha seleccionado ningun cliente',
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context3.sent;
                    _context3.next = 6;
                    return alert.present();

                  case 6:
                    _context3.next = 27;
                    break;

                  case 8:
                    if (!(!this.filtro_uv && !this.filtro_desratizacion)) {
                      _context3.next = 16;
                      break;
                    }

                    _context3.next = 11;
                    return this.alertController.create({
                      header: 'Error',
                      subHeader: 'No ha seleccionado ningun servicio',
                      buttons: ['OK']
                    });

                  case 11:
                    _alert = _context3.sent;
                    _context3.next = 14;
                    return _alert.present();

                  case 14:
                    _context3.next = 27;
                    break;

                  case 16:
                    _context3.next = 18;
                    return this.loadingController.create({
                      message: 'Cargando estadisticas',
                      spinner: 'bubbles'
                    });

                  case 18:
                    loading = _context3.sent;
                    _context3.next = 21;
                    return loading.present();

                  case 21:
                    this.filtroUtilizado = [this.filtro_uv, this.filtro_desratizacion];
                    this.productosUtilizados = JSON.parse(JSON.stringify(this.productosFiltrados));
                    this.respuestas = [];

                    for (index = 0; index < this.productos.length; index++) {
                      producto = this.productos[index];
                      producto.captura = 0;
                      producto.consumo = 0;
                      producto.faltante = 0;
                      producto.intacto = 0;
                      producto.malEstado = 0;
                      producto.nuevo = 0;
                      producto.tapado = 0;
                    }

                    filtro = [this.fecha_desde, this.fecha_hasta, this.filtro_uv, this.filtro_desratizacion, this.clientesElegidos, this.sucursalesElegidas, this.sectoresElegidos, this.equiposElegidos, this.productosUtilizados, this.productos, this.graficoBarra];
                    this.api_clientes.estadisticas(filtro).subscribe(function (datos) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var aux, contadorUV, _index, uv, _alert2;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                aux = datos;
                                aux = aux.respuestas;
                                console.log(datos);
                                window.open(aux.url, '_blank');
                                this.contadores = aux.contadores;
                                console.log(this.contadores);
                                this.respuestas = aux.respuesta;
                                this.productos = aux.productos;
                                this.promedioUV = 0;
                                contadorUV = 0;

                                for (_index = 0; _index < aux.equiposUV.length; _index++) {
                                  uv = aux.equiposUV[_index];

                                  if (uv) {
                                    this.promedioUV = this.promedioUV + uv;
                                    contadorUV++;
                                  }
                                }

                                if (contadorUV > 0) {
                                  this.promedioUV = this.promedioUV / contadorUV;
                                }

                                loading.dismiss();

                                if (!(this.respuestas.length == 0)) {
                                  _context2.next = 19;
                                  break;
                                }

                                _context2.next = 16;
                                return this.alertController.create({
                                  header: 'Error',
                                  message: 'No se encontro ningun dato sobre los filtros aplicados',
                                  buttons: ['OK']
                                });

                              case 16:
                                _alert2 = _context2.sent;
                                _context2.next = 19;
                                return _alert2.present();

                              case 19:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 27:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "borrarFiltros",
        value: function borrarFiltros() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this9 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      subHeader: '¿Estas seguro que deseeas limpiar los filtros?',
                      buttons: ["Cancelar", {
                        text: 'Si',
                        handler: function handler() {
                          _this9.clientesElegidos = [];
                          _this9.sucursalesElegidas = [];
                          _this9.sectoresElegidos = [];
                          _this9.equiposElegidos = [];
                          _this9.productosFiltrados = [];
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
        key: "verPdf",
        value: function verPdf() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    // var params = {
                    //   respuestas: this.respuestas,
                    //   contadores: this.contadores,
                    //   productos: this.productos
                    // }
                    // const loading = await this.loadingController.create({
                    //   message: 'Cargando',
                    // });
                    // await loading.present();
                    // console.log(params)
                    // this.api_visitas.pdfEstadisticas(params).subscribe((resp:any) => {
                    //   console.log(resp)
                    //   loading.dismiss();
                    //   window.open(resp.url,'_blank')
                    // })
                    window.open(this.url, '_blank');

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return EstadisticasPage;
    }();

    EstadisticasPage.ctorParameters = function () {
      return [{
        type: _administrar_clientes_servicios_api_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientesService"]
      }, {
        type: _programar_visita_servicios_api_visitas_service__WEBPACK_IMPORTED_MODULE_4__["ApiVisitasService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content')], EstadisticasPage.prototype, "content", void 0);
    EstadisticasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estadisticas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./estadisticas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estadisticas/estadisticas.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./estadisticas.page.scss */
      "./src/app/paginas/estadisticas/estadisticas.page.scss"))["default"]]
    })], EstadisticasPage);
    /***/
  }
}]);
//# sourceMappingURL=paginas-estadisticas-estadisticas-module-es5.js.map