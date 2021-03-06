var wisApp = angular.module('wisApp', [
  'ngRoute',
  'wisControllers', 
  'uiGmapgoogle-maps',
  'angularUtils.directives.dirPagination'
]);

wisApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/', {
        templateUrl: 'view/index.html',
        controller: 'indexCtrl'
      }).
      when('/connection', {
        templateUrl: 'view/connection.html',
        controller: 'connectionCtrl'
      }).
      when('/inscription', {
          templateUrl: 'view/inscription.html',
          controller: 'inscriptionCtrl'
      }).
	  when('/article/:id', {
        templateUrl: 'view/article.html',
        controller: 'articleCtrl'
	  }).
	  when('/partager/:id', {
        templateUrl: 'view/partager.html',
        controller: 'partagerCtrl'
      }).
	  when('/map', {
        templateUrl: 'view/map.html',
        controller: 'mapCtrl'
	  }).
	  when('/categorie', {
	      templateUrl: 'view/categorie.html',
	      controller: 'categorieCtrl'
	  }).
	  when('/creer', {
	      templateUrl: 'view/creer.html',
	      controller: 'creerCtrl'
	  }).
      when('/compte', {
          templateUrl: 'view/compte.html',
          controller: 'compteCtrl'
      }).
	    
	  
      otherwise({
        redirectTo: '/'
      });
  }]);