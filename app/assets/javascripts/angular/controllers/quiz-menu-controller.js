app.controller('QuizMenuController', ['$scope', 'Quiz', 'Question',
  function($scope, Quiz, Question) {
  $scope.quizViewShow = true;
  $scope.questionsViewShow = false;
  $scope.scoreViewShow = false;

  $scope.quizzes = Quiz.query();

  $scope.quizSelected = function(quiz) {
    $scope.quizViewShow = false;
    $scope.questionsViewShow = true;
    $scope.questions = Question.query({quizId: quiz.id}, function(quizzes) {
      for (var i = 0; i < quizzes.length; i++) {
        quizzes[i].choices = quizzes[i].choices.split(';');
        $scope.question = $scope.questions[$scope.curQuestion]
      }
      $scope.correctAnswers = 0;
      $scope.totalQuestions = quizzes.length;
    });
    $scope.curQuestion = 0;
  };

  $scope.submitQuestion = function(question) {
    console.log(question);
    console.log(question.selection);
    if (question.answer == question.selection) {
      $scope.correctAnswers++;
    }

    $scope.curQuestion += 1;

    if ($scope.curQuestion == $scope.questions.length) {
      $scope.showScore();
    } else {
      $scope.question = $scope.questions[$scope.curQuestion];
    }
  };

  $scope.showScore = function() {
    $scope.questionsViewShow = false;
    $scope.scoreViewShow = true;
  }
}]);