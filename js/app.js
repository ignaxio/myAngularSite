
/**
 * Declaramos la aplicación
 */
var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'hljs']);

/**
 * Varaibles constantes 
 */
app.constant('baseUrl', 'http://ignaciofarre.local')
   .constant('AngularUrl', '/angular')
   .constant('alturaMaxVersionMovil', '640')
   .constant('annoDeInicio', '2012');

/**
 * Value que sirve para rellenar el select para cambiar los poderes 
 */
app.value('cambioDePoderes', [
  {'cantidad': '2', 'texto': 'Añade un 2% +'},
  {'cantidad': '5', 'texto': 'Añade un 5% +'},
  {'cantidad': '10', 'texto': 'Añade un 10% +'},
  {'cantidad': '-5', 'texto': 'Réstame un 5%'},
]);

/**
 * Value que devuelve el año actual
 */
app.value('annoActual', function () {
  var fecha = new Date();
  return fecha.getFullYear();
});

/**
 * Servicio que devuelve parametros de navegador y la ventana
 */
app.service("navegador", ['$window', 'alturaMaxVersionMovil', function ($window, alturaMaxVersionMovil) {
    this.altura = 1000;
    //Se resta la altura del nav... 
    if ($window.innerHeight < 1050) {
      this.altura = $window.innerHeight - 50;
    }
    this.getAlturaNavegador = function () {
      return this.altura;
    };
    //Si la altura es de 640
    this.checkIsMobile = function () {
      if ($window.innerHeight < alturaMaxVersionMovil) {
        return true;
      }
      return false;
    };
  }]);

/**
 * Service que sirve para activar y desactivar el cargador de la página, se carga con el rootScope
 */
app.service('Cargador', function () {
  this.activo = true;
  this.setCargador = function (activo) {
    this.activo = activo;
  };
  this.getCargador = function () {
    return this.activo;
  };
});

/**
 * Servicio que devuelve los años de experiencia.
 */
app.service("annosExperiencia", ['annoDeInicio', function (annoDeInicio) {
    this.annosExperiencia;
    this._annoActual;
    
    this.setAnnoActual = function(annoActual) {
      this._annoActual = annoActual;
    };
    this.getAnnosExperiencia = function () {
      this.annosExperiencia = parseInt(this._annoActual) - parseInt(annoDeInicio);
      return this.annosExperiencia;
    };
  }]);

app.run(['annosExperiencia', 'annoActual', function (annosExperiencia, annoActual) {
    annosExperiencia.setAnnoActual(annoActual());
  }
]);