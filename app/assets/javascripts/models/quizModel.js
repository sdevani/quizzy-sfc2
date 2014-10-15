var QuizModel = function(data) {
  this.id = data.id;
  this.title = data.title;
};

QuizModel.get = function(id) {
  $.get('/quizzes/' + id, function(data) {
    var quiz = new QuizModel(data);
    $(document).trigger('show_quiz', quiz);
  });
};

QuizModel.all = function() {
  var quizArray = [];
  $.get('/quizzes', function(data) {
    $.each(data, function(index, value) {
      quizArray.push(new QuizModel(value));
    });
    $(document).trigger('show_all_quizzes', [quizArray]);
  });
};