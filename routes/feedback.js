"use strict";
/** Require express framework
 * {@link https://expressjs.com/}
    @constant
    @type {object}
 */
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

/** Require feedback scheme
    @constant
    @type {object}
 */
const Feedback = require("../models/feedback");

/* GET feedback page. */
router.get("/", function (req, res) {
  res.render("feedback");
});

/* POST feedback*/
router.post("/", function (req, res){
  const feedback = new Feedback({
    _id: new mongoose.Types.ObjectId(),
    subject: req.body.subject,
    email: req.body.email,
    feedback: req.body.feedback
  });
  feedback.save()
    .then((result) => {
      res.status(201).json({
        message: "feedback sent",
        createdFeedback:{
          subject: result.subject,
          email: result.email,
          feedback: result.feedback,
          _id: result._id
        },
        request: {
          type: "GET",
          url: `https://vast-plains-82531.herokuapp.com/feedback/${ result._id }`
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
