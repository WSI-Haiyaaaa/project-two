"use strict";
/** Require node-fetch package beacause fetch API is not implemented in Node
    @constant
    @type {object}
 */
const originalFetch = require("node-fetch");
/** Require fetch-retry package to retry failed requests
    @constant
    @type {object}
 */
const fetch = require("fetch-retry")(originalFetch, {
  retries: 5,
  retryDelay: 2000
});
/** Require MongoDB model
    @constant
    @type {object}
*/
const CountryModel = require("../models/country_schema");
/** Require utility functions
    @constant
    @type {object}
*/
const utils = require("../lib/utils");
/** Require dotenv
 {@link https://www.npmjs.com/package/dotenv}
 @type {object}
*/
require("dotenv").config({ path: "../.env" });

let date = new Date();
let today = date.getDate();
let runScriptDay = 4;
/** Check to see if today is the same as runScriptDay */
if (today === runScriptDay) {
  // Setip DB connection
  utils.connectMongoDB();

  // Delete all country data
  deleteCollection(CountryModel);

  // List of country's name
  let array = [
    "Japan",
    "China",
    "Singapore",
    "Thailand",
    "Malaysia",
    "South_Korea"
  ];

  /** Fetch data of six countries */
  for (let i = 0; i < array.length; i++) {
    let apiURL = `https://travelbriefing.org/${ array[i] }?format=json`;
    setTimeout(function () {
      fetchData(apiURL).then((result) => {
        updateCountryData(result, array[i]);
      });
    }, 6000 * i);
  }
}

/** Fetch data from the api
    @function
    @param {string} url - API endpoint
    @returns {Promise} - A Promise object represents the fetched data
 */
function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      let storage = {
        names: data.names,
        language: data.language,
        electricity: data.electricity,
        telephone: data.telephone,
        water: data.water,
        vaccinations: data.vaccinations,
        currency: data.currency,
        neighbors: data.neighbors
      };
      return storage;
    })
    .catch((status, err) => {
      console.log(status, err);
    });
}

/** Update and save country data to DB
    @function
    @param {Object} document - A monogoDB document
    @param {string} currentCountry - Country's name
 */
function updateCountryData(document, currentCountry) {
  CountryModel.create(document, function (err) {
    if (err) {
      return console.error(err);
    } else {
      console.log(`${ currentCountry } data updated to MongoDB!`);
    }
  });
}

/** Update and save country data to DB
    @function
    @param {Object} model - A monogoDB model object
 */
function deleteCollection(model) {
  model.collection.drop();
  console.log("collection dropped");
}
