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

$(document).on('show_single-Quiz', function(e, id) {
  new QuestionView('.current-question');
  QuestionModel.all(id);
});