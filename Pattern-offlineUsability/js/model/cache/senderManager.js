var senderManager = angular.module('myapp.model.senderManager', [
]);

senderManager.service('senderManager',
  function() {

  	var ajaxCalls = [];

  	this.addAjax = function(ajaxParams){
  		ajaxCalls.push(ajaxParams);
  	}

  	this.executeFailedCalls = function() {
  		if(ajaxCalls.length !=0){

  			$.each(ajaxCalls,function(i,ajaxParams){
  				$.ajax(ajaxParams);
  			})

  		}
  	}


});
