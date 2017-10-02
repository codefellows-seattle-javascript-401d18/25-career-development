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

  insert(data, parentVal) {
    let child = new TreeNode(data),
      parent = null,
      cb =
    function(node) {
      if (node.data === parentVal) {
        parent = node;
      }
    };
    this.contains(cb);
    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }

    this.preOrderTraverse(node => {
      if(!node) return;
      if(node.val === parentVal) node.children.push(data);
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
      if(node.val) return;

    });
  }
};
