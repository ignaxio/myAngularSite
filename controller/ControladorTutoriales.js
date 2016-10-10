/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function ControladorTutoriales(tutoriales, Cargador, $rootScope) {
  this.tutoriales = tutoriales;
  
  Cargador.setCargador(false);
  $rootScope.showCargador = Cargador.getCargador();
}