var QuizController = function() {

};

QuizController.prototype.start = function() {
  new QuizAllView('.all-quizzes');
  QuizModel.all();
};

$(document).ready(function() {
  var parag = new QuizController();
  parag.start();
});