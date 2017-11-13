'use strict';

const fs = require('fs');
const  treeNode = require('./tree');
// require in TreeNode and Stack
// require in fs & promisify


function htmlParser(filePath) {
  fs.readFileProm(filePath)
  .then(filePath => fileBuff.toString().replace(/\s+/g), '')
  .then(fileStr => fileStr.split('>'));
}
