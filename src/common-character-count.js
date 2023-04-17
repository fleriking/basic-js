const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arrS1 = s1.split('');
  const arrS2 = s2.split(''); 
  let count = 0;
  for (let indS1 = 0; indS1 < arrS1.length; indS1++){
    for (let indS2 = 0; indS2 < arrS2.length; indS2++){
      if (arrS1[indS1] == arrS2[indS2]){
        count++;
        arrS1[indS1]  = null;
        arrS2[indS2] = null;
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
