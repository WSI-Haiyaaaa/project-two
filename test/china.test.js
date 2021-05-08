"use strict";
/* global describe, it */
const assert = require("assert").strict;
/** Require mongoose package
    @constant
    @type {object}
 */
//
// const fetch = require("node-fetch");
//
// /** Fetch data from the api
//     @function
//     @param {string} url - API endpoint
//     @param {string} currentCountry - Country's name
//  */
//
// // Fetch country name
// async function fetchName(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data =>
//       data.names.name
//       // console.log(data.names);
//     )
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// // Fetch Language
// async function fetchLanguage(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data =>
//       data.language
//       // console.log(data.names);
//     )
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// // Fetch electricity
// async function fetchElectricity(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data => data.electricity)
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// // Fetch telephone
// async function fetchTelephone(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data => data.telephone)
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// // Fetch water
// async function fetchWater(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data => data.water.short)
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// // Fetch vaccinations
// async function fetchVaccinations(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data => data.vaccinations)
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// // Fetch currency
// async function fetchCurrency(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data => data.currency)
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// // Fetch neighbors
// async function fetchNeighbors(url) {
//   return await fetch(url)
//     .then(res => res.json())
//     .then(data => data.neighbors)
//     .catch((status, err) => {
//       console.log(status, err);
//     });
// }
//
// describe('china_data', function() {
//
//   this.timeout(10000);
//
//   /** Fetch data */
//   let url = `https://travelbriefing.org/China?format=json`;
//
//   describe('#getName', () => {
//     it('returns name', async () => {
//       const result = await fetchName(url);
//       assert.equal(result, "China");
//     });
//   });
//
//   describe('#getLanguage', () => {
//     it('returns language', async () => {
//       const result = await fetchLanguage(url);
//       assert.equal(result[0].language, 'Chinese');
//       assert.equal(result[1].language, 'Cantonese');
//       assert.equal(result[2].language, 'Shanghaiese');
//       assert.equal(result[3].language, 'Minnan');
//       assert.equal(result[4].language, 'Xiang');
//       assert.equal(result[5].language, 'Gan');
//     });
//   });
//
//   describe('#getElectricity', () => {
//     it('returns electricity', async () => {
//       const result = await fetchElectricity(url);
//       assert.equal(result.frequency, '50');
//       assert.equal(result.plugs[0], 'A');
//       assert.equal(result.plugs[1], 'C');
//       assert.equal(result.plugs[2], 'I');
//       assert.equal(result.voltage, '220');
//     });
//   });
//
//   describe('#getTelephone', () => {
//     it('returns telephone', async () => {
//       const result = await fetchTelephone(url);
//       assert.equal(result.ambulance, '120');
//       assert.equal(result.calling_code, '86');
//       assert.equal(result.fire, '119');
//       assert.equal(result.police, '110');
//     });
//   });
//
//   describe('#getWater', () => {
//     it('returns water', async () => {
//       const result = await fetchWater(url);
//       assert.equal(result, 'not safe');
//     });
//   });
//
//   describe('#getVaccinations', () => {
//     it('returns vaccinations', async () => {
//       const result = await fetchVaccinations(url);
//       assert.equal(result[0].name, 'Malaria');
//       assert.equal(result[1].name, 'Hepatitis A');
//       assert.equal(result[2].name, 'Hepatitis B');
//       assert.equal(result[3].name, 'Tyfoid');
//       assert.equal(result[4].name, 'DTP');
//     });
//   });
//
//   describe('#getCurrency', () => {
//     it('returns currency', async () => {
//       const result = await fetchCurrency(url);
//       assert.equal(result.name, 'Yuan Renminbi');
//       assert.equal(result.code, 'CNY');
//     });
//   });
//
//   describe('#getNeighbors', () => {
//     it('returns neighbors', async () => {
//       const result = await fetchNeighbors(url);
//       assert.equal(result[0].name, 'Mongolia');
//       assert.equal(result[1].name, 'Laos');
//       assert.equal(result[2].name, 'Russia');
//       assert.equal(result[3].name, 'Vietnam');
//       assert.equal(result[4].name, 'Bhutan');
//     });
//   });
//
// });

// const utils = require("/lib/utils.js");
// const {connectMongoDB, getRecordFromDB} = require('../lib/utils');
//
// describe('Testing the connection', function() {
//   before('connect', function() {
//     return mongoose.connect(`mongodb+srv://${ process.env.MONGO_ATLAS_USER }:${ process.env.MONGO_ATLAS_PW }@cluster0.4hjfq.mongodb.net/countries?retryWrites=true&w=majority`);
//   })
//
//   it('', function(done) {
//
//   })
//
//   after();
// })


const request = require('supertest');
const app = require('../app');
const { connectMongoDB, getRecordFromDB } = require('../lib/utils');
const china = require('../routes/china');

describe('API requests on app', function() {
  this.timeout(10000);

  before(async function() {
    // set up database
    await connectMongoDB();
  });

  // after(async function() {
  //   await getRecordFromDB();
  // });

  it('should return an expected GET /api/china response', function() {
    return request(app)
      .get('/china')
      .expect(200)
      done();
  });

  it('should return an expected GET /api/japan response', function() {
    return request(app)
      .get('/japan')
      .expect(200)
      done();
  });

  it('should return an expected GET /api/thailand response', function() {
    return request(app)
      .get('/thailand')
      .expect(200)
      done();
  });

  it('should return an expected GET /api/malaysia response', function() {
    return request(app)
      .get('/malaysia')
      .expect(200)
      done();
  });

  it('should return an expected GET /api/singapore response', function() {
    return request(app)
      .get('/singapore')
      .expect(200)
      done();
  });

  it('should return an expected GET /api/south-korea response', function() {
    return request(app)
      .get('/south-korea')
      .expect(200)
      done();
  });
});
