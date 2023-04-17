const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink(value = '') {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.arr[position - 1]) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
