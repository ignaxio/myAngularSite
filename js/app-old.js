

// Creación del módulo
var app = angular.module('angularRoutingApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

//Creo las fabricas
app.factory('Factory', function() {
    var Factory = {             
        extraerDatos: function(data) {
            //extraemos el último caracter para verificar que es una s.
            var result = data.substring(data.length-2, data.length);
            //No se que pasa que tengo que volver a extraer el caracter, hay un salto de linea o algo así
            var result = result.substring(result.length-1, result.length);
            //Si es una s todo bien, si no, todo ha salido mal.
            return (result === "s") ? true : false;
        },
        titulo: 'este es el titulo del factory'
    };
    return Factory;
    
});

//Para pasar los datos entre controladores creando objetos
app.service('Objeto', function() {
    var titulo = 'test string value';
    
    return {
        getTitulo: function() {
            return titulo;
        },
        setTitulo: function(value) {
            titulo = value;
        }
    };
});

//Mis habilidades
app.service('Habilidades', function() {
    var habilidades = [
        {nombre:'Java', nivel:'85'},
        {nombre:'Php', nivel:'87'},
        {nombre:'Javascript', nivel:'95'},
        {nombre:'Html', nivel:'100'},
        {nombre:'Css', nivel:'95'},
        {nombre:'Json', nivel:'97'},
        {nombre:'Sass + compass', nivel:'78'},
        {nombre:'AngularJS', nivel:'93'},
        {nombre:'Zend Framework 2', nivel:'83'},
        {nombre:'Bootstrap', nivel:'99'},
        {nombre:'jQuery', nivel:'94'},        
        {nombre:'Netbeans', nivel:'98'},        
        {nombre:'Illustrator', nivel:'84'},        
        {nombre:'Photoshop', nivel:'84'},        
        {nombre:'Gimp', nivel:'85'},       
        {nombre:'Inkscape', nivel:'87'},       
        {nombre:'Flash', nivel:'95'},       
        {nombre:'Autocad, Rhinoceros', nivel:'78'},
        {nombre:'Ilusión', nivel:'100'},
        {nombre:'Motivación', nivel:'100'}
    ];
     /*= { 
        'Java'              : '87',
        'Php'               : '96',
        'Javascript'        : '96',
        'Html'              : '96',
        'Css'               : '96',
        'Json'              : '96',
        'Sass + compass'    : '96',
        'AngularJS'         : '96',
        'Zend Framework 2'  : '96',
        'Bootstrap'         : '96',
        'jQuery'            : '96'
    };*/
    
    return habilidades;
});

// Configuración de las rutas
app.config(function($routeProvider) {

    $routeProvider        
        .when('/acerca', {
            templateUrl : 'views/acerca.html',
            controller 	: 'aboutController'
        })        
        .when('/porfolio', {
            templateUrl : 'views/porfolio.html',
            controller 	: 'porfolioController'
        })
        .when('/contacto', {
            templateUrl : 'views/contacto.html',
            controller 	: 'contactController'
        })
        .otherwise({
            redirectTo: '/acerca'
        });
});



app.directive('miHeader', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/mi-header.html'
    };
});