app.factory('Quiz', function($resource) {
  return $resource(
    '/quizzes/:id',
    {id: '@id'},
    {update: {method: 'PATCH'}
  });
});

// Quiz.query(); // GET '/quizzes'
// Quiz.get({quizId: 5}); // GET '/quizzes/5'
