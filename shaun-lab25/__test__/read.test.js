'use strict';

const treeTest = require('../lib/read');

describe('My file module', function () {
  test('#readjs', done => {

    treeTest.read((data) => {
      expect(data.parsedData).toEqual('hello world');
      done();
    });
  });
});
