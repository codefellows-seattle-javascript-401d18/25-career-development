'use strict';

const TreeNode = require('../lib/sll');
require('jest');

describe('Testing Singly Linked List', function() {
  describe('default properties', () => {
    beforeAll(done => {
      this.sll = new TreeNode();
      done();
    });
    test('should have a head property of null', () => {
      expect(this.sll).toHaveProperty('head');
      expect(this.sll.head).toBeNull();
    });
  });

  describe('#prepend', () => {
    beforeAll(done => {
      this.sll = new TreeNode();
      done();
    });
    describe('add a new node to the head of the list', () => {
      test('should add a new node to Head', () => {
        this.sll.prepend(2);
        expect(this.sll.head.val).toBe(2);
        expect(this.sll.head.next).toBeNull();
      });
      test('should add a second node to the list', () => {
        this.sll.prepend(3);
        expect(this.sll.head.val).toBe(3);
        expect(this.sll.head.next.val).toBe(2);
        expect(this.sll.head.next.next).toBeNull();
      });
    });
  });

  describe('#append', () => {
    beforeAll(done => {
      this.sll = new TreeNode();
      done();
    });
    test('add a node to the tail of the list', () => {
      this.sll.append(4);
      this.sll.append(5);
      this.sll.append(6);
      expect(this.sll.head.next.next.val).toBe(6);
    });
  });

  describe('#reverse', () => {
    beforeAll(done => {
      this.sll = new TreeNode();
      done();
    });
    test('reverse the order', () => {
      this.sll.append(1);
      this.sll.append(2);
      this.sll.append(3);
      this.sll.reverse();
      expect(this.sll.head.val).toBe(3);
      expect(this.sll.head.next.val).toBe(2);
    });
    test('reverse the order, but bigger', () => {
      this.sll.append(14);
      this.sll.append(25);
      this.sll.append(36);
      this.sll.append(47);
      this.sll.append(58);
      this.sll.append(69);
      this.sll.reverse();
      expect(this.sll.head.val).toBe(69);
      expect(this.sll.head.next.val).toBe(58);
      expect(this.sll.head.next.next.val).toBe(47);
      expect(this.sll.head.next.next.next.val).toBe(36);
    });
    test('reverse the order, but with strings:', () => {
      this.sll.append('dragon');
      this.sll.append('blanket');
      this.sll.append('cheese');
      this.sll.reverse();
      expect(this.sll.head.val).toBe('cheese');
      expect(this.sll.head.next.val).toBe('blanket');
    });
  });

  describe('#removeNthNode', () => {
    beforeAll(done => {
      this.sll = new TreeNode();
      this.sll.append(1);
      this.sll.append(2);
      this.sll.append(3);
      this.sll.append(4);
      done();
    });
    test('remove a node', () => {
      this.sll.removeNthNode(3);
      expect(this.sll.head.val).toBe(1);
      expect(this.sll.head.next.val).toBe(2);
      expect(this.sll.head.next.next.val).toBe(4);
    });
  });
});
