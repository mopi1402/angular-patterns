
  var myapp = angular.module('myapp', [
      'ngRoute',
      'myapp.model.stock',
      'myapp.model.stock.cache',
      'myapp.model.repository',
      'myapp.controller',
      'myapp.model.senderManager'
      
    ]);

  myapp.config(['$routeProvider',function($routeProvider){

    $routeProvider
      .when('/', {
        templateUrl: 'js/view/index.html',
        controller: 'homeController'
      })

      .otherwise({redirectTo: '/'});

  }]);

  myapp.run(function($window, $rootScope,senderManager) {
        $rootScope.online = navigator.onLine;
        $window.addEventListener("offline", function () {
          $rootScope.$apply(function() {
            $rootScope.online = false;
          });
        }, false);
        $window.addEventListener("online", function () {
          $rootScope.$apply(function() {
            $rootScope.online = true;
          });
        }, false);

        $rootScope.$watch('online', function(newStatus) { 
            senderManager.executeFailedCalls();
        });
  });