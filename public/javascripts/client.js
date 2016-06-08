angular.module('strengthInNumbers', ['ui.router']);

angular.module('strengthInNumbers')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('test', {
      url: "/test",
      templateUrl: "views/test.html"
    })
    .state('players', {
      url: "/players",
      templateUrl: "views/players.html",
      controller: "playersCtrl",
      controllerAs: "ctrl"
    })
    .state('favorites', {
      url: "/favorites",
      templateUrl: "views/favorites.html",
      controller: "favoritesCtrl",
      controllerAs: "ctrl"
    })
    .state('test2', {
      url: "/test2",
      templateUrl: "views/test2.html",
      controller: "test2Ctrl",
      controllerAs: "ctrl"
    });
});

angular.module('strengthInNumbers')
.controller('playersCtrl', function($http) {
  console.log('playersCtrl is alive!');

  var ctrl = this;

  ctrl.getPlayer1 = function() {
    $http.get('/api/players').then(function(response) {
      ctrl.player1 = response.data;
      console.log('ctrl.player1: ', ctrl.player1)
    });
  };
  ctrl.getPlayer2 = function() {
    $http.get('/api/players').then(function(response) {
      ctrl.player2 = response.data;
      console.log('ctrl.player2: ', ctrl.player2)
    });
  };
  ctrl.getPlayer1();
  ctrl.getPlayer2();
});

angular.module('strengthInNumbers')
.controller('favoritesCtrl', function($http) {
  console.log('favoritesCtrl is alive!');

  var ctrl = this;

  ctrl.getFavPlayers = function() {
    $http.get('/api/players').then(function(response) {
      ctrl.players = response.data;
      console.log('ctrl.players: ', ctrl.players)
    });
  };

  ctrl.getFavPlayers();
});

angular.module('strengthInNumbers')
.controller('test2Ctrl', function($http) {
  console.log('test2Ctrl is alive!');

  var ctrl = this;

});

