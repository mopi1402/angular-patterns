var model = angular.module('myapp.model.stock', []);

model.service('stockModel',
  function($http) {

  	var isDbInit = false;
  	var db;

  	function initDatabase(){
  		isDbInit = true;
  		//(database_name,version_num,text_description,estimated_size)
  		db = openDatabase('stocksdb', '2.0', 'comment_database', 2 * 1024 * 1024);
  		
      db.transaction(function (tx) {

        tx.executeSql('CREATE TABLE IF NOT EXISTS Stocks (id integer primary key autoincrement,symbol,day,price)');   

        tx.executeSql('SELECT * FROM Stocks', [],function(tx,results){

          var len = results.rows.length,i;
          if(len == 0 ){
            tx.executeSql('INSERT INTO Stocks (symbol,day,price) VALUES (?,?,?)',["Z74.SI","1","1.4"]);
            tx.executeSql('INSERT INTO Stocks (symbol,day,price) VALUES (?,?,?)',["Z74.SI","2","1.6"]);
            tx.executeSql('INSERT INTO Stocks (symbol,day,price) VALUES (?,?,?)',["Z74.SI","3","1.8"]);

            tx.executeSql('INSERT INTO Stocks (symbol,day,price) VALUES (?,?,?)',["CC3.SI","1","3.2"]);
            tx.executeSql('INSERT INTO Stocks (symbol,day,price) VALUES (?,?,?)',["CC3.SI","2","3.4"]);
          }
        });

		  });
  	
  	}
  
    this.getStockPrice = function(symbol,day,success_callback,cache_callback){
      console.log('came inside stockModel');
      db.transaction(function (tx){

        tx.executeSql('SELECT * FROM Stocks where symbol=? and day =?',[symbol,day],function(tx,results){

          success_callback(results.rows.item(0));
          cache_callback(results.rows.item(0));

        },function(tx,erorMessage){
          
          error_callback(errorMessage);

        })  
      
      })

    }


  	this.getStocks = function(success_callback,error_callback){
  		if(isDbInit == false)
  			initDatabase();
  		var stockList = [];
  		db.transaction(function (tx){

	  		tx.executeSql('SELECT * FROM Stocks', [],function(tx,results){

	  			console.log(results.rows);

	  			var len = results.rows.length,i;
	  			
	  			for(i =0; i < len; i++){
	  				stockList.push(results.rows.item(i));
	  			}
	  			
  				success_callback(stockList);
          //cache_callback(stockList);
	  		},function(tx,errorMessage){
	  			console.log(errorMessage);
	  			error_callback(errorMessage);

	  		})	
  		
  		})

  	}

});
