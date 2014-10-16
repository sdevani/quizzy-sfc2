app.controller('QuizMenuController', ['$scope', 'Quiz', '$location',
  function($scope, Quiz, $location) {
  $scope.quizzes = Quiz.query();

  $scope.quizSelected = function(quiz) {
    // $scope.quizViewShow = false;
    // $scope.questionsViewShow = true;
    $location.path('/quiz/' + quiz.id);
  };
}]);