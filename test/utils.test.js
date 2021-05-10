"use strict";
/* global describe, it */
const assert = require("assert").strict;

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

  it('should return an expected GET / response', function() {
    return request(app)
      .get('/')
      .expect(200)
  });
});

//Test getRecordFromDB()
describe('Test getRecordFromDB()', function(done) {
  this.timeout(50000);
  it('should return a country nane from DB', async() => {
    const result = await getRecordFromDB(countrySchema);
    assert.equal(result[0].names.name, 'Japan');
  });

});

//Test capitalizeName()
describe('Test capitalizeName()', function(done) {
  this.timeout(10000);
  it('should return a capitalized the first letter of country name (test one with underscore) ', function(){
    const result = capitalizeName("south_korea");
    assert.equal(result, 'South Korea');
  });

  it('should return a capitalized the first letter of country name ', function(){
    const result = capitalizeName("china");
    assert.equal(result, 'China');
  });
});
