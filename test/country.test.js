"use strict";
/* global describe, it */
const assert = require("assert").strict;
/** Require mongoose package
    @constant
    @type {object}
 */
const mongoose = require('mongoose');
const fetch = require("node-fetch");

const utils = require('../lib/utils');
utils.connectMongoDB();
// const data = require('../script/fetch_data');

/** Fetch data from the api
    @function
    @param {string} url - API endpoint
    @param {string} currentCountry - Country's name
 */

async function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      return data.names.name;
      // console.log(data.names);
    })
    .catch((status, err) => {
      console.log(status, err);
    });
}

describe('country_data', function() {
  // List of country's name
  // let array = [
  //   "Japan"
  // ];

  /** Fetch data */
  let url = `https://travelbriefing.org/Japan?format=json`;

  describe('#getName', () => {
  it('returns name', async () => {
    const result = await fetchData(url);
    assert.equal(result, 'Japan');
  });
});

// describe('#getName', () => {
//   it('resolves with name', () => {
//     return fetchData(url).then(res => {
//       assert.equal(res, 'Japan')
//     });
//   });
// });

  // beforeEach(function() {
  // });
  // describe('country_name', function() {
  //   it('should return the expected country name', function() {
  //     assert.equal(result, 'Japan');
  //   });
  // });
});
