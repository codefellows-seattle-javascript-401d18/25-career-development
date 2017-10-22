'use-strict';

const readFile = require('../lib/read');

describe('My FS module', function() {
  test('#READJS', done => {
    readFile.read((data) => {
      expect(data.parsedData).toEqual('hello world');
      done();
    });
  });
});
