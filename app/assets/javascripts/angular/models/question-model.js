app.factory('Question', function($resource) {
  return $resource(
    '/quizzes/:quizId/questions/:id',
    {quizId: '@quizId', id: '@id'},
    {update: {method: 'PATCH'}
  });
});