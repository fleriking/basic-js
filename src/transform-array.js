const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        // if (i < arr.length -1)
        i++;
        break;
      case '--discard-prev':
        if ((myArr.length > 0) && (i > 1 && (arr[i - 2] !== '--discard-next'))) {
          myArr.pop();
         
        }
        break;
      case '--double-next':
        if (i < (arr.length - 1)) {
          myArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        // if (i===1) myArr.push(arr[0]);
        if (i === 1 || (i > 1 && (arr[i - 2] !== '--discard-next'))) {
          myArr.push(arr[i - 1]);
        }
        break;
      default:
        myArr.push(arr[i]);
        break;
    }

  }
  return myArr;
}

module.exports = {
  transform
};
