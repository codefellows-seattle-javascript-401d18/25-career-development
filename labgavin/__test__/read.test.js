'use-strict';
const bark = require('../lib/read');
// const fs = require('fs');


describe('My FS module', function() {
  test('#READJS', done => {

    bark.read((data) => {
      expect(data.parsedData).toEqual('hello world');
      done();
    });
  });

});
