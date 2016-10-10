/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ControladorTutorial(categoria, Cargador, $rootScope) {
  this.categoria = categoria;
//  console.log(categoria);

  Cargador.setCargador(false);
  $rootScope.showCargador = Cargador.getCargador();
}