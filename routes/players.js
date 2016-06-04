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

// INDEX Route
router.get('/', function(req, res, next) {
  Player.find({})
  .then(function(players) {
    res.json(players);
  });
});

// SHOW Route
router.get('/:id', function(req, res, next) {
  Player.findById(req.params.id)
  .then(function(movie) {
    if (!player) {
      res.status(404).json( { error: 'Not found' } )
    }
    res.json(player);
  })
  .catch(function(err) {
    return next(err);
  });
});

module.exports = router;
