var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope, Session) {
  $scope.name = 'World';
  $scope.session = Session;
});

app.factory('Session', function($http) {
  var Session = {
    data: {},
    saveSession: function() { /* save session data to db */ },
    updateSession: function() { 
      /* load data from db */
      $http.get('session.json').then(function(r) { return Session.data = r.data;});
    }
  };
  Session.updateSession();
  return Session; 
});