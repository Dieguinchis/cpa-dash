import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
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
  public capturas;
  public consumo;
  public promedioUV;
  public productosFiltrados = [];
  public productosUtilizados = [];
  public filtroUtilizado;
  interfaceOption: any = {
    cssClass: 'wide-alert',
    buttons:{
      text: 'Todos',
      handler: () => {
        this.sucursalesElegidas == this.sucursales;
      }
    }
  };

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
    var dia = (new Date().getDate()).toString() + 'T00:00:00-03:00'
    var mes1 :any = (new Date().getMonth())
    var mes2 :any = (new Date().getMonth() + 1)
    var year = new Date().getFullYear().toString();
    if (mes1 <= 9) {
      mes1 = '0' + mes1.toString()
    }else{
      mes1 = mes1.toString()
    }
    if (mes2 <= 9) {
      mes2 = '0' + mes2.toString()
    }else{
      mes2 = mes2.toString()
    }
    this.fecha_desde = year + '-' + mes1 + '-' + dia;
    this.fecha_hasta = year + '-' + mes2 + '-' + dia;
  }

  revisarMenor(){
    if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()){
      this.fecha_hasta = this.fecha_desde;
    }
  }

  revisarMayor(){
    if (new Date(this.fecha_desde).valueOf() > new Date(this.fecha_hasta).valueOf()){
      this.fecha_desde = this.fecha_hasta;
    }
  }

  botonBajar(){
    this.content.scrollToBottom(300);
  }

  actualizar_informacion(){
    this.api_clientes.listado_clientes().subscribe(data => {
      this.clientes = data;
      this.clientes = this.clientes.result;
      this.clientes.sort(this.ordenarClientes);
    }),
    (error => {
      console.log(error);
    })
  }

  ordenarClientes(a,b){
    if (a.razon_social_cliente.toLowerCase() > b.razon_social_cliente.toLowerCase()) {
      return 1;
    }
    if (a.razon_social_cliente.toLowerCase() < b.razon_social_cliente.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  changeCliente(){
    this.sucursalesElegidas = [];
    this.sectoresElegidos = [];
    this.equiposElegidos = [];
    if (this.clientesElegidos.includes('all')){
      this.clientesElegidos = this.clientes;
    }
    console.log(this.clientesElegidos);
    if (this.clientesElegidos.length == 1) {
      this.sucursalesCliente(this.clientesElegidos[0].id_cliente); 
    }
  }

  sucursalesCliente(id_cliente){
    this.api_visitas.informacion_cliente(id_cliente).subscribe(data => {
      this.sucursales = data;
      this.sucursales = this.sucursales.result.sucursales.datosSucursal;
      this.sucursales.sort(this.ordenarSucursales);
      if (this.sucursales.length ==  1){
        this.sucursalesElegidas = [this.sucursales[0]];
      }
      console.log(this.sucursales);
    }), (error => {
      console.log(error);
    })
  }

  ordenarSucursales(a,b){
    if (a.razon_social_sucursal.toLowerCase() > b.razon_social_sucursal.toLowerCase()) {
      return 1;
    }
    if (a.razon_social_sucursal.toLowerCase() < b.razon_social_sucursal.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  changeSucursal(){
    this.sectoresElegidos = [];
    this.equiposElegidos = [];
    if (this.sucursalesElegidas.includes('all')){
      this.sucursalesElegidas = this.sucursales;
    }
    this.grupoWorkstations();
  }

  grupoWorkstations(){
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

  changeSector(id_grupo){
    console.log(id_grupo);
    this.equiposElegidos = [];
    this.equipos = this.allEquipos.filter(equipo => equipo.id_equipo_grupo == id_grupo);
    if (this.sectoresElegidos.includes('all')){
      this.sectoresElegidos = this.sectores;
    }
    console.warn(this.equipos);
  }

  equiposChange(){
    if (this.equiposElegidos.includes('all')){
      this.equiposElegidos = this.equipos;
    }
    console.log(this.equiposElegidos);
  }

  productosChange(){
    if (this.productosFiltrados.includes('all')){
      this.productosFiltrados = this.productos.map(producto => producto.id_producto);
    }
    console.log(this.productosFiltrados);
  }

  async buscar(){

    if (this.clientesElegidos.length == 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'No ha seleccionado ningun cliente',
        buttons: ['OK']
      });
    
      await alert.present();

    }else{
      if (!this.filtro_uv && !this.filtro_desratizacion) {
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'No ha seleccionado ningun servicio',
          buttons: ['OK']
        });
      
        await alert.present();
      }else{
        const loading = await this.loadingController.create({
          message: 'Cargando estadisticas',
          spinner: 'bubbles'
        });
        await loading.present();
        this.filtroUtilizado = [this.filtro_uv, this.filtro_desratizacion];
        this.productosUtilizados = JSON.parse(JSON.stringify(this.productosFiltrados));
        this.respuestas = [];
        var filtro = [this.fecha_desde,this.fecha_hasta,this.filtro_uv, this.filtro_desratizacion, this.clientesElegidos, this.sucursalesElegidas, this.sectoresElegidos, this.equiposElegidos];
        this.api_clientes.estadisticas(filtro).subscribe(async (datos) =>{
          var aux;
          console.log(datos);
          aux = datos;
          aux = aux.respuestas;
          this.capturas = aux.filter(respuesta => (respuesta.id_campo == 57) && (respuesta.respuesta.toLowerCase() == "captura")).length;
          this.consumo = aux.filter(respuesta => (respuesta.id_campo == 57) && (respuesta.respuesta.toLowerCase() == "consumido")).length;
          aux.sort((a,b) => a.id_equipo - b.id_equipo);
          var contador = 0;
          this.promedioUV = 0;
          for (let index = 0; index < aux.length; index++) {
            const element = aux[index];
            if ((element.id_campo == 62) && (Number(element.respuesta))) {
              contador++;
              this.promedioUV = this.promedioUV + Number(element.respuesta);
            }
          }
          this.promedioUV = this.promedioUV / contador;
          this.promedioUV = Math.round(this.promedioUV * 100) / 100;
          var auxPush = []
          for (let index = 0; index < aux.length; index++) {
            var element = aux[index];
            if (element.id_campo == 55) {
              element.nombre_producto = this.productos.find(producto => producto.id_producto == element.respuesta)?.nombre_producto;
              element.tipo_producto = this.productos.find(producto => producto.id_producto == element.respuesta)?.tipo_producto;
            }
            if (index == 0){
              auxPush.push(element);
            }else{
              const pastElement = aux[index - 1]
              if (element.id_equipo == pastElement.id_equipo) {
                if (index == aux.length - 1) {
                  auxPush.push(element);
                  this.respuestas.push(auxPush);
                }else{
                  auxPush.push(element);
                }
              }else{
                this.respuestas.push(auxPush);
                auxPush = [];
                auxPush.push(element);
              }
            }
          }
          for (let index = 0; index < this.respuestas.length; index++) {
            const element = this.respuestas[index];
            element.sort((a,b) => a.id_formulario - b.id_formulario);
          }
          
          for (let index = 0; index < this.respuestas.length; index++) {
            const equipo = this.respuestas[index];
            auxPush = [];
            var equipoAux = [];
            for (let index2 = 0; index2 < equipo.length; index2++) {
              const element = equipo[index2];
              if (index2 == 0){
                auxPush.push(element);
              }else{
                const pastElement = equipo[index2 - 1]
                if (element.id_formulario == pastElement.id_formulario) {
                  if (index2 == equipo.length - 1) {
                    auxPush.push(element);
                    equipoAux.push(auxPush);
                  }else{
                    auxPush.push(element);
                  }
                }else{
                  equipoAux.push(auxPush);
                  auxPush = [];
                  auxPush.push(element)
                }
              }
            }
            this.respuestas[index] = equipoAux;
          }
          if (this.filtro_desratizacion) {
            for (let index = 0; index < this.productos.length; index++) {
              const product = this.productos[index];
              product.consumo = 0;
              product.captura = 0;
              for (let index2 = 0; index2 < this.respuestas.length; index2++) {
                const element = this.respuestas[index2];
                if (element.filter(respuesta => (respuesta[0].id_campo == 55) && (Number(respuesta[0].respuesta) == product.id_producto) && (respuesta[2].respuesta.toLowerCase() == "consumido"))) {
                  product.consumo = product.consumo + element.filter(respuesta => (respuesta[0].id_campo == 55) && (Number(respuesta[0].respuesta) == product.id_producto) && (respuesta[2].respuesta.toLowerCase() == "consumido")).length;
                }
                if (element.filter(respuesta => (respuesta[0].id_campo == 55) && (Number(respuesta[0].respuesta) == product.id_producto) && (respuesta[2].respuesta.toLowerCase() == "captura"))) {
                  product.captura =  product.captura + element.filter(respuesta => (respuesta[0].id_campo == 55) && (Number(respuesta[0].respuesta) == product.id_producto) && (respuesta[2].respuesta.toLowerCase() == "captura")).length;
                }
              }
            }
          }
          if ((this.productosFiltrados?.length > 0) && (this.filtro_desratizacion)) {
            for (let index = 0; index < this.respuestas.length; index++) {
              const equipo = this.respuestas[index];
              for (let index2 = 0; index2 < equipo.length; index2++) {
                const rsta = equipo[index2];
                if ((!this.productosFiltrados.includes(Number(rsta[0].respuesta))) && (rsta[0].id_campo == 55)) {
                  if (rsta[2].respuesta == 'Consumido') {
                    this.consumo = this.consumo - 1;
                  }
                  if (rsta[2].respuesta == 'Captura') {
                    this.capturas = this.capturas - 1;
                  }
                  rsta.eliminar = true;
                }
              }
            }
            for (let index = 0; index < this.respuestas.length; index++) {
              var element = this.respuestas[index];
              this.respuestas[index] = element.filter(resp => !resp.eliminar);
            }
          }
          this.respuestas.sort((a,b) => a[0].length - b[0].length);
          console.log(this.respuestas);
          loading.dismiss();
          if (this.respuestas.length == 0){
            const alert = await this.alertController.create({
              header: 'Error',
              message: 'No se encontro ningun dato sobre los filtros aplicados',
              buttons: ['OK']
            });
          
            await alert.present();
          }
        })  
      }
    }
  }

  async borrarFiltros(){
    const alert = await this.alertController.create({
      subHeader: '¿Estas seguro que deseeas limpiar los filtros?',
      buttons: [
        "Cancelar",
        {
          text:'Si',
          handler: () =>{
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
}
