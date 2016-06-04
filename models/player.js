var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name: { name: String, required: true },
  team: { team: String, required: true },
  age:  { age: Number, required: true }
}, { timestamps: true } );

module.exports = mongoose.model('Player', PlayerSchema);
