'use strict';

var TreeNode = module.exports = class {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

  breadthFirstTraverse(cb) {
    let q = [this];
    let current;

    while(q.length) {
      current = q.shift();
      if(cb) cb(current);
      if(current.children.length) q = [...q, ...current.children];
    }
  }

  preOrderTraverse(cb) {
    _walk(this);

    function _walk(node) {
      cb(node);
      node.children.forEach(_walk);
    }
  }

  postOrderTraverse(cb) {
    _walk(this);

    function _walk(node) {
      node.children.forEach(_walk);
      cb(node);
    }
  }

  insert(newNode, parentVal) {
    if (!newNode instanceof TreeNode) {
      throw new Error('must be a valid Tree Node');
    }

    this.preOrderTraverse(node => {
      if(!node) return;
      if(node.val === parentVal) node.children.push(newNode);
      return this;
    });
  }

  prune(val) {
    this.breadthFirstTraverse(node => {
      if(!node) return;
      node.children = node.children.filter(child => child.val !== val);
    });
  }

  remove(val) {
    this.breadthFirstTraverse(node => {
      if(!node) return;

      //Fill in//
    });
  }
};
