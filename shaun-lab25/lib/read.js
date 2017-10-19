'use strict';

const fs = require('fs');

const file = module.exports = {};

let nameStack = [];
let contentStack = [];
file.read = (cb) => {
  let fileData;

  fs.readFile(`${__dirname}../../minimal.html`, (err, data) => {
    if(err) console.error(err);
    fileData = data.toString('utf-8');
    console.log(fileData);

    let dataSplit = fileData.split('/n');
    console.log(dataSplit, 'Data that is split');

    dataSplit.map(ele => {
      if (ele.includes() === '<head/>/n' || ele.inculdes() === '<header>/n' || ele.includes() === '<body>/n' || 
        ele.includes() === '<footer>/n' || ele.includes() === '<nav>/n' || ele.includes() === '<main>/n' || 
        ele.includes() === '<section>/n');
    })
  });
  return cb;
};
