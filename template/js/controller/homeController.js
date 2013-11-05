var controller = angular.module('myapp.controller', []);

controller.controller('homeController',
  function($scope,$location) {
    

    $scope.goDashBoard = function() {
       $location.path( "/dashboard" );
    }

  });
