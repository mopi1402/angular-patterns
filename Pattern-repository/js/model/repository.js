var repository = angular.module('myapp.model.repository', [
      "myapp.model.comment"
]);

repository.service('repository',
  function(commentModel) {

    this.addComment = function(comment){
      commentModel.addComment(comment);
    }

    this.getComment = function(success_callback,error_callback){
      commentModel.getComment(success_callback,error_callback);
    }

});
