var inMemoryStockCache = angular.module('myapp.model.stock.cache.inMemory', [
     
]);

inMemoryStockCache.service('inMemoryStockCache',
  function() {

    var stockCache = [];
    var inCache = false;

    this.addStock = function(stock){
      stockCache.push(stock);
    }

    this.getStock = function(stock){

      $.each(stockCache,function(i,stock){

        if(stock.symbol == symbol && stock.day == day){
          return stock;
        }
      })

      return null;
    }

});
