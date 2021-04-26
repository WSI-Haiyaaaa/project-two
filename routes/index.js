"use strict";
/** Require express framework
 * {@link https://expressjs.com/}
    @constant
    @type {object}
 */
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

module.exports = router;
