'use strict';
/** Require mongoose package
    @constant
    @type {object}
 */
const mongoose = require("mongoose");

/** Utility functions */

/** Establish MongoDB connection
    @function
 */
function connectMongoDB() {
  mongoose.connect(
    `mongodb+srv://${ process.env.MONGO_ATLAS_USER }:${ process.env.MONGO_ATLAS_PW }@cluster0.4hjfq.mongodb.net/countries?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    }
  );
  console.log("db connected successfully");
}

/** Find documents from MongoDB
    @function
    @param {Object} model - A Model's name
    @param {Object} filter - A Mongoose's filter(query)
    @returns {Promise} Promise Object represents the matched data from MongoDB
 */
async function getRecordFromDB(model, filter) {
  return await model
    .find(filter)
    .select("-__v")
    .exec()
    .then(record => record)
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { connectMongoDB, getRecordFromDB };
