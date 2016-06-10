angular.module('strengthInNumbers', ['ui.router', 'nvd3']);

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
      controller: "chartCtrl"
    })
    .state('chart', {
      url: "/chart",
      templateUrl: "views/chart.html",
      controller: "chartCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html"
    });
});

/*
angular.module('strengthInNumbers')
.controller('playersCtrl', function($scope, $http) {
  console.log('playersCtrl is alive!');

  $scope.getPlayer1 = function() {
    $http.get('/api/players').then(function(response) {
      $scope.player1 = response.data;
      console.log('$scope.player1: ', $scope.player1)
    });
  };
  $scope.getPlayer2 = function() {
    $http.get('/api/players').then(function(response) {
      $scope.player2 = response.data;
      console.log('$scope.player2: ', $scope.player2)
    });
  };
  $scope.getPlayer1();
  $scope.getPlayer2();
});
*/

angular.module('strengthInNumbers')
.controller('chartCtrl', function($scope, $http) {

  $scope.getPlayers = function() {
    $http.get('/api/players').then(function(response) {
      $scope.players = response.data;
      console.log('$scope.players: ', $scope.players);
      $scope.updateChart();
    });
  };

  $scope.getPlayers();

  $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };

  $scope.data = [];
  $scope.player1Index = 0;
  $scope.player2Index = 1;

  function pushPlayer(player, color, mult) {
    $scope.data.push({
      key: player.name,
      color: color,
      values: [
        { label: "PPG", value: mult * player.ppg },
        { label: "APG", value: mult * player.apg },
        { label: "REB", value: mult * player.reb }
      ]
    });
  }

  $scope.updateChart = function() {
    var colors = [ "#d62728", "#1f77b4" ];
    $scope.data.length = 0;
    pushPlayer($scope.players[$scope.player1Index], colors[0], 1);
    pushPlayer($scope.players[$scope.player2Index], colors[1], 1);
  }
});
