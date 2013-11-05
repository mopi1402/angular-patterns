var home_controller = angular.module('myapp.controller.home', []);

home_controller.controller('homeController',
  function($scope,$location) {
    
    $scope.name = "Steve";

    $scope.checkOut = function() {
    	$rootScope.broadcast('checkout');
    }


  });
