var dashboard_controller = angular.module('myapp.controller.dashboard', []);

dashboard_controller.controller('dashboardController',
  function($scope,$location) {
    
    //controller codes

    $scope.goHome = function() {
       $location.path( "/" );
    }

  });
