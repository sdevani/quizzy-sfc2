var QuestionView = function(el) {
  this.el = el;
  var view = this;
  this.currentQuestion = 0;
  this.template = _.template($('.multiple-choice-question-template').html());
  $(document).on('got_da_questions', function(e, questionArray) {
    view.questions = questionArray;
    view.render(view.questions[view.currentQuestion]);
  })
}

QuestionView.prototype.render = function(question) {
  
}