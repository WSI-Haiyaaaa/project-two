"use strict";
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index.pug");
});
/* GET feedback page. */
router.get("/feedback", function (req, res) {
  res.render("feedback");
});
/* GET china page. */
router.get("/china", function (req, res) {
  res.render("china");
});
/* GET japan page. */
router.get("/japan", function (req, res) {
  res.render("japan");
});
/* GET malaysia page. */
router.get("/malaysia", function (req, res) {
  res.render("malaysia");
});
/* GET singapore page. */
router.get("/singapore", function (req, res) {
  res.render("singapore");
});
/* GET south korea page. */
router.get("/south-korea", function (req, res) {
  res.render("south_korea");
});
/* GET thailand page. */
router.get("/thailand", function (req, res) {
  res.render("thailand");
});

router.get("/index.json", function (req, res) {
  res.json({ title: "Travelbriefing", greeting: "Hello!" });
});

module.exports = router;
