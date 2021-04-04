const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: [String],
  language: [String],
  electricity: [String],
  telephone: [String],
  water: [String],
  vaccination: [String],
  currency: [Number],
  neighbors: [String],
  dos: [String],
  donts: [String],
});

module.exports = mongoose.model('country', countrySchema);
