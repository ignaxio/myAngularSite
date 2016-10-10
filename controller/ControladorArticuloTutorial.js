/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ControladorArticuloTutorial($sce, articulo, Cargador, $rootScope) {
  this.articulo = articulo;
//  console.log(articulo);





  Cargador.setCargador(false);
  $rootScope.showCargador = Cargador.getCargador();
}