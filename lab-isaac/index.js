const TreeNode = module.exports = class {
  constructor(val) {
    this.val = val;
    this.children = []''
  }

  breadthFirst(callback) {
    let q = [this];
    let current;

    while(q.length) {
      current = q.shift();
      if(callback) callback(current);
      if(current.children.length) q = [...q, ...current.children];
    }
  }

  preOrder(callback) {
    _walk(this) // => the root

    function _walk(node) {
      callback(node);
      node.children.forEach(_walk);
    }
  }

  postOrder(callback){
    _walk(this)

    function _walk(node) {
      node.children.forEach(_walk);
      callback(node);
    }
  }

  insert(newNode, parentVal) {
    if(!newNode instanceof TreeNode) throw new Error('must be a valid TreeNode');

    this.preOrder(node => {
      if(!node) return;

      if(node.val === parentVal) node.children.push(newNode);
      return this;
    })
  }

  prune(val) {
    this.breadthFirst(node => {
      if(!node) return
      node.children = node.children.filter(child => child.val !== val);
    })
  }
  remove(val) {
    
  }
}
