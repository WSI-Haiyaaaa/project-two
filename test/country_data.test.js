"use strict";
/* global describe, it */
const assert = require("assert").strict;

const { fetchData } = require('../script/fetch_data');

let url = `https://travelbriefing.org/China?format=json`;

describe('test_country_data', function() {
  // this.timeout(50000);

  describe('fetchData()', () => {
    it('should return country name', async () => {
      const result = await fetchData(url);
      assert.equal(result.names.name, "China");
    });

    it('should return language', async () => {
      const result = await fetchData(url);
        assert.equal(result.language[0].language, 'Chinese');
        assert.equal(result.language[1].language, 'Cantonese');
        assert.equal(result.language[2].language, 'Shanghaiese');
        assert.equal(result.language[3].language, 'Minnan');
        assert.equal(result.language[4].language, 'Xiang');
        assert.equal(result.language[5].language, 'Gan');
    });

    it('should return electricity', async () => {
      const result = await fetchData(url);
      assert.equal(result.electricity.frequency, '50');
      assert.equal(result.electricity.plugs[0], 'A');
      assert.equal(result.electricity.plugs[1], 'C');
      assert.equal(result.electricity.plugs[2], 'I');
      assert.equal(result.electricity.voltage, '220');
    });

    it('should return telephone', async () => {
      const result = await fetchData(url);
      assert.equal(result.telephone.ambulance, '120');
      assert.equal(result.telephone.calling_code, '86');
      assert.equal(result.telephone.fire, '119');
      assert.equal(result.telephone.police, '110');
    });

    it('should return water', async () => {
      const result = await fetchData(url);
      assert.equal(result.water.short, 'not safe');
      });

    it('should return vaccinations', async () => {
      const result = await fetchData(url);
      assert.equal(result.vaccinations[0].name, 'Malaria');
      assert.equal(result.vaccinations[1].name, 'Hepatitis A');
      assert.equal(result.vaccinations[2].name, 'Hepatitis B');
      assert.equal(result.vaccinations[3].name, 'Tyfoid');
      assert.equal(result.vaccinations[4].name, 'DTP');
    });

    it('should return currency', async () => {
      const result = await fetchData(url);
      assert.equal(result.currency.name, 'Yuan Renminbi');
      assert.equal(result.currency.code, 'CNY');
    });

    it('should return neighbors', async () => {
      const result = await fetchData(url);
      assert.equal(result.neighbors[0].name, 'Mongolia');
      assert.equal(result.neighbors[1].name, 'Laos');
      assert.equal(result.neighbors[2].name, 'Russia');
      assert.equal(result.neighbors[3].name, 'Vietnam');
      assert.equal(result.neighbors[4].name, 'Bhutan');
    });
  });

});
