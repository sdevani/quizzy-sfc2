var QuizController = function() {

};

QuizController.prototype.start = function() {
  new QuizAllView('.all-quizzes');
  QuizModel.all();
};

$(document).ready(function() {
  var qc = new QuizController();
  qc.start();
});