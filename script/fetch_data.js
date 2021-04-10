/** Require node-fetch package beacause fetch API is not implemented in Node
    @constant
    @type {object}
 */
const fetch = require("node-fetch");

// Test fetch data from api
let array = [
  "Japan",
  "China",
  "Singapore",
  "Thailand",
  "Malaysia",
  "South_Korea",
];

/** Fetch country data from Travelbriefing.org public API */
let documents_array = [];
let object = {};
for (let i = 0; i < array.length; i++) {
  let apiURL = `https://travelbriefing.org/${array[i]}?format=json`;
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.names);
    })
    .catch((status, err) => {
      console.log(status, err);
    });
}

/** Update and save country data to DB
    @function
    @param {Array} Contains a list of mongoDB documents
 */
function updateCountriesData(documents_array) {
  Model.insertMany(documents_array, function (err) {
    if (err) {
      return console.error(err);
    } else {
      console.log("Countries data inserted to MongoDB!");
    }
  });
}
