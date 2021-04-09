const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Country = require('../models/country_schema');

//get request for all countries
router.get('/',(req, res, next) =>{
  Country.find()
  .select('-__v')
  .populate('country', '-__v')
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      countries: docs.map(doc => {
        return {
          recipe:doc,
          request:{
            type: "GET",
            url: "http://localhost:3000/countries/" + result._id
          }
        }
      })
    }
    res.status(200).json(response);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;
