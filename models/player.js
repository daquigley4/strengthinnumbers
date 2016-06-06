var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  team:      { type: String, required: true },
  age:       { type: Number, required: true },
  height:    { type: String, required: true },
  weight:    { type: String, requires: true },
  photo:     { type: String, requires: true },
  position:  { type: String, required: true },
  ppg:       { type: Number, required: true },
  apg:       { type: Number, required: true },
  reb:       { type: Number, required: true },
  dreb:      { type: Number, required: true },
  oreb:      { type: Number, required: true },
  fgpct:     { type: String, required: true },
  fta:       { type: Number, required: true },
  ftpct:     { type: String, required: true },
  threepat:  { type: Number, required: true },
  threeppct: { type: String, required: true },
  threepmade:{ type: Number, required: true },
  stl:       { type: Number, required: true },
  blk:       { type: Number, required: true },
  plusminus: { type: Number, required: true },
  turnov:    { type: Number, required: true },
  fga:       { type: Number, required: true },
  fgm:       { type: Number, required: true },
  min:       { type: Number, required: true },
  offrtg:    { type: Number, required: true },
  defrtg:    { type: Number, required: true },
  astto:     { type: Number, required: true },
  efgpct:    { type: String, required: true },
  tspct:     { type: String, required: true },
  astpct:    { type: String, required: true },
  gp:        { type: Number, required: true },
  pie:       { type: Number, required: true }
}, { timestamps: true } );

module.exports = mongoose.model('Player', PlayerSchema);
