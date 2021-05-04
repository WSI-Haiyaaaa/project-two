"use strict";
/* global describe, it */
const assert = require("assert").strict;
/** Require mongoose package
    @constant
    @type {object}
 */

const fetch = require("node-fetch");

/** Fetch data from the api
    @function
    @param {string} url - API endpoint
    @param {string} currentCountry - Country's name
 */

// Fetch country name
async function fetchName(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data =>
      data.names.name
      // console.log(data.names);
    )
    .catch((status, err) => {
      console.log(status, err);
    });
}

// Fetch Language
async function fetchLanguage(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data =>
      data.language[0].language
      // console.log(data.names);
    )
    .catch((status, err) => {
      console.log(status, err);
    });
}

// Fetch electricity
async function fetchElectricity(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data => data.electricity)
    .catch((status, err) => {
      console.log(status, err);
    });
}

// Fetch telephone
async function fetchTelephone(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data => data.telephone)
    .catch((status, err) => {
      console.log(status, err);
    });
}

// Fetch water
async function fetchWater(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data => data.water.short)
    .catch((status, err) => {
      console.log(status, err);
    });
}

// Fetch vaccinations
async function fetchVaccinations(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data => data.vaccinations)
    .catch((status, err) => {
      console.log(status, err);
    });
}

// Fetch currency
async function fetchCurrency(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data => data.currency)
    .catch((status, err) => {
      console.log(status, err);
    });
}

// Fetch neighbors
async function fetchNeighbors(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(data => data.neighbors)
    .catch((status, err) => {
      console.log(status, err);
    });
}

describe('japan_data', function() {

  this.timeout(10000);

  /** Fetch data */
  let url = `https://travelbriefing.org/Japan?format=json`;

  describe('#getName', () => {
    it('returns name', async () => {
      const result = await fetchName(url);
      assert.equal(result, 'Japan');
    });
  });

  describe('#getLanguage', () => {
    it('returns language', async () => {
      const result = await fetchLanguage(url);
      assert.equal(result, 'Japanese');
    });
  });

  describe('#getElectricity', () => {
    it('returns electricity', async () => {
      const result = await fetchElectricity(url);
      assert.equal(result.frequency, '50 / 60');
      assert.equal(result.plugs[0], 'A');
      assert.equal(result.plugs[1], 'B');
      assert.equal(result.voltage, '100');
    });
  });

  describe('#getTelephone', () => {
    it('returns telephone', async () => {
      const result = await fetchTelephone(url);
      assert.equal(result.ambulance, '119');
      assert.equal(result.calling_code, '81');
      assert.equal(result.fire, '119');
      assert.equal(result.police, '110');
    });
  });

  describe('#getWater', () => {
    it('returns water', async () => {
      const result = await fetchWater(url);
      assert.equal(result, 'safe');
    });
  });

  describe('#getVaccinations', () => {
    it('returns vaccinations', async () => {
      const result = await fetchVaccinations(url);
      assert.equal(result.length, 0);
    });
  });

  describe('#getCurrency', () => {
    it('returns currency', async () => {
      const result = await fetchCurrency(url);
      assert.equal(result.name, 'Yen');
      assert.equal(result.code, 'JPY');
    });
  });

  describe('#getNeighbors', () => {
    it('returns neighbors', async () => {
      const result = await fetchNeighbors(url);
      assert.equal(result[0].name, 'South Korea');
      assert.equal(result[1].name, 'North Korea');
      assert.equal(result[2].name, 'Taiwan');
      assert.equal(result[3].name, 'Northern Mariana Islands');
      assert.equal(result[4].name, 'Palau');
    });
  });

});
