'use strict';
const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  subject: {type: String, required:true},
  email: {type: String, required:true},
  feedback: {type: String, required:true}
});

module.exports = mongoose.model("feedback", feedbackSchema);
