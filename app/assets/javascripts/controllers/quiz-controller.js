var QuizController = function() {
  this.quizView = new QuizAllView('.all-quizzes');
  this.questionView = new QuestionView('.current-question');
  $(this.questionView.el).hide();
  $(this.quizView.el).hide();
};

QuizController.prototype.start = function() {
  var view = this;
  QuizModel.all();
  $(this.questionView.el).hide();
  $(this.quizView.el).show();

  $(document).on('show_single-Quiz', function(e, id) {
    QuestionModel.all(id);
    $(this.questionView.el).show();
    $(this.quizView.el).hide();
  });

  $(document).on('post_score', function() {

  });

  $('.user-name').keyup(function(e) {
    if (e.which === 13 && $(this).val() !== '') {
      view.user = $(this).val();
      $('.user-name-container').hide();
      console.log(view.user);
    }
  });
};

// QuizController.prototype.user = function(user) {
//   this.user = user;
// };

$(document).ready(function() {
  var qc = new QuizController();
  qc.start();
});

