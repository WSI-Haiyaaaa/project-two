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

module.exports = { connectMongoDB };
