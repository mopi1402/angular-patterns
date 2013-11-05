var dashboard_controller = angular.module('myapp.controller.dashboard', []);

dashboard_controller.controller('dashboardController',
  function($scope,$location) {

    $scope.checkOut = function() {
    	$rootScope.broadcast('checkout');
    }

  });
