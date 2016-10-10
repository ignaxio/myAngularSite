/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ControladorHome(annosExperiencia, navegador, sliders, poderes, experiencias, cambioDePoderes, Cargador, $rootScope) {
  this.alturaNavegador = navegador.getAlturaNavegador();
  
  //Las experiencias profesionales
  this.experiencias = experiencias;
  console.log(experiencias);

  this.mostrarTecnologia = false;
  
  this.annosExperiencia = annosExperiencia.getAnnosExperiencia();

  //Control del dropdown
  this.toggleDropdown = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  };
  //Submenus del dropdown
  this.cambioDePoderes = cambioDePoderes;

  //Los poderes.
  this.poderes = poderes;

  this.cambiarPoderes = function (cantidad) {
    for (var poder in this.poderes) {
      if ((parseInt(this.poderes[poder].valor) + parseInt(cantidad)) > 100) {
        this.poderes[poder].valor = 100;
      } else {
        this.poderes[poder].valor = parseInt(this.poderes[poder].valor) + parseInt(cantidad);
      }
    }
  };
  
  // Slider
  this.slier = {
    'noWrapSlides': false,
    'active': 0,
    'myInterval': 3000,
    'slides': sliders
  };

  //El mejor ajetivo.
  this.elMejorAdjetivo = 'trabajadora';

  Cargador.setCargador(false);
  $rootScope.showCargador = Cargador.getCargador();
}
