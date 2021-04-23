"use strict";
/* global describe, it */
const assert = require("assert").strict;
const mongoose = require('mongoose');


// const su = require('../lib/scraper');
// const cu = require('../routes/country');
const Country = require('../models/country_schema');
const countryName = Country.name;


// try to test fetched data-countryName
// h1#country= countryName p#fullname
describe('country_data', function() {

  beforeEach(function() {
  });
  describe('country_name', function() {
    it('should return the expected country name', function() {
      assert.equal(countryName, 'China');
    });
  });
});
