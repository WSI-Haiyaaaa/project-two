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

//Fetch country name
async function fetchName(url) {
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

//Fetch Language
  async function fetchLanguage(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        return data.language[0].language;
        // console.log(data.names);
      })
      .catch((status, err) => {
        console.log(status, err);
      });
  }

//Fetch electricity
async function fetchElectricity(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
      return data.electricity;
      })
      .catch((status, err) => {
        console.log(status, err);
      });
}

//Fetch telephone
async function fetchTelephone(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
      return data.telephone;
      })
      .catch((status, err) => {
        console.log(status, err);
      });
}

//Fetch water
async function fetchWater(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
      return data.water.short;
      })
      .catch((status, err) => {
        console.log(status, err);
      });
}

//Fetch vaccinations
async function fetchVaccinations(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
      return data.vaccinations;
      })
      .catch((status, err) => {
        console.log(status, err);
      });
}

//Fetch currency
async function fetchCurrency(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
      return data.currency;
      })
      .catch((status, err) => {
        console.log(status, err);
      });
}

//Fetch neighbors
async function fetchNeighbors(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
      return data.neighbors;
      })
      .catch((status, err) => {
        console.log(status, err);
      });
}

  describe('South_Korea_data', function(done) {

    this.timeout(10000);

    /** Fetch data */
      let url = `https://travelbriefing.org/South_Korea?format=json`;

    describe('#getName', () => {
    it('returns name', async () => {
      const result = await fetchName(url);
      assert.equal(result, 'South Korea');
    });
    });

    describe('#getLanguage', () => {
    it('returns language', async () => {
      const result = await fetchLanguage(url);
      assert.equal(result, 'Korean');
    });
    });

    describe('#getElectricity', () => {
    it('returns electricity', async () => {
      const result = await fetchElectricity(url);
      assert.equal(result.frequency,'60');
      assert.equal(result.plugs[0],'C');
      assert.equal(result.plugs[1],'F');
      assert.equal(result.voltage,'220');
    });
    });

    describe('#getTelephone', () => {
    it('returns telephone', async () => {
      const result = await fetchTelephone(url);
      assert.equal(result.ambulance, '119');
      assert.equal(result.calling_code, '82');
      assert.equal(result.fire, '119');
      assert.equal(result.police, '112');
    });
    });

    describe('#getWater', () => {
    it('returns water', async () => {
      const result = await fetchWater(url);
      assert.equal(result, 'not recommended');
    });
    });

    describe('#getVaccinations', () => {
    it('returns vaccinations', async () => {
      const result = await fetchVaccinations(url);
      assert.equal(result[0].name, 'Malaria');
      assert.equal(result[1].name, 'Hepatitis A');
      assert.equal(result[2].name, 'Hepatitis B');
      assert.equal(result[3].name, 'Tyfoid');
      assert.equal(result[4].name, 'DTP');
    });
    });

    describe('#getCurrency', () => {
    it('returns currency', async () => {
      const result = await fetchCurrency(url);
      assert.equal(result.name, 'Won');
      assert.equal(result.code, 'KRW');
    });
    });

    describe('#getNeighbors', () => {
    it('returns neighbors', async () => {
      const result = await fetchNeighbors(url);
      assert.equal(result[0].name, 'North Korea');
      assert.equal(result[1].name, 'Japan');
      assert.equal(result[2].name, 'Taiwan');
      assert.equal(result[3].name, 'China');
      assert.equal(result[4].name, 'Hong Kong');
    });
    });

  });
