'use strict';

let treeNode = require('./tree');
require('jest');

describe('Testing treeNode constructor methods', () => {
  describe('Tree root constructor', () => {
    describe('#NEW NODE', () => {
      test('should instantiate a new treeNode', () => {
        let testTree = new treeNode('head', 'title');
        expect(testTree.val).toEqual({'eleName': 'head', 'textContent': 'title'});
      });
    });
    describe('#INSERT NODE', () => {
      test('should insert a new node into the tree', () => {
        let testTreeBody = new treeNode('body', 'header, main, footer');
        let testTreeHeader = new treeNode('header', 'h2, nav');
        let testTreeMain = new treeNode('main', 'section');
        let testTreeFooter = new treeNode('footer', 'p');
        testTreeBody.children = [testTreeHeader, testTreeMain, testTreeFooter];
        expect(testTreeBody.children.length).toBe(3);
      });
    });
  // 
  //     let root = new treeNode(1);
  //     expect(root.children.length).toBeFalsy();
  //     root.insert(new treeNode(2), 1);
  //     expect(root.children.length).not.toBeFalsy();
  //     expect(root.children[0].val).toBe(2);
  //
  //   })
  // });


describe('#PRUNE', () => {
  test('should remove child from a node', () => {
    let testTreeBody = new treeNode('body', 'header, main, footer');
    let testTreeHeader = new treeNode('header', 'h2, nav');
    let testTreeMain = new treeNode('main', 'section');
    let testTreeFooter = new treeNode('footer', 'p');
    testTreeBody.children = [testTreeHeader, testTreeMain, testTreeFooter];
    testTreeBody.prune('header');
    expect(testTreeBody.children.length).toBe(2);
  });
});
