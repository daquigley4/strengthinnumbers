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
    // .state('movies-show', {
    //   url: "/movies/:movieId",
    //   templateUrl: "views/movies-show.html",
    //   controller: "moviesShowCtrl",
    //   controllerAs: "ctrl"
    // });
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
