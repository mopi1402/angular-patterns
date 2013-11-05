var controller = angular.module('myapp.controller', [
	"myapp.model.repository"
]);

controller.controller('homeController',
  function($scope,$location,$rootScope,repository,$rootScope) {

    $rootScope.fromcache = false;
    $scope.stocks = [];
    var initialLoad = true;

    repository.getStocks(function(stockList){

    	$.each(stockList,function(i,stock){
    		$scope.$apply(function() {
    			$scope.stocks.push(stock);
    		});	
    	})

    },
    function(error){
    	console.log("error comment =="+error);
    });

    $scope.getStockPrice = function(){

        console.log('came controller to get stock price');
        
        var symbol  = $scope.symbol
        var day = $scope.day

        repository.getStockPrice(symbol,day,function(stock){
            console.log('found stock with the follow detail');
            console.log(stock);

            $rootScope.price = stock.price;
            if(initialLoad==true){
                $rootScope.$apply();
                initialLoad = false;
            }

        })



    } 


});
