"use strict";
/** Require express framework
 * {@link https://expressjs.com/}
    @constant
    @type {object}
 */
var express = require("express");
var router = express.Router();
/** Require utility functions
    @constant
    @type {object}
 */
const utils = require("../lib/utils");
/** Require Country scheme
    @constant
    @type {object}
  */  
const Country = require("../models/country_schema");
/** Require Culture scheme
    @constant
    @type {object}
  */
const Culture = require("../models/dos_and_donts_schema");

/* GET singapore page. */
router.get("/", async function (req, res) {
  const countryRecord = await utils.getRecordFromDB(Country, {
    "names.name": "Singapore",
  });
  const cultureRecord = await utils.getRecordFromDB(Culture, {
    countryName: "singapore",
  });
  if (!countryRecord) {
    // If not, set status 404 Not Found
    res.status(404).json({
      error: "Country not found",
    });
  } else if (!cultureRecord) {
    // If not, set status 404 Not Found
    res.status(404).json({
      error: "Culture not found",
    });
  }
  // If exists, set status 200 OK and render the page with the object
  res
    .status(200)
    .render("country", { country: countryRecord, culture: cultureRecord });
});

module.exports = router;
