/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function ControladorArticulo($http, $routeParams) {
  var vm = this;

  vm.mensaje = "Este es el artículo " + $routeParams.articulo;
//  vm.articulos = [];
//  $http.get('http://ignaciofarre.local/ignaciofarre/articulos').success(function (result) {
//    vm.articulos = result;
//  });

}

