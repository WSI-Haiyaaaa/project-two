"use strict";
/** Require express framework
 * {@link https://expressjs.com/}
    @constant
    @type {object}
 */
var express = require("express");
var router = express.Router();
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

async function getCoutryRecord() {
  return Country.find({ "names.name": "China" })
    .select("-__v")
    .exec()
    .then((record) => {
      if (!record) {
        // If not, set status 404 Not Found
        res.status(404).json({
          error: "Country not found",
        });
      } else {
        // If exists, set status 200 OK and render the page with the object
        return record;
      }
    })
    .catch((err) => {
      // Set status of 500 Internal Server Error if an error is catch
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
}

async function getCultureRecord() {
  return Culture.find({ countryName: "china" })
    .select("-__v")
    .exec()
    .then((record) => {
      // Check if the record id exists
      if (!record) {
        // If not, set status 404 Not Found
        res.status(404).json({
          error: "Country not found",
        });
      } else {
        // If exists, set status 200 OK and render the page with the object
        return record;
      }
    })
    .catch((err) => {
      // Set status of 500 Internal Server Error if an error is catch
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
}

/* GET china page. */
router.get("/", async function (req, res) {
  try {
    const countryRecord = await getCoutryRecord();
    const cultureRecord = await getCultureRecord();
    if (!countryRecord) {
      // If not, set status 404 Not Found
      res.status(404).json({
        error: "Country not found",
      });
    } else if (!cultureRecord) {
      res.status(404).json({
        error: "Culture not found",
      });
    } else {
      console.log(cultureRecord);
      res
        .status(200)
        .render("country", { country: countryRecord, culture: cultureRecord });
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
