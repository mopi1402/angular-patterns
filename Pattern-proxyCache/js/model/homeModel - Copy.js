var model = angular.module('myapp.model', []);

model.service('homeModel',
  function($http) {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    var isDbInit = false;
    var db;

    function initDatabase(){
      isDbInit = true;
      
      request = window.indexedDB.open("MyTestDatabase", 3);
      request.onerror = function(event) {
      alert("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function(event) {
      db = request.result;
    };
    
    }
  
    this.addComment = function(comment) {
      if(isDbInit == false)
        initDatabase();

      db.transaction(function (tx) {
      tx.executeSql('INSERT INTO comment (text) VALUES (?)',[comment]);
    });

    };

    this.getComment = function(success_callback,error_callback){
      if(isDbInit == false)
        initDatabase();

      var commentList = [];
      db.transaction(function (tx){

        tx.executeSql('Select * from comment',[], function(tx,results){
          var len = results.row.length;
          for( var i =0; i < len; i++){
            commentList.push(results.row.item(i).comment);
          }
        })  
      
      })

      success_callback(commentList);
      error_callback("haha");

    }

});
