'use-strict';


const fs = require('fs');
// const TreeNode = require('./tree');
const yolo = module.exports = {};




yolo.read = (callback) => {
  let parsedData;

  fs.readFile(`${__dirname}/../../assets/minimal.html`, (err, data) => {
    if(err) console.error(err);
    parsedData = data.toString('utf-8');
    console.log(parsedData);
  });

  return callback;
};
