"use strict";
/* global describe, it */
const assert = require("assert").strict;

const request = require('supertest');
const app = require('../app');
const { connectMongoDB, getRecordFromDB, capitalizeName } = require('../lib/utils');
const countrySchema = require('../models/country_schema');
const mongoose = require("mongoose");

describe('API requests on app', function() {

  before(async function() {
    // set up database
    await connectMongoDB();

  });

  it('should return an expected GET / response', function() {
    return request(app)
      .get('/')
      .expect(200)
  });
});

//Test getRecordFromDB()
describe('Test getRecordFromDB()', function() {

  after(function() {
      mongoose.connection.close();
  });

  it('should return related data of the requested country', async() => {
    const result = await getRecordFromDB(countrySchema, { "names.name": "China" });
    assert.equal(result[0].names.name, 'China');
  }).timeout(15000);

  it('should return related data of the requested language', async() => {
  const result = await getRecordFromDB(countrySchema, { "language.language": "Chinese" });
  assert.equal(result[0].language[0].language, 'Chinese');
  }).timeout(15000);

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
