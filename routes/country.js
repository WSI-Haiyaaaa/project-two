"use strict";
const express = require("express");
const router = express.Router();
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

/* GET country page. */
router.get("/:country", async function (req, res) {
  // Get country name from the request parameter
  const countryName = req.params.country;
  const countryRecord = await utils.getRecordFromDB(Country, {
    "names.name": utils.capitalizeName(countryName)
  });
  const cultureRecord = await utils.getRecordFromDB(Culture, {
    countryName: countryName
  });
  if (!countryRecord) {
    // If not, set status 404 Not Found
    res.status(404).json({
      error: "Country not found"
    });
  } else if (!cultureRecord) {
    // If not, set status 404 Not Found
    res.status(404).json({
      error: "Culture not found"
    });
  }
  // If exists, set status 200 OK and render the page with the object
  res
    .status(200)
    .render("country", { country: countryRecord, culture: cultureRecord });
});
module.exports = router;
