var stockCache = angular.module('myapp.model.stock.cache', [
       "myapp.model.stock",     
       'myapp.model.stock.cache.inMemory',
       'myapp.model.stock.cache.localStorage'
]);

stockCache.service('stockCache',
  function(stockModel,$rootScope,inMemoryStockCache,localStorageStockCache) {

    var stockCache = [];
    var inCache = false;

    this.getStocks = function(success_callback,error_callback){
        stockModel.getStocks(success_callback,error_callback);
    }

    this.getStockPrice = function(symbol,day,success_callback){

      var foundInCache = false;

      var stockFound = stockCacheStrategy.getStock(symbol,day,inMemoryCache);
      if(stockFound != null){
        foundInCache = true;
        success_callback(stock);
        $rootScope.fromCache = true;
      }

      if(foundInCache == false){
        stockModel.getStockPrice(symbol,day,success_callback,function(stock){
          stockCacheStrategy.addStock(stock,inMemoryCache);
          stockCache.push(stock);
        });
        $rootScope.fromCache = false;
      }


    }

});
