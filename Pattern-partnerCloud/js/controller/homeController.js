var controller = angular.module('myapp.controller', [
	"myapp.model.nQueenLocal",
    "myapp.model.nQueenRemote"
]);

controller.controller('homeController',
  function($scope,nQueenLocal) {

    $scope.startnQueenLocal = function() {
        $scope.time = "measuring...";

        var start = new Date().getTime();
        nQueenLocal.computenQueen($scope.nQueen);
        var end = new Date().getTime();
        var timeTaken = end-start;
        $scope.time = timeTaken +" ms";
    }

    $scope.startnQueenRemote = function() {

        $scope.time = "measuring...";

        var start = new Date().getTime();
        nQueenRemote.computenQueen($scope.nQueen,function(){
            var end = new Date().getTime();
            var timeTaken = end - start;
            $scope.time = timeTaken + " ms";
        })
    }



});
