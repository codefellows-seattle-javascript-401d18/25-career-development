'use strict';

const treeNodeTest = require('../lib/tree');

describe('Tree constructor method', function () {

  describe('#Tree Root constructor', function () {
    describe('#New Node', function () {

      test('should return a new root tree node', () => {
        let testTree = new treeNodeTest('head', 'title');
        expect(testTree.val).toEqual({'eleName': 'head', 'textContent': 'title'});

      });
    });

    describe('#Insertnewnode', () => {
      test('should become a child node', () => {
        let testTree2 = new treeNodeTest('body', 'header, main, footer');
        let testTreeS = new treeNodeTest('header', 'H2, nav');
        let testTreeH = new treeNodeTest('main', 'section');
        let testTreeA = new treeNodeTest('footer', 'p');
        testTree2.children = [testTreeS, testTreeH, testTreeA];
        expect(testTree2.children.length).toBe(3);
      });
    });
    describe('#Prune', () => {
      test('should remove child from given node', () => {
        let testTree3 = new treeNodeTest('body', 'header, main, footer');
        let testTreeS = new treeNodeTest('header', 'H2, nav');
        let testTreeH = new treeNodeTest('main', 'section');
        let testTreeA = new treeNodeTest('footer', 'p');
        testTree3.children = [testTreeS, testTreeH, testTreeA];
        testTree3.prune('header')
        expect(testTree3.children.length).toBe(2);
      });
    });
  });
});
