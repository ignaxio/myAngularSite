/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ControladorGeneral(Cargador, $rootScope) {
  //Ponemos a true el mostrar el cargador
//  Cargador.setCargador(false);
  $rootScope.showCargador = Cargador.getCargador();
  
  
  
}

