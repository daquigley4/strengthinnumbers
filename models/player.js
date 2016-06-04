var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  age:  { type: Number, required: true }
}, { timestamps: true } );

module.exports = mongoose.model('Player', PlayerSchema);
