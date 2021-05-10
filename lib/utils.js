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
  )
  .then(()=> {
    afterwards();
  });

  function afterwards() {
    mongoose.connection.close();
  }
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

/** Capitalize the first letter of country name
    @function
    @param {String} rawName - A country name with lowercase
    @returns {String} - A String represents capitalized country name
 */
function capitalizeName(rawName) {
  // Require additional process if the coutry name is combined with two words
  if (rawName.includes("_")) {
    const letters_array = rawName
      .split("_")
      .map(letter => letter.charAt(0).toUpperCase() + letter.slice(1));
    return letters_array.join(" ");
  } else {
    return rawName.charAt(0).toUpperCase() + rawName.slice(1);
  }
}

module.exports = { connectMongoDB, getRecordFromDB, capitalizeName };
