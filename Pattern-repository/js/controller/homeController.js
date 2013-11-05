var controller = angular.module('myapp.controller', [
	"myapp.model.repository"
]);

controller.controller('homeController',
  function($scope,$location,repository) {

    
    $scope.replies = [];

    $scope.addComment = function() {

    	$scope.replies.push($scope.comment);

    	repository.addComment($scope.comment);
    }

    repository.getComment(function(comments){

    	$.each(comments,function(i,comment){
    		$scope.$apply(function() {
    			$scope.replies.push(comment);
    		});	
    	})

    },
    function(error){
    	console.log("error comment =="+error);
    });

  });
