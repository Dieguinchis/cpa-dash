import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApiClientesService } from '../administrar-clientes/servicios/api-clientes.service';
import { ApiVisitasService } from '../programar-visita/servicios/api-visitas.service';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})


export class EstadisticasPage implements OnInit {

  @ViewChild('content') private content: any;

  public fecha_desde;
  public fecha_hasta;
  public clientes;
  public clientesElegidos = [];
  public sucursales;
  public sucursalesElegidas = [];
  public sectores;
  public sectoresElegidos = [];
  public equipos;
  public allEquipos;
  public equiposElegidos = [];
  public filtro_desratizacion = true;
  public filtro_uv = true;
  public respuestas = [];
  public productos;
  public graficoBarra = [];
  public contadores = {
    capturas: 0,
    consumo: 0,
    intacto: 0,
    nuevo: 0,
    tapado: 0,
    faltante: 0,
    malEstado: 0
  };
  public promedioUV;
  public productosFiltrados = [];
  public productosUtilizados = [];
  public filtroUtilizado;
  interfaceOption: any = {
    cssClass: 'wide-alert',
    buttons: {
      text: 'Todos',
      handler: () => {
        this.sucursalesElegidas == this.sucursales;
      }
    }
  };
  public url = environment.api.base_url + "public/pdfs/informe .pdf"

  constructor(
    public api_clientes: ApiClientesService,
    public api_visitas: ApiVisitasService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.actualizar_informacion();
    this.api_clientes.listado_productosServicio(20).subscribe(data => {
      this.productos = data;
      this.productos = this.productos.result;
      console.log(this.productos);
    })
    var dia = ((new Date().getDate() >= 10) ? new Date().getDate() : '0' + new Date().getDate().toString()) + 'T00:00:00-03:00'
    var mes1: any = (new Date().getMonth())
    var mes2: any = (new Date().getMonth() + 1)
    var year: any = new Date().getFullYear().toString();
    if (mes1 == 0) {
      year = new Date().getFullYear();
      this.fecha_desde = (year - 1).toString() + '-' + '12' + '-' + dia;
      this.fecha_hasta = year.toString() + '-' + '01' + '-' + dia;
    } else {
      if (mes1 <= 9) {
        mes1 = '0' + mes1.toString()
      } else {
        mes1 = mes1.toString()
      }
      if (mes2 <= 9) {
        mes2 = '0' + mes2.toString()
      } else {
        mes2 = mes2.toString()
      }
      this.fecha_desde = year + '-' + mes1 + '-' + dia;
      this.fecha_hasta = year + '-' + mes2 + '-' + dia;
    }
  }

