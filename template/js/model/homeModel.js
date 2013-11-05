var model = angular.module('myapp.model', []);

model.service('homeModel',
  function() {
  
  	this.getDashBoardName = function() {
  		return 'hehe';
  	};

});
