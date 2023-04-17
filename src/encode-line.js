const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  const reg = /(\w)\1*/g;
  let tmp = [...str.matchAll(reg)];
  for (let item of tmp){
    if (item[0].length > 1){
      result+=item[0].length + item[1];
    } else {
      result+=item[1];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
