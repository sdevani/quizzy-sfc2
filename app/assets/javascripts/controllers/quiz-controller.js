var QuizController = function() {
  this.quizView = new QuizAllView('.all-quizzes');
  this.questionView = new QuestionView('.current-question');
  $(this.questionView.el).hide();
  $(this.quizView.el).hide();
};

QuizController.prototype.start = function() {
  QuizModel.all();
  $(this.questionView.el).hide();
  $(this.quizView.el).show();
};

$(document).ready(function() {
  var qc = new QuizController();
  qc.start();
});

$(document).on('show_single-Quiz', function(e, id) {
  QuestionModel.all(id);
  $(this.questionView.el).show();
  $(this.quizView.el).hide();
});