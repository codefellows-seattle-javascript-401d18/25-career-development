'use strict';

// const fs = require('fs');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});
const Tree = require('./lib/tree.js');
const Stack = require('./lib/stacks.js');

let filePath = `${__dirname}/../assets/minimal.html`;

let arrElements = ['this', 'is', 'an', 'array'];

function parserHtml(filePath){
  fs.readFileProm(filePath)
    .then(fileBuff => {
      arrElements = fileBuff.toString().replace(/\s+/g, '').split('>');
      tagChecker(arrElements[0])
        .then(buildTree(new Tree(), arrElements)
          .then(tree => {
            console.log(tree);
            return tree;
          })
          .catch(
            err => {
              if(err !== '!DOCTYPEhtml') {
                throw new Error('This is not an HTML document');
              }
            })
        );
    });
}

function buildTree(tree, arr) {
  return new Promise((resolve, reject) => {
    let stack = new Stack;
    arr.map(ele => tagChecker(ele)
      .then(tag => {
        if(!tree.val) {
          tree.val = {
            eleName: tag,
            textContent: '',
          };
          stack.push(tag);
          console.log(stack.peek());
        } else {
          tree.insert(
            new Tree({
              eleName: tag,
              textContent: '',
            }),
            tree.val
          );
          stack.push(tag);
          console.log('stack ', stack.peek());
        }
      })
      .catch(close => console.log(close))
    );
    resolve(tree);
  });
}

function tagChecker(str) {
  return new Promise((resolve, reject) => {
    let checkTag = str.split('');
    if(checkTag[0] === '<' && checkTag[1] !== '/') {
      checkTag.shift();
      checkTag = checkTag.join('');
      resolve(checkTag);
    } else reject(checkTag.join(''));
  });
}

parserHtml(filePath);
