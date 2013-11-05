var stockCacheStrategy = angular.module('myapp.model.stock.cache.strategu', [
     'myapp.model.stock.cache.inMemory',
     'myapp.model.stock.cache.localStorage'
]);

stockCacheStrategy.service('stockCacheStrategy',
  function(inMemoryStockCache,localStorageStockCache) {


    this.addStock = function(stock,strategy){
      strategy.addStock(stock);
    }

    this.getStock = function(symbol,day,strategy){
      return strategy.getStock(stock);

    }

});
