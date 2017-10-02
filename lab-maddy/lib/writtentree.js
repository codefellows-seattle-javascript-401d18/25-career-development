'use strict';

const TreeNode = module.exports = class {
  constructor(name, content) {
    this.val = val;
    this.children = [];
  }

  breadthFirst(cb) {
    let q = [this];
    let current;

    while(q.length) { //looping through length of the queue
      current = q.shift(); //removes the first item of the queue
      if(cb) cb(current);
      if(current.children.length) q = [...q, ...current.children]; //merging two queues or arrays
    }
  }

  preOrder(cb) { //start with root, go to left child
    _walk(this); // could also say this.root

    function _walk(node) {
      cb(node); //pass root into callback 
      node.children.forEach(_walk);// for each child call walk/take action on each
    }
  }
};
