
  var myapp = angular.module('myapp', [
      'ngRoute',
      'myapp.model.nQueenLocal',
      'myapp.controller'
      
    ]);

  myapp.config(['$routeProvider',function($routeProvider){

    $routeProvider
      .when('/', {
        templateUrl: 'js/view/index.html',
        controller: 'homeController'
      })

      .otherwise({redirectTo: '/'});

  }]);
