app.controller('QuizMenuController', ['$scope', 'Quiz', function($scope, Quiz) {
  // $scope.model = Quiz.get({id: 1});
  $scope.quizzes = Quiz.query();
  // $scope.$watch('quizzes', function(oldVal, newVal){
  //   console.log(newVal);
  //   $scope.quizLength = newVal.length;
  // });
  $scope.updateTitle = function() {
    $scope.model.title = "Who are you2?";
    // $scope.model.update();
  };
  // $scope.model.title = "Who are you?";
}]);