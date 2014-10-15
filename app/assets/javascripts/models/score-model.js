var ScoreModel = function(data) {
  this.user = data.user;
  this.score = data.score;
  this.quizId = data.quiz_id;
};

ScoreModel.createScore = function(score) {
  $.ajax({
    type: "post",
    url: "/scores",
    data: new ScoreModel(score)
  })
    .done(function(data) {
      $(document).trigger('show_score', data);
    });
};