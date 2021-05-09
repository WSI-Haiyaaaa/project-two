"use strict";
/* global describe, it */
const assert = require("assert").strict;

const request = require('supertest');
const app = require('../app');
const { connectMongoDB, getRecordFromDB } = require('../lib/utils');


describe('API requests on app', function() {
  this.timeout(10000);

  before(async function() {
    // set up database
    await connectMongoDB();
  });

  // after(async function() {
  //   await getRecordFromDB();
  // });

  it('should return an expected GET /api/ response', function() {
    return request(app)
      .get('/')
      .expect(200)
      done();
  });

});
