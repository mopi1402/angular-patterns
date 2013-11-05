var nQueenRemote = angular.module('myapp.model.nQueenRemote', []);

nQueenRemote.service('nQueenRemote',
  function() {

    this.computenQueen = function(nQueen,success_callback){
    	$.ajax({
          url : 'someurl/nQueen/'+nQueen,
          type : 'GET',
          success : function(json) {
              //you code for success function
              success_callback;
          },
          error : function(xhr, textStatus, errorThrown ) {
              
          }
      });
    }

});
