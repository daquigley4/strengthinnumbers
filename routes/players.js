var express = require('express');
var router = express.Router();

var Player = require('../models/player');

function seedPlayers() {

  var players = [
    { name: 'LeBron James',
      team: 'Cleveland Cavaliers',
      age: 31 ,
      height: '6-8',
      weight: '250 lbs' ,
      photo: 'lebron.jpg',
      position: 'Forward',
      gp: 76,
      ppg: 25.3,
      apg: 6.8,
      reb: 7.4,
      dreb: 6.0,
      oreb: 1.4,
      fgpct: '52%',
      fta: 6.5,
      ftpct: '73.1%',
      threepat: 3.7,
      threeppct: '30.9%',
      threepmade: 1.4,
      stl: 1.4,
      blk:  0.6,
      plusminus: 8.1,
      turnov: 3.3,
      fga: 18.1,
      fgm: 9.7,
      min: 35.6,
      offrtg: 112,
      defrtg: 101.4,
      astto: 2.06,
      efgpct: '55.1%',
      tspct: '58.8%',
      astpct: '33.9%',
      pie: 18.9    },

    { name: 'Kevin Durant',
      team: 'Oklahoma City Thunder',
      age: 27,
      height: '6-9',
      weight: '240 lbs' ,
      photo: 'Durant.jpg',
      position: 'Forward',
      gp: 72,
      ppg: 28.2,
      apg: 5.0,
      reb: 8.2,
      dreb: 7.6,
      oreb: 0.6,
      fgpct: '50.5%',
      fta: 6.9,
      ftpct: '89.8%',
      threepat: 6.7,
      threeppct: '38.7%',
      threepmade: 2.6,
      stl: 1.0,
      blk:  1.2,
      plusminus: 9.0,
      turnov: 3.5,
      fga: 19.2,
      fgm: 9.7,
      min: 35.8,
      offrtg: 113.4,
      defrtg: 102.2,
      astto: 1.44,
      efgpct: '57.3%',
      tspct: '63.4%',
      astpct: '23.0%',
      pie: 19.4   },

    { name: 'Steph Curry',
      team: 'Golden State Warriors',
      age: 28,
      height: '6-3',
      weight: '190 lbs' ,
      photo: 'Curry.jpg',
      position: 'Guard',
      gp: 79,
      ppg: 30.1,
      apg: 6.7,
      reb: 5.4,
      dreb: 4.6,
      oreb: 0.9,
      fgpct: '50.4%',
      fta: 5.1,
      ftpct: '90.8%',
      threepat: 11.2,
      threeppct: '45.4%',
      threepmade: 5.1,
      stl: 2.1,
      blk:  0.2,
      plusminus: 12.9,
      turnov: 3.3,
      fga: 20.2,
      fgm: 10.2,
      min: 34.2,
      offrtg: 116.7,
      defrtg: 98.3,
      astto: 2.01,
      efgpct: '63.0%',
      tspct: '66.9%',
      astpct: '31.5%',
      pie: 19.7   },

    { name: 'Russell Westbrook',
      team: 'Oklahoma City Thunder',
      age: 27,
      height: '6-3',
      weight: '200 lbs' ,
      photo: 'Westbrook.jpg',
      position: 'Guard',
      gp: 80,
      ppg: 23.5,
      apg: 10.4,
      reb: 7.8,
      dreb: 6.0,
      oreb: 1.8,
      fgpct: '45.4%',
      fta: 7.2,
      ftpct: '81.2%',
      threepat: 4.3,
      threeppct: '29.6%',
      threepmade: 1.3,
      stl: 2.0,
      blk:  0.3,
      plusminus: 7.9,
      turnov: 4.3,
      fga: 18.1,
      fgm: 8.2,
      min: 34.4,
      offrtg: 113.0,
      defrtg: 102.2,
      astto: 2.44,
      efgpct: '48.9%',
      tspct: '55.4%',
      astpct: '46.8%',
      pie: 18.8   },

  { name: 'Paul George',
      team: 'Indiana Pacers',
      age: 26,
      height: '6-9',
      weight: '220 lbs' ,
      photo: 'george.jpg',
      position: 'Forward',
      gp: 81,
      ppg: 23.1,
      apg: 4.1,
      reb: 7.0,
      dreb: 6.0,
      oreb: 1.0,
      fgpct: '41.8%',
      fta: 6.5,
      ftpct: '86.0%',
      threepat: 7.0,
      threeppct: '37.1%',
      threepmade: 2.6,
      stl: 1.9,
      blk:  0.4,
      plusminus: 2.2,
      turnov: 3.3,
      fga: 17.9,
      fgm: 2.6,
      min: 34.8,
      offrtg: 105.2,
      defrtg: 99.2,
      astto: 1.24,
      efgpct: '49.0%',
      tspct: '55.7%',
      astpct: '20.3%',
      pie: 15.1   },

    { name: 'Kawhi Leonard',
      team: 'San Antonio Spurs',
      age: 24,
      height: '6-7',
      weight: '230 lbs' ,
      photo: 'kawhi.jpg',
      position: 'Forward',
      gp: 72,
      ppg: 21.2,
      apg: 2.6,
      reb: 6.8,
      dreb: 5.5,
      oreb: 1.3,
      fgpct: '50.6%',
      fta: 4.6,
      ftpct: '87.4%',
      threepat: 4.0,
      threeppct: '44.3%',
      threepmade: 1.8,
      stl: 1.8,
      blk:  1.0,
      plusminus: 9.1,
      turnov: 1.5,
      fga: 15.1,
      fgm: 7.7,
      min: 33.1,
      offrtg: 109.2,
      defrtg: 94.9,
      astto: 1.77,
      efgpct: '56.5%',
      tspct: '61.6%',
      astpct: '12.2%',
      pie: 17.0   }
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

//INDEX Route
router.get('/', function(req, res, next) {
  Player.find({})
  .then(function(players) {
    res.json(players);
  });
});

//SHOW Route
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
