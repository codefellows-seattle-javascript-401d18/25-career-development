'use strict'

const TreeNode = require('../lib/tree');

describe('Tree constructor methods', () => {
  describe('#NEW NODE', () => {

    test('should return a new tree node at the root', () => {
      let testTree = new TreeNode('head', 'title');
      expect(testTree.val).toEqual({'eleName': 'head', 'textContent': 'title'})
    });
  });
  describe('#INSERTNODE', () => {
    test('should be a child', () => {
      let testTree2 = new TreeNode('body', 'header', 'main', 'footer');
      let testTreea = new TreeNode('header', 'h2', 'nav');
      let testTreeb = new TreeNode('main', 'section');
      let testTreec = new TreeNode('footer', 'p')
      testTree2.children = [testTreea, testTreeb, testTreec];
      expect(testTree2.children.length).toBe(3);

    });
  });
  describe('#PRUNE', () => {
    test('should remove a child node', () => {
      let testTree3 = new TreeNode('body', 'header', 'main', 'footer');
      let testTreea = new TreeNode('header', 'h2', 'nav');
      let testTreeb = new TreeNode('main', 'section');
      let testTreec = new TreeNode('footer', 'p')
      test.Tree3.chidren = [testTreea, testTreeb, testTreec]
      testTree3 .prune('header')
      expect(testTree3.children.length).toBe(2);
    })
  })
})//stay away
