'use strict';
const daData = require('../lib/read');

describe('The FS module', function() {
  test('#READJS', done => {

    daData.read((data) => {
      expect(data.parsedData).toEqual('scott was here, totally kidding.... you were never here');
      done();
    });
  });
});
