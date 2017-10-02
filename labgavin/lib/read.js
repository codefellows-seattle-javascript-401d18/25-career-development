'use-strict';


const fs = require('fs');
// const TreeNode = require('./tree');
const yolo = module.exports = {};



// let createNewTree = function(name, content){
//   let tree = new TreeNode('name', 'content');
// };

let nameStack = [];
let contentStack = [];

yolo.read = (callback) => {
  let parsedData;

  fs.readFile(`${__dirname}/../../assets/minimal.html`, (err, data) => {
    if(err) console.error(err);
    parsedData = data.toString('utf-8');
    console.log(parsedData);

    let splitData = parsedData.split('/n');
    console.log(splitData, 'splitData');

    splitData.map(ele => {
      if (ele.includes() === '<head>/n' || ele.includes() === '<header>/n' || ele.includes() === '<body>/n' || ele.includes() === '<footer>/n' || ele.includes() === '<nav>/n' || ele.includes() === '<main>/n' || ele.includes() === '<section>/n')
      {
        nameStack.push(ele);
      } else if (ele.includes() === '<h2>' || ele.includes() === '<li>' || ele.includes() === '<p>') {
        contentStack.push(ele);
      }
    });
    console.log(nameStack, contentStack);
  });

  return callback;
};
