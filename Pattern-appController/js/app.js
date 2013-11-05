
  var myapp = angular.module('myapp', [
      'ngRoute',
      'myapp.controller.home',
      'myapp.controller.dashboard'
    ]);

  myapp.config(['$routeProvider',function($routeProvider){

    $routeProvider
      .when('/', {
        templateUrl: 'js/view/index.html',
        controller: 'homeController'
      })

      .when('/dashboard', {
        templateUrl: 'js/view/dashboard.html',
        controller: 'dashboardController'
      })

      .otherwise({redirectTo: '/'});

  }]);
