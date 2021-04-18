'use strict';
const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
  names: Object,
  language: Array,
  electricity: Object,
  telephone: Object,
  water: Object,
  vaccinations: Array,
  currency: Object,
  neighbors: Array
});

module.exports = mongoose.model("country", countrySchema);
