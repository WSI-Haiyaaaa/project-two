"use strict";
/** Require express framework
 * {@link https://expressjs.com/}
    @constant
    @type {object}
 */
var express = require("express");
var router = express.Router();
/** Require mongoose framework
    @constant
    @type {object}
 */
const mongoose = require('mongoose');
const Country = require('../models/country_schema');

/* GET china page. */
router.get("/", function (req, res) {
  res.render("country", { countryName: "Thailand" });
});

module.exports = router;
