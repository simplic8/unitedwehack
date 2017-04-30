angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  // --------------------- Pie Chart Configuration -----------------------------
  $scope.pieLabels = ["FB", "Twitter", "Instagram"];
  $scope.pieData = [400, 500, 100];

  // --------------------- Line Chart Configuration ----------------------------
  $scope.lineSeries = ['Active', 'Inactive'];
  $scope.lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  $scope.lineData = [
    // feed in lineData $ave scoring
    [-10, 20, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  // --------------------- animation for green color .badge-notification icon---
  anime({
    targets: ['.badge-notify'],
    scale: [1.2, 1],
    delay: 1800,
    duration: 2000,
  });

  // --------------------- animation for blue  color .badge --------------------
  anime({
    targets: ['.badge'],
    rotate: {
      value: 720,
      delay: 300,
      duration: 1500,
      easing: 'easeInOutQuad'
    },
    direction: 'normal'
  });

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, Chats, $stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SocialCtrl', function($scope, Socials, $stateParams) {
  $scope.items = Socials.all();
})

.controller('AccountCtrl', function($scope, Accounts, $stateParams) {
  $scope.items = Accounts.all();
})

.controller('SaveSessionCtrl', function($scope, Session, $stateParams) {
  //$scope.name = 'World';
  //$scope.session = Session;
  //var result = JSON.parse(Session);
  $scope.result = Session;
})

.controller('SignInCtrl', function($scope, AuthLogin, $state, $stateParams) {  
  $scope.signIn = function(user) {    
    if(user == null || user.username == "" || user.username == null || user.password == "" || user.password == null) {
      alert("Please enter your username/password.");
    } else {
      //validate username through service call      
      //var user = $scope.user;
  //    alert($scope.user.username);
      $scope.AuthLogin = AuthLogin;

  //    alert(AuthLogin.data.auth_status);
      if(AuthLogin.data.auth_status=="true") {
        console.log('Sign-In', user);
        $state.go('tab.dash');
      } else {
        alert("User account or password invalid/incorrect. Please try again");
      }
    }
  }
});