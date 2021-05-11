"use strict";
/* global describe, it */
const assert = require("assert").strict;

const request = require('supertest');
const app = require('../app');
const { connectMongoDB, capitalizeName } = require('../lib/utils');
const mongoose = require("mongoose");

describe('API requests on app', function() {

  before(async function() {
    // set up database
    await connectMongoDB();
  });
  after(function() {
      mongoose.connection.close();
  });

  it('should return an expected GET / response', function() {
    return request(app)
      .get('/')
      .expect(200)
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
