var stockCache = angular.module('myapp.model.stock.cache', [
       "myapp.model.stock"
]);

stockCache.service('stockCache',
  function(stockModel,$rootScope) {

    var stockCache = [];
    var inCache = false;

    this.getStocks = function(success_callback,error_callback){
        stockModel.getStocks(success_callback,error_callback);
    }

    this.getStockPrice = function(symbol,day,success_callback){

      var foundInCache = false;

      $.each(stockCache,function(i,stock){

        if(stock.symbol == symbol && stock.day == day){
        
          foundInCache = true;
          success_callback(stock);
          $rootScope.fromCache = true;
        }
      })

      if(foundInCache == false){
        stockModel.getStockPrice(symbol,day,success_callback,function(stock){
          stockCache.push(stock);
        });
        $rootScope.fromCache = false;
      }


    }

});
