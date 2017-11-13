'use strict';

const treeNode = module.exports = class {
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
  postOrder(cb) {
    _walk(this);

    function _walk(node) {
      node.children.forEach(_walk);
      cb(node);
    }
  }

  insert(newNode, parentVal) {
    if (!newNode instanceof treeNode) {
      throw new Error('must be a valid Tree Node');
    }

    this.preOrder(node => {
      if(!node) return;
      if(node.val === parentVal) node.children.push(newNode);
      return this;
    });
  }

  prune(val) {
    this.breadthFirst(node => {
      if(!node) return;
      node.children = node.children.filter(child => child.val !== val);
    });
  }

  remove(val) {
    this.breadthFirst(node => {
      if(!node) return;

    });
  }
};
