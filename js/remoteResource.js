/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function RemoteResource($http, $q, baseUrl) {

  // Función que coje los artículos para mostrar en el slider, con el term slider.
  this.getArticulosSlider = function () {
    var defered = $q.defer();
    var promise = defered.promise;

    $http({
      method: 'GET',
      url: baseUrl + '/ignacio-farre/get-articulos-slider'
    }).success(function (data, status, headers, config) {
      defered.resolve(data);
    }).error(function (data, status, headers, config) {
      if (status === 400) {
        defered.reject(data);
      } else {
        throw new Error("Fallo obtener los datos:" + status + "\n" + data);
      }
    });
    return promise;
  };

  // Función que coje los poderes para llenar las barras.
  this.getPoderes = function () {
    var defered = $q.defer();
    var promise = defered.promise;

    $http({
      method: 'GET',
      url: baseUrl + '/ignacio-farre/get-poderes'
    }).success(function (data, status, headers, config) {
      defered.resolve(data);
    }).error(function (data, status, headers, config) {
      if (status === 400) {
        defered.reject(data);
      } else {
        throw new Error("Fallo obtener los datos:" + status + "\n" + data);
      }
    });
    return promise;
  };

  // Función que coje las experiencias
  this.getExperiencias = function () {
    var defered = $q.defer();
    var promise = defered.promise;

    $http({
      method: 'GET',
      url: baseUrl + '/ignacio-farre/get-experiencias'
    }).success(function (data, status, headers, config) {
      defered.resolve(data);
    }).error(function (data, status, headers, config) {
      if (status === 400) {
        defered.reject(data);
      } else {
        throw new Error("Fallo obtener los datos:" + status + "\n" + data);
      }
    });
    return promise;
  };
  
  // Función que coje ...
  this.getTutoriales = function () {
    var defered = $q.defer();
    var promise = defered.promise;

    $http({
      method: 'GET',
      url: baseUrl + '/ignacio-farre/get-tutoriales'
    }).success(function (data, status, headers, config) {
      defered.resolve(data);
    }).error(function (data, status, headers, config) {
      if (status === 400) {
        defered.reject(data);
      } else {
        throw new Error("Fallo obtener los datos:" + status + "\n" + data);
      }
    });
    return promise;
  };
  
  // Función que coje ...
  this.getTutorial = function (categoria) {
    var defered = $q.defer();
    var promise = defered.promise;

    $http({
      method: 'GET',
      url: baseUrl + '/ignacio-farre/get-tutorial/' + categoria
    }).success(function (data, status, headers, config) {
      defered.resolve(data);
    }).error(function (data, status, headers, config) {
      if (status === 400) {
        defered.reject(data);
      } else {
        throw new Error("Fallo obtener los datos:" + status + "\n" + data);
      }
    });
    return promise;
  };
  
  // Función que coje ...
  this.getArticuloTutorial = function (categoria, articulo) {
    var defered = $q.defer();
    var promise = defered.promise;

    $http({
      method: 'GET',
      url: baseUrl + '/ignacio-farre/get-articulo/' + categoria + '/' + articulo
    }).success(function (data, status, headers, config) {
      defered.resolve(data);
    }).error(function (data, status, headers, config) {
      if (status === 400) {
        defered.reject(data);
      } else {
        throw new Error("Fallo obtener los datos:" + status + "\n" + data);
      }
    });
    return promise;
  };
}

function RemoteResourceProvider() {
  var _baseUrl;
  this.setBaseUrl = function (baseUrl) {
    _baseUrl = baseUrl;
  };
  this.$get = ['$http', '$q', function ($http, $q) {
      return new RemoteResource($http, $q, _baseUrl);
    }];
}

app.config(['baseUrl', 'remoteResourceProvider',
  function (baseUrl, remoteResourceProvider) {
    remoteResourceProvider.setBaseUrl(baseUrl);
  }
]);

app.provider("remoteResource", RemoteResourceProvider);





