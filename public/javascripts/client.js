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
    });
});

angular.module('strengthInNumbers')
.controller('playersCtrl', function($http) {
  console.log('playersCtrl is alive!');

  var ctrl = this;

  ctrl.getPlayers = function() {
    $http.get('/api/players').then(function(response) {
      ctrl.players = response.data;
      console.log('ctrl.players: ', ctrl.players)
    });
  };

  ctrl.getPlayers();
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
