
  var myapp = angular.module('myapp', [
      'ngRoute',
      'myapp.model',
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
