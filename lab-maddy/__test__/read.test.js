'use-strict';

const readFile = require('../lib/read');

describe('My FS module', function() {
  test('#READ js', done => {
    readFile.read((data) => {
      expect(data.parsedData).toEqual('hello world');
      done();
    });
  });
});
