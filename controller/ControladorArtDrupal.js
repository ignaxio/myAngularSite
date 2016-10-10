/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function ControladorArtDrupal($http) {
  var vm = this;

  vm.mensaje = "Estos don los artículos de drupal";
  vm.articulos = [];
  $http.get('http://ignaciofarre.local/ignaciofarre/articulos-drupal').success(function (result) {
    vm.articulos = result;
  });

}

