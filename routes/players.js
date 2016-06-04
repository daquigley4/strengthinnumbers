var express = require('express');
var router = express.Router();

var Player = require('../models/player');

function seedPlayers() {
  var players = [
    { name: 'LeBron James', team: 'Cleveland Cavaliers',        age: 31 },
    { name: 'Kevin Durant', team: 'Oklahoma City Thunder',      age: 28 },
    { name: 'Steph Curry', team: 'Golden State Warriors',       age: 28 },
    { name: 'Russell Westbrook', team: 'Oklahoma City Thunder', age: 27 }
  ];

  Player.find({}).remove()
  .then(function() {
    return Player.create(players);
  })
  .then(function() {
    return Player.find({});
  })
  .then(function(found) {
    console.log('We saved and retrieved', found.length, 'players.');
  });
}

seedPlayers();

module.exports = router;
