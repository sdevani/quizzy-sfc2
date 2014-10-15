var QuestionView = function(el) {
  this.el = el;
  var view = this;
  this.correctAnswers = 0;
  this.currentQuestion = 0;
  this.template = _.template($('.multiple-choice-question-template').html());
  $(document).on('got_da_questions', function(e, questionArray) {
    $('.all-quizzes').hide();
    $('.current-question').show();
    view.questions = questionArray;
    view.render(view.questions[view.currentQuestion]);
  });
};

QuestionView.prototype.render = function(question) {
  var compile = this.template(question);
  $(this.el).empty();
  $(this.el).append(compile);
  this.callback();
};

QuestionView.prototype.callback = function() {
  var view = this;
  $('.question-choice').click(function(e){
    var selected = $('input[type="radio"]:checked').val();
    if (selected === view.questions[view.currentQuestion].answer) {
      view.correctAnswers++;
      $('.validation').append('<p>CORRECT!!!!!!</p>');
    } else {
      $('.validation').append('<p>WRONGGGGG. SO WRONGGGGG. ARGH$@^@%@#%@</p>');
    }
    view.currentQuestion++;
    setTimeout(function() {
      // $(document).trigger('got_da_questions',view.questions)
      view.render(view.questions[view.currentQuestion]);
    } ,3000);
  });
};