  revisarMenor() {
    if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
      this.fecha_hasta = this.fecha_desde;
    }
  }

  revisarMayor() {
    if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()) {
      this.fecha_desde = this.fecha_hasta;
    }
  }

  botonBajar() {
    this.content.scrollToBottom(300);
  }

  actualizar_informacion() {
    this.api_clientes.listado_clientes().subscribe(data => {
      this.clientes = data;
      this.clientes = this.clientes.result;
      this.clientes.sort(this.ordenarClientes);
    }),
      (error => {
        console.log(error);
      })
  }

  ordenarClientes(a, b) {
    if (a.razon_social_cliente.toLowerCase() > b.razon_social_cliente.toLowerCase()) {
      return 1;
    }
    if (a.razon_social_cliente.toLowerCase() < b.razon_social_cliente.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  changeCliente() {
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

  sucursalesCliente(id_cliente) {
    this.api_visitas.informacion_cliente(id_cliente).subscribe(data => {
      this.sucursales = data;
      this.sucursales = this.sucursales.result.sucursales.datosSucursal;
      this.sucursales.sort(this.ordenarSucursales);
      if (this.sucursales.length == 1) {
        this.sucursalesElegidas = [this.sucursales[0]];
      }
      console.log(this.sucursales);
    }), (error => {
      console.log(error);
    })
  }

  ordenarSucursales(a, b) {
    if (a.razon_social_sucursal.toLowerCase() > b.razon_social_sucursal.toLowerCase()) {
      return 1;
    }
    if (a.razon_social_sucursal.toLowerCase() < b.razon_social_sucursal.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  changeSucursal() {
    this.sectoresElegidos = [];
    this.equiposElegidos = [];
    if (this.sucursalesElegidas.includes('all')) {
      this.sucursalesElegidas = this.sucursales;
    }
    this.grupoWorkstations();
  }

  grupoWorkstations() {
    this.api_clientes.listado_grupoWorkstations(this.sucursalesElegidas[0].id_sucursal).subscribe(data => {
      this.sectores = data;
      this.sectores = this.sectores.result;
      this.allEquipos = JSON.parse(JSON.stringify(this.sectores));
      console.log(this.allEquipos);
      var aux = [];

      for (let index = 0; index < this.allEquipos.length; index++) {
        if (this.sectores.find(sector => !aux.find(auxSector => auxSector.nombre_equipo_grupo == sector.nombre_equipo_grupo))) {
          aux.push(this.sectores.find(sector => !aux.find(auxSector => auxSector.nombre_equipo_grupo == sector.nombre_equipo_grupo)));
        }
      }

      this.sectores = aux;
      console.log(this.sectores);
    })
  }

  changeSector(id_grupo) {
    console.log(id_grupo);
    this.equiposElegidos = [];
    this.equipos = this.allEquipos.filter(equipo => equipo.id_equipo_grupo == id_grupo);
    if (this.sectoresElegidos.includes('all')) {
      this.sectoresElegidos = this.sectores;
    }
    console.warn(this.equipos);
  }

  equiposChange() {
    if (this.equiposElegidos.includes('all')) {
      this.equiposElegidos = this.equipos;
    }
    console.log(this.equiposElegidos);
  }

  productosChange() {
    if (this.productosFiltrados.includes('all')) {
      this.productosFiltrados = this.productos.map(producto => producto.id_producto);
    }
    console.log(this.productosFiltrados);
  }

  graficoBarrasChange() {
    if (this.graficoBarra.includes('all')) {
      this.graficoBarra = ['Captura', 'Consumido', 'Faltante', 'Intacto', 'Mal estado', 'Nuevo', 'Tapado']
    }
    console.log(this.graficoBarra);
  }

  async buscar() {

    if (this.clientesElegidos.length == 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'No ha seleccionado ningun cliente',
        buttons: ['OK']
      });

      await alert.present();

    } else {
      if (!this.filtro_uv && !this.filtro_desratizacion) {
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'No ha seleccionado ningun servicio',
          buttons: ['OK']
        });

        await alert.present();
      } else {
        const loading = await this.loadingController.create({
          message: 'Cargando estadisticas',
          spinner: 'bubbles'
        });
        await loading.present();
        this.filtroUtilizado = [this.filtro_uv, this.filtro_desratizacion];
        this.productosUtilizados = JSON.parse(JSON.stringify(this.productosFiltrados));
        this.respuestas = [];
        for (let index = 0; index < this.productos.length; index++) {
          const producto = this.productos[index];
          producto.captura = 0;
          producto.consumo = 0;
          producto.faltante = 0;
          producto.intacto = 0;
          producto.malEstado = 0;
          producto.nuevo = 0;
          producto.tapado = 0;
        }
        var filtro = [this.fecha_desde, this.fecha_hasta, this.filtro_uv, this.filtro_desratizacion, this.clientesElegidos, this.sucursalesElegidas, this.sectoresElegidos, this.equiposElegidos, this.productosUtilizados, this.productos, this.graficoBarra];
        console.log('Filtro que se envía:', filtro);
        this.api_clientes.estadisticas(filtro).subscribe(
          async (datos) => {
            console.log('Respuesta completa de estadísticas:', datos);
            loading.dismiss();
            var aux;
            aux = datos;
            aux = aux.respuestas;
            console.log(datos);
            window.open(aux.url, '_blank')
            this.contadores = aux.contadores;
            console.log(this.contadores)
            this.respuestas = aux.respuesta || [];
            this.productos = aux.productos || [];
            this.promedioUV = 0;
            var contadorUV = 0;

            if (aux.equiposUV && aux.equiposUV.length) {
              for (let index = 0; index < aux.equiposUV.length; index++) {
                const uv = aux.equiposUV[index];
                if (uv) {
                  this.promedioUV += uv;
                  contadorUV++;
                }
              }
            }

            if (contadorUV > 0) {
              this.promedioUV = this.promedioUV / contadorUV;
            }

            loading.dismiss();
            if (this.respuestas.length == 0) {
              const alert = await this.alertController.create({
                header: 'Error',
                message: 'No se encontro ningun dato sobre los filtros aplicados',
                buttons: ['OK']
              });

              await alert.present();
            }

          },
          (error) => {
            console.error('Error en API estadísticas:', error);
            loading.dismiss();
          });
      }
    }
  }

  async borrarFiltros() {
    const alert = await this.alertController.create({
      subHeader: '¿Estas seguro que deseeas limpiar los filtros?',
      buttons: [
        "Cancelar",
        {
          text: 'Si',
          handler: () => {
            this.clientesElegidos = [];
            this.sucursalesElegidas = [];
            this.sectoresElegidos = [];
            this.equiposElegidos = [];
            this.productosFiltrados = [];
          }
        }
      ]
    });

    await alert.present();
  }

  async verPdf() {
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
    window.open(this.url, '_blank')

  }
}
