
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
            .when('/', {
              controller: "HomeCtrl",
              controllerAs: "vm",
              templateUrl: "views/home.html",
              resolve: {
                sliders: ['remoteResource', function (remoteResource) {
                    return remoteResource.getArticulosSlider();
                  }],
                poderes: ['remoteResource', function (remoteResource) {
                    return remoteResource.getPoderes();
                  }],
                experiencias: ['remoteResource', function (remoteResource) {
                    return remoteResource.getExperiencias();
                  }]
              }
            })
            .when('/tutoriales', {
              controller: "TutorialesCtrl",
              controllerAs: "vm",
              templateUrl: "views/tutoriales.html",
              resolve: {
                tutoriales: ['remoteResource', function (remoteResource) {
                  return remoteResource.getTutoriales();
                }]
              }
            })
            .when('/tutoriales/:categoria', {
              controller: "TutorialCtrl", 
              controllerAs: "vm",
              templateUrl: "views/tutorial.html",
              resolve: {
                categoria: ['remoteResource', '$route', function (remoteResource, $route) {
                  return remoteResource.getTutorial($route.current.params.categoria);
                }]
              }
            })
            .when('/tutoriales/:categoria/:articulo', {
              controller: "ArticuloTutorialCtrl", 
              controllerAs: "vm",
              templateUrl: "views/articulo-tutorial.html",
              resolve: {
                articulo: ['remoteResource', '$route', function (remoteResource, $route) {
                  return remoteResource.getArticuloTutorial($route.current.params.categoria, $route.current.params.articulo);
                }]
              }
            })
            .when('/articulos-drupal', {
              controller: "ArtDrupalCtrl",
              controllerAs: "vm",
              templateUrl: "views/articulos-drupal.html"
            })
            .when('/blog/:articulo', {
              controller: "ArticuloCtrl",
              controllerAs: "vm",
              templateUrl: "views/articulo.html"
            });
  }]);

app .controller('GeneralCtrl', ['Cargador', '$rootScope', ControladorGeneral])
    .controller('NavBarCtrl', ['$location', ControladorNavBar])
    .controller('HomeCtrl', ['annosExperiencia', 'navegador', 'sliders', 'poderes', 'experiencias', 'cambioDePoderes', 'Cargador', '$rootScope', ControladorHome])
    .controller('TutorialesCtrl', ['tutoriales', 'Cargador', '$rootScope', ControladorTutoriales])
    .controller('TutorialCtrl', ['categoria', 'Cargador', '$rootScope', ControladorTutorial])    
    .controller('ArticuloTutorialCtrl', ['$sce', 'articulo', 'Cargador', '$rootScope', ControladorArticuloTutorial])
    
    .controller('ArtDrupalCtrl', ['$http', ControladorArtDrupal])
    .controller('ArticuloCtrl', ['$http', '$routeParams', ControladorArticulo])
;

