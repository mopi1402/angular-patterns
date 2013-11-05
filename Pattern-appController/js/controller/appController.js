
var application_controller = angular.module('myapp.controller.app', []);

application_controller.controller('appController',
  function($scope,$location) {
    
        //method will be called when page controller broadcast goNext event 
	$rootScope.$on('checout',function(event, data){
               
			//perform checking here eg. if user isn't logged in redirect to log in page

			//if user is logged in, redirect to payment page

     })

});