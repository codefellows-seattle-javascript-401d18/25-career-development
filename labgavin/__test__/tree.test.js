'use-strict';

const TreeNode = require('../lib/tree');


describe('Tree constructor methods', () => {

  describe('#Tree Root constructor', () => {
    describe('#NEW NODE', () => {

      test('should return a new instance of a tree node ROOT', () => {
        let testTree = new TreeNode('head', 'title');
        expect(testTree.val).toEqual({'eleName': 'head', 'textContent': 'title'});
      });
    });
    describe('#INSERTNODE', () => {
      test('should become a child', () => {
        let testTree2 = new TreeNode('body', 'header, main, footer');
        let testTreeh = new TreeNode('header', 'H2, nav');
        let testTreem = new TreeNode('main', 'section');
        let testTreef = new TreeNode('footer', 'p');
        testTree2.children = [testTreeh, testTreem, testTreef];
        expect(testTree2.children.length).toBe(3);
      });
    });
    describe('#PRUNE', () => {
      test('should remove child from a node', () => {
        let testTree3 = new TreeNode('body', 'header, main, footer');
        let testTreeh = new TreeNode('header', 'H2, nav');
        let testTreem = new TreeNode('main', 'section');
        let testTreef = new TreeNode('footer', 'p');
        testTree3.children = [testTreeh, testTreem, testTreef];
        testTree3.prune('header');
        expect(testTree3.children.length).toBe(2);
      });
    });
  });
});
