'use strict';

const fs = require('fs');

const file = module.exports = {};


file.read = (cb) => {
  let Filedata;

  fs.readFile(`${__dirname}/../minimal.html`, (err, data) => {
    if(err) console.error(err);
    Filedata = data.toString('utf-8');
    console.log(Filedata);
  });
  return cb;
};
