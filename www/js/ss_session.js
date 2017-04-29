var app = angular.module('angularjs-starter', []);

app.controller('SaveSessionCtrl', function($scope, Session) {
  $scope.name = 'World';
  $scope.session = Session;
  var bank_acct = Session.updateSession();
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