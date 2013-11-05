var model = angular.module('myapp.model.comment', []);

model.service('commentModel',
  function($http) {

  	var isDbInit = false;
  	var db;

  	function initDatabase(){
  		isDbInit = true;
  		//(database_name,version_num,text_description,estimated_size)
  		db = openDatabase('mydb', '1.0', 'comment_database', 2 * 1024 * 1024);
  		db.transaction(function (tx) {

  		  tx.executeSql('CREATE TABLE IF NOT EXISTS comment (id integer primary key autoincrement ,comment)');
		});
  	
  	}
  
  	this.addComment = function(comment) {
  		if(isDbInit == false)
  			initDatabase();

  		db.transaction(function (tx) {
		  tx.executeSql('INSERT INTO comment (comment) VALUES (?)',[comment]);
		});

  	};

  	this.getComment = function(success_callback,error_callback){
  		if(isDbInit == false)
  			initDatabase();

  		var commentList = [];
  		db.transaction(function (tx){

	  		tx.executeSql('SELECT * FROM comment', [],function(tx,results){

	  			console.log(results.rows);

	  			var len = results.rows.length,i;
	  			
	  			for(i =0; i < len; i++){
	  				commentList.push(results.rows.item(i).comment);
	  			}
	  			
  				success_callback(commentList);
	  		},function(tx,erorMessage){
	  			
	  			error_callback(errorMessage);

	  		})	
  		
  		})

  	}

});
