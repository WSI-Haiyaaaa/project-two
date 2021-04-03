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
//post request for new country data

router.post('/', (req, res, next) =>{

  const country = new Country({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    language: req.body.language,
    electricity: req.body.electricity,
    telephone: req.body.telephone,
    water: req.body.water,
    vaccination: req.body.vaccination,
    currency: req.body.currency,
    neighbors: req.body.neighbors,
    dos: req.body.dos,
    donts: req.body.donts,
  });
  country
  .save()
  .then(result => {
    res.status(201).json({
      message: 'country added',
      addedCountry: {
        name: result.name,
        language: result.language,
        electricity: result.electricity,
        telephone: result.telephone,
        water: result.water,
        vaccination: result.vaccination,
        currency: result.currency,
        neighbors: result.neighbors,
        dos: result.dos,
        donts: result.donts,
      },
      request: {
        type: "GET",
        url: "http://localhost:3000/countries/" + result._id
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;
