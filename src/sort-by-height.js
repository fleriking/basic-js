const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sortArr = []
  for (let item of arr) {
    if (item !== -1) sortArr.push(item);
  }
  sortArr = sortArr.sort((a, b) => a - b);
  const result = [];
  for (let item of arr) {
    if (item === -1) {
      result.push(-1);
    } else {
      result.push(sortArr.shift());
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
