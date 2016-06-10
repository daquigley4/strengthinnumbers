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
    .state('stats', {
      url: "/stats",
      templateUrl: "views/stats.html",
      controller: "statsCtrl"
    })
    .state('adv-stats', {
      url: "/adv-stats",
      templateUrl: "views/adv-stats.html",
      controller: "statsCtrl"
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
.controller('statsCtrl', function($scope, $http) {

  $scope.getPlayers = function() {
    $http.get('/api/players').then(function(response) {
      $scope.players = response.data;
      console.log('$scope.players: ', $scope.players);
      $scope.updateChart1();
      $scope.updateChart2();
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
  $scope.data2 = [];
  $scope.player1Index = 0;
  $scope.player2Index = 1;

  function pushStats(player, color, mult) {
    $scope.data.push({
      key: player.name,
      color: color,
      values: [
        { label: "PPG", value: mult * player.ppg },
        { label: "APG", value: mult * player.apg },
        { label: "REB", value: mult * player.reb },
        { label: "GP",  value: mult * player.gp},
        { label: "OREB", value: mult * player.oreb},
        { label: "DREB", value: mult * player.dreb},
        { label: "FG%", value: mult * player.fgpct},
        { label: "FTA", value: mult * player.fta},
        { label: "FT%", value: mult * player.ftpct},
        { label: "3PAT", value: mult * player.threepat},
        { label: "3P%", value: mult * player.threeppct},
        { label: "3PM", value: mult * player.threepmade}
      ]
    });
  }

  function pushAdvStats(player, color, mult) {
    $scope.data2.push({
      key: player.name,
      color: color,
      values: [
        { label: "STL", value: mult * player.stl},
        { label: "BLK", value: mult * player.blk},
        { label: "+/-", value: mult * player.plusminus},
        { label: "TRNV", value: mult * player.turnov},
        { label: "FGA", value: mult * player.fga},
        { label: "FGM", value: mult * player.fgm},
        { label: "MIN", value: mult * player.min},
        { label: "ORTG", value: mult * player.offrtg},
        { label: "DRTG", value: mult * player.defrtg},
        { label: "AST/TO", value: mult * player.astto},
        { label: "EFG%", value: mult * player.efgpct},
        { label: "TS%", value: mult * player.tspct},
        { label: "AST%", value: mult * player.astpct},
        { label: "PIE", value: mult * player.pie}
      ]
    });
  }

  $scope.updateChart1 = function() {
    var colors = [ "#d62728", "#1f77b4" ];
    $scope.data.length = 0;
    pushStats($scope.players[$scope.player1Index], colors[0], 1);
    pushStats($scope.players[$scope.player2Index], colors[1], 1);
  }

  $scope.updateChart2 = function() {
    var colors = [ "#d62728", "#1f77b4" ];
    $scope.data2.length = 0;
    pushAdvStats($scope.players[$scope.player1Index], colors[0], 1);
    pushAdvStats($scope.players[$scope.player2Index], colors[1], 1);
  }

});
