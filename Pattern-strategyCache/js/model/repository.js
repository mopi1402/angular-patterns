var repository = angular.module('myapp.model.repository', [
      "myapp.model.stock",
      "myapp.model.stock.cache"
]);

repository.service('repository',
  function(stockModel,stockCache) {

    this.getStocks = function(success_callback,error_callback){
      stockCache.getStocks(success_callback,error_callback);
    }

    this.getStockPrice = function(symbol,day,success_callback){
    	stockCache.getStockPrice(symbol,day,success_callback);
    }

});
