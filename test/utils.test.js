"use strict";
/* global describe, it */
const assert = require("assert").strict;
const mongoose = require("mongoose");

const request = require('supertest');
const app = require('../app');
const { connectMongoDB, getRecordFromDB, capitalizeName } = require('../lib/utils');
const countrySchema = require('../models/country_schema');

describe('API requests on app', function() {
  this.timeout(10000);

  before(async function() {
    // set up database
    await connectMongoDB();
  });

  it('should return an expected GET /api/ response', function() {
    return request(app)
      .get('/')
      .expect(200)
      done();
  });
});

//Test getRecordFromDB()
describe('Test getRecordFromDB()', function() {
  it('should return a country nane from DB', async() => {
    const result = await getRecordFromDB(countrySchema);
    assert.equal(result[0].names.name, 'Japan');
  });

  it('should return expected languages from DB', async() => {
    const result = await getRecordFromDB(countrySchema);
    assert.equal(6,result.length, 'expected 6 languages');
  });

});

//Test capitalizeName()
describe('Test capitalizeName()', function() {
  it('should return a capitalized the first letter of country name (test one with underscore) ', function(){
    const result = capitalizeName("south_korea");
    assert.equal(result, 'South Korea');
  });

  it('should return a capitalized the first letter of country name ', function(){
    const result = capitalizeName("china");
    assert.equal(result, 'China');
  });
});
