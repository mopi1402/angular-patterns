var sensorManager = angular.module('myapp.model.sensorManager', []);

sensorManager.service('sensorManager',
  function() {

    this.isOnline = function(){
    	
      return window.navigator.onLine;
    }

});
