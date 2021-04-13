"use strict";
/** Require express framework
 * {@link https://expressjs.com/}
    @constant
    @type {object}
 */
var express = require("express");
var router = express.Router();

/* GET feedback page. */
router.get("/", function (req, res) {
  res.render("feedback");
});

module.exports = router;
