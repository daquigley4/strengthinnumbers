angular.module('strengthInNumbers', []);

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
