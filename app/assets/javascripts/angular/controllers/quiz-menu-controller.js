app.controller('QuizMenuController', ['$scope', 'Quiz', function($scope, Quiz) {
  // $scope.model = Quiz.get({id: 1});
  $scope.model = Quiz.get({id: 1});
  
  $scope.quizViewShow = false;
  $scope.questionsViewShow = true;

  $scope.updateTitle = function() {
    // Quiz;
    $scope.model.title = "Who are you2?";
    $scope.model.$update();
    Quiz.query();
    var quiz = Quiz.get();
    quiz.$update();
    quiz.$delete();

    var quiz = new Quiz({title: "My new title"});
    quiz.$save();
    console.log($scope.model);
  };
}]);


// Quiz.query()
// Quiz.get({id: 1})
// quiz.$update();
// quiz.$save();
// quiz.$delete();
